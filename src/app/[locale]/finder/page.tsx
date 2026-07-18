"use client";

import { useState, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wand2, CheckCircle2, Loader2, ArrowRight, FlaskConical } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/leadConfig";

const METHODS = ["injection", "extrusion", "blow", "thermoform", "film", "other"] as const;
const SECTORS = ["auto", "ee", "white", "pack", "medical", "construction", "other"] as const;
const PROPS = ["impact", "heat", "uv", "food", "flame", "transparent", "chemical", "glassfiber", "lowcost"] as const;

// Özellik → önerilen ürün AİLESİ (kesin grade değil; yalnızca yönlendirme).
const PROP_FAMILIES: Record<string, string[]> = {
  impact: ["ABS", "PC", "PC/ABS"],
  heat: ["PBT", "PA6/PA66", "PPS (LUSEP)", "PC"],
  uv: ["ASA", "PMMA"],
  food: ["PP", "GPPS", "PC (gıda grade)"],
  flame: ["PC (FR)", "PBT (FR)", "ABS (FR)", "Basechem FR Compound"],
  transparent: ["PC (LUPOY)", "GPPS", "PMMA", "SAN"],
  chemical: ["PP", "HDPE", "POM (LUCEL)", "PBT"],
  glassfiber: ["PA-GF", "PBT-GF (LUPOX)", "PP-GF"],
  lowcost: ["PP", "GPPS", "ABS"],
};

function suggest(props: string[]): string[] {
  const tally: Record<string, number> = {};
  props.forEach((p) => (PROP_FAMILIES[p] || []).forEach((f) => (tally[f] = (tally[f] || 0) + 1)));
  return Object.entries(tally)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name]) => name);
}

export default function FinderPage() {
  const t = useTranslations("finder");
  const tf = useTranslations("tds"); // form alan etiketlerini yeniden kullan

  const [method, setMethod] = useState<string>("");
  const [sector, setSector] = useState<string>("");
  const [props, setProps] = useState<string[]>([]);
  const [prevMaterial, setPrevMaterial] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const toggleProp = (p: string) =>
    setProps((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const suggestions = suggest(props);

  const ringStyle = { "--tw-ring-color": "#1B4332" } as CSSProperties;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (WEB3FORMS_ACCESS_KEY) {
        await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "Hammadde Bulucu Talebi",
            from_name: "Buteo Petrokimya — Hammadde Bulucu",
            production_method: method ? t(`m_${method}`) : "-",
            sector: sector ? t(`sec_${sector}`) : "-",
            properties: props.map((p) => t(`p_${p}`)).join(", ") || "-",
            previous_material: prevMaterial || "-",
            suggested_families: suggestions.join(", ") || "-",
            name: form.name,
            email: form.email,
            phone: form.phone,
          }),
        });
      }
    } catch {
      /* anahtar sonra eklenecek */
    } finally {
      setStatus("done");
    }
  };

  const OptionBtn = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
        active ? "text-white shadow-md -translate-y-0.5" : "border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50"
      }`}
      style={active ? { backgroundColor: "#1B4332", borderColor: "#1B4332" } : undefined}
    >
      {label}
    </button>
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 60%, #2D6A4F 100%)" }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Wand2 size={15} /> {t("badge")}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("title")} <span style={{ color: "#4CAF50" }}>{t("titleHighlight")}</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">{t("desc")}</p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Step 1: method */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">1 · {t("step1")}</h2>
              <div className="flex flex-wrap gap-2.5">
                {METHODS.map((m) => (
                  <OptionBtn key={m} active={method === m} onClick={() => setMethod(m)} label={t(`m_${m}`)} />
                ))}
              </div>
            </div>

            {/* Step 2: sector */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">2 · {t("step2")}</h2>
              <div className="flex flex-wrap gap-2.5">
                {SECTORS.map((s) => (
                  <OptionBtn key={s} active={sector === s} onClick={() => setSector(s)} label={t(`sec_${s}`)} />
                ))}
              </div>
            </div>

            {/* Step 3: properties */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">3 · {t("step3")}</h2>
              <div className="flex flex-wrap gap-2.5">
                {PROPS.map((p) => (
                  <OptionBtn key={p} active={props.includes(p)} onClick={() => toggleProp(p)} label={t(`p_${p}`)} />
                ))}
              </div>
              {!props.length && <p className="text-xs text-gray-400 mt-3">{t("propHint")}</p>}
            </div>

            {/* Step 4: previously used material */}
            <div className="mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">4 · {t("step4")}</h2>
              <input
                type="text"
                value={prevMaterial}
                onChange={(e) => setPrevMaterial(e.target.value)}
                placeholder={t("prevPlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                style={ringStyle}
              />
              <p className="text-xs text-gray-400 mt-2">{t("prevHint")}</p>
            </div>

            <button
              onClick={() => setShowResult(true)}
              disabled={!props.length}
              className="w-full flex items-center justify-center gap-2 text-white font-bold px-6 py-4 rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-50"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <Wand2 size={18} /> {t("showBtn")}
            </button>

            {/* Results + lead */}
            {showResult && props.length > 0 && (
              <div className="mt-10 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <FlaskConical size={18} style={{ color: "#1B4332" }} />
                    <h3 className="font-bold text-gray-900">{t("resultTitle")}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((f) => (
                      <span key={f} className="text-sm font-semibold px-3.5 py-1.5 rounded-full bg-white border border-green-100" style={{ color: "#1B4332" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 leading-relaxed">{t("resultNote")}</p>
                </div>

                <div className="p-6">
                  {status === "done" ? (
                    <div className="text-center py-6">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#f0fdf4" }}>
                        <CheckCircle2 size={30} style={{ color: "#1B4332" }} />
                      </div>
                      <p className="text-gray-700 font-medium">{t("success")}</p>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="space-y-4">
                      <h4 className="font-bold text-gray-900">{t("leadTitle")}</h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder={tf("fName")}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                          style={ringStyle}
                        />
                        <input
                          type="email"
                          required
                          placeholder={`${tf("fEmail")} *`}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                          style={ringStyle}
                        />
                        <input
                          type="tel"
                          required
                          placeholder={`${tf("fPhone")} *`}
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                          style={ringStyle}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-60"
                        style={{ backgroundColor: "#1B4332" }}
                      >
                        {status === "sending" ? (
                          <><Loader2 size={16} className="animate-spin" /> {tf("sending")}</>
                        ) : (
                          <>{t("leadSubmit")} <ArrowRight size={16} /></>
                        )}
                      </button>
                      <p className="text-[11px] text-gray-400 text-center">{tf("privacy")}</p>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
