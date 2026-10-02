import type { MetadataRoute } from "next";

/** Canonical origin used for the sitemap and robots.txt. Override per environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ownersuniverse.com").replace(/\/+$/, "");

/** Date the page content last changed. Bump a page's date when its copy changes, so <lastmod> stays truthful. */
const REDESIGN_DATE = new Date("2026-10-02");

interface SitemapRoute {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  lastModified: Date;
}

export const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "monthly", lastModified: REDESIGN_DATE },
  { path: "/products", priority: 0.9, changeFrequency: "monthly", lastModified: REDESIGN_DATE },
  { path: "/about", priority: 0.7, changeFrequency: "yearly", lastModified: REDESIGN_DATE },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly", lastModified: REDESIGN_DATE },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: REDESIGN_DATE },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: REDESIGN_DATE },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly", lastModified: REDESIGN_DATE },
];
