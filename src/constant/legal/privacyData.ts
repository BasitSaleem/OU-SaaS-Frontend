import type { ContentBlock } from "./legalTypes";

export interface LegalSection {
  id: string;
  label: string;
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  { id: "introduction", label: "Introduction" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "how-we-share", label: "How We Share Your Information" },
  { id: "data-security", label: "Data Security" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "international-transfers", label: "International Data Transfers" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export const PRIVACY_SECTION_IDS = PRIVACY_SECTIONS.map((section) => section.id);

export const PRIVACY_CONTENT: Record<string, ContentBlock[]> = {
  introduction: [
    {
      type: "p",
      content: [
        'This Privacy Policy describes how Owners Universe ("we," "us," or "our") collects, uses, shares, and protects personal information when you use our websites (ownersuniverse.com, ownerspulse.com, ownersinventory.com), our applications, and our services (collectively, "Services").',
      ],
    },
    {
      type: "p",
      content: [
        "Owners Universe is the parent platform for Owners Pulse and Owners Inventory. This policy covers all products and services under the Owners Universe umbrella.",
      ],
    },
    {
      type: "p",
      content: [
        "By using our Services, you agree to the collection and use of information in accordance with this policy.",
      ],
    },
  ],

  "information-we-collect": [
    { type: "h3", text: "2.1 Information You Provide" },
    {
      type: "ul",
      items: [
        {
          strong: "Account Information:",
          text: "When you create an Owners Universe account, we collect your name, email address, phone number, and password.",
        },
        {
          strong: "Organization Information:",
          text: "When you create an organization, we collect your business name, address, industry, and team size.",
        },
        {
          strong: "Payment Information:",
          text: "When you subscribe to a product, we collect billing details. Payment information is processed by our payment processor (Stripe) and is not stored on our servers.",
        },
        {
          strong: "Communication:",
          text: "When you contact us, we collect the content of your messages, your email address, and any attachments.",
        },
        {
          strong: "Service Data:",
          text: "Information you enter into our products, including customer records, inventory data, campaign content, and business documents.",
        },
      ],
    },
    { type: "h3", text: "2.2 Information We Collect Automatically" },
    {
      type: "ul",
      items: [
        {
          strong: "Usage Data:",
          text: "Pages visited, features used, time spent, clicks, and navigation paths within our products.",
        },
        {
          strong: "Device Information:",
          text: "Browser type, operating system, device type, screen resolution, and IP address.",
        },
        {
          strong: "Cookies and Tracking:",
          text: "We use cookies and similar technologies to remember your preferences, analyze usage, and improve our services. See our Cookie Policy for details.",
        },
        {
          strong: "Log Data:",
          text: "Server logs including IP address, access times, pages viewed, and referring URLs.",
        },
      ],
    },
    { type: "h3", text: "2.3 Information from Third Parties" },
    {
      type: "ul",
      items: [
        {
          strong: "Authentication Providers:",
          text: "If you sign in using a third-party service, we receive your name and email from that provider.",
        },
        {
          strong: "Payment Processor:",
          text: "Stripe provides us with transaction confirmations and billing status (not full card numbers).",
        },
      ],
    },
  ],

  "how-we-use": [
    { type: "p", content: ["We use your personal information to:"] },
    {
      type: "ul",
      items: [
        "Provide, maintain, and improve our Services",
        "Process payments and manage subscriptions",
        "Send transactional communications (account verification, password resets, billing notifications)",
        "Send product updates, tips, and marketing communications (you can opt out at any time)",
        "Provide customer support",
        "Detect and prevent fraud, abuse, and security threats",
        "Comply with legal obligations",
        "Analyze usage to improve our products",
      ],
    },
  ],

  "how-we-share": [
    {
      type: "p",
      content: ["We do not sell your personal information. We share information only in the following circumstances:"],
    },
    {
      type: "ul",
      items: [
        {
          strong: "Service Providers:",
          text: "We use third-party services (hosting, email delivery, payment processing, analytics) that process data on our behalf under strict confidentiality agreements.",
        },
        {
          strong: "Legal Requirements:",
          text: "We may disclose information if required by law, court order, or government request.",
        },
        {
          strong: "Business Transfers:",
          text: "If Owners Universe is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
        },
        { strong: "With Your Consent:", text: "We may share information with your explicit permission." },
      ],
    },
    { type: "h3", text: "Key Third-Party Services" },
    {
      type: "table",
      headers: ["Service", "Purpose", "Data Shared"],
      rows: [
        ["Stripe", "Payment processing", "Billing information"],
        ["Amazon Web Services (AWS)", "Hosting and infrastructure", "All service data (encrypted)"],
        ["Google Analytics", "Website analytics", "Usage data (anonymized)"],
        ["Email delivery service", "Transactional and marketing emails", "Email address, name"],
      ],
    },
  ],

  "data-security": [
    { type: "p", content: ["We implement industry-standard security measures to protect your information:"] },
    {
      type: "ul",
      items: [
        "All data is encrypted in transit (TLS/SSL) and at rest",
        "Access to personal data is restricted to authorized employees",
        "Regular security assessments and vulnerability testing",
        "Secure password hashing (bcrypt or equivalent)",
        "Two-factor authentication available for all accounts",
      ],
    },
    {
      type: "p",
      content: [
        "No method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
      ],
    },
  ],

  "data-retention": [
    {
      type: "p",
      content: [
        "We retain your personal information for as long as your account is active or as needed to provide Services. If you delete your account:",
      ],
    },
    {
      type: "ul",
      items: [
        "Account data is permanently deleted within 30 days",
        "Backup copies are purged within 90 days",
        "Aggregated, anonymized data may be retained indefinitely for analytics",
      ],
    },
  ],

  "your-rights": [
    { type: "p", content: ["Depending on your location, you may have the following rights:"] },
    {
      type: "ul",
      items: [
        { strong: "Access:", text: "Request a copy of the personal data we hold about you" },
        { strong: "Correction:", text: "Request correction of inaccurate data" },
        { strong: "Deletion:", text: "Request deletion of your data (subject to legal retention requirements)" },
        { strong: "Portability:", text: "Request your data in a machine-readable format" },
        { strong: "Opt-Out:", text: "Unsubscribe from marketing communications at any time" },
        { strong: "Restriction:", text: "Request that we limit processing of your data" },
      ],
    },
    {
      type: "p",
      content: [
        "To exercise any of these rights, contact us at ",
        { text: "accounts@ownersuniverse.com", href: "mailto:accounts@ownersuniverse.com" },
        ".",
      ],
    },
  ],

  "childrens-privacy": [
    {
      type: "p",
      content: [
        "Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected data from a child, we will delete it promptly.",
      ],
    },
  ],

  "international-transfers": [
    {
      type: "p",
      content: [
        "Our Services are operated from the United States. If you access our Services from outside the US, your information will be transferred to and processed in the United States. By using our Services, you consent to this transfer.",
      ],
    },
  ],

  changes: [
    {
      type: "p",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website. Your continued use of our Services after changes constitute acceptance of the updated policy.",
      ],
    },
  ],

  "contact-us": [
    { type: "p", content: ["If you have questions about this Privacy Policy, contact us at:"] },
    {
      type: "contact-card",
      name: "Owners Universe",
      lines: ["4254 Normandy Ct", "Fredericksburg, VA 22408", "United States"],
      email: "accounts@ownersuniverse.com",
    },
  ],
};
