import type { MetadataRoute } from "next";
import { ALL_BRAND_SLUGS, ALL_GRADE_PATHS } from "@/data/lgchemBrands";
import { ALL_POST_SLUGS } from "@/data/blog";
import { ALL_SECTOR_SLUGS } from "@/data/sectorContent";
import { ALL_POLYMER_SLUGS } from "@/data/polymerTypes";
import { ALL_BASECHEM_SLUGS } from "@/data/basechemProducts";
import { ALL_NO_BREAK_SLUGS } from "@/data/noBreakPP";

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
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  // Teknik rehber yazıları
  ...ALL_POST_SLUGS.map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  // Sektör detay sayfaları
  ...ALL_SECTOR_SLUGS.map((slug) => ({
    path: `/sectors/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  // Hammadde (polimer tipi) sayfaları
  ...ALL_POLYMER_SLUGS.map((slug) => ({
    path: `/products/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  // Basechem ürün detay sayfaları
  ...ALL_BASECHEM_SLUGS.map((slug) => ({
    path: `/basechem/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  // No Break PP — kategori + grade sayfaları
  { path: "/products/no-break-pp", priority: 0.9, changeFrequency: "weekly" as const },
  ...ALL_NO_BREAK_SLUGS.map((slug) => ({
    path: `/products/no-break-pp/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  // LG Chem marka detay sayfaları (her marka ayrı sıralanabilir sayfa)
  ...ALL_BRAND_SLUGS.map((slug) => ({
    path: `/lgchem/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  // LG Chem grade detay sayfaları — tam grade kodu aramaları için giriş kapısı
  ...ALL_GRADE_PATHS.map(({ brand, grade }) => ({
    path: `/lgchem/${brand}/${grade}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
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
