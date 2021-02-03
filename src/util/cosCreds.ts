import { COS_URL } from "../statics";
import { CosCredentials } from "../types/Cos";

export function getCosCredentials(): CosCredentials {

  const VCAP = JSON.parse(process.env.VCAP_SERVICES);

  if (!VCAP || !VCAP["cloud-object-storage"]) {
    throw new Error("COS credentials missing");
  }
  
  const endpoint = COS_URL;
  const apikey = VCAP["cloud-object-storage"][0].credentials.apikey;
  const resourceInstanceId =
    VCAP["cloud-object-storage"][0].credentials["resource_instance_id"];
  const accessKeyId =
    VCAP["cloud-object-storage"][0].credentials["cos_hmac_keys"][
      "access_key_id"
    ];
  const secretAccessKey =
    VCAP["cloud-object-storage"][0].credentials["cos_hmac_keys"][
      "secret_access_key"
    ];

  return {
    endpoint: endpoint,
    apiKeyId: apikey,
    serviceInstanceId: resourceInstanceId,
    signatureVersion: "v4",
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  };
}
