import { Inject, Service } from "typedi";
import { HelpServiceApi } from "./help.service.api";
import { LoggerApi } from "../logger";
import { FlashCard, FlashCardsResponse } from "../types/FlashCard";
import { DocumentScope } from "@cloudant/cloudant/types";
import { CloudantService } from ".";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_FLASHCARD_DB_DEV, COS_FLASHCARD_IMAGE_BUCKET } from "../statics";
import { CosService } from "./cos.service";

@Service()
export class HelpService implements HelpServiceApi {
  private logger: LoggerApi;
  private flashCardDb: DocumentScope<FlashCard>;
  private cos: CosService;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService,
    cos: CosService
  ) {
    this.logger = logger.child("HelpService");

    try {
      this.flashCardDb = cloudant.use(CLOUDANT_FLASHCARD_DB_DEV);
      this.cos = cos;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async getFlashCards(): Promise<FlashCardsResponse> {
    let response;
    this.logger.info(`getFlashCards(): Getting flashcards from cloudant`);

    // Get flashcards from Cloudant
    try {
      const dbResponse = await this.flashCardDb.list({ include_docs: true });
      response = { cards: [] };

      await Promise.all(
        dbResponse.rows.map(async (row) => {
          // use Promise.all() with map to wait for all async before moving on
          if (row.doc) {
            // get image using cosUri
            let img = await this.cos.getPreSignedUrl(
              row.doc.cosUri,
              COS_FLASHCARD_IMAGE_BUCKET
            );

            // add svg to card
            row.doc.image = img.preSignedUrl;

            response.cards.push(row.doc);
          }
        })
      );

      return response;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(
        `getFlashCards: Failed to retrieve flash cards`
      );
    }
  }
}
