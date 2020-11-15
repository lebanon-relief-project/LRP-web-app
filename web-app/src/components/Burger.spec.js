import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";
import "jest-styled-components";
import Burger from "./Burger";
import { act } from "react-dom/test-utils";

const setOpenMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("the Burger component", () => {
  let container;
  it("should match the snapshot when open is set to false", () => {
    ({ container } = renderBurger(false, setOpenMock));

    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when open is set to true", () => {
    ({ container } = renderBurger(true, setOpenMock));

    expect(container).toMatchSnapshot();
  });

  it("should execute setOpenMock only when burger button is clicked and open is set to false", () => {
    let getByTestId;
    ({ container, getByTestId } = renderBurger(false, setOpenMock));

    expect(setOpenMock).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.click(getByTestId("burgerButton"));
    });

    expect(setOpenMock).toHaveBeenCalledTimes(1);
    expect(setOpenMock).toHaveBeenCalledWith(true);
  });

  it("should execute setOpenMock only when burger button is clicked and open is set to true", () => {
    let getByTestId;
    ({ container, getByTestId } = renderBurger(true, setOpenMock));

    expect(setOpenMock).toHaveBeenCalledTimes(0);

    act(() => {
      fireEvent.click(getByTestId("burgerButton"));
    });

    expect(setOpenMock).toHaveBeenCalledTimes(1);
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});

const renderBurger = (open, setOpenMock) => {
  return render(<Burger open={open} setOpen={setOpenMock} />);
};
