import type { MetadataRoute } from "next";

const BASE_URL = "https://www.buteopetrokimya.com";
const locales = ["tr", "en", "ro"] as const;

// Route path (relative to locale) and crawl priority
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/lgchem", priority: 0.9, changeFrequency: "monthly" },
  { path: "/basechem", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sectors", priority: 0.8, changeFrequency: "monthly" },
  { path: "/finder", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            tr: `${BASE_URL}/tr${route.path}`,
            en: `${BASE_URL}/en${route.path}`,
            ro: `${BASE_URL}/ro${route.path}`,
          },
        },
      });
    }
  }

  return entries;
}
