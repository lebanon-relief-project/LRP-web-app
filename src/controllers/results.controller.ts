import {
  Get,
  JsonController,
  BadRequestError,
  InternalServerError,
  QueryParam,
} from "routing-controllers";
import { LoggerApi } from "../logger";
import { FlashCardService, HelpService, ResultsService } from "../services";
import { Inject } from "typedi";
import { ResultsResponse } from "src/types/FlashCard";

@JsonController("/api/results")
export class ResultsController {
  @Inject()
  service: ResultsService;

  @Inject("FlashCardService")
  flashcardService: FlashCardService;

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
      let promises = [];

      promises.push(this.flashcardService.storeSelections(selectedFlashCards));
      promises.push(this.service.getResults(selectedFlashCards));

      let promisesResults = await Promise.all(promises);

      if (promisesResults[0]) {
        return promisesResults[1];
      } else {
        this.logger.error("failed to store selections");
        throw new Error("failed to store selections");
      }

      // should also store the selection in our database
    } catch (exception) {
      throw new InternalServerError(`failed to get results`);
    }
  }
}
