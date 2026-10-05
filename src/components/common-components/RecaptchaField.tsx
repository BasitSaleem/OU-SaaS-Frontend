"use client";

import { useEffect, useRef } from "react";

interface RecaptchaApi {
  ready: (callback: () => void) => void;
  render: (container: HTMLElement, options: Record<string, unknown>) => number;
  reset: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

const SCRIPT_ID = "google-recaptcha-script";

function loadRecaptcha(): Promise<RecaptchaApi> {
  return new Promise((resolve, reject) => {
    const ready = () => window.grecaptcha!.ready(() => resolve(window.grecaptcha!));
    if (window.grecaptcha?.render) return ready();

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", ready);
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.onload = ready;
    script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    document.head.appendChild(script);
  });
}

interface RecaptchaFieldProps {
  /** Called with the token when the visitor passes the challenge, and with null when it expires or errors. */
  onChange: (token: string | null) => void;
  /** Change this value to reset the widget (a token can only be verified once). */
  resetKey: number;
}

/** The "I'm not a robot" checkbox. The public site key comes from NEXT_PUBLIC_RECAPTCHA_SITE_KEY. */
const RecaptchaField: React.FC<RecaptchaFieldProps> = ({ onChange, resetKey }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);

  // Keep the latest callback without re-rendering the widget (it is created once).
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const container = containerRef.current;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!container || !siteKey) return;
    let cancelled = false;

    loadRecaptcha()
      .then((api) => {
        if (cancelled || widgetId.current !== null) return;
        widgetId.current = api.render(container, {
          sitekey: siteKey,
          callback: (token: string) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(null),
          "error-callback": () => onChangeRef.current(null),
        });
      })
      .catch((err) => console.error(err));

    return () => {
      cancelled = true;
      widgetId.current = null;
      container.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (resetKey > 0 && widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
  }, [resetKey]);

  return <div ref={containerRef} />;
};

export default RecaptchaField;
