import { COS_URL } from "../statics";
import { CosCredentials } from "../types/Cos";

export function getCosCredentials(): CosCredentials {
  const VCAP = JSON.parse(process.env.VCAP_SERVICES);

  if (!VCAP) {
    throw new Error("COS credentials missing");
  }

  let endpoint;
  let apikey;
  let resourceInstanceId;
  let accessKeyId;
  let secretAccessKey;

  try {
    endpoint = COS_URL; 
    apikey = VCAP["cloud-object-storage"][0].credentials.apikey.trim();
    resourceInstanceId = VCAP["cloud-object-storage"][0].credentials.resource_instance_id.trim();
    accessKeyId = VCAP["cloud-object-storage"][0].credentials.cos_hmac_keys.access_key_id.trim();
    secretAccessKey = VCAP["cloud-object-storage"][0].credentials.cos_hmac_keys.secret_access_key.trim();
  } catch (error) {
    console.error(error);
  }
  return {
    endpoint: endpoint,
    apiKeyId: apikey,
    serviceInstanceId: resourceInstanceId,
    signatureVersion: "v4",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  };
}
