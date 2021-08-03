import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./aboutPage";
import "jest-styled-components";

jest.mock("../components/HelpSection", (props) => {
  return (props) => <div>Help section</div>;
});

describe("the AboutPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
});
