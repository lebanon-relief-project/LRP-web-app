import { rest } from "msw";
import { setupServer } from "msw/node";

import { getTherapists } from "./therapists.service";

import * as axios from "axios";

jest.mock("axios");

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
      dateOfConsent: `${new Date(2022, 2, 2)}`,
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

const paramsSpy = jest
  .spyOn(URLSearchParams.prototype, "append")
  .mockImplementation();

afterEach(() => {
  jest.clearAllMocks();
  // dont know why above does not clear the spy too
  paramsSpy.mockClear();
});

describe("The therapists service", () => {
  describe("getTherapists", () => {
    it("should return therapists", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { psychotherapists: mockTherapistsResponse } })
      );
      let response = await getTherapists();

      expect(response).toEqual(mockTherapistsResponse);
    });

    it("should throw nice error message when getting therapists fails", async () => {
      axios.get.mockImplementationOnce(() => Promise.reject("something ugly"));

      await expect(getTherapists()).rejects.toThrow(
        "Failed to fetch therapists"
      );
    });

    it("should return filtered list of therapists when filter is supplied", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { psychotherapists: mockTherapistsResponse } })
      );
      const mockFilter = { languages: ["test"] };
      let response = await getTherapists(mockFilter);

      expect(response).toEqual(mockTherapistsResponse);
      expect(axios.get).toHaveBeenCalledWith("/api/psychotherapists", {
        params: expect.any(Object),
      });
      expect(paramsSpy).toHaveBeenNthCalledWith(1, "filter[languages]", "test");
    });

    it("should not attempt to call api with params when undefined filter is supplied", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: { psychotherapists: mockTherapistsResponse } })
      );
      const mockFilter = undefined;
      let response = await getTherapists(mockFilter);

      expect(response).toEqual(mockTherapistsResponse);
      expect(axios.get).toHaveBeenCalledWith("/api/psychotherapists");
      expect(paramsSpy).not.toHaveBeenCalled();
    });
  });
});
