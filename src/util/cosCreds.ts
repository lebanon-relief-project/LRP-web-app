import { COS_URL } from "../statics";
import { CosCredentials } from "../types/Cos";

export function getCosCredentials(): CosCredentials {
  const COS_CREDS = JSON.parse(process.env.COS_CREDS);

  if (!COS_CREDS) {
    throw new Error("COS credentials missing");
  }

  const endpoint = COS_URL;
  const apikey = COS_CREDS.apiKey;
  const resourceInstanceId = COS_CREDS.resourceInstanceId;
  const accessKeyId = COS_CREDS.accessKeyId;
  const secretAccessKey = COS_CREDS.secretAccessKey;

  return {
    endpoint: endpoint,
    apiKeyId: apikey,
    serviceInstanceId: resourceInstanceId,
    signatureVersion: "v4",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  };
}
