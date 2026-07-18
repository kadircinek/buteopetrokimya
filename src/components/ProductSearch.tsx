"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Search, ArrowRight } from "lucide-react";
import { searchCatalog, type CatalogItem } from "@/data/catalog";

export default function ProductSearch() {
  const t = useTranslations("search");
  const locale = useLocale();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);

  const results = searchCatalog(q);
  const showDropdown = focused && q.trim().length > 0;

  const go = (item: CatalogItem) => {
    router.push(`/${locale}${item.path}`);
    setQ("");
    setFocused(false);
  };

  return (
    <section className="relative z-30 -mt-8 pb-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2">
          <div className="relative">
            <div className="flex items-center gap-3 px-4">
              <Search size={22} style={{ color: "#1B4332" }} className="flex-shrink-0" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder={t("placeholder")}
                className="w-full py-4 text-base bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {showDropdown && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[360px] overflow-y-auto">
                {results.length > 0 ? (
                  results.map((item) => (
                    <button
                      key={item.code}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => go(item)}
                      className="w-full flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-green-50 transition-colors text-left group border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono font-bold text-sm px-2.5 py-1 rounded-lg flex-shrink-0" style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}>
                          {item.code}
                        </span>
                        <span className="text-sm text-gray-600 truncate">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[11px] text-gray-400 hidden sm:inline">{item.tag}</span>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-green-600 transition-colors" />
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-5 py-4 text-sm text-gray-400">{t("noResults")}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
