import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./errorPage";
import "jest-styled-components";

describe("the ErrorPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<ErrorPage />);
    expect(container).toMatchSnapshot();
  });
});