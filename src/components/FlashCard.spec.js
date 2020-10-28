import React from "react";
import { render } from "@testing-library/react";
import FlashCard from "./FlashCard";

describe("the FlashCard component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFlashCard());

    expect(container).toMatchSnapshot();
  });
});

const renderFlashCard = () => {
  const flashCard1 = {
    title: "title 1",
    text: "text 1",
    image: "image url",
  };
  return render(<FlashCard card={flashCard1} />);
};
