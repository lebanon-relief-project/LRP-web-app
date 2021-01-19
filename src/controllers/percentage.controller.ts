import { Get, JsonController, InternalServerError } from "routing-controllers";
import { LoggerApi } from "../logger";
import { PercentageService } from "../services";
import { Inject } from "typedi";
import { PercentageResponse } from "src/types/ExperiencePercentage";

@JsonController("/api/percentage")
export class PercentageController {
  @Inject()
  service: PercentageService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("PercentageController");
  }

  @Get()
  async getPercentage(): Promise<PercentageResponse> {
    try {
      return this.service.getPercentage();
    } catch (exception) {
      throw new InternalServerError(`failed to get percentage`);
    }
  }
}
