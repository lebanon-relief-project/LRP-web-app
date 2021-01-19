import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { PercentageService } from "../services";
import { MockLogger } from "../util/test-util";
import { PercentageController } from "./Percentage.controller";

Container.set("logger", new MockLogger());

const mockGetPercentage = jest.fn();
class MockPercentageService {
  getPercentage = mockGetPercentage;
}

Container.set(PercentageService, new MockPercentageService());

describe("The Percentage Controller", () => {
  let controller: PercentageController;

  beforeEach(() => {
    controller = Container.get(PercentageController);
  });

  it("should call to the help service", async () => {
    mockGetPercentage.mockResolvedValue({
      default_percentage: 0.76,
    });
    let response = await controller.getPercentage();

    expect(mockGetPercentage).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      default_percentage: 0.76,
    });
  });

  it("should throw an error if the Percentage service throws an error", async () => {
    mockGetPercentage.mockImplementation(() => {
      throw new Error("Ugly error");
    });

    const functionToThrow = async () => await controller.getPercentage();

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`failed to get percentage`)
    );
  });
});
