/**
 * LG Chem ürün verisi — TEK KAYNAK.
 * Hem /lgchem liste sayfası hem /lgchem/[brand] marka sayfaları buradan okur.
 * Yeni grade eklerken YALNIZCA bu dosyayı güncelleyin.
 *
 * Tüm grade kodları LG Chem On resmi kataloğundan doğrulanmıştır.
 */
/* ─────────────── LOCALE-BASED DATA ─────────────── */

export function getEngineeringPlastics(locale: string) {
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

export function getElastomers(locale: string) {
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

export function getPoliolefinProducts(locale: string) {
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

export const engineeringPlasticsMeta = [
  { brand: "LUPOY",     base: "PC (Polycarbonate)",            color: "#1a3a5c", grades: ["LUPOY GN2403FT", "LUPOY GN2503FT", "LUPOY GN3001EF", "LUPOY GN3101EF", "LUPOY GN8010F"], featured: true },
  { brand: "LUPOX / LUMAX", base: "PBT (Polybutylene Terephthalate)", color: "#2D6A4F", grades: ["LUPOX EE2306F", "LUPOX GP1000K", "LUPOX GP1000KM", "LUPOX GP1000M", "LUPOX GP1000S"], featured: true },
  { brand: "LUPOL",     base: "PP (Polypropylene)",            color: "#40916C", grades: ["LUPOL ED1045D", "LUPOL ED1045DA", "LUPOL EI5002", "LUPOL EI5002L", "LUPOL GN2300F"], featured: false },
  { brand: "LUPOS",     base: "Styrenics Compound",            color: "#52B788", grades: ["LUPOS GP2080H", "LUPOS GP2100", "LUPOS GP2106F", "LUPOS GP2200", "LUPOS GP2200G"], featured: false },
  { brand: "LUMID / LUXY", base: "PA6 / PA66 (Polyamide)",    color: "#1B4332", grades: ["LUMID GN2259AFL", "LUMID GN2301AF", "LUMID GP2259AFL", "LUMID HI5006A", "LUMID HI5063A"], featured: true },
  { brand: "LUMILOY",   base: "mPPO (Modified PPO/PPE)",       color: "#0d2b1a", grades: ["LUMILOY FB2106F", "LUMILOY GN1106FJ", "LUMILOY GN1301FH", "LUMILOY GN1301FJ", "LUMILOY GN2101F"], featured: true },
  { brand: "LUMIPLAS",  base: "PC-based Light Diffusion",      color: "#2D6A4F", grades: ["LUMIPLAS LD7000FB", "LUMIPLAS LD7000FH", "LUMIPLAS LD7550", "LUMIPLAS LD7550I", "LUMIPLAS LD7600"], featured: false },
  { brand: "LUCEL",     base: "POM (Polyoxymethylene)",        color: "#40916C", grades: ["LUCEL N109LD", "LUCEL GC225"], featured: false },
  { brand: "LUCON",     base: "Conductive Engineering Plastic",color: "#1B4332", grades: ["LUCON CP6010EM", "LUCON CP6062", "LUCON PA6110EM", "LUCON PA6132EM", "LUCON PN9025"], featured: false },
  { brand: "LUSEP",     base: "PPS / SPS Compound",            color: "#0d2b1a", grades: ["LUSEP GP2400", "LUSEP GP2400CD", "LUSEP GP2400E", "LUSEP GP2500", "LUSEP GP4600"], featured: false },
];

export const elastomersMeta = [
  { brand: "KEYFLEX BT", base: "TPC-ET / Thermoplastic Elastomer",  grades: ["KEYFLEX BT1028D", "KEYFLEX BT1030D", "KEYFLEX BT1033D", "KEYFLEX BT1035D", "KEYFLEX BT1040D"], featured: true },
  { brand: "KEYFLEX TO", base: "TPO / Thermoplastic Polyolefin",   grades: [], featured: false },
];

export const poliolefinCodes = ["ABS", "PC", "ASA", "PP"];

/* ─────────────── MARKA SAYFASI YARDIMCILARI ─────────────── */

/** URL slug -> marka adı eşlemesi (marka detay sayfaları için). */
export const BRAND_SLUGS: Record<string, string> = {
  "lupoy": "LUPOY",
  "lupox-lumax": "LUPOX / LUMAX",
  "lupol": "LUPOL",
  "lupos": "LUPOS",
  "lumid-luxy": "LUMID / LUXY",
  "lumiloy": "LUMILOY",
  "lumiplas": "LUMIPLAS",
  "lucel": "LUCEL",
  "lucon": "LUCON",
  "lusep": "LUSEP",
  "keyflex-bt": "KEYFLEX BT",
  "keyflex-to": "KEYFLEX TO",
};

export type BrandDetail = {
  slug: string;
  brand: string;
  base: string;
  color: string;
  grades: string[];
  desc: string;
  highlights: string[];
  applications: string[];
};

/** Slug ve locale ile tam marka verisini döndürür (yoksa null). */
export function getBrandBySlug(slug: string, locale: string): BrandDetail | null {
  const brandName = BRAND_SLUGS[slug];
  if (!brandName) return null;

  const epIdx = engineeringPlasticsMeta.findIndex((m) => m.brand === brandName);
  if (epIdx >= 0) {
    const meta = engineeringPlasticsMeta[epIdx];
    const text = getEngineeringPlastics(locale)[epIdx];
    return { slug, ...meta, ...text };
  }

  const elIdx = elastomersMeta.findIndex((m) => m.brand === brandName);
  if (elIdx >= 0) {
    const meta = elastomersMeta[elIdx];
    const text = getElastomers(locale)[elIdx];
    return { slug, ...meta, color: "#1B4332", ...text };
  }

  return null;
}

/** Tüm marka slug listesi (generateStaticParams ve sitemap için). */
export const ALL_BRAND_SLUGS = Object.keys(BRAND_SLUGS);

/** Marka adından URL slug'ı bulur (liste sayfasından detaya link için). */
export function slugForBrand(brand: string): string | null {
  const entry = Object.entries(BRAND_SLUGS).find(([, name]) => name === brand);
  return entry ? entry[0] : null;
}
