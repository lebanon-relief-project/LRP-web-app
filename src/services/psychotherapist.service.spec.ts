import { samplePsychotherapistCloudantResponse } from "../types/sampleData/PsychotherapistData";
import Container from "typedi";
import { CloudantService, PsychotherapistService } from ".";
import { MockLogger } from "../util/test-util";
import { DocumentScope } from "@cloudant/cloudant/types";
import { InternalServerError } from "routing-controllers";

const mockList = jest.fn();
class MockDb implements Partial<DocumentScope<any>> {
  list = mockList;
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
});
