import { rest } from "msw";
import { setupServer } from "msw/node";

import { getResults } from "./results.service";

const mockFlashCardsResultsResponse = {
  cards: [],
};

const handlers = [
  rest.get(/\/api\/results/, async (req, res, ctx) => {
    return res(ctx.json(mockFlashCardsResultsResponse));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("The results service", () => {
  it("should return flashcard results", async () => {
    let response = await getResults();

    expect(response).toEqual(mockFlashCardsResultsResponse);
  });

  it("should throw an error if the response is unsuccesfull", async () => {
    const newHandlers = [
      rest.get(/\/api\/results/, async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      }),
    ];

    server.resetHandlers(...newHandlers);

    await expect(getResults()).rejects.toThrow(
      "Failed to fetch flash card results"
    );
  });
});
