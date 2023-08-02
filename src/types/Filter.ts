export interface FilterType {
  services?: string[];
  appointments?: string[];
  languages?: string[];
  patientgroups?: string[];
  price?: string[];
}

export interface FilterQueryParam {
  languages?: string[] | string;
  patientgroups?: string[] | string;
}
