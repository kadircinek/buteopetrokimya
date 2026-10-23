import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Award, ArrowRight, ChevronRight, Star, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import type { TdsResource } from "@/data/tds";
import { getBasechemBySlug, ALL_BASECHEM_SLUGS, BASECHEM_SLUGS } from "@/data/basechemProducts";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const TDS_REQUEST: TdsResource = { kind: "request" };

type Props = { params: Promise<{ locale: string; product: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_BASECHEM_SLUGS.map((product) => ({ locale, product }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, product } = await params;
  const data = getBasechemBySlug(product, locale);
  if (!data) return {};

  const path = `/basechem/${product}`;
  const titles: Record<string, string> = {
    tr: `Basechem ${data.code} | Türkiye Distribütörü — Buteo`,
    en: `Basechem ${data.code} | Turkey Distributor — Buteo`,
    ro: `Basechem ${data.code} | Distribuitor Turcia — Buteo`,
  };
  const descriptions: Record<string, string> = {
    tr: `Basechem ${data.code} Türkiye distribütörü. ${data.variants.length} varyant: alev geciktirici, cam elyaf takviyeli ve özel renk. TDS için ulaşın.`,
    en: `Basechem ${data.code} Turkey distributor. ${data.variants.length} variants: flame retardant, glass fibre reinforced and custom colour. Request the TDS.`,
    ro: `Distribuitor Turcia Basechem ${data.code}. ${data.variants.length} variante: ignifug, armat cu fibră de sticlă și culoare personalizată.`,
  };

  const clamp = (s: string, max = 158) => {
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:]$/, "") + "…";
  };

  return {
    title: titles[locale] || titles.tr,
    description: clamp(descriptions[locale] || descriptions.tr),
    keywords: [
      `Basechem ${data.code}`,
      data.code,
      data.fullName,
      `${data.code} compound`,
      `${data.code} Türkiye`,
      `${data.code} distribütör`,
      `${data.code} TDS`,
      "alev geciktirici compound",
      "cam elyaf takviyeli compound",
      "Basechem",
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

export default function BasechemProductPage({ params }: Props) {
  const { locale, product } = use(params);
  const t = useTranslations("bcDetail");

  const data = getBasechemBySlug(product, locale);
  if (!data) notFound();

  const others = ALL_BASECHEM_SLUGS.filter((s) => s !== product);
  const url = `${SITE_URL}/${locale}/basechem/${product}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: "Basechem", item: `${SITE_URL}/${locale}/basechem` },
          { "@type": "ListItem", position: 3, name: data.code, item: url },
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
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/basechem`} className="hover:text-white transition-colors">{t("basechem")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{data.code}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Star size={14} fill="currentColor" />
              {t("distributorBadge")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-3">Basechem {data.code}</h1>
            <p className="text-xl font-semibold mb-6" style={{ color: "#86efac" }}>{data.fullName}</p>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{data.desc}</p>

            <div className="flex flex-wrap gap-3">
              <TdsGate resource={TDS_REQUEST} productName={`Basechem ${data.code}`} variant="dark" />
              <TdsGate resource={TDS_REQUEST} productName={`Basechem ${data.code}`} mode="sample" variant="dark" />
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

        {/* Varyantlar — SEO açısından en değerli bölüm */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h2 className="text-3xl font-bold text-gray-900">{t("variantsTitle")}</h2>
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-800">
                {data.variants.length} {t("variantUnit")}
              </span>
            </div>
            <p className="text-gray-500 mb-8">{t("variantsDesc")}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.variants.map((v) => (
                <div key={v.type} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 leading-snug">{v.type}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}>
                      {v.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{v.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <TdsGate resource={TDS_REQUEST} productName={`Basechem ${data.code} — ${v.type}`} />
                    <TdsGate resource={TDS_REQUEST} productName={`Basechem ${data.code} — ${v.type}`} mode="sample" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Özellikler + uygulamalar */}
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

        {/* OEM + tedarik */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <div className="flex items-start gap-4 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#2D6A4F" }}>
                <Award size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{t("oemTitle")}</h2>
                <p className="text-gray-600 leading-relaxed">{t("oemDesc")}</p>
              </div>
            </div>
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

        {/* Diğer ürünler — iç linkleme */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("otherTitle")}</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {others.map((s) => (
                <Link
                  key={s}
                  href={`/${locale}/basechem/${s}`}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                >
                  {BASECHEM_SLUGS[s]}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/basechem`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
              {t("backToAll")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Basechem {data.code} {t("ctaTitle")}</h2>
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
