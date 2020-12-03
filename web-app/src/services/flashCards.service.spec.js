import { rest } from "msw";
import { setupServer } from "msw/node";

import { getFlashCards } from "./flashCards.service";

const mockFlashCardsResponse = {
  cards: [],
};

const handlers = [
  rest.get(/\/api\/flashcards/, async (req, res, ctx) => {
    return res(ctx.json(mockFlashCardsResponse));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("The flash cards service", () => {
  describe("getFlashCards", () => {
    it("should return flashcards", async () => {
      let response = await getFlashCards();

      expect(response).toEqual(mockFlashCardsResponse);
    });

    it("should throw nice error message when getting flash cards fails", async () => {
      const newHandlers = [
        rest.get(/\/api\/flashcards/, async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "Server error" }));
        }),
      ];

      server.resetHandlers(...newHandlers);

      await expect(getFlashCards()).rejects.toThrow(
        "Failed to fetch flash cards"
      );
    });
  });
});
