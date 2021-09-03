import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FlashCard from "./FlashCard";
import { act } from "react-dom/test-utils";
import "jest-styled-components";

describe("the FlashCard component", () => {
  let container;
  let getByTestId;

  const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
  const removeItemSpy = jest.spyOn(Storage.prototype, "removeItem");

  it("should match the snapshot", () => {
    ({ container } = renderFlashCard());

    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when clickable is set to false", () => {
    ({ container } = renderFlashCard(false));

    expect(container).toMatchSnapshot();
  });

  it("should call the setItem method of session function ", () => {
    ({ container, getByTestId } = renderFlashCard());
    let Button = getByTestId("title 1");

    act(() => {
      fireEvent.click(Button);
    });

    expect(setItemSpy).toHaveBeenCalled();
  });

  it("should call the RemoveItem method of session function ", () => {
    ({ container, getByTestId } = renderFlashCard());
    let Button = getByTestId("title 1");

    act(() => {
      fireEvent.click(Button);
    });
    act(() => {
      fireEvent.click(Button);
    });
    expect(removeItemSpy).toHaveBeenCalled();
  });
});

const renderFlashCard = (clickable = true) => {
  const flashCard1 = {
    title: "title 1",
    body: "text 1",
    image: "image url",
  };
  return render(<FlashCard clickable={clickable} card={flashCard1} />);
};
