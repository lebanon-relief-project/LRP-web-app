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

jest.mock("../core/CardGroup", () => {
  return () => <div>CardGroup</div>;
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
});
