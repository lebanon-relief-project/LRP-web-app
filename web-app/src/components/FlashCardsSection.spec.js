import React from "react";
import { wait, waitForElement } from "@testing-library/react";
import FlashCardsSection from "./FlashCardsSection";
import "jest-styled-components";
import { renderWithRouter } from "../util/testUtils";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import ErrorBoundary from "./errors/ErrorBoundary";

jest.mock("./FlashCard", (props) => {
  return (props) => <div>flash card {props.card.title}</div>;
});

jest.mock("./LoadingSpinner", () => {
  return () => <div data-testid="spinner">Loading...</div>;
});

const mockGetFlashCards = jest.fn();

mockGetFlashCards.mockResolvedValue({
  cards: [
    {
      _id: "random _id",
      title: "random title",
      body: "some card body",
    },
  ],
});

jest.mock("../services/flashCards.service", () => {
  return {
    getFlashCards: () => mockGetFlashCards(),
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

  it("should throw error when database call", async () => {
    mockGetFlashCards.mockImplementation(() => {
      throw new Error("ugly error");
    });
    let caughtError = null;
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      componentDidCatch(error) {
        this.setState({ hasError: true });

        caughtError = error;
      }

      render() {
        return !this.state.hasError && this.props.children;
      }
    }

    const wrapper = ({ children }) => <ErrorBoundary>{children}</ErrorBoundary>;

    renderHook(() => FlashCardsSection(), { wrapper });

    await wait();

    expect(caughtError).toEqual(new Error("failed to fetch flashCards"));
  });

  it.todo("should not open Modal when a card is selected");

  it.todo("a flashcard should stay flipped round if it has been selected");
});
