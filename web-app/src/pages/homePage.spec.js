import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./homePage";
import "jest-styled-components";

jest.mock("../components/HelpSection", (props) => {
  return (props) => <div>Help section</div>;
});

jest.mock("../components/OurMissionSection", (props) => {
  return (props) => <div>Our Mission section</div>;
});

jest.mock("../components/WhatHappenedSection", (props) => {
  return (props) => <div>What happened section</div>;
});

describe("the HomePage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
