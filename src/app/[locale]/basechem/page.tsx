import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

/* ─────────────── LOCALE-BASED DATA ─────────────── */

function getBasechemProducts(locale: string) {
  const data: Record<string, {
    fullName: string;
    desc: string;
    highlights: string[];
    variants: { type: string; tag: string; desc: string }[];
    applications: string[];
  }[]> = {
    tr: [
      {
        fullName: "Akrilonitril Butadien Stiren Bileşiği",
        desc: "Mükemmel darbe direnci, üstün yüzey kalitesi ve kolay işlenebilirlik özellikleriyle elektronik ve otomotiv sektörünün vazgeçilmez mühendislik plastiği.",
        highlights: ["Yüksek Darbe Direnci", "Üstün Yüzey Kalitesi", "Kolay İşleme", "Renk Stabilitesi"],
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
        fullName: "Polikarbonat Bileşiği",
        desc: "Yüksek ısı direnci, optik saydamlık ve üstün darbe mukavemeti ile elektronik, otomotiv ve aydınlatma sektörlerinde kritik uygulamalar için tercih edilen performans malzemesi.",
        highlights: ["Yüksek Isı Direnci", "Optik Şeffaflık", "Üstün Darbe Direnci", "Boyutsal Kararlılık"],
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
        fullName: "Polibutilen Tereftalat Bileşiği",
        desc: "Üstün elektriksel yalıtım, kimyasal direnç ve boyutsal kararlılığıyla elektrik-elektronik konektör ve fiş uygulamalarının olmazsa olmazı.",
        highlights: ["Elektriksel Yalıtım", "Kimyasal Direnç", "Boyutsal Kararlılık", "Hızlı Kristalleşme"],
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
        fullName: "Polikarbonat / ABS Alaşımı",
        desc: "PC'nin mükemmel ısı ve darbe direncini ABS'in kolay işlenebilirliği ve yüzey kalitesiyle birleştiren ideal mühendislik plastiği alaşımı.",
        highlights: ["PC + ABS Avantajı", "Yüksek Isı Direnci", "Darbe Tokluğu", "Kolay Boyama"],
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
        fullName: "Modifiye Polifenilen Eter Bileşiği",
        desc: "Noryl® eşdeğeri mPPO bileşiği; olağanüstü boyutsal kararlılık, düşük nem absorbsiyonu ve üstün alev geciktiricilik ile IT altyapı ekipmanlarında tercih edilen malzeme.",
        highlights: ["Boyutsal Kararlılık", "Düşük Nem Absorbsiyonu", "Alev Geciktirici", "Mükemmel Elektrik Yalıtımı"],
        variants: [
          { type: "Alev Geciktirici (FR)", tag: "UL-94 V-0", desc: "Sunucu ve ağ ekipmanı kasaları" },
          { type: "Cam Elyaf 20%", tag: "GF Takviyeli", desc: "20% cam elyaf, elektrik panoları" },
          { type: "Cam Elyaf 30%", tag: "Yüksek Rijitlik", desc: "Yüksek gerilim ekipmanları, yüksek boyutsal hassasiyet" },
          { type: "FR + Cam Elyaf", tag: "V-0 + GF", desc: "Enerji iletim ekipmanları, akıllı sayaç" },
        ],
        applications: ["Sunucu & Network Ekipmanları", "Elektrik Panoları", "Akıllı Sayaçlar", "Enerji Depolama", "Otomotiv"],
      },
      {
        fullName: "Poliamid (Naylon) Bileşiği",
        desc: "Üstün ısı direnci, mükemmel mekanik özellikleri ve yağ/kimyasal direnciyle motor aksamı ve yüksek performans gerektiren yapısal parçalar için ideal mühendislik plastiği.",
        highlights: ["Yüksek Isı Direnci", "Mekanik Dayanım", "Kimyasal Direnç", "Aşınma Direnci"],
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
    ],
    en: [
      {
        fullName: "Acrylonitrile Butadiene Styrene Compound",
        desc: "The indispensable engineering plastic of the electronics and automotive sectors with excellent impact resistance, superior surface quality and easy processability.",
        highlights: ["High Impact Resistance", "Superior Surface Quality", "Easy Processing", "Color Stability"],
        variants: [
          { type: "Standard", tag: "General Purpose", desc: "Balanced mechanical properties for general injection applications" },
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "UL-94 V-0 flame retardant grade, electronic housings" },
          { type: "Glass Fiber 15%", tag: "GF Reinforced", desc: "15% glass fiber reinforced, high rigidity and dimensional stability" },
          { type: "Glass Fiber 30%", tag: "High Rigidity", desc: "30% glass fiber reinforced, maximum rigidity for structural applications" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Flame retardant and glass fiber combination for IT equipment" },
          { type: "Custom Color", tag: "Custom Color", desc: "Production per customer color card, RAL & Pantone matching" },
        ],
        applications: ["TV & Monitor Housings", "IT Equipment", "White Goods", "Automotive Interior", "Toys"],
      },
      {
        fullName: "Polycarbonate Compound",
        desc: "The preferred performance material for critical applications in electronics, automotive and lighting sectors with high heat resistance, optical transparency and superior impact strength.",
        highlights: ["High Heat Resistance", "Optical Transparency", "Superior Impact Resistance", "Dimensional Stability"],
        variants: [
          { type: "Standard", tag: "General Purpose", desc: "General injection and extrusion applications" },
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "Halogen-free flame retardant, eco-friendly" },
          { type: "Glass Fiber 20%", tag: "GF Reinforced", desc: "20% glass fiber, high temperature and mechanical strength" },
          { type: "Glass Fiber 30%", tag: "High Rigidity", desc: "30% glass fiber for structural and functional parts" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Electric vehicle charging systems, energy storage" },
          { type: "Custom Color", tag: "Custom Color", desc: "Matching per customer color card" },
        ],
        applications: ["Automotive Headlamps", "Electronic Housings", "Medical Devices", "LED Lighting", "Safety Equipment"],
      },
      {
        fullName: "Polybutylene Terephthalate Compound",
        desc: "The essential material for electrical-electronic connector and socket applications with superior electrical insulation, chemical resistance and dimensional stability.",
        highlights: ["Electrical Insulation", "Chemical Resistance", "Dimensional Stability", "Fast Crystallization"],
        variants: [
          { type: "Standard", tag: "General Purpose", desc: "General injection applications for electrical-electronics" },
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "V-0 grade, plug, socket and connector applications" },
          { type: "Glass Fiber 15%", tag: "GF Reinforced", desc: "15% glass fiber, balance of medium rigidity and surface quality" },
          { type: "Glass Fiber 30%", tag: "High Rigidity", desc: "30% glass fiber, high temperature connectors" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Lighting fixtures, power distribution boxes" },
          { type: "Custom Color", tag: "Custom Color", desc: "Custom colors available beyond black and natural tone" },
        ],
        applications: ["Electrical Connectors", "Plugs & Sockets", "Lighting Fixtures", "Automotive Electrical Systems", "Power Distribution"],
      },
      {
        fullName: "Polycarbonate / ABS Alloy",
        desc: "The ideal engineering plastic alloy combining PC's excellent heat and impact resistance with ABS's easy processability and surface quality.",
        highlights: ["PC + ABS Advantage", "High Heat Resistance", "Impact Toughness", "Easy Painting"],
        variants: [
          { type: "Standard", tag: "General Purpose", desc: "General applications for automotive and electronics" },
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "IT & OA device housings, V-0 certified" },
          { type: "Glass Fiber 20%", tag: "GF Reinforced", desc: "Structural automotive interior, dashboard" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Complex industrial machinery equipment" },
          { type: "Custom Color", tag: "Custom Color", desc: "OEM color matching capacity" },
        ],
        applications: ["Automotive Dashboard", "Laptop & Tablet Housings", "Printer Casings", "Electric Vehicle Parts"],
      },
      {
        fullName: "Modified Polyphenylene Ether Compound",
        desc: "Noryl® equivalent mPPO compound; the preferred material for IT infrastructure equipment with outstanding dimensional stability, low moisture absorption and superior flame retardancy.",
        highlights: ["Dimensional Stability", "Low Moisture Absorption", "Flame Retardant", "Excellent Electrical Insulation"],
        variants: [
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "Server and network equipment housings" },
          { type: "Glass Fiber 20%", tag: "GF Reinforced", desc: "20% glass fiber, electrical panels" },
          { type: "Glass Fiber 30%", tag: "High Rigidity", desc: "High voltage equipment, high dimensional precision" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Energy transmission equipment, smart meters" },
        ],
        applications: ["Server & Network Equipment", "Electrical Panels", "Smart Meters", "Energy Storage", "Automotive"],
      },
      {
        fullName: "Polyamide (Nylon) Compound",
        desc: "The ideal engineering plastic for engine parts and structural components requiring high performance with superior heat resistance, excellent mechanical properties and oil/chemical resistance.",
        highlights: ["High Heat Resistance", "Mechanical Strength", "Chemical Resistance", "Wear Resistance"],
        variants: [
          { type: "Standard", tag: "PA6 / PA66", desc: "General mechanical applications, injection molding" },
          { type: "Flame Retardant (FR)", tag: "UL-94 V-0", desc: "Electrical connection elements, V-0 grade" },
          { type: "Glass Fiber 15%", tag: "GF Reinforced", desc: "15% glass fiber, balanced mechanical and surface" },
          { type: "Glass Fiber 30%", tag: "High Strength", desc: "30% glass fiber, structural engine parts" },
          { type: "Glass Fiber 50%", tag: "Maximum Rigidity", desc: "50% glass fiber, extreme mechanical requirements" },
          { type: "FR + Glass Fiber", tag: "V-0 + GF", desc: "Energy management systems, electrical connectors" },
        ],
        applications: ["Automotive Engine Parts", "Electrical Connectors", "Industrial Gears", "Pipes & Fittings", "Sports Equipment"],
      },
    ],
    ro: [
      {
        fullName: "Compus Acrilonitril Butadienă Stiren",
        desc: "Plasticul tehnic indispensabil al sectoarelor electronice și auto, cu rezistență excelentă la impact, calitate superioară a suprafeței și ușor de prelucrat.",
        highlights: ["Rezistență Ridicată la Impact", "Calitate Superioară Suprafață", "Procesare Ușoară", "Stabilitate Cromatică"],
        variants: [
          { type: "Standard", tag: "Uz General", desc: "Proprietăți mecanice echilibrate pentru aplicații generale de injecție" },
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Clasă retardantă UL-94 V-0, carcase electronice" },
          { type: "Fibră de Sticlă 15%", tag: "GF Armat", desc: "15% fibră de sticlă, rigiditate ridicată și stabilitate dimensională" },
          { type: "Fibră de Sticlă 30%", tag: "Rigiditate Înaltă", desc: "30% fibră de sticlă, rigiditate maximă pentru aplicații structurale" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Combinație retardant flacără și fibră de sticlă pentru echipamente IT" },
          { type: "Culoare Personalizată", tag: "Custom Color", desc: "Producție conform cartelei de culori a clientului, potrivire RAL & Pantone" },
        ],
        applications: ["Carcase TV & Monitor", "Echipamente IT", "Electrocasnice", "Interior Auto", "Jucării"],
      },
      {
        fullName: "Compus Policarbonat",
        desc: "Materialul preferat pentru aplicații critice în sectoarele electronice, auto și de iluminat, cu rezistență ridicată la căldură, transparență optică și rezistență superioară la impact.",
        highlights: ["Rezistență Ridicată la Căldură", "Transparență Optică", "Rezistență Superioară la Impact", "Stabilitate Dimensională"],
        variants: [
          { type: "Standard", tag: "Uz General", desc: "Aplicații generale de injecție și extrudare" },
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Retardant flacără fără halogen, eco-friendly" },
          { type: "Fibră de Sticlă 20%", tag: "GF Armat", desc: "20% fibră de sticlă, temperatură ridicată și rezistență mecanică" },
          { type: "Fibră de Sticlă 30%", tag: "Rigiditate Înaltă", desc: "30% fibră de sticlă pentru piese structurale și funcționale" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Sisteme de încărcare vehicule electrice, stocare energie" },
          { type: "Culoare Personalizată", tag: "Custom Color", desc: "Potrivire conform cartelei de culori a clientului" },
        ],
        applications: ["Faruri Auto", "Carcase Electronice", "Dispozitive Medicale", "Iluminat LED", "Echipamente de Siguranță"],
      },
      {
        fullName: "Compus Polibutilenă Tereftalat",
        desc: "Materialul esențial pentru aplicații de conectori și prize electrice-electronice, cu izolație electrică superioară, rezistență chimică și stabilitate dimensională.",
        highlights: ["Izolație Electrică", "Rezistență Chimică", "Stabilitate Dimensională", "Cristalizare Rapidă"],
        variants: [
          { type: "Standard", tag: "Uz General", desc: "Aplicații generale de injecție pentru electrice-electronice" },
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Clasă V-0, aplicații de ștechere, prize și conectori" },
          { type: "Fibră de Sticlă 15%", tag: "GF Armat", desc: "15% fibră de sticlă, echilibru rigiditate medie și calitate suprafață" },
          { type: "Fibră de Sticlă 30%", tag: "Rigiditate Înaltă", desc: "30% fibră de sticlă, conectori la temperaturi ridicate" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Corpuri de iluminat, cutii de distribuție energie" },
          { type: "Culoare Personalizată", tag: "Custom Color", desc: "Culori personalizate disponibile dincolo de negru și ton natural" },
        ],
        applications: ["Conectori Electrici", "Ștechere & Prize", "Corpuri de Iluminat", "Sisteme Electrice Auto", "Distribuție Energie"],
      },
      {
        fullName: "Aliaj Policarbonat / ABS",
        desc: "Aliajul ideal de plastic tehnic care combină excelenta rezistență la căldură și impact a PC-ului cu ușurința de prelucrare și calitatea suprafeței ABS.",
        highlights: ["Avantaj PC + ABS", "Rezistență Ridicată la Căldură", "Tenacitate la Impact", "Vopsire Ușoară"],
        variants: [
          { type: "Standard", tag: "Uz General", desc: "Aplicații generale pentru auto și electronice" },
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Carcase dispozitive IT & OA, certificat V-0" },
          { type: "Fibră de Sticlă 20%", tag: "GF Armat", desc: "Interior auto structural, bord" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Echipamente complexe pentru mașini industriale" },
          { type: "Culoare Personalizată", tag: "Custom Color", desc: "Capacitate de potrivire culori OEM" },
        ],
        applications: ["Bord Auto", "Carcase Laptop & Tabletă", "Carcase Imprimante", "Piese Vehicule Electrice"],
      },
      {
        fullName: "Compus Polifenilenă Eter Modificat",
        desc: "Compus mPPO echivalent Noryl®; materialul preferat pentru echipamentele de infrastructură IT cu stabilitate dimensională remarcabilă, absorbție redusă a umidității și ignifugare superioară.",
        highlights: ["Stabilitate Dimensională", "Absorbție Redusă Umiditate", "Retardant Flacără", "Izolație Electrică Excelentă"],
        variants: [
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Carcase servere și echipamente de rețea" },
          { type: "Fibră de Sticlă 20%", tag: "GF Armat", desc: "20% fibră de sticlă, panouri electrice" },
          { type: "Fibră de Sticlă 30%", tag: "Rigiditate Înaltă", desc: "Echipamente de înaltă tensiune, precizie dimensională ridicată" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Echipamente de transmisie energie, contoare inteligente" },
        ],
        applications: ["Servere & Echipamente de Rețea", "Panouri Electrice", "Contoare Inteligente", "Stocare Energie", "Auto"],
      },
      {
        fullName: "Compus Poliamidă (Nylon)",
        desc: "Plasticul tehnic ideal pentru piese de motor și componente structurale care necesită performanță ridicată, cu rezistență superioară la căldură, proprietăți mecanice excelente și rezistență la ulei/chimicale.",
        highlights: ["Rezistență Ridicată la Căldură", "Rezistență Mecanică", "Rezistență Chimică", "Rezistență la Uzură"],
        variants: [
          { type: "Standard", tag: "PA6 / PA66", desc: "Aplicații mecanice generale, turnare prin injecție" },
          { type: "Retardant Flacără (FR)", tag: "UL-94 V-0", desc: "Elemente de conexiune electrică, clasă V-0" },
          { type: "Fibră de Sticlă 15%", tag: "GF Armat", desc: "15% fibră de sticlă, echilibru mecanic și suprafață" },
          { type: "Fibră de Sticlă 30%", tag: "Rezistență Ridicată", desc: "30% fibră de sticlă, piese de motor structurale" },
          { type: "Fibră de Sticlă 50%", tag: "Rigiditate Maximă", desc: "50% fibră de sticlă, cerințe mecanice extreme" },
          { type: "FR + Fibră de Sticlă", tag: "V-0 + GF", desc: "Sisteme de management energie, conectori electrici" },
        ],
        applications: ["Piese Motor Auto", "Conectori Electrici", "Angrenaje Industriale", "Țevi & Fitinguri", "Echipamente Sportive"],
      },
    ],
  };
  return data[locale] || data["en"];
}

const productsMeta = [
  { code: "ABS Compound", color: "#1B4332", featured: true },
  { code: "PC Compound",  color: "#0d2b1a", featured: true },
  { code: "PBT",          color: "#2D6A4F", featured: true },
  { code: "PC/ABS",       color: "#40916C", featured: false },
  { code: "PPO/PPE (Norly)", color: "#1B4332", featured: false },
  { code: "PA6 / PA66",   color: "#0d2b1a", featured: false },
];

/* ─────────────── PAGE ─────────────── */

export default function BasechemPage() {
  const locale = useLocale();
  const t = useTranslations("basechem");

  const localeData = getBasechemProducts(locale);
  const products = productsMeta.map((meta, i) => ({ ...meta, ...localeData[i] }));

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
                  {t("heroDistributorBadge")}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-sm leading-tight text-center" style={{color: "#1B4332"}}>BASE<br/>CHEM</span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-white">Basechem</h1>
                    <p className="text-green-300 font-semibold">{t("heroPortfolio")}</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
                  {t("heroDesc")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{backgroundColor: "#4CAF50"}}
                  >
                    {t("heroCta")} <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://basechem.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
                  >
                    {t("heroWebsite")} <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[280px]">
                {[
                  { v: "30+", l: t("stat1Label") },
                  { v: "3",   l: t("stat2Label") },
                  { v: "6",   l: t("stat3Label") },
                  { v: "UL/RoHS", l: t("stat4Label") },
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
                  {t("featuredBadge")}
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("featuredTitle")} — <span style={{color: "#1B4332"}}>{t("featuredHighlight")}</span>
                </h2>
                <p className="text-gray-500 mt-1">{t("featuredSubtitle")}</p>
              </div>
              <Link href={`/${locale}/contact`} className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{backgroundColor: "#1B4332"}}>
                {t("requestQuote")} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <div key={product.code} className="group rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-6 translate-x-6" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative">
                      <div className="text-2xl font-black tracking-tight mb-1">{product.code}</div>
                      <div className="text-xs opacity-75 font-medium">{product.fullName}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("availableVariants")}</div>
                      <div className="space-y-1">
                        {product.variants.slice(0, 3).map(v => (
                          <div key={v.type} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: product.color}} />
                            {v.type}
                          </div>
                        ))}
                        {product.variants.length > 3 && (
                          <div className="text-xs text-gray-400">+{product.variants.length - 3} {t("moreVariants")}</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("appAreas")}</div>
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
                {t("allBadge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {t("allTitle")} — <span style={{color: "#1B4332"}}>{t("allHighlight")}</span>
              </h2>
              <p className="text-gray-500">{t("allDesc")}</p>
            </div>

            <div className="space-y-8">
              {products.map((product) => (
                <div key={product.code} className="rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-all">
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

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("availableVariants")}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">{product.variants.length} {t("variantUnit")}</span>
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

                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">{t("appAreasColon")}</span>
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
            <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">{t("certTitle")}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "UL Listed",       desc: t("cert1Desc"), icon: "🛡️" },
                { label: "RoHS Compliant",  desc: t("cert2Desc"), icon: "🌿" },
                { label: t("cert3Label"),   desc: t("cert3Desc"), icon: "🔥" },
                { label: "Custom Color",    desc: t("cert4Desc"), icon: "🎨" },
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
              {t("whyTitle").split("?")[0]}<span style={{color: "#1B4332"}}>?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏭", title: t("why1Title"), desc: t("why1Desc") },
                { icon: "🤝", title: t("why2Title"), desc: t("why2Desc") },
                { icon: "🔬", title: t("why3Title"), desc: t("why3Desc") },
                { icon: "🎨", title: t("why4Title"), desc: t("why4Desc") },
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
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">{t("oemRef")}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
              {["Samsung", "LG Electronics", "Hyundai"].map((brand) => (
                <div key={brand} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-white font-black text-lg">{brand}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm max-w-xl mx-auto">{t("oemDesc")}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{background: "#1B4332"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
              <span className="font-black text-xs leading-tight text-center" style={{color: "#1B4332"}}>BASE<br/>CHEM</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{backgroundColor: "#4CAF50"}}
              >
                {t("ctaBtn")} <ArrowRight size={18} />
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
