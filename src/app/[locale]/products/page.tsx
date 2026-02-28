import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

const polyolefins = [
  { code: "PPH (Moblen)", name: "Polipropilen Homopolimer" },
  { code: "PPC", name: "Polipropilen Kopolimer" },
  { code: "PPRC", name: "Polipropilen Random Kopolimer" },
  { code: "HDPE", name: "Yüksek Yoğunluklu Polietilen" },
  { code: "LDPE", name: "Alçak Yoğunluklu Polietilen" },
  { code: "GPPS", name: "Kristal Polistiren" },
  { code: "HIPS", name: "Antişok Polistiren" },
  { code: "TPE", name: "Termoplastik Elastomer" },
  { code: "TPU", name: "Termoplastik Poliüretan" },
  { code: "EVA", name: "Etilen Vinil Asetat" },
];

const engineering = [
  { code: "ABS", name: "Akrilonitril Butadyen Sitiren" },
  { code: "PC", name: "Polikarbonat" },
  { code: "PMMA", name: "Polimetilmetakrilat" },
  { code: "PBT", name: "Polibutilen Terafitalat" },
  { code: "SAN", name: "Stiren Akrilonitril" },
  { code: "PC/ABS", name: "PC+ABS Blend" },
  { code: "PPO/PPE", name: "Polyfenil Eter (Norly)" },
  { code: "PA6/PA66", name: "Poliamid" },
];

const basechem = [
  { code: "ABS Compound", sub: "Yanmaz / Cam Elyaf" },
  { code: "PC Compound", sub: "Yanmaz / Cam Elyaf" },
  { code: "PBT", sub: "Yanmaz / Cam Elyaf" },
  { code: "PC/ABS", sub: "Yanmaz / Cam Elyaf" },
  { code: "PPO/PPE (Norly)", sub: "Yanmaz / Cam Elyaf" },
  { code: "PA6/PA66", sub: "Yanmaz / Cam Elyaf" },
];

const lgchem = [
  { code: "TPE / Keyflex", sub: "" },
  { code: "PC Compound", sub: "" },
  { code: "PBT", sub: "" },
  { code: "PC/ABS", sub: "" },
  { code: "PPO/PPE (Norly)", sub: "" },
  { code: "PA6 / PA66", sub: "" },
];

const additives = [
  { code: "Darbe Dayanımı Arttırıcı", sub: "Impact Modifier" },
  { code: "UV Masterbatch", sub: "UV Protection" },
  { code: "Bağlayıcı", sub: "Coupling Agent" },
  { code: "Çöküntü Giderici", sub: "Sink Mark Eliminator" },
];

export default function ProductsPage() {
  const t = useTranslations("products");
  const locale = useLocale();

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
                <p className="text-gray-500 text-sm">LG Chem & Genel Portföy</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {polyolefins.map((p) => (
                <div key={p.code} className="p-4 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer">
                  <div className="text-xl font-bold mb-1 group-hover:text-green-700 transition-colors" style={{color: "#1B4332"}}>{p.code}</div>
                  <div className="text-xs text-gray-400 leading-tight">{p.name}</div>
                </div>
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
                <div key={p.code} className="p-6 rounded-2xl text-white group hover:-translate-y-1 transition-all cursor-pointer" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}>
                  <div className="text-2xl font-bold mb-2">{p.code}</div>
                  <div className="text-xs text-white/70">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Basechem Products */}
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
                    <h2 className="text-xl font-bold text-gray-900">Basechem Ürünleri</h2>
                    <p className="text-gray-500 text-sm">Yüksek Performanslı Mühendislik Plastikleri</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {basechem.map((p) => (
                    <div key={p.code} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                      <span className="font-bold text-gray-900">{p.code}</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{p.sub}</span>
                    </div>
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
                    <h2 className="text-xl font-bold text-gray-900">LG Chem Ürünleri</h2>
                    <p className="text-gray-500 text-sm">Global Kimya Lideri</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {lgchem.map((p) => (
                    <div key={p.code} className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-red-100 hover:bg-red-50 transition-all">
                      <span className="font-bold text-gray-900">{p.code}</span>
                    </div>
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
                <p className="text-gray-500 text-sm">Özel Katkı Maddeleri</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additives.map((p) => (
                <div key={p.code} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                  <div className="font-bold text-gray-900 mb-1">{p.code}</div>
                  <div className="text-xs text-gray-400">{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#1B4332"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ürün Hakkında Bilgi Almak İster misiniz?</h2>
            <p className="text-white/70 mb-8">Teknik destek ve ürün bilgisi için bizimle iletişime geçin.</p>
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
