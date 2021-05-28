import { DocumentScope } from "@cloudant/cloudant/types";
import Container from "typedi";
import { CloudantService } from ".";
import { MockLogger } from "../util/test-util";
import { FlashCardService } from ".";
import { FlashCardSelection } from "../types/FlashCard";

const mockResponse = jest.fn();
class MockDb implements Partial<DocumentScope<FlashCardSelection>> {
  insert = mockResponse;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });
let flashcardService: FlashCardService = Container.get(FlashCardService);

describe("The Flashcard service", () => {
  let result;

  const OLD_ENV = process.env;

  let dateNowSpy;

  beforeAll(() => {
    // Lock Time
    dateNowSpy = jest
      .spyOn(Date, "now")
      .mockImplementation(() => 1487076708000);
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
    dateNowSpy.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the storeSelections() function", () => {
    let sampleSelections = ["test_id_1"];
    beforeEach(async () => {
      mockResponse.mockResolvedValue(undefined);
      result = await flashcardService.storeSelections(sampleSelections);
    });

    it("should call the cloudant service", async () => {
      expect(mockResponse).toHaveBeenCalledWith({
        selected: sampleSelections,
        timeStamp: new Date(Date.now()),
      });
    });

    it("should return true when database stored selection successfully", () => {
      expect(result).toEqual(true);
    });

    it("should return false when database call fails", async () => {
      mockResponse.mockImplementation(() => {
        throw new Error("ugly cloudant error");
      });

      result = await flashcardService.storeSelections(sampleSelections);

      expect(result).toEqual(false);
    });
  });
});
