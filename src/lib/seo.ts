import type { Metadata } from "next";

export const SITE_URL = "https://www.buteopetrokimya.com";
export const SITE_NAME = "Buteo Petrokimya";

export type Locale = "tr" | "en" | "ro";
export type PageKey =
  | "home"
  | "products"
  | "lgchem"
  | "basechem"
  | "sectors"
  | "about"
  | "contact"
  | "finder";

type SeoEntry = { title: string; description: string; keywords: string[] };

// Path suffix per page (relative to /[locale])
const PATHS: Record<PageKey, string> = {
  home: "",
  products: "/products",
  lgchem: "/lgchem",
  basechem: "/basechem",
  sectors: "/sectors",
  about: "/about",
  contact: "/contact",
  finder: "/finder",
};

const SEO: Record<PageKey, Record<Locale, SeoEntry>> = {
  home: {
    tr: {
      title: "LG Chem & Basechem Türkiye Distribütörü | Plastik Hammadde",
      description:
        "LG Chem ve Basechem Türkiye distribütörü. Mühendislik plastikleri ve plastik hammadde tedariki — İstanbul merkez, Bükreş Avrupa ofisi.",
      keywords: ["plastik hammadde", "mühendislik plastikleri", "LG Chem Türkiye distribütörü", "Basechem", "plastik hammadde tedarikçisi", "compound", "ABS", "polikarbonat", "polipropilen"],
    },
    en: {
      title: "LG Chem & Basechem Turkey Distributor | Engineering Plastics",
      description:
        "LG Chem and Basechem Turkey distributor. Engineering plastics and plastic raw material supply — Istanbul HQ, Bucharest office for Europe.",
      keywords: ["plastic raw materials", "engineering plastics", "LG Chem Turkey distributor", "Basechem", "plastics supplier", "compound", "ABS", "polycarbonate", "polypropylene"],
    },
    ro: {
      title: "Distribuitor Turcia LG Chem & Basechem | Materiale Plastice",
      description:
        "Distribuitor Turcia LG Chem și Basechem. Plastice tehnice și materii prime plastice — sediu Istanbul, birou european București.",
      keywords: ["materii prime plastice", "plastice tehnice", "distribuitor LG Chem", "Basechem", "furnizor plastic", "compound", "ABS", "policarbonat", "polipropilenă"],
    },
  },
  products: {
    tr: {
      title: "Ürünler | Plastik Hammadde Çeşitleri — PP, PE, ABS, PC, PBT",
      description:
        "Polipropilen, polietilen, ABS, PC, PBT, GPPS, HIPS ve katkı maddeleri (Vistamaxx 6102/6202). Geniş plastik hammadde portföyü, hızlı tedarik.",
      keywords: ["plastik hammadde çeşitleri", "polipropilen tedarik", "polietilen", "ABS hammadde", "polikarbonat", "PBT", "mühendislik polimerleri", "GPPS", "HIPS", "TPU", "EVA", "darbe dayanımı arttırıcı", "Vistamaxx", "Vistamaxx 6102", "Vistamaxx 6202", "impact modifier"],
    },
    en: {
      title: "Products | Plastic Raw Materials — PP, PE, ABS, PC, PBT",
      description:
        "Polypropylene, polyethylene, ABS, PC, PBT, GPPS, HIPS and additives (Vistamaxx 6102/6202). Wide plastic raw material portfolio, fast supply.",
      keywords: ["plastic raw materials", "polypropylene supplier", "polyethylene", "ABS", "polycarbonate", "PBT", "engineering polymers", "GPPS", "HIPS", "impact modifier", "Vistamaxx", "Vistamaxx 6102", "Vistamaxx 6202"],
    },
    ro: {
      title: "Produse | Materii Prime Plastice — PP, PE, ABS, PC, PBT",
      description:
        "Polipropilenă, polietilenă, ABS, PC, PBT, GPPS, HIPS și aditivi (Vistamaxx 6102/6202). Portofoliu larg de materii prime plastice.",
      keywords: ["materii prime plastice", "polipropilenă", "polietilenă", "ABS", "policarbonat", "PBT", "polimeri tehnici", "modificator de impact", "Vistamaxx", "Vistamaxx 6102", "Vistamaxx 6202"],
    },
  },
  lgchem: {
    tr: {
      title: "LG Chem Ürünleri | LUPOY LUPOX LUMID LUMILOY LUSEP — Türkiye",
      description:
        "LG Chem Türkiye distribütörü: LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, KEYFLEX. Gerçek grade'ler ve TDS talebi.",
      keywords: ["LG Chem distribütörü", "LG Chem Türkiye", "LUPOY", "LUPOX", "LUMID", "LUMILOY", "LUSEP", "LUCON", "LUMIPLAS", "LUCEL", "LUPOL", "LUPOS", "KEYFLEX BT", "PC compound", "PBT compound", "mPPE", "PPS compound", "POM", "LG Chem mühendislik plastiği grade"],
    },
    en: {
      title: "LG Chem Products | LUPOY LUPOX LUMID LUMILOY LUSEP — Turkey",
      description:
        "LG Chem Turkey distributor: LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, KEYFLEX. Real grades and TDS on request.",
      keywords: ["LG Chem distributor", "LG Chem Turkey", "LUPOY", "LUPOX", "LUMID", "LUMILOY", "LUSEP", "LUCON", "LUMIPLAS", "LUCEL", "LUPOL", "LUPOS", "KEYFLEX BT", "PC compound", "PBT compound", "mPPE", "PPS compound", "POM", "LG Chem grade"],
    },
    ro: {
      title: "Produse LG Chem | LUPOY LUPOX LUMID LUMILOY LUSEP — Turcia",
      description:
        "Distribuitor Turcia LG Chem: LUPOY, LUPOX, LUMID, LUMILOY, LUSEP, LUCON, LUMIPLAS, LUCEL, LUPOL, KEYFLEX. Grade reale și TDS la cerere.",
      keywords: ["distribuitor LG Chem", "LG Chem Turcia", "LUPOY", "LUPOX", "LUMID", "LUMILOY", "LUSEP", "LUCON", "LUMIPLAS", "LUCEL", "LUPOL", "LUPOS", "KEYFLEX BT", "compound PC", "compound PBT", "mPPE", "POM"],
    },
  },
  basechem: {
    tr: {
      title: "Basechem Compound Ürünleri | ABS, PC, PBT, PC/ABS — Türkiye",
      description:
        "Basechem compound Türkiye distribütörü. Alev geciktirici (UL-94 V-0) ve cam elyaf takviyeli ABS, PC, PBT, PC/ABS, PPO/PPE ve PA compoundları.",
      keywords: ["Basechem", "compound", "alev geciktirici plastik", "cam elyaf takviyeli", "ABS compound", "PC compound", "PBT", "UL-94 V-0", "PC/ABS"],
    },
    en: {
      title: "Basechem Compounds | ABS, PC, PBT, PC/ABS — Turkey Distributor",
      description:
        "Basechem compound Turkey distributor. Flame retardant (UL-94 V-0) and glass fiber reinforced ABS, PC, PBT, PC/ABS, PPO/PPE and PA compounds.",
      keywords: ["Basechem", "compound", "flame retardant plastic", "glass fiber reinforced", "ABS compound", "PC compound", "PBT", "UL-94 V-0", "PC/ABS"],
    },
    ro: {
      title: "Compound Basechem | ABS, PC, PBT, PC/ABS — Distribuitor Turcia",
      description:
        "Distribuitor Turcia compound Basechem. Compounduri ABS, PC, PBT, PC/ABS, PPO/PPE și PA — retardant flacără (UL-94 V-0) și fibră de sticlă.",
      keywords: ["Basechem", "compound", "retardant flacără", "fibră de sticlă", "compound ABS", "compound PC", "PBT", "UL-94 V-0"],
    },
  },
  sectors: {
    tr: {
      title: "Sektörler | Otomotiv, Elektrik-Elektronik, Medikal Plastik",
      description:
        "Otomotiv, elektrik-elektronik, beyaz eşya, medikal ve inşaat dahil 11 sektöre özel plastik hammadde ve mühendislik plastiği çözümleri.",
      keywords: ["otomotiv plastik hammadde", "elektrik elektronik plastik", "medikal plastik", "beyaz eşya plastik", "sektörel plastik çözümleri", "mühendislik plastiği uygulama"],
    },
    en: {
      title: "Sectors | Automotive, Electronics, Medical Plastics",
      description:
        "Plastic raw material and engineering plastic solutions for 11 sectors including automotive, electronics, white goods, medical and construction.",
      keywords: ["automotive plastics", "electronics plastics", "medical plastics", "white goods plastics", "industry plastic solutions"],
    },
    ro: {
      title: "Sectoare | Auto, Electrice-Electronice, Plastice Medicale",
      description:
        "Soluții de materii prime plastice pentru 11 sectoare: auto, electronice, electrocasnice, medical și construcții.",
      keywords: ["plastice auto", "plastice electronice", "plastice medicale", "electrocasnice", "soluții plastice industriale"],
    },
  },
  about: {
    tr: {
      title: "Hakkımızda | Buteo Petrokimya — Plastik Hammadde Firması",
      description:
        "2023'te kurulan Buteo Petrokimya, mühendislik plastikleri distribütörü. İstanbul merkez ve Bükreş Avrupa ofisiyle Türkiye ve Avrupa'ya hizmet.",
      keywords: ["Buteo Petrokimya", "plastik hammadde firması", "plastik hammadde İstanbul", "mühendislik plastiği distribütörü", "Buteo Petrochemicals Romania"],
    },
    en: {
      title: "About Us | Buteo Petrochemicals — Plastics Distributor",
      description:
        "Founded in 2023, Buteo Petrochemicals is an engineering plastics distributor serving Turkey and Europe from Istanbul HQ and Bucharest office.",
      keywords: ["Buteo Petrochemicals", "plastics distributor", "engineering plastics company", "plastics distributor Istanbul", "Buteo Petrochemicals Romania"],
    },
    ro: {
      title: "Despre Noi | Buteo Petrochemicals — Distribuitor Plastice",
      description:
        "Fondată în 2023, Buteo Petrochemicals distribuie plastice tehnice în Turcia și Europa — sediu Istanbul, birou București.",
      keywords: ["Buteo Petrochemicals", "distribuitor plastice", "companie plastice tehnice", "Buteo Petrochemicals Romania"],
    },
  },
  finder: {
    tr: {
      title: "Hammadde Bulucu | Doğru Mühendislik Plastiğini Bulun",
      description:
        "Üretim yöntemi, kullanım alanı ve istediğiniz özellikleri seçin; uygulamanıza uygun plastik hammadde ailelerini görün ve öneri alın.",
      keywords: ["hammadde bulucu", "plastik malzeme seçimi", "hangi plastik hammadde", "mühendislik plastiği seçimi", "malzeme öneri aracı"],
    },
    en: {
      title: "Material Finder | Find the Right Engineering Plastic",
      description:
        "Select your production method, application and required properties to find suitable plastic material families and get a recommendation.",
      keywords: ["material finder", "plastic material selection", "which plastic material", "engineering plastic selection", "material advisor"],
    },
    ro: {
      title: "Găsitor de Materiale | Găsiți Plasticul Tehnic Potrivit",
      description:
        "Selectați metoda de producție, aplicația și proprietățile pentru a găsi familiile de materiale plastice potrivite.",
      keywords: ["găsitor materiale", "selecție material plastic", "ce material plastic", "selecție plastic tehnic"],
    },
  },
  contact: {
    tr: {
      title: "İletişim | Plastik Hammadde Tedarikçisi — İstanbul & Romanya",
      description:
        "Plastik hammadde ve mühendislik plastiği teklifi için ulaşın. İstanbul (Ataşehir) ve Bükreş ofislerimiz — +90 542 189 43 40",
      keywords: ["plastik hammadde tedarikçi", "plastik hammadde iletişim", "plastik hammadde İstanbul", "teklif al", "Buteo Petrokimya iletişim"],
    },
    en: {
      title: "Contact | Plastics Supplier — Istanbul & Romania",
      description:
        "Contact us for plastic raw material and engineering plastic quotes. Our Istanbul (Ataşehir) and Bucharest offices — +90 542 189 43 40",
      keywords: ["plastics supplier contact", "plastic raw material quote", "plastics Istanbul", "get a quote", "Buteo Petrochemicals contact"],
    },
    ro: {
      title: "Contact | Furnizor Plastice — Istanbul & România",
      description:
        "Contactați-ne pentru oferte de materii prime plastice. Birourile noastre din Istanbul (Ataşehir) și București — +90 542 189 43 40",
      keywords: ["furnizor plastice", "ofertă materii prime plastice", "plastice Istanbul", "contact Buteo Petrochemicals"],
    },
  },
};

const OG_LOCALE: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  ro: "ro_RO",
};

/** Build full Metadata (title, description, keywords, canonical, hreflang, OpenGraph, Twitter) for a page. */
export function buildMetadata(page: PageKey, locale: Locale): Metadata {
  const entry = SEO[page][locale] ?? SEO[page].tr;
  const path = PATHS[page];
  const canonical = `${SITE_URL}/${locale}${path}`;

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical,
      languages: {
        tr: `${SITE_URL}/tr${path}`,
        en: `${SITE_URL}/en${path}`,
        ro: `${SITE_URL}/ro${path}`,
        "x-default": `${SITE_URL}/tr${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: canonical,
      title: entry.title,
      description: entry.description,
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
  };
}
