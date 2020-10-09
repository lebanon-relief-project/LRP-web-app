import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNavbar());

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = () => {
  return render(<Footer />);
};
