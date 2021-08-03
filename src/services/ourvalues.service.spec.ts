import { sampleFlashCardsCloudantResponse } from "../types/sampleData/FlashCardSampleData";
import Container from "typedi";
import { CloudantService, OurValuesService } from ".";

import { MockLogger } from "../util/test-util";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { CosService } from "./cos.service";
import { help } from "yargs";

const mockList = jest.fn();
const mockGetPreSignedUrl = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  list = mockList;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });
Container.set(CosService, { getPreSignedUrl: mockGetPreSignedUrl });
let helpService: OurValuesService = Container.get(OurValuesService);

describe("The our values service", () => {
  let result;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the getOurValuesCards() function", () => {
    beforeEach(async () => {
      mockList.mockResolvedValue(sampleFlashCardsCloudantResponse);
      mockGetPreSignedUrl.mockResolvedValue({ preSignedUrl: "sample image" });
      result = await helpService.getOurValuesCards();
    });

    it("should call the cloudant service", () => {
      expect(mockList).toHaveBeenCalled();
    });

    it("should return a flashcard from the cloudant database", async () => {
      expect(result).toEqual({
        cards: [
          {
            _id: "some random _id 1",
            title: "some random title 1",
            body: "some random body 1",
            cosUri: "test",
            image: "sample image",
          },
          {
            _id: "some random _id 2",
            title: "some random title 2",
            body: "some random body 2",
            cosUri: "test",
            image: "sample image",
          },
        ],
      });
    });

    it("should call the content store", () => {
      expect(mockGetPreSignedUrl).toHaveBeenCalled();
    });

    it("should return empty array if no flash cards are retrieved", async () => {
      mockList.mockResolvedValue({ total_rows: 0, rows: [] });
      result = await helpService.getOurValuesCards();

      expect(result.cards).toEqual([]);
    });

    it("should skip flashcard if the cloudant doc is undefined", async () => {
      mockList.mockResolvedValue({
        total_rows: 2,
        offset: 0,
        rows: [
          {
            id: "some random id 1",
            key: "some random key 1",
            value: {},
            doc: undefined,
          },
          {
            id: "some random id 2",
            key: "some random key 2",
            value: {},
            doc: {
              _id: "some random _id 2",
              title: "some random title 2",
              body: "some random body 2",
              cosUri: "test",
              image: "test",
            },
          },
        ],
      });

      mockGetPreSignedUrl.mockResolvedValue({ preSignedUrl: "sample image" });

      const expected = {
        cards: [
          {
            _id: "some random _id 2",
            body: "some random body 2",
            cosUri: "test",
            image: "sample image",
            title: "some random title 2",
          },
        ],
      };

      return helpService.getOurValuesCards().then((data) => {
        expect(data).toEqual(expected);
      });
    });

    it("should throw an error if the db connection fails", async () => {
      mockList.mockImplementation(() => {
        throw new Error("Ugly error");
      });

      const functionToThrow = async () => await helpService.getOurValuesCards();

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(`getFlashCards: Failed to retrieve flash cards`)
      );
    });

    it("should throw an error if the COS operation fails", async () => {
      mockGetPreSignedUrl.mockImplementation(() => {
        throw new Error("ERROR");
      });

      const functionToThrow = async () => await helpService.getOurValuesCards();

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(`getFlashCards: Failed to retrieve flash cards`)
      );
    });
  });
});
