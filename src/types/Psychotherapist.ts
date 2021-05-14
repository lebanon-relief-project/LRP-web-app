interface Psychotherapist {
  firstName: string;
  lastName: string;
  bio: string;
  remoteSession: boolean;
  f2fSession: boolean;
  location: string;
  therapyServices: { [theraphyService: string]: boolean };
  licenseNumber: string;
  emergencyPhoneNumber?: number;
  consentData: ConsentData;
  website: string;
  email: string;
  patientGroups: { [patientGroup: string]: boolean };
  supportedGenders: { [supportedGender: string]: boolean };
  legalPersonality: string;
  phoneNumber: number;
  picture: string;
  therapistGender: string;
  languages: string[];
  internationalPaymentsOnly: string;
  freeService: string;
  bookingApp: string;
}
