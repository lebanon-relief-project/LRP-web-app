import { Get, InternalServerError, JsonController } from "routing-controllers";
import { LoggerApi } from "../logger";
import { UsefulTipsService } from "../services";
import { Inject } from "typedi";
import { UsefulTipsResponse } from "src/types/UsefulTips";

@JsonController("/api/useful-tips")
export class UsefulTipsController {
  @Inject()
  service: UsefulTipsService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("UsefulTipsController");
  }

  @Get()
  async getUsefulTips(): Promise<UsefulTipsResponse> {
    try {
      return this.service.getUsefulTips();
    } catch (exception) {
      throw new InternalServerError(`failed to get Useful Tips`);
    }
  }
}
