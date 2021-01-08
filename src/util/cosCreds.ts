import { CosCredentials } from "../types/Cos"

export function getCosCredentials(): CosCredentials {
    const VCAP = JSON.parse(process.env.VCAP_SERVICES);

    if (!VCAP || !VCAP["cloud-object-storage"]) {
      throw new Error("COS credentials missing");
    }
    
    const endpoint = VCAP["cloud-object-storage"][0].credentials.url;
    const apikey = VCAP["cloud-object-storage"][0].credentials.apikey;
    const resourceInstanceId =
      VCAP["cloud-object-storage"][0].credentials["resource_instance_id"];

    return {
        endpoint: endpoint,
        apiKeyId: apikey,
        serviceInstanceId: resourceInstanceId
    }
}