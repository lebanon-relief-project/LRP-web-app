import React from "react";
import { wait } from "@testing-library/react";
import FlashCardsSection from "./FlashCardsSection";
import "jest-styled-components";
import { renderWithRouter } from "../util/testUtils";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

jest.mock("./FlashCard", (props) => {
  return (props) => <div>flash card {props.card.title}</div>;
});

jest.mock("./LoadingSpinner", () => {
  return () => <div data-testid="spinner">Loading...</div>;
});

// jest.mock("../services/flashCards.service", () => {
//   return {
//     getFlashCards: jest.fn().mockResolvedValue({
//       cards: [
//         {
//           _id: "random _id",
//           title: "random title",
//           body: "some card body",
//         },
//       ],
//     }),
//   };
// });

jest.mock("../services/flashCards.service", () => {
  console.log("uses correct thing");
  return {
    getFlashCards: jest.fn().mockImplementation(() => {
      throw new Error("ugly error");
    }),
  };
});

jest.mock("./NoCardSelectedModal", () => {
  return () => <div data-testid="modal">No Card Selected Modal</div>;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("the FlashCardsSection component", () => {
  let container;
  it("should match the snapshot", async () => {
    ({ container } = renderWithRouter(<FlashCardsSection />));
    await wait();
    expect(container).toMatchSnapshot();
  });

  it("should open Modal when a card is not selected", async () => {
    let queryByTestId, getByText;
    ({ container, queryByTestId, getByText } = renderWithRouter(
      <FlashCardsSection />
    ));
    await wait();
    expect(queryByTestId("modal")).toBeFalsy();

    act(() => {
      fireEvent.click(getByText("Give me advice"));
    });

    expect(queryByTestId("modal")).toBeTruthy();
  });

  it("should show Spinner when flashcards are loading", async () => {
    let queryByTestId;
    ({ queryByTestId } = renderWithRouter(<FlashCardsSection />));
    expect(queryByTestId("spinner")).toBeTruthy();
    await wait();
    expect(queryByTestId("spinner")).toBeFalsy();
  });

  fit("should throw an error when the flashcard service call fails", (done) => {
    try {
      renderWithRouter(<FlashCardsSection />);
    } catch (error) {
      console.log("catch block");
      expect(error).toEqual(undefined);
      // done();
    }
  });

  it.todo("should not open Modal when a card is selected");

  it.todo("a flashcard should stay flipped round if it has been selected");
});
