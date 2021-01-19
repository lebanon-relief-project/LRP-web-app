import { Service, Inject } from "typedi";
import { LoggerApi } from "../logger";
import {
  PercentageResponse,
  PercentageCloudantResponse,
} from "src/types/ExperiencePercentage";
import { CloudantService } from ".";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_PERCENTAGE_DB_DEV } from "../statics";
import { PercentageServiceApi } from "./percentage.service.api";

@Service()
export class PercentageService implements PercentageServiceApi {
  private logger: LoggerApi;
  private percentageDb: DocumentScope<PercentageCloudantResponse>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("PercentageService");

    try {
      this.percentageDb = cloudant.use(CLOUDANT_PERCENTAGE_DB_DEV);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async getPercentage(): Promise<PercentageResponse> {
    this.logger.info(`getPercentage(): Getting Percentage from cloudant`);
    // Get percentage from Cloudant
    try {
      const dbResponse = await this.percentageDb.get(
        process.env.EXPERIENCE_PERCENTAGES_DB_DOC_ID
      );
      let response = { default_percentage: dbResponse.default_percentage };

      return response;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(
        `getPercentage: Failed to retrieve percentage`
      );
    }
  }
}
