import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { HelpService } from "../services";
import { sampleFlashCards } from "../types/sampleData/FlashCardSampleData";
import { MockLogger } from "../util/test-util";
import { HelpController } from "./help.controller";

Container.set("logger", new MockLogger());

const mockGetFlashCards = jest.fn();
class MockHelpService {
  getFlashCards = mockGetFlashCards;
}

Container.set(HelpService, new MockHelpService());

describe("The Help Controller", () => {
  let controller: HelpController;

  beforeEach(() => {
    controller = Container.get(HelpController);
  });

  it("should call to the help service", async () => {
    mockGetFlashCards.mockResolvedValue(sampleFlashCards);
    let response = await controller.getFlashCards();

    expect(mockGetFlashCards).toHaveBeenCalledTimes(1);
    expect(response).toEqual(sampleFlashCards);
  });

  it("should throw an error if the help service throws an error", async () => {
    mockGetFlashCards.mockImplementation(() => {
      throw new Error("Ugly error");
    });

    const functionToThrow = async () => await controller.getFlashCards();

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`Ugly error`)
    );
  });
});
