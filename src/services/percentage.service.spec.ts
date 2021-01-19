import { samplePercentageCloudantResponse } from "../types/sampleData/PercentageSampleData";
import { PercentageService, CloudantService } from ".";
import Container from "typedi";
import { DocumentScope } from "@cloudant/cloudant/types";
import { MockLogger } from "../util/test-util";
import { InternalServerError } from "routing-controllers";

const mockResponse = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  get = mockResponse;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });
let percentageService: PercentageService = Container.get(PercentageService);

describe("The Percentage service", () => {
  let result;

  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the getPercentage() function", () => {
    beforeEach(async () => {
      process.env.EXPERIENCE_PERCENTAGES_DB_DOC_ID = "test id";
      mockResponse.mockResolvedValue(samplePercentageCloudantResponse);
      result = await percentageService.getPercentage();
    });

    it("should call the cloudant service", () => {
      expect(mockResponse).toHaveBeenCalledWith("test id");
    });

    it("should return correctly", () => {
      expect(result).toEqual({
        default_percentage: samplePercentageCloudantResponse.default_percentage,
      });
    });

    it("should throw internal server error when database operation fails", async () => {
      mockResponse.mockImplementation(() => {
        throw new Error("ugly db error");
      });

      await expect(percentageService.getPercentage()).rejects.toThrow(
        new InternalServerError("getPercentage: Failed to retrieve percentage")
      );
    });
  });
});
