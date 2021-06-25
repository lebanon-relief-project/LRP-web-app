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
    this.logger = logger.child("HelpService");

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

      let temp = await this.flashCardSelectionsCountsDb.get(
        process.env.FLASHCARD_COUNTS_DB_DOC_ID
      );

      console.log(JSON.stringify(temp, null, 4));

      if (!temp) {
        throw new Error();
      }

      let results = await this.flashCardSelectionsDb.list({
        include_docs: true,
      });

      if (!results) {
        throw new Error();
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
        console.log("counted: " + i);
        await timer(200);
      }

      for (var key in countObj) {
        if (countObj.hasOwnProperty(key)) {
          if (!temp.counts) {
            temp.counts = {};
          }
          temp.counts[key] = temp.counts[key]
            ? temp.counts[key] + countObj[key]
            : countObj[key];
        }
      }

      await this.flashCardSelectionsCountsDb.insert(temp);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
