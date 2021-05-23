import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";
import "jest-styled-components";

describe("the LoadingSpinner component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderLoadingSpinner());

    expect(container).toMatchSnapshot();
  });
});

const renderLoadingSpinner = () => {
  return render(<LoadingSpinner />);
};
