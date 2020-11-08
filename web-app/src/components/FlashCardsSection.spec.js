import React from "react";
import { render } from "@testing-library/react";
import FlashCardsSection from "./FlashCardsSection";

jest.mock("./FlashCard", (props) => {
  return (props) => <div>flash card {props.card.title}</div>;
});

describe("the FlashCardsSection component", () => {
  let container;
  it("should match the snapshot", () => {
    ({ container } = renderFlashCardsSection());

    expect(container).toMatchSnapshot();
  });
});

const renderFlashCardsSection = () => {
  return render(<FlashCardsSection />);
};
