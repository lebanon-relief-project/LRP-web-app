import { S3 } from "ibm-cos-sdk";
import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { COS_FLASHCARD_IMAGE_BUCKET } from "../statics";
import * as cosCredsHelper from "../util/cosCreds";
import { MockLogger } from "../util/test-util";
import { CosService } from "./cos.service";

const mockGetObject = jest.fn();
const mockGetObjectPromise = jest.fn();
const mockGetSignedUrlPromise = jest.fn();

const fakeImageDataString = "fakedata";
const fakeImageData = new Buffer(fakeImageDataString);

mockGetObject.mockImplementation(() => {
  return { promise: mockGetObjectPromise };
});

jest.mock("ibm-cos-sdk", () => {
  return {
    S3: jest.fn(() => ({
      getObject: mockGetObject,
      getSignedUrlPromise: mockGetSignedUrlPromise
    })),
  };
});

const getCredentialsMock = jest.spyOn(cosCredsHelper, "getCosCredentials");

getCredentialsMock.mockImplementation(() => {
  return {
    endpoint: "test.com",
    apiKeyId: "test",
    serviceInstanceId: "test",
    signatureVersion: "test",
    accessKeyId: "test",
    secretAccessKey: "test",
  };
});

Container.set("logger", new MockLogger());

let cosService: CosService = Container.get(CosService);

describe("getImage", () => {
  const imageId = "1234.jpg";
  let response: S3.GetObjectOutput;

  describe("the getImage function", () => {
    describe("the COS call was successful", () => {
      beforeEach(async () => {
        mockGetObjectPromise.mockResolvedValue({ Body: fakeImageData });
        response = await cosService.getImage(imageId, COS_FLASHCARD_IMAGE_BUCKET);
      });
  
      it("should call getObject on ibm-cos-sdk with the correct key and bucket", () => {
        const expectedGetObjectArg = {
          Key: imageId,
          Bucket: COS_FLASHCARD_IMAGE_BUCKET,
        };
  
        expect(mockGetObject).toBeCalledTimes(1);
        expect(mockGetObject).toBeCalledWith(expectedGetObjectArg);
      });
  
      it("should return the response from COS", () => {
        expect(response).toEqual({ Body: fakeImageData });
      });
    });
  
    describe("the COS call is unsuccessful", () => {
      it("should throw an InternalServerError", async () => {
        mockGetObjectPromise.mockRejectedValue("");
        await expect(
          cosService.getImage(imageId, COS_FLASHCARD_IMAGE_BUCKET)
        ).rejects.toThrow(
          new InternalServerError(
            `Retrieving images from Cloud Object Store has failed`
          )
        );
      });
    });
  })

  describe("the getPreSignedUrl function", () => {
    let result: any;

    it("should call getSignedUrlPromise", async () => {
      mockGetSignedUrlPromise.mockResolvedValue("test url")
      result = await cosService.getPreSignedUrl(imageId, COS_FLASHCARD_IMAGE_BUCKET);

      expect(mockGetSignedUrlPromise).toBeCalledTimes(1);
    })

    it("should return a PreSignedUrl response", async () => {
      mockGetSignedUrlPromise.mockResolvedValue("test url")
      
      const response = {
        cosUri: imageId,
        preSignedUrl: "test url",
      };

      result = await cosService.getPreSignedUrl(imageId, COS_FLASHCARD_IMAGE_BUCKET);

      expect(result).toEqual(response)
    })

    it("should throw an error if getSignedUrlPromise fails", async () => {
      mockGetSignedUrlPromise.mockRejectedValue("error")

      await expect(
        cosService.getPreSignedUrl(imageId, COS_FLASHCARD_IMAGE_BUCKET)
      ).rejects.toThrow(
        new InternalServerError(
          "Retrieving pre-signed url from Cloud Object Store has failed"
        )
      );
    })
  })
});
