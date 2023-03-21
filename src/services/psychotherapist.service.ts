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
      if (filter.languages) {
        try {
          const viewResponse = await this.psychotherapistDb.view(
            "therapistsDesignDoc",
            "therapistsByLanguages",
            { keys: filter.languages, include_docs: true }
          );

          viewResponse.rows.map((row) => {
            if (row.doc) {
              response.psychotherapists.push(row.doc);
            }
          });

          const seen = new Set();

          response.psychotherapists = response.psychotherapists.filter((el) => {
            const duplicate = seen.has(el._id);
            seen.add(el._id);
            return !duplicate;
          });

          return response;
        } catch (error) {
          this.logger.error(error);
          throw new InternalServerError(
            `getPsychotherapists: Failed to retrieve psychotherapists`
          );
        }
      }

      return { psychotherapists: [] };
    }
  }
}
