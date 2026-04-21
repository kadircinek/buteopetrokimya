import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

/* ─────────────── LOCALE-BASED DATA ─────────────── */

function getEngineeringPlastics(locale: string) {
  const data: Record<string, {
    desc: string;
    highlights: string[];
    applications: string[];
  }[]> = {
    tr: [
      { desc: "Yüksek darbe dayanımı, optik saydamlık ve alev geciktirici özellikli PC bileşiği.", highlights: ["Alev Geciktirici", "UV Kararlı", "Şeffaf Renkler", "Gıda Onaylı"], applications: ["Otomotiv", "Elektronik", "Tıbbi Cihazlar", "Beyaz Eşya"] },
      { desc: "Üstün ısı ve kimyasal direnç, mükemmel elektriksel yalıtım özellikleriyle PBT bileşiği.", highlights: ["Isı Dirençli", "Kimyasal Dayanım", "Cam Elyaf Takviyeli", "Alev Geciktirici"], applications: ["Elektrik/Elektronik", "Otomotiv Konektör", "Fiş & Soket", "Aydınlatma"] },
      { desc: "Geliştirilmiş mekanik özellikler, hafiflik ve kimyasal direnç için özel PP bileşiği.", highlights: ["Hafif", "Kimyasal Dirençli", "Cam Elyaf", "Uzun Ömür"], applications: ["Otomotiv İç Döşeme", "Endüstriyel Parçalar", "Elektrik Aksamı"] },
      { desc: "İyileştirilmiş ısı deformasyon direnciyle yüksek performanslı stiren bileşiği.", highlights: ["Isı Stabilitesi", "Kolay İşleme", "Parlak Yüzey"], applications: ["Beyaz Eşya", "Elektronik Cihazlar", "Ev Aletleri"] },
      { desc: "Mükemmel ısı direnci ve mekanik dayanım için poliamid tabanlı bileşikler.", highlights: ["Yüksek Isı Direnci", "Cam Elyaf Takviyeli", "Aşınma Direnci", "Alev Geciktirici"], applications: ["Otomotiv Motor Aksamı", "Elektrik Konektörler", "Endüstriyel"] },
      { desc: "Boyutsal kararlılık, alev geciktiricilik ve elektriksel yalıtım özellikleri üstün mPPO malzeme.", highlights: ["Boyutsal Kararlılık", "Alev Geciktirici", "Elektrik Yalıtımı", "Düşük Nem Absorbsiyonu"], applications: ["Ağ Ekipmanları", "Sunucu Kasaları", "Elektrik Panelleri", "Otomotiv"] },
      { desc: "Işık difüzyon fonksiyonlu PC bazlı özel malzeme. Otomotiv aydınlatma için ideal.", highlights: ["Işık Difüzyonu", "Yüksek Şeffaflık", "Optik Saydamlık", "UV Kararlı"], applications: ["Otomotiv Farları", "LED Aydınlatma", "Sinyal Lambaları"] },
      { desc: "Düşük sürtünme ve yüksek aşınma direnci için POM bazlı bileşik.", highlights: ["Düşük Sürtünme", "Aşınma Direnci", "Yüksek Rijitlik", "Boyutsal Hassasiyet"], applications: ["Dişliler", "Yataklar", "Otomotiv Mekanizmaları", "Kapı Sistemleri"] },
      { desc: "Elektriksel iletkenlik özelliğine sahip özel mühendislik plastiği. ESD koruması için ideal.", highlights: ["Elektriksel İletkenlik", "ESD Koruma", "EMI Kalkanı"], applications: ["Elektronik Ambalaj", "ESD Muhafazalar", "Yarı İletken Ekipmanlar"] },
      { desc: "Extreme sıcaklık ve kimyasallara karşı üstün direnç gösteren yüksek performanslı PPS/SPS bileşiği.", highlights: ["200°C+ Isı Direnci", "Kimyasal Direnci", "Alev Geciktirici", "Boyutsal Kararlılık"], applications: ["Otomotiv Motor Parçaları", "Endüstriyel Pompalar", "Kimyasal Ekipmanlar"] },
    ],
    en: [
      { desc: "PC compound with high impact resistance, optical transparency and flame retardancy.", highlights: ["Flame Retardant", "UV Stable", "Transparent Colors", "Food Approved"], applications: ["Automotive", "Electronics", "Medical Devices", "White Goods"] },
      { desc: "PBT compound with superior heat and chemical resistance, excellent electrical insulation.", highlights: ["Heat Resistant", "Chemical Resistance", "Glass Fiber Reinforced", "Flame Retardant"], applications: ["Electrical/Electronics", "Automotive Connectors", "Plugs & Sockets", "Lighting"] },
      { desc: "Special PP compound for improved mechanical properties, lightness and chemical resistance.", highlights: ["Lightweight", "Chemical Resistant", "Glass Fiber", "Long Life"], applications: ["Automotive Interior", "Industrial Parts", "Electrical Components"] },
      { desc: "High-performance styrene compound with improved heat deflection resistance.", highlights: ["Heat Stability", "Easy Processing", "Glossy Surface"], applications: ["White Goods", "Electronic Devices", "Home Appliances"] },
      { desc: "Polyamide-based compounds for excellent heat resistance and mechanical strength.", highlights: ["High Heat Resistance", "Glass Fiber Reinforced", "Wear Resistance", "Flame Retardant"], applications: ["Automotive Engine Parts", "Electrical Connectors", "Industrial"] },
      { desc: "mPPO material with superior dimensional stability, flame retardancy and electrical insulation. Noryl® equivalent.", highlights: ["Dimensional Stability", "Flame Retardant", "Electrical Insulation", "Low Moisture Absorption"], applications: ["Network Equipment", "Server Housings", "Electrical Panels", "Automotive"] },
      { desc: "Special PC-based material with light diffusion function. Ideal for automotive lighting.", highlights: ["Light Diffusion", "High Transparency", "Optical Clarity", "UV Stable"], applications: ["Automotive Headlights", "LED Lighting", "Signal Lights"] },
      { desc: "POM-based compound for low friction and high wear resistance.", highlights: ["Low Friction", "Wear Resistance", "High Rigidity", "Dimensional Precision"], applications: ["Gears", "Bearings", "Automotive Mechanisms", "Door Systems"] },
      { desc: "Special engineering plastic with electrical conductivity. Ideal for ESD protection.", highlights: ["Electrical Conductivity", "ESD Protection", "EMI Shielding"], applications: ["Electronic Packaging", "ESD Enclosures", "Semiconductor Equipment"] },
      { desc: "High-performance PPS/SPS compound with superior resistance to extreme temperatures and chemicals.", highlights: ["200°C+ Heat Resistance", "Chemical Resistance", "Flame Retardant", "Dimensional Stability"], applications: ["Automotive Engine Parts", "Industrial Pumps", "Chemical Equipment"] },
    ],
    ro: [
      { desc: "Compus PC cu rezistență ridicată la impact, transparență optică și ignifugare.", highlights: ["Ignifug", "Stabil UV", "Culori Transparente", "Aprobat Alimentar"], applications: ["Automotive", "Electronică", "Dispozitive Medicale", "Electrocasnice"] },
      { desc: "Compus PBT cu rezistență superioară la căldură și substanțe chimice, izolație electrică excelentă.", highlights: ["Rezistent la Căldură", "Rezistență Chimică", "Armat cu Fibră de Sticlă", "Ignifug"], applications: ["Electric/Electronic", "Conectori Auto", "Prize & Fișe", "Iluminat"] },
      { desc: "Compus PP special pentru proprietăți mecanice îmbunătățite, ușurință și rezistență chimică.", highlights: ["Ușor", "Rezistent Chimic", "Fibră de Sticlă", "Durabilitate"], applications: ["Interior Auto", "Piese Industriale", "Componente Electrice"] },
      { desc: "Compus stirenic de înaltă performanță cu rezistență îmbunătățită la deformarea termică.", highlights: ["Stabilitate Termică", "Prelucrare Ușoară", "Suprafață Lucioasă"], applications: ["Electrocasnice", "Dispozitive Electronice", "Aparate Casnice"] },
      { desc: "Compuși pe bază de poliamidă pentru rezistență excelentă la căldură și rezistență mecanică.", highlights: ["Rezistență Termică Ridicată", "Armat cu Fibră de Sticlă", "Rezistență la Uzură", "Ignifug"], applications: ["Piese Motor Auto", "Conectori Electrici", "Industrial"] },
      { desc: "Material mPPO cu stabilitate dimensională superioară, ignifugare și izolație electrică. Echivalent Noryl®.", highlights: ["Stabilitate Dimensională", "Ignifug", "Izolație Electrică", "Absorbție Redusă de Umiditate"], applications: ["Echipamente Rețea", "Carcase Server", "Panouri Electrice", "Automotive"] },
      { desc: "Material special pe bază de PC cu funcție de difuzie a luminii. Ideal pentru iluminatul auto.", highlights: ["Difuzie Lumină", "Transparență Ridicată", "Claritate Optică", "Stabil UV"], applications: ["Faruri Auto", "Iluminat LED", "Lămpi de Semnal"] },
      { desc: "Compus pe bază de POM pentru frecare redusă și rezistență ridicată la uzură.", highlights: ["Frecare Redusă", "Rezistență la Uzură", "Rigiditate Ridicată", "Precizie Dimensională"], applications: ["Angrenaje", "Lagăre", "Mecanisme Auto", "Sisteme Uși"] },
      { desc: "Material plastic tehnic special cu conductivitate electrică. Ideal pentru protecție ESD.", highlights: ["Conductivitate Electrică", "Protecție ESD", "Ecranare EMI"], applications: ["Ambalaje Electronice", "Carcase ESD", "Echipamente Semiconductoare"] },
      { desc: "Compus PPS/SPS de înaltă performanță cu rezistență superioară la temperaturi extreme și substanțe chimice.", highlights: ["Rezistență Termică 200°C+", "Rezistență Chimică", "Ignifug", "Stabilitate Dimensională"], applications: ["Piese Motor Auto", "Pompe Industriale", "Echipamente Chimice"] },
    ],
  };
  return data[locale] || data["en"];
}

function getElastomers(locale: string) {
  const data: Record<string, { desc: string; highlights: string[]; applications: string[] }[]> = {
    tr: [
      { desc: "Kauçuk benzeri esneklik ve plastik işlenebilirliği bir arada sunan termoplastik elastomer.", highlights: ["Kauçuk Esnekliği", "Kolay İşleme", "Geri Dönüştürülebilir", "Geniş Sertlik Yelpazesi"], applications: ["Otomotiv Contalar", "Kablolar", "Tutma Yüzeyleri", "Tıbbi Cihazlar"] },
      { desc: "Mükemmel UV ve ısı direnciyle dış mekan uygulamaları için özel TPO.", highlights: ["UV Kararlılığı", "Hava Koşullarına Dayanıklı", "Hafif", "Boyama Yapışması"], applications: ["Otomotiv Dış Süslemeler", "Tampon Kaplamalar", "Dış Mekan Paneller"] },
    ],
    en: [
      { desc: "Thermoplastic elastomer combining rubber-like flexibility with plastic processability.", highlights: ["Rubber Flexibility", "Easy Processing", "Recyclable", "Wide Hardness Range"], applications: ["Automotive Seals", "Cables", "Grip Surfaces", "Medical Devices"] },
      { desc: "Special TPO for outdoor applications with excellent UV and heat resistance.", highlights: ["UV Stability", "Weather Resistant", "Lightweight", "Paint Adhesion"], applications: ["Automotive Exterior Trims", "Bumper Coatings", "Outdoor Panels"] },
    ],
    ro: [
      { desc: "Elastomer termoplastic care combină flexibilitatea cauciucului cu prelucrabilitatea plasticului.", highlights: ["Flexibilitate Cauciuc", "Prelucrare Ușoară", "Reciclabil", "Gamă Largă Duritate"], applications: ["Garnituri Auto", "Cabluri", "Suprafețe de Prindere", "Dispozitive Medicale"] },
      { desc: "TPO special pentru aplicații exterioare cu rezistență excelentă UV și termică.", highlights: ["Stabilitate UV", "Rezistent la Intemperii", "Ușor", "Aderență Vopsea"], applications: ["Ornamente Exterioare Auto", "Acoperiri Bara", "Panouri Exterioare"] },
    ],
  };
  return data[locale] || data["en"];
}

function getPoliolefinProducts(locale: string) {
  const data: Record<string, {
    fullName: string;
    desc: string;
    highlights: string[];
    grades: { grade: string; desc: string; tags: string[] }[];
    applications: string[];
  }[]> = {
    tr: [
      {
        fullName: "Akrilonitril Butadien Stiren",
        desc: "Mükemmel darbe direnci ve yüzey kalitesiyle dünya genelinde en çok kullanılan mühendislik termoplastiği. LG Chem, global ABS pazarında No.1 üreticidir.",
        highlights: ["Yüksek Darbe Direnci", "İyi Yüzey Kalitesi", "Kolay İşleme", "UV & Alev Geciktirici Gradlar"],
        grades: [
          { grade: "HI121H",  desc: "Genel amaç, yüksek darbe, enjeksiyon kalıplama", tags: ["Genel Amaç", "Enjeksiyon"] },
          { grade: "HI121",   desc: "Yüksek darbe direnci, geniş uygulama yelpazesi", tags: ["Yüksek Darbe", "Enjeksiyon"] },
          { grade: "HI100H",  desc: "Yüksek darbe, yüksek akış, ev aletleri", tags: ["Yüksek Akış"] },
          { grade: "AF312",   desc: "Alev geciktirici V-0 sınıfı, TV & monitör gövdeleri", tags: ["Alev Geciktirici", "V-0"] },
          { grade: "AF360",   desc: "Alev geciktirici, yüksek ısı direnci, elektronik", tags: ["Alev Geciktirici", "Yüksek Isı"] },
          { grade: "AF366A",  desc: "V-0 @ 1.5mm, IT/OA cihazları", tags: ["V-0", "Elektronik"] },
          { grade: "TR558",   desc: "Şeffaf ABS, optik saydamlık gerektiren uygulamalar", tags: ["Şeffaf"] },
          { grade: "GP-0411", desc: "Genel amaç enjeksiyon gradı, dengeli mekanik özellikler", tags: ["Genel Amaç"] },
        ],
        applications: ["Beyaz Eşya", "TV & Monitör Gövdeleri", "Otomotiv İç Aksamı", "Elektronik", "Oyuncak"],
      },
      {
        fullName: "Polikarbonat — LUPOY™",
        desc: "LG Chem'in LUPOY markası altında sunulan yüksek performanslı PC ve PC alaşımları. Optik saydamlık, alev geciktiricilik ve mükemmel mekanik özellikler.",
        highlights: ["Optik Şeffaflık", "Yüksek Darbe Direnci", "Geniş Sıcaklık Aralığı", "PC/ABS Alaşımı Gradlar"],
        grades: [
          { grade: "LUPOY 1201-18",   desc: "Genel amaç PC, ekstrüzyon & enjeksiyon", tags: ["Genel Amaç"] },
          { grade: "LUPOY 1301EP-30", desc: "Yüksek akışkanlık, ince cidarlı parçalar", tags: ["Yüksek Akış"] },
          { grade: "LUPOY 1303-10C",  desc: "Dengeli mekanik özellikler, geniş uygulama", tags: ["Dengeli"] },
          { grade: "LUPOY 1303-07",   desc: "Düşük viskozite, kompleks geometriler", tags: ["Düşük Viskozite"] },
          { grade: "LUPOY EF1006F",   desc: "Şeffaf, halojen içermez alev geciktirici", tags: ["Şeffaf", "Halojen Free"] },
          { grade: "LUPOY UF1004C",   desc: "Işık kılavuz panel uygulamaları (LGP)", tags: ["Optik", "LGP"] },
          { grade: "LUPOY GP5300",    desc: "PC/ABS alaşımı, %30 cam elyaf takviyeli", tags: ["PC/ABS", "30% GF"] },
        ],
        applications: ["Otomotiv Farları", "LED Aydınlatma", "Medikal Cihazlar", "Elektronik Kasalar", "Optik Parçalar"],
      },
      {
        fullName: "Akrilonitril Stiren Akrilat",
        desc: "ABS'e benzer işlenebilirlik özellikleriyle üstün UV ve hava koşullarına dayanıklılık sağlar. Dış mekan uygulamalarının vazgeçilmez malzemesi.",
        highlights: ["Üstün UV Direnci", "Hava Koşullarına Dayanıklı", "Renk Kararlılığı", "Yüzey Kalitesi"],
        grades: [
          { grade: "LI941",   desc: "Yüksek ısı, iyi hava koşullarına dayanım, otomotiv dış aksamı", tags: ["Yüksek Isı", "Otomotiv"] },
          { grade: "LI921NS", desc: "Genel amaç, antistatik, iyi hava direnci", tags: ["Antistatik", "Genel Amaç"] },
          { grade: "LI921",   desc: "UV kararlı, ekstrüzyon & enjeksiyon kalıplama", tags: ["UV Kararlı"] },
        ],
        applications: ["Otomotiv Dış Aksamı", "Bahçe Ekipmanları", "Yapı Profilleri", "Dış Mekan Aydınlatma", "Çatı Sistemleri"],
      },
      {
        fullName: "Polipropilen — SEETEC™",
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
    ],
    en: [
      {
        fullName: "Acrylonitrile Butadiene Styrene",
        desc: "The most widely used engineering thermoplastic in the world with excellent impact resistance and surface quality. LG Chem is the No.1 producer in the global ABS market.",
        highlights: ["High Impact Resistance", "Good Surface Quality", "Easy Processing", "UV & Flame Retardant Grades"],
        grades: [
          { grade: "HI121H",  desc: "General purpose, high impact, injection molding", tags: ["General Purpose", "Injection"] },
          { grade: "HI121",   desc: "High impact resistance, wide application range", tags: ["High Impact", "Injection"] },
          { grade: "HI100H",  desc: "High impact, high flow, home appliances", tags: ["High Flow"] },
          { grade: "AF312",   desc: "Flame retardant V-0 grade, TV & monitor housings", tags: ["Flame Retardant", "V-0"] },
          { grade: "AF360",   desc: "Flame retardant, high heat resistance, electronics", tags: ["Flame Retardant", "High Heat"] },
          { grade: "AF366A",  desc: "V-0 @ 1.5mm, IT/OA devices", tags: ["V-0", "Electronics"] },
          { grade: "TR558",   desc: "Transparent ABS for applications requiring optical clarity", tags: ["Transparent"] },
          { grade: "GP-0411", desc: "General purpose injection grade, balanced mechanical properties", tags: ["General Purpose"] },
        ],
        applications: ["White Goods", "TV & Monitor Housings", "Automotive Interior", "Electronics", "Toys"],
      },
      {
        fullName: "Polycarbonate — LUPOY™",
        desc: "High-performance PC and PC alloys offered under LG Chem's LUPOY brand. Optical transparency, flame retardancy and excellent mechanical properties.",
        highlights: ["Optical Transparency", "High Impact Resistance", "Wide Temperature Range", "PC/ABS Alloy Grades"],
        grades: [
          { grade: "LUPOY 1201-18",   desc: "General purpose PC, extrusion & injection", tags: ["General Purpose"] },
          { grade: "LUPOY 1301EP-30", desc: "High flow, thin-wall parts", tags: ["High Flow"] },
          { grade: "LUPOY 1303-10C",  desc: "Balanced mechanical properties, wide application", tags: ["Balanced"] },
          { grade: "LUPOY 1303-07",   desc: "Low viscosity, complex geometries", tags: ["Low Viscosity"] },
          { grade: "LUPOY EF1006F",   desc: "Transparent, halogen-free flame retardant", tags: ["Transparent", "Halogen Free"] },
          { grade: "LUPOY UF1004C",   desc: "Light guide panel applications (LGP)", tags: ["Optical", "LGP"] },
          { grade: "LUPOY GP5300",    desc: "PC/ABS alloy, 30% glass fiber reinforced", tags: ["PC/ABS", "30% GF"] },
        ],
        applications: ["Automotive Headlights", "LED Lighting", "Medical Devices", "Electronic Enclosures", "Optical Parts"],
      },
      {
        fullName: "Acrylonitrile Styrene Acrylate",
        desc: "Provides superior UV and weather resistance with processability similar to ABS. The essential material for outdoor applications.",
        highlights: ["Superior UV Resistance", "Weather Resistant", "Color Stability", "Surface Quality"],
        grades: [
          { grade: "LI941",   desc: "High heat, good weather resistance, automotive exterior", tags: ["High Heat", "Automotive"] },
          { grade: "LI921NS", desc: "General purpose, antistatic, good weather resistance", tags: ["Antistatic", "General Purpose"] },
          { grade: "LI921",   desc: "UV stable, extrusion & injection molding", tags: ["UV Stable"] },
        ],
        applications: ["Automotive Exterior", "Garden Equipment", "Building Profiles", "Outdoor Lighting", "Roof Systems"],
      },
      {
        fullName: "Polypropylene — SEETEC™",
        desc: "Polypropylene solutions offered under LG Chem's SEETEC brand. Excellent tensile strength, lightweight and chemical resistance.",
        highlights: ["Lightweight", "Chemical Resistance", "Wide MFR Range", "Homopolymer & Copolymer"],
        grades: [
          { grade: "SEETEC H1500", desc: "Homopolymer, high flow, balanced mechanical, housewares & toys", tags: ["Homopolymer", "High Flow"] },
          { grade: "SEETEC H1501", desc: "Homopolymer, medium flow, general injection", tags: ["Homopolymer"] },
          { grade: "SEETEC M1500", desc: "Copolymer, impact modified, low temperature resistance", tags: ["Copolymer", "Impact Modified"] },
          { grade: "SEETEC H7700", desc: "Spunbond fiber grade, hygiene & medical", tags: ["Fiber", "Medical"] },
          { grade: "SEETEC H7900", desc: "Melt-blown fiber grade, filter & mask", tags: ["Melt-blown", "Filter"] },
        ],
        applications: ["Automotive Interior", "Packaging", "White Goods", "Medical Fiber", "Industrial Parts"],
      },
    ],
    ro: [
      {
        fullName: "Acrilonitril Butadienă Stiren",
        desc: "Cel mai utilizat termoplastic tehnic din lume cu rezistență excelentă la impact și calitate a suprafeței. LG Chem este producătorul Nr.1 pe piața globală ABS.",
        highlights: ["Rezistență Ridicată la Impact", "Calitate Bună a Suprafeței", "Prelucrare Ușoară", "Grade UV & Ignifuge"],
        grades: [
          { grade: "HI121H",  desc: "Uz general, impact ridicat, turnare prin injecție", tags: ["Uz General", "Injecție"] },
          { grade: "HI121",   desc: "Rezistență ridicată la impact, gamă largă de aplicații", tags: ["Impact Ridicat", "Injecție"] },
          { grade: "HI100H",  desc: "Impact ridicat, curgere ridicată, electrocasnice", tags: ["Curgere Ridicată"] },
          { grade: "AF312",   desc: "Grad ignifug V-0, carcase TV & monitoare", tags: ["Ignifug", "V-0"] },
          { grade: "AF360",   desc: "Ignifug, rezistență termică ridicată, electronică", tags: ["Ignifug", "Căldură Ridicată"] },
          { grade: "AF366A",  desc: "V-0 @ 1.5mm, dispozitive IT/OA", tags: ["V-0", "Electronică"] },
          { grade: "TR558",   desc: "ABS transparent pentru aplicații care necesită claritate optică", tags: ["Transparent"] },
          { grade: "GP-0411", desc: "Grad de injecție uz general, proprietăți mecanice echilibrate", tags: ["Uz General"] },
        ],
        applications: ["Electrocasnice", "Carcase TV & Monitor", "Interior Auto", "Electronică", "Jucării"],
      },
      {
        fullName: "Policarbonat — LUPOY™",
        desc: "PC și aliaje PC de înaltă performanță oferite sub marca LUPOY a LG Chem. Transparență optică, ignifugare și proprietăți mecanice excelente.",
        highlights: ["Transparență Optică", "Rezistență Ridicată la Impact", "Gamă Largă de Temperaturi", "Grade Aliaj PC/ABS"],
        grades: [
          { grade: "LUPOY 1201-18",   desc: "PC uz general, extrudare & injecție", tags: ["Uz General"] },
          { grade: "LUPOY 1301EP-30", desc: "Curgere ridicată, piese cu pereți subțiri", tags: ["Curgere Ridicată"] },
          { grade: "LUPOY 1303-10C",  desc: "Proprietăți mecanice echilibrate, aplicații largi", tags: ["Echilibrat"] },
          { grade: "LUPOY 1303-07",   desc: "Vâscozitate scăzută, geometrii complexe", tags: ["Vâscozitate Scăzută"] },
          { grade: "LUPOY EF1006F",   desc: "Transparent, ignifug fără halogen", tags: ["Transparent", "Fără Halogen"] },
          { grade: "LUPOY UF1004C",   desc: "Aplicații panou ghidare lumină (LGP)", tags: ["Optică", "LGP"] },
          { grade: "LUPOY GP5300",    desc: "Aliaj PC/ABS, armat cu 30% fibră de sticlă", tags: ["PC/ABS", "30% GF"] },
        ],
        applications: ["Faruri Auto", "Iluminat LED", "Dispozitive Medicale", "Carcase Electronice", "Piese Optice"],
      },
      {
        fullName: "Acrilonitril Stiren Acrilat",
        desc: "Oferă rezistență superioară UV și la intemperii cu prelucrabilitate similară cu ABS. Materialul esențial pentru aplicații exterioare.",
        highlights: ["Rezistență UV Superioară", "Rezistent la Intemperii", "Stabilitate Culoare", "Calitate Suprafață"],
        grades: [
          { grade: "LI941",   desc: "Căldură ridicată, rezistență bună la intemperii, exterior auto", tags: ["Căldură Ridicată", "Automotive"] },
          { grade: "LI921NS", desc: "Uz general, antistatic, rezistență bună la intemperii", tags: ["Antistatic", "Uz General"] },
          { grade: "LI921",   desc: "Stabil UV, extrudare & turnare prin injecție", tags: ["Stabil UV"] },
        ],
        applications: ["Exterior Auto", "Echipamente Grădină", "Profile Construcții", "Iluminat Exterior", "Sisteme Acoperiș"],
      },
      {
        fullName: "Polipropilenă — SEETEC™",
        desc: "Soluții de polipropilenă oferite sub marca SEETEC a LG Chem. Rezistență excelentă la tracțiune, ușurință și rezistență chimică.",
        highlights: ["Structură Ușoară", "Rezistență Chimică", "Gamă Largă MFR", "Homopolimer & Copolimer"],
        grades: [
          { grade: "SEETEC H1500", desc: "Homopolimer, curgere ridicată, mecanic echilibrat, articole casnice & jucării", tags: ["Homopolimer", "Curgere Ridicată"] },
          { grade: "SEETEC H1501", desc: "Homopolimer, curgere medie, injecție generală", tags: ["Homopolimer"] },
          { grade: "SEETEC M1500", desc: "Copolimer, modificat la impact, rezistență la temperaturi scăzute", tags: ["Copolimer", "Modificat Impact"] },
          { grade: "SEETEC H7700", desc: "Grad fibră spunbond, igienă & medical", tags: ["Fibră", "Medical"] },
          { grade: "SEETEC H7900", desc: "Grad fibră melt-blown, filtru & mască", tags: ["Melt-blown", "Filtru"] },
        ],
        applications: ["Interior Auto", "Ambalaje", "Electrocasnice", "Fibră Medicală", "Piese Industriale"],
      },
    ],
  };
  return data[locale] || data["en"];
}

const engineeringPlasticsMeta = [
  { brand: "LUPOY",     base: "PC (Polycarbonate)",            color: "#1a3a5c", grades: ["LUPOY GN-1001P", "LUPOY GP-1000M", "LUPOY HF-1000M", "LUPOY FR-1000"], featured: true },
  { brand: "LUPOX / LUMAX", base: "PBT (Polybutylene Terephthalate)", color: "#2D6A4F", grades: ["LUPOX GP-1000", "LUPOX HV-1010", "LUMAX HP-1030", "LUPOX FR-1005"], featured: true },
  { brand: "LUPOL",     base: "PP (Polypropylene)",            color: "#40916C", grades: ["LUPOL GC-3000H", "LUPOL LF-3500", "LUPOL SF-3300"], featured: false },
  { brand: "LUPOS",     base: "Styrenics Compound",            color: "#52B788", grades: ["LUPOS SG-1000", "LUPOS HH-1010"], featured: false },
  { brand: "LUMID / LUXY", base: "PA6 / PA66 (Polyamide)",    color: "#1B4332", grades: ["LUMID GP-1000F", "LUMID HP-1020G", "LUXY SE-1000", "LUMID FR-1030"], featured: true },
  { brand: "LUMILOY",   base: "mPPO (Modified PPO/PPE)",       color: "#0d2b1a", grades: ["LUMILOY GN-1000", "LUMILOY FN-1010", "LUMILOY SX-1200"], featured: true },
  { brand: "LUMIPLAS",  base: "PC-based Light Diffusion",      color: "#2D6A4F", grades: ["LUMIPLAS LD-1000", "LUMIPLAS OP-1010"], featured: false },
  { brand: "LUCEL",     base: "POM (Polyoxymethylene)",        color: "#40916C", grades: ["LUCEL MH-2000", "LUCEL GF-2020", "LUCEL LF-2010"], featured: false },
  { brand: "LUCON",     base: "Conductive Engineering Plastic",color: "#1B4332", grades: ["LUCON CR-1000", "LUCON EM-1020"], featured: false },
  { brand: "LUSEP",     base: "PPS / SPS Compound",            color: "#0d2b1a", grades: ["LUSEP SG-2000", "LUSEP GF-2030"], featured: false },
];

const elastomersMeta = [
  { brand: "KEYFLEX BT", base: "TPE / Thermoplastic Elastomer",    grades: ["KEYFLEX BT 990A", "KEYFLEX BT 101A", "KEYFLEX BT 701A"], featured: true },
  { brand: "KEYFLEX TO", base: "TPO / Thermoplastic Polyolefin",   grades: ["KEYFLEX TO 300D", "KEYFLEX TO 500D"], featured: false },
];

const poliolefinCodes = ["ABS", "PC", "ASA", "PP"];

/* ─────────────── PAGE ─────────────── */

export default function LGChemPage() {
  const locale = useLocale();
  const t = useTranslations("lgchem");
  const h = useTranslations("home");

  const epTexts = getEngineeringPlastics(locale);
  const elastTexts = getElastomers(locale);
  const polyTexts = getPoliolefinProducts(locale);

  const engineeringPlastics = engineeringPlasticsMeta.map((m, i) => ({ ...m, ...epTexts[i] }));
  const elastomers = elastomersMeta.map((m, i) => ({ ...m, ...elastTexts[i] }));
  const poliolefinProducts = poliolefinCodes.map((code, i) => ({ code, ...polyTexts[i] }));

  const whyItems = [
    { icon: "🌍", title: t("why1Title"), desc: t("why1Desc") },
    { icon: "🔬", title: t("why2Title"), desc: t("why2Desc") },
    { icon: "✅", title: t("why3Title"), desc: t("why3Desc") },
    { icon: "🤝", title: t("why4Title"), desc: t("why4Desc") },
  ];

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
                  {h("distributorBadge")}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <span className="font-black text-xl" style={{color: "#c8102e"}}>LG</span>
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-white">LG Chem</h1>
                    <p className="text-green-300 font-semibold">{t("heroSubtitle")}</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">{t("heroDesc")}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/${locale}/contact`}
                    className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                    style={{backgroundColor: "#4CAF50"}}
                  >
                    {t("heroCta")} <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://www.lgchem.com/product/petrochemicals"
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
                  { v: "70+", l: t("stat1Label") },
                  { v: "50+", l: t("stat2Label") },
                  { v: "10",  l: t("stat3Label") },
                  { v: "100+",l: t("stat4Label") },
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
                  {t("featuredBadge")}
                </span>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t("featuredTitle")}
                </h2>
                <p className="text-gray-500 mt-1">{t("featuredSubtitle")}</p>
              </div>
              <Link href={`/${locale}/contact`} className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white" style={{backgroundColor: "#1B4332"}}>
                {t("requestQuote")} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Featured cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {engineeringPlastics.filter(p => p.featured).map((product) => (
                <div key={product.brand} className="group rounded-3xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                  <div className="p-6 text-white relative overflow-hidden" style={{backgroundColor: product.color}}>
                    <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-6 translate-x-6" style={{backgroundColor: "#4CAF50"}} />
                    <div className="relative">
                      <div className="text-2xl font-black tracking-tight mb-1">{product.brand}</div>
                      <div className="text-xs opacity-75 font-medium">{product.base}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{h}</span>
                      ))}
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("sampleGrades")}</div>
                      <div className="space-y-1">
                        {product.grades.slice(0, 3).map(g => (
                          <div key={g} className="text-sm font-mono font-medium text-gray-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor: product.color}} />
                            {g}
                          </div>
                        ))}
                        {product.grades.length > 3 && (
                          <div className="text-xs text-gray-400">+{product.grades.length - 3} {t("moreGrades")}</div>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t("appAreas")}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.map(a => (
                          <span key={a} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{a}</span>
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
                      <span key={h} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{h}</span>
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
                {t("elastomersBadge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                KEYFLEX <span style={{color: "#1B4332"}}>Series</span>
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
                    <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2">{t("gradesLabel")}</div>
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
                {t("stdPolymersBadge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("stdPolymersTitle")}</h2>
              <p className="text-gray-500">{t("stdPolymersSubtitle")}</p>
            </div>

            <div className="space-y-10">
              {poliolefinProducts.map((product) => (
                <div key={product.code} className="rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
                  <div className="p-8 text-white relative overflow-hidden" style={{backgroundColor: engineeringPlasticsMeta.find(m => m.brand === "LUPOY")?.color || "#1B4332"}}>
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

                  <div className="p-6 bg-white">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("availableGrades")}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">{product.grades.length} {t("gradeUnit")}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      {product.grades.map((g) => (
                        <div key={g.grade} className="group p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer">
                          <div className="font-mono font-black text-base mb-1 group-hover:text-green-800 transition-colors" style={{color: "#1B4332"}}>
                            {g.grade}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed mb-2">{g.desc}</div>
                          <div className="flex flex-wrap gap-1">
                            {g.tags.map(tag => (
                              <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{backgroundColor: "#f0fdf4", color: "#1B4332"}}>{tag}</span>
                            ))}
                          </div>
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

        {/* Why LG Chem */}
        <section className="py-20" style={{background: "linear-gradient(135deg, #f0fdf4, #dcfce7)"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t("whyTitle")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyItems.map((item, i) => (
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
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{backgroundColor: "#4CAF50"}}
              >
                {t("ctaCta")} <ArrowRight size={18} />
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
