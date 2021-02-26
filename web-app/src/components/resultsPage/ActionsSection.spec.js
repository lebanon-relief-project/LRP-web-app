import React from "react";
import { render } from "@testing-library/react";
import ActionsSection from "./ActionsSection";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

jest.mock("../Card", (props) => {
  return (props) => (
    <div data-testid={`${props.title}`} onClick={props.onClick}>
      {props.title}
    </div>
  );
});

jest.mock("./ReachOutModal", () => {
  return () => <div data-testid="modal">Reach Out Modal</div>;
});

describe("the ActionsSection component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(<ActionsSection />));

    expect(container).toMatchSnapshot();
  });

  it("should open Modal when Reach Out button is clicked", () => {
    let getByTestId, queryByTestId;
    ({ container, getByTestId, queryByTestId } = render(<ActionsSection />));

    expect(queryByTestId("modal")).toBeFalsy();

    act(() => {
      fireEvent.click(getByTestId("Support"));
    });

    expect(queryByTestId("modal")).toBeTruthy();
  });
});
