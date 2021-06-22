import { DocumentScope } from "@cloudant/cloudant/types";
import Container from "typedi";
import { CloudantService } from ".";
import { MockLogger } from "../util/test-util";
import { FlashCardService } from ".";
import { FlashCardSelection } from "../types/FlashCard";

const mockResponse = jest.fn();
const mockGet = jest.fn();
const mockList = jest.fn();
class MockDb implements Partial<DocumentScope<FlashCardSelection>> {
  insert = mockResponse;
  get = mockGet;
  list = mockList;
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

  describe("the countSelections function", () => {
    beforeEach(() => {
      mockResponse.mockResolvedValue(undefined);
      mockGet.mockResolvedValue({
        _id: "some id",
        _rev: "some rev",
        counts: {
          id1: 10,
          id2: 20,
        },
      });
      mockList.mockResolvedValue({
        rows: [
          {
            doc: {
              selected: ["id1", "id2"],
              counted: false,
            },
          },
          {
            doc: {
              selected: ["id3", "id4"],
              counted: false,
            },
          },
        ],
      });
      process.env.FLASHCARD_COUNTS_DB_DOC_ID = "test id";
    });

    it("should get object that stores count results", async () => {
      result = await flashcardService.countSelections();

      expect(mockGet).toHaveBeenCalledWith("test id");
    });

    it("should get all the flashCard selections", async () => {
      result = await flashcardService.countSelections();

      expect(mockList).toHaveBeenCalledTimes(1);
    });

    it("should try to update selection when its counted", async () => {
      result = await flashcardService.countSelections();

      expect(mockResponse).toHaveBeenNthCalledWith(1, {
        selected: ["id1", "id2"],
        counted: true,
      });

      expect(mockResponse).toHaveBeenNthCalledWith(2, {
        selected: ["id3", "id4"],
        counted: true,
      });
    });

    it("should store the counts in database", async () => {
      result = await flashcardService.countSelections();

      expect(mockResponse).toHaveBeenNthCalledWith(3, {
        _id: "some id",
        _rev: "some rev",
        counts: {
          id1: 11,
          id2: 21,
          id3: 1,
          id4: 1,
        },
      });
    });

    it("should return true if everything was successfull", async () => {
      result = await flashcardService.countSelections();

      expect(result).toEqual(true);
    });

    it("should return false when getting count object has failed", async () => {
      mockGet.mockImplementation(() => {
        throw new Error("some ugly get error");
      });

      result = await flashcardService.countSelections();

      expect(result).toEqual(false);
    });

    it("should return false when listing selections has failed", async () => {
      mockList.mockImplementation(() => {
        throw new Error("some ugly list error");
      });

      result = await flashcardService.countSelections();

      expect(result).toEqual(false);
    });

    it("should return false when inserting records into the database fails", async () => {
      mockResponse.mockImplementation(() => {
        throw new Error("some ugly list error");
      });

      result = await flashcardService.countSelections();

      expect(result).toEqual(false);
    });
  });
});
