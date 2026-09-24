/**
 * Polimer tipi (hammadde kodu) sayfaları.
 *
 * DÜRÜSTLÜK KURALI: Metinler yalnızca ilgili polimerin genel kabul görmüş
 * malzeme bilimi özelliklerini anlatır. Sayısal teknik değer (MFI, yoğunluk,
 * çekme dayanımı vb.) yer almaz — bunlar yalnızca grade'e özgü TDS'te bulunur.
 */

export type PolymerMeta = {
  slug: string;
  /** Ürünler sayfasındaki kod — TDS eşlemesi için birebir aynı olmalı. */
  code: string;
  group: "polyolefin" | "engineering";
  color: string;
  /** İlgili LG Chem marka slug'ları. */
  brands: string[];
  /** İlgili Basechem ürün slug'ları. */
  basechem: string[];
};

export const POLYMERS: PolymerMeta[] = [
  { slug: "pp-homopolimer", code: "PPH (Moblen)", group: "polyolefin",   color: "#40916C", brands: ["lupol"], basechem: [] },
  { slug: "pp-kopolimer",   code: "PPC",          group: "polyolefin",   color: "#40916C", brands: ["lupol"], basechem: [] },
  { slug: "pp-random",      code: "PPRC",         group: "polyolefin",   color: "#52B788", brands: ["lupol"], basechem: [] },
  { slug: "hdpe",           code: "HDPE",         group: "polyolefin",   color: "#2D6A4F", brands: [], basechem: [] },
  { slug: "ldpe",           code: "LDPE",         group: "polyolefin",   color: "#52B788", brands: [], basechem: [] },
  { slug: "gpps",           code: "GPPS",         group: "polyolefin",   color: "#1B4332", brands: ["lupos"], basechem: [] },
  { slug: "hips",           code: "HIPS",         group: "polyolefin",   color: "#1B4332", brands: ["lupos"], basechem: [] },
  { slug: "tpe",            code: "TPE",          group: "polyolefin",   color: "#2D6A4F", brands: ["keyflex-bt", "keyflex-to"], basechem: [] },
  { slug: "tpu",            code: "TPU",          group: "polyolefin",   color: "#40916C", brands: [], basechem: [] },
  { slug: "eva",            code: "EVA",          group: "polyolefin",   color: "#52B788", brands: [], basechem: [] },
  { slug: "abs",            code: "ABS",          group: "engineering",  color: "#1B4332", brands: ["lupos"], basechem: ["abs-compound"] },
  { slug: "polikarbonat",   code: "PC",           group: "engineering",  color: "#1a3a5c", brands: ["lupoy", "lumiplas"], basechem: ["pc-compound"] },
  { slug: "pmma",           code: "PMMA",         group: "engineering",  color: "#2D6A4F", brands: [], basechem: [] },
  { slug: "pbt",            code: "PBT",          group: "engineering",  color: "#2D6A4F", brands: ["lupox-lumax"], basechem: ["pbt"] },
  { slug: "san",            code: "SAN",          group: "engineering",  color: "#40916C", brands: ["lupos"], basechem: [] },
  { slug: "pc-abs",         code: "PC/ABS",       group: "engineering",  color: "#0d2b1a", brands: ["lupoy"], basechem: ["pc-abs"] },
  { slug: "ppo-ppe",        code: "PPO/PPE",      group: "engineering",  color: "#0d2b1a", brands: ["lumiloy"], basechem: ["ppo-ppe"] },
  { slug: "pa6-pa66",       code: "PA6/PA66",     group: "engineering",  color: "#1B4332", brands: ["lumid-luxy"], basechem: ["pa6-pa66"] },
];

export const ALL_POLYMER_SLUGS = POLYMERS.map((p) => p.slug);

export function getPolymer(slug: string): PolymerMeta | null {
  return POLYMERS.find((p) => p.slug === slug) ?? null;
}

/** Ürünler sayfasındaki koddan slug bulur (liste → detay linki için). */
export function slugForPolymerCode(code: string): string | null {
  const p = POLYMERS.find((x) => x.code === code);
  return p ? p.slug : null;
}
