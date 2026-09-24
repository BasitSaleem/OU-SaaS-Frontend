import type { ContentBlock } from "./legalTypes";
import type { LegalSection } from "./privacyData";

export const COOKIES_SECTIONS: LegalSection[] = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "how-we-use", label: "How We Use Cookies" },
  { id: "third-party", label: "Third-Party Cookies" },
  { id: "managing-cookies", label: "Managing Cookies" },
  { id: "updates", label: "Updates to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export const COOKIES_SECTION_IDS = COOKIES_SECTIONS.map((section) => section.id);

export const COOKIES_CONTENT: Record<string, ContentBlock[]> = {
  "what-are-cookies": [
    {
      type: "p",
      content: [
        "Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your experience. Similar technologies include web beacons, pixels, and local storage.",
      ],
    },
  ],

  "how-we-use": [
    {
      type: "p",
      content: [
        "Owners Universe and its products (Owners Pulse, Owners Inventory) use cookies for the following purposes:",
      ],
    },
    { type: "h3", text: "2.1 Strictly Necessary Cookies" },
    {
      type: "p",
      content: [
        "These cookies are essential for the website to function. They cannot be disabled.",
      ],
    },
    {
      type: "table",
      headers: ["Cookie", "Purpose", "Duration"],
      rows: [
        ["Session ID", "Keeps you logged in during your visit", "Session (deleted when browser closes)"],
        ["CSRF token", "Prevents cross-site request forgery attacks", "Session"],
        ["Cookie consent", "Remembers your cookie preferences", "12 months"],
        ["Authentication token", "Maintains your login state across Owners Universe products", "30 days"],
      ],
    },
    { type: "h3", text: "2.2 Performance & Analytics Cookies" },
    {
      type: "p",
      content: [
        "These cookies help us understand how visitors use our websites so we can improve them.",
      ],
    },
    {
      type: "table",
      headers: ["Cookie", "Purpose", "Duration", "Service"],
      rows: [
        ["_ga", "Distinguishes unique visitors", "2 years", "Google Analytics"],
        ["_ga_*", "Maintains session state", "2 years", "Google Analytics"],
        ["_gid", "Distinguishes unique visitors", "24 hours", "Google Analytics"],
      ],
    },
    { type: "h3", text: "2.3 Functional Cookies" },
    {
      type: "p",
      content: [
        "These cookies remember your preferences and settings.",
      ],
    },
    {
      type: "table",
      headers: ["Cookie", "Purpose", "Duration"],
      rows: [
        ["Language preference", "Remembers your preferred language", "12 months"],
        ["Theme preference", "Remembers dark/light mode selection", "12 months"],
        ["Dismiss state", "Remembers dismissed notifications or banners", "30 days"],
      ],
    },
    { type: "h3", text: "2.4 Marketing Cookies" },
    {
      type: "p",
      content: [
        "These cookies are used to deliver relevant advertisements and track campaign performance. They are only set if you consent.",
      ],
    },
    {
      type: "table",
      headers: ["Cookie", "Purpose", "Duration", "Service"],
      rows: [
        ["_fbp", "Facebook ad targeting and measurement", "3 months", "Meta Pixel"],
        ["_gcl_au", "Google Ads conversion tracking", "3 months", "Google Ads"],
        ["Meta Pixel", "Tracks conversions from Meta advertising", "3 months", "Meta"],
      ],
    },
  ],

  "third-party": [
    {
      type: "p",
      content: [
        "Some cookies are placed by third-party services we use. These third parties have their own privacy policies:",
      ],
    },
    {
      type: "ul",
      items: [
        {
          strong: "Google Analytics:",
          link: { text: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
        },
        {
          strong: "Meta (Facebook):",
          link: { text: "Meta Privacy Policy", href: "https://www.facebook.com/privacy/policy/" },
        },
        {
          strong: "Stripe:",
          link: { text: "Stripe Privacy Policy", href: "https://stripe.com/privacy" },
        },
      ],
    },
  ],

  "managing-cookies": [
    { type: "h3", text: "4.1 Cookie Consent Banner" },
    {
      type: "p",
      content: [
        'When you first visit our websites, a cookie consent banner allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking "Cookie Settings" in the website footer.',
      ],
    },
    { type: "h3", text: "4.2 Browser Settings" },
    {
      type: "p",
      content: ["You can control cookies through your browser settings:"],
    },
    {
      type: "ul",
      items: [
        { strong: "Chrome:", text: "Settings → Privacy and Security → Cookies" },
        { strong: "Firefox:", text: "Settings → Privacy & Security → Cookies" },
        { strong: "Safari:", text: "Preferences → Privacy → Cookies" },
        { strong: "Edge:", text: "Settings → Cookies and Site Permissions" },
      ],
    },
    {
      type: "p",
      content: [
        "Note: Disabling strictly necessary cookies may prevent some features from working properly.",
      ],
    },
    { type: "h3", text: "4.3 Opt-Out Links" },
    {
      type: "ul",
      items: [
        {
          text: "Google Analytics opt-out:",
          link: {
            text: "Google Analytics Opt-Out Browser Add-on",
            href: "https://tools.google.com/dlpage/gaoptout",
          },
        },
        {
          text: "Meta opt-out:",
          link: {
            text: "Meta Ad Preferences",
            href: "https://www.facebook.com/adpreferences",
          },
        },
      ],
    },
  ],

  updates: [
    {
      type: "p",
      content: [
        'We may update this Cookie Policy as our use of cookies changes. The "Last Updated" date at the top indicates the most recent revision.',
      ],
    },
  ],

  "contact-us": [
    {
      type: "p",
      content: ["Questions about cookies? Contact us:"],
    },
    {
      type: "contact-card",
      name: "Owners Universe",
      lines: ["4254 Normandy Ct", "Fredericksburg, VA 22408", "United States"],
      email: "accounts@ownersuniverse.com",
    },
  ],
};
