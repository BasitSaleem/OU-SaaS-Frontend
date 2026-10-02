import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_ROUTES } from "@/constant/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map(({ path, ...entry }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    ...entry,
  }));
}
