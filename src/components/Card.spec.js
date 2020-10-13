import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("the Card component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderCard());

    expect(container).toMatchSnapshot();
  });
});

const renderCard = () => {
  return render(<Card />);
};
