interface Psychotherapist {
  firstName: string;
  lastName: string;
  bio: string;
  remoteSession: boolean;
  f2fSession: boolean;
  location: string;
  therapyServices: { [theraphyService: string]: boolean };
  licenseNumber: string;
  emergencyPhoneNumber?: string;
  consentData: ConsentData;
  website: string;
  email: string;
  patientGroups: { [patientGroup: string]: boolean };
  supportedGenders: { [supportedGender: string]: boolean };
  legalPersonality: string;
  phoneNumber: string;
  picture: string;
  therapistGender: string;
  languages: string[];
  internationalPaymentsOnly: boolean;
  freeService: boolean;
  bookingApp: string;
}
