import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { LoggerApi } from "../logger";
import { Service, Inject } from "typedi";
import { CloudantService } from ".";
import { FlashCardServiceApi } from "./flashcard.service.api";
import { FlashCardSelection } from "../types/FlashCard";

@Service()
export class FlashCardService implements FlashCardServiceApi {
  private logger: LoggerApi;
  private flashCardSelectionsDb: DocumentScope<FlashCardSelection>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("HelpService");

    try {
      this.flashCardSelectionsDb = cloudant.use("dev_flashcard_select");
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async storeSelections(selections: string[]): Promise<boolean> {
    try {
      await this.flashCardSelectionsDb.insert({
        selected: selections,
        timeStamp: new Date(Date.now()),
      });
      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}
