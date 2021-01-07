import { CosCredentials } from "../types/Cos";
import { getCosCredentials } from "../util/cosCreds";
import { Service } from "typedi";
import {S3} from "ibm-cos-sdk"
import { COS_FLASHCARD_IMAGE_BUCKET } from "../statics";

/*
  This service is used internally to provide cos object operations to other services
  It does not talk directly to the front end (API)
*/
@Service()
export class CosService {
    private cos: S3
    private creds: CosCredentials

    constructor() {
        this.creds = getCosCredentials();
        this.cos = new S3(this.creds);
    }

    getObjects() {
        const params = {
            Bucket: COS_FLASHCARD_IMAGE_BUCKET,
            Key: this.creds.apiKeyId
        }

        return this.cos.getObject(params, function(err, data) {c
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          });
    }
}