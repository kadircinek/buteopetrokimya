import { useTranslations, useLocale } from "next-intl";
import { FAQ, type Locale } from "@/data/faq";

/**
 * SSS bölümü + FAQPage yapısal verisi.
 * <details>/<summary> kullanır: JS gerektirmez, içerik HTML'de olduğu için
 * Google tarafından tam olarak taranır.
 */
export default function FaqSection() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };

  return (
    <section className="py-20 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{ color: "#2D6A4F", backgroundColor: "#f0fdf4" }}>
            {t("badge")}
          </span>
          <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
          <p className="text-gray-500 mt-2">{t("subtitle")}</p>
        </div>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-100 hover:border-green-200 transition-all overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 font-bold text-gray-900 hover:bg-green-50 transition-colors">
                <span>{item.q[locale]}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-lg leading-none transition-transform group-open:rotate-45"
                  style={{ backgroundColor: "#1B4332" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a[locale]}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
