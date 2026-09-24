import type { LegalSection } from "./privacyData";
import type { LegalSectionContent } from "./legalTypes";

export const TERMS_SECTIONS: LegalSection[] = [
  { id: "agreement", label: "Agreement to Terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "account-registration", label: "Account Registration" },
  { id: "products-subscriptions", label: "Products and Subscriptions" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "data-privacy", label: "Data and Privacy" },
  { id: "done-for-you", label: "Done-for-You Services" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "service-availability", label: "Service Availability" },
  { id: "limitation-liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "dispute-resolution", label: "Dispute Resolution" },
  { id: "modifications", label: "Modifications to Terms" },
  { id: "termination", label: "Termination" },
  { id: "general-provisions", label: "General Provisions" },
  { id: "contact-us", label: "Contact Us" },
];

export const TERMS_SECTION_IDS = TERMS_SECTIONS.map((section) => section.id);

export const TERMS_CONTENT: Record<string, LegalSectionContent> = {
  agreement: {
    title: "Agreement to Terms",
    blocks: [
      {
        type: "p",
        content: [
          'By accessing or using any Owners Universe service — including ownersuniverse.com, ownerspulse.com, ownersinventory.com, and their associated applications (collectively, "Services") — you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use our Services.',
        ],
      },
      {
        type: "p",
        content: [
          '"Owners Universe," "we," "us," and "our" refer to Owners Universe, located at 4254 Normandy Ct, Fredericksburg, VA 22408, United States.',
        ],
      },
    ],
  },

  eligibility: {
    title: "Eligibility",
    blocks: [
      {
        type: "p",
        content: [
          "You must be at least 18 years old to use our Services. By creating an account, you represent that you are 18 or older, have the legal authority to enter into these Terms, and, if acting on behalf of a business, have the authority to bind that business.",
        ],
      },
    ],
  },

  "account-registration": {
    title: "Account Registration",
    blocks: [
      { type: "h3", text: "3.1 Account Creation" },
      {
        type: "p",
        content: [
          "To use our Services, you must create an Owners Universe account. You agree to provide accurate, current, and complete information during registration and keep it updated.",
        ],
      },
      { type: "h3", text: "3.2 Account Security" },
      {
        type: "p",
        content: [
          "You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized access to your account. We are not liable for any loss or damage arising from your failure to secure your account.",
        ],
      },
      { type: "h3", text: "3.3 One Account Per Person" },
      {
        type: "p",
        content: [
          "Each individual may maintain only one Owners Universe account. Multiple accounts for the same person may be merged or terminated.",
        ],
      },
    ],
  },

  "products-subscriptions": {
    title: "Products and Subscriptions",
    blocks: [
      { type: "h3", text: "4.1 Product Access" },
      {
        type: "p",
        content: [
          "Your Owners Universe account provides access to our product ecosystem. Each product (Owners Pulse, Owners Inventory) requires a separate subscription. Subscribing to one product does not grant access to others.",
        ],
      },
      { type: "h3", text: "4.2 Free Trials" },
      {
        type: "p",
        content: [
          "We may offer free trial periods for certain products. During a trial, you have access to the product's features without payment. At the end of the trial, your access is suspended unless you subscribe. No credit card is required to start a trial unless stated otherwise.",
        ],
      },
      { type: "h3", text: "4.3 Subscriptions and Billing" },
      {
        type: "p",
        content: [
          "Subscriptions are billed on a recurring basis (monthly or annual, as selected). By subscribing, you authorize us to charge your payment method at the beginning of each billing cycle. All fees are stated in US dollars unless otherwise specified.",
        ],
      },
      { type: "h3", text: "4.4 Price Changes" },
      {
        type: "p",
        content: [
          "We may change subscription prices with 30 days' written notice. Price changes take effect at the beginning of the next billing cycle following the notice period.",
        ],
      },
      { type: "h3", text: "4.5 Cancellation" },
      { type: "p", content: ["You may cancel your subscription at any time from your account dashboard. Upon cancellation:"] },
      {
        type: "ul",
        items: [
          "Your access continues until the end of your current billing period",
          "No refunds are issued for partial billing periods",
          "Your data is retained for 90 days after cancellation, then permanently deleted",
        ],
      },
      { type: "h3", text: "4.6 Refunds" },
      {
        type: "p",
        content: [
          "We do not offer refunds for subscription payments. If you believe you were charged in error, contact ",
          { text: "billing@ownerspulse.com", href: "mailto:billing@ownerspulse.com" },
          " (for Owners Pulse) or ",
          { text: "billing@ownersinventory.com", href: "mailto:billing@ownersinventory.com" },
          " (for Owners Inventory) within 14 days of the charge.",
        ],
      },
    ],
  },

  "acceptable-use": {
    title: "Acceptable Use",
    blocks: [
      { type: "p", content: ["You agree NOT to:"] },
      {
        type: "ul",
        items: [
          "Use our Services for any illegal purpose",
          "Upload or transmit malicious code, viruses, or harmful content",
          "Attempt to gain unauthorized access to our systems or other users' accounts",
          "Use our Services to send spam, unsolicited messages, or bulk communications in violation of applicable laws",
          "Resell, redistribute, or sublicense our Services without written permission",
          "Use automated scripts or bots to access our Services (except authorized API use)",
          "Interfere with or disrupt the integrity or performance of our Services",
          "Impersonate any person or entity",
        ],
      },
      { type: "p", content: ["We reserve the right to suspend or terminate accounts that violate these terms."] },
    ],
  },

  "intellectual-property": {
    title: "Intellectual Property",
    blocks: [
      { type: "h3", text: "6.1 Our Property" },
      {
        type: "p",
        content: [
          "All content, design, code, trademarks, logos, and intellectual property in our Services are owned by Owners Universe or its licensors. You may not copy, modify, distribute, or reverse-engineer any part of our Services.",
        ],
      },
      { type: "h3", text: "6.2 Your Content" },
      {
        type: "p",
        content: [
          'You retain ownership of all data and content you upload to our Services ("Your Content"). By using our Services, you grant us a limited, non-exclusive license to host, store, process, and display Your Content solely to provide the Services to you.',
        ],
      },
      { type: "h3", text: "6.3 Feedback" },
      {
        type: "p",
        content: [
          "If you provide feedback, suggestions, or ideas about our Services, you grant us a perpetual, irrevocable, royalty-free license to use, modify, and incorporate that feedback into our Services.",
        ],
      },
    ],
  },

  "data-privacy": {
    title: "Data and Privacy",
    blocks: [
      {
        type: "p",
        content: [
          "Your use of our Services is also governed by our ",
          { text: "Privacy Policy", href: "/privacy" },
          " (ownersuniverse.com/privacy). By using our Services, you consent to the collection and use of information as described in the Privacy Policy.",
        ],
      },
    ],
  },

  "done-for-you": {
    title: "Done-for-You Services (Owners Pulse)",
    blocks: [
      { type: "h3", text: "8.1 Service Delivery" },
      {
        type: "p",
        content: [
          "If you purchase done-for-you marketing services through Owners Pulse (website design, SEO, Google Ads, social media, Google Business Profile management), we will perform those services as described in the service agreement.",
        ],
      },
      { type: "h3", text: "8.2 Content Ownership" },
      {
        type: "p",
        content: [
          "All content created as part of done-for-you services — including websites, graphics, ad copy, and social media content — is owned by you. If you cancel services, all completed work remains yours.",
        ],
      },
      { type: "h3", text: "8.3 Setup Fees" },
      {
        type: "p",
        content: ["Certain services require a one-time setup fee. Setup fees are non-refundable once work has begun."],
      },
      { type: "h3", text: "8.4 Results Disclaimer" },
      {
        type: "p",
        content: [
          "Marketing results depend on many factors outside our control (market conditions, competition, seasonality, ad platform policies). We do not guarantee specific traffic, lead, or revenue outcomes.",
        ],
      },
    ],
  },

  "third-party": {
    title: "Third-Party Services",
    blocks: [
      {
        type: "p",
        content: [
          "Our Services may integrate with third-party platforms (Google, Meta, Stripe, etc.). Your use of third-party services is subject to their respective terms and policies. We are not responsible for third-party service availability, data practices, or performance.",
        ],
      },
    ],
  },

  "service-availability": {
    title: "Service Availability",
    blocks: [
      {
        type: "p",
        content: [
          "We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may temporarily suspend Services for maintenance, updates, or security purposes. We will provide reasonable notice of planned downtime when possible.",
        ],
      },
    ],
  },

  "limitation-liability": {
    title: "Limitation of Liability",
    blocks: [
      { type: "p", content: ["TO THE MAXIMUM EXTENT PERMITTED BY LAW:"] },
      {
        type: "ul",
        items: [
          "Our total liability for any claim arising from or related to these Terms or our Services shall not exceed the total fees paid by you to us in the 12 months preceding the claim.",
          "We are not liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or business interruption.",
          "We are not liable for any loss resulting from unauthorized access to your account due to your failure to maintain account security.",
        ],
      },
    ],
  },

  indemnification: {
    title: "Indemnification",
    blocks: [
      {
        type: "p",
        content: [
          "You agree to indemnify and hold harmless Owners Universe, its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of our Services, your violation of these Terms, or your violation of any third party's rights.",
        ],
      },
    ],
  },

  "dispute-resolution": {
    title: "Dispute Resolution",
    blocks: [
      { type: "h3", text: "13.1 Governing Law" },
      {
        type: "p",
        content: [
          "These Terms are governed by the laws of the Commonwealth of Virginia, United States, without regard to conflict of law principles.",
        ],
      },
      { type: "h3", text: "13.2 Arbitration" },
      {
        type: "p",
        content: [
          "Any disputes arising from these Terms shall be resolved through binding arbitration administered by the American Arbitration Association (AAA), conducted in Fredericksburg, Virginia. Each party bears its own costs. The arbitrator's decision is final and binding.",
        ],
      },
      { type: "h3", text: "13.3 Class Action Waiver" },
      {
        type: "p",
        content: [
          "You agree that any disputes will be resolved on an individual basis. You waive the right to participate in class action lawsuits or class-wide arbitration.",
        ],
      },
    ],
  },

  modifications: {
    title: "Modifications to Terms",
    blocks: [
      {
        type: "p",
        content: [
          "We may modify these Terms at any time. Material changes will be communicated via email or through a notice on our website at least 30 days before they take effect. Continued use of our Services after changes constitutes acceptance.",
        ],
      },
    ],
  },

  termination: {
    title: "Termination",
    blocks: [
      {
        type: "p",
        content: ["We may terminate or suspend your account at any time, with or without cause, with or without notice. Upon termination:"],
      },
      {
        type: "ul",
        items: [
          "Your access to all Services ceases immediately",
          "Your data is retained for 90 days, then permanently deleted",
          "Outstanding payment obligations survive termination",
        ],
      },
    ],
  },

  "general-provisions": {
    title: "General Provisions",
    blocks: [
      {
        type: "ul",
        items: [
          {
            strong: "Entire Agreement:",
            text: "These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Owners Universe.",
          },
          { strong: "Severability:", text: "If any provision is found unenforceable, the remaining provisions remain in effect." },
          { strong: "Waiver:", text: "Our failure to enforce any provision does not waive our right to enforce it later." },
          {
            strong: "Assignment:",
            text: "You may not assign or transfer your rights under these Terms. We may assign our rights without restriction.",
          },
        ],
      },
    ],
  },

  "contact-us": {
    title: "Contact Us",
    blocks: [
      { type: "p", content: ["Questions about these Terms? Contact us:"] },
      {
        type: "contact-card",
        name: "Owners Universe",
        lines: ["4254 Normandy Ct", "Fredericksburg, VA 22408", "United States"],
        email: "accounts@ownersuniverse.com",
      },
    ],
  },
};
