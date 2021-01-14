import { Service, Inject } from "typedi";
import { LoggerApi } from "../logger";
import { ResultsResponse, Result } from "src/types/FlashCard";
import { CloudantService } from ".";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_RESULTS_DB_DEV } from "../statics";

@Service()
export class ResultsService {
  private logger: LoggerApi;
  private resultsDb: DocumentScope<Result>;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService
  ) {
    this.logger = logger.child("HelpService");

    try {
      this.resultsDb = cloudant.use(CLOUDANT_RESULTS_DB_DEV);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError("Cloudant unavailable");
    }
  }

  filterById(dbResponse, selectedFlashCards): ResultsResponse {
    let response = { results: [] };
    dbResponse.rows.map((row) => {
      if (selectedFlashCards.includes(row.id)) {
        response.results.push(row.doc);
      }
    });
    return response;
  }

  async getResults(selectedFlashCards: string[]): Promise<ResultsResponse> {
    this.logger.info(`getResults(): Getting results from cloudant`);

    // Get results from Cloudant
    try {
      const dbResponse = await this.resultsDb.list({ include_docs: true });

      return this.filterById(dbResponse, selectedFlashCards);
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(`getResults: Failed to retrieve results`);
    }
  }
}
