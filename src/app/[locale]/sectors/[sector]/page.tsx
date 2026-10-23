import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Factory, Truck, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSector, ALL_SECTOR_SLUGS, SECTORS } from "@/data/sectorContent";
import { BRAND_SLUGS } from "@/data/lgchemBrands";
import { BASECHEM_SLUGS } from "@/data/basechemProducts";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string; sector: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_SECTOR_SLUGS.map((sector) => ({ locale, sector }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, sector } = await params;
  const data = getSector(sector);
  if (!data) return {};

  const ts = await getTranslations({ locale, namespace: "sectors" });
  const name = ts(`s${data.n}`);
  const path = `/sectors/${sector}`;

  const titles: Record<string, string> = {
    tr: `${name} Plastik Hammadde | Mühendislik Plastikleri`,
    en: `${name} Plastic Raw Materials | Engineering Plastics`,
    ro: `${name} Materii Prime Plastice | Plastice Tehnice`,
  };
  const descriptions: Record<string, string> = {
    tr: `${name} sektörü için mühendislik plastikleri ve compound çözümleri. LG Chem ve Basechem Türkiye distribütörü Buteo Petrokimya.`,
    en: `Engineering plastics and compound solutions for the ${name} sector. Buteo Petrochemicals, LG Chem and Basechem Turkey distributor.`,
    ro: `Plastice tehnice și compounduri pentru sectorul ${name}. Buteo Petrochemicals, distribuitor LG Chem și Basechem pentru Turcia.`,
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
      `${name} plastik hammadde`,
      `${name} mühendislik plastiği`,
      `${name} compound`,
      `${name} hammadde tedarikçisi`,
      ...data.brands.map((b) => BRAND_SLUGS[b]).filter(Boolean),
      "LG Chem",
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

export default function SectorPage({ params }: Props) {
  const { locale, sector } = use(params);
  const t = useTranslations("sectorDetail");
  const ts = useTranslations("sectors");

  const data = getSector(sector);
  if (!data) notFound();

  const name = ts(`s${data.n}`);
  const shortDesc = ts(`s${data.n}desc`);
  const parts = t.raw(`s${data.n}parts`) as string[];
  const criteria = t.raw(`s${data.n}criteria`) as string[];
  const others = SECTORS.filter((s) => s.slug !== sector);
  const url = `${SITE_URL}/${locale}/sectors/${sector}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${name} — ${t("badge")}`,
        serviceType: name,
        description: `${shortDesc} ${t(`s${data.n}intro1`)}`,
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        areaServed: ["TR", "Europe"],
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: t("sectors"), item: `${SITE_URL}/${locale}/sectors` },
          { "@type": "ListItem", position: 3, name, item: url },
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
              <Link href={`/${locale}/sectors`} className="hover:text-white transition-colors">{t("sectors")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <Factory size={14} />
              {t("badge")}
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white mb-5 leading-tight">{name}</h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mb-8">{shortDesc}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full text-white transition-all hover:-translate-y-0.5 text-sm"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("ctaBtn")} <ArrowRight size={16} />
              </Link>
              <Link
                href={`/${locale}/finder`}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all text-sm"
              >
                {t("finderBtn")}
              </Link>
            </div>
          </div>
        </section>

        {/* Sektör anlatımı */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <p className="text-gray-600 leading-relaxed text-lg">{t(`s${data.n}intro1`)}</p>
            <p className="text-gray-600 leading-relaxed text-lg">{t(`s${data.n}intro2`)}</p>
          </div>
        </section>

        {/* Tipik parçalar */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("partsTitle")}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {parts.map((p) => (
                <div key={p} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-gray-100">
                  <Wrench size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#40916C" }} />
                  <span className="text-gray-700 text-sm leading-snug">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seçim kriterleri */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("criteriaTitle")}</h2>
            <p className="text-gray-500 mb-8">{t("criteriaDesc")}</p>
            <ul className="space-y-3">
              {criteria.map((c, i) => (
                <li key={c} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: "#40916C" }}>
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Önerilen ürün aileleri — iç linkleme */}
        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("brandsTitle")}</h2>
            <p className="text-gray-500 mb-8">{t("linkNote")}</p>
            <div className="flex flex-wrap gap-3 mb-12">
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
                <p className="text-gray-600 leading-relaxed">{t("supplyDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Diğer sektörler */}
        <section className="py-16" style={{ background: "#f8fafc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("otherTitle")}</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/sectors/${s.slug}`}
                  className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                >
                  {ts(`s${s.n}`)}
                </Link>
              ))}
            </div>
            <Link href={`/${locale}/sectors`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
              {t("backToAll")} <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
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
