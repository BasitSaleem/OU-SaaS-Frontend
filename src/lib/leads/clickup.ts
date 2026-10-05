import type { IntegrationResult, Lead } from "./types";

const CLICKUP_BASE = "https://api.clickup.com/api/v2";
const FIELD_CACHE_MS = 5 * 60_000;

interface ClickUpConfig {
  token: string;
  listId: string;
}

interface ClickUpFieldDefinition {
  id: string;
  type: string;
  type_config?: { options?: { id: string; name?: string; label?: string }[] };
}

const readConfig = (): ClickUpConfig | null => {
  const token = process.env.NEXT_PUBLIC_CLICKUP_API_TOKEN;
  const listId = process.env.NEXT_PUBLIC_CLICKUP_LIST_ID;
  return token && listId ? { token, listId } : null;
};

const clickUpFetch = (config: ClickUpConfig, path: string, init: { method: string; body?: object } = { method: "GET" }) =>
  fetch(`${CLICKUP_BASE}${path}`, {
    method: init.method,
    headers: { Authorization: config.token, "Content-Type": "application/json" },
    body: init.body ? JSON.stringify(init.body) : undefined,
    signal: AbortSignal.timeout(10_000),
  });

// The list's field definitions rarely change, so they are cached briefly instead of fetched per lead.
let fieldCache: { at: number; fields: Promise<ClickUpFieldDefinition[]> } | null = null;

async function fetchListFields(config: ClickUpConfig): Promise<ClickUpFieldDefinition[]> {
  const res = await clickUpFetch(config, `/list/${config.listId}/field`);
  if (!res.ok) throw new Error(`field list failed: ${res.status}`);
  const data: { fields: ClickUpFieldDefinition[] } = await res.json();
  return data.fields;
}

/** The cached value is the in-flight promise, so two dropdowns resolving at once share one request. */
function getListFields(config: ClickUpConfig): Promise<ClickUpFieldDefinition[]> {
  if (fieldCache && Date.now() - fieldCache.at < FIELD_CACHE_MS) return fieldCache.fields;
  const fields = fetchListFields(config);
  fieldCache = { at: Date.now(), fields };
  fields.catch(() => {
    fieldCache = null; // don't cache a failure
  });
  return fields;
}

/** A drop_down field wants the option's id, not its text. Look the option up by name. */
async function resolveOptionId(config: ClickUpConfig, fieldId: string, optionName: string): Promise<string | null> {
  const field = (await getListFields(config)).find((f) => f.id === fieldId);
  const wanted = optionName.trim().toLowerCase();
  const option = field?.type_config?.options?.find((o) => (o.name ?? o.label ?? "").trim().toLowerCase() === wanted);
  if (!option) console.warn(`ClickUp: no option named "${optionName}" on field ${fieldId}; leaving it blank.`);
  return option?.id ?? null;
}

async function setField(config: ClickUpConfig, taskId: string, fieldId: string, value: string) {
  try {
    const res = await clickUpFetch(config, `/task/${taskId}/field/${fieldId}`, { method: "POST", body: { value } });
    if (!res.ok) console.error(`ClickUp: setting field ${fieldId} failed: ${res.status} ${await res.text()}`);
  } catch (err) {
    console.error(`ClickUp: setting field ${fieldId} errored:`, err instanceof Error ? err.message : err);
  }
}

/** Creates the task, then sets each custom field with its own call (task creation doesn't accept field values). */
export async function sendToClickUp(lead: Lead): Promise<IntegrationResult> {
  const config = readConfig();
  if (!config) {
    console.warn("ClickUp: NEXT_PUBLIC_CLICKUP_API_TOKEN / NEXT_PUBLIC_CLICKUP_LIST_ID missing, skipping.");
    return { success: false, error: "ClickUp credentials missing" };
  }

  try {
    const taskRes = await clickUpFetch(config, `/list/${config.listId}/task`, {
      method: "POST",
      body: { name: lead.name || "New Web Lead" },
    });
    if (!taskRes.ok) {
      const error = await taskRes.text();
      console.error("ClickUp: task create failed:", taskRes.status, error);
      return { success: false, error };
    }
    const { id: taskId }: { id: string } = await taskRes.json();

    const topicFieldId = process.env.NEXT_PUBLIC_CLICKUP_CONTACT_FIELD_TOPIC;
    const sourceFieldId = process.env.NEXT_PUBLIC_CLICKUP_FIELD_LEAD_SOURCE;

    // Plain-text fields, then the two dropdowns (topic + lead source) resolved to their option ids.
    const textFields: [string | undefined, string][] = [
      [process.env.NEXT_PUBLIC_CLICKUP_FIELD_FIRST_NAME, lead.firstName],
      [process.env.NEXT_PUBLIC_CLICKUP_FIELD_LAST_NAME, lead.lastName],
      [process.env.NEXT_PUBLIC_CLICKUP_FIELD_EMAIL, lead.email],
      [process.env.NEXT_PUBLIC_CLICKUP_FIELD_COMPANY_NAME, lead.company],
      [process.env.NEXT_PUBLIC_CLICKUP_FIELD_CLIENT_NOTES, lead.message],
    ];
    const dropdowns: [string | undefined, string][] = [
      [topicFieldId, lead.topic],
      [sourceFieldId, lead.leadSource],
    ];

    await Promise.all([
      ...textFields.map(([fieldId, value]) => (fieldId && value ? setField(config, taskId, fieldId, value) : undefined)),
      ...dropdowns.map(async ([fieldId, label]) => {
        if (!fieldId || !label) return;
        const optionId = await resolveOptionId(config, fieldId, label).catch((err) => {
          console.error("ClickUp: could not read list fields:", err instanceof Error ? err.message : err);
          return null;
        });
        if (optionId) await setField(config, taskId, fieldId, optionId);
      }),
    ]);

    return { success: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown ClickUp error";
    console.error("ClickUp: integration error:", error);
    return { success: false, error };
  }
}
