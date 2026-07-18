"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Phone, X, Headset } from "lucide-react";

const WHATSAPP_NUMBER = "905421894340"; // +90 542 189 43 40
const PHONE = "+905421894340";

export default function FloatingContact() {
  const t = useTranslations("support");
  const [open, setOpen] = useState(false);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("prefill"))}`;

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {open && (
        <div className="flex flex-col gap-2.5 mb-1 animate-[fadeIn_.15s_ease]">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white shadow-xl rounded-2xl pl-4 pr-5 py-3 border border-gray-100 hover:-translate-y-0.5 transition-all group"
          >
            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle size={20} />
            </span>
            <span className="text-sm font-bold text-gray-900">{t("whatsapp")}</span>
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-3 bg-white shadow-xl rounded-2xl pl-4 pr-5 py-3 border border-gray-100 hover:-translate-y-0.5 transition-all"
          >
            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>
              <Phone size={18} />
            </span>
            <span className="text-sm font-bold text-gray-900">{t("connectSales")}</span>
          </a>
        </div>
      )}

      {/* Toggle FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("title")}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:scale-105"
        style={{ backgroundColor: open ? "#1B4332" : "#25D366" }}
      >
        {open ? <X size={26} /> : <Headset size={26} />}
      </button>
    </div>
  );
}
