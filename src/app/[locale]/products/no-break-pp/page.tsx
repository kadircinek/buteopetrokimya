import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import type { TdsResource } from "@/data/tds";
import { NO_BREAK_GRADES } from "@/data/noBreakPP";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const TDS_REQUEST: TdsResource = { kind: "request" };

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const path = "/products/no-break-pp";

  const titles: Record<string, string> = {
    tr: "No Break PP | Yüksek Darbe Dayanımlı Polipropilen",
    en: "No Break PP | High Impact Polypropylene Grades",
    ro: "PP No Break | Polipropilenă cu Impact Ridicat",
  };
  const descriptions: Record<string, string> = {
    tr: "No break PP tedarikçisi: SK BH3500, BH3820, Hanwha TotalEnergies BI6300, BI7300, Borealis BD265MO. TDS ve numune için ulaşın.",
    en: "No break PP supplier: SK BH3500, BH3820, Hanwha TotalEnergies BI6300, BI7300, Borealis BD265MO. Request TDS and samples.",
    ro: "Furnizor PP no break: SK BH3500, BH3820, Hanwha TotalEnergies BI6300, BI7300, Borealis BD265MO. Solicitați TDS și mostre.",
  };

  return {
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    keywords: [
      "no break pp", "no break ppc", "no break polipropilen",
      "yüksek darbe dayanımlı pp", "ultra yüksek darbe pp",
      "PP blok kopolimer", "kırılmaz pp hammadde",
      ...NO_BREAK_GRADES.flatMap((g) => g.aliases),
      "SK Geo Centric", "Hanwha TotalEnergies", "Borealis", "Borouge", "YUPLENE",
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

export default function NoBreakIndexPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("nobreak");

  const url = `${SITE_URL}/${locale}/products/no-break-pp`;
  const faq = [1, 2, 3, 4].map((n) => ({ q: t(`faqQ${n}`), a: t(`faqA${n}`) }));
  const selection = [1, 2, 3, 4, 5, 6].map((n) => t(`sel${n}`));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${t("catTitle")} — ${t("catHighlight")}`,
        description: t("catDesc"),
        url,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: NO_BREAK_GRADES.length,
          itemListElement: NO_BREAK_GRADES.map((g, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: g.code,
            url: `${SITE_URL}/${locale}/products/no-break-pp/${g.slug}`,
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: t("products"), item: `${SITE_URL}/${locale}/products` },
          { "@type": "ListItem", position: 3, name: t("catTitle"), item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1a3a5c 70%, #2D6A4F 100%)" }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/products`} className="hover:text-white transition-colors">{t("products")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{t("catTitle")}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <ShieldCheck size={14} />
              {t("badge")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 leading-tight">
              {t("catTitle")} <span style={{ color: "#86efac" }}>{t("catHighlight")}</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{t("catDesc")}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full text-white transition-all hover:-translate-y-0.5 text-sm"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("ctaBtn")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Grade listesi — SEO açısından en değerli bölüm */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h2 className="text-3xl font-bold text-gray-900">{t("gradesTitle")}</h2>
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">
                {NO_BREAK_GRADES.length}
              </span>
            </div>
            <p className="text-gray-500 mb-8">{t("gradesDesc")}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {NO_BREAK_GRADES.map((g) => {
                const k = g.slug.replace(/-/g, "_");
                return (
                  <div key={g.slug} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
                    <Link href={`/${locale}/products/no-break-pp/${g.slug}`} className="group">
                      <div className="font-mono font-black text-xl mb-1 group-hover:underline" style={{ color: g.color }}>{g.short}</div>
                      <div className="text-sm font-semibold text-gray-700 mb-1">{g.code}</div>
                    </Link>
                    <div className="text-xs text-gray-400 mb-3">
                      {t("makerLabel")}: {g.maker}{g.series ? ` · ${g.series}` : ""}
                    </div>
                    <span className="self-start text-xs font-bold px-2.5 py-1 rounded-full mb-4" style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}>
                      {t(`${k}_tag`)}
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{t(`${k}_desc`)}</p>
                    <div className="flex flex-wrap gap-2">
                      <TdsGate resource={TDS_REQUEST} productName={g.code} />
                      <TdsGate resource={TDS_REQUEST} productName={g.code} mode="sample" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Anlatım */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="text-gray-600 leading-relaxed text-lg">{t("intro1")}</p>
            <p className="text-gray-600 leading-relaxed text-lg">{t("intro2")}</p>
            <p className="text-gray-600 leading-relaxed text-lg">{t("intro3")}</p>
          </div>
        </section>

        {/* Seçim kriterleri */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("selectionTitle")}</h2>
            <p className="text-gray-500 mb-8">{t("selectionDesc")}</p>
            <ul className="space-y-3">
              {selection.map((x, i) => (
                <li key={x} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: "#40916C" }}>
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SSS */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("faqTitle")}</h2>
            <div className="space-y-3">
              {faq.map((x, i) => (
                <details key={i} className="group rounded-2xl border border-gray-100 overflow-hidden bg-white">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                    {x.q}
                    <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{x.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Tedarik */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>
                <Truck size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("supplyTitle")}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">{t("supplyDesc")}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{t("supplyNote")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* İlgili hammadde tipleri */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("relatedTitle")}</h2>
            <div className="flex flex-wrap gap-3">
              {["pp-kopolimer", "pp-homopolimer", "pp-random"].map((s) => (
                <Link
                  key={s}
                  href={`/${locale}/products/${s}`}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                >
                  {s === "pp-kopolimer" ? "PPC" : s === "pp-homopolimer" ? "PPH" : "PPRC"}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("catTitle")} {t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("ctaBtn")} <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+905421894340"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                +90 542 189 43 40
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
