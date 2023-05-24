import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import "jest-styled-components";
import { act } from "react-dom/test-utils";
import Sidebar from "./Sidebar";
import { collapsiblesInitial } from "../../../constants/directory";

Date.now = jest.fn(() => 1482363367071);

// jest.useFakeTimers();

afterEach(() => {
  jest.clearAllMocks();
});

describe("the Sidebar component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Sidebar />);
    expect(container).toMatchSnapshot();
  });

  it("should be able to select all language options", () => {
    const { getByText, getByLabelText } = render(<Sidebar />);
    const languagesCollapsible = getByText(collapsiblesInitial.languages.label);
    fireEvent.click(languagesCollapsible);

    for (const language of collapsiblesInitial.languages.options) {
      const languageCheckbox = getByLabelText(language.label);
      fireEvent.click(languageCheckbox);

      expect(languageCheckbox.checked).toBe(true);
    }
  });

  it("should be able to select all patient groups", () => {
    const { getByText, getByLabelText } = render(<Sidebar />);
    const patientGroupCollapsible = getByText(
      collapsiblesInitial.patientgroups.label
    );
    fireEvent.click(patientGroupCollapsible);

    for (const patientGroup of collapsiblesInitial.patientgroups.options) {
      const patientGroupCheckbox = getByLabelText(patientGroup.label);
      fireEvent.click(patientGroupCheckbox);

      expect(patientGroupCheckbox.checked).toBe(true);
    }
  });

  xit("should be able to click on collapsible to show more options", async () => {
    const { container, getByText } = render(<Sidebar />);
    let clickable = getByText("Are you looking for a centre or individual?");

    act(() => {
      fireEvent.click(clickable);
    });

    expect(clickable.className).toBe("Collapsible__trigger is-open");
    expect(getByText("NGO")).toBeTruthy();
    expect(getByText("Licensed Psychologist")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  xit("should be able to select/deselect option from the list", () => {
    const { container, getByText, getByTestId } = render(<Sidebar />);
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

  xit("should call onFilterChange when filter is changed", () => {
    let mockOnFilterChange = jest.fn();
    const { container, getByText, getByTestId } = render(
      <Sidebar onFilterChange={mockOnFilterChange} />
    );

    let clickable = getByText("Are you looking for a centre or individual?");

    act(() => {
      fireEvent.click(clickable);
    });

    let checkbox = getByTestId("NGO");

    act(() => {
      fireEvent.click(checkbox);
    });

    expect(mockOnFilterChange).toHaveBeenCalledWith(
      expect.objectContaining({
        "Are you looking for a centre or individual?": {
          "Licensed Psychologist": false,
          NGO: true,
        },
      })
    );
  });
});
