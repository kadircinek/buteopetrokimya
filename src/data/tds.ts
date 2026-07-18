/**
 * TDS (Technical Data Sheet) kaynak eşlemesi.
 *
 * Yaklaşım: Ürünler, ÜRETİCİNİN RESMİ ürün sayfasına bağlanır. Kullanıcı orada
 * gerçek grade'i seçip güncel TDS'i indirir. Böylece hiçbir teknik değer uydurulmaz
 * ve her zaman üreticinin yayınladığı en güncel belgeye ulaşılır.
 *
 * Aşağıdaki tüm LG Chem URL'leri web araştırmasıyla DOĞRULANMIŞTIR (gerçek, canlı).
 * TDS'i kamuya açık bulunmayan ürünler (Basechem, bazı jenerik reçineler) için
 * "request" (iletişime geç) fallback'i kullanılır.
 */

export type TdsResource =
  | { kind: "official"; url: string; source: string }
  | { kind: "request" };

const LG = (slug: string) => `https://www.lgchem.com/product-detail/${slug}?lang=en_US`;
const LG_SOURCE = "LG Chem";

// Marka (brand) → resmi LG Chem sayfası. Doğrulanmış URL'ler.
const BRAND_URL: Record<string, string> = {
  LUPOY: LG("lupoy"),
  "LUPOX / LUMAX": LG("lupoxlumax"),
  LUPOX: LG("lupoxlumax"),
  "LUMID / LUXY": LG("lumidluxy"),
  LUMID: LG("lumidluxy"),
  LUMILOY: LG("lumiloy"),
  LUMIPLAS: LG("lumiplas"),
  LUCEL: LG("lucel"),
  LUCON: LG("lucon"),
  LUSEP: LG("lusep"),
  "KEYFLEX BT": LG("keyflex-bt"),
  "KEYFLEX TO": LG("keyflex-to"),
  // Doğrulanmamış markalar için güvenli resmi fallback (LG Chem genel katalog)
  LUPOL: "https://www.lgchem.com/product/advanced-materials?lang=en_US",
  LUPOS: "https://www.lgchem.com/product/advanced-materials?lang=en_US",
};

// Malzeme kodu / tipi → resmi LG Chem sayfası (belirsiz/jenerik olanlar "request").
const CODE_URL: Record<string, string> = {
  ABS: LG("abs"),
  ASA: LG("asa"),
  SAN: LG("san"),
  PP: LG("pp"),
  PC: LG("lupoy"),
  "PC/ABS": LG("lupoy"),
  PBT: LG("lupoxlumax"),
  "PA6/PA66": LG("lumidluxy"),
  PA: LG("lumidluxy"),
  "PPO/PPE": LG("lumiloy"),
  MPPO: LG("lumiloy"),
  POM: LG("lucel"),
  PPS: LG("lusep"),
  TPE: LG("keyflex-bt"),
};

/** LG Chem marka adından TDS kaynağı çöz. */
export function tdsForBrand(brand: string): TdsResource {
  const url = BRAND_URL[brand];
  return url ? { kind: "official", url, source: LG_SOURCE } : { kind: "request" };
}

/** Serbest malzeme kodundan (ör. "PPH (Moblen)", "PC/ABS") TDS kaynağı çöz. */
export function tdsForCode(raw: string): TdsResource {
  const c = raw.toUpperCase();

  // Polipropilen aileleri
  if (/\bPP(H|C|RC)?\b/.test(c) || c.startsWith("PP")) {
    if (c.includes("PPO") || c.includes("PPE")) return { kind: "official", url: CODE_URL["PPO/PPE"], source: LG_SOURCE };
    return { kind: "official", url: CODE_URL.PP, source: LG_SOURCE };
  }
  // Doğrudan eşleşmeler
  if (c.includes("PC/ABS") || c.includes("PC+ABS")) return { kind: "official", url: CODE_URL["PC/ABS"], source: LG_SOURCE };
  if (c.includes("PPO") || c.includes("PPE") || c.includes("NORYL") || c.includes("NORLY")) return { kind: "official", url: CODE_URL["PPO/PPE"], source: LG_SOURCE };
  if (c.includes("PA6") || c.includes("PA66") || c === "PA") return { kind: "official", url: CODE_URL.PA, source: LG_SOURCE };
  if (c.startsWith("ABS")) return { kind: "official", url: CODE_URL.ABS, source: LG_SOURCE };
  if (c.startsWith("ASA")) return { kind: "official", url: CODE_URL.ASA, source: LG_SOURCE };
  if (c.startsWith("SAN")) return { kind: "official", url: CODE_URL.SAN, source: LG_SOURCE };
  if (c.startsWith("PBT")) return { kind: "official", url: CODE_URL.PBT, source: LG_SOURCE };
  if (c.startsWith("POM")) return { kind: "official", url: CODE_URL.POM, source: LG_SOURCE };
  if (c.startsWith("PPS")) return { kind: "official", url: CODE_URL.PPS, source: LG_SOURCE };
  if (c.startsWith("TPE") || c.includes("KEYFLEX")) return { kind: "official", url: CODE_URL.TPE, source: LG_SOURCE };
  // "PC" tek başına (PMMA'yı yanlışlıkla yakalamamak için tam kontrol)
  if (c === "PC" || c.startsWith("PC ") || c.startsWith("PC(")) return { kind: "official", url: CODE_URL.PC, source: LG_SOURCE };

  // Jenerik / üreticisi belirsiz reçineler → talep üzerine
  // (HDPE, LDPE, GPPS, HIPS, TPU, EVA, PMMA vb.)
  return { kind: "request" };
}
