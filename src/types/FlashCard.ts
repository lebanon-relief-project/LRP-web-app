import { BaseCloudantDocument } from "./Cloudant";

export interface FlashCard extends BaseCloudantDocument {
  title: string;
  body: string;
}

export interface FlashCardsResponse {
  cards: FlashCard[];
}
