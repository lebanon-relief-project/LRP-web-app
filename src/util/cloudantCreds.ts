import { CloudantCredentials } from "../types/Cloudant";

export function getCredentials(): CloudantCredentials {
  if (!process.env.CLOUDANT_HOST || !process.env.CLOUDANT_API_KEY) {
    throw new Error("CLOUDANT_CREDENTIALS missing");
  }

  return {
    url: `https://${process.env.CLOUDANT_HOST}`,
    apiKey: `${process.env.CLOUDANT_API_KEY}`,
  };
}
