import { SITE_URL } from "./siteConfig";

/**
 * Central JSON-LD store. Each entry is a schema.org @graph; entities link to each other by @id, so the
 * page-level schemas point back at the sitewide Organization and WebSite defined under key 1.
 * Render an entry with <JsonLd data={SEO_SCHEMAS["…"]} />: key 1 lives in the root layout, the rest in their page.
 */
const CONTEXT = "https://schema.org";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Stable public URL of the logo (public/assets/logos). The hashed /_next/static/media path changes on every build. */
const LOGO_URL = `${SITE_URL}/assets/logos/owners-universe.svg`;

const ORG_REF = { "@id": ORGANIZATION_ID };
const WEBSITE_REF = { "@id": WEBSITE_ID };

const url = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

interface PageOptions {
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
  /** Breadcrumb trail after "Home". */
  crumbs?: { name: string; path: string }[];
  dateModified?: string;
  extra?: object[];
}

/** A page entity wired to the sitewide WebSite/Organization, plus its breadcrumb trail. */
const page = ({ type, path, name, description, crumbs = [], dateModified, extra = [] }: PageOptions) => ({
  "@context": CONTEXT,
  "@graph": [
    {
      "@type": type,
      "@id": `${url(path)}#webpage`,
      url: url(path),
      name,
      description,
      inLanguage: "en-US",
      isPartOf: WEBSITE_REF,
      about: ORG_REF,
      publisher: ORG_REF,
      ...(dateModified && { dateModified }),
      ...(crumbs.length > 0 && { breadcrumb: { "@id": `${url(path)}#breadcrumb` } }),
    },
    ...(crumbs.length > 0
      ? [
          {
            "@type": "BreadcrumbList",
            "@id": `${url(path)}#breadcrumb`,
            itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((crumb, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: crumb.name,
              item: url(crumb.path),
            })),
          },
        ]
      : []),
    ...extra,
  ],
});

const PRODUCTS_URL = `${SITE_URL}/products`;
const PULSE_ID = `${PRODUCTS_URL}#owners-pulse`;
const INVENTORY_ID = `${PRODUCTS_URL}#owners-inventory`;

/** /products: the page, its breadcrumb, an ItemList of both products, and one SoftwareApplication each. */
const PRODUCTS_SCHEMA = {
  "@context": CONTEXT,
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PRODUCTS_URL}#webpage`,
      url: PRODUCTS_URL,
      name: "Products | Owners Universe",
      description:
        "Explore the products from Owners Universe, including Owners Pulse for home services and Owners Inventory for retail and other business industries.",
      isPartOf: { "@type": "WebSite", "@id": WEBSITE_ID, name: "Owners Universe", url: `${SITE_URL}/` },
      mainEntity: { "@id": `${PRODUCTS_URL}#product-list` },
      breadcrumb: { "@id": `${PRODUCTS_URL}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PRODUCTS_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Products", item: PRODUCTS_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PRODUCTS_URL}#product-list`,
      name: "Owners Universe Products",
      description: "Purpose-built business software products from Owners Universe.",
      numberOfItems: 2,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Owners Pulse", url: PULSE_ID, item: { "@id": PULSE_ID } },
        { "@type": "ListItem", position: 2, name: "Owners Inventory", url: INVENTORY_ID, item: { "@id": INVENTORY_ID } },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": PULSE_ID,
      name: "Owners Pulse",
      url: "https://ownerspulse.com/",
      image: `${SITE_URL}/assets/logos/owners-pulse.svg`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Marketing Automation Software",
      operatingSystem: "Web",
      description:
        "Owners Pulse is an all-in-one marketing automation platform built for home services businesses, combining CRM, automated review requests, online booking, estimate follow-up, AI phone receptionist, and other marketing capabilities.",
      featureList: [
        "Automated Review Engine with Rating Gate",
        "Smart Booking",
        "CRM",
        "Estimate Follow-Up",
        "Customer Reactivation",
        "Seasonal Campaigns",
        "Speed-to-Lead",
        "AI Phone Receptionist",
        "Job Profitability Tracker",
        "Neighborhood Marketing",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": INVENTORY_ID,
      name: "Owners Inventory",
      url: "https://ownersinventory.com/",
      image: `${SITE_URL}/assets/logos/owners-inventory.svg`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "POS and Inventory Management Software",
      operatingSystem: "Web",
      description:
        "Owners Inventory is a business operations platform for retail businesses, restaurants, pharmacies, fashion, wholesale, and manufacturing, providing point of sale, inventory, purchasing, HR, finance, manufacturing, and eCommerce capabilities.",
      featureList: [
        "Point of Sale",
        "Inventory Management",
        "Purchasing and Suppliers",
        "HR and Payroll",
        "Finance and Accounting",
        "Customer Management",
        "Manufacturing and BOM",
        "eCommerce Integration",
        "Multi-Location Management",
        "Advanced Reporting",
        "API and Integrations",
      ],
    },
  ],
};

interface LegalPageOptions {
  path: string;
  title: string;
  description: string;
}

/** A legal page and its breadcrumb. dateModified is month-precision, matching the "Last Updated: September 2026" printed on the page. */
const legalPage = ({ path, title, description }: LegalPageOptions) => {
  const pageUrl = `${SITE_URL}${path}`;

  return {
    "@context": CONTEXT,
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | Owners Universe`,
        description,
        dateModified: "2026-09",
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        publisher: ORG_REF,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
        ],
      },
    ],
  };
};

const CONTACT_URL = `${SITE_URL}/contact`;
const CONTACT_ORG_ID = `${CONTACT_URL}#organization`;

/** /contact: the page, its breadcrumb, and the organization with its general and per-product support contact points. */
const CONTACT_SCHEMA = {
  "@context": CONTEXT,
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${CONTACT_URL}#webpage`,
      url: CONTACT_URL,
      name: "Contact Us | Owners Universe",
      description:
        "Contact Owners Universe for account support, product questions, partnerships, investment inquiries, and general business inquiries.",
      mainEntity: { "@id": CONTACT_ORG_ID },
      breadcrumb: { "@id": `${CONTACT_URL}#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CONTACT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: CONTACT_URL },
      ],
    },
    {
      "@type": "Organization",
      "@id": CONTACT_ORG_ID,
      name: "Owners Universe",
      url: `${SITE_URL}/`,
      description: "Business software for service industries.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4254 Normandy Ct",
        addressLocality: "Fredericksburg",
        addressRegion: "VA",
        postalCode: "22408",
        addressCountry: "US",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "general inquiries",
          email: "accounts@ownersuniverse.com",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@ownerspulse.com",
          telephone: "+1-540-559-2908",
          url: "https://ownerspulse.com/",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@ownersinventory.com",
          url: "https://ownersinventory.com/",
          availableLanguage: "English",
        },
      ],
    },
  ],
};

const PRIVACY_SCHEMA = legalPage({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Read the Owners Universe Privacy Policy to learn how personal information is collected, used, shared, protected, and retained across Owners Universe services.",
});

const TERMS_SCHEMA = legalPage({
  path: "/terms",
  title: "Terms of Service",
  description:
    "Read the Owners Universe Terms of Service covering account registration, subscriptions, acceptable use, intellectual property, privacy, service availability, and other terms governing use of its services.",
});

const COOKIES_SCHEMA = legalPage({
  path: "/cookies",
  title: "Cookie Policy",
  description:
    "Learn how Owners Universe uses cookies and similar technologies for essential functions, analytics, preferences, advertising, and service improvements.",
});

export const SEO_SCHEMAS = {
  "1 - Sitewide (Organization + WebSite)": {
    "@context": CONTEXT,
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Owners Universe",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: LOGO_URL,
          contentUrl: LOGO_URL,
        },
        description:
          "Business software for service industries, with purpose-built products for home services and retail businesses.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4254 Normandy Ct",
          addressLocality: "Fredericksburg",
          addressRegion: "VA",
          postalCode: "22408",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${SITE_URL}/contact`,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "Owners Universe",
        description: "Business software for service industries.",
        inLanguage: "en-US",
        publisher: ORG_REF,
      },
    ],
  },

  "2 - Homepage": page({
    type: "WebPage",
    path: "/",
    name: "Owners Universe",
    description:
      "Owners Universe provides purpose-built business software for service industries, including marketing automation for home services and POS and operations management for retail.",
  }),

  "3 - Products": PRODUCTS_SCHEMA,

  "4 - About": page({
    type: "AboutPage",
    path: "/about",
    name: "About Owners Universe",
    description:
      "Owners Universe builds dedicated, industry-specific business software for service companies. Learn about our story, products, and mission.",
    crumbs: [{ name: "About", path: "/about" }],
  }),

  "5 - Contact": CONTACT_SCHEMA,

  "6 - Privacy Policy": PRIVACY_SCHEMA,

  "7 - Terms of Service": TERMS_SCHEMA,

  "8 - Cookie Policy": COOKIES_SCHEMA,
} as const;

export type SeoSchemaKey = keyof typeof SEO_SCHEMAS;
