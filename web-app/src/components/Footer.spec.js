import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import "jest-styled-components";

describe("the Footer component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFooter());

    expect(container).toMatchSnapshot();
  });
});

const renderFooter = () => {
  return render(<Footer />);
};
