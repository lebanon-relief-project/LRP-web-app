import React from "react";
import { render } from "@testing-library/react";
import FooterLink from "./FooterLink";
import "jest-styled-components";

describe("the FooterLink component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFooterLink());

    expect(container).toMatchSnapshot();
  });
});

const renderFooterLink = () => {
  return render(<FooterLink title="testTitle" links={["link1", "link2"]} />);
};
