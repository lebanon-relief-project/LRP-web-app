import React from "react";
import { render } from "@testing-library/react";
import FooterLink from "./FooterLink";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNavbar());

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = () => {
  return render(<FooterLink title="testTitle" links={["link1", "link2"]} />);
};
