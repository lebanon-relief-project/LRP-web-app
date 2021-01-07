import { CosCredentials } from "../types/Cos"

export function getCosCredentials(): CosCredentials {
    const VCAP = JSON.parse(process.env.VCAP_SERVICES);

    if (!VCAP || !VCAP.cloudantNoSQLDB) {
        throw new Error("CLOUDANT_CREDENTIALS missing");
    }
    
    const endpoint = VCAP["cloud-object-storage"][0].url;
    const apikey = VCAP["cloud-object-storage"][0].apikey;
    const resourceInstanceId = VCAP["cloud-object-storage"][0]["resource_instance_id"];

    return {
        endpoint: endpoint,
        apiKeyId: apikey,
        serviceInstanceId: resourceInstanceId
    }
}