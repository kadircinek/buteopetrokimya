import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  FlaskConical,
  HeadphonesIcon,
  Globe2,
  Layers,
  Zap,
  Shield,
} from "lucide-react";

function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 40%, #2D6A4F 100%)" }} />
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-2 border-white" />
        <div className="absolute top-40 right-40 w-72 h-72 rounded-full border border-white" />
        <div className="absolute top-60 right-60 w-48 h-48 rounded-full border border-white" />
      </div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

      {/* Diagonal accent */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-white" style={{clipPath: "polygon(100% 0, 100% 100%, 0 100%)"}} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: "#4CAF50"}} />
            {t("badge")}
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t("title")}
            <br />
            <span style={{color: "#4CAF50"}}>{t("titleHighlight")}</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/products`}
              className="flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("cta")} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition-all"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16">
            {[
              { value: t("stat1Value"), label: t("stat1Label") },
              { value: t("stat2Value"), label: t("stat2Label") },
              { value: t("stat3Value"), label: t("stat3Label") },
              { value: t("stat4Value"), label: t("stat4Label") },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold mb-1" style={{color: "#4CAF50"}}>{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();

  const features = [
    { icon: <CheckCircle2 size={20} />, title: t("feature1Title"), desc: t("feature1Desc") },
    { icon: <Truck size={20} />, title: t("feature3Title"), desc: t("feature3Desc") },
    { icon: <Zap size={20} />, title: t("feature4Title"), desc: t("feature4Desc") },
    { icon: <Shield size={20} />, title: t("feature2Title"), desc: t("feature2Desc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#f0fdf4"}}>
              {t("badge")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t("title")}
              <br />
              <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t("description1")}</p>
            <p className="text-gray-600 leading-relaxed mb-10">{t("description2")}</p>

            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 font-semibold transition-colors"
              style={{color: "#2D6A4F"}}
            >
              Daha Fazla <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
                style={{background: i % 2 === 0 ? "#f0fdf4" : "white"}}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white" style={{backgroundColor: "#1B4332"}}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    { icon: <FlaskConical size={28} />, title: t("s1Title"), desc: t("s1Desc") },
    { icon: <Layers size={28} />, title: t("s2Title"), desc: t("s2Desc") },
    { icon: <HeadphonesIcon size={28} />, title: t("s3Title"), desc: t("s3Desc") },
  ];

  return (
    <section className="py-24" style={{background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#dcfce7"}}>
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            {t("title")} <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl text-white overflow-hidden group hover:-translate-y-2 transition-all"
              style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform" style={{backgroundColor: "#4CAF50"}} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  const t = useTranslations("products");
  const locale = useLocale();

  const polyolefins = ["PPH (Moblen)", "PPC", "PPRC", "HDPE", "LDPE", "GPPS", "HIPS", "TPE", "TPU", "EVA"];
  const engineering = ["ABS", "PC", "PMMA", "PBT", "SAN", "PC/ABS", "PPO/PPE", "PA6/PA66"];
  const additives = ["Darbe Dayanımı Arttırıcı", "UV Masterbatch", "Bağlayıcı", "Çöküntü Giderici"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#f0fdf4"}}>
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")} <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Group 1 */}
          <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white text-lg font-bold" style={{backgroundColor: "#1B4332"}}>
              P
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t("group1")}</h3>
            <div className="flex flex-wrap gap-2">
              {polyolefins.map((p) => (
                <span key={p} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div className="rounded-3xl p-8 text-white hover:shadow-2xl transition-all" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}>
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5 text-white text-lg font-bold">
              E
            </div>
            <h3 className="text-lg font-bold mb-4">{t("group2")}</h3>
            <div className="flex flex-wrap gap-2">
              {engineering.map((p) => (
                <span key={p} className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/10 text-white/90">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div className="border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white text-lg font-bold" style={{backgroundColor: "#40916C"}}>
              K
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t("group3")}</h3>
            <div className="flex flex-wrap gap-2">
              {additives.map((p) => (
                <span key={p} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{backgroundColor: "#1B4332"}}
          >
            {t("viewAll")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectorsPreview() {
  const t = useTranslations("sectors");
  const locale = useLocale();

  const sectors = [
    { key: "s1", icon: "🚗" },
    { key: "s2", icon: "⚡" },
    { key: "s3", icon: "🏠" },
    { key: "s4", icon: "🏗️" },
    { key: "s5", icon: "🏥" },
    { key: "s6", icon: "🪑" },
    { key: "s7", icon: "✈️" },
    { key: "s8", icon: "🌱" },
    { key: "s9", icon: "⚓" },
    { key: "s10", icon: "🎮" },
    { key: "s11", icon: "💡" },
  ] as const;

  return (
    <section className="py-24" style={{background: "#f8fafc"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#dcfce7"}}>
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")} <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-500">{t("description")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map(({ key, icon }) => (
            <Link
              key={key}
              href={`/${locale}/sectors`}
              className="group p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm group-hover:text-green-700 transition-colors">
                {t(key as "s1")}
              </h3>
            </Link>
          ))}
          {/* +1 card */}
          <Link
            href={`/${locale}/sectors`}
            className="p-5 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center hover:border-green-400 transition-all group"
          >
            <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">+</span>
            <span className="text-sm font-medium text-gray-500 group-hover:text-green-700">Tümünü Gör</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LGChemBanner() {
  const locale = useLocale();
  return (
    <section className="py-16 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a, #1B4332)"}}>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="font-black text-3xl" style={{color: "#c8102e"}}>LG</span>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{color: "#4CAF50"}}>Türkiye Yetkili Distribütörü</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">LG Chem Tüm Ürünleri</h2>
              <p className="text-white/70 text-sm mt-1">
                LUPOY · LUPOX · LUMID · LUMILOY · LUCEL · LUSEP · KEYFLEX ve daha fazlası
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/lgchem`}
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              Tüm LG Chem Ürünleri <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
            >
              Teklif Al
            </Link>
          </div>
        </div>
        {/* Product codes strip */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {["LUPOY (PC)", "LUPOX (PBT)", "LUMID (PA6/PA66)", "LUMILOY (mPPO)", "LUCEL (POM)", "LUSEP (PPS)", "KEYFLEX BT (TPE)", "LUCON", "LUMIPLAS", "ABS", "ASA", "PC", "PP"].map(p => (
            <span key={p} className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/10 text-white/80 border border-white/10">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BasechemBanner() {
  const locale = useLocale();
  return (
    <section className="py-16 relative overflow-hidden" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F, #40916C)"}}>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
              <span className="font-black text-xs leading-tight text-center" style={{color: "#1B4332"}}>BASE<br/>CHEM</span>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{color: "#86efac"}}>Türkiye Yetkili Distribütörü</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Basechem Compound Ürünleri</h2>
              <p className="text-white/70 text-sm mt-1">
                Samsung · LG · Hyundai OEM Tedarikçisi — 30+ Yıl Deneyim
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/basechem`}
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              Tüm Basechem Ürünleri <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
            >
              Teklif Al
            </Link>
          </div>
        </div>
        {/* Product codes strip */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {["ABS Compound", "PC Compound", "PBT", "PC/ABS", "PPO/PPE (Norly)", "PA6 / PA66", "Alev Geciktirici (FR)", "Cam Elyaf Takviyeli (GF)", "Özel Renk"].map(p => (
            <span key={p} className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/10 text-white/80 border border-white/10">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const t = useTranslations("partners");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#f0fdf4"}}>
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")} <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LG Chem */}
          <div className="relative p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 -translate-y-12 translate-x-12" style={{backgroundColor: "#c8102e"}} />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg" style={{background: "linear-gradient(135deg, #c8102e, #a00e26)"}}>
                  LG
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">LG Chem</div>
                  <div className="text-sm text-gray-500">Global Chemical Leader</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t("lgDesc")}</p>
              <div className="flex flex-wrap gap-2">
                {["TPE/Keyflex", "PC Compound", "PBT", "PC/ABS", "PPO/PPE", "PA6/PA66"].map(p => (
                  <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-red-50 text-red-700 font-medium">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Basechem */}
          <div className="relative p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 -translate-y-12 translate-x-12" style={{backgroundColor: "#1B4332"}} />
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}>
                  BC
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Basechem</div>
                  <div className="text-sm text-gray-500">Engineering Plastics Expert</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t("baseDesc")}</p>
              <div className="flex flex-wrap gap-2">
                {["ABS Compound", "PC Compound", "PBT", "PC/ABS", "PPO/PPE", "PA6/PA66"].map(p => (
                  <span key={p} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos strip */}
        <div className="mt-12 py-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-6">OEM Referanslar</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Samsung", "LG", "Hyundai", "General Motors", "Tesla"].map(brand => (
              <span key={brand} className="text-lg font-bold text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const t = useTranslations("contact");
  const locale = useLocale();

  return (
    <section className="py-24 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 50%, #2D6A4F 100%)"}}>
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <Globe2 size={48} className="mx-auto mb-6 opacity-80" color="#4CAF50" />
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {t("title")} <span style={{color: "#4CAF50"}}>{t("titleHighlight")}</span>
        </h2>
        <p className="text-white/80 text-lg mb-10">{t("description")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/contact`}
            className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-2xl"
            style={{backgroundColor: "#4CAF50"}}
          >
            {t("formSend")} <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+905421894340"
            className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
          >
            +90 542 189 43 40
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LGChemBanner />
        <BasechemBanner />
        <ServicesSection />
        <ProductsPreview />
        <SectorsPreview />
        <PartnersSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
