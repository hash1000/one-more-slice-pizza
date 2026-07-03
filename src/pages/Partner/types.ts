import type { BusinessType } from "../../services/partnerApi";

export interface LocationEntry {
  city: string;
  state: string;
}

export interface PartnerFormState {
  businessType: BusinessType | "";
  locationsCount: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  additionalLocations: LocationEntry[];
  hearAboutUs: string;
  comments: string;
  honeypot: string;
}

export const emptyLocationEntry: LocationEntry = { city: "", state: "" };

export const initialFormState: PartnerFormState = {
  businessType: "",
  locationsCount: "",
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  additionalLocations: [],
  hearAboutUs: "",
  comments: "",
  honeypot: "",
};

export interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
}

export const businessTypeOptions: { value: BusinessType; label: string }[] = [
  { value: "new_restaurant", label: "I'm interested in opening a new pizza restaurant" },
  { value: "own_one_location", label: "I already own one location" },
  { value: "own_multiple_locations", label: "I own multiple locations" },
  { value: "convenience_store_chain", label: "I represent a convenience store chain" },
  { value: "investor", label: "I am an investor" },
  { value: "other", label: "Other" },
];

export const locationsCountOptions = ["1", "2-5", "6-10", "11-25", "25+"];

export const usStates = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

export const hearAboutUsOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "Trade Show / Event",
  "News / Press",
  "Other",
];
