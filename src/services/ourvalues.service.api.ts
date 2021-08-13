import { FlashCardsResponse } from "src/types/FlashCard";
import { OurValuesCardsResponse } from "src/types/OurValueCard";

export abstract class OurValuesServiceApi {
  abstract getOurValuesCards(): Promise<OurValuesCardsResponse>;
}
