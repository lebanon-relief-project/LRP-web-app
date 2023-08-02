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
    });

    it("should call the cloudant service with correct arguments", async () => {
      result = await psychotherapistService.getPsychotherapists(mockFilter);
      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByLanguages",
        { keys: ["english"], include_docs: true }
      );
    });

    it("should call cloudant service with correct arguments when filter for services is supplied", async () => {
      const mockFilter: FilterType = {
        services: ["service"],
      };

      await psychotherapistService.getPsychotherapists(mockFilter);

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByServices",
        { keys: ["service"], include_docs: true }
      );
    });

    it("should call cloudant service with correct arguments when filter for appointment type is supplied", async () => {
      const mockFilter: FilterType = {
        appointments: ["f2fSession"],
      };

      await psychotherapistService.getPsychotherapists(mockFilter);

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByAppointments",
        { keys: ["f2fSession"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledTimes(1);
    });

    it("should call cloudant service with correct arguments when filter for patient groups is supplied", async () => {
      const mockFilter: FilterType = {
        patientgroups: ["patientGroup"],
      };

      await psychotherapistService.getPsychotherapists(mockFilter);

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByPatientGroups",
        { keys: ["patientGroup"], include_docs: true }
      );
    });

    it("should call cloudant service with correct arguments when all filters are supplied", async () => {
      const mockFilter: FilterType = {
        languages: ["english"],
        services: ["service"],
        appointments: ["f2fSession"],
        patientgroups: ["patientGroup"],
        price: ["price"],
      };

      await psychotherapistService.getPsychotherapists(mockFilter);

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByLanguages",
        { keys: ["english"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByServices",
        { keys: ["service"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByAppointments",
        { keys: ["f2fSession"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByPatientGroups",
        { keys: ["patientGroup"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledWith(
        "therapistsDesignDoc",
        "therapistsByPrice",
        { keys: ["price"], include_docs: true }
      );

      expect(mockView).toHaveBeenCalledTimes(5);
    });

    it("should return empty array if the view has returned no rows matching our filter", async () => {
      mockView.mockResolvedValue({ rows: [] });
      const mockFilter: FilterType = {
        languages: ["test"],
      };

      result = await psychotherapistService.getPsychotherapists(mockFilter);

      expect(result).toEqual({ psychotherapists: [] });
    });

    it("should return a psythotherapist from the cloudant database that matches the filter and no duplicated records", async () => {
      result = await psychotherapistService.getPsychotherapists(mockFilter);

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
