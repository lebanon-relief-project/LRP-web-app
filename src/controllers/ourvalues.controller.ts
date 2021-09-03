import { Get, JsonController } from "routing-controllers";
import { LoggerApi } from "../logger";
import { HelpService, OurValuesService } from "../services";
import { Inject } from "typedi";
import { FlashCardsResponse } from "src/types/FlashCard";
import { OurValuesCardsResponse } from "src/types/OurValueCard";

@JsonController("/api/ourvalues")
export class OurValuesController {
  @Inject()
  service: OurValuesService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("OurValuesController");
  }

  @Get()
  async getOurValuesCards(): Promise<OurValuesCardsResponse> {
    return this.service.getOurValuesCards();
  }
}
