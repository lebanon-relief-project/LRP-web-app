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
            if (row.doc) {
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
      };

      const allPsychotherapists = [];

      if (filter.price) {
        try {
          let psychotherapists = await getTherapistsFromView(
            availableViews.price,
            filter.price,
            this.psychotherapistDb
          );

          allPsychotherapists.push(...psychotherapists);
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            "getPsychotherapists: Failed to retrieve psychotherapists"
          );
        }
      }

      if (filter.patientgroups) {
        try {
          let psychotherapists = await getTherapistsFromView(
            availableViews.patientgroups,
            filter.patientgroups,
            this.psychotherapistDb
          );

          allPsychotherapists.push(...psychotherapists);
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            "getPsychotherapists: Failed to retrieve psychotherapists"
          );
        }
      }

      if (filter.appointments) {
        try {
          let psychotherapists = await getTherapistsFromView(
            availableViews.appointments,
            filter.appointments,
            this.psychotherapistDb
          );

          allPsychotherapists.push(...psychotherapists);
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            "getPsychotherapists: Failed to retrieve psychotherapists"
          );
        }
      }

      if (filter.services) {
        try {
          let psychotherapists = await getTherapistsFromView(
            availableViews.services,
            filter.services,
            this.psychotherapistDb
          );

          allPsychotherapists.push(...psychotherapists);
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            "getPsychotherapists: Failed to retrieve psychotherapists"
          );
        }
      }

      if (filter.languages) {
        try {
          let psychotherapists = await getTherapistsFromView(
            availableViews.languages,
            filter.languages,
            this.psychotherapistDb
          );

          allPsychotherapists.push(...psychotherapists);
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            `getPsychotherapists: Failed to retrieve psychotherapists`
          );
        }
      }

      const seen = new Set();

      response.psychotherapists = allPsychotherapists.filter((el) => {
        const duplicate = seen.has(el._id);
        seen.add(el._id);
        return !duplicate;
      });

      return response;
    }
  }
}
