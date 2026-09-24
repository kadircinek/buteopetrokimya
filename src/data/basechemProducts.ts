/**
 * Basechem ürün verisi — tek doğruluk kaynağı.
 * basechem/page.tsx içinden çıkarıldı; liste ve detay sayfaları bunu paylaşır.
 */

export function getBasechemProducts(locale: string) {
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

export const productsMeta = [
  { code: "ABS Compound", color: "#1B4332", featured: true },
  { code: "PC Compound",  color: "#0d2b1a", featured: true },
  { code: "PBT",          color: "#2D6A4F", featured: true },
  { code: "PC/ABS",       color: "#40916C", featured: false },
  { code: "PPO/PPE (Norly)", color: "#1B4332", featured: false },
  { code: "PA6 / PA66",   color: "#0d2b1a", featured: false },
];

/** URL slug -> Basechem ürün kodu eşlemesi. */
export const BASECHEM_SLUGS: Record<string, string> = {
  "abs-compound": "ABS Compound",
  "pc-compound": "PC Compound",
  "pbt": "PBT",
  "pc-abs": "PC/ABS",
  "ppo-ppe": "PPO/PPE (Norly)",
  "pa6-pa66": "PA6 / PA66",
};

export const ALL_BASECHEM_SLUGS = Object.keys(BASECHEM_SLUGS);

export type BasechemDetail = {
  slug: string;
  code: string;
  color: string;
  featured: boolean;
  fullName: string;
  desc: string;
  highlights: string[];
  variants: { type: string; tag: string; desc: string }[];
  applications: string[];
};

/** Slug ve locale ile tam ürün verisini döndürür (yoksa null). */
export function getBasechemBySlug(slug: string, locale: string): BasechemDetail | null {
  const code = BASECHEM_SLUGS[slug];
  if (!code) return null;
  const idx = productsMeta.findIndex((m) => m.code === code);
  if (idx < 0) return null;
  const text = getBasechemProducts(locale)[idx];
  if (!text) return null;
  return { slug, ...productsMeta[idx], ...text };
}

/** Ürün kodundan URL slug'ı bulur. */
export function slugForBasechem(code: string): string | null {
  const e = Object.entries(BASECHEM_SLUGS).find(([, c]) => c === code);
  return e ? e[0] : null;
}
