import { FlashCardsResponse } from "src/types/FlashCard";

export abstract class CloudantServiceApi {
  abstract async getFlashCards(): Promise<FlashCardsResponse>;
}
