import { rest } from "msw";
import { setupServer } from "msw/node";

import { getTherapists } from "./therapists.service";

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

const handlers = [
  rest.get(/\/api\/psychotherapists/, async (req, res, ctx) => {
    return res(ctx.json(mockTherapistsResponse));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("The therapists service", () => {
  describe("getTherapists", () => {
    xit("should return therapists", async () => {
      let response = await getTherapists();

      expect(response).toEqual(mockTherapistsResponse);
    });

    it("should throw nice error message when getting therapists fails", async () => {
      const newHandlers = [
        rest.get(/\/api\/psychotherapists/, async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "Server error" }));
        }),
      ];

      server.resetHandlers(...newHandlers);

      await expect(getTherapists()).rejects.toThrow(
        "Failed to fetch therapists"
      );
    });
  });
});
