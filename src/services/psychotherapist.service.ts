import { Inject, Service } from "typedi";
import { PsychotherapistServiceApi } from "./psychotherapist.service.api";
import { LoggerApi } from "../logger";
import {
  Psychotherapist,
  PsychotherapistResponse,
} from "../types/Psychotherapist";
import { DocumentScope } from "@cloudant/cloudant/types";
import { CloudantService } from ".";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_PSYCHOTHERAPISTS_DB_DEV } from "../statics";
import { FilterType } from "src/types/Filter";

var _ = require("lodash");

async function getTherapistsByName(
  name: string,
  dbInstance: DocumentScope<Psychotherapist>
) {
  const psychotherapists = [];
  console.log(name);

  const viewResponse = await dbInstance.view(
    "therapistsDesignDoc",
    "therapistsByName",
    {
      startkey: name,
      endkey: name + "\ufff0",
      include_docs: true,
    }
  );

  viewResponse.rows.map((row) => {
    if (row.doc) {
      psychotherapists.push(row.doc);
    }
  });

  return psychotherapists;
}

async function getTherapistsFromView(
  viewName: string,
  keys: any = [],
  dbInstance: DocumentScope<Psychotherapist>
) {
  const psychotherapists = [];

  const viewResponse = await dbInstance.view("therapistsDesignDoc", viewName, {
    keys: keys,
    include_docs: true,
  });

  viewResponse.rows.map((row) => {
    if (row.doc) {
      psychotherapists.push(row.doc);
    }
  });

  return psychotherapists;
}

@Service()
export class PsychotherapistService implements PsychotherapistServiceApi {
  private logger: LoggerApi;
  private psychotherapistDb: DocumentScope<Psychotherapist>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("PsychotherapistService");

    try {
      this.psychotherapistDb = cloudant.use(CLOUDANT_PSYCHOTHERAPISTS_DB_DEV);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async getTherapistsLocations(): Promise<string[]> {
    try {
      const response = await this.psychotherapistDb.view(
        "therapistsDesignDoc",
        "therapistsByLocation",
        {
          include_docs: true,
        }
      );

      const locations = response.rows.map((row) => {
        return row.key;
      });

      // Use Set to remove duplicates and then convert it back to an array
      const uniqueLocations = Array.from(new Set(locations));

      return uniqueLocations;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(error.message);
    }
  }

  async getPsychotherapists(
    filter?: FilterType
  ): Promise<PsychotherapistResponse> {
    let response;
    this.logger.info(
      `getPsychotherapists(): Getting psychotherapists from cloudant`
    );
    this.logger.info(filter);

    response = { psychotherapists: [] };

    if (!filter) {
      // Get psychotherapists from Cloudant
      try {
        const dbResponse = await this.psychotherapistDb.list({
          include_docs: true,
        });

        await Promise.all(
          dbResponse.rows.map(async (row) => {
            // use Promise.all() with map to wait for all async before moving on
            if (row.doc && row.doc._id !== "_design/therapistsDesignDoc") {
              response.psychotherapists.push(row.doc);
            }
          })
        );

        return response;
      } catch (err) {
        this.logger.error(err);
        throw new InternalServerError(
          `getPsychotherapists: Failed to retrieve psychotherapists`
        );
      }
    } else {
      const availableViews = {
        languages: "therapistsByLanguages",
        appointments: "therapistsByAppointments",
        services: "therapistsByServices",
        patientgroups: "therapistsByPatientGroups",
        price: "therapistsByPrice",
        legalpersonality: "therapistsByLegalPersonality",
        location: "therapistsByLocation",
      };

      const allPsychotherapists = {};

      for (const key in filter) {
        if (key === "name") continue;
        if (filter[key]) {
          try {
            let psychotherapists;
            if (
              key === "location" &&
              Array.isArray(filter[key]) &&
              filter[key].includes("across-lebanon")
            ) {
              console.log("Fetching all therapists");
              // Fetch all location keys
              const allLocations = await this.getTherapistsLocations();
              // Remove 'online' from the location keys
              const locationKeys = allLocations.filter(
                (location) => location !== "online"
              );
              // Fetch therapists for all locations except 'online'
              psychotherapists = await getTherapistsFromView(
                availableViews[key],
                locationKeys,
                this.psychotherapistDb
              );
            } else {
              psychotherapists = await getTherapistsFromView(
                availableViews[key],
                filter[key],
                this.psychotherapistDb
              );
            }

            allPsychotherapists[key] = psychotherapists;
          } catch (error) {
            this.logger.error(error);
            throw new InternalServerError(
              "getPsychotherapists: Failed to retrieve psychotherapists"
            );
          }
        }
      }

      if (filter.name) {
        try {
          let psychotherapists = await getTherapistsByName(
            filter.name[0],
            this.psychotherapistDb
          );

          allPsychotherapists["name"] = psychotherapists;
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            `getPsychotherapists: Failed to retrieve psychotherapists`
          );
        }
      }

      const keys = Object.keys(allPsychotherapists);
      if (keys.length > 0) {
        response.psychotherapists = _.intersectionWith(
          ...keys.map((key) => allPsychotherapists[key]),
          _.isEqual
        );
      }

      return response;
    }
  }
}
