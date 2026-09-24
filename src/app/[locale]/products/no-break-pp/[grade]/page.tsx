import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, FileText, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TdsGate from "@/components/TdsGate";
import type { TdsResource } from "@/data/tds";
import { getNoBreakGrade, ALL_NO_BREAK_SLUGS, NO_BREAK_GRADES } from "@/data/noBreakPP";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const TDS_REQUEST: TdsResource = { kind: "request" };

type Props = { params: Promise<{ locale: string; grade: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_NO_BREAK_SLUGS.map((grade) => ({ locale, grade }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, grade } = await params;
  const g = getNoBreakGrade(grade);
  if (!g) return {};

  const path = `/products/no-break-pp/${grade}`;
  const titles: Record<string, string> = {
    tr: `${g.code} | No Break PP Tedarikçisi`,
    en: `${g.code} | No Break PP Supplier`,
    ro: `${g.code} | Furnizor PP No Break`,
  };
  const descriptions: Record<string, string> = {
    tr: `${g.code} — ${g.maker} yüksek darbe dayanımlı PP. Buteo Petrokimya'dan TDS, numune ve fiyat teklifi talep edin.`,
    en: `${g.code} — high impact PP from ${g.maker}. Request TDS, samples and pricing from Buteo Petrochemicals.`,
    ro: `${g.code} — PP cu impact ridicat de la ${g.maker}. Solicitați TDS, mostre și preț de la Buteo Petrochemicals.`,
  };

  const clamp = (s: string, max = 158) => {
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:]$/, "") + "…";
  };

  return {
    title: clamp(titles[locale] || titles.tr, 62),
    description: clamp(descriptions[locale] || descriptions.tr),
    keywords: [
      ...g.aliases,
      `${g.short} fiyat`,
      `${g.short} TDS`,
      `${g.short} tedarikçi`,
      `${g.short} teknik veri sayfası`,
      g.maker,
      ...(g.series ? [g.series] : []),
      "no break pp", "no break ppc", "yüksek darbe dayanımlı pp", "PP blok kopolimer",
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

export default function NoBreakGradePage({ params }: Props) {
  const { locale, grade } = use(params);
  const t = useTranslations("nobreak");

  const g = getNoBreakGrade(grade);
  if (!g) notFound();

  const k = g.slug.replace(/-/g, "_");
  const props = t.raw(`${k}_props`) as string[];
  const apps = t.raw(`${k}_apps`) as string[];
  const others = NO_BREAK_GRADES.filter((x) => x.slug !== grade);
  const url = `${SITE_URL}/${locale}/products/no-break-pp/${grade}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: g.code,
        sku: g.short,
        model: g.short,
        alternateName: g.aliases,
        category: t("catHighlight"),
        description: t(`${k}_desc`),
        brand: { "@type": "Brand", name: g.maker },
        manufacturer: { "@type": "Organization", name: g.maker },
        isSimilarTo: others.map((o) => ({
          "@type": "Product",
          name: o.code,
          url: `${SITE_URL}/${locale}/products/no-break-pp/${o.slug}`,
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
          { "@type": "ListItem", position: 2, name: t("products"), item: `${SITE_URL}/${locale}/products` },
          { "@type": "ListItem", position: 3, name: t("catTitle"), item: `${SITE_URL}/${locale}/products/no-break-pp` },
          { "@type": "ListItem", position: 4, name: g.code, item: url },
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
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: `linear-gradient(135deg, #0d2b1a 0%, ${g.color} 70%, #2D6A4F 100%)` }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/products`} className="hover:text-white transition-colors">{t("products")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/products/no-break-pp`} className="hover:text-white transition-colors">{t("catTitle")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{g.short}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <ShieldCheck size={14} />
              {t(`${k}_tag`)}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 font-mono tracking-tight">{g.code}</h1>

            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{t("makerLabel")}</div>
                <div className="text-lg font-bold" style={{ color: "#86efac" }}>{g.maker}</div>
              </div>
              {g.series && (
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wide">{t("seriesLabel")}</div>
                  <div className="text-lg font-bold text-white">{g.series}</div>
                </div>
              )}
            </div>

            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{t(`${k}_desc`)}</p>

            <div className="flex flex-wrap gap-3">
              <TdsGate resource={TDS_REQUEST} productName={g.code} variant="dark" />
              <TdsGate resource={TDS_REQUEST} productName={g.code} mode="sample" variant="dark" />
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

        {/* TDS + numune */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5" style={{ backgroundColor: "#1B4332" }}>
                <FileText size={22} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t("aboutTitle")}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t(`${k}_desc`)}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{t("tdsNote")}</p>
              <TdsGate resource={TDS_REQUEST} productName={g.code} />
            </div>

            <div className="p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5" style={{ backgroundColor: "#40916C" }}>
                <FlaskConical size={22} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t("supplyTitle")}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t("supplyDesc")}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{t("supplyNote")}</p>
              <TdsGate resource={TDS_REQUEST} productName={g.code} mode="sample" />
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

        {/* Diğer grade'ler — iç linkleme */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("otherTitle")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/${locale}/products/no-break-pp/${o.slug}`}
                  className="group p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="font-mono font-black text-lg mb-1" style={{ color: o.color }}>{o.short}</div>
                  <div className="text-xs text-gray-400">{o.maker}</div>
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/products/no-break-pp`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
              {t("backToCat")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{g.code} {t("ctaTitle")}</h2>
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
