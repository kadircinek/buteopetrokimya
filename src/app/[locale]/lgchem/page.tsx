import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { buildMetadata, type Locale } from "@/lib/seo";
import TdsGate from "@/components/TdsGate";
import { tdsForBrand, tdsForCode } from "@/data/tds";
import {
  getEngineeringPlastics,
  getElastomers,
  getPoliolefinProducts,
  engineeringPlasticsMeta,
  elastomersMeta,
  poliolefinCodes,
  slugForBrand,
} from "@/data/lgchemBrands";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return buildMetadata("lgchem", locale as Locale);
}


/* ─────────────── PAGE ─────────────── */

export default function LGChemPage() {
  const locale = useLocale();
  const t = useTranslations("lgchem");
  const h = useTranslations("home");

  const epTexts = getEngineeringPlastics(locale);
  const elastTexts = getElastomers(locale);
  const polyTexts = getPoliolefinProducts(locale);

  const engineeringPlastics = engineeringPlasticsMeta.map((m, i) => ({ ...m, ...epTexts[i] }));
  const elastomers = elastomersMeta.map((m, i) => ({ ...m, ...elastTexts[i] }));
  const poliolefinProducts = poliolefinCodes.map((code, i) => ({ code, ...polyTexts[i] }));

  const whyItems = [
    { icon: "🌍", title: t("why1Title"), desc: t("why1Desc") },
    { icon: "🔬", title: t("why2Title"), desc: t("why2Desc") },
    { icon: "✅", title: t("why3Title"), desc: t("why3Desc") },
    { icon: "🤝", title: t("why4Title"), desc: t("why4Desc") },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 60%, #2D6A4F 100%)"}}>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute top-32 right-32 w-56 h-56 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
                  <Star size={14} fill="currentColor" />
                  {h("distributorBadge")}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-xl" style={{color: "#c8102e"}}>LG</span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-white">LG Chem</h1>
                    <p className="text-green-300 font-semibold">{t("heroSubtitle")}</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">{t("heroDesc")}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{backgroundColor: "#4CAF50"}}
                  >
                    {t("heroCta")} <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://www.lgchem.com/product/petrochemicals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
                  >
                    {t("heroWebsite")} <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[280px]">
                {[
                  { v: "70+", l: t("stat1Label") },
                  { v: "50+", l: t("stat2Label") },
                  { v: "10",  l: t("stat3Label") },
                  { v: "100+",l: t("stat4Label") },
                ].map((s, i) => (
                  <div key={i} className="text-center p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-3xl font-black mb-1" style={{color: "#4CAF50"}}>{s.v}</div>
                    <div className="text-white/70 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Plastics – Featured */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#f0fdf4"}}>
                  {t("featuredBadge")}
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("featuredTitle")}
                </h2>
                <p className="text-gray-500 mt-1">{t("featuredSubtitle")}</p>
              </div>
              <Link href={`/${locale}/contact`} className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{backgroundColor: "#1B4332"}}>
                {t("requestQuote")} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {engineeringPlastics.filter(p => p.featured).map((product) => (
                <div key={product.brand} className="group rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-6 translate-x-6" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative">
                      <div className="text-2xl font-black tracking-tight mb-1">{product.brand}</div>
                      <div className="text-xs opacity-75 font-medium">{product.base}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{h}</span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("sampleGrades")}</div>
                      <div className="space-y-1">
                        {product.grades.slice(0, 3).map(g => (
                          <div key={g} className="text-sm font-mono font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: product.color}} />
                            {g}
                          </div>
                        ))}
                        {product.grades.length > 3 && (
                          <div className="text-xs text-gray-400">+{product.grades.length - 3} {t("moreGrades")}</div>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("appAreas")}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.map(a => (
                          <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{a}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                      <TdsGate resource={tdsForBrand(product.brand)} productName={product.brand} />
                      <TdsGate resource={tdsForBrand(product.brand)} productName={product.brand} mode="sample" />
                      {slugForBrand(product.brand) && (
                        <Link
                          href={`/${locale}/lgchem/${slugForBrand(product.brand)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:bg-green-50"
                          style={{ borderColor: "#1B4332", color: "#1B4332" }}
                        >
                          {t("detailsBtn")} <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Non-featured products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {engineeringPlastics.filter(p => !p.featured).map((product) => (
                <div key={product.brand} className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-xs font-black flex-shrink-0" style={{backgroundColor: product.color}}>
                      {product.brand.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{product.brand}</div>
                      <div className="text-xs text-gray-400">{product.base}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.highlights.slice(0, 2).map(h => (
                      <span key={h} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{h}</span>
                    ))}
                  </div>
                  {product.grades.length > 0 && (
                    <div className="mb-3">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{t("sampleGrades")}</div>
                      <div className="flex flex-wrap gap-1">
                        {product.grades.map(g => (
                          <span key={g} className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-50 border border-gray-100 text-gray-600">{g}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <TdsGate resource={tdsForBrand(product.brand)} productName={product.brand} />
                    {slugForBrand(product.brand) && (
                      <Link
                        href={`/${locale}/lgchem/${slugForBrand(product.brand)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all hover:bg-green-50"
                        style={{ borderColor: "#1B4332", color: "#1B4332" }}
                      >
                        {t("detailsBtn")} <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elastomers */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#dcfce7"}}>
                {t("elastomersBadge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                KEYFLEX <span style={{color: "#1B4332"}}>Series</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {elastomers.map(product => (
                <div key={product.brand} className="p-8 rounded-3xl text-white relative overflow-hidden" style={{background: "linear-gradient(135deg, #1B4332, #40916C)"}}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8" style={{backgroundColor: "#4CAF50"}} />
                  <div className="relative">
                    <div className="text-2xl font-black mb-1">{product.brand}</div>
                    <div className="text-sm text-white/70 mb-4">{product.base}</div>
                    <p className="text-white/85 text-sm leading-relaxed mb-5">{product.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/15 text-white/90">{h}</span>
                      ))}
                    </div>
                    {product.grades.length > 0 && (
                      <>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">{t("gradesLabel")}</div>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {product.grades.map(g => (
                            <span key={g} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 text-white/80">{g}</span>
                          ))}
                        </div>
                      </>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <TdsGate resource={tdsForBrand(product.brand)} productName={product.brand} variant="dark" />
                      {slugForBrand(product.brand) && (
                        <Link
                          href={`/${locale}/lgchem/${slugForBrand(product.brand)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/15 text-white hover:bg-white/25 transition-all"
                        >
                          {t("detailsBtn")} <ArrowRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABS / PC / ASA / PP Detailed Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#f0fdf4"}}>
                {t("stdPolymersBadge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("stdPolymersTitle")}</h2>
              <p className="text-gray-500">{t("stdPolymersSubtitle")}</p>
            </div>

            <div className="space-y-10">
              {poliolefinProducts.map((product) => (
                <div key={product.code} className="rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                  <div className="p-8 text-white relative overflow-hidden" style={{backgroundColor: engineeringPlasticsMeta.find(m => m.brand === "LUPOY")?.color || "#1B4332"}}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-10 translate-x-10" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-4xl font-black tracking-tight mb-1">{product.code}</div>
                        <div className="text-white/75 text-sm font-medium">{product.fullName}</div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <div className="flex flex-wrap gap-2">
                          {product.highlights.map(h => (
                            <span key={h} className="text-xs px-3 py-1 rounded-full font-medium bg-white/15 text-white/90">{h}</span>
                          ))}
                        </div>
                        <TdsGate resource={tdsForCode(product.code)} productName={product.code} variant="dark" />
                      </div>
                    </div>
                    <p className="relative text-white/80 text-sm leading-relaxed mt-4 max-w-3xl">{product.desc}</p>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("availableGrades")}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">{product.grades.length} {t("gradeUnit")}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {product.grades.map((g) => (
                        <div key={g.grade} className="group p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer">
                          <div className="font-mono font-black text-base mb-1 group-hover:text-green-800 transition-colors" style={{color: "#1B4332"}}>
                            {g.grade}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed mb-2">{g.desc}</div>
                          <div className="flex flex-wrap gap-1">
                            {g.tags.map(tag => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">{t("appAreasColon")}</span>
                      {product.applications.map(a => (
                        <span key={a} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why LG Chem */}
        <section className="py-20" style={{background: "linear-gradient(135deg, #f0fdf4, #dcfce7)"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("whyTitle")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map((item, i) => (
                <div key={i} className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#0d2b1a"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
              <span className="font-black text-2xl" style={{color: "#c8102e"}}>LG</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{backgroundColor: "#4CAF50"}}
              >
                {t("ctaCta")} <ArrowRight size={18} />
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
