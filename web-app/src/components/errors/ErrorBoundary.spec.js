import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import ErrorBoundary from "./ErrorBoundary";

jest.mock("../../pages/errorPage", (props) => {
  return (props) => <div>Error page</div>;
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("the ErrorPage component", () => {
  it("should render children when no error happenned", () => {
    let Child = () => {
      return <div>Regular child</div>;
    };
    const { container, getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Regular child")).toBeTruthy();
  });

  it("should render Error page when exception occurs", () => {
    let Child = () => {
      throw new Error("ugly error in component");
    };

    const { container, queryByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    expect(container).toMatchSnapshot();
    expect(queryByText("Regular child")).toBeFalsy();
    expect(queryByText("Error page")).toBeTruthy();
  });
});
