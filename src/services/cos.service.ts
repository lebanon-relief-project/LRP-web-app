import { CosCredentials, PreSignedUrlResponse } from "../types/Cos";
import { getCosCredentials } from "../util/cosCreds";
import { Inject, Service } from "typedi";
import { S3 } from "ibm-cos-sdk";
import { LoggerApi } from "../logger";
import { InternalServerError } from "routing-controllers";
import { PRESIGNED_URL_EXPIRY } from "../statics";

/*
  This service is used internally to provide cos object operations to other services
  It does not talk directly to the front end (API)
*/
@Service()
export class CosService {
  private logger: LoggerApi;
  private cos: S3;
  private config: CosCredentials;

  constructor(
    @Inject("logger")
    logger: LoggerApi
  ) {
    this.logger = logger.child("CosService");
    try {
      this.config = getCosCredentials();
      this.logger.info(`CONFIG: ${this.config}`)
      this.cos = new S3(this.config);
    } catch (err) {
      this.logger.error(`COS FAILED: ${err}`);
    }
  }

  async getImage(imageId: string, bucket: string): Promise<S3.GetObjectOutput> {
    this.logger.info(
      `getFlashcardImage(): Getting flashcards image (${imageId}) from cos (${bucket})`
    );

    try {
      const cosImage = await this.cos
        .getObject({ Key: imageId, Bucket: bucket })
        .promise();

      return cosImage;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerError(
        "Retrieving images from Cloud Object Store has failed"
      );
    }
  }

  async getPreSignedUrl(
    cosFileName: string,
    bucketName: string
  ): Promise<PreSignedUrlResponse> {
    let response: PreSignedUrlResponse = {
      cosUri: cosFileName,
      preSignedUrl: undefined,
    };

    try {
      const result = await this.cos.getSignedUrlPromise("getObject", {
        Bucket: bucketName,
        Key: cosFileName,
        Expires: PRESIGNED_URL_EXPIRY,
      });

      response.preSignedUrl = result;

      return response;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerError(
        "Retrieving pre-signed url from Cloud Object Store has failed"
      );
    }
  }
}
