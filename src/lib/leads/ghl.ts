import type { IntegrationResult, Lead } from "./types";

const GHL_BASE = "https://services.leadconnectorhq.com";

interface GhlConfig {
  apiKey: string;
  locationId: string;
  pipelineId?: string;
  stageId?: string;
}

interface CustomField {
  id: string;
  field_value: string;
}

const readConfig = (): GhlConfig | null => {
  const apiKey = process.env.NEXT_PUBLIC_GHL_API_KEY;
  const locationId = process.env.NEXT_PUBLIC_GHL_LOCATION_ID;
  if (!apiKey || !locationId) return null;
  return {
    apiKey,
    locationId,
    pipelineId: process.env.NEXT_PUBLIC_GHL_PIPELINE_ID,
    stageId: process.env.NEXT_PUBLIC_GHL_STAGE_ID,
  };
};

const ghlFetch = (config: GhlConfig, path: string, init: { method: string; body?: object } = { method: "GET" }) =>
  fetch(`${GHL_BASE}${path}`, {
    method: init.method,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: init.body ? JSON.stringify(init.body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });

/** Custom fields are written by their real field id; a field is only sent if it has a value AND a configured id. */
const buildFields = (entries: [id: string | undefined, value: string][]): CustomField[] =>
  entries.flatMap(([id, value]) => (id && value ? [{ id, field_value: value }] : []));

async function findContactIdByEmail(config: GhlConfig, email: string): Promise<string | null> {
  const res = await ghlFetch(
    config,
    `/contacts/search/duplicate?locationId=${config.locationId}&email=${encodeURIComponent(email)}`
  );
  if (!res.ok) return null;
  const data: { contact?: { id?: string } } = await res.json();
  return data.contact?.id ?? null;
}

/** Find-or-create the contact by email (refreshing its custom fields if it exists), then open an opportunity. */
export async function sendToGhl(lead: Lead): Promise<IntegrationResult> {
  const config = readConfig();
  if (!config) {
    console.warn("GHL: NEXT_PUBLIC_GHL_API_KEY / NEXT_PUBLIC_GHL_LOCATION_ID missing, skipping.");
    return { success: false, error: "GHL credentials missing" };
  }

  try {
    // Contact-level custom fields: the topic the visitor picked, and their company.
    const contactFields = buildFields([
      [process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_TOPIC, lead.topic],
      [process.env.NEXT_PUBLIC_GHL_CONTACT_FIELD_COMPANYS_NAME, lead.company],
    ]);

    let contactId = await findContactIdByEmail(config, lead.email);

    if (contactId) {
      // Returning lead: update, otherwise their custom fields would never be refreshed.
      const res = await ghlFetch(config, `/contacts/${contactId}`, { method: "PUT", body: { customFields: contactFields } });
      if (!res.ok) console.error("GHL: contact update failed:", res.status, await res.text());
    } else {
      const res = await ghlFetch(config, "/contacts/", {
        method: "POST",
        body: {
          locationId: config.locationId,
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          ...(lead.company && { companyName: lead.company }),
          source: lead.leadSource,
          tags: ["website-lead"],
          customFields: contactFields,
        },
      });
      if (!res.ok) {
        const error = await res.text();
        console.error("GHL: contact create failed:", res.status, error);
        return { success: false, error };
      }
      const data: { contact?: { id?: string } } = await res.json();
      contactId = data.contact?.id ?? null;
    }

    if (!contactId || !config.pipelineId || !config.stageId) {
      console.error("GHL: cannot create opportunity (missing contact id, pipeline id or stage id)");
      return { success: false, error: "Missing contact, pipeline or stage id" };
    }

    // Opportunity-level custom fields: the topic ({{opportunity.ou__topic}}), the visitor's message, and where the lead came from.
    const opportunityFields = buildFields([
      [process.env.NEXT_PUBLIC_GHL_OPP_FIELD_TOPIC, lead.topic],
      [process.env.NEXT_PUBLIC_GHL_OPP_FIELD_DESCRIPTION, lead.message],
      [process.env.NEXT_PUBLIC_GHL_OPP_FIELD_LEAD_SOURCE, lead.leadSource],
    ]);

    const oppRes = await ghlFetch(config, "/opportunities/", {
      method: "POST",
      body: {
        pipelineId: config.pipelineId,
        pipelineStageId: config.stageId,
        locationId: config.locationId,
        name: `${lead.name} - Web Lead`,
        contactId,
        status: "open",
        customFields: opportunityFields,
      },
    });
    if (!oppRes.ok) {
      const error = await oppRes.text();
      console.error("GHL: opportunity create failed:", oppRes.status, error);
      return { success: false, error };
    }
    return { success: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown GHL error";
    console.error("GHL: integration error:", error);
    return { success: false, error };
  }
}
