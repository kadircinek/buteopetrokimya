import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

/* ─────────────── DATA ─────────────── */

const products = [
  {
    code: "ABS Compound",
    fullName: "Akrilonitril Butadien Stiren Bileşiği",
    color: "#1B4332",
    desc: "Mükemmel darbe direnci, üstün yüzey kalitesi ve kolay işlenebilirlik özellikleriyle elektronik ve otomotiv sektörünün vazgeçilmez mühendislik plastiği.",
    highlights: ["Yüksek Darbe Direnci", "Üstün Yüzey Kalitesi", "Kolay İşleme", "Renk Stabilitesi"],
    featured: true,
    variants: [
      { type: "Standart", tag: "Genel Amaç", desc: "Genel enjeksiyon uygulamaları için dengeli mekanik özellikler" },
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "UL-94 V-0 alev geciktirici sınıfı, elektronik kasalar" },
      { type: "Cam Elyaf 15%", tag: "GF Takviyeli", desc: "15% cam elyaf takviyeli, yüksek rijitlik ve boyutsal kararlılık" },
      { type: "Cam Elyaf 30%", tag: "Yüksek Rijitlik", desc: "30% cam elyaf takviyeli, yapısal uygulamalar için maksimum rijitlik" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Alev geciktirici ve cam elyaf kombinasyonu, IT ekipmanları" },
      { type: "Özel Renk", tag: "Custom Color", desc: "Müşteri renk kartına göre üretim, RAL & Pantone eşleştirme" },
    ],
    applications: ["TV & Monitör Gövdeleri", "IT Ekipmanları", "Beyaz Eşya", "Otomotiv İç Aksamı", "Oyuncak"],
  },
  {
    code: "PC Compound",
    fullName: "Polikarbonat Bileşiği",
    color: "#0d2b1a",
    desc: "Yüksek ısı direnci, optik saydamlık ve üstün darbe mukavemeti ile elektronik, otomotiv ve aydınlatma sektörlerinde kritik uygulamalar için tercih edilen performans malzemesi.",
    highlights: ["Yüksek Isı Direnci", "Optik Şeffaflık", "Üstün Darbe Direnci", "Boyutsal Kararlılık"],
    featured: true,
    variants: [
      { type: "Standart", tag: "Genel Amaç", desc: "Genel enjeksiyon ve ekstrüzyon uygulamaları" },
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "Halojen içermeyen alev geciktirici, çevre dostu" },
      { type: "Cam Elyaf 20%", tag: "GF Takviyeli", desc: "20% cam elyaf, yüksek sıcaklık ve mekanik dayanım" },
      { type: "Cam Elyaf 30%", tag: "Yüksek Rijitlik", desc: "30% cam elyaf, yapısal ve işlevsel parçalar" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Elektrikli araç şarj sistemleri, enerji depolama" },
      { type: "Özel Renk", tag: "Custom Color", desc: "Müşteri renk kartına göre eşleştirme" },
    ],
    applications: ["Otomotiv Farları", "Elektronik Kasalar", "Medikal Cihazlar", "LED Aydınlatma", "Güvenlik Ekipmanları"],
  },
  {
    code: "PBT",
    fullName: "Polibutilen Tereftalat Bileşiği",
    color: "#2D6A4F",
    desc: "Üstün elektriksel yalıtım, kimyasal direnç ve boyutsal kararlılığıyla elektrik-elektronik konektör ve fiş uygulamalarının olmazsa olmazı.",
    highlights: ["Elektriksel Yalıtım", "Kimyasal Direnç", "Boyutsal Kararlılık", "Hızlı Kristalleşme"],
    featured: true,
    variants: [
      { type: "Standart", tag: "Genel Amaç", desc: "Elektrik-elektronik için genel enjeksiyon uygulamaları" },
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "V-0 sınıfı, fiş, soket ve konektör uygulamaları" },
      { type: "Cam Elyaf 15%", tag: "GF Takviyeli", desc: "15% cam elyaf, orta rijitlik ve yüzey kalitesi dengesi" },
      { type: "Cam Elyaf 30%", tag: "Yüksek Rijitlik", desc: "30% cam elyaf, yüksek sıcaklık konektörler" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Aydınlatma armatürleri, güç dağıtım kutuları" },
      { type: "Özel Renk", tag: "Custom Color", desc: "Siyah ve doğal ton dışında özel renkler mevcut" },
    ],
    applications: ["Elektrik Konektörler", "Fiş & Soket", "Aydınlatma Armatürleri", "Oto Elektrik Sistemleri", "Güç Dağıtımı"],
  },
  {
    code: "PC/ABS",
    fullName: "Polikarbonat / ABS Alaşımı",
    color: "#40916C",
    desc: "PC'nin mükemmel ısı ve darbe direncini ABS'in kolay işlenebilirliği ve yüzey kalitesiyle birleştiren ideal mühendislik plastiği alaşımı.",
    highlights: ["PC + ABS Avantajı", "Yüksek Isı Direnci", "Darbe Tokluğu", "Kolay Boyama"],
    featured: false,
    variants: [
      { type: "Standart", tag: "Genel Amaç", desc: "Otomotiv ve elektronik genel uygulamalar" },
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "IT & OA cihaz gövdeleri, V-0 sertifikası" },
      { type: "Cam Elyaf 20%", tag: "GF Takviyeli", desc: "Yapısal otomotiv iç aksamı, gösterge paneli" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Karmaşık iş makinesi ekipmanları" },
      { type: "Özel Renk", tag: "Custom Color", desc: "OEM renk eşleştirme kapasitesi" },
    ],
    applications: ["Otomotiv Gösterge Paneli", "Laptop & Tablet Gövdeleri", "Printer Kasaları", "Elektrikli Araç Parçaları"],
  },
  {
    code: "PPO/PPE (Norly)",
    fullName: "Modifiye Polifenilen Eter Bileşiği",
    color: "#1B4332",
    desc: "Noryl® eşdeğeri mPPO bileşiği; olağanüstü boyutsal kararlılık, düşük nem absorbsiyonu ve üstün alev geciktiricilik ile IT altyapı ekipmanlarında tercih edilen malzeme.",
    highlights: ["Boyutsal Kararlılık", "Düşük Nem Absorbsiyonu", "Alev Geciktirici", "Mükemmel Elektrik Yalıtımı"],
    featured: false,
    variants: [
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "Sunucu ve ağ ekipmanı kasaları" },
      { type: "Cam Elyaf 20%", tag: "GF Takviyeli", desc: "20% cam elyaf, elektrik panoları" },
      { type: "Cam Elyaf 30%", tag: "Yüksek Rijitlik", desc: "Yüksek gerilim ekipmanları, yüksek boyutsal hassasiyet" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Enerji iletim ekipmanları, akıllı sayaç" },
    ],
    applications: ["Sunucu & Network Ekipmanları", "Elektrik Panoları", "Akıllı Sayaçlar", "Enerji Depolama", "Otomotiv"],
  },
  {
    code: "PA6 / PA66",
    fullName: "Poliamid (Naylon) Bileşiği",
    color: "#0d2b1a",
    desc: "Üstün ısı direnci, mükemmel mekanik özellikleri ve yağ/kimyasal direnciyle motor aksamı ve yüksek performans gerektiren yapısal parçalar için ideal mühendislik plastiği.",
    highlights: ["Yüksek Isı Direnci", "Mekanik Dayanım", "Kimyasal Direnç", "Aşınma Direnci"],
    featured: false,
    variants: [
      { type: "Standart", tag: "PA6 / PA66", desc: "Genel mekanik uygulamalar, enjeksiyon kalıplama" },
      { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "Elektrik bağlantı elemanları, V-0 sınıfı" },
      { type: "Cam Elyaf 15%", tag: "GF Takviyeli", desc: "15% cam elyaf, dengeli mekanik ve yüzey" },
      { type: "Cam Elyaf 30%", tag: "Yüksek Mukavemet", desc: "30% cam elyaf, yapısal motor aksamı" },
      { type: "Cam Elyaf 50%", tag: "Maksimum Rijitlik", desc: "50% cam elyaf, ekstrem mekanik gereksinimler" },
      { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Enerji yönetim sistemleri, elektrik konektörleri" },
    ],
    applications: ["Otomotiv Motor Aksamı", "Elektrik Konektörleri", "Endüstriyel Dişliler", "Boru & Bağlantı Elemanları", "Spor Ekipmanları"],
  },
];

/* ─────────────── PAGE ─────────────── */

export default function BasechemPage() {
  const locale = useLocale();

  const featuredProducts = products.filter(p => p.featured);
  const otherProducts = products.filter(p => !p.featured);

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
                  {/* Basechem logo badge */}
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-sm leading-tight text-center" style={{color: "#1B4332"}}>BASE<br/>CHEM</span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-white">Basechem</h1>
                    <p className="text-green-300 font-semibold">Ürün Portföyü</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
                  Buteo Petrokimya olarak Kore'nin köklü mühendislik plastiği üreticisi <strong className="text-white">Basechem'in tüm compound ürünlerini</strong> Türkiye'de sunuyoruz. Samsung, LG ve Hyundai'ye tedarik ettiği kanıtlanmış kaliteyi işletmenize getiriyoruz.
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
                    href="https://basechem.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
                  >
                    Basechem Web Sitesi <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[280px]">
                {[
                  { v: "30+", l: "Yıl Deneyim" },
                  { v: "3", l: "Global OEM Müşterisi" },
                  { v: "6", l: "Ürün Ailesi" },
                  { v: "UL/RoHS", l: "Uluslararası Sertifika" },
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

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#f0fdf4"}}>
                  Öne Çıkan Ürünler
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  Compound Ürün Portföyü — <span style={{color: "#1B4332"}}>Öne Çıkanlar</span>
                </h2>
                <p className="text-gray-500 mt-1">Basechem'in 30 yıllık birikimini yansıtan yüksek performanslı mühendislik plastikleri</p>
              </div>
              <Link href={`/${locale}/contact`} className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{backgroundColor: "#1B4332"}}>
                Teklif İste <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <div key={product.code} className="group rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                  {/* Card header */}
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-6 translate-x-6" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative">
                      <div className="text-2xl font-black tracking-tight mb-1">{product.code}</div>
                      <div className="text-xs opacity-75 font-medium">{product.fullName}</div>
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

                    {/* Variants */}
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Mevcut Varyantlar</div>
                      <div className="space-y-1">
                        {product.variants.slice(0, 3).map(v => (
                          <div key={v.type} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: product.color}} />
                            {v.type}
                          </div>
                        ))}
                        {product.variants.length > 3 && (
                          <div className="text-xs text-gray-400">+{product.variants.length - 3} daha fazla varyant...</div>
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

            {/* Other products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProducts.map((product) => (
                <div key={product.code} className="p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center text-xs font-black flex-shrink-0" style={{backgroundColor: product.color}}>
                      {product.code.split("/")[0].trim().slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{product.code}</div>
                      <div className="text-xs text-gray-400">{product.fullName}</div>
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

        {/* Product Variants Detail */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-3 py-1.5 rounded-full" style={{color: "#1B4332", backgroundColor: "#dcfce7"}}>
                Tüm Ürünler
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Compound Varyantları — <span style={{color: "#1B4332"}}>Detaylı Görünüm</span>
              </h2>
              <p className="text-gray-500">Her ürün ailesi için mevcut alev geciktirici, cam elyaf takviyeli ve özel renk varyantları</p>
            </div>

            <div className="space-y-8">
              {products.map((product) => (
                <div key={product.code} className="rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-all">
                  {/* Product header */}
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-10 translate-x-10" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-3xl font-black tracking-tight mb-1">{product.code}</div>
                        <div className="text-white/75 text-sm font-medium">{product.fullName}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.highlights.slice(0, 3).map(h => (
                          <span key={h} className="text-xs px-3 py-1 rounded-full font-medium bg-white/15 text-white/90">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Variants grid */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Mevcut Varyantlar</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">{product.variants.length} varyant</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      {product.variants.map((v) => (
                        <div key={v.type} className="group p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="font-bold text-sm text-gray-900 group-hover:text-green-800 transition-colors">{v.type}</div>
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                              {v.tag}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed">{v.desc}</div>
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

        {/* Certifications */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Uluslararası Sertifikasyon</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "UL Listed", desc: "UL Güvenlik Sertifikası", icon: "🛡️" },
                { label: "RoHS Compliant", desc: "Tehlikeli Madde Direktifi", icon: "🌿" },
                { label: "Alev Geciktirici", desc: "UL-94 V-0 / 5VA Sınıfı", icon: "🔥" },
                { label: "Custom Color", desc: "RAL & Pantone Eşleştirme", icon: "🎨" },
              ].map((cert) => (
                <div key={cert.label} className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <span className="text-2xl">{cert.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{cert.label}</div>
                    <div className="text-xs text-gray-400">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Basechem */}
        <section className="py-20" style={{background: "linear-gradient(135deg, #f0fdf4, #dcfce7)"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Neden <span style={{color: "#1B4332"}}>Basechem?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏭", title: "30+ Yıl Deneyim", desc: "30 yılı aşkın üretim deneyimiyle Kore'nin köklü mühendislik plastiği compound üreticilerinden." },
                { icon: "🤝", title: "OEM Güvencesi", desc: "Samsung, LG ve Hyundai gibi global devlere doğrudan tedarik eden sektörün kanıtlanmış ismi." },
                { icon: "🔬", title: "Katı Kalite Yönetimi", desc: "Üretim sürecinde sıkı kalite kontrol sistemleriyle her partide tutarlı ve güvenilir ürün." },
                { icon: "🎨", title: "Esneklik & Özelleştirme", desc: "Cam elyaf oranı, renk, alev geciktirici seviyesi — müşteriye özel formülasyon geliştirme kapasitesi." },
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

        {/* OEM References */}
        <section className="py-16" style={{background: "#0d2b1a"}}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">OEM Referansları</p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              {["Samsung", "LG Electronics", "Hyundai"].map((brand) => (
                <div key={brand} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-white font-black text-lg">{brand}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Kore'nin en büyük üreticilerine yıllardır tedarik eden Basechem'in compound ürünleri, global OEM standartlarını karşılayan güvenceli kalitede.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#1B4332"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
              <span className="font-black text-xs leading-tight text-center" style={{color: "#1B4332"}}>BASE<br/>CHEM</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Basechem Ürünleri İçin Teklif Alın
            </h2>
            <p className="text-white/70 mb-8">
              ABS, PC, PBT, PC/ABS, PPO/PPE veya PA ürünleri için fiyat teklifi ve teknik datasheet talep edin.
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
