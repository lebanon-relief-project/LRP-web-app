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

export interface ResultsCloudant {
  id: string;
  key: string;
  value: object;
  doc: Result;
}

export interface ResultsResponseCloudantResponse {
  total_rows: number;
  offset?: number;
  rows: ResultsCloudant[];
}

export interface ResultsResponse {
  results: Result[];
}
