import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FlashCardResultContainer from "./FlashCardResultContainer";
import { sampleResultsResponse } from "../../sampleData";
import "jest-styled-components";

jest.mock("../../util/util", () => ({
  getCardTitleFromSessionStorage: () => "test title"
}));

describe("the FlashCardResultContainer component", () => {
  let container;
  let getByTestId;

  it("should match the snapshot", () => {
    ({ container } = render(
      <FlashCardResultContainer results={sampleResultsResponse} />
    ));

    expect(container).toMatchSnapshot();
  });

  it("should render the selected flashcards recommendations only", () => {
    ({ container, getByTestId } = render(
      <FlashCardResultContainer results={sampleResultsResponse} />
    ));

    let Button = getByTestId("flashcardTitleButton_1");

    act(() => {
      fireEvent.click(Button);
    });

    expect(container).not.toContain("Talk about it");
  });
});
