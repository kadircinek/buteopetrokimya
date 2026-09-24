/**
 * Marka sayfalarının içerik derinliğini artıran metinler.
 *
 * DÜRÜSTLÜK KURALI: Buradaki metinler yalnızca ilgili polimer ailesinin
 * genel malzeme bilimi özelliklerini ve Buteo'nun tedarik koşullarını anlatır.
 * Hiçbir grade'e ait sayısal teknik değer (MFI, yoğunluk, çekme dayanımı vb.)
 * burada yer almaz — bu değerler yalnızca LG Chem'in resmî TDS'inde bulunur.
 */

export type BrandContent = {
  /** Polimer ailesi hakkında açıklayıcı paragraflar. */
  about: string[];
  /** Grade seçiminde dikkat edilecek kriterler. */
  selection: string[];
};

type Lang = "tr" | "en" | "ro";

const C = (tr: BrandContent, en: BrandContent, ro: BrandContent): Record<Lang, BrandContent> => ({ tr, en, ro });

export const BRAND_CONTENT: Record<string, Record<Lang, BrandContent>> = {
  /* ─────────── LUPOY — PC ─────────── */
  lupoy: C(
    {
      about: [
        "Polikarbonat (PC), amorf yapısı sayesinde yüksek darbe dayanımını optik saydamlıkla birleştiren mühendislik termoplastiklerinin başında gelir. Cam benzeri şeffaflığa sahip olmasına rağmen darbe direnci çok daha yüksektir; bu nedenle güvenlik camı, koruyucu ekipman ve aydınlatma uygulamalarında tercih edilir.",
        "LG Chem'in LUPOY markası, standart şeffaf tiplerden alev geciktirici, UV kararlı ve cam elyaf takviyeli özel formülasyonlara kadar geniş bir grade yelpazesi sunar. Otomotiv aydınlatma, elektrik-elektronik muhafazaları, medikal cihaz gövdeleri ve beyaz eşya parçaları en yaygın kullanım alanlarıdır.",
        "Polikarbonat higroskopik bir malzemedir; işleme öncesinde uygun koşullarda kurutulması, yüzey kalitesi ve mekanik performans açısından kritik önem taşır. Kurutma sıcaklığı, süresi ve kalıplama parametreleri grade'e göre değiştiği için her zaman ilgili grade'in TDS'i esas alınmalıdır.",
      ],
      selection: [
        "Şeffaflık mı, renklendirme mi gerekiyor?",
        "Alev geciktiricilik (UL-94) sınıfı talebi var mı?",
        "Dış mekân kullanımı için UV kararlılığı gerekli mi?",
        "Gıda veya medikal temas onayı aranıyor mu?",
        "Cam elyaf takviyesiyle rijitlik artışı isteniyor mu?",
      ],
    },
    {
      about: [
        "Polycarbonate (PC) is one of the leading engineering thermoplastics, combining high impact strength with optical clarity thanks to its amorphous structure. Despite its glass-like transparency, its impact resistance is far higher, which makes it the material of choice for safety glazing, protective equipment and lighting applications.",
        "LG Chem's LUPOY brand offers a wide grade range, from standard transparent types to flame retardant, UV stable and glass fibre reinforced formulations. Automotive lighting, electrical and electronic housings, medical device enclosures and appliance parts are the most common applications.",
        "Polycarbonate is hygroscopic; drying under suitable conditions before processing is critical for surface quality and mechanical performance. Drying temperature, time and moulding parameters vary by grade, so the TDS of the specific grade should always be used as the reference.",
      ],
      selection: [
        "Is transparency required, or is the part coloured?",
        "Is a flame retardancy (UL-94) rating required?",
        "Is UV stability needed for outdoor use?",
        "Is food or medical contact approval required?",
        "Is added stiffness through glass fibre reinforcement needed?",
      ],
    },
    {
      about: [
        "Policarbonatul (PC) este unul dintre principalele materiale termoplastice tehnice, combinând rezistența ridicată la impact cu claritatea optică datorită structurii sale amorfe. În ciuda transparenței asemănătoare sticlei, rezistența la impact este mult mai mare, ceea ce îl face materialul preferat pentru geamuri de siguranță, echipamente de protecție și aplicații de iluminat.",
        "Marca LUPOY de la LG Chem oferă o gamă largă de grade, de la tipuri transparente standard până la formulări ignifuge, stabile la UV și armate cu fibră de sticlă. Iluminatul auto, carcasele electrice și electronice, carcasele dispozitivelor medicale și componentele electrocasnice sunt cele mai frecvente aplicații.",
        "Policarbonatul este higroscopic; uscarea în condiții adecvate înainte de procesare este esențială pentru calitatea suprafeței și performanța mecanică. Temperatura și durata de uscare, precum și parametrii de injecție variază în funcție de grad, astfel încât TDS-ul gradului respectiv trebuie luat întotdeauna ca referință.",
      ],
      selection: [
        "Este necesară transparența sau piesa este colorată?",
        "Se solicită o clasificare de ignifugare (UL-94)?",
        "Este necesară stabilitatea UV pentru utilizare în exterior?",
        "Se cere aprobare pentru contact alimentar sau medical?",
        "Este necesară rigiditate suplimentară prin armare cu fibră de sticlă?",
      ],
    }
  ),

  /* ─────────── LUPOX / LUMAX — PBT ─────────── */
  "lupox-lumax": C(
    {
      about: [
        "PBT (Polibütilen Tereftalat), yarı kristalin bir poliesterdir ve mühendislik plastikleri arasında elektriksel yalıtım performansıyla öne çıkar. Hızlı kristalleşmesi sayesinde kısa çevrim sürelerinde kalıplanabilir; bu da seri üretimde önemli bir maliyet avantajı sağlar.",
        "LG Chem'in LUPOX ve LUMAX aileleri; alev geciktirici, cam elyaf takviyeli ve yüksek akışkanlıklı grade'leriyle özellikle otomotiv elektriği, konnektör, röle, bobin karkası ve beyaz eşya bileşenlerinde yaygın olarak kullanılır.",
        "PBT'nin boyutsal kararlılığı ve nem alımının poliamitlere göre çok daha düşük olması, hassas toleranslı elektrikli parçalarda tercih edilmesinin başlıca nedenidir. Yine de işleme öncesi kurutma gereklidir; hidroliz nedeniyle molekül ağırlığı düşüşü yaşanmaması için TDS'teki kurutma koşullarına uyulmalıdır.",
      ],
      selection: [
        "Alev geciktirici (UL-94 V-0) sınıfı gerekiyor mu?",
        "Cam elyaf oranı ne olmalı — rijitlik mi, yüzey kalitesi mi öncelikli?",
        "İnce cidarlı parça için yüksek akışkanlık gerekli mi?",
        "Sıcak ortamda uzun süreli kullanım (ısıl yaşlanma) söz konusu mu?",
        "Halojensiz alev geciktirici talebi var mı?",
      ],
    },
    {
      about: [
        "PBT (Polybutylene Terephthalate) is a semi-crystalline polyester that stands out among engineering plastics for its electrical insulation performance. Its fast crystallisation allows moulding at short cycle times, which is a significant cost advantage in series production.",
        "LG Chem's LUPOX and LUMAX families — with flame retardant, glass fibre reinforced and high flow grades — are widely used in automotive electrics, connectors, relays, coil bobbins and appliance components.",
        "PBT's dimensional stability and much lower moisture uptake compared with polyamides are the main reasons it is preferred for precision electrical parts. Drying before processing is still required; the drying conditions in the TDS must be followed to avoid molecular weight loss through hydrolysis.",
      ],
      selection: [
        "Is a flame retardancy rating (UL-94 V-0) required?",
        "What glass fibre content is needed — is stiffness or surface quality the priority?",
        "Is high flow required for thin-wall parts?",
        "Is long-term use at elevated temperature (heat ageing) involved?",
        "Is a halogen-free flame retardant required?",
      ],
    },
    {
      about: [
        "PBT (Polibutilen Tereftalat) este un poliester semicristalin care se remarcă printre materialele plastice tehnice prin performanța de izolare electrică. Cristalizarea rapidă permite injecția la timpi de ciclu scurți, ceea ce reprezintă un avantaj de cost semnificativ în producția de serie.",
        "Familiile LUPOX și LUMAX de la LG Chem — cu grade ignifuge, armate cu fibră de sticlă și cu fluiditate ridicată — sunt utilizate pe scară largă în electrica auto, conectori, relee, carcase de bobine și componente electrocasnice.",
        "Stabilitatea dimensională a PBT-ului și absorbția de umiditate mult mai redusă față de poliamide sunt principalele motive pentru care este preferat în piese electrice de precizie. Uscarea înainte de procesare rămâne necesară; condițiile din TDS trebuie respectate pentru a evita pierderea masei moleculare prin hidroliză.",
      ],
      selection: [
        "Este necesară o clasificare de ignifugare (UL-94 V-0)?",
        "Ce conținut de fibră de sticlă este necesar — rigiditatea sau calitatea suprafeței este prioritară?",
        "Este necesară fluiditate ridicată pentru piese cu pereți subțiri?",
        "Este implicată utilizarea de lungă durată la temperaturi ridicate?",
        "Se solicită un agent ignifug fără halogeni?",
      ],
    }
  ),

  /* ─────────── LUPOL — PP ─────────── */
  lupol: C(
    {
      about: [
        "Polipropilen (PP), düşük yoğunluğu, geniş kimyasal direnci ve uygun maliyetiyle en yaygın kullanılan termoplastiklerden biridir. Mühendislik uygulamalarında saf PP yerine, mineral veya cam elyaf takviyeli PP compound'lar kullanılarak rijitlik ve ısıl dayanım önemli ölçüde yükseltilir.",
        "LG Chem'in LUPOL ailesi, otomotiv iç ve dış trim parçaları, endüstriyel bileşenler ve elektrik aksamı için geliştirilmiş özel PP compound'larından oluşur. Talk, cam elyaf ve elastomer modifiyeli tipler farklı rijitlik-tokluk dengesi sunar.",
        "PP'nin en büyük avantajlarından biri düşük özgül ağırlığıdır; aynı hacimde mühendislik plastiklerine göre belirgin ağırlık tasarrufu sağlar. Bu nedenle otomotivde hafifletme çalışmalarında sıkça değerlendirilir.",
      ],
      selection: [
        "Takviye tipi ne olmalı — talk mı, cam elyaf mı?",
        "Düşük sıcaklıkta darbe dayanımı kritik mi?",
        "Boyanabilirlik veya yüzey kalitesi öncelikli mi?",
        "Isıl deformasyon sıcaklığı beklentisi nedir?",
        "Ağırlık azaltma hedefi var mı?",
      ],
    },
    {
      about: [
        "Polypropylene (PP) is one of the most widely used thermoplastics thanks to its low density, broad chemical resistance and favourable cost. In engineering applications, mineral or glass fibre reinforced PP compounds are used instead of neat PP to raise stiffness and thermal performance significantly.",
        "LG Chem's LUPOL family consists of specialised PP compounds developed for automotive interior and exterior trim, industrial components and electrical parts. Talc filled, glass fibre reinforced and elastomer modified types offer different stiffness-toughness balances.",
        "One of PP's biggest advantages is its low specific gravity, delivering clear weight savings versus engineering plastics at the same volume. It is therefore frequently considered in automotive lightweighting programmes.",
      ],
      selection: [
        "Which reinforcement type — talc or glass fibre?",
        "Is low-temperature impact strength critical?",
        "Is paintability or surface quality a priority?",
        "What is the expected heat deflection temperature?",
        "Is there a weight reduction target?",
      ],
    },
    {
      about: [
        "Polipropilena (PP) este unul dintre cele mai utilizate materiale termoplastice datorită densității reduse, rezistenței chimice largi și costului avantajos. În aplicațiile tehnice se folosesc compounduri PP armate cu minerale sau fibră de sticlă în locul PP-ului pur, pentru a crește semnificativ rigiditatea și performanța termică.",
        "Familia LUPOL de la LG Chem cuprinde compounduri PP specializate, dezvoltate pentru elemente de interior și exterior auto, componente industriale și piese electrice. Tipurile cu talc, cu fibră de sticlă și modificate cu elastomeri oferă echilibre diferite între rigiditate și tenacitate.",
        "Unul dintre cele mai mari avantaje ale PP-ului este greutatea specifică redusă, oferind economii clare de masă față de plasticele tehnice la același volum. Prin urmare, este frecvent luat în considerare în programele de reducere a greutății din industria auto.",
      ],
      selection: [
        "Ce tip de armare — talc sau fibră de sticlă?",
        "Este critică rezistența la impact la temperaturi scăzute?",
        "Sunt prioritare vopsibilitatea sau calitatea suprafeței?",
        "Care este temperatura de deformare termică așteptată?",
        "Există un obiectiv de reducere a greutății?",
      ],
    }
  ),

  /* ─────────── LUPOS — Styrenics ─────────── */
  lupos: C(
    {
      about: [
        "Stiren bazlı compound'lar (ABS, SAN ve türevleri), kolay işlenebilirlik, iyi yüzey kalitesi ve boyutsal kararlılık gerektiren parçalarda tercih edilir. Kaplanabilir ve boyanabilir olmaları, görünen yüzey parçalarında önemli bir avantaj sağlar.",
        "LG Chem'in LUPOS ailesi, genel amaçlı tiplerden ısıya dayanıklı ve alev geciktirici tiplere kadar farklı stiren bazlı compound'ları kapsar. Beyaz eşya panelleri, elektronik muhafazalar ve tüketici ürünleri en yaygın kullanım alanlarıdır.",
        "Stiren bazlı malzemeler amorf yapıdadır; bu sayede çekme oranları düşük ve öngörülebilirdir, hassas toleranslı parçalarda avantaj sağlar.",
      ],
      selection: [
        "Isıya dayanım (HDT) beklentisi nedir?",
        "Alev geciktirici sınıf gerekiyor mu?",
        "Kaplama veya boyama yapılacak mı?",
        "Yüzey parlaklığı beklentisi nedir?",
        "Dış mekân kullanımı söz konusu mu?",
      ],
    },
    {
      about: [
        "Styrenic compounds (ABS, SAN and derivatives) are preferred for parts requiring easy processing, good surface quality and dimensional stability. Being platable and paintable is a significant advantage for visible surface components.",
        "LG Chem's LUPOS family covers a range of styrenic compounds from general purpose types to heat resistant and flame retardant grades. Appliance panels, electronic housings and consumer products are the most common applications.",
        "Styrenic materials are amorphous, so shrinkage rates are low and predictable — an advantage for parts with tight tolerances.",
      ],
      selection: [
        "What is the heat resistance (HDT) requirement?",
        "Is a flame retardant rating needed?",
        "Will the part be plated or painted?",
        "What surface gloss level is expected?",
        "Is outdoor use involved?",
      ],
    },
    {
      about: [
        "Compoundurile stirenice (ABS, SAN și derivate) sunt preferate pentru piese care necesită procesare ușoară, calitate bună a suprafeței și stabilitate dimensională. Faptul că pot fi metalizate și vopsite reprezintă un avantaj important pentru componentele vizibile.",
        "Familia LUPOS de la LG Chem acoperă o gamă de compounduri stirenice, de la tipuri de uz general până la grade rezistente la căldură și ignifuge. Panourile de electrocasnice, carcasele electronice și produsele de larg consum sunt cele mai frecvente aplicații.",
        "Materialele stirenice sunt amorfe, deci ratele de contracție sunt reduse și previzibile — un avantaj pentru piese cu toleranțe strânse.",
      ],
      selection: [
        "Care este cerința de rezistență la căldură (HDT)?",
        "Este necesară o clasificare ignifugă?",
        "Piesa va fi metalizată sau vopsită?",
        "Ce nivel de luciu al suprafeței se așteaptă?",
        "Este implicată utilizarea în exterior?",
      ],
    }
  ),

  /* ─────────── LUMID / LUXY — PA ─────────── */
  "lumid-luxy": C(
    {
      about: [
        "Poliamit (PA6 ve PA66), yüksek mekanik dayanım, aşınma direnci ve ısıl performansıyla mühendislik plastiklerinin en yaygın kullanılan ailelerinden biridir. Cam elyaf takviyesiyle rijitlik ve ısıl deformasyon sıcaklığı belirgin şekilde yükselir.",
        "LG Chem'in LUMID ve LUXY aileleri; otomotiv motor bölmesi parçaları, elektrik-elektronik bileşenleri, dişli ve yataklar gibi yüksek yük altında çalışan uygulamalar için geliştirilmiştir. Alev geciktirici ve yüksek darbe dayanımlı özel tipler mevcuttur.",
        "Poliamitler yüksek oranda higroskopiktir; nem alımı hem işleme kalitesini hem de nihai parçanın boyutlarını ve mekanik özelliklerini etkiler. Bu nedenle kurutma ve depolama koşullarına titizlikle uyulması, PA uygulamalarında başarının en kritik unsurudur.",
      ],
      selection: [
        "PA6 mı PA66 mı — ısıl dayanım ve maliyet dengesi nasıl kurulacak?",
        "Cam elyaf oranı ne olmalı?",
        "Alev geciktiricilik (halojensiz dahil) gerekiyor mu?",
        "Nem alımı boyutsal toleransı etkiler mi?",
        "Sürtünme ve aşınma direnci kritik mi?",
      ],
    },
    {
      about: [
        "Polyamide (PA6 and PA66) is one of the most widely used engineering plastic families, offering high mechanical strength, wear resistance and thermal performance. Glass fibre reinforcement raises stiffness and heat deflection temperature markedly.",
        "LG Chem's LUMID and LUXY families are developed for applications operating under high load — automotive under-the-hood parts, electrical and electronic components, gears and bearings. Flame retardant and high impact special types are available.",
        "Polyamides are highly hygroscopic; moisture uptake affects both processing quality and the dimensions and mechanical properties of the final part. Strict adherence to drying and storage conditions is therefore the most critical factor for success in PA applications.",
      ],
      selection: [
        "PA6 or PA66 — how to balance thermal performance against cost?",
        "What glass fibre content is required?",
        "Is flame retardancy required (including halogen-free)?",
        "Will moisture uptake affect dimensional tolerance?",
        "Are friction and wear resistance critical?",
      ],
    },
    {
      about: [
        "Poliamida (PA6 și PA66) este una dintre cele mai utilizate familii de plastice tehnice, oferind rezistență mecanică ridicată, rezistență la uzură și performanță termică. Armarea cu fibră de sticlă crește semnificativ rigiditatea și temperatura de deformare termică.",
        "Familiile LUMID și LUXY de la LG Chem sunt dezvoltate pentru aplicații care funcționează sub sarcini mari — piese din compartimentul motor, componente electrice și electronice, roți dințate și lagăre. Sunt disponibile tipuri speciale ignifuge și cu rezistență ridicată la impact.",
        "Poliamidele sunt puternic higroscopice; absorbția de umiditate afectează atât calitatea procesării, cât și dimensiunile și proprietățile mecanice ale piesei finale. Respectarea strictă a condițiilor de uscare și depozitare este, prin urmare, factorul cel mai critic pentru succesul aplicațiilor cu PA.",
      ],
      selection: [
        "PA6 sau PA66 — cum se echilibrează performanța termică cu costul?",
        "Ce conținut de fibră de sticlă este necesar?",
        "Este necesară ignifugarea (inclusiv fără halogeni)?",
        "Absorbția de umiditate va afecta toleranța dimensională?",
        "Sunt critice frecarea și rezistența la uzură?",
      ],
    }
  ),

  /* ─────────── LUMILOY — mPPO ─────────── */
  lumiloy: C(
    {
      about: [
        "Modifiye PPO/PPE alaşımları, mühendislik plastikleri içinde en düşük yoğunluğa sahip gruplardan biridir ve olağanüstü boyutsal kararlılık sunar. Neredeyse hiç nem almamaları, hassas toleranslı parçalarda ve elektriksel uygulamalarda büyük avantaj sağlar.",
        "LG Chem'in LUMILOY ailesi, halojensiz alev geciktirici formülasyonlarıyla özellikle elektrik-elektronik, fotovoltaik bağlantı kutuları, batarya bileşenleri ve su ile temas eden parçalarda tercih edilir.",
        "mPPO'nun hidrolitik kararlılığı, sıcak su ve buhar ile temas eden uygulamalarda poliamit ve poliesterlere göre belirgin üstünlük sağlar. Ayrıca düşük yoğunluğu sayesinde parça başına malzeme maliyetinde avantaj sunabilir.",
      ],
      selection: [
        "Halojensiz alev geciktiricilik zorunlu mu?",
        "Boyutsal kararlılık toleransı ne kadar dar?",
        "Nem veya sıcak su teması var mı?",
        "Elektriksel yalıtım (CTI) beklentisi nedir?",
        "Ağırlık kritik bir kriter mi?",
      ],
    },
    {
      about: [
        "Modified PPO/PPE alloys are among the lowest density groups within engineering plastics and offer outstanding dimensional stability. Absorbing virtually no moisture is a major advantage for tight-tolerance parts and electrical applications.",
        "LG Chem's LUMILOY family, with its halogen-free flame retardant formulations, is particularly preferred in electrical and electronic parts, photovoltaic junction boxes, battery components and parts in contact with water.",
        "The hydrolytic stability of mPPO gives it a clear advantage over polyamides and polyesters in applications exposed to hot water and steam. Its low density can also reduce material cost per part.",
      ],
      selection: [
        "Is halogen-free flame retardancy mandatory?",
        "How tight is the dimensional stability tolerance?",
        "Is there exposure to moisture or hot water?",
        "What is the electrical insulation (CTI) requirement?",
        "Is weight a critical criterion?",
      ],
    },
    {
      about: [
        "Aliajele PPO/PPE modificate se numără printre grupele cu cea mai mică densitate din categoria plasticelor tehnice și oferă o stabilitate dimensională remarcabilă. Faptul că nu absorb practic deloc umiditate reprezintă un avantaj major pentru piesele cu toleranțe strânse și pentru aplicațiile electrice.",
        "Familia LUMILOY de la LG Chem, cu formulările sale ignifuge fără halogeni, este preferată în special pentru piese electrice și electronice, cutii de joncțiune fotovoltaice, componente de baterii și piese în contact cu apa.",
        "Stabilitatea hidrolitică a mPPO îi conferă un avantaj clar față de poliamide și poliesteri în aplicații expuse la apă fierbinte și abur. Densitatea redusă poate scădea, de asemenea, costul de material pe piesă.",
      ],
      selection: [
        "Este obligatorie ignifugarea fără halogeni?",
        "Cât de strânsă este toleranța de stabilitate dimensională?",
        "Există expunere la umiditate sau apă fierbinte?",
        "Care este cerința de izolare electrică (CTI)?",
        "Greutatea este un criteriu critic?",
      ],
    }
  ),

  /* ─────────── LUMIPLAS — PC light diffusion ─────────── */
  lumiplas: C(
    {
      about: [
        "Işık difüzyon malzemeleri, LED aydınlatmada nokta kaynaklı ışığı homojen bir yüzey aydınlatmasına dönüştürmek için geliştirilmiştir. Amaç, ışık geçirgenliğini olabildiğince korurken kaynak noktalarının görünmesini engellemektir.",
        "LG Chem'in LUMIPLAS ailesi, PC bazlı yapısı sayesinde difüzyon performansını polikarbonatın darbe dayanımı ve ısıl kararlılığıyla birleştirir. Otomotiv aydınlatma, LED armatür difüzörleri ve arkadan aydınlatmalı paneller başlıca uygulama alanlarıdır.",
        "Difüzyon ve ışık geçirgenliği birbiriyle ters yönde çalışan iki parametredir; doğru grade seçimi, uygulamanın istediği parlaklık ile homojenlik dengesine göre yapılmalıdır. Bu değerler grade'e özgüdür ve TDS'te tanımlanır.",
      ],
      selection: [
        "Işık geçirgenliği mi, difüzyon homojenliği mi öncelikli?",
        "Parça cidar kalınlığı nedir?",
        "LED kaynağa mesafe ne kadar?",
        "Isıl yük ve UV maruziyeti söz konusu mu?",
        "Alev geciktiricilik gerekiyor mu?",
      ],
    },
    {
      about: [
        "Light diffusion materials are developed to convert point-source light into homogeneous surface illumination in LED lighting. The goal is to hide the source points while preserving as much light transmission as possible.",
        "LG Chem's LUMIPLAS family, built on a PC base, combines diffusion performance with the impact strength and thermal stability of polycarbonate. Automotive lighting, LED luminaire diffusers and backlit panels are the main applications.",
        "Diffusion and light transmission work against each other; the right grade must be selected according to the brightness-versus-uniformity balance the application requires. These values are grade specific and defined in the TDS.",
      ],
      selection: [
        "Is light transmission or diffusion uniformity the priority?",
        "What is the part wall thickness?",
        "What is the distance to the LED source?",
        "Is there thermal load or UV exposure?",
        "Is flame retardancy required?",
      ],
    },
    {
      about: [
        "Materialele de difuzie a luminii sunt dezvoltate pentru a transforma lumina punctiformă în iluminare uniformă de suprafață în sistemele LED. Scopul este de a masca punctele sursă păstrând în același timp cât mai mult din transmisia luminoasă.",
        "Familia LUMIPLAS de la LG Chem, construită pe bază de PC, combină performanța de difuzie cu rezistența la impact și stabilitatea termică ale policarbonatului. Iluminatul auto, difuzoarele pentru corpuri LED și panourile retroiluminate sunt principalele aplicații.",
        "Difuzia și transmisia luminoasă acționează în sens opus; gradul potrivit trebuie ales în funcție de echilibrul dintre luminozitate și uniformitate cerut de aplicație. Aceste valori sunt specifice fiecărui grad și sunt definite în TDS.",
      ],
      selection: [
        "Este prioritară transmisia luminoasă sau uniformitatea difuziei?",
        "Care este grosimea peretelui piesei?",
        "Care este distanța până la sursa LED?",
        "Există sarcină termică sau expunere UV?",
        "Este necesară ignifugarea?",
      ],
    }
  ),

  /* ─────────── LUCEL — POM ─────────── */
  lucel: C(
    {
      about: [
        "POM (Polioksimetilen / asetal), yüksek kristallik derecesi sayesinde mühendislik plastikleri arasında en iyi sürtünme-aşınma performansını ve boyutsal kararlılığını sunan malzemelerden biridir. Yaylanma özelliği ve yorulma dayanımı, hareketli mekanizmalarda öne çıkmasını sağlar.",
        "LG Chem'in LUCEL ailesi, dişli, yatak, kam, kayar parça, otomotiv kapı ve koltuk mekanizmaları gibi tekrarlı hareket altında çalışan uygulamalarda kullanılır. Düşük sürtünme katsayısı, çoğu durumda yağlamaya gerek bırakmaz.",
        "POM'un dar erime aralığı ve yüksek çekme oranı, işleme parametrelerinin hassas kontrolünü gerektirir. Ayrıca asetal malzemeler asidik ortamlara duyarlıdır; kimyasal temas öngörülüyorsa uygunluk mutlaka teyit edilmelidir.",
      ],
      selection: [
        "Sürtünme ve aşınma yükü ne düzeyde?",
        "Boyutsal tolerans ne kadar dar?",
        "Homopolimer mi kopolimer mi gerekiyor?",
        "Kimyasal temas (özellikle asit) söz konusu mu?",
        "Yaylanma veya klips fonksiyonu var mı?",
      ],
    },
    {
      about: [
        "POM (Polyoxymethylene / acetal) offers, thanks to its high degree of crystallinity, one of the best friction-and-wear performances and dimensional stabilities among engineering plastics. Its resilience and fatigue strength make it stand out in moving mechanisms.",
        "LG Chem's LUCEL family is used in applications operating under repeated motion — gears, bearings, cams, sliding parts, automotive door and seat mechanisms. Its low coefficient of friction often removes the need for lubrication.",
        "POM's narrow melting range and high shrinkage require precise control of processing parameters. Acetal materials are also sensitive to acidic environments; if chemical contact is expected, compatibility must be confirmed.",
      ],
      selection: [
        "What is the level of friction and wear loading?",
        "How tight is the dimensional tolerance?",
        "Is a homopolymer or copolymer required?",
        "Is there chemical contact, particularly acids?",
        "Is there a snap-fit or spring function?",
      ],
    },
    {
      about: [
        "POM (Polioximetilenă / acetal) oferă, datorită gradului ridicat de cristalinitate, una dintre cele mai bune performanțe de frecare-uzură și stabilități dimensionale dintre plasticele tehnice. Elasticitatea și rezistența la oboseală îl fac remarcabil în mecanismele mobile.",
        "Familia LUCEL de la LG Chem este utilizată în aplicații cu mișcare repetată — roți dințate, lagăre, came, piese glisante, mecanisme de uși și scaune auto. Coeficientul redus de frecare elimină adesea nevoia de lubrifiere.",
        "Intervalul îngust de topire și contracția ridicată ale POM-ului necesită un control precis al parametrilor de procesare. Materialele acetalice sunt de asemenea sensibile la medii acide; dacă se anticipează contact chimic, compatibilitatea trebuie confirmată.",
      ],
      selection: [
        "Care este nivelul solicitării de frecare și uzură?",
        "Cât de strânsă este toleranța dimensională?",
        "Este necesar homopolimer sau copolimer?",
        "Există contact chimic, în special cu acizi?",
        "Există o funcție de clipsare sau arc?",
      ],
    }
  ),

  /* ─────────── LUCON — Conductive ─────────── */
  lucon: C(
    {
      about: [
        "İletken mühendislik plastikleri, yalıtkan bir polimer matrisine iletken dolgu maddeleri eklenerek elektrostatik boşalma (ESD) kontrolü veya elektromanyetik girişim (EMI) ekranlaması sağlar. Böylece metal parçaların yerini alarak ağırlık ve şekil serbestliği kazandırır.",
        "LG Chem'in LUCON ailesi, elektronik bileşen taşıyıcıları, yakıt sistemi parçaları, otomotiv elektroniği muhafazaları ve statik yük birikiminin risk oluşturduğu endüstriyel uygulamalarda kullanılır.",
        "İletkenlik seviyesi (yüzey direnci) uygulamaya göre çok farklı aralıklarda tanımlanır — antistatik, dissipatif ve iletken bölgeler ayrı ayrı ele alınmalıdır. Hedef direnç aralığının baştan netleştirilmesi doğru grade seçiminin ilk adımıdır.",
      ],
      selection: [
        "Hedeflenen yüzey direnci aralığı nedir?",
        "ESD kontrolü mü, EMI ekranlaması mı gerekiyor?",
        "Taban polimer ne olmalı (PA, PC, PP vb.)?",
        "Mekanik yük ve ısıl dayanım beklentisi nedir?",
        "Yüzey görünümü veya renk kısıtı var mı?",
      ],
    },
    {
      about: [
        "Conductive engineering plastics provide electrostatic discharge (ESD) control or electromagnetic interference (EMI) shielding by adding conductive fillers to an insulating polymer matrix, replacing metal parts and adding weight savings and design freedom.",
        "LG Chem's LUCON family is used in electronic component carriers, fuel system parts, automotive electronics housings and industrial applications where static build-up poses a risk.",
        "The conductivity level (surface resistivity) is defined across very different ranges depending on the application — antistatic, dissipative and conductive regions must be considered separately. Clarifying the target resistivity range upfront is the first step in correct grade selection.",
      ],
      selection: [
        "What is the target surface resistivity range?",
        "Is ESD control or EMI shielding required?",
        "Which base polymer is needed (PA, PC, PP, etc.)?",
        "What are the mechanical load and thermal requirements?",
        "Are there surface appearance or colour constraints?",
      ],
    },
    {
      about: [
        "Plasticele tehnice conductive asigură controlul descărcărilor electrostatice (ESD) sau ecranarea interferențelor electromagnetice (EMI) prin adăugarea de umpluturi conductive într-o matrice polimerică izolatoare, înlocuind piesele metalice și aducând economii de greutate și libertate de design.",
        "Familia LUCON de la LG Chem este utilizată în suporturi pentru componente electronice, piese ale sistemului de combustibil, carcase de electronică auto și aplicații industriale unde acumularea statică prezintă risc.",
        "Nivelul de conductivitate (rezistivitatea de suprafață) este definit pe intervale foarte diferite în funcție de aplicație — zonele antistatică, disipativă și conductivă trebuie tratate separat. Clarificarea intervalului țintă de la început este primul pas în alegerea corectă a gradului.",
      ],
      selection: [
        "Care este intervalul țintă de rezistivitate de suprafață?",
        "Este necesar controlul ESD sau ecranarea EMI?",
        "Ce polimer de bază este necesar (PA, PC, PP etc.)?",
        "Care sunt cerințele mecanice și termice?",
        "Există constrângeri de aspect sau culoare?",
      ],
    }
  ),

  /* ─────────── LUSEP — PPS / SPS ─────────── */
  lusep: C(
    {
      about: [
        "PPS (Polifenilen Sülfür), yüksek performanslı termoplastikler sınıfında yer alır ve sürekli yüksek sıcaklık altında çalışabilme, olağanüstü kimyasal direnç ve doğal alev geciktiricilik özellikleriyle öne çıkar. Çoğu grade ek alev geciktirici katkı gerektirmeden yüksek yanmazlık sınıfına ulaşır.",
        "LG Chem'in LUSEP ailesi; otomotiv motor ve yakıt sistemi parçaları, elektrikli araç bileşenleri, pompa ve valf gövdeleri, elektronik konnektörler gibi zorlu koşullarda çalışan uygulamalar için geliştirilmiştir.",
        "PPS'in çok düşük nem alımı ve dar boyutsal toleransları koruyabilmesi, metal parçaların yerini almasında belirleyici olur. Yüksek işleme sıcaklıkları gerektirdiği için kalıp ve makine uygunluğu baştan değerlendirilmelidir.",
      ],
      selection: [
        "Sürekli çalışma sıcaklığı beklentisi nedir?",
        "Hangi kimyasallara maruz kalacak?",
        "Cam elyaf / mineral takviye oranı ne olmalı?",
        "Boyutsal tolerans ne kadar dar?",
        "Metal parça ikamesi mi hedefleniyor?",
      ],
    },
    {
      about: [
        "PPS (Polyphenylene Sulphide) belongs to the high-performance thermoplastics class and stands out for continuous high-temperature operation, outstanding chemical resistance and inherent flame retardancy. Most grades reach a high flammability rating without additional flame retardant additives.",
        "LG Chem's LUSEP family is developed for applications operating under demanding conditions — automotive engine and fuel system parts, electric vehicle components, pump and valve bodies, electronic connectors.",
        "PPS's very low moisture uptake and ability to hold tight dimensional tolerances are decisive when replacing metal parts. As it requires high processing temperatures, tooling and machine suitability should be assessed upfront.",
      ],
      selection: [
        "What is the expected continuous service temperature?",
        "Which chemicals will it be exposed to?",
        "What glass fibre / mineral reinforcement content is needed?",
        "How tight is the dimensional tolerance?",
        "Is metal part replacement the goal?",
      ],
    },
    {
      about: [
        "PPS (Sulfură de polifenilen) face parte din clasa materialelor termoplastice de înaltă performanță și se remarcă prin funcționarea continuă la temperaturi ridicate, rezistență chimică excepțională și ignifugare intrinsecă. Majoritatea gradelor ating o clasificare ridicată de inflamabilitate fără aditivi ignifugi suplimentari.",
        "Familia LUSEP de la LG Chem este dezvoltată pentru aplicații în condiții solicitante — piese de motor și sistem de combustibil auto, componente pentru vehicule electrice, corpuri de pompe și supape, conectori electronici.",
        "Absorbția foarte redusă de umiditate a PPS-ului și capacitatea de a menține toleranțe dimensionale strânse sunt decisive la înlocuirea pieselor metalice. Deoarece necesită temperaturi ridicate de procesare, compatibilitatea matriței și a mașinii trebuie evaluată de la început.",
      ],
      selection: [
        "Care este temperatura de funcționare continuă așteptată?",
        "La ce substanțe chimice va fi expus?",
        "Ce conținut de armare cu fibră de sticlă / minerale este necesar?",
        "Cât de strânsă este toleranța dimensională?",
        "Se urmărește înlocuirea unei piese metalice?",
      ],
    }
  ),

  /* ─────────── KEYFLEX BT — TPC-ET ─────────── */
  "keyflex-bt": C(
    {
      about: [
        "TPC-ET (termoplastik kopoliester elastomer), kauçuğun esnekliğiyle termoplastiğin işlenebilirliğini birleştiren bir malzeme sınıfıdır. Vulkanizasyon gerektirmediği için enjeksiyonla seri üretilebilir ve geri dönüştürülebilir.",
        "LG Chem'in KEYFLEX BT ailesi; körük, hortum, conta, kablo kılıfı, süspansiyon tozlukları ve otomotivde tekrarlı esneme altında çalışan parçalarda kullanılır. Farklı sertlik seviyeleriyle esneklik-dayanım dengesi ayarlanabilir.",
        "TPC-ET malzemelerin en güçlü yanı, geniş bir sıcaklık aralığında elastik özelliklerini koruyabilmesi ve yorulma dayanımının yüksek olmasıdır. Sertlik seçimi (Shore D) uygulamanın esneme ihtiyacına göre belirlenir.",
      ],
      selection: [
        "Hedeflenen sertlik seviyesi (Shore D) nedir?",
        "Çalışma sıcaklık aralığı ne olacak?",
        "Tekrarlı esneme / yorulma yükü var mı?",
        "Yağ, yakıt veya kimyasal teması söz konusu mu?",
        "UV ve dış ortam maruziyeti var mı?",
      ],
    },
    {
      about: [
        "TPC-ET (thermoplastic copolyester elastomer) is a material class that combines the flexibility of rubber with the processability of a thermoplastic. As it requires no vulcanisation, it can be injection moulded in series production and recycled.",
        "LG Chem's KEYFLEX BT family is used in bellows, hoses, seals, cable jackets, suspension boots and automotive parts operating under repeated flexing. The flexibility-strength balance can be tuned through different hardness levels.",
        "The greatest strength of TPC-ET materials is retaining elastic properties across a wide temperature range together with high fatigue resistance. Hardness selection (Shore D) is determined by the flexing requirement of the application.",
      ],
      selection: [
        "What is the target hardness level (Shore D)?",
        "What will the service temperature range be?",
        "Is there repeated flexing or fatigue loading?",
        "Is there contact with oil, fuel or chemicals?",
        "Is there UV and outdoor exposure?",
      ],
    },
    {
      about: [
        "TPC-ET (elastomer copoliesteric termoplastic) este o clasă de materiale care combină flexibilitatea cauciucului cu prelucrabilitatea unui termoplastic. Deoarece nu necesită vulcanizare, poate fi injectat în producție de serie și reciclat.",
        "Familia KEYFLEX BT de la LG Chem este utilizată la burdufuri, furtunuri, garnituri, manșoane de cablu, burdufuri de suspensie și piese auto supuse flexiunii repetate. Echilibrul dintre flexibilitate și rezistență poate fi reglat prin diferite niveluri de duritate.",
        "Cel mai mare avantaj al materialelor TPC-ET este păstrarea proprietăților elastice pe un interval larg de temperaturi, împreună cu rezistența ridicată la oboseală. Alegerea durității (Shore D) este determinată de cerința de flexiune a aplicației.",
      ],
      selection: [
        "Care este nivelul de duritate țintă (Shore D)?",
        "Care va fi intervalul de temperatură de funcționare?",
        "Există flexiune repetată sau solicitare la oboseală?",
        "Există contact cu ulei, combustibil sau substanțe chimice?",
        "Există expunere la UV și la mediul exterior?",
      ],
    }
  ),

  /* ─────────── KEYFLEX TO — TPO ─────────── */
  "keyflex-to": C(
    {
      about: [
        "TPO (termoplastik poliolefin), poliolefin matrisi ile elastomer fazının birleşiminden oluşan, düşük yoğunluklu ve hava koşullarına dayanıklı bir elastomer sınıfıdır. UV ve ozon direnci sayesinde dış mekân uygulamalarında öne çıkar.",
        "LG Chem'in KEYFLEX TO ailesi; otomotiv dış trim parçaları, tampon bileşenleri, hava kanalları ve dış ortamda uzun süreli kullanılan esnek parçalar için geliştirilmiştir.",
        "TPO'lar düşük özgül ağırlıkları sayesinde ağırlık azaltma projelerinde avantaj sağlar. Boyanabilirlik ve yüzey kalitesi beklentisi grade seçiminde belirleyici olur.",
      ],
      selection: [
        "Dış mekân UV maruziyeti ne düzeyde?",
        "Hedeflenen sertlik ve esneklik seviyesi nedir?",
        "Boyanacak mı, yoksa renkli mi kalacak?",
        "Düşük sıcaklıkta esneklik gerekiyor mu?",
        "Ağırlık azaltma hedefi var mı?",
      ],
    },
    {
      about: [
        "TPO (thermoplastic polyolefin) is a low-density, weather-resistant elastomer class formed by combining a polyolefin matrix with an elastomer phase. Its UV and ozone resistance make it stand out in outdoor applications.",
        "LG Chem's KEYFLEX TO family is developed for automotive exterior trim, bumper components, air ducts and flexible parts used long-term outdoors.",
        "TPOs offer an advantage in weight reduction projects thanks to their low specific gravity. Paintability and surface quality expectations are decisive in grade selection.",
      ],
      selection: [
        "What is the level of outdoor UV exposure?",
        "What are the target hardness and flexibility levels?",
        "Will it be painted or remain coloured?",
        "Is low-temperature flexibility required?",
        "Is there a weight reduction target?",
      ],
    },
    {
      about: [
        "TPO (poliolefină termoplastică) este o clasă de elastomeri cu densitate redusă și rezistență la intemperii, formată prin combinarea unei matrice poliolefinice cu o fază elastomerică. Rezistența la UV și ozon îl face remarcabil în aplicațiile exterioare.",
        "Familia KEYFLEX TO de la LG Chem este dezvoltată pentru elemente exterioare auto, componente de bară, canale de aer și piese flexibile utilizate timp îndelungat în exterior.",
        "TPO-urile oferă un avantaj în proiectele de reducere a greutății datorită greutății specifice reduse. Vopsibilitatea și așteptările privind calitatea suprafeței sunt decisive în alegerea gradului.",
      ],
      selection: [
        "Care este nivelul de expunere UV în exterior?",
        "Care sunt nivelurile țintă de duritate și flexibilitate?",
        "Va fi vopsit sau va rămâne colorat?",
        "Este necesară flexibilitatea la temperaturi scăzute?",
        "Există un obiectiv de reducere a greutății?",
      ],
    }
  ),
};

/** Marka slug + locale ile içerik döndürür (yoksa null). */
export function getBrandContent(slug: string, locale: string): BrandContent | null {
  const entry = BRAND_CONTENT[slug];
  if (!entry) return null;
  return entry[(locale as Lang)] ?? entry.tr;
}
