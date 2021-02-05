import { Service, Inject } from "typedi";
import { LoggerApi } from "../logger";
import { ResultsResponse, Result } from "src/types/FlashCard";
import { CloudantService } from ".";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { CLOUDANT_RESULTS_DB_DEV, COS_FLASHCARD_RESULT_IMAGE_BUCKET } from "../statics";
import { CosService } from "./cos.service";

@Service()
export class ResultsService {
  private logger: LoggerApi;
  private resultsDb: DocumentScope<Result>;
  private cos: CosService;

  constructor(
    @Inject("logger")
    logger: LoggerApi,
    cloudant: CloudantService,
    cos: CosService
  ) {
    this.logger = logger.child("HelpService");

    try {
      this.resultsDb = cloudant.use(CLOUDANT_RESULTS_DB_DEV);
      this.cos = cos;
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
    let response: ResultsResponse = {results: []};

    // Get results from Cloudant
    try {
      const dbResponse = await this.resultsDb.list({ include_docs: true });
      let filteredResponse = this.filterById(dbResponse, selectedFlashCards);

      // Get pre-signed url's for recommendation images
      await Promise.all(
        filteredResponse.results.map(async (recommendation) => {
          let img = await this.cos.getPreSignedUrl(
            recommendation.image,
            COS_FLASHCARD_RESULT_IMAGE_BUCKET
          );

          recommendation.image = img.preSignedUrl;

          response.results.push(recommendation);
        })
      )
      
      return response;
    } catch (err) {
      this.logger.error(err);
      throw new InternalServerError(`getResults: Failed to retrieve results`);
    }
  }
}
