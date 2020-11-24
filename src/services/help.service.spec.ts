import { sampleFlashCards } from "../types/sampleData/FlashCardSampleData";
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
      result = await helpService.getFlashCards();
    });

    it("should call the cloudant service", () => {
      expect(mockList).toHaveBeenCalled();
    });

    it("should return a flashcard from the cloudant database", async () => {
      expect(result.cards).toEqual(sampleFlashCards);
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
