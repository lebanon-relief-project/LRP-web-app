import { BaseCloudantDocument } from "./Cloudant";

export interface OurValuesCard extends BaseCloudantDocument {
  title: string;
  body: string;
  image: string;
  cosUri: string;
}

export interface OurValuesCardsResponse {
  cards: OurValuesCard[];
}
