import { LoggerApi } from "../logger";
import { Inject, Service } from "typedi";
import { CloudantServiceApi } from "./cloudant.service.api";
import { FlashCardsResponse } from "../types/FlashCard";
import { sampleFlashCardsResponse } from "../types/sampleData/FlashCardSampleData";

@Service()
export class CloudantService implements CloudantServiceApi {
  constructor(@Inject("logger") private logger: LoggerApi) {
    this.logger = logger.child("CloudantService");
  }

  async getFlashCards(): Promise<FlashCardsResponse> {
    this.logger.info(`getFlashCards(): Getting flashcards from cloudant`);

    const sampleResponse = sampleFlashCardsResponse;

    return sampleResponse;
  }
}
