import { COS_URL } from "../statics";
import { CosCredentials } from "../types/Cos";

export function getCosCredentials(): CosCredentials {

  // We now pull these as individual variables due to pipeline issues
  const endpoint = COS_URL;
  const apikey = process.env.COS_CREDS_APIKEY;
  const resourceInstanceId = process.env.COS_CREDS_RESOURCEINSTANCEID;
  const accessKeyId = process.env.COS_CREDS_ACCESSKEYID;
  const secretAccessKey = process.env.COS_CREDS_SECRETACCESSKEY;

  return {
    endpoint: endpoint,
    apiKeyId: apikey,
    serviceInstanceId: resourceInstanceId,
    signatureVersion: "v4",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  };
}
