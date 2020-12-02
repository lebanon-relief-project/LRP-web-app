import { Get, JsonController } from "routing-controllers";
import { LoggerApi } from "../logger";
import { HelpService } from "../services";
import { Inject } from "typedi";
import { FlashCardsResponse } from "src/types/FlashCard";

@JsonController("/api/flashcards")
export class HelpController {
  @Inject()
  service: HelpService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("HelpController");
  }

  @Get()
  async getFlashCards(): Promise<FlashCardsResponse> {
    return this.service.getFlashCards();
  }
}
