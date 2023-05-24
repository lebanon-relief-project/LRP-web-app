export interface FilterType {
  services?: string[];
  appointments?: string[];
  languages?: string[];
  patientgroups?: string[];
}

export interface FilterQueryParam {
  languages?: string[] | string;
  patientgroups?: string[] | string;
}
