import { sampleFlashCards } from "../types/sampleData/FlashCardSampleData";
import Container from "typedi";
import { CloudantService } from ".";

import { MockLogger } from "../util/test-util";

Container.set("logger", new MockLogger());
let cloudantService: CloudantService = Container.get(CloudantService);

describe("The cloudant service", () => {
  it("should return a flashcard from the cloudant database", async () => {
    let result = await cloudantService.getFlashCards();

    expect(result.cards).toEqual(sampleFlashCards);
  });
});
