import { sampleResultsCloudantResponse } from "../types/sampleData/FlashCardSampleData";
import { ResultsService, CloudantService } from ".";
import Container from "typedi";
import { DocumentScope } from "@cloudant/cloudant/types";
import { MockLogger } from "../util/test-util";
import { InternalServerError } from "routing-controllers";
import { CosService } from "./cos.service";

const mockList = jest.fn();
const mockGetPreSignedUrl = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  list = mockList;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });
Container.set(CosService, { getPreSignedUrl: mockGetPreSignedUrl });
let resultsService: ResultsService = Container.get(ResultsService);

describe("The result service", () => {
  let result;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the getResults() function", () => {
    beforeEach(async () => {
      mockList.mockResolvedValue(sampleResultsCloudantResponse);
      mockGetPreSignedUrl.mockResolvedValue({
        preSignedUrl: "sample pre-signed url",
      });
      result = await resultsService.getResults(["test_id_1"]);
    });

    it("should call the cloudant service", () => {
      expect(mockList).toHaveBeenCalled();
    });

    it.todo(
      "should return the most popular flashcard results if no id's are passed in"
    );

    it("should call the content store", () => {
      expect(mockGetPreSignedUrl).toHaveBeenCalled();
    });

    it("should throw an error if the db connection fails", async () => {
      mockList.mockImplementation(() => {
        throw new Error("Ugly error");
      });

      const functionToThrow = async () =>
        await resultsService.getResults(["test_id_1", "test_id_2"]);

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(`getResults: Failed to retrieve results`)
      );
    });

    it("should throw an error if the COS operation fails", async () => {
      mockGetPreSignedUrl.mockImplementation(() => {
        throw new Error("ERROR");
      });

      const functionToThrow = async () =>
        await resultsService.getResults(["test_id_1"]);

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(`getResults: Failed to retrieve results`)
      );
    });

    it("should filter results by Ids passed in", () => {
      expect(result).toEqual({
        results: [
          {
            _id: "test_id_1",
            _rev: "test_rev_1",
            expl_title: "some title 1",
            expl_body: "some body 1",
            image: "sample pre-signed url",
            recommendations: [
              {
                title: "some recommendation title 1",
                body: "some recommendation body 1",
              },
            ],
          },
        ],
      });
    });
  });
});
