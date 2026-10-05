import type { IntegrationResult } from "./types";

/** Server-side reCAPTCHA check. The secret is sent in the POST body, never in the URL. */
export async function verifyRecaptcha(token: string): Promise<IntegrationResult> {
  const secret = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
    console.error("reCAPTCHA: NEXT_PUBLIC_RECAPTCHA_SECRET_KEY is not set");
    return { success: false, error: "Server configuration error: missing reCAPTCHA secret." };
  }
  if (!token) return { success: false, error: "Please complete the reCAPTCHA challenge." };

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10_000),
    });
    const json: { success?: boolean; "error-codes"?: string[] } = await res.json();
    if (!json.success) {
      console.error("reCAPTCHA verification failed:", json["error-codes"]);
      return { success: false, error: "reCAPTCHA verification failed. Please try again." };
    }
    return { success: true };
  } catch (err) {
    // A thrown error means the server couldn't reach Google (network/egress), not a bad token.
    console.error("reCAPTCHA: could not reach Google:", err instanceof Error ? err.message : err);
    return { success: false, error: "Could not reach the reCAPTCHA verification service. Please try again." };
  }
}
