import { DocumentScope, ServerScope } from "@cloudant/cloudant";
import * as Cloudant from "@cloudant/cloudant";
import { Service } from "typedi";

import { CloudantCredentials } from "../types/Cloudant";
import { getCredentials } from "../util/cloudantCreds";

/*
  This service is used internally to provide cloudant database operations to other services
  It does not talk directly to the front end (API)
*/
@Service()
export class CloudantService {
  private connection: ServerScope;

  constructor() {
    const creds: CloudantCredentials = getCredentials();
    const cloudant = Cloudant({
      url: creds.url,
      plugins: {
        iamauth: { iamApiKey: creds.apiKey },
      },
    });
    this.connection = cloudant;
  }

  use<T>(database: string): DocumentScope<T> {
    return this.connection.use(database);
  }
}
