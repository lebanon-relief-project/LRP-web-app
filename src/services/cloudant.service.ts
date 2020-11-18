import { DocumentScope, ServerScope } from "@cloudant/cloudant";
import * as Cloudant from "@cloudant/cloudant";
import { Service } from "typedi";

import { CloudantCredentials } from "../types/Cloudant";
import { getCredentials } from "../util/cloudantCreds";

/*
  This service is to be used internally and does not talk directly to the internet
*/
@Service()
export class CloudantService {
  private connection: ServerScope;

  constructor() {
    const creds: CloudantCredentials = getCredentials();
    const cloudant = Cloudant(creds);
    this.connection = cloudant;
  }

  use<T>(database: string): DocumentScope<T> {
    return this.connection.use(database);
  }
}
