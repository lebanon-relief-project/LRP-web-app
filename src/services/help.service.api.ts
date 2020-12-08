import { FlashCardsResponse } from "src/types/FlashCard";

export abstract class HelpServiceApi {
  abstract async getFlashCards(): Promise<FlashCardsResponse>;
}
