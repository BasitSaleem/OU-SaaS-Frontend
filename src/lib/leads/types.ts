/** What the contact form sends. These are the only fields the form has. */
export interface LeadInput {
  name: string;
  email: string;
  /** Optional. */
  company: string;
  message: string;
  /** One of CONTACT_TOPICS (Account & Login, Owners Pulse, ...). */
  topic: string;
}

/** A validated lead, with the name split the way GHL and ClickUp store it. */
export interface Lead extends LeadInput {
  firstName: string;
  lastName: string;
  leadSource: string;
}

export interface IntegrationResult {
  success: boolean;
  error?: string;
}

/** Every lead from this site is tagged with this source in GHL and ClickUp. */
export const LEAD_SOURCE = "Owners Universe";
