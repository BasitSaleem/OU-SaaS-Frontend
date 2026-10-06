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

const ABOUT_URL = `${SITE_URL}/about`;

/**
 * /about: the page, its breadcrumb, and the Organization with its slogan and brands.
 * The page's mainEntity points at the Organization's real @id (/#organization).
 */
const ABOUT_SCHEMA = {
  "@context": CONTEXT,
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${ABOUT_URL}#webpage`,
      url: ABOUT_URL,
      name: "About Owners Universe",
      description:
        "Learn about Owners Universe, the company building purpose-built business software for service industries, including home services and retail.",
      mainEntity: ORG_REF,
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${ABOUT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About", item: ABOUT_URL },
      ],
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Owners Universe",
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", "@id": `${ABOUT_URL}#logo`, url: LOGO_URL, contentUrl: LOGO_URL },
      description:
        "Owners Universe builds purpose-built, industry-specific business software for service industries, including home services and retail.",
      slogan: "We build software for people who build businesses.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4254 Normandy Ct",
        addressLocality: "Fredericksburg",
        addressRegion: "VA",
        postalCode: "22408",
        addressCountry: "US",
      },
      brand: [
        { "@type": "Brand", name: "Owners Pulse", url: "https://ownerspulse.com/" },
        { "@type": "Brand", name: "Owners Inventory", url: "https://ownersinventory.com/" },
      ],
    },
  ],
};

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
      isPartOf: WEBSITE_REF,
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

/** A legal page and its separate BreadcrumbList (the page itself does not link to it). dateModified is month-precision, matching the "Last Updated: September 2026" printed on the page. */
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

/** /contact: the page, a minimal Organization, and the breadcrumb. */
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
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Owners Universe",
      url: `${SITE_URL}/`,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CONTACT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: CONTACT_URL },
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

/** Organization + WebSite: injected on every page except the homepage, whose graph already contains them. */
const SITEWIDE_NODES = [
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
  ];

/** Homepage entity, wired to the sitewide WebSite and Organization. */
const HOME_PAGE_NODE = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: "Owners Universe",
  description:
    "Owners Universe provides purpose-built business software for service industries, including marketing automation for home services and POS and operations management for retail.",
  about: ORG_REF,
  publisher: ORG_REF,
  inLanguage: "en-US",
};

export const SEO_SCHEMAS = {
  "1 - Sitewide (Organization + WebSite)": {
    "@context": CONTEXT,
    "@graph": SITEWIDE_NODES,
  },

  /** One self-contained block: the sitewide Organization + WebSite plus the homepage itself. */
  "2 - Homepage": {
    "@context": CONTEXT,
    "@graph": [...SITEWIDE_NODES, HOME_PAGE_NODE],
  },

  "3 - Products": PRODUCTS_SCHEMA,

  "4 - About": ABOUT_SCHEMA,

  "5 - Contact": CONTACT_SCHEMA,

  "6 - Privacy Policy": PRIVACY_SCHEMA,

  "7 - Terms of Service": TERMS_SCHEMA,

  "8 - Cookie Policy": COOKIES_SCHEMA,
} as const;

export type SeoSchemaKey = keyof typeof SEO_SCHEMAS;

const SITEWIDE = SEO_SCHEMAS["1 - Sitewide (Organization + WebSite)"];

/** JSON-LD blocks to render for each route, in order. The homepage's graph already contains the sitewide nodes. */
export const PAGE_SCHEMAS: Record<string, readonly object[]> = {
  "/": [SEO_SCHEMAS["2 - Homepage"]],
  "/products": [SITEWIDE, SEO_SCHEMAS["3 - Products"]],
  // About defines its own Organization (same @id as the sitewide one, with the brand list), so it skips the sitewide block.
  "/about": [SEO_SCHEMAS["4 - About"]],
  // Contact defines its own Organization (same @id as the sitewide one), so it skips the sitewide block.
  "/contact": [SEO_SCHEMAS["5 - Contact"]],
  "/privacy": [SITEWIDE, SEO_SCHEMAS["6 - Privacy Policy"]],
  "/terms": [SITEWIDE, SEO_SCHEMAS["7 - Terms of Service"]],
  "/cookies": [SITEWIDE, SEO_SCHEMAS["8 - Cookie Policy"]],
};
