import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

/* ─────────────── DATA ─────────────── */

const engineeringPlastics = [
  {
    brand: "LUPOY",
    base: "PC (Polycarbonate)",
    color: "#1a3a5c",
    desc: "Yüksek darbe dayanımı, optik saydamlık ve alev geciktirici özellikli PC bileşiği.",
    highlights: ["Alev Geciktirici", "UV Kararlı", "Şeffaf Renkler", "Gıda Onaylı"],
    grades: ["LUPOY GN-1001P", "LUPOY GP-1000M", "LUPOY HF-1000M", "LUPOY FR-1000"],
    applications: ["Otomotiv", "Elektronik", "Tıbbi Cihazlar", "Beyaz Eşya"],
    featured: true,
  },
  {
    brand: "LUPOX / LUMAX",
    base: "PBT (Polybutylene Terephthalate)",
    color: "#2D6A4F",
    desc: "Üstün ısı ve kimyasal direnç, mükemmel elektriksel yalıtım özellikleriyle PBT bileşiği.",
    highlights: ["Isı Dirençli", "Kimyasal Dayanım", "Cam Elyaf Takviyeli", "Alev Geciktirici"],
    grades: ["LUPOX GP-1000", "LUPOX HV-1010", "LUMAX HP-1030", "LUPOX FR-1005"],
    applications: ["Elektrik/Elektronik", "Otomotiv Konektör", "Fiş & Soket", "Aydınlatma"],
    featured: true,
  },
  {
    brand: "LUPOL",
    base: "PP (Polypropylene)",
    color: "#40916C",
    desc: "Geliştirilmiş mekanik özellikler, hafiflik ve kimyasal direnç için özel PP bileşiği.",
    highlights: ["Hafif", "Kimyasal Dirençli", "Cam Elyaf", "Uzun Ömür"],
    grades: ["LUPOL GC-3000H", "LUPOL LF-3500", "LUPOL SF-3300"],
    applications: ["Otomotiv İç Döşeme", "Endüstriyel Parçalar", "Elektrik Aksamı"],
    featured: false,
  },
  {
    brand: "LUPOS",
    base: "Styrenics Compound",
    color: "#52B788",
    desc: "İyileştirilmiş ısı deformasyon direnciyle yüksek performanslı stiren bileşiği.",
    highlights: ["Isı Stabilitesi", "Kolay İşleme", "Parlak Yüzey"],
    grades: ["LUPOS SG-1000", "LUPOS HH-1010"],
    applications: ["Beyaz Eşya", "Elektronik Cihazlar", "Ev Aletleri"],
    featured: false,
  },
  {
    brand: "LUMID / LUXY",
    base: "PA6 / PA66 (Polyamide)",
    color: "#1B4332",
    desc: "Mükemmel ısı direnci ve mekanik dayanım için poliamid tabanlı bileşikler.",
    highlights: ["Yüksek Isı Direnci", "Cam Elyaf Takviyeli", "Aşınma Direnci", "Alev Geciktirici"],
    grades: ["LUMID GP-1000F", "LUMID HP-1020G", "LUXY SE-1000", "LUMID FR-1030"],
    applications: ["Otomotiv Motor Aksamı", "Elektrik Konektörler", "Endüstriyel"],
    featured: true,
  },
  {
    brand: "LUMILOY",
    base: "mPPO (Modified PPO/PPE)",
    color: "#0d2b1a",
    desc: "Boyutsal kararlılık, alev geciktiricilik ve elektriksel yalıtım özellikleri üstün mPPO malzeme. Noryl® eşdeğeri.",
    highlights: ["Boyutsal Kararlılık", "Alev Geciktirici", "Elektrik Yalıtımı", "Düşük Nem Absorbsiyonu"],
    grades: ["LUMILOY GN-1000", "LUMILOY FN-1010", "LUMILOY SX-1200"],
    applications: ["Ağ Ekipmanları", "Sunucu Kasaları", "Elektrik Panelleri", "Otomotiv"],
    featured: true,
  },
  {
    brand: "LUMIPLAS",
    base: "PC-based Light Diffusion",
    color: "#2D6A4F",
    desc: "Işık difüzyon fonksiyonlu PC bazlı özel malzeme. Otomotiv aydınlatma için ideal.",
    highlights: ["Işık Difüzyonu", "Yüksek Şeffaflık", "Optik Saydamlık", "UV Kararlı"],
    grades: ["LUMIPLAS LD-1000", "LUMIPLAS OP-1010"],
    applications: ["Otomotiv Farları", "LED Aydınlatma", "Sinyal Lambaları"],
    featured: false,
  },
  {
    brand: "LUCEL",
    base: "POM (Polyoxymethylene)",
    color: "#40916C",
    desc: "Düşük sürtünme ve yüksek aşınma direnci için POM bazlı bileşik.",
    highlights: ["Düşük Sürtünme", "Aşınma Direnci", "Yüksek Rijitlik", "Boyutsal Hassasiyet"],
    grades: ["LUCEL MH-2000", "LUCEL GF-2020", "LUCEL LF-2010"],
    applications: ["Dişliler", "Yataklar", "Otomotiv Mekanizmaları", "Kapı Sistemleri"],
    featured: false,
  },
  {
    brand: "LUCON",
    base: "Conductive Engineering Plastic",
    color: "#1B4332",
    desc: "Elektriksel iletkenlik özelliğine sahip özel mühendislik plastiği. ESD koruması için ideal.",
    highlights: ["Elektriksel İletkenlik", "ESD Koruma", "EMI Kalkanı"],
    grades: ["LUCON CR-1000", "LUCON EM-1020"],
    applications: ["Elektronik Ambalaj", "ESD Muhafazalar", "Yarı İletken Ekipmanlar"],
    featured: false,
  },
  {
    brand: "LUSEP",
    base: "PPS / SPS Compound",
    color: "#0d2b1a",
    desc: "Extreme sıcaklık ve kimyasallara karşı üstün direnç gösteren yüksek performanslı PPS/SPS bileşiği.",
    highlights: ["200°C+ Isı Direnci", "Kimyasal Direnci", "Alev Geciktirici", "Boyutsal Kararlılık"],
    grades: ["LUSEP SG-2000", "LUSEP GF-2030"],
    applications: ["Otomotiv Motor Parçaları", "Endüstriyel Pompalar", "Kimyasal Ekipmanlar"],
    featured: false,
  },
];

const elastomers = [
  {
    brand: "KEYFLEX BT",
    base: "TPE / Thermoplastic Elastomer",
    desc: "Kauçuk benzeri esneklik ve plastik işlenebilirliği bir arada sunan termoplastik elastomer.",
    highlights: ["Kauçuk Esnekliği", "Kolay İşleme", "Geri Dönüştürülebilir", "Geniş Sertlik Yelpazesi"],
    grades: ["KEYFLEX BT 990A", "KEYFLEX BT 101A", "KEYFLEX BT 701A"],
    applications: ["Otomotiv Contalar", "Kablolar", "Tutma Yüzeyleri", "Tıbbi Cihazlar"],
    featured: true,
  },
  {
    brand: "KEYFLEX TO",
    base: "TPO / Thermoplastic Polyolefin",
    desc: "Mükemmel UV ve ısı direnciyle dış mekan uygulamaları için özel TPO.",
    highlights: ["UV Kararlılığı", "Hava Koşullarına Dayanıklı", "Hafif", "Boyama Yapışması"],
    grades: ["KEYFLEX TO 300D", "KEYFLEX TO 500D"],
    applications: ["Otomotiv Dış Süslemeler", "Tampon Kaplamalar", "Dış Mekan Paneller"],
    featured: false,
  },
];

const poliolefinProducts = [
  {
    code: "ABS",
    fullName: "Akrilonitril Butadien Stiren",
    color: "#1B4332",
    desc: "Mükemmel darbe direnci ve yüzey kalitesiyle dünya genelinde en çok kullanılan mühendislik termoplastiği. LG Chem, global ABS pazarında No.1 üreticidir.",
    highlights: ["Yüksek Darbe Direnci", "İyi Yüzey Kalitesi", "Kolay İşleme", "UV & Alev Geciktirici Gradlar"],
    grades: [
      { grade: "HI121H", desc: "Genel amaç, yüksek darbe, enjeksiyon kalıplama", tags: ["Genel Amaç", "Enjeksiyon"] },
      { grade: "HI121", desc: "Yüksek darbe direnci, geniş uygulama yelpazesi", tags: ["Yüksek Darbe", "Enjeksiyon"] },
      { grade: "HI100H", desc: "Yüksek darbe, yüksek akış, ev aletleri", tags: ["Yüksek Akış"] },
      { grade: "AF312", desc: "Alev geciktirici V-0 sınıfı, TV & monitör gövdeleri", tags: ["Alev Geciktirici", "V-0"] },
      { grade: "AF360", desc: "Alev geciktirici, yüksek ısı direnci, elektronik", tags: ["Alev Geciktirici", "Yüksek Isı"] },
      { grade: "AF366A", desc: "V-0 @ 1.5mm, IT/OA cihazları", tags: ["V-0", "Elektronik"] },
      { grade: "TR558", desc: "Şeffaf ABS, optik saydamlık gerektiren uygulamalar", tags: ["Şeffaf"] },
      { grade: "GP-0411", desc: "Genel amaç enjeksiyon gradı, dengeli mekanik özellikler", tags: ["Genel Amaç"] },
    ],
    applications: ["Beyaz Eşya", "TV & Monitör Gövdeleri", "Otomotiv İç Aksamı", "Elektronik", "Oyuncak"],
  },
  {
    code: "PC",
    fullName: "Polikarbonat — LUPOY™",
    color: "#0d2b1a",
    desc: "LG Chem'in LUPOY markası altında sunulan yüksek performanslı PC ve PC alaşımları. Optik saydamlık, alev geciktiricilik ve mükemmel mekanik özellikler.",
    highlights: ["Optik Şeffaflık", "Yüksek Darbe Direnci", "Geniş Sıcaklık Aralığı", "PC/ABS Alaşımı Gradlar"],
    grades: [
      { grade: "LUPOY 1201-18", desc: "Genel amaç PC, ekstrüzyon & enjeksiyon", tags: ["Genel Amaç"] },
      { grade: "LUPOY 1301EP-30", desc: "Yüksek akışkanlık, ince cidarlı parçalar", tags: ["Yüksek Akış"] },
      { grade: "LUPOY 1303-10C", desc: "Dengeli mekanik özellikler, geniş uygulama", tags: ["Dengeli"] },
      { grade: "LUPOY 1303-07", desc: "Düşük viskozite, kompleks geometriler", tags: ["Düşük Viskozite"] },
      { grade: "LUPOY EF1006F", desc: "Şeffaf, halojen içermez alev geciktirici", tags: ["Şeffaf", "Halojen Free"] },
      { grade: "LUPOY UF1004C", desc: "Işık kılavuz panel uygulamaları (LGP)", tags: ["Optik", "LGP"] },
      { grade: "LUPOY GP5300", desc: "PC/ABS alaşımı, %30 cam elyaf takviyeli", tags: ["PC/ABS", "30% GF"] },
    ],
    applications: ["Otomotiv Farları", "LED Aydınlatma", "Medikal Cihazlar", "Elektronik Kasalar", "Optik Parçalar"],
  },
  {
    code: "ASA",
    fullName: "Akrilonitril Stiren Akrilat",
    color: "#2D6A4F",
    desc: "ABS'e benzer işlenebilirlik özellikleriyle üstün UV ve hava koşullarına dayanıklılık sağlar. Dış mekan uygulamalarının vazgeçilmez malzemesi.",
    highlights: ["Üstün UV Direnci", "Hava Koşullarına Dayanıklı", "Renk Kararlılığı", "Yüzey Kalitesi"],
    grades: [
      { grade: "LI941", desc: "Yüksek ısı, iyi hava koşullarına dayanım, otomotiv dış aksamı", tags: ["Yüksek Isı", "Otomotiv"] },
      { grade: "LI921NS", desc: "Genel amaç, antistatik, iyi hava direnci", tags: ["Antistatik", "Genel Amaç"] },
      { grade: "LI921", desc: "UV kararlı, ekstrüzyon & enjeksiyon kalıplama", tags: ["UV Kararlı"] },
    ],
    applications: ["Otomotiv Dış Aksamı", "Bahçe Ekipmanları", "Yapı Profilleri", "Dış Mekan Aydınlatma", "Çatı Sistemleri"],
  },
  {
    code: "PP",
    fullName: "Polipropilen — SEETEC™",
    color: "#40916C",
    desc: "LG Chem'in SEETEC markasıyla sunulan polipropilen çözümleri. Mükemmel çekme mukavemeti, hafiflik ve kimyasal direnç.",
    highlights: ["Hafif Yapı", "Kimyasal Direnç", "Geniş MFR Yelpazesi", "Homopolimer & Kopolimer"],
    grades: [
      { grade: "SEETEC H1500", desc: "Homopolimer, yüksek akış, dengeli mekanik, ev eşyası & oyuncak", tags: ["Homopolimer", "Yüksek Akış"] },
      { grade: "SEETEC H1501", desc: "Homopolimer, orta akış, genel enjeksiyon", tags: ["Homopolimer"] },
      { grade: "SEETEC M1500", desc: "Kopolimer, darbe modifiyeli, düşük sıcaklık direnci", tags: ["Kopolimer", "Darbe Modifiyeli"] },
      { grade: "SEETEC H7700", desc: "Spunbond lif gradı, hijyen & medikal", tags: ["Fiber", "Medikal"] },
      { grade: "SEETEC H7900", desc: "Melt-blown lif gradı, filtre & maske", tags: ["Melt-blown", "Filtre"] },
    ],
    applications: ["Otomotiv İç Döşeme", "Ambalaj", "Beyaz Eşya", "Medikal Lif", "Endüstriyel Parçalar"],
  },
];

/* ─────────────── PAGE ─────────────── */

export default function LGChemPage() {
  const locale = useLocale();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 60%, #2D6A4F 100%)"}}>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute top-32 right-32 w-56 h-56 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
                  <Star size={14} fill="currentColor" />
                  Türkiye Yetkili Distribütörü
                </div>
                <div className="flex items-center gap-4 mb-6">
                  {/* LG Chem logo badge */}
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-xl" style={{color: "#c8102e"}}>LG</span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-white">LG Chem</h1>
                    <p className="text-green-300 font-semibold">Ürün Portföyü</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
                  Buteo Petrokimya olarak <strong className="text-white">LG Chem'in tüm mühendislik plastikleri, petrokim ürünleri ve katkı maddelerini</strong> Türkiye'de satma hakkına sahibiz. 70'ten fazla ülkede faaliyet gösteren global kimya liderinin ürünlerini doğrudan temin edebilirsiniz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{backgroundColor: "#4CAF50"}}
                  >
                    Teklif Al <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://www.lgchem.com/product/petrochemicals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
                  >
                    LG Chem Web Sitesi <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[280px]">
                {[
                  { v: "70+", l: "Ülke" },
                  { v: "50+", l: "Yıl Deneyim" },
                  { v: "10", l: "Mühendislik Plastik Markası" },
                  { v: "100+", l: "Ürün Çeşidi" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-3xl font-black mb-1" style={{color: "#4CAF50"}}>{s.v}</div>
                    <div className="text-white/70 text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Plastics – Featured */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#f0fdf4"}}>
                  Öne Çıkan Ürünler
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Mühendislik Plastikleri — <span style={{color: "#1B4332"}}>LU Serisi</span>
                </h2>
                <p className="text-gray-500 mt-1">Buteo Petrokimya'nın özellikle pazarladığı yüksek katma değerli ürünler</p>
              </div>
              <Link href={`/${locale}/contact`} className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{backgroundColor: "#1B4332"}}>
                Teklif İste <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {engineeringPlastics.filter(p => p.featured).map((product) => (
                <div key={product.brand} className="group rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                  {/* Card header */}
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-6 translate-x-6" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative">
                      <div className="text-2xl font-black tracking-tight mb-1">{product.brand}</div>
                      <div className="text-xs opacity-75 font-medium">{product.base}</div>
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Grades */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Örnek Gradlar</div>
                      <div className="space-y-1">
                        {product.grades.slice(0, 3).map(g => (
                          <div key={g} className="text-sm font-mono font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: product.color}} />
                            {g}
                          </div>
                        ))}
                        {product.grades.length > 3 && (
                          <div className="text-xs text-gray-400">+{product.grades.length - 3} daha fazla grad...</div>
                        )}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Uygulama Alanları</div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.map(a => (
                          <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Non-featured products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {engineeringPlastics.filter(p => !p.featured).map((product) => (
                <div key={product.brand} className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-xs font-black flex-shrink-0" style={{backgroundColor: product.color}}>
                      {product.brand.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{product.brand}</div>
                      <div className="text-xs text-gray-400">{product.base}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{product.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {product.highlights.slice(0, 2).map(h => (
                      <span key={h} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elastomers */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#dcfce7"}}>
                Elastomerler
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                KEYFLEX <span style={{color: "#1B4332"}}>Serisi</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {elastomers.map(product => (
                <div key={product.brand} className="p-8 rounded-3xl text-white relative overflow-hidden" style={{background: "linear-gradient(135deg, #1B4332, #40916C)"}}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8" style={{backgroundColor: "#4CAF50"}} />
                  <div className="relative">
                    <div className="text-2xl font-black mb-1">{product.brand}</div>
                    <div className="text-sm text-white/70 mb-4">{product.base}</div>
                    <p className="text-white/85 text-sm leading-relaxed mb-5">{product.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/15 text-white/90">{h}</span>
                      ))}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">Gradlar</div>
                    <div className="flex flex-wrap gap-2">
                      {product.grades.map(g => (
                        <span key={g} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 text-white/80">{g}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABS / PC / ASA / PP Detailed Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#f0fdf4"}}>
                Standart Polimerler
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                ABS · PC · ASA · PP — <span style={{color: "#1B4332"}}>Ürün Gradları</span>
              </h2>
              <p className="text-gray-500">LG Chem'in geniş polimer portföyünden Türkiye'de temin edebileceğiniz ürünler</p>
            </div>

            <div className="space-y-10">
              {poliolefinProducts.map((product) => (
                <div key={product.code} className="rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                  {/* Product header */}
                  <div className="p-8 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-10 translate-x-10" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-4xl font-black tracking-tight mb-1">{product.code}</div>
                        <div className="text-white/75 text-sm font-medium">{product.fullName}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.highlights.map(h => (
                          <span key={h} className="text-xs px-3 py-1 rounded-full font-medium bg-white/15 text-white/90">{h}</span>
                        ))}
                      </div>
                    </div>
                    <p className="relative text-white/80 text-sm leading-relaxed mt-4 max-w-3xl">{product.desc}</p>
                  </div>

                  {/* Grades table */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Mevcut Gradlar</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">{product.grades.length} grad</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {product.grades.map((g) => (
                        <div key={g.grade} className="group p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer">
                          <div className="font-mono font-black text-base mb-1 group-hover:text-green-800 transition-colors" style={{color: product.color}}>
                            {g.grade}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed mb-2">{g.desc}</div>
                          <div className="flex flex-wrap gap-1">
                            {g.tags.map(tag => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Applications */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Uygulama Alanları:</span>
                      {product.applications.map(a => (
                        <span key={a} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{a}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why LG Chem */}
        <section className="py-20" style={{background: "linear-gradient(135deg, #f0fdf4, #dcfce7)"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Neden <span style={{color: "#1B4332"}}>LG Chem?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🌍", title: "Global Lider", desc: "70'ten fazla ülkede faaliyet gösteren dünya çapında tanınan güvenilir marka." },
                { icon: "🔬", title: "Güçlü AR-GE", desc: "Sürekli inovasyon ile yeni nesil malzemeler geliştiren teknoloji öncüsü." },
                { icon: "✅", title: "Sertifikalı Kalite", desc: "ISO uluslararası standartlarıyla güvence altına alınmış üretim süreçleri." },
                { icon: "🤝", title: "OEM Güvencesi", desc: "Hyundai, GM, Tesla, Samsung, LG gibi global devlerle stratejik iş birlikleri." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#0d2b1a"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
              <span className="font-black text-2xl" style={{color: "#c8102e"}}>LG</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              LG Chem Ürünleri İçin Teklif Alın
            </h2>
            <p className="text-white/70 mb-8">
              Mühendislik plastikleri, petrokim ürünleri veya katkı maddeleri için fiyat teklifi ve teknik datasheet talep edin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{backgroundColor: "#4CAF50"}}
              >
                Teklif İste <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+905421894340"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                +90 542 189 43 40
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
