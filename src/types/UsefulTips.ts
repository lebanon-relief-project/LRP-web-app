import { BaseCloudantDocument } from "./Cloudant";

export interface UsefulTip {
  title: string;
  body: string;
}

export interface UsefulTipsCloudantResponse extends BaseCloudantDocument {
  usefulTips: UsefulTip[];
}

export interface UsefulTipsResponse {
  usefulTips: UsefulTip[];
}
