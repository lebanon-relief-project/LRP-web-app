import { CloudantCredentials } from "../types/Cloudant";

export function getCredentials(): CloudantCredentials {
  const VCAP = JSON.parse(process.env.VCAP_SERVICES);

  if (!VCAP || !VCAP.cloudantNoSQLDB) {
    throw new Error("CLOUDANT_CREDENTIALS missing");
  }

  const apiKey = VCAP.cloudantNoSQLDB[0].credentials.apikey;
  const host = VCAP.cloudantNoSQLDB[0].credentials.url;

  return {
    url: `${host}`,
    apiKey: `${apiKey}`,
  };
}
