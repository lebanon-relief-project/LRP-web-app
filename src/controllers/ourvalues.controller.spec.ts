import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { OurValuesService } from "../services";
import { sampleFlashCards } from "../types/sampleData/FlashCardSampleData";
import { MockLogger } from "../util/test-util";
import { OurValuesController } from "./ourvalues.controller";

Container.set("logger", new MockLogger());

const mockgetOurValuesCards = jest.fn();
class MockOurValuesService {
  getOurValuesCards = mockgetOurValuesCards;
}

Container.set(OurValuesService, new MockOurValuesService());

describe("The Our Values Controller", () => {
  let controller: OurValuesController;

  beforeEach(() => {
    controller = Container.get(OurValuesController);
  });

  it("should call to the ourValues service", async () => {
    mockgetOurValuesCards.mockResolvedValue(sampleFlashCards);
    let response = await controller.getOurValuesCards();

    expect(mockgetOurValuesCards).toHaveBeenCalledTimes(1);
    expect(response).toEqual(sampleFlashCards);
  });

  it("should throw an error if the ourValues service throws an error", async () => {
    mockgetOurValuesCards.mockImplementation(() => {
      throw new Error("Ugly error");
    });

    const functionToThrow = async () => await controller.getOurValuesCards();

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`Ugly error`)
    );
  });
});
