export interface BaseCloudantDocument {
  _id: string;
  _rev?: string;
}

export interface CloudantCredentials {
  url: string;
  apiKey: string;
}
