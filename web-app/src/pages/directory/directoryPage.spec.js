import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import "jest-styled-components";
import DirectoryPage from "./directoryPage";
import { listenerCount } from "process";
import { act } from "react-dom/test-utils";

import * as therapistService from "../../services/therapists.service";

jest.mock("./components/Banner", (props) => {
  return (props) => <div>Banner</div>;
});

jest.mock("./components/Sidebar", () => {
  return (props) => {
    return (
      <div
        data-testid="sidebar"
        onClick={() => {
          props.onFilterChange({ "Preferred languages": { English: true } });
        }}
      >
        Sidebar
      </div>
    );
  };
});

jest.mock("../../services/therapists.service");

const getTherapistsSpy = jest.spyOn(therapistService, "getTherapists");

Date.now = jest.fn(() => 1482363367071);

const mockTherapistsResponse = [
  {
    firstName: "test",
    lastName: "string",
    bio: "string",
    remoteSession: true,
    f2fSession: true,
    location: "string",
    therapyServices: { string: true },
    licenseNumber: "string",
    emergencyPhoneNumber: "string",
    consentData: {
      name: "string",
      data: "string",
      dateOfConsent: new Date(2022, 2, 2),
      deletionRequest: false,
    },
    website: "string",
    email: "string",
    patientGroups: { test: true },
    supportedGenders: { test: true },
    legalPersonality: "string",
    phoneNumber: "string",
    picture: "string",
    therapistGender: "string",
    languages: ["test"],
    internationalPaymentsOnly: false,
    freeService: true,
    bookingApp: "test",
  },
];

afterEach(() => {
  jest.clearAllMocks();
});

describe("the DirectoryPage component", () => {
  it("should match the snapshot", async () => {
    getTherapistsSpy.mockResolvedValue(mockTherapistsResponse);
    const { container } = render(<DirectoryPage />);

    await wait();
    expect(container).toMatchSnapshot();
  });

  it("should retrieve therapists when filter executes onFilterChange", async () => {
    getTherapistsSpy.mockResolvedValue(mockTherapistsResponse);
    const { container, getByTestId } = render(<DirectoryPage />);

    fireEvent.click(getByTestId("sidebar"));

    await wait();
    expect(getTherapistsSpy).toHaveBeenNthCalledWith(2, {
      languages: ["English"],
    });
  });
});
