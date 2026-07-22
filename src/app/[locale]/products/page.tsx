import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, FileText } from "lucide-react";
import { buildMetadata, type Locale } from "@/lib/seo";
import { tdsForCode, type TdsResource } from "@/data/tds";
import TdsGate from "@/components/TdsGate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata("products", locale as Locale);
}

export default function ProductsPage() {
  const t = useTranslations("products");
  const locale = useLocale();

  const polyolefins = [
    { code: "PPH (Moblen)", name: t("pphName") },
    { code: "PPC",          name: t("ppcName") },
    { code: "PPRC",         name: t("pprcName") },
    { code: "HDPE",         name: t("hdpeName") },
    { code: "LDPE",         name: t("ldpeName") },
    { code: "GPPS",         name: t("gppsName") },
    { code: "HIPS",         name: t("hipsName") },
    { code: "TPE",          name: t("tpeName") },
    { code: "TPU",          name: t("tpuName") },
    { code: "EVA",          name: t("evaName") },
  ];

  const engineering = [
    { code: "ABS",     name: t("absEngName") },
    { code: "PC",      name: t("pcEngName") },
    { code: "PMMA",    name: t("pmmaName") },
    { code: "PBT",     name: t("pbtEngName") },
    { code: "SAN",     name: t("sanName") },
    { code: "PC/ABS",  name: "PC+ABS Blend" },
    { code: "PPO/PPE", name: t("ppoName") },
    { code: "PA6/PA66",name: t("paName") },
  ];

  const basechem = [
    { code: "ABS Compound", sub: t("flameGF") },
    { code: "PC Compound",  sub: t("flameGF") },
    { code: "PBT",          sub: t("flameGF") },
    { code: "PC/ABS",       sub: t("flameGF") },
    { code: "PPO/PPE (Norly)", sub: t("flameGF") },
    { code: "PA6/PA66",     sub: t("flameGF") },
  ];

  const lgchem = [
    { code: "TPE / Keyflex" },
    { code: "PC Compound" },
    { code: "PBT" },
    { code: "PC/ABS" },
    { code: "PPO/PPE (Norly)" },
    { code: "PA6 / PA66" },
  ];

  const additivesItems = t.raw("additivesItems") as string[];
  const TDS_REQUEST: TdsResource = { kind: "request" };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 100%)"}}>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
              {t("badge")}
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("title")} <span style={{color: "#4CAF50"}}>{t("titleHighlight")}</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">{t("pageDesc")}</p>
          </div>
        </section>

        {/* Polyolefins */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg" style={{backgroundColor: "#1B4332"}}>
                P
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t("polyolefins")}</h2>
                <p className="text-gray-500 text-sm">{t("lgchemPortfolioLabel")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {polyolefins.map((p) => (
                <TdsGate
                  key={p.code}
                  resource={tdsForCode(p.code)}
                  productName={p.code}
                  cellClassName="relative block w-full text-left p-4 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <FileText size={13} className="absolute top-3 right-3 text-gray-300 group-hover:text-green-600 transition-colors" />
                  <div className="text-xl font-bold mb-1 group-hover:text-green-700 transition-colors" style={{color: "#1B4332"}}>{p.code}</div>
                  <div className="text-xs text-gray-400 leading-tight">{p.name}</div>
                </TdsGate>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Polymers */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg" style={{backgroundColor: "#2D6A4F"}}>
                E
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t("engineering")}</h2>
                <p className="text-gray-500 text-sm">LG Chem & Basechem</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {engineering.map((p) => (
                <TdsGate
                  key={p.code}
                  resource={tdsForCode(p.code)}
                  productName={p.code}
                  cellClassName="relative block w-full text-left p-6 rounded-2xl text-white group hover:-translate-y-1 transition-all cursor-pointer"
                  cellStyle={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}
                >
                  <FileText size={14} className="absolute top-4 right-4 text-white/40 group-hover:text-white transition-colors" />
                  <div className="text-2xl font-bold mb-2">{p.code}</div>
                  <div className="text-xs text-white/70">{p.name}</div>
                </TdsGate>
              ))}
            </div>
          </div>
        </section>

        {/* Basechem & LG Chem Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Basechem */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}>
                    BC
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{t("basechemSectionTitle")}</h2>
                    <p className="text-gray-500 text-sm">{t("basechemSectionSubtitle")}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {basechem.map((p) => (
                    <TdsGate
                      key={p.code}
                      resource={TDS_REQUEST}
                      productName={`Basechem ${p.code}`}
                      cellClassName="flex items-center justify-between w-full text-left p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer"
                    >
                      <span className="font-bold text-gray-900">{p.code}</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{p.sub}</span>
                    </TdsGate>
                  ))}
                </div>
              </div>

              {/* LG Chem */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold" style={{background: "linear-gradient(135deg, #c8102e, #a00e26)"}}>
                    LG
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{t("lgchemSectionTitle")}</h2>
                    <p className="text-gray-500 text-sm">{t("lgchemSectionSubtitle")}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {lgchem.map((p) => (
                    <TdsGate
                      key={p.code}
                      resource={tdsForCode(p.code)}
                      productName={`LG Chem ${p.code}`}
                      cellClassName="flex items-center justify-between w-full text-left p-4 rounded-xl border border-gray-100 hover:border-red-100 hover:bg-red-50 transition-all group cursor-pointer"
                    >
                      <span className="font-bold text-gray-900">{p.code}</span>
                      <FileText size={14} className="text-gray-300 group-hover:text-red-500 transition-colors" />
                    </TdsGate>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additives */}
        <section className="py-20" style={{background: "linear-gradient(135deg, #f0fdf4, #dcfce7)"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold" style={{backgroundColor: "#40916C"}}>
                K
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t("additives")}</h2>
                <p className="text-gray-500 text-sm">{t("additivesSectionSubtitle")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {(t.raw("additivesItems") as string[]).map((item, i) => {
                // Belirli katkı maddelerine ait grade'ler (indeks 0 = Darbe Dayanımı Arttırıcı)
                const grades: Record<number, string[]> = { 0: ["Vistamaxx 6102", "Vistamaxx 6202"] };
                return (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="font-bold text-gray-900">{item}</div>
                    {grades[i] && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {grades[i].map((g) => (
                          <span key={g} className="text-xs font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                            {g}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#1B4332"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("requestInfo")} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
