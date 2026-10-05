# Lead Capture Integration Flow — GHL + ClickUp + Slack

> Reference spec extracted from a working implementation (`src/actions/submitLead.ts` in a Next.js App Router project). Hand this whole document to Claude in a new project and say: "implement this lead integration flow for my contact form, adapting the field IDs/env vars to my own GHL/ClickUp/Slack accounts."

---

## 1. Architecture Overview

One server action (`submitLeadAction`) receives a form submission and fans it out to three **independent** integrations. The core rule that took real trial-and-error to land on:

> **The visitor-facing success/failure of the form must never depend on any one third-party integration.** GHL, ClickUp, and Slack each run in their own `try/catch`, each degrade gracefully if their env vars are missing, and none of their failures should block or error out the "thanks, we got your message" state the visitor sees. Only the reCAPTCHA check (see §2) should ever cause a visible form error.

Sequence per submission:

```
1. Verify reCAPTCHA token (server-side, against Google's siteverify endpoint)
2. Parse the incoming form params into named variables
3. GHL:      search for duplicate contact (email, then phone) → create or update
             contact (with custom fields) → create opportunity (with custom fields)
4. ClickUp:  create a task → set every custom field individually via its own
             API call (task creation does not accept custom field values inline)
5. Slack:    POST a formatted text message to an Incoming Webhook URL
6. Return { success: true, ghl: {...}, clickup: {...}, slack: {...} }
   — success is true once recaptcha passes, regardless of what happened in 3-5.
   Each integration's own success/error is still returned for logging/debugging.
```

**Gotcha to avoid**: at one point this codebase accidentally set the top-level `success` to mirror ClickUp's result specifically (`success: clickupResult.success`). The moment ClickUp's env vars were missing in production, the *entire form* appeared broken to real visitors, even though the lead was perfectly valid and GHL/Slack worked fine. Don't tie overall success to any single downstream integration.

---

## 2. reCAPTCHA Gate (the only thing allowed to fail the form)

```ts
const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY?.trim();
if (!secretKey) return { success: false, error: "Server configuration error: missing reCAPTCHA secret" };
if (!recaptchaToken) return { success: false, error: "Please complete the reCAPTCHA challenge." };

const verifyRes = await fetch(
  `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
  { method: "POST" }
);
const verifyJson = await verifyRes.json();
if (!verifyJson.success) return { success: false, error: "reCAPTCHA verification failed. Please try again." };
```

Everything below this point should never throw a visitor-facing error.

---

## 3. Incoming Params Contract

The client form serializes to a flat `URLSearchParams` string and passes it as the first argument. Field names below are what the server action expects — the front-end form(s) build this exact key set:

| Param key | Meaning |
|---|---|
| `first_name`, `last_name` | Contact name |
| `email`, `phone_number` | Contact info |
| `company_name` | Business name (maps to GHL's built-in `companyName` too) |
| `trade` | e.g. "Plumbing" — the visitor's industry |
| `website_url` | Visitor's business website (normalize to add `https://` if they typed a bare domain) |
| `services_proposed` | Comma-separated service names, e.g. `"SEO, Website, GMB Management"` |
| `employee_count` | Team size bucket, e.g. `"2-5"` |
| `description` | Raw free-text message field, **kept separate** from the combined notes blob below |
| `client_notes` | A pre-built combined string like `"Company: X \| Team Size: Y \| Interests: Z \| Message: W"` — built client-side by the form, used for GHL and Slack, but explicitly NOT reused for ClickUp's "Client Notes" field (see §5) |
| `lead_source` | e.g. `"OP Website"` — defaults to a fallback string if absent |

```ts
const params = new URLSearchParams(paramsStr);
const firstName = params.get("first_name") || "";
// ...one const per key above, with `|| ""` fallbacks
```

---

## 4. GoHighLevel (GHL) Integration

### Env vars
```
NEXT_PUBLIC_GHL_API_KEY               # Private Integration Token, "pit-..."
NEXT_PUBLIC_GHL_LOCATION_ID
NEXT_PUBLIC_GHL_PIPELINE_ID
NEXT_PUBLIC_GHL_STAGE_ID
```
All GHL calls use `Version: 2021-07-28` and `Authorization: Bearer <token>`.

### Flow
1. **Duplicate search by email**: `GET /contacts/search/duplicate?locationId=...&email=...`
2. If not found, **duplicate search by phone**: `GET /contacts/search/duplicate?locationId=...&number=...`
3. **If still not found — create**: `POST /contacts/` with `firstName, lastName, email, phone, companyName, source, tags: ["website-lead"], customFields`
4. **If found — update** (important, often skipped): `PUT /contacts/{contactId}` with just `customFields`. Without this step, a *returning* lead's custom fields never get set, only brand-new contacts would.
5. **Create Opportunity**: `POST /opportunities/` with `pipelineId, pipelineStageId, locationId, name, contactId, status: "open", customFields`.

### Custom fields — the critical, non-obvious part

GHL's REST API accepts a `customFields` array on both Contacts and Opportunities in the shape `[{ id, field_value }]`. **Two format traps to know up front:**

1. **`key`-based custom fields silently fail.** GHL's merge-tag syntax (`{{contact.your_field}}`, `{{opportunity.your_field}}`) looks like it should map directly to an API `key` property (`{ key: "contact.your_field", field_value: "..." }`). It does not error — it just gets dropped. Verified by writing with `key` and reading the record back: `customFields: []`. **Only numeric/string `id`-based custom fields actually persist**: `{ id: "<real-field-id>", field_value: "..." }`.

2. **How to get the real field IDs without extra API scope**: the "read all custom field definitions" endpoint (`GET /locations/{locationId}/customFields`) requires a `locations/customFields.readonly` scope that a Private Integration Token often doesn't have, and re-authorizing it isn't always in your control. Workaround that needs **no extra scope**: pick any existing real contact/opportunity, `PUT` a `key`-based value that includes a plain bare option key (not the dotted merge-tag form — see below), then `GET` that same record back — the response includes the **real field `id`** GHL assigned it. Do this once per field, then hardcode the discovered IDs.
   - Concretely: `PUT /contacts/{contactId}` with `{"customFields":[{"key":"your_trade","field_value":"Test"}]}` (note: **no** `contact.` prefix — that's the merge-tag form, not the API form) → then `GET /contacts/{contactId}` → the returned `customFields` array has `{"id": "<real-id>", "value": "Test"}`. Now you know the ID. Same technique works on Opportunities.
   - Reset the test value back to `""` afterward so you don't leave junk data on a real record.

3. **Field types matter for the value shape**:
   - Plain text fields: `field_value: "some string"`
   - Multi-select ("labels"/checkbox-style) fields: `field_value: ["optionId1", "optionId2"]` — an array of the field's own internal option UUIDs, not the display text
   - Single-select dropdown fields: also need the option's ID, not its display label

### Code shape
```ts
const contactCustomFields = [
  ...(trade && FIELD_ID_YOUR_TRADE ? [{ id: FIELD_ID_YOUR_TRADE, field_value: trade }] : []),
  ...(companyName && FIELD_ID_COMPANY ? [{ id: FIELD_ID_COMPANY, field_value: companyName }] : []),
  ...(servicesArray.length > 0 && FIELD_ID_SERVICES ? [{ id: FIELD_ID_SERVICES, field_value: servicesArray }] : []),
];
```
Note the `...(condition ? [...] : [])` spread pattern throughout: only include a field in the array if it has a real value AND a configured field ID — this means a partially-configured integration (some field IDs known, some not) degrades gracefully instead of sending `undefined`/blank values that could overwrite existing data.

---

## 5. ClickUp Integration

### Env vars
```
NEXT_PUBLIC_CLICKUP_API_TOKEN     # "pk_..." — starts with pk_, from Settings → Apps
NEXT_PUBLIC_CLICKUP_LIST_ID       # the target List's numeric ID
NEXT_PUBLIC_CLICKUP_FIELD_*       # one per custom field, see below
```
> Security note debated in the source project: ClickUp's token can create/read/modify tasks, so a server-only (non-`NEXT_PUBLIC_`) var is the safer default. The source project's client explicitly chose `NEXT_PUBLIC_` for consistency with their other config — flag this tradeoff to whoever you're implementing this for and let them decide; don't silently pick one.

### Flow
1. **Create task**: `POST /list/{listId}/task` with just `{ name: taskName }`. ClickUp's task-creation endpoint does **not** accept custom field values inline — you must set each one in a separate call after the task exists.
2. **Set every custom field individually**: `POST /task/{taskId}/field/{fieldId}` with `{ value: ... }`, fired in parallel via `Promise.all`. Each call is independently try/caught so one bad field ID doesn't break the others.

### How to discover a list's real fields (no extra permission needed — unlike GHL)
```
GET https://api.clickup.com/api/v2/list/{listId}/field
Headers: Authorization: <token>
```
Returns every field's `id`, `name`, `type`, and (for `drop_down`/`labels` types) the full `type_config.options` array with each option's own `id`. This is much easier than GHL's equivalent — no special scope required, just the base API token.

### Field-type-specific value shapes (confirmed live)
| ClickUp field `type` | `value` shape |
|---|---|
| `short_text` / `text` | plain string |
| `email`, `url` | plain string |
| `labels` (multi-select) | array of option UUIDs: `["id1", "id2"]` |
| `drop_down` (single-select) | **one** option UUID as a string |

**Never assume a field's type from its name.** In the source project, a field literally named "Industry" turned out to have generic SaaS-company dropdown options (Healthcare, Fintech, SaaS...) with zero overlap with the home-service trades (Plumbing, HVAC...) the form actually collects — there was no valid option to map to at all. The fix was to *not* write to that field and flag it back to the business, rather than silently sending a value that would always be rejected. **Always fetch the real field list and inspect real option values before wiring a field up — don't guess from the field's display name.**

### Multi-select mapping helper
```ts
const CLICKUP_SERVICE_LABEL_MAP: Record<string, string> = {
  website: "<option-uuid>",
  seo: "<option-uuid>",
  // ...one entry per possible service name, lowercase key
  other: "<option-uuid>", // fallback bucket
};

function mapServicesToClickUpLabelIds(servicesProposed: string): string[] {
  const ids = servicesProposed
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .map((slug) => CLICKUP_SERVICE_LABEL_MAP[slug] || CLICKUP_SERVICE_LABEL_MAP.other)
    .filter(Boolean);
  return [...new Set(ids)]; // de-dupe
}
```

### Single-select mapping helper (same idea, one ID not an array)
```ts
const CLICKUP_LEAD_SOURCE_MAP: Record<string, string> = {
  "op website": "<option-uuid-for-your-actual-website-source>",
  fallbacksource: "<option-uuid>",
};
function mapLeadSourceToClickUpOptionId(leadSource: string): string {
  return CLICKUP_LEAD_SOURCE_MAP[leadSource.trim().toLowerCase()] || CLICKUP_LEAD_SOURCE_MAP["op website"];
}
```

### Client Notes: don't duplicate what already has its own field
If Company Name, Team Size, and Interests each already have their own dedicated ClickUp field, don't also dump them into a combined "Client Notes"/"Description" field — that's redundant and confusing to whoever reads the task. Keep a separate raw-message variable with **no fallback** to the combined notes blob:
```ts
// Used only for GHL/Slack, which don't have per-field breakdowns:
const description = params.get("description") || clientNotes;
// Used only for ClickUp, which DOES have per-field breakdowns:
const clickupClientNotes = params.get("description") || ""; // no fallback — blank if visitor left it blank
```

---

## 6. Slack Integration

Simplest of the three — a single Incoming Webhook POST, no field-ID complexity because Slack just takes formatted text.

### Env var
```
NEXT_PUBLIC_SLACK_WEBHOOK_URL   # https://hooks.slack.com/services/...
```

### Code
```ts
const slackText = [
  "*New Lead Submitted*",
  `*Name:* ${firstName} ${lastName}`.trim(),
  email ? `*Email:* ${email}` : null,
  phone ? `*Phone:* ${phone}` : null,
  companyName ? `*Company:* ${companyName}` : null,
  trade ? `*Trade:* ${trade}` : null,
  `*Source:* ${leadSource}`,
  clientNotes ? `*Notes:* ${clientNotes}` : null,
]
  .filter(Boolean)
  .join("\n");

await fetch(slackWebhookUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: slackText }),
});
```
The `.filter(Boolean)` pattern means any field the visitor left blank just doesn't produce a line, instead of showing `*Phone:* ` with nothing after it.

---

## 7. Verification Method (do this for every field before trusting it)

Don't assume a mapping is correct just because the code compiles and the API returns `200 OK`. The pattern used throughout this build-out:

1. Create (or reuse) an obviously-named test record ("Diagnostic Test Lead") in the real target list/pipeline.
2. Set the field(s) you just wired up via a raw `curl`/API call, using the same value shape your code will send.
3. `GET` the record back and confirm the field's `value` actually reflects what you set — not just that the request didn't error.
4. Delete/reset the test record afterward so it doesn't pollute the real pipeline.

This caught every real bug in this build: the `key` vs `id` silent failure, the wrong field mapped to "Industry", the multi-select-needs-an-array requirement, and the single-select-needs-an-option-ID requirement. None of these produced an error response — they all failed silently, which is exactly why a real write-then-readback check matters more than "the API call returned 200."

---

## 8. Concrete Field Mapping — What Data Goes Where

This is the actual data → field wiring used in the source implementation. Not just the pattern — the literal mapping, so it's clear exactly how each piece of form data ends up on each platform.

### 8.1 GHL — Contact custom fields
Sent on **both** contact creation and contact update (so returning leads get these refreshed too):

| Our data variable | GHL Contact field (by merge-tag name) | Value shape sent |
|---|---|---|
| `trade` | Your Trade | plain string |
| `companyName` | Company's Name | plain string |
| `servicesArray` (parsed from `services_proposed`) | Select Services | array of option IDs (multi-select) |

### 8.2 GHL — Opportunity custom fields
Sent when the Opportunity is created:

| Our data variable | GHL Opportunity field (by merge-tag name) | Value shape sent |
|---|---|---|
| `websiteUrl` | Company Website | plain string |
| `servicesArray` | Services Proposed | array of option IDs (multi-select) |
| `trade` | Industry/Trade | plain string |
| `employeeCount` | Company Size | plain string |
| `description` (falls back to `clientNotes` if the visitor left the message blank) | Description | plain string |
| `leadSource` | Lead Source | plain string |

Every row above is only included in the `customFields` array if the value is truthy **and** its field ID env var is configured — see the `...(condition ? [...] : [])` spread pattern in §4.

### 8.3 ClickUp — task custom fields
All set individually via `POST /task/{taskId}/field/{fieldId}` right after task creation:

| Our data variable | ClickUp field name | Field type | Value shape sent |
|---|---|---|---|
| `firstName` | First Name | short_text | plain string |
| `lastName` | Last Name | short_text | plain string |
| `phone` | Phone Number | short_text | plain string |
| `email` | Email | email | plain string |
| `companyName` | Company Name | short_text | plain string |
| `websiteUrl` | Company Website | url | plain string |
| `employeeCount` | Company Size (internally named "Employee Count" on the list) | short_text | plain string |
| `clickupClientNotes` (raw message only, **not** the combined `clientNotes` blob — see §5) | Client Notes | text | plain string |
| `leadSource`, mapped through `mapLeadSourceToClickUpOptionId()` | Lead Source | drop_down (single-select) | one option UUID |
| `servicesProposed`, mapped through `mapServicesToClickUpLabelIds()` | Services Proposed | labels (multi-select) | array of option UUIDs |

**Intentionally NOT set**: `trade` → there was no field with valid options for home-service trades (the closest field, "Industry", only had generic SaaS-company categories — see §5's callout). Task name itself is built from `firstName + lastName` at creation time, so those two also implicitly appear in the task title, not just their dedicated fields.

### 8.4 Slack
No field mapping needed — everything is flattened into one text blob (see §6). All the same source variables (`firstName`, `lastName`, `email`, `phone`, `companyName`, `trade`, `leadSource`, `clientNotes`) feed directly into the message lines, no field-ID lookups required since Slack has no concept of structured fields.

---

## 9. Implementation Checklist for a New Project

- [ ] Set up reCAPTCHA (site key client-side, secret key server-side) and wire the gate in §2
- [ ] Define the incoming params contract (§3) to match your actual form fields
- [ ] GHL: get Location ID, Private Integration Token, Pipeline ID, Stage ID
- [ ] GHL: for each custom field you want to fill, use the bare-key-write-then-readback trick (§4.2) to discover its real `id` — don't guess, don't use the merge-tag `key` directly
- [ ] ClickUp: get API token + target List ID
- [ ] ClickUp: `GET /list/{listId}/field` to get every real field's `id`, `type`, and options — build your field-ID map and any label-mapping helpers from this, not from field names alone
- [ ] Slack: create an Incoming Webhook, get its URL
- [ ] Wire all three integrations independently, each in its own try/catch, none blocking the others
- [ ] Make sure the top-level `success` returned to the visitor depends only on reCAPTCHA passing — never on GHL/ClickUp/Slack individually
- [ ] Run the verification method in §7 for every single field before considering it done
