export interface FilterType {
  location?: string[];
  services?: string[];
  appointments?: string[];
  languages?: string[];
  patientgroups?: string[];
  price?: string[];
  legalpersonality?: string[];
  name?: string[];
}

export interface FilterQueryParam {
  languages?: string[] | string;
  patientgroups?: string[] | string;
  name?: string[] | string;
  location?: string[] | string;
  services?: string[] | string;
  appointments?: string[] | string;
  price?: string[] | string;
  legalpersonality?: string[] | string;
}
