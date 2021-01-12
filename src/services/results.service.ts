import { Service } from "typedi";
import { LoggerApi } from "src/logger";
import { ResultsResponse, SelectedFlashCards } from "src/types/FlashCard";

@Service()
export class ResultsService {
  private logger: LoggerApi;

  async getResults(selectedFlashCards: string[]): Promise<ResultsResponse> {
    throw new Error("unimplemented");
  }
}
