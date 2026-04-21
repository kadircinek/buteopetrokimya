import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const sectorIcons: Record<string, string> = {
  s1: "🚗",
  s2: "⚡",
  s3: "🏠",
  s4: "🏗️",
  s5: "🏥",
  s6: "🪑",
  s7: "✈️",
  s8: "🌱",
  s9: "⚓",
  s10: "🎮",
  s11: "💡",
};

const sectorKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11"] as const;

export default function SectorsPage() {
  const t = useTranslations("sectors");
  const locale = useLocale();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a, #1B4332, #2D6A4F)"}}>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              {t("badge")}
            </span>
            <h1 className="text-5xl font-bold text-white mb-4">
              {t("title")} <span style={{color: "#4CAF50"}}>{t("titleHighlight")}</span>
            </h1>
            <p className="text-white/70 text-lg">{t("pageDesc")}</p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectorKeys.map((key) => (
                <div
                  key={key}
                  className="group p-8 rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className="text-5xl flex-shrink-0">{sectorIcons[key]}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                        {t(key as "s1")}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {t(`${key}desc` as "s1desc")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product mapping */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("guideTitle")}</h2>
              <p className="text-gray-500">{t("guideDesc")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  sector: t("s1"),
                  products: ["PA6/PA66", "PC/ABS", "PPO/PPE", "PBT", "ABS Compound"],
                  icon: "🚗",
                },
                {
                  sector: t("s2"),
                  products: ["PC", "ABS", "PA66", "PPO/PPE", t("pcAbsFR")],
                  icon: "⚡",
                },
                {
                  sector: t("s5"),
                  products: ["PC (Medical grade)", "ABS", "PPH", "PMMA"],
                  icon: "🏥",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-gray-900">{item.sector}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.products.map((p) => (
                      <span key={p} className="text-xs px-3 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{background: "#1B4332"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full"
              style={{backgroundColor: "#4CAF50"}}
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
