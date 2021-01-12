import {
  Get,
  JsonController,
  BodyParam,
  BadRequestError,
  InternalServerError,
} from "routing-controllers";
import { LoggerApi } from "../logger";
import { HelpService, ResultsService } from "../services";
import { Inject } from "typedi";
import { ResultsResponse, SelectedFlashCards } from "src/types/FlashCard";

@JsonController("/api/results")
export class ResultsController {
  @Inject()
  service: ResultsService;

  @Inject("logger")
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child("ResultsController");
  }

  @Get()
  async getResults(
    @BodyParam("selectedFlashCards") selectedFlashCards: SelectedFlashCards
  ): Promise<ResultsResponse> {
    if (
      !selectedFlashCards ||
      !selectedFlashCards.cards ||
      selectedFlashCards.cards.length === 0
    )
      throw new BadRequestError(`Bad argument`);

    try {
      return this.service.getResults(selectedFlashCards.cards);
    } catch (exception) {
      throw new InternalServerError(`failed to get results`);
    }
  }
}
