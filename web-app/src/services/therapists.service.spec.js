import { getTherapists } from "./therapists.service";
import axios from "axios";

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

describe("getTherapists", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return therapists", async () => {
    axios.get.mockResolvedValueOnce({
      data: { psychotherapists: mockTherapistsResponse },
    });
    const response = await getTherapists();

    expect(response).toEqual(mockTherapistsResponse);
  });

  it("should throw an error when getting therapists fails", async () => {
    axios.get.mockRejectedValueOnce("something ugly");

    await expect(getTherapists()).rejects.toThrow("Failed to fetch therapists");
  });

  it("should return filtered list of therapists when filter is supplied", async () => {
    axios.get.mockResolvedValueOnce({
      data: { psychotherapists: mockTherapistsResponse },
    });
    const mockFilter = { languages: ["test"] };
    const response = await getTherapists(mockFilter);

    expect(response).toEqual(mockTherapistsResponse);

    const expectedParams = new URLSearchParams({ "filter[languages]": "test" });
    expect(axios.get).toHaveBeenCalledWith("/api/psychotherapists", {
      params: expectedParams,
    });
  });

  it("should call api with empty params when undefined filter is supplied", async () => {
    axios.get.mockResolvedValueOnce({
      data: { psychotherapists: mockTherapistsResponse },
    });
    const mockFilter = undefined;
    const response = await getTherapists(mockFilter);

    expect(response).toEqual(mockTherapistsResponse);
    expect(axios.get).toHaveBeenCalledWith("/api/psychotherapists", {
      params: expect.any(Object),
    });
  });

  it("should return empty list when api returns empty list", async () => {
    axios.get.mockResolvedValueOnce({ data: { psychotherapists: [] } });
    const mockFilter = {};
    const response = await getTherapists(mockFilter);

    expect(response).toEqual([]);
  });
});
