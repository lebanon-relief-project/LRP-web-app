import React from "react";
import { wait } from "@testing-library/react";
import FlashCardsSection from "./FlashCardsSection";
import "jest-styled-components";
import { renderWithRouter } from "../util/testUtils";

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
    ({ container } = renderWithRouter(<FlashCardsSection />));
    await wait();
    expect(container).toMatchSnapshot();
  });

  it.todo("a flashcard should stay flipped round if it has been selected");
});

