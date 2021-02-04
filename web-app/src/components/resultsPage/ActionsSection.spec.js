import React from "react";
import { render } from "@testing-library/react";
import ActionsSection from "./ActionsSection";
import "jest-styled-components";

jest.mock("../Card", (props) => {
  return (props) => (
    <div data-testid={`${props.title}`} onClick={props.onClick}>
      {props.title}
    </div>
  );
});

describe("the ActionsSection component", () => {
  let container;

  it("should match the snapshot", () => {
    ({ container } = render(<ActionsSection />));

    expect(container).toMatchSnapshot();
  });
});
