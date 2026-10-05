import type { IntegrationResult, Lead } from "./types";

/** Slack mrkdwn treats & < > as control characters (<!channel>, links), so visitor text must be escaped. */
const escapeSlack = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** One Incoming Webhook post; a field the visitor left blank simply produces no line. */
export async function sendToSlack(lead: Lead): Promise<IntegrationResult> {
  const webhookUrl = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("Slack: NEXT_PUBLIC_SLACK_WEBHOOK_URL missing, skipping.");
    return { success: false, error: "Slack webhook missing" };
  }

  const text = [
    "*New Lead Submitted*",
    `*Name:* ${escapeSlack(lead.name)}`,
    `*Email:* ${escapeSlack(lead.email)}`,
    lead.company ? `*Company:* ${escapeSlack(lead.company)}` : null,
    `*Topic:* ${escapeSlack(lead.topic)}`,
    `*Source:* ${escapeSlack(lead.leadSource)}`,
    `*Message:* ${escapeSlack(lead.message)}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      const error = await res.text();
      console.error("Slack: webhook failed:", res.status, error);
      return { success: false, error };
    }
    return { success: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Unknown Slack error";
    console.error("Slack: integration error:", error);
    return { success: false, error };
  }
}
