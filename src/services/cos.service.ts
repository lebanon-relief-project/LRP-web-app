import { CosCredentials } from "../types/Cos";
import { getCosCredentials } from "../util/cosCreds";
import { Inject, Service } from "typedi";
import {S3} from "ibm-cos-sdk"
import { COS_FLASHCARD_IMAGE_BUCKET } from "../statics";
import { LoggerApi } from "../logger";
import { InternalServerError } from "routing-controllers";

/*
  This service is used internally to provide cos object operations to other services
  It does not talk directly to the front end (API)
*/
@Service()
export class CosService {
    private logger: LoggerApi;
    private cos: S3
    private creds: CosCredentials

    constructor(
        @Inject("logger")
        logger: LoggerApi
    ) {
        this.logger = logger.child("CosService")
        this.creds = getCosCredentials();
        this.cos = new S3(this.creds);
    }

    async getFlashcardImage(imageId: string): Promise<S3.GetObjectOutput> {
        try {
            console.log("image", imageId)
            const cosImage = await this.cos
              .getObject({ Key: imageId, Bucket: COS_FLASHCARD_IMAGE_BUCKET })
              .promise();
      
            return cosImage;
          } catch (error) {
            this.logger.error(error);
            throw new InternalServerError(
              "Retrieving images from Cloud Object Store has failed"
            );
          }
    }
}