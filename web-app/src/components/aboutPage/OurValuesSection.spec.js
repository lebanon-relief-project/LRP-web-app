import React from "react";
import { wait } from "@testing-library/react";
import "jest-styled-components";
import { renderWithRouter } from "../../util/testUtils";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import OurValuesSection from "./OurValuesSection";

jest.mock("../FlashCard", (props) => {
  return (props) => <div>flash card {props.card.title}</div>;
});

jest.mock("../LoadingSpinner", () => {
  return () => <div data-testid="spinner">Loading...</div>;
});

const mockGetOurValuesCards = jest.fn();

mockGetOurValuesCards.mockResolvedValue({
  cards: [
    {
      _id: "random _id",
      title: "random title",
      body: "some card body",
    },
  ],
});

jest.mock("../../services/ourValuesCards.service", () => {
  return {
    getOurValuesCards: () => mockGetOurValuesCards(),
  };
});

jest.mock("../NoCardSelectedModal", () => {
  return () => <div data-testid="modal">No Card Selected Modal</div>;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("the OurValuesSection component", () => {
  let container;
  it("should match the snapshot", async () => {
    ({ container } = renderWithRouter(<OurValuesSection />));
    await wait();
    expect(container).toMatchSnapshot();
  });

  it("should show Spinner when our values section is loading", async () => {
    let queryByTestId;
    ({ queryByTestId } = renderWithRouter(<OurValuesSection />));
    expect(queryByTestId("spinner")).toBeTruthy();
    await wait();
    expect(queryByTestId("spinner")).toBeFalsy();
  });

  it("should throw error when database call", async () => {
    mockGetOurValuesCards.mockImplementation(() => {
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

    renderHook(() => OurValuesSection(), { wrapper });

    await wait();

    expect(caughtError).toEqual(new Error("failed to fetch flashCards"));
  });
});
