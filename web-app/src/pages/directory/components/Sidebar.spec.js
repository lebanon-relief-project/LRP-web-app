import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "jest-styled-components";
import { act } from "react-dom/test-utils";
import Sidebar from "./Sidebar";
import { collapsiblesInitial } from "../../../constants/directory";

Date.now = jest.fn(() => 1482363367071);

// jest.useFakeTimers();

let getByText, getByLabelText;

beforeEach(() => {
  jest.clearAllMocks();

  ({ getByText, getByLabelText } = render(
    <Sidebar locations={["beirut", "england"]} />
  ));
});

describe("the Sidebar component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Sidebar locations={["beirut", "england"]} />);
    expect(container).toMatchSnapshot();
  });

  it("should be able to select all language options", () => {
    const languagesCollapsible = getByText(collapsiblesInitial.languages.label);

    act(() => {
      fireEvent.click(languagesCollapsible);
    });

    for (const language of collapsiblesInitial.languages.options) {
      const languageCheckbox = getByLabelText(language.label);

      act(() => {
        fireEvent.click(languageCheckbox);
      });

      expect(languageCheckbox.checked).toBe(true);
    }
  });

  it("should be able to select all patient groups", () => {
    const patientGroupCollapsible = getByText(
      collapsiblesInitial.patientgroups.label
    );

    act(() => {
      fireEvent.click(patientGroupCollapsible);
    });

    for (const patientGroup of collapsiblesInitial.patientgroups.options) {
      const patientGroupCheckbox = getByLabelText(patientGroup.label);

      act(() => {
        fireEvent.click(patientGroupCheckbox);
      });

      expect(patientGroupCheckbox.checked).toBe(true);
    }
  });

  it("should be able to select all services", () => {
    const servicesCollapsible = getByText(collapsiblesInitial.services.label);

    act(() => {
      fireEvent.click(servicesCollapsible);
    });

    for (const service of collapsiblesInitial.services.options) {
      const serviceCheckbox = getByLabelText(service.label);

      act(() => {
        fireEvent.click(serviceCheckbox);
      });

      expect(serviceCheckbox.checked).toBe(true);
    }
  });

  it("should be able to select all appointments", () => {
    const appointmentsCollapsible = getByText(
      collapsiblesInitial.appointments.label
    );

    act(() => {
      fireEvent.click(appointmentsCollapsible);
    });

    for (const appointment of collapsiblesInitial.appointments.options) {
      const appointmentCheckbox = getByLabelText(appointment.label);

      act(() => {
        fireEvent.click(appointmentCheckbox);
      });

      expect(appointmentCheckbox.checked).toBe(true);
    }
  });

  // it("should be able to select location", () => {
  //   const locationCollapsible = getByText(collapsiblesInitial.location.label);

  //   act(() => {
  //     fireEvent.click(locationCollapsible);
  //   });

  //   const locationCheckbox = getByLabelText("Beirut");

  //   act(() => {
  //     fireEvent.click(locationCheckbox);
  //   });

  //   expect(locationCheckbox.checked).toBe(true);
  // });

  xit("should be able to click on collapsible to show more options", async () => {
    const { container, getByText } = render(
      <Sidebar locations={["beirut", "england"]} />
    );
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
    const { container, getByText, getByTestId } = render(
      <Sidebar locations={["beirut", "england"]} />
    );
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
