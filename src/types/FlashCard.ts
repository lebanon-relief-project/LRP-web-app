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

export interface SelectedFlashCards {
  cards: string[];
}

export interface Recommendation {
  title: string;
  body: string;
}

export interface Result extends BaseCloudantDocument {
  expl_title: string;
  expl_body: string;
  image: string;
  recommendations: Recommendation[];
}

export interface ResultsResponse {
  results: Result[];
}
