import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/news";

const SITE = "https://the-cornstar.onrender.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/the-legend",
    "/pussyimone",
    "/kernel",
    "/the-film",
    "/news",
  ].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = ARTICLES.map((a) => ({
    url: `${SITE}/news/${a.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...articles];
}
