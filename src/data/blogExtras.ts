/**
 * Blog yazıları için öne çıkan snippet (featured snippet) ekleri:
 * kısa cevap kutusu, nitel karşılaştırma tablosu ve SSS (FAQPage).
 *
 * DÜRÜSTLÜK KURALI: Tablolar yalnızca genel kabul görmüş GÖRELİ
 * karşılaştırmalar içerir ("daha yüksek", "daha düşük"). Sayısal değer yok.
 */

export type BlogExtra = {
  answer: string;
  table?: { caption: string; head: string[]; rows: string[][] };
  faq: { q: string; a: string }[];
};

type Lang = "tr" | "en" | "ro";

const X: Record<string, Record<Lang, BlogExtra>> = {
  "pc-mi-abs-mi": {
    tr: {
      answer: "PC (polikarbonat) daha yüksek darbe dayanımı, ısı direnci ve şeffaflık sunar; ABS ise daha kolay işlenir, kaplanabilir ve daha ekonomiktir. PC/ABS, bu iki malzemenin avantajlarını birleştiren bir alaşımdır: PC'nin tokluğunu ve ısıl performansını, ABS'nin işlenebilirliği ve maliyet avantajıyla bir araya getirir.",
      table: {
        caption: "PC, ABS ve PC/ABS — göreli karşılaştırma",
        head: ["Özellik", "PC", "ABS", "PC/ABS"],
        rows: [
          ["Darbe dayanımı", "Çok yüksek", "İyi", "Yüksek"],
          ["Isı direnci", "Yüksek", "Orta", "Orta–yüksek"],
          ["Şeffaflık", "Mümkün", "Opak", "Opak"],
          ["İşlenebilirlik", "Orta", "Çok kolay", "Kolay"],
          ["Kaplama / boyama", "Mümkün, dikkat ister", "Çok uygun", "Uygun"],
          ["Kimyasal / solvent direnci", "Hassas (gerilme çatlağı)", "Orta", "Orta"],
          ["Maliyet", "Daha yüksek", "Daha düşük", "Arada"],
        ],
      },
      faq: [
        { q: "PC/ABS nedir?", a: "PC/ABS, polikarbonat ve ABS'nin harmanlanmasıyla elde edilen bir mühendislik plastiği alaşımıdır. Polikarbonatın darbe dayanımı ve ısıl performansını, ABS'nin kolay işlenebilirliği ve maliyet avantajıyla birleştirir. Otomotiv iç trim parçaları ve elektronik muhafazalarda yaygın olarak kullanılır." },
        { q: "PC mi ABS mi daha dayanıklı?", a: "Darbe dayanımı açısından polikarbonat (PC) ABS'ye göre belirgin şekilde daha dayanıklıdır ve ısı direnci de daha yüksektir. Ancak darbe yükü orta düzeydeyse ABS çoğu tüketici ürünü için yeterlidir ve daha ekonomiktir." },
        { q: "Şeffaf parça için hangisi seçilmeli?", a: "Şeffaflık gerekiyorsa ABS bir seçenek değildir; ABS doğası gereği opaktır. Polikarbonat cam benzeri saydamlık sunabilir." },
      ],
    },
    en: {
      answer: "PC (polycarbonate) offers higher impact strength, heat resistance and transparency; ABS is easier to process, platable and more economical. PC/ABS is an alloy that combines the two: the toughness and thermal performance of PC with the processability and cost advantage of ABS.",
      table: {
        caption: "PC, ABS and PC/ABS — relative comparison",
        head: ["Property", "PC", "ABS", "PC/ABS"],
        rows: [
          ["Impact strength", "Very high", "Good", "High"],
          ["Heat resistance", "High", "Medium", "Medium–high"],
          ["Transparency", "Possible", "Opaque", "Opaque"],
          ["Processability", "Medium", "Very easy", "Easy"],
          ["Plating / painting", "Possible, needs care", "Very suitable", "Suitable"],
          ["Chemical / solvent resistance", "Sensitive (stress cracking)", "Medium", "Medium"],
          ["Cost", "Higher", "Lower", "In between"],
        ],
      },
      faq: [
        { q: "What is PC/ABS?", a: "PC/ABS is an engineering plastic alloy made by blending polycarbonate and ABS. It combines the impact strength and thermal performance of polycarbonate with the easy processing and cost advantage of ABS, and is widely used in automotive interior trim and electronic housings." },
        { q: "Is PC or ABS stronger?", a: "In terms of impact strength, polycarbonate (PC) is markedly stronger than ABS and also has higher heat resistance. Where impact loading is moderate, however, ABS is sufficient for most consumer products and more economical." },
        { q: "Which should I choose for a transparent part?", a: "If transparency is required, ABS is not an option because it is inherently opaque. Polycarbonate can offer glass-like clarity." },
      ],
    },
    ro: {
      answer: "PC (policarbonatul) oferă rezistență mai mare la impact, rezistență termică și transparență; ABS-ul se prelucrează mai ușor, poate fi metalizat și este mai economic. PC/ABS este un aliaj care le combină: tenacitatea și performanța termică a PC-ului cu prelucrabilitatea și avantajul de cost al ABS-ului.",
      table: {
        caption: "PC, ABS și PC/ABS — comparație relativă",
        head: ["Proprietate", "PC", "ABS", "PC/ABS"],
        rows: [
          ["Rezistență la impact", "Foarte mare", "Bună", "Mare"],
          ["Rezistență termică", "Mare", "Medie", "Medie–mare"],
          ["Transparență", "Posibilă", "Opac", "Opac"],
          ["Prelucrabilitate", "Medie", "Foarte ușoară", "Ușoară"],
          ["Metalizare / vopsire", "Posibilă, cu atenție", "Foarte potrivit", "Potrivit"],
          ["Rezistență chimică / la solvenți", "Sensibil (fisurare)", "Medie", "Medie"],
          ["Cost", "Mai mare", "Mai mic", "Intermediar"],
        ],
      },
      faq: [
        { q: "Ce este PC/ABS?", a: "PC/ABS este un aliaj de plastic tehnic obținut prin amestecarea policarbonatului cu ABS. Combină rezistența la impact și performanța termică a policarbonatului cu prelucrarea ușoară și avantajul de cost al ABS-ului și este utilizat pe scară largă în interiorul auto și carcasele electronice." },
        { q: "Care este mai rezistent, PC sau ABS?", a: "Ca rezistență la impact, policarbonatul (PC) este semnificativ mai rezistent decât ABS-ul și are și rezistență termică mai mare. Acolo unde solicitarea este moderată, ABS-ul este suficient pentru majoritatea produselor și mai economic." },
        { q: "Ce să aleg pentru o piesă transparentă?", a: "Dacă este necesară transparența, ABS-ul nu este o opțiune, fiind opac prin natura sa. Policarbonatul poate oferi claritate asemănătoare sticlei." },
      ],
    },
  },

  "ul-94-v0-nedir": {
    tr: {
      answer: "UL94 V-0, plastik malzemelerin dikey yanma testindeki en yüksek yanmazlık sınıfıdır. V-0 sınıfındaki malzeme, alev kaynağı uzaklaştırıldıktan sonra en kısa sürede kendiliğinden söner ve alev alan damlacık oluşturmaz. Sınıf her zaman belirli bir numune kalınlığı için geçerlidir.",
      table: {
        caption: "UL-94 dikey yanma sınıfları — göreli karşılaştırma",
        head: ["Sınıf", "Sönme süresi", "Alev alan damlama", "Zorluk"],
        rows: [
          ["V-0", "En kısa", "İzin verilmez", "En zorlu"],
          ["V-1", "Daha uzun", "İzin verilmez", "Orta"],
          ["V-2", "V-1 ile benzer", "İzin verilir", "En az"],
        ],
      },
      faq: [
        { q: "UL94 V-0 ne demek?", a: "UL94 V-0, Underwriters Laboratories'in UL-94 standardına göre dikey yanma testinde ulaşılabilen en yüksek sınıftır. Malzemenin alev uzaklaştırıldıktan sonra hızla sönmesini ve alev alan damlacık oluşturmamasını ifade eder." },
        { q: "V-0 ile V-2 arasındaki fark nedir?", a: "Her iki sınıfta da malzeme kendiliğinden söner; ancak V-0'da sönme süresi daha kısadır ve alev alan damlacığa izin verilmez. V-2 ise pamuk göstergeyi tutuşturan damlacıklara izin verir." },
        { q: "Bir malzemenin UL94 V-0 olduğunu nasıl anlarım?", a: "Bu bilgi ilgili grade'in teknik veri sayfasında (TDS) ve UL Yellow Card kaydında, geçerli olduğu numune kalınlığıyla birlikte yer alır. Sınıfı kalınlık bilgisi olmadan değerlendirmemek gerekir." },
        { q: "Hangi plastikler UL94 V-0 olabilir?", a: "Alev geciktirici PBT, PC, mPPO, PC/ABS ve poliamit compound'ları elektrik-elektronik uygulamalarında en yaygın V-0 seçenekleridir. PPS gibi yüksek performanslı malzemeler ise doğal yapıları gereği ek katkı olmadan yüksek yanmazlık sınıfına ulaşabilir." },
      ],
    },
    en: {
      answer: "UL94 V-0 is the highest flammability class in the vertical burning test for plastic materials. A V-0 material self-extinguishes in the shortest time once the flame is removed and produces no flaming drips. The class always applies to a specific specimen thickness.",
      table: {
        caption: "UL-94 vertical burning classes — relative comparison",
        head: ["Class", "Extinguishing time", "Flaming drips", "Difficulty"],
        rows: [
          ["V-0", "Shortest", "Not permitted", "Most demanding"],
          ["V-1", "Longer", "Not permitted", "Medium"],
          ["V-2", "Similar to V-1", "Permitted", "Least"],
        ],
      },
      faq: [
        { q: "What does UL94 V-0 mean?", a: "UL94 V-0 is the highest class achievable in the vertical burning test under the UL-94 standard from Underwriters Laboratories. It means the material extinguishes quickly once the flame is removed and does not produce flaming drips." },
        { q: "What is the difference between V-0 and V-2?", a: "In both classes the material self-extinguishes, but in V-0 the extinguishing time is shorter and flaming drips are not permitted. V-2 permits drips that ignite the cotton indicator." },
        { q: "How do I know whether a material is UL94 V-0?", a: "This information is in the grade's technical data sheet (TDS) and its UL Yellow Card listing, together with the specimen thickness it applies to. The class should never be assessed without the thickness." },
        { q: "Which plastics can be UL94 V-0?", a: "Flame retardant PBT, PC, mPPO, PC/ABS and polyamide compounds are the most common V-0 options in electrical and electronic applications. High-performance materials such as PPS can reach a high flammability class inherently, without additional additives." },
      ],
    },
    ro: {
      answer: "UL94 V-0 este cea mai înaltă clasă de inflamabilitate în testul de ardere verticală pentru materiale plastice. Un material V-0 se autostinge în cel mai scurt timp după îndepărtarea flăcării și nu produce picături aprinse. Clasa se aplică întotdeauna unei grosimi specifice a epruvetei.",
      table: {
        caption: "Clasele de ardere verticală UL-94 — comparație relativă",
        head: ["Clasă", "Timp de stingere", "Picături aprinse", "Dificultate"],
        rows: [
          ["V-0", "Cel mai scurt", "Nepermise", "Cea mai exigentă"],
          ["V-1", "Mai lung", "Nepermise", "Medie"],
          ["V-2", "Similar cu V-1", "Permise", "Cea mai mică"],
        ],
      },
      faq: [
        { q: "Ce înseamnă UL94 V-0?", a: "UL94 V-0 este cea mai înaltă clasă care poate fi obținută în testul de ardere verticală conform standardului UL-94 al Underwriters Laboratories. Înseamnă că materialul se stinge rapid după îndepărtarea flăcării și nu produce picături aprinse." },
        { q: "Care este diferența dintre V-0 și V-2?", a: "În ambele clase materialul se autostinge, dar la V-0 timpul de stingere este mai scurt și picăturile aprinse nu sunt permise. V-2 permite picături care aprind indicatorul de bumbac." },
        { q: "Cum aflu dacă un material este UL94 V-0?", a: "Informația se găsește în fișa tehnică (TDS) a gradului și în înregistrarea UL Yellow Card, împreună cu grosimea epruvetei la care se aplică. Clasa nu trebuie evaluată fără grosime." },
        { q: "Ce plastice pot fi UL94 V-0?", a: "Compoundurile ignifuge de PBT, PC, mPPO, PC/ABS și poliamidă sunt cele mai frecvente opțiuni V-0 în aplicațiile electrice și electronice. Materialele de înaltă performanță precum PPS pot atinge intrinsec o clasă ridicată de inflamabilitate." },
      ],
    },
  },

  "pa6-pa66-farki": {
    tr: {
      answer: "PA66, PA6'ya göre daha yüksek erime sıcaklığına ve ısıl dayanıma sahiptir; bu nedenle motor bölmesi gibi sıcak ortamlarda tercih edilir. PA6 ise daha fazla nem alır ama daha geniş işleme penceresi, daha iyi yüzey kalitesi ve genellikle daha düşük maliyet sunar.",
      table: {
        caption: "PA6 vs PA66 — göreli karşılaştırma",
        head: ["Özellik", "PA6", "PA66"],
        rows: [
          ["Erime sıcaklığı / ısıl dayanım", "Daha düşük", "Daha yüksek"],
          ["Nem alımı", "Daha fazla", "Daha az"],
          ["Rijitlik (kuru)", "Biraz daha düşük", "Biraz daha yüksek"],
          ["Yüzey kalitesi", "Genellikle daha iyi", "İyi"],
          ["İşleme penceresi", "Daha geniş", "Daha dar"],
          ["Çevrim süresi", "Daha uzun olabilir", "Hızlı kristalleşme"],
          ["Maliyet", "Genellikle daha düşük", "Genellikle daha yüksek"],
        ],
      },
      faq: [
        { q: "PA6 ve PA66 arasındaki temel fark nedir?", a: "PA6 tek bir monomerden, PA66 ise iki farklı monomerden üretilir. Bu yapısal fark nedeniyle PA66 daha yüksek erime sıcaklığına ve ısıl dayanıma sahiptir; PA6 ise daha fazla nem alır ama daha kolay işlenir." },
        { q: "Yüksek sıcaklık için PA6 mı PA66 mı?", a: "Sürekli yüksek sıcaklığa maruz kalan parçalarda — örneğin motor bölmesi bileşenlerinde — PA66 genellikle daha uygun bir seçimdir." },
        { q: "Naylon PA6 ile aynı şey mi?", a: "Naylon, poliamit ailesinin yaygın ticari adıdır. PA6 ve PA66 en çok kullanılan iki naylon tipidir." },
      ],
    },
    en: {
      answer: "PA66 has a higher melting temperature and thermal performance than PA6, so it is preferred in hot environments such as under the hood. PA6 absorbs more moisture but offers a wider processing window, better surface quality and usually lower cost.",
      table: {
        caption: "PA6 vs PA66 — relative comparison",
        head: ["Property", "PA6", "PA66"],
        rows: [
          ["Melting temperature / heat resistance", "Lower", "Higher"],
          ["Moisture uptake", "Higher", "Lower"],
          ["Stiffness (dry)", "Slightly lower", "Slightly higher"],
          ["Surface quality", "Generally better", "Good"],
          ["Processing window", "Wider", "Narrower"],
          ["Cycle time", "Can be longer", "Fast crystallisation"],
          ["Cost", "Generally lower", "Generally higher"],
        ],
      },
      faq: [
        { q: "What is the main difference between PA6 and PA66?", a: "PA6 is produced from a single monomer and PA66 from two different monomers. Because of this structural difference, PA66 has a higher melting temperature and thermal performance, while PA6 absorbs more moisture but processes more easily." },
        { q: "PA6 or PA66 for high temperature?", a: "For parts continuously exposed to high temperature — such as under-the-hood components — PA66 is generally the more suitable choice." },
        { q: "Is nylon the same as PA6?", a: "Nylon is the common trade name of the polyamide family. PA6 and PA66 are the two most widely used nylon types." },
      ],
    },
    ro: {
      answer: "PA66 are o temperatură de topire și o performanță termică mai ridicate decât PA6, de aceea este preferat în medii calde, precum compartimentul motor. PA6 absoarbe mai multă umiditate, dar oferă o fereastră de procesare mai largă, o calitate mai bună a suprafeței și de obicei un cost mai mic.",
      table: {
        caption: "PA6 vs PA66 — comparație relativă",
        head: ["Proprietate", "PA6", "PA66"],
        rows: [
          ["Temperatură de topire / rezistență termică", "Mai mică", "Mai mare"],
          ["Absorbție de umiditate", "Mai mare", "Mai mică"],
          ["Rigiditate (uscat)", "Puțin mai mică", "Puțin mai mare"],
          ["Calitatea suprafeței", "În general mai bună", "Bună"],
          ["Fereastră de procesare", "Mai largă", "Mai îngustă"],
          ["Timp de ciclu", "Poate fi mai lung", "Cristalizare rapidă"],
          ["Cost", "În general mai mic", "În general mai mare"],
        ],
      },
      faq: [
        { q: "Care este principala diferență dintre PA6 și PA66?", a: "PA6 este produs dintr-un singur monomer, iar PA66 din doi monomeri diferiți. Din cauza acestei diferențe structurale, PA66 are o temperatură de topire și o performanță termică mai mari, în timp ce PA6 absoarbe mai multă umiditate, dar se prelucrează mai ușor." },
        { q: "PA6 sau PA66 pentru temperaturi ridicate?", a: "Pentru piese expuse continuu la temperaturi ridicate — de exemplu componente din compartimentul motor — PA66 este în general alegerea mai potrivită." },
        { q: "Nailonul este același lucru cu PA6?", a: "Nailonul este denumirea comercială uzuală a familiei poliamidelor. PA6 și PA66 sunt cele mai utilizate două tipuri de nailon." },
      ],
    },
  },

  "cam-elyaf-orani-secimi": {
    tr: {
      answer: "Cam elyaf oranı arttıkça rijitlik, dayanım ve ısıl deformasyon sıcaklığı yükselir; buna karşılık tokluk, yüzey kalitesi ve kalıp ömrü düşer. Düşük oranlar (yaklaşık %10–20) tokluğu korur, %30 çoğu mühendislik uygulamasında standart tercihtir, %40 ve üzeri ise metal ikamesi gibi yapısal parçalar içindir.",
      faq: [
        { q: "GF30 ne demek?", a: "GF30, malzemenin ağırlıkça yaklaşık %30 cam elyaf (glass fibre) takviyeli olduğunu ifade eder. Örneğin PA66-GF30, %30 cam elyaf takviyeli PA66 anlamına gelir." },
        { q: "Cam elyaf parçada çarpılmaya neden olur mu?", a: "Evet, olabilir. Cam elyaflar akış yönünde dizilme eğiliminde olduğu için çekme oranı yön bağımlı hale gelir ve parça çarpılabilir. Yolluk konumu ve akış tasarımı bu nedenle kritik önemdedir." },
        { q: "En uygun cam elyaf oranını nasıl seçerim?", a: "Parçanın yük durumu, darbe beklentisi ve görünüm gereksinimi birlikte değerlendirilmelidir. Sayısal değerler grade'e göre değiştiği için karar öncesi ilgili TDS'in incelenmesi gerekir." },
      ],
    },
    en: {
      answer: "As glass fibre content increases, stiffness, strength and heat deflection temperature rise, while toughness, surface quality and mould life decrease. Low contents (around 10–20%) preserve toughness, 30% is the standard choice for most engineering applications, and 40% and above is for structural parts such as metal replacement.",
      faq: [
        { q: "What does GF30 mean?", a: "GF30 means the material is reinforced with approximately 30% glass fibre by weight. For example, PA66-GF30 means PA66 reinforced with 30% glass fibre." },
        { q: "Does glass fibre cause warpage?", a: "Yes, it can. Because glass fibres tend to align in the flow direction, shrinkage becomes direction dependent and the part may warp. Gate location and flow design are therefore critical." },
        { q: "How do I choose the right glass fibre content?", a: "The part's load conditions, impact expectations and appearance requirements must be considered together. As numerical values vary by grade, the relevant TDS should be reviewed before deciding." },
      ],
    },
    ro: {
      answer: "Pe măsură ce conținutul de fibră de sticlă crește, rigiditatea, rezistența și temperatura de deformare termică cresc, în timp ce tenacitatea, calitatea suprafeței și durata de viață a matriței scad. Conținuturile reduse (circa 10–20%) păstrează tenacitatea, 30% este alegerea standard, iar 40% și peste sunt pentru piese structurale.",
      faq: [
        { q: "Ce înseamnă GF30?", a: "GF30 înseamnă că materialul este armat cu aproximativ 30% fibră de sticlă în greutate. De exemplu, PA66-GF30 înseamnă PA66 armat cu 30% fibră de sticlă." },
        { q: "Fibra de sticlă provoacă deformarea piesei?", a: "Da, poate. Deoarece fibrele tind să se alinieze în direcția de curgere, contracția devine dependentă de direcție și piesa se poate deforma. Poziția punctului de injecție și proiectarea curgerii sunt critice." },
        { q: "Cum aleg conținutul potrivit de fibră de sticlă?", a: "Trebuie evaluate împreună solicitările piesei, așteptările privind impactul și cerințele de aspect. Deoarece valorile numerice variază în funcție de grad, TDS-ul trebuie consultat înainte de decizie." },
      ],
    },
  },

  "plastik-hammadde-kurutma": {
    tr: {
      answer: "PC, PBT ve PA gibi higroskopik plastikler havadaki nemi emer; kurutulmadan işlenirlerse nem yüksek sıcaklıkta hidrolize yol açarak malzemenin dayanımını kalıcı olarak düşürür. Kurutma sıcaklığı ve süresi grade'e göre değişir ve TDS'ten alınmalıdır; higroskopik malzemelerde desikantlı (kuru hava) kurutucu tercih edilmelidir.",
      faq: [
        { q: "Hangi plastikler kurutulmalı?", a: "Polikarbonat (PC), PBT, poliamit (PA6/PA66), PC/ABS ve ABS gibi nem alan (higroskopik) malzemeler işleme öncesinde kurutulmalıdır. Kurutma koşulları ilgili grade'in TDS'inde belirtilir." },
        { q: "Kurutulmamış malzemenin belirtileri nelerdir?", a: "Yüzeyde gümüş çizgiler, kabarcık, mat lekeler, kırılganlık ve beklenenden düşük darbe dayanımı tipik belirtilerdir." },
        { q: "Hidroliz hasarı geri döndürülebilir mi?", a: "Hayır. Hidroliz polimer zincirlerini kısalttığı için kaybedilen dayanım, malzeme sonradan kurutulup tekrar işlense bile geri gelmez." },
      ],
    },
    en: {
      answer: "Hygroscopic plastics such as PC, PBT and PA absorb moisture from the air; if processed without drying, the moisture causes hydrolysis at high temperature and permanently reduces the material's strength. Drying temperature and time vary by grade and should be taken from the TDS; desiccant (dry air) dryers should be used for hygroscopic materials.",
      faq: [
        { q: "Which plastics need drying?", a: "Moisture-absorbing (hygroscopic) materials such as polycarbonate (PC), PBT, polyamide (PA6/PA66), PC/ABS and ABS should be dried before processing. Drying conditions are stated in the grade's TDS." },
        { q: "What are the signs of undried material?", a: "Silver streaks on the surface, bubbles, matt patches, brittleness and lower than expected impact strength are typical signs." },
        { q: "Is hydrolysis damage reversible?", a: "No. Because hydrolysis shortens the polymer chains, the lost strength does not return even if the material is later dried and reprocessed." },
      ],
    },
    ro: {
      answer: "Plasticele higroscopice precum PC, PBT și PA absorb umiditate din aer; dacă sunt procesate fără uscare, umiditatea provoacă hidroliză la temperatură ridicată și reduce permanent rezistența materialului. Temperatura și durata de uscare variază în funcție de grad și trebuie luate din TDS; pentru materialele higroscopice se folosesc uscătoare cu desicant.",
      faq: [
        { q: "Ce plastice trebuie uscate?", a: "Materialele higroscopice precum policarbonatul (PC), PBT, poliamida (PA6/PA66), PC/ABS și ABS trebuie uscate înainte de procesare. Condițiile de uscare sunt indicate în TDS-ul gradului." },
        { q: "Care sunt semnele materialului neuscat?", a: "Dungile argintii pe suprafață, bulele, petele mate, fragilitatea și rezistența la impact mai mică decât cea așteptată sunt semne tipice." },
        { q: "Deteriorarea prin hidroliză este reversibilă?", a: "Nu. Deoarece hidroliza scurtează lanțurile polimerice, rezistența pierdută nu revine nici dacă materialul este uscat și reprocesat ulterior." },
      ],
    },
  },
};

export function getBlogExtra(slug: string, locale: string): BlogExtra | null {
  const e = X[slug];
  if (!e) return null;
  return e[(locale as Lang)] ?? e.tr;
}
