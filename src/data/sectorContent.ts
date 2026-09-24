/**
 * Sektör detay sayfası içerikleri.
 *
 * DÜRÜSTLÜK KURALI: Metinler yalnızca sektörün genel kabul görmüş malzeme
 * ihtiyaçlarını ve Buteo'nun gerçek portföyünü anlatır. Referans müşteri,
 * proje adı veya sayısal teknik değer uydurulmaz.
 */

export type SectorContent = {
  slug: string;
  /** messages/*.json içindeki sectors.sN anahtar numarası. */
  n: number;
  color: string;
  /** İlgili LG Chem marka slug'ları — iç linkleme. */
  brands: string[];
  /** İlgili Basechem ürün slug'ları — iç linkleme. */
  basechem: string[];
};

/** Sektör tanımları — metinler i18n'de, yapısal veri burada. */
export const SECTORS: SectorContent[] = [
  { slug: "otomotiv",              n: 1,  color: "#1a3a5c", brands: ["lupoy", "lupox-lumax", "lumid-luxy", "lupol", "lucel", "keyflex-bt", "keyflex-to", "lusep"], basechem: ["abs-compound", "pc-abs", "pbt", "pa6-pa66"] },
  { slug: "elektrik-elektronik",   n: 2,  color: "#1B4332", brands: ["lumiloy", "lupox-lumax", "lupoy", "lusep", "lucon"], basechem: ["abs-compound", "pc-compound", "pbt", "ppo-ppe"] },
  { slug: "beyaz-esya",            n: 3,  color: "#2D6A4F", brands: ["lupos", "lupoy", "lupox-lumax", "lucel"], basechem: ["abs-compound", "pc-abs", "pbt"] },
  { slug: "insaat-altyapi",        n: 4,  color: "#40916C", brands: ["lupol", "lupoy", "lumiloy"], basechem: ["pc-compound", "abs-compound"] },
  { slug: "medikal-saglik",        n: 5,  color: "#52B788", brands: ["lupoy", "lucel", "lumid-luxy"], basechem: ["pc-compound", "abs-compound"] },
  { slug: "mobilya-ev-gerecleri",  n: 6,  color: "#1B4332", brands: ["lupos", "lucel", "lupol"], basechem: ["abs-compound"] },
  { slug: "savunma-havacilik",     n: 7,  color: "#0d2b1a", brands: ["lusep", "lumid-luxy", "lumiloy", "lupoy"], basechem: ["pa6-pa66", "ppo-ppe"] },
  { slug: "tarim-sulama",          n: 8,  color: "#2D6A4F", brands: ["lupol", "lumid-luxy", "lucel"], basechem: ["pa6-pa66"] },
  { slug: "denizcilik-ulasim",     n: 9,  color: "#1a3a5c", brands: ["keyflex-to", "lupol", "lumid-luxy", "lupoy"], basechem: ["abs-compound", "pa6-pa66"] },
  { slug: "oyuncak-hobi",          n: 10, color: "#40916C", brands: ["lupos", "lupol"], basechem: ["abs-compound"] },
  { slug: "enerji-aydinlatma",     n: 11, color: "#0d2b1a", brands: ["lumiplas", "lupoy", "lumiloy", "lupox-lumax"], basechem: ["pc-compound", "ppo-ppe"] },
];

export const ALL_SECTOR_SLUGS = SECTORS.map((s) => s.slug);

export function getSector(slug: string): SectorContent | null {
  return SECTORS.find((s) => s.slug === slug) ?? null;
}
