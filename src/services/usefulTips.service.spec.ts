import { sampleUsefulTipsCloudantResponse } from "../types/sampleData/UsefulTipsSampleData";
import { UsefulTipsService, CloudantService } from ".";
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
let usefulTipsService: UsefulTipsService = Container.get(UsefulTipsService);

describe("The UsefulTips service", () => {
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

  describe("the getUsefulTips() function", () => {
    beforeEach(async () => {
      process.env.USEFUL_TIPS_DB_DOC_ID = "test id";
      mockResponse.mockResolvedValue(sampleUsefulTipsCloudantResponse);
      result = await usefulTipsService.getUsefulTips();
    });

    it("should call the cloudant service", () => {
      expect(mockResponse).toHaveBeenCalledWith("test id");
    });

    it("should return correctly", () => {
      expect(result).toEqual({
        usefulTips: sampleUsefulTipsCloudantResponse.usefulTips,
      });
    });

    it("should throw internal server error when database operation fails", async () => {
      mockResponse.mockImplementation(() => {
        throw new Error("ugly db error");
      });

      await expect(usefulTipsService.getUsefulTips()).rejects.toThrow(
        new InternalServerError("getUsefulTips: Failed to retrieve Useful Tips")
      );
    });
  });
});
