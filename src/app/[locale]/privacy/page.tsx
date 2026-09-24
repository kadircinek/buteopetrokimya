import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const path = "/privacy";

  const titles: Record<string, string> = {
    tr: "KVKK Aydınlatma Metni ve Gizlilik Politikası",
    en: "Personal Data Protection and Privacy Policy",
    ro: "Protecția Datelor și Politica de Confidențialitate",
  };
  const descriptions: Record<string, string> = {
    tr: "Buteo Petrokimya KVKK aydınlatma metni: hangi kişisel verileri hangi amaçla işlediğimiz ve haklarınız.",
    en: "Buteo Petrochemicals privacy notice: which personal data we process, for what purpose, and your rights.",
    ro: "Nota de confidențialitate Buteo Petrochemicals: ce date prelucrăm, în ce scop și care sunt drepturile dumneavoastră.",
  };

  return {
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
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

export default function PrivacyPage({ params }: Props) {
  const { locale } = use(params);
  const t = useTranslations("privacy");

  // Numaralı bölümler: metin + isteğe bağlı madde listesi.
  const sections: { t: string; body?: string[]; intro?: string; list?: string[]; note?: string }[] = [
    { t: t("s1t"), body: [t("s1a"), t("s1b"), t("s1c")] },
    { t: t("s2t"), intro: t("s2i"), list: [t("s2l1"), t("s2l2"), t("s2l3"), t("s2l4")], note: t("s2n") },
    { t: t("s3t"), list: [t("s3l1"), t("s3l2"), t("s3l3"), t("s3l4"), t("s3l5")] },
    { t: t("s4t"), body: [t("s4a")] },
    { t: t("s5t"), body: [t("s5a"), t("s5b")] },
    { t: t("s6t"), body: [t("s6a")] },
    { t: t("s7t"), intro: t("s7i"), list: [t("s7l1"), t("s7l2"), t("s7l3"), t("s7l4"), t("s7l5"), t("s7l6"), t("s7l7")] },
    { t: t("s8t"), body: [t("s8a")] },
    { t: t("s9t"), body: [t("s9a")] },
    { t: t("s10t"), body: [t("s10a")] },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 100%)" }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">{t("navLabel")}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              <ShieldCheck size={14} />
              {t("badge")}
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {t("title")} <span style={{ color: "#4CAF50" }}>{t("titleHighlight")}</span>
            </h1>
            <p className="text-white/50 text-sm">{t("updated")}</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-600 leading-relaxed text-lg mb-12">{t("intro")}</p>

            {sections.map((s, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{s.t}</h2>
                {s.body?.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-3">{p}</p>
                ))}
                {s.intro && <p className="text-gray-600 leading-relaxed mb-4">{s.intro}</p>}
                {s.list && (
                  <ul className="space-y-2 mb-3">
                    {s.list.map((x, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5" style={{ backgroundColor: "#40916C" }} />
                        {x}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && <p className="text-gray-400 text-sm leading-relaxed mt-3">{s.note}</p>}
              </section>
            ))}
          </div>
        </section>

        <section className="py-16" style={{ background: "#f0fdf4" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("contactTitle")}</h2>
            <p className="text-gray-600 mb-8">{t("contactDesc")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#1B4332" }}
            >
              {t("contactBtn")} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
