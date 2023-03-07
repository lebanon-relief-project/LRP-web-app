import {
  samplePsychotherapistCloudantResponse,
  samplePsychotherapistCloudantResponseDuplicated,
} from "../types/sampleData/PsychotherapistData";
import Container from "typedi";
import { CloudantService, PsychotherapistService } from ".";
import { MockLogger } from "../util/test-util";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";
import { FilterType } from "../types/Filter";

const mockList = jest.fn();
const mockView = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  list = mockList;
  view = mockView;
}

Container.set("logger", new MockLogger());
Container.set(CloudantService, { use: () => new MockDb() });

let psychotherapistService: PsychotherapistService = Container.get(
  PsychotherapistService
);

describe("The psychotherapist service", () => {
  let result;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("the getPsychotherapist() function", () => {
    beforeEach(async () => {
      mockList.mockResolvedValue(samplePsychotherapistCloudantResponse);

      result = await psychotherapistService.getPsychotherapists();
    });

    it("should call the cloudant service", () => {
      expect(mockList).toHaveBeenCalled();
    });

    it("should return a psythotherapist from the cloudant database", async () => {
      expect(result).toEqual({
        psychotherapists: [
          {
            firstName: "string",
            lastName: "string",
            bio: "string",
            remoteSession: true,
            f2fSession: true,
            location: "string",
            therapyServices: {
              theraphyService: true,
            },
            licenseNumber: "string",
            emergencyPhoneNumber: "string",
            consentData: {
              name: "string",
              data: "string",
              dateOfConsent: new Date(2021, 11, 17),
              deletionRequest: true,
              dateOfDeletionRequest: new Date(2022, 11, 17),
            },
            website: "string",
            email: "string",
            patientGroups: {
              patientGroup: true,
            },
            supportedGenders: {
              Male: true,
              Female: true,
            },
            legalPersonality: "string",
            phoneNumber: "string",
            picture: "string",
            therapistGender: "string",
            languages: ["English"],
            internationalPaymentsOnly: true,
            freeService: true,
            bookingApp: "string",
          },
        ],
      });
    });

    it("should return empty array if no psychotherapists are retrieved", async () => {
      mockList.mockResolvedValue({ total_rows: 0, rows: [] });
      result = await psychotherapistService.getPsychotherapists();

      expect(result.psychotherapists).toEqual([]);
    });

    it("should skip flashcard if the cloudant doc is undefined", async () => {
      mockList.mockResolvedValue({
        total_rows: 2,
        offset: 0,
        rows: [
          {
            id: "some random id 1",
            key: "some random key 1",
            value: {},
            doc: undefined,
          },
          {
            id: "some random id 2",
            key: "some random key 2",
            value: {},
            doc: {
              firstName: "string",
              lastName: "string",
              bio: "string",
              remoteSession: true,
              f2fSession: true,
              location: "string",
              therapyServices: {
                theraphyService: true,
              },
              licenseNumber: "string",
              emergencyPhoneNumber: "string",
              consentData: {
                name: "string",
                data: "string",
                dateOfConsent: new Date(2021, 11, 17),
                deletionRequest: true,
                dateOfDeletionRequest: new Date(2022, 11, 17),
              },
              website: "string",
              email: "string",
              patientGroups: {
                patientGroup: true,
              },
              supportedGenders: {
                Male: true,
                Female: true,
              },
              legalPersonality: "string",
              phoneNumber: "string",
              picture: "string",
              therapistGender: "string",
              languages: ["English"],
              internationalPaymentsOnly: true,
              freeService: true,
              bookingApp: "string",
            },
          },
        ],
      });

      const expected = {
        psychotherapists: [
          {
            firstName: "string",
            lastName: "string",
            bio: "string",
            remoteSession: true,
            f2fSession: true,
            location: "string",
            therapyServices: {
              theraphyService: true,
            },
            licenseNumber: "string",
            emergencyPhoneNumber: "string",
            consentData: {
              name: "string",
              data: "string",
              dateOfConsent: new Date(2021, 11, 17),
              deletionRequest: true,
              dateOfDeletionRequest: new Date(2022, 11, 17),
            },
            website: "string",
            email: "string",
            patientGroups: {
              patientGroup: true,
            },
            supportedGenders: {
              Male: true,
              Female: true,
            },
            legalPersonality: "string",
            phoneNumber: "string",
            picture: "string",
            therapistGender: "string",
            languages: ["English"],
            internationalPaymentsOnly: true,
            freeService: true,
            bookingApp: "string",
          },
        ],
      };

      return psychotherapistService.getPsychotherapists().then((data) => {
        expect(data).toEqual(expected);
      });
    });

    it("should throw an error if the db connection fails", async () => {
      mockList.mockImplementation(() => {
        throw new Error("Ugly error");
      });

      const functionToThrow = async () =>
        await psychotherapistService.getPsychotherapists();

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(
          `getPsychotherapists: Failed to retrieve psychotherapists`
        )
      );
    });
  });

  describe("the getPsychotherapist() function using filter", () => {
    const mockFilter: FilterType = {
      languages: ["english"],
    };
    beforeEach(async () => {
      mockView.mockResolvedValue(
        samplePsychotherapistCloudantResponseDuplicated
      );

      result = await psychotherapistService.getPsychotherapists(mockFilter);
    });

    it("should call the cloudant service with correct arguments", () => {
      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByLanguages",
        { keys: ["english"], include_docs: true }
      );
    });

    it("should return a psythotherapist from the cloudant database that matches the filter and no duplicated records", async () => {
      expect(result.psychotherapists.length).toBe(1);

      expect(result).toEqual({
        psychotherapists: [
          {
            firstName: "string",
            lastName: "string",
            bio: "string",
            remoteSession: true,
            f2fSession: true,
            location: "string",
            therapyServices: {
              theraphyService: true,
            },
            licenseNumber: "string",
            emergencyPhoneNumber: "string",
            consentData: {
              name: "string",
              data: "string",
              dateOfConsent: new Date(2021, 11, 17),
              deletionRequest: true,
              dateOfDeletionRequest: new Date(2022, 11, 17),
            },
            website: "string",
            email: "string",
            patientGroups: {
              patientGroup: true,
            },
            supportedGenders: {
              Male: true,
              Female: true,
            },
            legalPersonality: "string",
            phoneNumber: "string",
            picture: "string",
            therapistGender: "string",
            languages: ["English"],
            internationalPaymentsOnly: true,
            freeService: true,
            bookingApp: "string",
          },
        ],
      });
    });

    it("should throw an error if the db view connection fails", async () => {
      const mockFilter: FilterType = {
        languages: ["english"],
      };
      mockView.mockImplementation(() => {
        throw new Error("Ugly error");
      });

      const functionToThrow = async () =>
        await psychotherapistService.getPsychotherapists(mockFilter);

      await expect(functionToThrow()).rejects.toThrow(
        new InternalServerError(
          `getPsychotherapists: Failed to retrieve psychotherapists`
        )
      );
    });
  });
});
