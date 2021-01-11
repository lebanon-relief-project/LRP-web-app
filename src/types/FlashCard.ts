import { BaseCloudantDocument } from "./Cloudant";

export interface FlashCard extends BaseCloudantDocument {
  title: string;
  body: string;
  image: string;
  cosUri: string;
}

export interface FlashCardsResponse {
  cards: FlashCard[];
}

export interface FlashCardsCloudantResponse {
  total_rows: number;
  offset?: number;
  rows: FlashCardCloudant[];
}

export interface FlashCardCloudant {
  id: string;
  key: string;
  value: object;
  doc: FlashCard;
}
