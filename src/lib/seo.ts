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
        "Buteo Petrokimya; LG Chem ve Basechem'in Türkiye distribütörü. Mühendislik plastikleri, plastik hammadde ve compound çözümlerinde İstanbul ve Romanya ofisleriyle güvenilir tedarikçiniz.",
      keywords: ["plastik hammadde", "mühendislik plastikleri", "LG Chem Türkiye distribütörü", "Basechem", "plastik hammadde tedarikçisi", "compound", "ABS", "polikarbonat", "polipropilen"],
    },
    en: {
      title: "LG Chem & Basechem Turkey Distributor | Engineering Plastics",
      description:
        "Buteo Petrochemicals is the Turkey distributor of LG Chem and Basechem. Your reliable supplier for engineering plastics, plastic raw materials and compounds, with offices in Istanbul and Romania.",
      keywords: ["plastic raw materials", "engineering plastics", "LG Chem Turkey distributor", "Basechem", "plastics supplier", "compound", "ABS", "polycarbonate", "polypropylene"],
    },
    ro: {
      title: "Distribuitor Turcia LG Chem & Basechem | Materiale Plastice",
      description:
        "Buteo Petrochemicals este distribuitorul din Turcia al LG Chem și Basechem. Furnizorul dvs. de încredere pentru plastice tehnice, materii prime plastice și compound, cu birouri în Istanbul și România.",
      keywords: ["materii prime plastice", "plastice tehnice", "distribuitor LG Chem", "Basechem", "furnizor plastic", "compound", "ABS", "policarbonat", "polipropilenă"],
    },
  },
  products: {
    tr: {
      title: "Ürünler | Plastik Hammadde Çeşitleri — PP, PE, ABS, PC, PBT",
      description:
        "Polipropilen (PP), polietilen (HDPE/LDPE), ABS, polikarbonat (PC), PBT, GPPS, HIPS ve mühendislik polimerleri dahil geniş plastik hammadde portföyümüzü keşfedin. Türkiye geneline hızlı tedarik.",
      keywords: ["plastik hammadde çeşitleri", "polipropilen tedarik", "polietilen", "ABS hammadde", "polikarbonat", "PBT", "mühendislik polimerleri", "GPPS", "HIPS", "TPU", "EVA"],
    },
    en: {
      title: "Products | Plastic Raw Materials — PP, PE, ABS, PC, PBT",
      description:
        "Explore our wide portfolio of plastic raw materials including polypropylene (PP), polyethylene (HDPE/LDPE), ABS, polycarbonate (PC), PBT, GPPS, HIPS and engineering polymers. Fast supply across Turkey.",
      keywords: ["plastic raw materials", "polypropylene supplier", "polyethylene", "ABS", "polycarbonate", "PBT", "engineering polymers", "GPPS", "HIPS"],
    },
    ro: {
      title: "Produse | Materii Prime Plastice — PP, PE, ABS, PC, PBT",
      description:
        "Descoperiți portofoliul nostru larg de materii prime plastice: polipropilenă (PP), polietilenă (HDPE/LDPE), ABS, policarbonat (PC), PBT, GPPS, HIPS și polimeri tehnici. Aprovizionare rapidă.",
      keywords: ["materii prime plastice", "polipropilenă", "polietilenă", "ABS", "policarbonat", "PBT", "polimeri tehnici"],
    },
  },
  lgchem: {
    tr: {
      title: "LG Chem Ürünleri | LUPOY, LUPOX, LUMID — Türkiye Distribütörü",
      description:
        "LG Chem mühendislik plastikleri ve petrokimya ürünlerinin Türkiye distribütörü Buteo Petrokimya. LUPOY (PC), LUPOX (PBT), LUMID (PA), KEYFLEX (TPE) ve daha fazlası için teklif alın.",
      keywords: ["LG Chem distribütörü", "LG Chem Türkiye", "LUPOY", "LUPOX", "LUMID", "KEYFLEX", "PC compound", "LG Chem mühendislik plastiği"],
    },
    en: {
      title: "LG Chem Products | LUPOY, LUPOX, LUMID — Turkey Distributor",
      description:
        "Buteo Petrochemicals, the Turkey distributor of LG Chem engineering plastics and petrochemicals. Request a quote for LUPOY (PC), LUPOX (PBT), LUMID (PA), KEYFLEX (TPE) and more.",
      keywords: ["LG Chem distributor", "LG Chem Turkey", "LUPOY", "LUPOX", "LUMID", "KEYFLEX", "PC compound", "LG Chem engineering plastics"],
    },
    ro: {
      title: "Produse LG Chem | LUPOY, LUPOX, LUMID — Distribuitor Turcia",
      description:
        "Buteo Petrochemicals, distribuitorul din Turcia al plasticelor tehnice și produselor petrochimice LG Chem. Solicitați ofertă pentru LUPOY (PC), LUPOX (PBT), LUMID (PA), KEYFLEX (TPE).",
      keywords: ["distribuitor LG Chem", "LG Chem Turcia", "LUPOY", "LUPOX", "LUMID", "KEYFLEX", "compound PC"],
    },
  },
  basechem: {
    tr: {
      title: "Basechem Compound Ürünleri | ABS, PC, PBT, PC/ABS — Türkiye",
      description:
        "Basechem compound ürünlerinin Türkiye distribütörü. Alev geciktirici (UL-94 V-0) ve cam elyaf takviyeli ABS, PC, PBT, PC/ABS, PPO/PPE ve PA compoundları. Samsung, LG, Hyundai OEM kalitesi.",
      keywords: ["Basechem", "compound", "alev geciktirici plastik", "cam elyaf takviyeli", "ABS compound", "PC compound", "PBT", "UL-94 V-0", "PC/ABS"],
    },
    en: {
      title: "Basechem Compounds | ABS, PC, PBT, PC/ABS — Turkey Distributor",
      description:
        "Turkey distributor of Basechem compound products. Flame retardant (UL-94 V-0) and glass fiber reinforced ABS, PC, PBT, PC/ABS, PPO/PPE and PA compounds. Samsung, LG, Hyundai OEM quality.",
      keywords: ["Basechem", "compound", "flame retardant plastic", "glass fiber reinforced", "ABS compound", "PC compound", "PBT", "UL-94 V-0", "PC/ABS"],
    },
    ro: {
      title: "Compound Basechem | ABS, PC, PBT, PC/ABS — Distribuitor Turcia",
      description:
        "Distribuitor Turcia pentru produsele compound Basechem. Compounduri ABS, PC, PBT, PC/ABS, PPO/PPE și PA cu retardant flacără (UL-94 V-0) și ranforsate cu fibră de sticlă. Calitate OEM.",
      keywords: ["Basechem", "compound", "retardant flacără", "fibră de sticlă", "compound ABS", "compound PC", "PBT", "UL-94 V-0"],
    },
  },
  sectors: {
    tr: {
      title: "Sektörler | Otomotiv, Elektrik-Elektronik, Medikal Plastik",
      description:
        "Otomotiv, elektrik-elektronik, beyaz eşya, medikal, inşaat ve daha fazlası — 11 sektöre özel plastik hammadde ve mühendislik plastiği çözümleri sunuyoruz.",
      keywords: ["otomotiv plastik hammadde", "elektrik elektronik plastik", "medikal plastik", "beyaz eşya plastik", "sektörel plastik çözümleri", "mühendislik plastiği uygulama"],
    },
    en: {
      title: "Sectors | Automotive, Electronics, Medical Plastics",
      description:
        "Automotive, electrical & electronics, white goods, medical, construction and more — we provide plastic raw material and engineering plastic solutions for 11 sectors.",
      keywords: ["automotive plastics", "electronics plastics", "medical plastics", "white goods plastics", "industry plastic solutions"],
    },
    ro: {
      title: "Sectoare | Auto, Electrice-Electronice, Plastice Medicale",
      description:
        "Auto, electrice și electronice, electrocasnice, medical, construcții și altele — oferim soluții de materii prime plastice și plastice tehnice pentru 11 sectoare.",
      keywords: ["plastice auto", "plastice electronice", "plastice medicale", "electrocasnice", "soluții plastice industriale"],
    },
  },
  about: {
    tr: {
      title: "Hakkımızda | Buteo Petrokimya — Plastik Hammadde Firması",
      description:
        "2023'te kurulan Buteo Petrokimya, mühendislik plastiklerinde uzman bir distribütör. İstanbul merkez ve Romanya (Bükreş) Avrupa ofisiyle Türkiye ve Avrupa'ya hizmet veriyoruz.",
      keywords: ["Buteo Petrokimya", "plastik hammadde firması", "plastik hammadde İstanbul", "mühendislik plastiği distribütörü", "Buteo Petrochemicals Romania"],
    },
    en: {
      title: "About Us | Buteo Petrochemicals — Plastics Distributor",
      description:
        "Founded in 2023, Buteo Petrochemicals is a specialized engineering plastics distributor. We serve Turkey and Europe with our Istanbul HQ and Romania (Bucharest) European office.",
      keywords: ["Buteo Petrochemicals", "plastics distributor", "engineering plastics company", "plastics distributor Istanbul", "Buteo Petrochemicals Romania"],
    },
    ro: {
      title: "Despre Noi | Buteo Petrochemicals — Distribuitor Plastice",
      description:
        "Fondată în 2023, Buteo Petrochemicals este un distribuitor specializat de plastice tehnice. Deservim Turcia și Europa cu sediul din Istanbul și biroul european din România (București).",
      keywords: ["Buteo Petrochemicals", "distribuitor plastice", "companie plastice tehnice", "Buteo Petrochemicals Romania"],
    },
  },
  finder: {
    tr: {
      title: "Hammadde Bulucu | Doğru Mühendislik Plastiğini Bulun",
      description:
        "Üretim yöntemi, kullanım alanı ve istediğiniz özellikleri seçin; uygulamanıza uygun plastik hammadde ailelerini öğrenin ve satış ekibimizden özel öneri alın.",
      keywords: ["hammadde bulucu", "plastik malzeme seçimi", "hangi plastik hammadde", "mühendislik plastiği seçimi", "malzeme öneri aracı"],
    },
    en: {
      title: "Material Finder | Find the Right Engineering Plastic",
      description:
        "Select your production method, application and required properties to discover suitable plastic material families and get a tailored recommendation from our sales team.",
      keywords: ["material finder", "plastic material selection", "which plastic material", "engineering plastic selection", "material advisor"],
    },
    ro: {
      title: "Găsitor de Materiale | Găsiți Plasticul Tehnic Potrivit",
      description:
        "Selectați metoda de producție, aplicația și proprietățile dorite pentru a descoperi familiile de materiale plastice potrivite și a primi o recomandare personalizată.",
      keywords: ["găsitor materiale", "selecție material plastic", "ce material plastic", "selecție plastic tehnic"],
    },
  },
  contact: {
    tr: {
      title: "İletişim | Plastik Hammadde Tedarikçisi — İstanbul & Romanya",
      description:
        "Plastik hammadde ve mühendislik plastiği teklifi için bize ulaşın. İstanbul merkez ofisimiz ve Bükreş Avrupa ofisimizle Türkiye ve Avrupa'ya hizmet veriyoruz. +90 542 189 43 40",
      keywords: ["plastik hammadde tedarikçi", "plastik hammadde iletişim", "plastik hammadde İstanbul", "teklif al", "Buteo Petrokimya iletişim"],
    },
    en: {
      title: "Contact | Plastics Supplier — Istanbul & Romania",
      description:
        "Contact us for plastic raw material and engineering plastic quotes. We serve Turkey and Europe with our Istanbul HQ and Bucharest European office. +90 542 189 43 40",
      keywords: ["plastics supplier contact", "plastic raw material quote", "plastics Istanbul", "get a quote", "Buteo Petrochemicals contact"],
    },
    ro: {
      title: "Contact | Furnizor Plastice — Istanbul & România",
      description:
        "Contactați-ne pentru oferte de materii prime plastice și plastice tehnice. Deservim Turcia și Europa cu sediul din Istanbul și biroul din București. +90 542 189 43 40",
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
