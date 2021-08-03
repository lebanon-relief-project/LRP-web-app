import { rest } from "msw";
import { setupServer } from "msw/node";

import { getOurValuesCards } from "./ourValuesCards.service";

const mockFlashCardsResponse = {
  cards: [],
};

const handlers = [
  rest.get(/\/api\/ourvalues/, async (req, res, ctx) => {
    return res(ctx.json(mockFlashCardsResponse));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("The ourValues cards service", () => {
  describe("getOurValuesCards", () => {
    it("should return flashcards", async () => {
      let response = await getOurValuesCards();

      expect(response).toEqual(mockFlashCardsResponse);
    });

    it("should throw nice error message when getting flash cards fails", async () => {
      const newHandlers = [
        rest.get(/\/api\/ourvalues/, async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "Server error" }));
        }),
      ];

      server.resetHandlers(...newHandlers);

      await expect(getOurValuesCards()).rejects.toThrow(
        "Failed to fetch flash cards"
      );
    });
  });
});
