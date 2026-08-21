import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Star, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import { tdsForBrand } from "@/data/tds";
import { getBrandBySlug, ALL_BRAND_SLUGS, BRAND_SLUGS } from "@/data/lgchemBrands";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; brand: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_BRAND_SLUGS.map((brand) => ({ locale, brand }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, brand } = await params;
  const data = getBrandBySlug(brand, locale);
  if (!data) return {};

  const path = `/lgchem/${brand}`;
  const gradeList = data.grades.join(", ");

  const titles: Record<string, string> = {
    tr: `${data.brand} ${data.base} | Türkiye Distribütörü — Buteo`,
    en: `${data.brand} ${data.base} | Turkey Distributor — Buteo`,
    ro: `${data.brand} ${data.base} | Distribuitor Turcia — Buteo`,
  };

  const descs: Record<string, string> = {
    tr: `${data.brand} (${data.base}) Türkiye distribütörü Buteo Petrokimya.${data.grades.length ? ` Grade'ler: ${gradeList}.` : ""} TDS ve fiyat teklifi için hemen ulaşın.`,
    en: `${data.brand} (${data.base}) Turkey distributor Buteo Petrochemicals.${data.grades.length ? ` Grades: ${gradeList}.` : ""} Request TDS and pricing today.`,
    ro: `Distribuitor Turcia ${data.brand} (${data.base}) — Buteo Petrochemicals.${data.grades.length ? ` Grade: ${gradeList}.` : ""} Solicitați TDS și preț.`,
  };

  const keywords = [
    data.brand,
    `${data.brand} Türkiye`,
    `${data.brand} distribütör`,
    `${data.brand} TDS`,
    `${data.brand} fiyat`,
    ...data.grades,
    data.base,
    "LG Chem",
  ];

  return {
    title: titles[locale] || titles.tr,
    description: (descs[locale] || descs.tr).slice(0, 165),
    keywords,
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
      description: (descs[locale] || descs.tr).slice(0, 165),
    },
  };
}

export default function BrandPage({ params }: Props) {
  // Next.js 16'da params bir Promise; sync server component içinde use() ile açılır.
  const { locale, brand } = use(params);
  const t = useTranslations("brand");

  const data = getBrandBySlug(brand, locale);
  if (!data) notFound();

  const others = ALL_BRAND_SLUGS.filter((s) => s !== brand).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: data.brand,
        category: data.base,
        description: data.desc,
        brand: { "@type": "Brand", name: "LG Chem" },
        manufacturer: { "@type": "Organization", name: "LG Chem" },
        url: `${SITE_URL}/${locale}/lgchem/${brand}`,
        ...(data.grades.length
          ? { model: data.grades, additionalProperty: data.grades.map((g) => ({ "@type": "PropertyValue", name: "Grade", value: g })) }
          : {}),
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
          { "@type": "ListItem", position: 3, name: data.brand, item: `${SITE_URL}/${locale}/lgchem/${brand}` },
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
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: `linear-gradient(135deg, #0d2b1a 0%, ${data.color} 70%, #2D6A4F 100%)` }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/lgchem`} className="hover:text-white transition-colors">{t("lgchem")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{data.brand}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Star size={14} fill="currentColor" />
              {t("distributorBadge")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-3">{data.brand}</h1>
            <p className="text-xl font-semibold mb-6" style={{ color: "#86efac" }}>{data.base}</p>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{data.desc}</p>

            <div className="flex flex-wrap gap-3">
              <TdsGate resource={tdsForBrand(data.brand)} productName={data.brand} variant="dark" />
              <TdsGate resource={tdsForBrand(data.brand)} productName={data.brand} mode="sample" variant="dark" />
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

        {/* Grades — SEO açısından en değerli bölüm */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h2 className="text-3xl font-bold text-gray-900">{t("gradesTitle")}</h2>
              {data.grades.length > 0 && (
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">
                  {data.grades.length} {t("gradeCount")}
                </span>
              )}
            </div>
            <p className="text-gray-500 mb-8">{data.grades.length ? t("gradesDesc") : t("noGrades")}</p>

            {data.grades.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.grades.map((g) => (
                  <div key={g} className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="font-mono font-black text-lg mb-3" style={{ color: data.color }}>{g}</div>
                    <div className="flex flex-wrap gap-2">
                      <TdsGate resource={tdsForBrand(data.brand)} productName={g} />
                      <TdsGate resource={tdsForBrand(data.brand)} productName={g} mode="sample" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Highlights + Applications */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("highlightsTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {data.highlights.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-green-100" style={{ color: "#1B4332" }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("appsTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {data.applications.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-gray-100 text-gray-600">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Supply info — içerik derinliği + yerel SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>
                <Truck size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("supplyTitle")}</h2>
                <p className="text-gray-600 leading-relaxed">{t("supplyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Other brands — iç linkleme */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("otherBrandsTitle")}</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {others.map((s) => (
                <Link
                  key={s}
                  href={`/${locale}/lgchem/${s}`}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                >
                  {BRAND_SLUGS[s]}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/lgchem`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
              {t("backToAll")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{data.brand} {t("ctaTitle")}</h2>
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
