import React from "react";
import { render } from "@testing-library/react";
import HelpSection from "./HelpSection";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

jest.mock("./Card", (props) => {
  return (props) => (
    <div data-testid={`${props.title}`} onClick={props.onClick}>
      {props.title}
    </div>
  );
});

jest.mock("./LikeToHelpModal", () => {
  return () => <div data-testid="modal">Our Modal</div>;
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("the HelpSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderHelpSection());

    expect(container).toMatchSnapshot();
  });
  it("should open Modal when Contact me button is clicked", () => {
    let getByTestId, queryByTestId, getByAltText;
    ({
      container,
      getByTestId,
      queryByTestId,
      getByAltText,
    } = renderHelpSection());

    expect(queryByTestId("modal")).toBeFalsy();

    act(() => {
      fireEvent.click(getByTestId("I’d like to help"));
    });

    expect(queryByTestId("modal")).toBeTruthy();
  });
});

const renderHelpSection = () => {
  return render(<HelpSection />);
};
