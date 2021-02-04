import { rest } from "msw";
import { setupServer } from "msw/node";
import { getPercentage, getResults, getUsefulTips } from "./results.service";

const mockFlashCardsResultsResponse = {
  cards: [],
};

const mockPercentageResponse = {
  default_percentage: 0.76,
};

const mockUsefulTips = {
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
};

const handlers = [
  rest.get(/\/api\/results/, async (req, res, ctx) => {
    return res(ctx.json(mockFlashCardsResultsResponse));
  }),
  rest.get(/\/api\/percentage/, async (req, res, ctx) => {
    return res(ctx.json(mockPercentageResponse));
  }),
  rest.get(/\/api\/useful-tips/, async (req, res, ctx) => {
    return res(ctx.json(mockUsefulTips));
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

  it("should return percentage results", async () => {
    let response = await getPercentage();

    expect(response).toEqual(mockPercentageResponse);
  });

  it("should throw an error if the response is unsuccesfull", async () => {
    const newHandlers = [
      rest.get(/\/api\/percentage/, async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      }),
    ];

    server.resetHandlers(...newHandlers);

    await expect(getPercentage()).rejects.toThrow("Failed to fetch percentage");
  });

  it("should return Useful Tips results", async () => {
    let response = await getUsefulTips();

    expect(response).toEqual(mockUsefulTips);
  });

  it("should throw an error if the Useful Tips is unsuccesfull", async () => {
    const newHandlers = [
      rest.get(/\/api\/useful-tips/, async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Server error" }));
      }),
    ];

    server.resetHandlers(...newHandlers);

    await expect(getUsefulTips()).rejects.toThrow(
      "Failed to fetch Useful Tips"
    );
  });
});
