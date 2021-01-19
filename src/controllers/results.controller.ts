import {
  Get,
  JsonController,
  BadRequestError,
  InternalServerError,
  QueryParam,
} from "routing-controllers";
import { LoggerApi } from "../logger";
import { HelpService, ResultsService } from "../services";
import { Inject } from "typedi";
import { ResultsResponse } from "src/types/FlashCard";

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
    @QueryParam("selectedFlashCards") selectedFlashCards: string[]
  ): Promise<ResultsResponse> {
    if (!selectedFlashCards || selectedFlashCards.length === 0)
      throw new BadRequestError(`Bad argument`);

    try {
      return this.service.getResults(selectedFlashCards);
    } catch (exception) {
      throw new InternalServerError(`failed to get results`);
    }
  }
}
