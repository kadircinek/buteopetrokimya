"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, FileText, X, CheckCircle2, Loader2 } from "lucide-react";
import type { TdsResource } from "@/data/tds";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/leadConfig";

type Props = {
  resource: TdsResource;
  productName: string;
  /** "tds" = TDS erişimi (varsayılan), "sample" = numune talebi. */
  mode?: "tds" | "sample";
  /** Pill görünümü için (children yoksa). */
  variant?: "light" | "dark";
  /** Tüm hücreyi tetikleyici yapmak için: özel sınıf + içerik. */
  cellClassName?: string;
  cellStyle?: CSSProperties;
  children?: ReactNode;
};

type Status = "idle" | "sending" | "done" | "error";

export default function TdsGate({
  resource,
  productName,
  mode = "tds",
  variant = "light",
  cellClassName,
  cellStyle,
  children,
}: Props) {
  const t = useTranslations("tds");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });

  const isSample = mode === "sample";
  // Numune modunda TDS açılmaz; yalnızca talep toplanır.
  const isOfficial = !isSample && resource.kind === "official";

  const close = () => {
    setOpen(false);
    // formu bir sonraki açılış için sıfırla
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", company: "" });
    }, 200);
  };

  const openTds = () => {
    if (isOfficial) window.open(resource.url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (WEB3FORMS_ACCESS_KEY) {
        await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `${isSample ? "Numune Talebi" : "TDS Talebi"}: ${productName}`,
            from_name: `Buteo Petrokimya — ${isSample ? "Numune" : "TDS"} Talep Formu`,
            product: productName,
            request_type: isSample ? "sample" : isOfficial ? "tds-official" : "tds-request",
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
          }),
        });
      }
      setStatus("done");
      // Resmi TDS ise kısa gecikmeyle otomatik aç
      if (isOfficial) setTimeout(openTds, 800);
    } catch {
      setStatus("error");
    }
  };

  const pillBase =
    "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all";
  let pillCls: string;
  let pillStyle: CSSProperties | undefined;
  if (isSample) {
    // Numune = outline stil (TDS'ten görsel olarak ayrışsın)
    pillCls =
      variant === "dark"
        ? `${pillBase} bg-white/10 border border-white/25 text-white hover:bg-white/20`
        : `${pillBase} border hover:bg-green-50`;
    pillStyle = variant === "dark" ? undefined : { borderColor: "#1B4332", color: "#1B4332" };
  } else {
    pillCls =
      variant === "dark"
        ? `${pillBase} bg-white/15 text-white hover:bg-white/25`
        : `${pillBase} text-white hover:-translate-y-0.5`;
    pillStyle = variant === "dark" ? undefined : { backgroundColor: "#1B4332" };
  }
  const pillLabel = isSample ? t("sampleRequest") : isOfficial ? t("viewTds") : t("request");

  return (
    <>
      {children ? (
        <button type="button" onClick={() => setOpen(true)} className={cellClassName} style={cellStyle}>
          {children}
        </button>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className={pillCls} style={pillStyle}>
          <FileText size={13} /> {pillLabel}
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(13,43,26,0.55)" }}
          onClick={close}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 text-white" style={{ background: "linear-gradient(135deg, #0d2b1a, #1B4332, #2D6A4F)" }}>
              <button onClick={close} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label={t("close")}>
                <X size={20} />
              </button>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#86efac" }}>
                <FileText size={14} /> {isSample ? t("sampleBadge") : t("badge")}
              </div>
              <h3 className="text-xl font-bold leading-tight">{isSample ? t("sampleTitle") : t("formTitle")}</h3>
              <div className="mt-2 text-sm text-white/70">
                <span className="font-semibold text-white">{t("product")}:</span> {productName}
              </div>
            </div>

            {status === "done" ? (
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#f0fdf4" }}>
                  <CheckCircle2 size={30} style={{ color: "#1B4332" }} />
                </div>
                <p className="text-gray-700 font-medium mb-5">
                  {isSample ? t("sampleSuccess") : isOfficial ? t("successOfficial") : t("successRequest")}
                </p>
                {isOfficial ? (
                  <button
                    onClick={openTds}
                    className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    {t("openTds")} <ExternalLink size={16} />
                  </button>
                ) : (
                  <button onClick={close} className="text-sm font-semibold text-gray-500 hover:text-gray-800">
                    {t("close")}
                  </button>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <p className="text-sm text-gray-500 leading-relaxed">{isSample ? t("sampleDesc") : t("formDesc")}</p>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t("fName")}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("namePh")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                    style={{ "--tw-ring-color": "#1B4332" } as CSSProperties}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t("fEmail")} *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t("emailPh")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                      style={{ "--tw-ring-color": "#1B4332" } as CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t("fPhone")} *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder={t("phonePh")}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                      style={{ "--tw-ring-color": "#1B4332" } as CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">{t("fCompany")}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder={t("companyPh")}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-sm"
                    style={{ "--tw-ring-color": "#1B4332" } as CSSProperties}
                  />
                </div>

                {status === "error" && <p className="text-sm text-red-600">{t("errorMsg")}</p>}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> {t("sending")}
                    </>
                  ) : (
                    <>
                      <FileText size={16} /> {t("submit")}
                    </>
                  )}
                </button>

                <p className="text-[11px] text-gray-400 text-center leading-relaxed">{t("privacy")}</p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
