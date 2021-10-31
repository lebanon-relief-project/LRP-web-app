import React from "react";
import { render } from "@testing-library/react";
import HelpSection from "./HelpSection";
import "jest-styled-components";
import { fireEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

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

jest.mock("./core/CardGroup", () => {
  return () => <div>CardGroup</div>;
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
});

const renderHelpSection = () => {
  return render(
    <BrowserRouter>
      <HelpSection />
    </BrowserRouter>
  );
};
