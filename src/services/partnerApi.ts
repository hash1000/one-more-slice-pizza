export type BusinessType =
  | "new_restaurant"
  | "own_one_location"
  | "own_multiple_locations"
  | "convenience_store_chain"
  | "investor"
  | "other";

export interface PartnerInquiryPayload {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  businessType: BusinessType;
  locationsCount?: string;
  hearAboutUs?: string;
  comments?: string;
  honeypot?: string;
}

const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:8500/api";

interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
}

export async function submitPartnerInquiry(
  payload: PartnerInquiryPayload
): Promise<{ success: boolean; id: string | null }> {
  const response = await fetch(`${API_BASE_URL}/partner-inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to submit partner inquiry");
  }

  const body = (await response.json()) as StandardResponse<{
    success: boolean;
    id: string | null;
  }>;
  return body.data;
}
