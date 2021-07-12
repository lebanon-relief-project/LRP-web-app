import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { LoggerApi } from "../logger";
import { Service, Inject } from "typedi";
import { CloudantService } from ".";
import { FlashCardServiceApi } from "./flashcard.service.api";
import {
  FlashCardSelection,
  FlashCardSelectionCloudant,
  FlashCardSelectionCount,
} from "../types/FlashCard";
import {
  CLOUDANT_FLASHCARD_SELECT_COUNTS_DB_DEV,
  CLOUDANT_FLASHCARD_SELECT_DB_DEV,
} from "../statics";

const insertInterval: number = 200;
const viewName: string = "selections_by_counted";
const designName: string = "selections_by_counted";

@Service("FlashCardService")
export class FlashCardService implements FlashCardServiceApi {
  private logger: LoggerApi;
  private flashCardSelectionsDb: DocumentScope<FlashCardSelection>;
  private flashCardSelectionsCountsDb: DocumentScope<FlashCardSelectionCount>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("FlashCardService");

    try {
      this.flashCardSelectionsDb = cloudant.use(
        CLOUDANT_FLASHCARD_SELECT_DB_DEV
      );
      this.flashCardSelectionsCountsDb = cloudant.use(
        CLOUDANT_FLASHCARD_SELECT_COUNTS_DB_DEV
      );
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

  async countSelections(): Promise<boolean> {
    try {
      let countObj: { [key: string]: number } = {};

      let counterObjectDB = await this.flashCardSelectionsCountsDb.get(
        process.env.FLASHCARD_COUNTS_DB_DOC_ID
      );

      let results = await this.flashCardSelectionsDb.view(
        designName,
        viewName,
        { include_docs: true }
      );

      if (!results || !counterObjectDB) {
        throw new Error("failed to get database objects");
      }

      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      for (var i = 0; i < results.rows.length; i++) {
        let row = results.rows[i];

        if (row.doc) {
          let entry: FlashCardSelectionCloudant = { ...row.doc };

          if (!entry.counted) {
            entry.selected.forEach((selection) => {
              countObj[selection] = countObj[selection]
                ? countObj[selection] + 1
                : 1;
            });

            entry.counted = true;

            await this.flashCardSelectionsDb.insert(entry);
          }
        }

        await timer(insertInterval);
      }

      for (var key in countObj) {
        if (countObj.hasOwnProperty(key)) {
          if (!counterObjectDB.counts) {
            counterObjectDB.counts = {};
          }
          counterObjectDB.counts[key] = counterObjectDB.counts[key]
            ? counterObjectDB.counts[key] + countObj[key]
            : countObj[key];
        }
      }

      await this.flashCardSelectionsCountsDb.insert(counterObjectDB);

      return true;
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}
