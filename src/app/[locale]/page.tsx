import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSearch from "@/components/ProductSearch";
import { buildMetadata, type Locale } from "@/lib/seo";
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
  Warehouse,
  MapPin,
  ShieldCheck,
} from "lucide-react";

function HeroSection() {
  const t = useTranslations("hero");
  const h = useTranslations("home");
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
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: "#4CAF50"}} />
              {t("badge")}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <span className="text-base leading-none">🇹🇷</span>
              <span className="text-base leading-none">🇷🇴</span>
              <span className="font-semibold">{h("heroFlagsLabel")}</span>
            </div>
          </div>

          {/* Dual distributor line */}
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5" style={{color: "#86efac"}}>
            <span className="h-px w-8" style={{backgroundColor: "#4CAF50"}} />
            {h("dualDistributorBadge")}
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
              {t("readMore")} <ArrowRight size={16} />
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
  const additives = t.raw("additivesItems") as string[];

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
  const h = useTranslations("home");
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
            <span className="text-sm font-medium text-gray-500 group-hover:text-green-700">{h("seeAll")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LGChemBanner() {
  const locale = useLocale();
  const t = useTranslations("home");
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
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{color: "#4CAF50"}}>{t("distributorBadge")}</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{t("lgchemAllTitle")}</h2>
              <p className="text-white/70 text-sm mt-1">{t("lgchemAllSub")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/lgchem`}
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("lgchemAllCta")} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
            >
              {t("getQuote")}
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
  const t = useTranslations("home");
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
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{color: "#86efac"}}>{t("distributorBadge")}</div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{t("basechemTitle")}</h2>
              <p className="text-white/70 text-sm mt-1">{t("basechemSub")}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/basechem`}
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-full text-white transition-all hover:-translate-y-1"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("basechemCta")} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
            >
              {t("getQuote")}
            </Link>
          </div>
        </div>
        {/* Product codes strip */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {["ABS Compound", "PC Compound", "PBT", "PC/ABS", "PPO/PPE (Noryl)", "PA6 / PA66", "FR (Flame Retardant)", "GF (Glass Fiber)", "Custom Color"].map(p => (
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
  const h = useTranslations("home");

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
                  <div className="text-sm text-gray-500">{t("lgSubtitle")}</div>
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
                  <div className="text-sm text-gray-500">{t("baseSubtitle")}</div>
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

        {/* OEM references strip */}
        <div className="mt-12 py-10 border-t border-gray-100">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">{h("oemRef")}</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {["Samsung", "LG", "Hyundai", "General Motors", "Tesla"].map(brand => (
              <span
                key={brand}
                className="text-base sm:text-lg font-bold text-gray-700 px-6 py-3 rounded-2xl border border-gray-200 bg-gray-50 hover:border-green-300 hover:bg-green-50 hover:text-green-800 transition-all"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications / standards strip */}
        <div className="mt-4 pt-10 border-t border-gray-100">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-gray-900">{h("certTitle")}</p>
            <p className="text-xs text-gray-400 mt-1">{h("certSubtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: h("cert1Label"), desc: h("cert1Desc") },
              { label: h("cert2Label"), desc: h("cert2Desc") },
              { label: h("cert3Label"), desc: h("cert3Desc") },
              { label: h("cert4Label"), desc: h("cert4Desc") },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: "#1B4332"}}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{c.label}</div>
                  <div className="text-xs text-gray-400 leading-tight">{c.desc}</div>
                </div>
              </div>
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

function GlobalPresence() {
  const t = useTranslations("presence");
  const locale = useLocale();

  const stats = [
    { value: "2", label: t("statCountries") },
    { value: "3", label: t("statWarehouses") },
    { value: "2", label: t("statBrands") },
    { value: "70+", label: t("statGlobalReach") },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#f0fdf4"}}>
            {t("badge")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")} <span style={{color: "#1B4332"}}>{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t("desc")}</p>
        </div>

        {/* Map panel */}
        <div className="relative rounded-3xl overflow-hidden mb-10 border border-white/10" style={{background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 60%, #2D6A4F 100%)"}}>
          {/* dotted texture */}
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "22px 22px"}} />
          {/* grid lines */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />

          <div className="relative h-[340px] sm:h-[420px]">
            {/* abstract landmass */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" fill="#ffffff">
              <path d="M120 150 Q180 90 280 120 T460 110 Q560 100 620 160 T700 230 Q660 300 560 310 T380 330 Q260 340 200 290 T120 220 Z" />
            </svg>

            {/* dashed connector between the two pins */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 420" preserveAspectRatio="none">
              <path d="M300 165 Q420 110 540 235" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeDasharray="7 8" opacity="0.8" />
            </svg>

            {/* Pin: Bucharest (upper-left) */}
            <div className="absolute" style={{left: "35%", top: "36%"}}>
              <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                <span className="absolute w-10 h-10 rounded-full animate-ping" style={{backgroundColor: "#4CAF50", opacity: 0.25}} />
                <span className="w-5 h-5 rounded-full border-2 border-white shadow-lg z-10" style={{backgroundColor: "#4CAF50"}} />
                <div className="mt-3 text-center whitespace-nowrap z-10">
                  <div className="text-white font-bold text-sm sm:text-base">🇷🇴 {t("mapCity2")}</div>
                  <div className="text-green-300 text-xs">{t("mapCity2Sub")}</div>
                </div>
              </div>
            </div>

            {/* Pin: Istanbul (right) */}
            <div className="absolute" style={{left: "67%", top: "56%"}}>
              <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2">
                <span className="absolute w-12 h-12 rounded-full animate-ping" style={{backgroundColor: "#4CAF50", opacity: 0.3}} />
                <span className="w-6 h-6 rounded-full border-2 border-white shadow-lg z-10 flex items-center justify-center" style={{backgroundColor: "#4CAF50"}}>
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
                <div className="mt-3 text-center whitespace-nowrap z-10">
                  <div className="text-white font-bold text-base sm:text-lg">🇹🇷 {t("mapCity1")}</div>
                  <div className="text-green-300 text-xs">{t("mapCity1Sub")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-6 px-3 border-white/10 border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(odd)]:border-r-0 md:[&:nth-child(odd)]:border-r">
                <div className="text-3xl font-black mb-1" style={{color: "#4CAF50"}}>{s.value}</div>
                <div className="text-white/70 text-xs leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Office cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* HQ Turkey */}
          <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
            {/* Photo header */}
            <div className="relative h-52 w-full">
              <Image
                src="/offices/turkey-office.jpg"
                alt={`${t("hqCompany")} — ${t("hqCity")}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{background: "linear-gradient(180deg, rgba(13,43,26,0.1) 0%, rgba(13,43,26,0.75) 100%)"}} />
              <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
                <span className="text-2xl">🇹🇷</span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-green-300">{t("hqLabel")}</div>
                  <h3 className="text-lg font-bold text-white leading-tight">{t("hqCity")}</h3>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="p-7">
              <div className="text-sm font-semibold text-gray-800 mb-2">{t("hqCompany")}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t("hqDesc")}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                  <Warehouse size={13} /> {t("hqWarehouses")}
                </span>
              </div>
            </div>
          </div>

          {/* Europe Romania */}
          <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
            {/* Photo header */}
            <div className="relative h-52 w-full">
              <Image
                src="/offices/romania-office.jpg"
                alt={`${t("europeCompany")} — ${t("europeCity")}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{background: "linear-gradient(180deg, rgba(13,43,26,0.1) 0%, rgba(13,43,26,0.75) 100%)"}} />
              <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2">
                <span className="text-2xl">🇷🇴</span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-green-300">{t("europeLabel")}</div>
                  <h3 className="text-lg font-bold text-white leading-tight">{t("europeCity")}</h3>
                </div>
              </div>
            </div>
            {/* Body */}
            <div className="p-7">
              <div className="text-sm font-semibold text-gray-800 mb-2">{t("europeCompany")}</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t("europeDesc")}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                  <MapPin size={13} /> {t("europeRegion")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata("home", locale as Locale);
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductSearch />
        <AboutSection />
        <GlobalPresence />
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
