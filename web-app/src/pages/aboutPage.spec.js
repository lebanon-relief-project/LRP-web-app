import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "./aboutPage";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "jest-styled-components";

jest.mock("../components/HelpSection", () => {
  return () => <div>Help section</div>;
});

describe("the AboutPage component", () => {
  it("should match the snapshot", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <AboutPage />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
