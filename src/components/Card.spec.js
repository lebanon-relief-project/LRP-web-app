import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderNavbar());

    expect(container).toMatchSnapshot();
  });
});

const renderNavbar = () => {
  return render(<Card />);
};
