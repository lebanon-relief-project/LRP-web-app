import React from "react";
import { render, wait } from "@testing-library/react";
import FlashCardsSection from "./FlashCardsSection";
import "jest-styled-components";
import { getFlashCards } from "../services/flashCards.service";

jest.mock("./FlashCard", (props) => {
  return (props) => <div>flash card {props.card.title}</div>;
});

jest.mock("../services/flashCards.service", () => {
  return {
    getFlashCards: jest.fn().mockResolvedValue({
      cards: [
        {
          _id: "random _id",
          title: "random title",
          body: "some card body",
        },
      ],
    }),
  };
});

describe("the FlashCardsSection component", () => {
  let container;
  it("should match the snapshot", async () => {
    ({ container } = renderFlashCardsSection());
    await wait();
    expect(container).toMatchSnapshot();
  });
});

const renderFlashCardsSection = () => {
  return render(<FlashCardsSection />);
};
