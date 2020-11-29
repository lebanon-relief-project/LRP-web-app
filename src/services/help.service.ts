import { Inject, Service } from "typedi";

import { HelpServiceApi } from "./help.service.api";
import { LoggerApi } from "../logger";
import { FlashCard, FlashCardsResponse } from "../types/FlashCard";
import { sampleFlashCardsResponse } from "../types/sampleData/FlashCardSampleData";
import { DocumentScope } from "@cloudant/cloudant/types";
import { CloudantService } from ".";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_FLASHCARD_DB_DEV } from "../statics";

@Service()
export class HelpService implements HelpServiceApi {
  private logger: LoggerApi;
  private flashCardDb: DocumentScope<FlashCard>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("HelpService");

    try {
      this.flashCardDb = cloudant.use(CLOUDANT_FLASHCARD_DB_DEV);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Service unavailable");
    }
  }

  async getFlashCards(): Promise<FlashCardsResponse> {
    this.logger.info(`getFlashCards(): Getting flashcards from cloudant`);

    try {
      const dbResponse = await this.flashCardDb.list({ include_docs: true });
      const response = { cards: [] };

      // _rev should not be returned to client
      dbResponse.rows.forEach((row) => {
        if (row.doc) response.cards.push(row.doc);
      });

      return response;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(
        `getFlashCards: Failed to retrieve flash cards from cloudant`
      );
    }
  }
}
