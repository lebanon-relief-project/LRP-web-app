interface ConsentData {
  name: string;
  data: string;
  dateOfConsent: Date;
  deletionRequest: boolean;
  dateOfDeletionRequest?: Date;
}
