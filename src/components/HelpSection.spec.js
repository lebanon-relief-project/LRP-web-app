import React from "react";
import { render } from "@testing-library/react";
import HelpSection from "./HelpSection";
import "jest-styled-components";

jest.mock("./Card", (props) => {
  return (props) => <div>{props.title}</div>;
});

describe("the HelpSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderHelpSection());

    expect(container).toMatchSnapshot();
  });
});

const renderHelpSection = () => {
  return render(<HelpSection />);
};
