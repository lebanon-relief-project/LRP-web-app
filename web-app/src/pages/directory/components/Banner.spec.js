import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import Banner from "./Banner";

describe("the Banner component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Banner />);
    expect(container).toMatchSnapshot();
  });
});
