import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, FileText, FlaskConical, Star, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import { tdsForBrand } from "@/data/tds";
import { getGradeBySlug, ALL_GRADE_PATHS, gradeSlug } from "@/data/lgchemBrands";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; brand: string; grade: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_GRADE_PATHS.map(({ brand, grade }) => ({ locale, brand, grade }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, brand, grade } = await params;
  const data = getGradeBySlug(brand, grade, locale);
  if (!data) return {};

  const path = `/lgchem/${brand}/${grade}`;
  const b = data.brand;

  const titles: Record<string, string> = {
    tr: `${data.grade} | ${b.base} — Türkiye Distribütörü`,
    en: `${data.grade} | ${b.base} — Turkey Distributor`,
    ro: `${data.grade} | ${b.base} — Distribuitor Turcia`,
  };
  const descriptions: Record<string, string> = {
    tr: `${data.grade} — LG Chem ${b.brand} ailesi ${b.base}. TDS, numune ve fiyat teklifi için Buteo Petrokimya'ya ulaşın.`,
    en: `${data.grade} — LG Chem ${b.brand} family ${b.base}. Request TDS, samples and pricing from Buteo Petrochemicals.`,
    ro: `${data.grade} — familia LG Chem ${b.brand}, ${b.base}. Solicitați TDS, mostre și preț de la Buteo Petrochemicals.`,
  };

  // Kelime ortasından kesmemek için son boşluktan kırp.
  const clamp = (s: string, max = 158) => {
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:]$/, "") + "…";
  };

  return {
    title: titles[locale] || titles.tr,
    description: clamp(descriptions[locale] || descriptions.tr),
    keywords: [
      data.grade,
      data.code,
      `${data.grade} TDS`,
      `${data.grade} fiyat`,
      `${data.grade} teknik veri sayfası`,
      `${data.grade} distribütör`,
      b.brand,
      b.base,
      "LG Chem",
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
      description: clamp(descriptions[locale] || descriptions.tr),
    },
  };
}

export default function GradePage({ params }: Props) {
  // Next.js 16'da params bir Promise; sync server component içinde use() ile açılır.
  const { locale, brand, grade } = use(params);
  const t = useTranslations("grade");

  const data = getGradeBySlug(brand, grade, locale);
  if (!data) notFound();

  const b = data.brand;
  const url = `${SITE_URL}/${locale}/lgchem/${brand}/${grade}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: data.grade,
        sku: data.code,
        model: data.code,
        category: b.base,
        description: t("intro", { grade: data.grade, brand: b.brand, base: b.base }),
        brand: { "@type": "Brand", name: "LG Chem" },
        manufacturer: { "@type": "Organization", name: "LG Chem" },
        isSimilarTo: data.siblings.map((g) => ({
          "@type": "Product",
          name: g,
          url: `${SITE_URL}/${locale}/lgchem/${brand}/${gradeSlug(g)}`,
        })),
        url,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: ["TR", "Europe"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "LG Chem", item: `${SITE_URL}/${locale}/lgchem` },
          { "@type": "ListItem", position: 3, name: b.brand, item: `${SITE_URL}/${locale}/lgchem/${brand}` },
          { "@type": "ListItem", position: 4, name: data.grade, item: url },
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
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: `linear-gradient(135deg, #0d2b1a 0%, ${b.color} 70%, #2D6A4F 100%)` }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/lgchem`} className="hover:text-white transition-colors">{t("lgchem")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/lgchem/${brand}`} className="hover:text-white transition-colors">{b.brand}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{data.code}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Star size={14} fill="currentColor" />
              {t("badge")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 font-mono tracking-tight">{data.grade}</h1>

            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{t("familyLabel")}</div>
                <Link href={`/${locale}/lgchem/${brand}`} className="text-lg font-bold hover:underline" style={{ color: "#86efac" }}>{b.brand}</Link>
              </div>
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{t("baseLabel")}</div>
                <div className="text-lg font-bold text-white">{b.base}</div>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
              {t("intro", { grade: data.grade, brand: b.brand, base: b.base })}
            </p>

            <div className="flex flex-wrap gap-3">
              <TdsGate resource={tdsForBrand(b.brand)} productName={data.grade} variant="dark" />
              <TdsGate resource={tdsForBrand(b.brand)} productName={data.grade} mode="sample" variant="dark" />
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 font-bold px-6 py-1.5 rounded-full text-white transition-all hover:-translate-y-0.5 text-xs"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("ctaBtn")} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Teknik veriler — dürüstlük notu + lead capture */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5" style={{ backgroundColor: "#1B4332" }}>
                <FileText size={22} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t("dataTitle")}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t("dataDesc")}</p>
              <p className="text-gray-400 text-sm mb-5">{t("dataNote")}</p>
              <TdsGate resource={tdsForBrand(b.brand)} productName={data.grade} />
            </div>

            <div className="p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5" style={{ backgroundColor: "#40916C" }}>
                <FlaskConical size={22} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t("sampleTitle")}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{t("sampleDesc")}</p>
              <TdsGate resource={tdsForBrand(b.brand)} productName={data.grade} mode="sample" />
            </div>
          </div>
        </section>

        {/* Marka özellikleri + uygulamalar */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("highlightsTitle", { brand: b.brand })}</h2>
              <div className="flex flex-wrap gap-2">
                {b.highlights.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-green-100" style={{ color: "#1B4332" }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("appsTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {b.applications.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-gray-100 text-gray-600">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kardeş grade'ler — iç linkleme (SEO açısından kritik) */}
        {data.siblings.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("siblingsTitle", { brand: b.brand })}</h2>
              <p className="text-gray-500 mb-8">{t("siblingsDesc")}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {data.siblings.map((g) => (
                  <Link
                    key={g}
                    href={`/${locale}/lgchem/${brand}/${gradeSlug(g)}`}
                    className="group p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-between gap-3"
                  >
                    <span className="font-mono font-black text-lg" style={{ color: b.color }}>{g}</span>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-green-600 transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
              <Link href={`/${locale}/lgchem/${brand}`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
                {t("backToBrand", { brand: b.brand })} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}

        {/* Tedarik bilgisi */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-8 rounded-3xl bg-white border border-green-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>
                <Truck size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("supplyTitle")}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">{t("supplyDesc")}</p>
                <p className="text-gray-400 text-sm">{t("notFoundHint")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle", { grade: data.grade })}</h2>
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
