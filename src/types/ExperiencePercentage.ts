import { BaseCloudantDocument } from "./Cloudant";

export interface PercentageResponse {
  default_percentage: number;
}

export interface PercentageCloudantResponse extends BaseCloudantDocument {
  default_percentage: number;
}
