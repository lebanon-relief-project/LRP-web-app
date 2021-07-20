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

  async getPsychotherapists(): Promise<PsychotherapistResponse> {
    let response;
    this.logger.info(
      `getPsychotherapists(): Getting psychotherapists from cloudant`
    );

    // Get psychotherapists from Cloudant
    try {
      const dbResponse = await this.psychotherapistDb.list({
        include_docs: true,
      });
      response = { psychotherapists: [] };

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
  }
}
