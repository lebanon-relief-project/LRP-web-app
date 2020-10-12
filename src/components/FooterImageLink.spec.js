import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import FooterImageLink from "./FooterImageLink";

describe("the FooterImageLink component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFooterImageLink());

    expect(container).toMatchSnapshot();
  });
});

const renderFooterImageLink = () => {
  return render(<FooterImageLink />);
};
