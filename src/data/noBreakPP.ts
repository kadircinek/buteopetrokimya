/**
 * "No Break" PP (yüksek darbe dayanımlı blok kopolimer polipropilen) ürünleri.
 *
 * ÖNEMLİ: Bu ürünler LG Chem veya Basechem portföyünde DEĞİLDİR.
 * Buteo bu ürünlerin distribütörü değil, tedarikçisidir — metinlerde
 * "distribütör" ifadesi kullanılmaz, "tedarik ediyoruz" denir.
 *
 * DÜRÜSTLÜK KURALI: Sayısal teknik değer (MFI, Izod, yoğunluk vb.) yayınlanmaz.
 * Aşağıdaki nitel özellikler üreticinin kendi resmî ürün tanıtımına dayanır.
 */

export type NoBreakGrade = {
  slug: string;
  /** Görünen tam ad — başlık ve H1'de kullanılır. */
  code: string;
  /** Sadece grade kodu (arama eşleşmesi için). */
  short: string;
  maker: string;
  /** Üreticinin ürün serisi adı (varsa). */
  series?: string;
  color: string;
  /** Arama motorunda hedeflenen alternatif yazımlar. */
  aliases: string[];
};

export const NO_BREAK_GRADES: NoBreakGrade[] = [
  {
    slug: "sk-bh3500",
    code: "SK PPC BH3500",
    short: "BH3500",
    maker: "SK Geo Centric",
    series: "YUPLENE",
    color: "#1a3a5c",
    aliases: ["BH3500", "SK BH3500", "SK PPC BH3500", "YUPLENE BH3500", "BH 3500", "SK Geo Centric BH3500"],
  },
  {
    slug: "sk-bh3820",
    code: "SK PPC BH3820",
    short: "BH3820",
    maker: "SK Geo Centric",
    series: "YUPLENE",
    color: "#1B4332",
    aliases: ["BH3820", "SK BH3820", "SK PPC BH3820", "YUPLENE BH3820", "BH 3820", "SK Geo Centric BH3820"],
  },
  {
    slug: "hanwha-total-bi6300",
    code: "Hanwha TotalEnergies BI6300",
    short: "BI6300",
    maker: "Hanwha TotalEnergies",
    color: "#2D6A4F",
    aliases: ["BI6300", "BI 6300", "Hanwha BI6300", "Hanwha Total BI6300", "Hanwha TotalEnergies BI6300"],
  },
  {
    slug: "hanwha-total-bi7300",
    code: "Hanwha TotalEnergies BI7300",
    short: "BI7300",
    maker: "Hanwha TotalEnergies",
    color: "#40916C",
    aliases: ["BI7300", "BI 7300", "Hanwha BI7300", "Hanwha Total BI7300", "Hanwha TotalEnergies BI7300"],
  },
  {
    slug: "borealis-bd265mo",
    code: "Borealis / Borouge BD265MO",
    short: "BD265MO",
    maker: "Borealis / Borouge",
    color: "#0d2b1a",
    aliases: ["BD265MO", "BD 265MO", "Borealis BD265MO", "Borouge BD265MO", "BD265"],
  },
];

export const ALL_NO_BREAK_SLUGS = NO_BREAK_GRADES.map((g) => g.slug);

export function getNoBreakGrade(slug: string): NoBreakGrade | null {
  return NO_BREAK_GRADES.find((g) => g.slug === slug) ?? null;
}
