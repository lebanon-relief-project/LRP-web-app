import { Inject, Service } from "typedi";
import { UsefulTipsServiceApi } from "./usefulTips.service.api";
import { LoggerApi } from "../logger";
import {
  UsefulTipsCloudantResponse,
  UsefulTipsResponse,
} from "../types/UsefulTips";
import { DocumentScope } from "@cloudant/cloudant/types";
import { CloudantService } from ".";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_USEFUL_TIPS_DB_DEV } from "../statics";

@Service()
export class UsefulTipsService implements UsefulTipsServiceApi {
  private logger: LoggerApi;
  private usefulTipsDb: DocumentScope<UsefulTipsCloudantResponse>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("UsefulTipsService");

    try {
      this.usefulTipsDb = cloudant.use(CLOUDANT_USEFUL_TIPS_DB_DEV);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async getUsefulTips(): Promise<UsefulTipsResponse> {
    this.logger.info(`getUsefulTips(): Getting UsefulTips from cloudant`);

    // Get UsefulTips from Cloudant
    try {
      const dbResponse = await this.usefulTipsDb.get(
        process.env.USEFUL_TIPS_DB_DOC_ID
      );
      let response = { usefulTips: dbResponse.usefulTips };

      return response;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(
        `getUsefulTips: Failed to retrieve Useful Tips`
      );
    }
  }
}
