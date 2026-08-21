import { useTranslations, useLocale } from "next-intl";
import { Calendar, ArrowRight } from "lucide-react";
import { NEWS, type Locale } from "@/data/news";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export default function NewsSection() {
  const t = useTranslations("news");
  const locale = useLocale() as Locale;

  const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  // Fuar haberleri için schema.org Event — Google etkinlik sonuçlarında çıkabilir
  const events = items.filter((i) => i.event);
  const eventJsonLd = events.length
    ? {
        "@context": "https://schema.org",
        "@graph": events.map((i) => ({
          "@type": "ExhibitionEvent",
          name: i.title[locale],
          description: i.desc[locale],
          startDate: i.event!.startDate,
          endDate: i.event!.endDate,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: i.event!.venue,
            address: {
              "@type": "PostalAddress",
              addressLocality: i.event!.city,
              addressCountry: i.event!.country,
            },
          },
          organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          performer: { "@type": "Organization", name: SITE_NAME },
        })),
      }
    : null;

  return (
    <section className="py-24 bg-white">
      {eventJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{ color: "#2D6A4F", backgroundColor: "#f0fdf4" }}>
              {t("badge")}
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              {t("title")} <span style={{ color: "#1B4332" }}>{t("titleHighlight")}</span>
            </h2>
            <p className="text-gray-500 mt-2">{t("subtitle")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              className={`group rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col ${
                item.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Accent header */}
              <div className="h-2" style={{ background: item.featured ? "linear-gradient(90deg, #1B4332, #4CAF50)" : "#e5e7eb" }} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}
                  >
                    {item.tag[locale]}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <Calendar size={13} /> {item.dateLabel[locale]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-800 transition-colors">
                  {item.title[locale]}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
