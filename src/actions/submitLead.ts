"use server";

import { CONTACT_TOPICS } from "@/constant/contactData";
import { verifyRecaptcha } from "@/lib/leads/recaptcha";
import { sendToGhl } from "@/lib/leads/ghl";
import { sendToClickUp } from "@/lib/leads/clickup";
import { sendToSlack } from "@/lib/leads/slack";
import { LEAD_SOURCE, type Lead, type LeadInput } from "@/lib/leads/types";

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

/** Re-checks the form's rules on the server (the browser's checks can be bypassed) and splits the name. */
function buildLead(input: LeadInput): Lead | string {
  const name = String(input.name ?? "").trim().slice(0, 100);
  const email = String(input.email ?? "").trim().slice(0, 254);
  const company = String(input.company ?? "").trim().slice(0, 150);
  const message = String(input.message ?? "").trim().slice(0, 1000);
  const topic = String(input.topic ?? "");

  if (!name) return "Enter your name.";
  if (!EMAIL_PATTERN.test(email)) return "Enter a valid email address.";
  if (message.length < 10) return "Write a short message.";
  if (!CONTACT_TOPICS.some((t) => t.value === topic)) return "Choose a topic.";

  const [firstName, ...rest] = name.split(/\s+/);
  return { name, email, company, message, topic, firstName, lastName: rest.join(" "), leadSource: LEAD_SOURCE };
}

/**
 * Contact form submission. Only reCAPTCHA (and the input rules) can fail the form. GHL, ClickUp and Slack run
 * independently, so one of them being down or misconfigured never blocks the others or the visitor's confirmation.
 * The one exception: if every destination failed, the message went nowhere, so the visitor is told to email us.
 */
export async function submitLeadAction(input: LeadInput, recaptchaToken: string): Promise<{ success: boolean; error?: string }> {
  const captcha = await verifyRecaptcha(recaptchaToken);
  if (!captcha.success) return { success: false, error: captcha.error };

  const lead = buildLead(input);
  if (typeof lead === "string") return { success: false, error: lead };

  const results = await Promise.all([sendToGhl(lead), sendToClickUp(lead), sendToSlack(lead)]);

  if (results.every((r) => !r.success)) {
    console.error("Lead was not delivered to any destination.");
    return { success: false, error: "We couldn't send your message right now. Please email accounts@ownersuniverse.com." };
  }
  return { success: true };
}
