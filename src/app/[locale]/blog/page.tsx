import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPosts } from "@/data/blog";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const path = "/blog";

  const titles: Record<string, string> = {
    tr: "Teknik Rehber | Mühendislik Plastikleri Bilgi Merkezi",
    en: "Technical Guide | Engineering Plastics Knowledge Hub",
    ro: "Ghid Tehnic | Centru de Cunoștințe Plastice Tehnice",
  };
  const descriptions: Record<string, string> = {
    tr: "Malzeme seçimi, UL-94, cam elyaf oranı ve kurutma gibi konularda mühendislik plastikleri teknik rehberleri.",
    en: "Engineering plastics technical guides on material selection, UL-94, glass fibre content and drying.",
    ro: "Ghiduri tehnice despre alegerea materialelor, UL-94, conținutul de fibră de sticlă și uscare.",
  };

  return {
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    keywords: [
      "mühendislik plastikleri rehber",
      "plastik hammadde teknik bilgi",
      "malzeme seçimi",
      "UL-94 V-0",
      "cam elyaf takviye",
      "PC ABS karşılaştırma",
      "PA6 PA66 fark",
    ],
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: {
        tr: `${SITE_URL}/tr${path}`,
        en: `${SITE_URL}/en${path}`,
        ro: `${SITE_URL}/ro${path}`,
        "x-default": `${SITE_URL}/tr${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: `${SITE_URL}/${locale}${path}`,
      title: titles[locale] || titles.tr,
      description: descriptions[locale] || descriptions.tr,
    },
  };
}

export default function BlogIndexPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("blog");
  const posts = getPosts(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: `${SITE_NAME} — ${t("badge")}`,
        url: `${SITE_URL}/${locale}/blog`,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          url: `${SITE_URL}/${locale}/blog/${p.slug}`,
          author: { "@type": "Organization", name: SITE_NAME },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: t("badge"), item: `${SITE_URL}/${locale}/blog` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 100%)" }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {t("badge")}
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("title")} <span style={{ color: "#4CAF50" }}>{t("titleHighlight")}</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("pageDesc")}</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/blog/${p.slug}`}
                  className="group flex flex-col p-7 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}>
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} /> {p.readingMinutes} {t("readTime")}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "#1B4332" }}>
                    {t("allPosts")} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#1B4332" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#4CAF50" }}
            >
              {t("ctaBtn")} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
