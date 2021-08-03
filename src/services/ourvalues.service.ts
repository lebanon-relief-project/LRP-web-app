import { Inject, Service } from "typedi";
import { HelpServiceApi } from "./help.service.api";
import { LoggerApi } from "../logger";
import { FlashCard, FlashCardsResponse } from "../types/FlashCard";
import { DocumentScope } from "@cloudant/cloudant/types";
import { CloudantService } from ".";
import { InternalServerError } from "routing-controllers";
import {
  CLOUDANT_FLASHCARD_DB_DEV,
  CLOUDANT_OURVALUESCARD_DB,
  COS_FLASHCARD_IMAGE_BUCKET,
  COS_OURVALUESCARD_IMAGE_BUCKET,
} from "../statics";
import { CosService } from "./cos.service";
import { OurValuesServiceApi } from "./ourvalues.service.api";
import { OurValuesCardsResponse } from "src/types/OurValueCard";

@Service()
export class OurValuesService implements OurValuesServiceApi {
  private logger: LoggerApi;
  private ourValueCardDb: DocumentScope<FlashCard>;
  private cos: CosService;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService,
    cos: CosService
  ) {
    this.logger = logger.child("OurValuesService");

    try {
      this.ourValueCardDb = cloudant.use(CLOUDANT_OURVALUESCARD_DB);
      this.cos = cos;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  async getOurValuesCards(): Promise<OurValuesCardsResponse> {
    let response;
    this.logger.info(`getFlashCards(): Getting flashcards from cloudant`);

    // Get flashcards from Cloudant
    try {
      const dbResponse = await this.ourValueCardDb.list({ include_docs: true });
      response = { cards: [] };

      await Promise.all(
        dbResponse.rows.map(async (row) => {
          // use Promise.all() with map to wait for all async before moving on
          if (row.doc) {
            // get image using cosUri
            let img = await this.cos.getPreSignedUrl(
              row.doc.cosUri,
              COS_OURVALUESCARD_IMAGE_BUCKET
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
