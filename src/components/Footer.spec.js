import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFooter());

    expect(container).toMatchSnapshot();
  });
});

const renderFooter = () => {
  return render(<Footer />);
};
