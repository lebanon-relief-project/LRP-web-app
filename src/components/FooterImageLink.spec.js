import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import FooterImageLink from "./FooterImageLink";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNavbar());

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = () => {
  return render(<FooterImageLink />);
};
