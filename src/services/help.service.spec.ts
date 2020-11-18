import { sampleFlashCards } from "../types/sampleData/FlashCardSampleData";
import Container from "typedi";
import { CloudantService, HelpService } from ".";

import { MockLogger } from "../util/test-util";

// Setup typedi containers
Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => jest.fn() }); // temporarily jest.fn()
let helpService: HelpService = Container.get(HelpService);

describe("The help service", () => {
  describe("the getFlashCards() function", () => {
    it.todo("should call the cloudant service");

    it("should return a flashcard from the cloudant database", async () => {
      let result = await helpService.getFlashCards();

      expect(result.cards).toEqual(sampleFlashCards);
    });

    it.todo("should throw an error if the db connection fails");
  });
});
