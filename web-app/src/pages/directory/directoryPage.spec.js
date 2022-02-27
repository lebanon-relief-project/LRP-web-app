import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import "jest-styled-components";
import DirectoryPage from "./directoryPage";
import { listenerCount } from "process";
import { act } from "react-dom/test-utils";

jest.mock("./components/Banner", (props) => {
  return (props) => <div>Banner</div>;
});

Date.now = jest.fn(() => 1482363367071);

// jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});

describe("the DirectoryPage component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<DirectoryPage />);
    expect(container).toMatchSnapshot();
  });

  it("should be able to click on collapsible to show more options", async () => {
    const { container, getByText } = render(<DirectoryPage />);
    let clickable = getByText("Are you looking for a centre or individual?");

    act(() => {
      fireEvent.click(clickable);
    });

    expect(clickable.className).toBe("Collapsible__trigger is-open");
    expect(getByText("NGO")).toBeTruthy();
    expect(getByText("Licensed Psychologist")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("should be able to select/deselect option from the list", () => {
    const { container, getByText, getByTestId } = render(<DirectoryPage />);
    let clickable = getByText("Are you looking for a centre or individual?");

    act(() => {
      fireEvent.click(clickable);
    });

    expect(clickable.className).toBe("Collapsible__trigger is-open");
    expect(getByText("NGO")).toBeTruthy();
    expect(getByText("Licensed Psychologist")).toBeTruthy();
    let checkbox = getByTestId("NGO");

    expect(checkbox).toBeTruthy();
    act(() => {
      fireEvent.click(checkbox);
    });

    expect(checkbox).toHaveProperty("checked", true);

    act(() => {
      fireEvent.click(checkbox);
    });

    expect(checkbox).toHaveProperty("checked", false);
  });
});
