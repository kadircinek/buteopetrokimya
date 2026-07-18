/**
 * Site içi arama için ürün/hammadde kataloğu (flat index).
 * path: locale öneki eklenerek yönlendirilecek sayfa (ör. /lgchem).
 */
export type CatalogItem = {
  code: string;
  name: string;
  path: string;
  tag: string; // kısa kategori etiketi
};

export const CATALOG: CatalogItem[] = [
  // Poliolefin & jenerik
  { code: "PPH", name: "Polipropilen Homopolimer (Moblen)", path: "/products", tag: "Poliolefin" },
  { code: "PPC", name: "Polipropilen Kopolimer", path: "/products", tag: "Poliolefin" },
  { code: "PPRC", name: "Polipropilen Random Kopolimer", path: "/products", tag: "Poliolefin" },
  { code: "HDPE", name: "Yüksek Yoğunluklu Polietilen", path: "/products", tag: "Poliolefin" },
  { code: "LDPE", name: "Alçak Yoğunluklu Polietilen", path: "/products", tag: "Poliolefin" },
  { code: "GPPS", name: "Kristal Polistiren", path: "/products", tag: "Stiren" },
  { code: "HIPS", name: "Antişok Polistiren", path: "/products", tag: "Stiren" },
  { code: "TPU", name: "Termoplastik Poliüretan", path: "/products", tag: "Elastomer" },
  { code: "EVA", name: "Etilen Vinil Asetat", path: "/products", tag: "Poliolefin" },
  { code: "PMMA", name: "Polimetilmetakrilat (Akrilik)", path: "/products", tag: "Mühendislik" },

  // Mühendislik polimerleri
  { code: "ABS", name: "Akrilonitril Butadien Stiren", path: "/lgchem", tag: "LG Chem" },
  { code: "SAN", name: "Stiren Akrilonitril", path: "/lgchem", tag: "LG Chem" },
  { code: "ASA", name: "Akrilonitril Stiren Akrilat", path: "/lgchem", tag: "LG Chem" },
  { code: "PC", name: "Polikarbonat", path: "/lgchem", tag: "LG Chem" },
  { code: "PC/ABS", name: "PC/ABS Alaşımı", path: "/lgchem", tag: "Mühendislik" },
  { code: "PBT", name: "Polibutilen Tereftalat", path: "/lgchem", tag: "Mühendislik" },
  { code: "PA6", name: "Poliamid 6 (Naylon)", path: "/lgchem", tag: "Mühendislik" },
  { code: "PA66", name: "Poliamid 66 (Naylon)", path: "/lgchem", tag: "Mühendislik" },
  { code: "PPO", name: "Polifenilen Eter / mPPO", path: "/lgchem", tag: "Mühendislik" },
  { code: "PPE", name: "Polifenilen Eter", path: "/lgchem", tag: "Mühendislik" },
  { code: "POM", name: "Poliasetal (POM)", path: "/lgchem", tag: "Mühendislik" },
  { code: "PPS", name: "Polifenilen Sülfür", path: "/lgchem", tag: "Mühendislik" },

  // LG Chem markaları
  { code: "LUPOY", name: "LG Chem PC / PC Alaşım", path: "/lgchem", tag: "LG Chem" },
  { code: "LUPOX", name: "LG Chem PBT", path: "/lgchem", tag: "LG Chem" },
  { code: "LUMID", name: "LG Chem PA6 / PA66", path: "/lgchem", tag: "LG Chem" },
  { code: "LUMILOY", name: "LG Chem mPPO", path: "/lgchem", tag: "LG Chem" },
  { code: "LUCEL", name: "LG Chem POM", path: "/lgchem", tag: "LG Chem" },
  { code: "LUSEP", name: "LG Chem PPS / SPS", path: "/lgchem", tag: "LG Chem" },
  { code: "LUCON", name: "LG Chem İletken Compound", path: "/lgchem", tag: "LG Chem" },
  { code: "LUMIPLAS", name: "LG Chem Işık Difüzyon PC", path: "/lgchem", tag: "LG Chem" },
  { code: "KEYFLEX", name: "LG Chem TPE / TPO", path: "/lgchem", tag: "LG Chem" },

  // Basechem compound
  { code: "ABS Compound", name: "Basechem ABS Compound (FR/GF)", path: "/basechem", tag: "Basechem" },
  { code: "PC Compound", name: "Basechem PC Compound (FR/GF)", path: "/basechem", tag: "Basechem" },
  { code: "PBT Compound", name: "Basechem PBT Compound (FR/GF)", path: "/basechem", tag: "Basechem" },
  { code: "PC/ABS Compound", name: "Basechem PC/ABS Compound", path: "/basechem", tag: "Basechem" },
  { code: "PPO/PPE Compound", name: "Basechem PPO/PPE (Noryl eşdeğeri)", path: "/basechem", tag: "Basechem" },
  { code: "PA6/PA66 Compound", name: "Basechem Poliamid Compound", path: "/basechem", tag: "Basechem" },
];

/** Basit arama: kod veya isimde eşleşme. */
export function searchCatalog(query: string, limit = 8): CatalogItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = CATALOG.map((item) => {
    const code = item.code.toLowerCase();
    const name = item.name.toLowerCase();
    let score = -1;
    if (code === q) score = 100;
    else if (code.startsWith(q)) score = 80;
    else if (code.includes(q)) score = 60;
    else if (name.includes(q)) score = 40;
    return { item, score };
  }).filter((s) => s.score >= 0);
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.item);
}
