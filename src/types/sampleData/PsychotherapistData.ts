import {
  PsychotherapistResponse,
  PsychotherapistCloudantResponse,
} from "../Psychotherapist";

export const samplePsychotherapistsResponse: PsychotherapistResponse = {
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

export const samplePsychotherapistCloudantResponse: PsychotherapistCloudantResponse =
  {
    total_rows: 1,
    offset: 0,
    rows: [
      {
        id: "test_id_1",
        key: "test key",
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
  };
