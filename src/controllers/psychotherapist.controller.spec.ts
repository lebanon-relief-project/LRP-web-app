import { InternalServerError } from "routing-controllers";
import Container from "typedi";
import { PsychotherapistService } from "../services";
import { samplePsychotherapistsResponse } from "../types/sampleData/PsychotherapistData";
import * as FilterUtil from "../util/filter-util";
import { MockLogger } from "../util/test-util";
import { PsychotherapistController } from "./psychotherapist.controller";

Container.set("logger", new MockLogger());

const mockGetPsychotherapists = jest.fn();
class MockPsychotherapistService {
  getPsychotherapists = mockGetPsychotherapists;
}

Container.set(PsychotherapistService, new MockPsychotherapistService());

const sanitizeSpy = jest.spyOn(FilterUtil, "sanitizeFilter");

describe("The Psychotherapist Controller", () => {
  let controller: PsychotherapistController;

  beforeEach(() => {
    controller = Container.get(PsychotherapistController);
  });

  it("should call to the Psychotherapist service", async () => {
    mockGetPsychotherapists.mockResolvedValue(samplePsychotherapistsResponse);
    let response = await controller.getPsychotherapists();

    expect(mockGetPsychotherapists).toHaveBeenCalledTimes(1);

    expect(response).toEqual(samplePsychotherapistsResponse);
  });

  it("should call to sanitizeFilter function when filter is supplied", async () => {
    mockGetPsychotherapists.mockResolvedValue(samplePsychotherapistsResponse);
    let response = await controller.getPsychotherapists({
      languages: ["english"],
    });

    expect(sanitizeSpy).toHaveBeenCalledTimes(1);
    expect(sanitizeSpy).toHaveBeenCalledWith({
      languages: ["english"],
    });

    expect(response).toEqual(samplePsychotherapistsResponse);
  });

  it("should throw an error if the psychotherapist service throws an error", async () => {
    mockGetPsychotherapists.mockImplementation(() => {
      throw new Error("Ugly error");
    });

    const functionToThrow = async () => await controller.getPsychotherapists();

    await expect(functionToThrow()).rejects.toThrow(
      new InternalServerError(`failed to get Psychotherapists`)
    );
  });
});
