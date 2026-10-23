import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, FileText, Package, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import { tdsForCode } from "@/data/tds";
import { getPolymer, ALL_POLYMER_SLUGS, POLYMERS } from "@/data/polymerTypes";
import { BRAND_SLUGS } from "@/data/lgchemBrands";
import { BASECHEM_SLUGS } from "@/data/basechemProducts";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string; type: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_POLYMER_SLUGS.map((type) => ({ locale, type }))
  );
}

const clamp = (s: string, max = 158) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:]$/, "") + "…";
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, type } = await params;
  const data = getPolymer(type);
  if (!data) return {};

  const tp = await getTranslations({ locale, namespace: "polymer" });
  const key = type.replace(/-/g, "_");
  const name = tp(`${key}_name`);
  const path = `/products/${type}`;

  const titles: Record<string, string> = {
    tr: `${name} Hammadde | Tedarik, TDS ve Fiyat`,
    en: `${name} Raw Material | Supply, TDS and Price`,
    ro: `${name} Materie Primă | Furnizare, TDS și Preț`,
  };
  const descriptions: Record<string, string> = {
    tr: `${name} hammadde tedariki — Buteo Petrokimya. İstanbul'da iki depo, aynı gün sevkiyat. TDS ve fiyat teklifi için ulaşın.`,
    en: `${name} raw material supply — Buteo Petrochemicals. Two warehouses in Istanbul, same-day delivery. Request TDS and pricing.`,
    ro: `Furnizare materie primă ${name} — Buteo Petrochemicals. Două depozite în Istanbul, livrare în aceeași zi.`,
  };

  return {
    title: clamp(titles[locale] || titles.tr, 62),
    description: clamp(descriptions[locale] || descriptions.tr),
    keywords: [
      data.code,
      name,
      `${data.code} hammadde`,
      `${data.code} fiyat`,
      `${data.code} tedarikçi`,
      `${data.code} distribütör`,
      `${data.code} TDS`,
      "plastik hammadde",
      ...data.brands.map((b) => BRAND_SLUGS[b]).filter(Boolean),
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

export default function PolymerTypePage({ params }: Props) {
  const { locale, type } = use(params);
  const t = useTranslations("polymer");
  const tn = useTranslations("nobreak");

  const data = getPolymer(type);
  if (!data) notFound();

  const key = type.replace(/-/g, "_");
  const name = t(`${key}_name`);
  const props = t.raw(`${key}_props`) as string[];
  const apps = t.raw(`${key}_apps`) as string[];
  const others = POLYMERS.filter((p) => p.slug !== type);
  const url = `${SITE_URL}/${locale}/products/${type}`;
  const faq = [1, 2, 3].map((n) => ({
    q: t(`faqQ${n}`, { code: data.code }),
    a: t(`faqA${n}`, { code: data.code }),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: t("products"), item: `${SITE_URL}/${locale}/products` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
      },
    ],
  };

  const hasRelated = data.brands.length > 0 || data.basechem.length > 0;

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
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/products`} className="hover:text-white transition-colors">{t("products")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{data.code}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Package size={14} />
              {data.group === "engineering" ? t("groupEng") : t("groupPoly")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-3 leading-tight">{name}</h1>
            <p className="text-xl font-semibold mb-6 font-mono" style={{ color: "#86efac" }}>{data.code}</p>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{t(`${key}_intro1`)}</p>

            <div className="flex flex-wrap gap-3">
              <TdsGate resource={tdsForCode(data.code)} productName={data.code} variant="dark" />
              <TdsGate resource={tdsForCode(data.code)} productName={data.code} mode="sample" variant="dark" />
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

        {/* Hakkında */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("aboutTitle")}</h2>
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed text-lg">{t(`${key}_intro1`)}</p>
              <p className="text-gray-600 leading-relaxed text-lg">{t(`${key}_intro2`)}</p>
            </div>
          </div>
        </section>

        {/* Özellikler + uygulamalar */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("propsTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {props.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-green-100" style={{ color: "#1B4332" }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("appsTitle")}</h2>
              <div className="flex flex-wrap gap-2">
                {apps.map((x) => (
                  <span key={x} className="text-sm px-4 py-2 rounded-full font-medium bg-white border border-gray-100 text-gray-600">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* İlgili ürün aileleri — iç linkleme */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasRelated ? (
              <>
                {data.brands.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("brandsTitle")}</h2>
                    <p className="text-gray-500 mb-6">{t("brandsDesc")}</p>
                    <div className="flex flex-wrap gap-3">
                      {data.brands.map((b) => (
                        <Link
                          key={b}
                          href={`/${locale}/lgchem/${b}`}
                          className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                        >
                          {BRAND_SLUGS[b]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {data.basechem.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("basechemTitle")}</h2>
                    <div className="flex flex-wrap gap-3">
                      {data.basechem.map((b) => (
                        <Link
                          key={b}
                          href={`/${locale}/basechem/${b}`}
                          className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                        >
                          {BASECHEM_SLUGS[b]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">{t("noBrands")}</p>
            )}
          </div>
        </section>

        {/* No Break PP çapraz linki — yalnızca PPC sayfasında */}
        {type === "pp-kopolimer" && (
          <section className="py-16" style={{ background: "#f0fdf4" }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-4 p-8 rounded-3xl bg-white border border-green-100">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1a3a5c" }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{tn("catTitle")} — {tn("catHighlight")}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{tn("catDesc")}</p>
                  <Link
                    href={`/${locale}/products/no-break-pp`}
                    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-0.5 text-sm"
                    style={{ backgroundColor: "#1B4332" }}
                  >
                    {tn("backToCat")} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TDS dürüstlük notu + tedarik */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <div className="flex items-start gap-4 p-8 rounded-3xl bg-white border border-green-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>
                <FileText size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("tdsTitle")}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{t("tdsDesc")}</p>
                <TdsGate resource={tdsForCode(data.code)} productName={data.code} />
              </div>
            </div>
            <div className="flex items-start gap-4 p-8 rounded-3xl bg-white border border-green-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#40916C" }}>
                <Truck size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("supplyTitle")}</h2>
                <p className="text-gray-600 leading-relaxed">{t("supplyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("faqTitle", { code: data.code })}</h2>
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

        {/* Diğer hammadde tipleri */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("otherTitle")}</h2>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/products/${p.slug}`}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                >
                  {p.code}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/products`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
              {t("backToAll")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{data.code} {t("ctaTitle")}</h2>
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
