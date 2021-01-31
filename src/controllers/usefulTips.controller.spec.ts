import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { UsefulTipsService } from "../services";
import { MockLogger } from "../util/test-util";
import { UsefulTipsController } from "./usefulTips.controller";

Container.set("logger", new MockLogger());

const mockGetUsefulTips = jest.fn();
class MockUsefulTipsService {
  getUsefulTips = mockGetUsefulTips;
}

Container.set(UsefulTipsService, new MockUsefulTipsService());

describe("The UsefulTips Controller", () => {
  let controller: UsefulTipsController;

  beforeEach(() => {
    controller = Container.get(UsefulTipsController);
  });

  it("should call to the help service", async () => {
    mockGetUsefulTips.mockResolvedValue({
      usefulTips: [
        {
          title: "Lorem Ipsum",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Lorem Ipsum",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    });
    let response = await controller.getUsefulTips();

    expect(mockGetUsefulTips).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      usefulTips: [
        {
          title: "Lorem Ipsum",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Lorem Ipsum",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    });
  });

  it("should throw an error if the UsefulTips service throws an error", async () => {
    mockGetUsefulTips.mockImplementation(() => {
      throw new Error("Ugly error");
    });

    const functionToThrow = async () => await controller.getUsefulTips();

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`failed to get Useful Tips`)
    );
  });
});
