import {
  sampleFlashCards,
  sampleFlashCardsCloudantResponse,
} from "../types/sampleData/FlashCardSampleData";
import Container from "typedi";
import { CloudantService, HelpService } from ".";

import { MockLogger } from "../util/test-util";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";

const mockList = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  list = mockList;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });
let helpService: HelpService = Container.get(HelpService);

describe("The help service", () => {
  let result;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the getFlashCards() function", () => {
    beforeEach(async () => {
      mockList.mockResolvedValue(sampleFlashCardsCloudantResponse);
      result = await helpService.getFlashCards();
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
          },
          {
            _id: "some random _id 2",
            title: "some random title 2",
            body: "some random body 2",
          },
        ],
      });
    });

    it("should return empty array if no flash cards are retrieved", async () => {
      mockList.mockResolvedValue({ total_rows: 0, rows: [] });
      result = await helpService.getFlashCards();

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
            },
          },
        ],
      });
      result = await helpService.getFlashCards();

      expect(result.cards).toEqual([
        {
          _id: "some random _id 2",
          title: "some random title 2",
          body: "some random body 2",
        },
      ]);
    });

    it("should throw an error if the db connection fails", async () => {
      mockList.mockImplementation(() => {
        throw new Error("Ugly error");
      });

      const functionToThrow = async () => await helpService.getFlashCards();

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(
          `getFlashCards: Failed to retrieve flash cards from cloudant`
        )
      );
    });
  });
});
