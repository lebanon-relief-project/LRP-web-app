import { COS_URL } from "../statics";
import { CosCredentials, RawCosCredentials } from "../types/Cos";

export function getCosCredentials(): CosCredentials {
  let jsonCosCreds: RawCosCredentials;

  try {
    // The COS_CREDS should be a stringified JSON object when running locally
    jsonCosCreds = JSON.parse(process.env.COS_CREDS);
  } catch (error) {
    // If we get here then we are in the CF instance, the COS_CREDS should be a JSON object already
    jsonCosCreds = process.env.COS_CREDS as unknown as RawCosCredentials;
  }

  if (!jsonCosCreds) {
    throw new Error("COS credentials missing");
  }

  const endpoint = COS_URL;
  const apikey = jsonCosCreds.apiKey;
  const resourceInstanceId = jsonCosCreds.resourceInstanceId;
  const accessKeyId = jsonCosCreds.accessKeyId;
  const secretAccessKey = jsonCosCreds.secretAccessKey;

  return {
    endpoint: endpoint,
    apiKeyId: apikey,
    serviceInstanceId: resourceInstanceId,
    signatureVersion: "v4",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  };
}
