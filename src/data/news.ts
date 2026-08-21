/**
 * Kurumsal haber/duyuru akışı verisi.
 * Yeni haber eklemek için diziye yeni bir NewsItem ekleyin (en yeni en üstte, date'e göre sıralanır).
 * İçerik 3 dilde tutulur (tr/en/ro).
 */
export type Locale = "tr" | "en" | "ro";

export type NewsItem = {
  id: string;
  date: string; // ISO (sıralama için)
  dateLabel: Record<Locale, string>;
  tag: Record<Locale, string>;
  title: Record<Locale, string>;
  desc: Record<Locale, string>;
  featured?: boolean;
  /** Fuar/etkinlik haberleri için — schema.org Event verisi üretilir. */
  event?: {
    startDate: string; // ISO
    endDate: string;   // ISO
    venue: string;
    city: string;
    country: string;
    url?: string;
  };
};

export const NEWS: NewsItem[] = [
  {
    id: "plast-eurasia-2026",
    date: "2026-12-02",
    featured: true,
    event: {
      startDate: "2026-12-02",
      endDate: "2026-12-05",
      venue: "Tüyap Fuar ve Kongre Merkezi",
      city: "İstanbul",
      country: "TR",
    },
    dateLabel: {
      tr: "2–5 Aralık 2026",
      en: "2–5 December 2026",
      ro: "2–5 Decembrie 2026",
    },
    tag: { tr: "Fuar", en: "Trade Fair", ro: "Târg" },
    title: {
      tr: "Plast Eurasia İstanbul 2026'da Sizlerle",
      en: "Meet Us at Plast Eurasia Istanbul 2026",
      ro: "Ne Vedem la Plast Eurasia Istanbul 2026",
    },
    desc: {
      tr: "Buteo Petrokimya, 2–5 Aralık 2026 tarihlerinde Tüyap Fuar ve Kongre Merkezi'nde düzenlenecek Plast Eurasia İstanbul fuarında katılımcı olarak yer alacak. Salon 1, Stand 114B'deki standımızda LG Chem ve Basechem ürün portföyümüzü ve mühendislik plastiği çözümlerimizi keşfedin.",
      en: "Buteo Petrochemicals will exhibit at Plast Eurasia Istanbul, held on 2–5 December 2026 at the Tüyap Fair and Congress Center. Discover our LG Chem and Basechem product portfolio and engineering plastics solutions at our booth — Hall 1, Stand 114B.",
      ro: "Buteo Petrochemicals va participa la Plast Eurasia Istanbul, în perioada 2–5 Decembrie 2026, la Centrul Expozițional Tüyap. Descoperiți portofoliul nostru LG Chem și Basechem și soluțiile de plastice tehnice la standul nostru — Sala 1, Stand 114B.",
    },
  },
  {
    id: "lgchem-portfolio-expanded",
    date: "2026-07-20",
    dateLabel: {
      tr: "Temmuz 2026",
      en: "July 2026",
      ro: "Iulie 2026",
    },
    tag: { tr: "Ürün", en: "Products", ro: "Produse" },
    title: {
      tr: "LG Chem Ürün Portföyümüz Genişledi",
      en: "Our LG Chem Product Portfolio Has Expanded",
      ro: "Portofoliul Nostru LG Chem S-a Extins",
    },
    desc: {
      tr: "LG Chem'in tüm mühendislik plastiği ailelerini — LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, LUPOS ve KEYFLEX — güncel grade'leriyle web sitemize ekledik. Ürünler sayfamızdan grade'leri inceleyip TDS talep edebilirsiniz.",
      en: "We have added all of LG Chem's engineering plastic families — LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, LUPOS and KEYFLEX — with their current grades to our website. Browse the grades and request a TDS from our products page.",
      ro: "Am adăugat toate familiile de plastice tehnice LG Chem — LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, LUPOS și KEYFLEX — cu gradele lor actuale pe site. Consultați gradele și solicitați TDS din pagina de produse.",
    },
  },
  {
    id: "romania-office",
    date: "2025-01-01",
    dateLabel: {
      tr: "2025",
      en: "2025",
      ro: "2025",
    },
    tag: { tr: "Kurumsal", en: "Corporate", ro: "Corporativ" },
    title: {
      tr: "Avrupa'dayız: Bükreş Ofisimiz Açıldı",
      en: "We're in Europe: Our Bucharest Office Opened",
      ro: "Suntem în Europa: Biroul Nostru din București",
    },
    desc: {
      tr: "BUTEO PETROCHEMICALS ROMANIA S.R.L. ile Bükreş'te Avrupa ofisimizi açtık. İstanbul merkez ofisimiz ve iki depomuzun yanında, artık Avrupa pazarına da kesintisiz hizmet veriyoruz.",
      en: "With BUTEO PETROCHEMICALS ROMANIA S.R.L., we opened our European office in Bucharest. Alongside our Istanbul HQ and two warehouses, we now serve the European market seamlessly.",
      ro: "Cu BUTEO PETROCHEMICALS ROMANIA S.R.L., am deschis biroul nostru european în București. Pe lângă sediul din Istanbul și cele două depozite, acum deservim și piața europeană fără întrerupere.",
    },
  },
];
