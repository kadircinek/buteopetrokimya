/**
 * Teknik rehber / blog yazıları.
 *
 * DÜRÜSTLÜK KURALI: Yazılar yalnızca genel kabul görmüş malzeme bilimi
 * bilgilerini ve Buteo'nun kendi hizmet koşullarını içerir. Hiçbir grade'e
 * ait sayısal teknik değer uydurulmaz; sayısal veriler için TDS'e yönlendirilir.
 */

export type BlogSection = { h: string; p: string[] };

export type BlogPost = {
  slug: string;
  date: string;            // ISO — yayın tarihi
  category: string;        // i18n edilmiş kategori etiketi
  title: string;
  excerpt: string;
  readingMinutes: number;
  sections: BlogSection[];
  /** İçeriğe uygun marka slug'ları — iç linkleme için. */
  relatedBrands: string[];
};

type Lang = "tr" | "en" | "ro";

/* ══════════════════════ TÜRKÇE ══════════════════════ */
const TR: BlogPost[] = [
  {
    slug: "pc-mi-abs-mi",
    date: "2026-09-02",
    category: "Malzeme Seçimi",
    title: "PC mi ABS mi? PC/ABS Nedir — 5 Kriterde Karşılaştırma",
    excerpt:
      "Polikarbonat ve ABS, mühendislik plastiklerinde en sık karşılaştırılan iki malzeme. Hangi durumda hangisini seçmelisiniz?",
    readingMinutes: 6,
    relatedBrands: ["lupoy", "lupos"],
    sections: [
      {
        h: "İki malzemenin temel farkı",
        p: [
          "Polikarbonat (PC) ve ABS, her ikisi de amorf termoplastiklerdir; yani belirgin bir erime noktası yerine yumuşama aralığına sahiptirler ve çekme oranları düşük, öngörülebilirdir. Buradan sonrası ise belirgin şekilde ayrışır.",
          "PC, mühendislik plastikleri arasında darbe dayanımı en yüksek malzemelerden biridir ve optik saydamlık sunabilir. ABS ise daha kolay işlenir, yüzey kalitesi ve boyutsal kararlılığı yüksektir, kaplanabilir ve maliyeti belirgin şekilde daha düşüktür.",
          "Bu nedenle seçim çoğunlukla \"hangisi daha iyi\" sorusu değil, \"uygulamanın hangi kriteri zorluyor\" sorusudur.",
        ],
      },
      {
        h: "1. Darbe dayanımı kritik mi?",
        p: [
          "Parça düşme, çarpma veya ani yük altında kalacaksa PC belirgin şekilde öne çıkar. Özellikle düşük sıcaklıkta darbe dayanımı gereken uygulamalarda ABS zorlanabilir.",
          "Buna karşılık, darbe yükü orta düzeydeyse ABS'nin sunduğu tokluk çoğu tüketici ürünü için yeterlidir ve maliyet avantajı belirleyici olur.",
        ],
      },
      {
        h: "2. Şeffaflık gerekiyor mu?",
        p: [
          "Işık geçirmesi gereken bir parça tasarlıyorsanız ABS bir seçenek değildir; ABS doğası gereği opaktır. PC ise cam benzeri saydamlık sunabilir ve aydınlatma, gözetleme camı, koruyucu kapak gibi uygulamalarda bu özellik belirleyicidir.",
        ],
      },
      {
        h: "3. Isıl dayanım beklentisi nedir?",
        p: [
          "PC'nin ısıl deformasyon sıcaklığı genel olarak standart ABS tiplerinden yüksektir. Parça sıcak bir ortamda çalışacaksa veya buharlı temizlik gibi işlemlere maruz kalacaksa PC daha güvenli bir tercihtir.",
          "Isıya dayanıklı ABS tipleri de mevcuttur; ara bir çözüm arıyorsanız bu tipler veya PC/ABS alaşımları değerlendirilebilir.",
        ],
      },
      {
        h: "4. Yüzey işlemi yapılacak mı?",
        p: [
          "ABS, kaplama (galvanik metalizasyon) ve boyama açısından çok elverişlidir; dekoratif parçalarda bu büyük bir avantajdır. PC de boyanabilir ancak yüzey hazırlığı ve uyumluluk daha dikkatli yönetilmelidir.",
        ],
      },
      {
        h: "5. Kimyasal temas var mı?",
        p: [
          "PC, bazı çözücüler ve alkali ortamlara karşı hassastır ve gerilme çatlaması (stress cracking) riski taşır. Parça temizlik kimyasalları, yağ veya solventle temas edecekse malzeme uyumluluğu mutlaka önceden doğrulanmalıdır.",
          "Bu değerlendirme grade'e göre değişir; ilgili grade'in teknik veri sayfasındaki kimyasal direnç bilgileri esas alınmalıdır.",
        ],
      },
      {
        h: "Ara çözüm: PC/ABS alaşımları",
        p: [
          "Çoğu projede ihtiyaç tam olarak ikisinin ortasındadır: PC'nin darbe dayanımı ve ısıl performansı isteniyor ama ABS'nin işlenebilirliği ve maliyeti de gerekiyor. PC/ABS alaşımları tam olarak bu boşluğu doldurur ve otomotiv iç trim ile elektronik muhafazalarda çok yaygındır.",
          "Hangi yönde ağırlık verileceği alaşım oranıyla ayarlanır; bu nedenle PC/ABS seçiminde grade bazlı değerlendirme özellikle önemlidir.",
        ],
      },
      {
        h: "Karar verirken",
        p: [
          "Doğru malzeme, çoğu zaman en yüksek performanslı olan değil, uygulamanın gerçek gereksinimlerini en uygun maliyetle karşılayandır. Parçanın çalışma sıcaklığı, maruz kaldığı yük tipi, kimyasal ortam ve görsel beklentileri netleştirdiğinizde seçim genelde kendiliğinden belirginleşir.",
          "Buteo Petrokimya olarak LG Chem'in LUPOY (PC), LUPOS (stiren bazlı) ve PC/ABS alaşımlarının tamamına erişimimiz var. Uygulamanızı bize aktarın; teknik ekibimizle birlikte uygun grade'leri belirleyip TDS ve numune desteği sağlayalım.",
        ],
      },
    ],
  },
  {
    slug: "ul-94-v0-nedir",
    date: "2026-08-24",
    category: "Teknik Rehber",
    title: "UL94 V-0 Nedir? UL-94 Yanmazlık Sınıfları (V-0, V-1, V-2)",
    excerpt:
      "Elektrik-elektronik projelerinde en sık istenen sertifikasyonlardan biri UL-94 V-0. Sınıflar ne anlama geliyor, nasıl seçim yapılır?",
    readingMinutes: 5,
    relatedBrands: ["lumiloy", "lupox-lumax", "lupoy"],
    sections: [
      {
        h: "UL-94 nedir?",
        p: [
          "UL-94, plastik malzemelerin yanma davranışını sınıflandıran, dünya genelinde kabul görmüş bir yanabilirlik standardıdır. Özellikle elektrik-elektronik sektöründe parça onayının ön koşulu olarak istenir.",
          "Standart, malzemenin alev kaynağı uzaklaştırıldıktan sonra kendi kendine sönme davranışını ve alev alan damlacık oluşturup oluşturmadığını değerlendirir.",
        ],
      },
      {
        h: "Dikey test sınıfları: V-0, V-1, V-2",
        p: [
          "Dikey yanma testinde üç ana sınıf bulunur. V-0 en yüksek, yani en zorlu sınıftır: alev uzaklaştırıldıktan sonra en kısa sürede sönme beklenir ve alev alan damlacık oluşumuna izin verilmez.",
          "V-1 sınıfında sönme süresi daha uzun olabilir ancak yine alev alan damlacık kabul edilmez. V-2 ise sönme davranışı açısından V-1'e benzer, fakat pamuk göstergeyi tutuşturan damlacıklara izin verir.",
          "Bu nedenle bir müşteri şartnamesinde \"V-0\" görüyorsanız, yalnızca sönme hızının değil, damlama davranışının da kritik olduğunu bilmelisiniz.",
        ],
      },
      {
        h: "Kalınlık bilgisi olmadan sınıf bir şey ifade etmez",
        p: [
          "En sık yapılan hata, sınıfı kalınlıktan bağımsız düşünmektir. UL-94 sınıfı her zaman belirli bir numune kalınlığı için geçerlidir. Bir malzeme kalın kesitte V-0 sınıfını sağlarken, ince cidarda aynı sınıfı sağlayamayabilir.",
          "Bu yüzden malzeme seçerken \"V-0\" değil, \"hangi kalınlıkta V-0\" sorusu sorulmalıdır. Bu bilgi ilgili grade'in teknik veri sayfasında ve UL Yellow Card kaydında yer alır.",
        ],
      },
      {
        h: "Halojenli mi, halojensiz mi?",
        p: [
          "Alev geciktiricilik farklı katkı sistemleriyle sağlanabilir. Halojen içeren sistemler etkili olmakla birlikte, çevresel düzenlemeler ve müşteri politikaları nedeniyle birçok projede halojensiz (halogen-free) çözümler talep edilmektedir.",
          "Halojensiz sistemler genellikle fosfor bazlıdır ve malzemenin mekanik ile ısıl özelliklerini farklı biçimde etkileyebilir. Bu nedenle halojensiz gereklilik varsa, bunun proje başında belirtilmesi doğru grade seçimini hızlandırır.",
        ],
      },
      {
        h: "Hangi malzeme aileleri öne çıkar?",
        p: [
          "Elektrik-elektronik uygulamalarında alev geciktirici PBT, PC, mPPO ve poliamit compound'ları en yaygın tercihlerdir. mPPO alaşımları halojensiz alev geciktiricilikte ve boyutsal kararlılıkta öne çıkar; PBT konnektör ve bobin karkası gibi parçalarda yaygındır.",
          "PPS gibi yüksek performanslı malzemeler ise doğal yapıları gereği ek katkı olmadan yüksek yanmazlık sınıfına ulaşabilir.",
        ],
      },
      {
        h: "Seçim yaparken bize sorun",
        p: [
          "UL-94 sınıfı, kalınlık, halojensizlik ve renk gereklilikleri birlikte değerlendirildiğinde uygun grade listesi hızla daralır. Şartnamenizi bizimle paylaşın; LG Chem ve Basechem portföyünden uygun alternatifleri belirleyip resmî TDS ve numune desteği sağlayalım.",
        ],
      },
    ],
  },
  {
    slug: "pa6-pa66-farki",
    date: "2026-08-11",
    category: "Malzeme Seçimi",
    title: "PA6 vs PA66: Farkları Nelerdir? Karşılaştırma Tablosu",
    excerpt:
      "İki poliamit tipi ilk bakışta çok benzer görünür ama ısıl dayanım, nem alımı ve maliyet açısından önemli farkları vardır.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy"],
    sections: [
      {
        h: "Aynı aile, farklı yapı",
        p: [
          "PA6 ve PA66'nın ikisi de alifatik poliamittir ve mühendislik plastikleri arasında en yaygın kullanılan gruptur. Farkları moleküler yapılarından kaynaklanır: PA6 tek bir monomerden, PA66 ise iki farklı monomerin birleşiminden üretilir.",
          "Bu yapısal fark, kristallenme davranışını ve dolayısıyla ısıl ile mekanik performansı doğrudan etkiler.",
        ],
      },
      {
        h: "Isıl dayanım",
        p: [
          "PA66'nın erime sıcaklığı PA6'ya göre belirgin şekilde yüksektir. Bu nedenle motor bölmesi gibi sürekli yüksek sıcaklığa maruz kalan parçalarda PA66 tercih edilir.",
          "PA6 ise daha düşük sıcaklıkta işlenebildiği için enerji tüketimi ve çevrim süresi açısından avantaj sağlayabilir.",
        ],
      },
      {
        h: "Nem alımı — en kritik fark",
        p: [
          "Poliamitler higroskopiktir; havadaki nemi bünyelerine alırlar. PA6, PA66'ya göre daha fazla nem alır. Nem alımı parçanın boyutlarını büyütür, rijitliğini düşürür ve tokluğunu artırır.",
          "Bu, hassas toleranslı parçalarda kritik bir konudur: kalıptan çıkan parça ile birkaç hafta sonraki parça aynı ölçüde olmayabilir. Tasarım ve ölçüm süreçlerinde bu durum mutlaka hesaba katılmalıdır.",
          "Ayrıca işleme öncesi kurutma her iki tip için de zorunludur; yetersiz kurutma yüzey kusurlarına ve mekanik dayanım kaybına yol açar.",
        ],
      },
      {
        h: "Yüzey kalitesi ve işlenebilirlik",
        p: [
          "PA6 daha geniş bir işleme penceresine sahiptir ve genellikle daha iyi yüzey kalitesi verir. PA66 ise hızlı kristalleşmesi nedeniyle daha kısa çevrim süresi sunabilir ancak kalıp sıcaklığı kontrolü daha kritiktir.",
        ],
      },
      {
        h: "Cam elyaf takviyesi tabloyu değiştirir",
        p: [
          "Mühendislik uygulamalarında poliamitler çoğunlukla cam elyaf takviyeli olarak kullanılır. Takviye, rijitliği ve ısıl deformasyon sıcaklığını belirgin şekilde artırırken nem alımının boyutsal etkisini de azaltır.",
          "Takviye oranı arttıkça rijitlik ve dayanım yükselir, buna karşılık tokluk ve yüzey kalitesi düşer. Doğru oran, uygulamanın yük ve görünüm beklentisine göre belirlenir.",
        ],
      },
      {
        h: "Hangisini seçmeli?",
        p: [
          "Sürekli yüksek sıcaklık ve maksimum mekanik dayanım öncelikliyse PA66; maliyet, işlenebilirlik ve yüzey kalitesi öncelikliyse PA6 genellikle daha uygundur. Çoğu projede ise karar, cam elyaf oranı ve alev geciktiricilik gereksinimiyle birlikte verilir.",
          "LG Chem'in LUMID ve LUXY aileleri her iki poliamit tipinde de geniş grade seçeneği sunar. Uygulamanızı iletin, uygun alternatifleri birlikte belirleyelim.",
        ],
      },
    ],
  },
  {
    slug: "cam-elyaf-orani-secimi",
    date: "2026-07-28",
    category: "Teknik Rehber",
    title: "Cam Elyaf Oranı Nasıl Seçilir? %15, %30, %50 Ne Değiştirir?",
    excerpt:
      "Cam elyaf takviyesi rijitliği artırır ama her artış bedelsiz değildir. Doğru oranı belirlemenin pratik yolu.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy", "lupox-lumax", "lusep", "lupol"],
    sections: [
      {
        h: "Cam elyaf ne yapar?",
        p: [
          "Cam elyaf takviyesi, polimer matrisi içinde yük taşıyan bir iskelet oluşturur. Bunun sonucunda rijitlik (elastisite modülü), çekme dayanımı ve ısıl deformasyon sıcaklığı belirgin şekilde artar.",
          "Aynı zamanda çekme oranını düşürür ve boyutsal kararlılığı iyileştirir; bu özellikle hassas toleranslı parçalarda önemlidir.",
        ],
      },
      {
        h: "Bedeli ne?",
        p: [
          "Her avantajın bir karşılığı vardır. Cam elyaf oranı arttıkça malzeme daha kırılgan hale gelir, tokluk ve kopma uzaması düşer. Darbe altında çalışan parçalarda bu durum kritik olabilir.",
          "Yüzey kalitesi de etkilenir: yüksek elyaf oranlarında yüzeyde elyaf izleri belirginleşebilir, bu da görünen parçalarda sorun yaratır.",
          "Ayrıca elyaf aşındırıcıdır; kalıp ve vida-kovan aşınması artar, bakım periyotları kısalır.",
        ],
      },
      {
        h: "Anizotropi — sık gözden kaçan konu",
        p: [
          "Cam elyaflar akış yönünde dizilme eğilimindedir. Bu, parçanın akış yönünde ve akışa dik yönde farklı davranması anlamına gelir — çekme oranları ve dayanım değerleri yön bağımlı hale gelir.",
          "Sonuç olarak parça çarpılabilir (warpage). Yolluk konumu ve akış tasarımı, yüksek elyaf oranlarında beklenenden daha kritik hale gelir.",
        ],
      },
      {
        h: "Pratik yaklaşım",
        p: [
          "Düşük oranlar (yaklaşık %10–20), boyutsal kararlılık iyileştirmesi ve orta düzey rijitlik artışı istenen, tokluğun da korunması gereken parçalar için uygundur.",
          "Orta oranlar (yaklaşık %30), mühendislik uygulamalarının çoğunda standart tercihtir: dayanım ile tokluk arasında dengeli bir noktadır.",
          "Yüksek oranlar (%40 ve üzeri), metal ikamesi hedeflenen, maksimum rijitlik ve ısıl dayanım gereken yapısal parçalar içindir; ancak tasarımın çarpılma ve kırılganlık açısından dikkatle ele alınması gerekir.",
        ],
      },
      {
        h: "Sayısal değerler için TDS",
        p: [
          "Yukarıdaki eğilimler geneldir; her grade'in gerçek modül, dayanım ve çekme oranı değerleri formülasyona bağlıdır ve yalnızca resmî teknik veri sayfasında yer alır. Karar öncesi mutlaka ilgili grade'in TDS'i incelenmelidir.",
          "Buteo Petrokimya olarak LG Chem'in cam elyaf takviyeli PA, PBT, PPS ve PP compound'larına erişimimiz var. Parçanızın yük durumunu paylaşın, uygun takviye oranını birlikte belirleyelim ve numune ile doğrulayalım.",
        ],
      },
    ],
  },
  {
    slug: "plastik-hammadde-kurutma",
    date: "2026-07-15",
    category: "Üretim",
    title: "Plastik Hammadde Kurutma: Neden ve Nasıl?",
    excerpt:
      "Enjeksiyonda karşılaşılan yüzey kusurlarının ve dayanım kayıplarının büyük bölümü yetersiz kurutmadan kaynaklanır.",
    readingMinutes: 4,
    relatedBrands: ["lumid-luxy", "lupoy", "lupox-lumax"],
    sections: [
      {
        h: "Nem neden sorun?",
        p: [
          "Bazı polimerler havadaki nemi bünyelerine alır. İşleme sırasında yüksek sıcaklıkta bu nem buharlaşır ve iki tür sorun yaratır: yüzeyde görünen kusurlar ve moleküler yapıda kalıcı hasar.",
          "Poliester (PBT), polikarbonat (PC) ve poliamit (PA) gibi malzemelerde nem, yüksek sıcaklıkta hidroliz reaksiyonuna yol açar. Bu reaksiyon polimer zincirlerini kısaltır — yani molekül ağırlığı düşer ve malzeme kalıcı olarak dayanımını kaybeder.",
          "Kritik nokta şudur: hidroliz hasarı geri döndürülemez. Parça kurutulduktan sonra tekrar işlense bile kaybedilen dayanım geri gelmez.",
        ],
      },
      {
        h: "Belirtiler",
        p: [
          "Yetersiz kurutmanın tipik işaretleri arasında yüzeyde gümüş çizgiler (silver streaks), kabarcık, mat lekeler, kırılganlık ve beklenenden düşük darbe dayanımı bulunur.",
          "Şeffaf parçalarda bulanıklık, cam elyaf takviyeli parçalarda ise yüzeyde belirgin elyaf izleri görülebilir.",
        ],
      },
      {
        h: "Doğru kurutma",
        p: [
          "Kurutma sıcaklığı ve süresi malzemeye ve grade'e göre değişir; bu değerler ilgili teknik veri sayfasında belirtilir ve tahminle belirlenmemelidir. Fazla kurutma da malzemeye zarar verebilir (renk değişimi, sararma).",
          "Higroskopik mühendislik plastikleri için sıcak hava kurutucular çoğu zaman yetersiz kalır; kuru hava (desikant) kurutucular tercih edilmelidir. Kurutucunun çiy noktası performansı düzenli kontrol edilmelidir.",
          "Kurutulmuş malzeme açık bırakıldığında kısa sürede tekrar nem alır. Bu nedenle malzeme kurutucudan makineye kapalı sistemle taşınmalı, ara beklemeler minimize edilmelidir.",
        ],
      },
      {
        h: "Depolama",
        p: [
          "Açılmamış orijinal ambalaj nem bariyeri sağlar. Açılan çuvallar mutlaka sıkıca kapatılmalı, kuru ve serin ortamda saklanmalıdır.",
          "Soğuk depodan alınan malzeme doğrudan işlenmemelidir; ambalaj yüzeyinde yoğuşma oluşabilir. Malzemenin ambalajı açılmadan oda sıcaklığına gelmesi beklenmelidir.",
        ],
      },
      {
        h: "Özet",
        p: [
          "Kurutma, üretim öncesi bir formalite değil, malzeme performansını doğrudan belirleyen bir işlem adımıdır. Doğru koşullar için her zaman ilgili grade'in TDS'i esas alınmalıdır.",
          "Tedarik ettiğimiz her ürün için resmî TDS'i paylaşıyoruz; kurutma ve işleme koşulları hakkında teknik ekibimizden destek alabilirsiniz.",
        ],
      },
    ],
  },
];

/* ══════════════════════ ENGLISH ══════════════════════ */
const EN: BlogPost[] = [
  {
    slug: "pc-mi-abs-mi",
    date: "2026-09-02",
    category: "Material Selection",
    title: "PC vs ABS: What Is PC/ABS? A 5-Criteria Comparison",
    excerpt:
      "Polycarbonate and ABS are the two most frequently compared engineering plastics. When should you choose which?",
    readingMinutes: 6,
    relatedBrands: ["lupoy", "lupos"],
    sections: [
      {
        h: "The fundamental difference",
        p: [
          "Polycarbonate (PC) and ABS are both amorphous thermoplastics — they have a softening range rather than a sharp melting point, and their shrinkage is low and predictable. Beyond that, they diverge significantly.",
          "PC has one of the highest impact strengths among engineering plastics and can offer optical clarity. ABS is easier to process, offers high surface quality and dimensional stability, can be plated, and costs markedly less.",
          "The choice is therefore rarely about which is better, but about which requirement the application is pushing hardest.",
        ],
      },
      {
        h: "1. Is impact strength critical?",
        p: [
          "If the part will be dropped, struck or subjected to sudden loads, PC stands out clearly. ABS can struggle in applications requiring low-temperature impact performance in particular.",
          "Where impact loading is moderate, however, the toughness of ABS is sufficient for most consumer products and the cost advantage becomes decisive.",
        ],
      },
      {
        h: "2. Is transparency required?",
        p: [
          "If you are designing a part that must transmit light, ABS is not an option — it is inherently opaque. PC can offer glass-like clarity, which is decisive in lighting, viewing windows and protective covers.",
        ],
      },
      {
        h: "3. What is the thermal requirement?",
        p: [
          "PC's heat deflection temperature is generally higher than that of standard ABS types. If the part will operate in a hot environment or be exposed to processes such as steam cleaning, PC is the safer choice.",
          "Heat resistant ABS types also exist; if you are looking for a middle ground, these types or PC/ABS alloys can be evaluated.",
        ],
      },
      {
        h: "4. Will the surface be treated?",
        p: [
          "ABS is very favourable for plating (electroplating) and painting, which is a major advantage in decorative parts. PC can also be painted, but surface preparation and compatibility must be managed more carefully.",
        ],
      },
      {
        h: "5. Is there chemical contact?",
        p: [
          "PC is sensitive to certain solvents and alkaline environments and carries a risk of stress cracking. If the part will contact cleaning chemicals, oils or solvents, material compatibility must be verified in advance.",
          "This assessment varies by grade; the chemical resistance information in the relevant technical data sheet should be used as the reference.",
        ],
      },
      {
        h: "The middle ground: PC/ABS alloys",
        p: [
          "In many projects the requirement sits exactly between the two: the impact strength and thermal performance of PC are wanted, but so are the processability and cost of ABS. PC/ABS alloys fill precisely this gap and are very common in automotive interior trim and electronic housings.",
          "The balance is tuned through the alloy ratio, which makes grade-level evaluation particularly important when selecting PC/ABS.",
        ],
      },
      {
        h: "Making the decision",
        p: [
          "The right material is usually not the highest performing one, but the one that meets the real requirements of the application at the most appropriate cost. Once you clarify the service temperature, load type, chemical environment and visual expectations, the choice usually becomes evident.",
          "At Buteo Petrochemicals we have access to LG Chem's LUPOY (PC), LUPOS (styrenics) and PC/ABS alloys. Share your application with us and our technical team will help identify suitable grades and provide TDS and sample support.",
        ],
      },
    ],
  },
  {
    slug: "ul-94-v0-nedir",
    date: "2026-08-24",
    category: "Technical Guide",
    title: "What Is UL94 V-0? UL-94 Flammability Classes (V-0, V-1, V-2)",
    excerpt:
      "UL-94 V-0 is one of the most frequently requested ratings in electrical and electronic projects. What do the classes mean and how do you choose?",
    readingMinutes: 5,
    relatedBrands: ["lumiloy", "lupox-lumax", "lupoy"],
    sections: [
      {
        h: "What is UL-94?",
        p: [
          "UL-94 is a globally recognised flammability standard that classifies the burning behaviour of plastic materials. It is frequently required as a precondition for part approval, particularly in the electrical and electronics sector.",
          "The standard evaluates whether the material self-extinguishes once the flame source is removed and whether it produces flaming drips.",
        ],
      },
      {
        h: "Vertical test classes: V-0, V-1, V-2",
        p: [
          "There are three main classes in the vertical burning test. V-0 is the highest, most demanding class: the shortest extinguishing time is expected after the flame is removed, and flaming drips are not permitted.",
          "V-1 allows a longer extinguishing time but still permits no flaming drips. V-2 is similar to V-1 in extinguishing behaviour but permits drips that ignite the cotton indicator.",
          "So when a customer specification says \"V-0\", it signals that not only extinguishing speed but also dripping behaviour is critical.",
        ],
      },
      {
        h: "The class means nothing without thickness",
        p: [
          "The most common mistake is thinking of the class independently of thickness. A UL-94 class always applies to a specific specimen thickness. A material may achieve V-0 at a thicker section and fail to achieve the same class in a thin wall.",
          "The question is therefore not \"is it V-0\" but \"at what thickness is it V-0\". This information is in the grade's technical data sheet and its UL Yellow Card listing.",
        ],
      },
      {
        h: "Halogenated or halogen-free?",
        p: [
          "Flame retardancy can be achieved through different additive systems. Halogenated systems are effective, but many projects now require halogen-free solutions due to environmental regulations and customer policies.",
          "Halogen-free systems are typically phosphorus based and can affect the mechanical and thermal properties of the material differently. If a halogen-free requirement exists, stating it at the start of the project speeds up correct grade selection.",
        ],
      },
      {
        h: "Which material families stand out?",
        p: [
          "In electrical and electronic applications, flame retardant PBT, PC, mPPO and polyamide compounds are the most common choices. mPPO alloys stand out for halogen-free flame retardancy and dimensional stability; PBT is widespread in connectors and coil bobbins.",
          "High-performance materials such as PPS can reach a high flammability rating inherently, without additional additives.",
        ],
      },
      {
        h: "Ask us when selecting",
        p: [
          "When UL-94 class, thickness, halogen-free status and colour requirements are considered together, the list of suitable grades narrows quickly. Share your specification with us and we will identify suitable alternatives from the LG Chem and Basechem portfolio, with official TDS and sample support.",
        ],
      },
    ],
  },
  {
    slug: "pa6-pa66-farki",
    date: "2026-08-11",
    category: "Material Selection",
    title: "PA6 vs PA66: Key Differences and Comparison Table",
    excerpt:
      "The two polyamide types look very similar at first glance, but differ significantly in thermal performance, moisture uptake and cost.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy"],
    sections: [
      {
        h: "Same family, different structure",
        p: [
          "PA6 and PA66 are both aliphatic polyamides and form the most widely used group among engineering plastics. Their difference stems from molecular structure: PA6 is produced from a single monomer, PA66 from the combination of two different monomers.",
          "This structural difference directly affects crystallisation behaviour and therefore thermal and mechanical performance.",
        ],
      },
      {
        h: "Thermal performance",
        p: [
          "PA66 has a markedly higher melting temperature than PA6. It is therefore preferred for parts continuously exposed to high temperature, such as under-the-hood components.",
          "PA6, being processable at lower temperature, can offer advantages in energy consumption and cycle time.",
        ],
      },
      {
        h: "Moisture uptake — the most critical difference",
        p: [
          "Polyamides are hygroscopic; they absorb moisture from the air. PA6 absorbs more moisture than PA66. Moisture uptake increases part dimensions, reduces stiffness and increases toughness.",
          "This is critical for tight-tolerance parts: a part straight out of the mould may not have the same dimensions as the same part a few weeks later. This must be accounted for in design and measurement processes.",
          "Drying before processing is mandatory for both types; insufficient drying leads to surface defects and loss of mechanical strength.",
        ],
      },
      {
        h: "Surface quality and processability",
        p: [
          "PA6 has a wider processing window and generally gives better surface quality. PA66 can offer shorter cycle times thanks to fast crystallisation, but mould temperature control is more critical.",
        ],
      },
      {
        h: "Glass fibre reinforcement changes the picture",
        p: [
          "In engineering applications polyamides are mostly used glass fibre reinforced. Reinforcement markedly increases stiffness and heat deflection temperature while also reducing the dimensional effect of moisture uptake.",
          "As fibre content rises, stiffness and strength increase while toughness and surface quality decrease. The right content is determined by the load and appearance expectations of the application.",
        ],
      },
      {
        h: "Which to choose?",
        p: [
          "If continuous high temperature and maximum mechanical strength are the priority, PA66 is usually more suitable; if cost, processability and surface quality lead, PA6 tends to fit better. In most projects the decision is made together with glass fibre content and flame retardancy requirements.",
          "LG Chem's LUMID and LUXY families offer a wide grade selection in both polyamide types. Send us your application and we will identify suitable alternatives together.",
        ],
      },
    ],
  },
  {
    slug: "cam-elyaf-orani-secimi",
    date: "2026-07-28",
    category: "Technical Guide",
    title: "How to Choose Glass Fibre Content: What Do 15%, 30% and 50% Change?",
    excerpt:
      "Glass fibre reinforcement increases stiffness, but every increase has a cost. A practical way to determine the right content.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy", "lupox-lumax", "lusep", "lupol"],
    sections: [
      {
        h: "What does glass fibre do?",
        p: [
          "Glass fibre reinforcement creates a load-bearing skeleton within the polymer matrix. As a result, stiffness (modulus of elasticity), tensile strength and heat deflection temperature increase markedly.",
          "It also reduces shrinkage and improves dimensional stability, which matters particularly for tight-tolerance parts.",
        ],
      },
      {
        h: "What is the cost?",
        p: [
          "Every advantage has a trade-off. As fibre content increases the material becomes more brittle; toughness and elongation at break decrease. This can be critical for parts under impact loading.",
          "Surface quality is also affected: at high fibre contents, fibre marks can become visible on the surface, which is a problem for visible parts.",
          "Fibre is also abrasive; mould and screw-barrel wear increase and maintenance intervals shorten.",
        ],
      },
      {
        h: "Anisotropy — the frequently overlooked issue",
        p: [
          "Glass fibres tend to align in the flow direction. This means the part behaves differently along and across the flow — shrinkage rates and strength values become direction dependent.",
          "As a result, parts can warp. Gate location and flow design become more critical than expected at high fibre contents.",
        ],
      },
      {
        h: "A practical approach",
        p: [
          "Low contents (roughly 10–20%) suit parts where improved dimensional stability and a moderate stiffness increase are wanted while toughness must be preserved.",
          "Medium contents (around 30%) are the standard choice for most engineering applications: a balanced point between strength and toughness.",
          "High contents (40% and above) are for structural parts targeting metal replacement, where maximum stiffness and thermal performance are required — but the design must be handled carefully with respect to warpage and brittleness.",
        ],
      },
      {
        h: "Numerical values come from the TDS",
        p: [
          "The trends above are general; the actual modulus, strength and shrinkage values of each grade depend on the formulation and appear only in the official technical data sheet. The TDS of the relevant grade must be reviewed before deciding.",
          "At Buteo Petrochemicals we have access to LG Chem's glass fibre reinforced PA, PBT, PPS and PP compounds. Share the loading conditions of your part and we will determine the right reinforcement content together and validate it with samples.",
        ],
      },
    ],
  },
  {
    slug: "plastik-hammadde-kurutma",
    date: "2026-07-15",
    category: "Production",
    title: "Drying Plastic Raw Materials: Why and How?",
    excerpt:
      "A large share of the surface defects and strength losses encountered in injection moulding stem from insufficient drying.",
    readingMinutes: 4,
    relatedBrands: ["lumid-luxy", "lupoy", "lupox-lumax"],
    sections: [
      {
        h: "Why is moisture a problem?",
        p: [
          "Some polymers absorb moisture from the air. During processing this moisture vaporises at high temperature and creates two kinds of problem: visible surface defects and permanent damage to the molecular structure.",
          "In materials such as polyester (PBT), polycarbonate (PC) and polyamide (PA), moisture causes a hydrolysis reaction at high temperature. This reaction shortens the polymer chains — molecular weight drops and the material permanently loses strength.",
          "The critical point is that hydrolysis damage is irreversible. Even if the material is dried and reprocessed, the lost strength does not return.",
        ],
      },
      {
        h: "Symptoms",
        p: [
          "Typical signs of insufficient drying include silver streaks on the surface, bubbles, matt patches, brittleness and lower than expected impact strength.",
          "Transparent parts can show haze, and glass fibre reinforced parts can show pronounced fibre marks on the surface.",
        ],
      },
      {
        h: "Drying correctly",
        p: [
          "Drying temperature and time vary by material and grade; these values are stated in the relevant technical data sheet and should not be estimated. Over-drying can also damage the material (colour change, yellowing).",
          "For hygroscopic engineering plastics, hot air dryers are often insufficient; desiccant (dry air) dryers should be used. The dryer's dew point performance should be checked regularly.",
          "Dried material reabsorbs moisture quickly if left open. Material should therefore be conveyed from dryer to machine in a closed system, with waiting times minimised.",
        ],
      },
      {
        h: "Storage",
        p: [
          "Unopened original packaging provides a moisture barrier. Opened bags must be sealed tightly and stored in a dry, cool environment.",
          "Material taken from cold storage should not be processed directly; condensation can form on the packaging surface. Allow the material to reach room temperature before opening the packaging.",
        ],
      },
      {
        h: "Summary",
        p: [
          "Drying is not a formality before production but a process step that directly determines material performance. Always use the TDS of the relevant grade for the correct conditions.",
          "We share the official TDS for every product we supply, and our technical team can support you on drying and processing conditions.",
        ],
      },
    ],
  },
];

/* ══════════════════════ ROMÂNĂ ══════════════════════ */
const RO: BlogPost[] = [
  {
    slug: "pc-mi-abs-mi",
    date: "2026-09-02",
    category: "Alegerea Materialului",
    title: "PC sau ABS? Ce Este PC/ABS — Comparație în 5 Criterii",
    excerpt:
      "Policarbonatul și ABS-ul sunt cele mai frecvent comparate materiale plastice tehnice. Când ar trebui să alegeți fiecare?",
    readingMinutes: 6,
    relatedBrands: ["lupoy", "lupos"],
    sections: [
      {
        h: "Diferența fundamentală",
        p: [
          "Policarbonatul (PC) și ABS-ul sunt ambele materiale termoplastice amorfe — au un interval de înmuiere în loc de un punct de topire precis, iar contracția lor este redusă și previzibilă. Dincolo de acest aspect, diferă semnificativ.",
          "PC-ul are una dintre cele mai ridicate rezistențe la impact dintre plasticele tehnice și poate oferi claritate optică. ABS-ul se procesează mai ușor, oferă calitate ridicată a suprafeței și stabilitate dimensională, poate fi metalizat și costă considerabil mai puțin.",
          "Alegerea nu este, așadar, despre care este mai bun, ci despre ce cerință solicită cel mai mult aplicația.",
        ],
      },
      {
        h: "1. Este critică rezistența la impact?",
        p: [
          "Dacă piesa va fi scăpată, lovită sau supusă unor sarcini bruște, PC-ul se remarcă net. ABS-ul poate întâmpina dificultăți mai ales în aplicații care necesită rezistență la impact la temperaturi scăzute.",
          "Însă acolo unde solicitarea la impact este moderată, tenacitatea ABS-ului este suficientă pentru majoritatea produselor de larg consum, iar avantajul de cost devine decisiv.",
        ],
      },
      {
        h: "2. Este necesară transparența?",
        p: [
          "Dacă proiectați o piesă care trebuie să transmită lumină, ABS-ul nu este o opțiune — este opac prin natura sa. PC-ul poate oferi claritate asemănătoare sticlei, ceea ce este decisiv în iluminat, vizoare și capace de protecție.",
        ],
      },
      {
        h: "3. Care este cerința termică?",
        p: [
          "Temperatura de deformare termică a PC-ului este în general mai ridicată decât cea a tipurilor standard de ABS. Dacă piesa va funcționa într-un mediu cald sau va fi expusă la procese precum curățarea cu abur, PC-ul este alegerea mai sigură.",
          "Există și tipuri de ABS rezistente la căldură; dacă doriți o soluție intermediară, aceste tipuri sau aliajele PC/ABS pot fi evaluate.",
        ],
      },
      {
        h: "4. Suprafața va fi tratată?",
        p: [
          "ABS-ul este foarte potrivit pentru metalizare (galvanizare) și vopsire, ceea ce reprezintă un avantaj major pentru piesele decorative. PC-ul poate fi de asemenea vopsit, dar pregătirea suprafeței și compatibilitatea trebuie gestionate mai atent.",
        ],
      },
      {
        h: "5. Există contact chimic?",
        p: [
          "PC-ul este sensibil la anumiți solvenți și medii alcaline și prezintă risc de fisurare sub tensiune. Dacă piesa va intra în contact cu substanțe de curățare, uleiuri sau solvenți, compatibilitatea materialului trebuie verificată în prealabil.",
          "Această evaluare variază în funcție de grad; informațiile privind rezistența chimică din fișa tehnică respectivă trebuie luate ca referință.",
        ],
      },
      {
        h: "Soluția intermediară: aliajele PC/ABS",
        p: [
          "În multe proiecte cerința se află exact între cele două: se doresc rezistența la impact și performanța termică ale PC-ului, dar și prelucrabilitatea și costul ABS-ului. Aliajele PC/ABS acoperă exact acest gol și sunt foarte răspândite în elementele de interior auto și carcasele electronice.",
          "Echilibrul se reglează prin raportul aliajului, ceea ce face evaluarea la nivel de grad deosebit de importantă la alegerea PC/ABS.",
        ],
      },
      {
        h: "Luarea deciziei",
        p: [
          "Materialul potrivit nu este de obicei cel cu cea mai ridicată performanță, ci cel care îndeplinește cerințele reale ale aplicației la costul cel mai potrivit. Odată clarificate temperatura de funcționare, tipul de solicitare, mediul chimic și așteptările vizuale, alegerea devine de obicei evidentă.",
          "La Buteo Petrochemicals avem acces la LUPOY (PC), LUPOS (stirenice) și aliajele PC/ABS de la LG Chem. Împărtășiți-ne aplicația dumneavoastră, iar echipa noastră tehnică vă va ajuta să identificați gradele potrivite și vă va oferi suport pentru TDS și mostre.",
        ],
      },
    ],
  },
  {
    slug: "ul-94-v0-nedir",
    date: "2026-08-24",
    category: "Ghid Tehnic",
    title: "Ce Înseamnă UL94 V-0? Clasele UL-94 (V-0, V-1, V-2)",
    excerpt:
      "UL-94 V-0 este una dintre cele mai frecvent solicitate clasificări în proiectele electrice și electronice. Ce înseamnă clasele și cum alegeți?",
    readingMinutes: 5,
    relatedBrands: ["lumiloy", "lupox-lumax", "lupoy"],
    sections: [
      {
        h: "Ce este UL-94?",
        p: [
          "UL-94 este un standard de inflamabilitate recunoscut la nivel mondial, care clasifică comportamentul la ardere al materialelor plastice. Este solicitat frecvent ca precondiție pentru aprobarea pieselor, în special în sectorul electric și electronic.",
          "Standardul evaluează dacă materialul se autostinge după îndepărtarea sursei de flacără și dacă produce picături aprinse.",
        ],
      },
      {
        h: "Clasele testului vertical: V-0, V-1, V-2",
        p: [
          "Testul vertical de ardere are trei clase principale. V-0 este cea mai înaltă și cea mai exigentă: se așteaptă cel mai scurt timp de stingere după îndepărtarea flăcării, iar picăturile aprinse nu sunt permise.",
          "V-1 permite un timp de stingere mai lung, dar tot fără picături aprinse. V-2 este similară cu V-1 în privința stingerii, dar permite picături care aprind indicatorul de bumbac.",
          "Așadar, când o specificație de client indică „V-0”, aceasta semnalează că nu doar viteza de stingere, ci și comportamentul la picurare este critic.",
        ],
      },
      {
        h: "Clasa nu înseamnă nimic fără grosime",
        p: [
          "Cea mai frecventă greșeală este considerarea clasei independent de grosime. O clasă UL-94 se aplică întotdeauna unei grosimi specifice a epruvetei. Un material poate atinge V-0 la o secțiune groasă și poate să nu atingă aceeași clasă la un perete subțire.",
          "Prin urmare, întrebarea nu este „este V-0?”, ci „la ce grosime este V-0?”. Această informație se află în fișa tehnică a gradului și în înregistrarea UL Yellow Card.",
        ],
      },
      {
        h: "Cu halogeni sau fără halogeni?",
        p: [
          "Ignifugarea poate fi obținută prin sisteme de aditivi diferite. Sistemele cu halogeni sunt eficiente, însă multe proiecte solicită astăzi soluții fără halogeni, din cauza reglementărilor de mediu și a politicilor clienților.",
          "Sistemele fără halogeni sunt de obicei pe bază de fosfor și pot influența diferit proprietățile mecanice și termice ale materialului. Dacă există o cerință fără halogeni, menționarea ei la începutul proiectului accelerează alegerea corectă a gradului.",
        ],
      },
      {
        h: "Ce familii de materiale se remarcă?",
        p: [
          "În aplicațiile electrice și electronice, compoundurile ignifuge de PBT, PC, mPPO și poliamidă sunt cele mai frecvente alegeri. Aliajele mPPO se remarcă prin ignifugare fără halogeni și stabilitate dimensională; PBT-ul este răspândit în conectori și carcase de bobine.",
          "Materialele de înaltă performanță precum PPS pot atinge intrinsec o clasificare ridicată de inflamabilitate, fără aditivi suplimentari.",
        ],
      },
      {
        h: "Întrebați-ne la selecție",
        p: [
          "Când clasa UL-94, grosimea, cerința fără halogeni și culoarea sunt luate în considerare împreună, lista gradelor potrivite se restrânge rapid. Trimiteți-ne specificația și vom identifica alternative potrivite din portofoliul LG Chem și Basechem, cu TDS oficial și suport pentru mostre.",
        ],
      },
    ],
  },
  {
    slug: "pa6-pa66-farki",
    date: "2026-08-11",
    category: "Alegerea Materialului",
    title: "PA6 vs PA66: Diferențe și Tabel Comparativ",
    excerpt:
      "Cele două tipuri de poliamidă par foarte asemănătoare la prima vedere, dar diferă semnificativ ca performanță termică, absorbție de umiditate și cost.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy"],
    sections: [
      {
        h: "Aceeași familie, structură diferită",
        p: [
          "PA6 și PA66 sunt ambele poliamide alifatice și formează cea mai utilizată grupă dintre plasticele tehnice. Diferența provine din structura moleculară: PA6 este produs dintr-un singur monomer, PA66 din combinarea a doi monomeri diferiți.",
          "Această diferență structurală influențează direct comportamentul de cristalizare și, prin urmare, performanța termică și mecanică.",
        ],
      },
      {
        h: "Performanța termică",
        p: [
          "PA66 are o temperatură de topire semnificativ mai ridicată decât PA6. Prin urmare, este preferat pentru piese expuse continuu la temperaturi înalte, cum sunt componentele din compartimentul motor.",
          "PA6, fiind prelucrabil la temperaturi mai scăzute, poate oferi avantaje în consumul de energie și timpul de ciclu.",
        ],
      },
      {
        h: "Absorbția de umiditate — diferența cea mai critică",
        p: [
          "Poliamidele sunt higroscopice; absorb umiditate din aer. PA6 absoarbe mai multă umiditate decât PA66. Absorbția de umiditate mărește dimensiunile piesei, reduce rigiditatea și crește tenacitatea.",
          "Acest lucru este critic pentru piesele cu toleranțe strânse: o piesă abia scoasă din matriță poate să nu aibă aceleași dimensiuni ca aceeași piesă după câteva săptămâni. Acest aspect trebuie luat în calcul în proiectare și măsurare.",
          "Uscarea înainte de procesare este obligatorie pentru ambele tipuri; uscarea insuficientă duce la defecte de suprafață și la pierderea rezistenței mecanice.",
        ],
      },
      {
        h: "Calitatea suprafeței și prelucrabilitatea",
        p: [
          "PA6 are o fereastră de procesare mai largă și oferă în general o calitate mai bună a suprafeței. PA66 poate oferi timpi de ciclu mai scurți datorită cristalizării rapide, dar controlul temperaturii matriței este mai critic.",
        ],
      },
      {
        h: "Armarea cu fibră de sticlă schimbă tabloul",
        p: [
          "În aplicațiile tehnice, poliamidele sunt folosite în mare parte armate cu fibră de sticlă. Armarea crește semnificativ rigiditatea și temperatura de deformare termică, reducând totodată efectul dimensional al absorbției de umiditate.",
          "Pe măsură ce conținutul de fibră crește, rigiditatea și rezistența cresc, în timp ce tenacitatea și calitatea suprafeței scad. Conținutul potrivit este determinat de solicitările și așteptările de aspect ale aplicației.",
        ],
      },
      {
        h: "Pe care să o alegeți?",
        p: [
          "Dacă prioritatea este temperatura ridicată continuă și rezistența mecanică maximă, PA66 este de obicei mai potrivit; dacă primează costul, prelucrabilitatea și calitatea suprafeței, PA6 se potrivește mai bine. În majoritatea proiectelor decizia se ia împreună cu cerințele de conținut de fibră de sticlă și de ignifugare.",
          "Familiile LUMID și LUXY de la LG Chem oferă o gamă largă de grade în ambele tipuri de poliamidă. Trimiteți-ne aplicația dumneavoastră și vom identifica împreună alternativele potrivite.",
        ],
      },
    ],
  },
  {
    slug: "cam-elyaf-orani-secimi",
    date: "2026-07-28",
    category: "Ghid Tehnic",
    title: "Cum Alegeți Conținutul de Fibră de Sticlă: Ce Schimbă 15%, 30% și 50%?",
    excerpt:
      "Armarea cu fibră de sticlă crește rigiditatea, dar fiecare creștere are un cost. O metodă practică de a determina conținutul potrivit.",
    readingMinutes: 5,
    relatedBrands: ["lumid-luxy", "lupox-lumax", "lusep", "lupol"],
    sections: [
      {
        h: "Ce face fibra de sticlă?",
        p: [
          "Armarea cu fibră de sticlă creează un schelet portant în interiorul matricei polimerice. Ca urmare, rigiditatea (modulul de elasticitate), rezistența la tracțiune și temperatura de deformare termică cresc semnificativ.",
          "De asemenea, reduce contracția și îmbunătățește stabilitatea dimensională, ceea ce contează în special pentru piesele cu toleranțe strânse.",
        ],
      },
      {
        h: "Care este costul?",
        p: [
          "Fiecare avantaj are un compromis. Pe măsură ce conținutul de fibră crește, materialul devine mai fragil; tenacitatea și alungirea la rupere scad. Acest lucru poate fi critic pentru piesele solicitate la impact.",
          "Și calitatea suprafeței este afectată: la conținuturi ridicate de fibră, urmele de fibră pot deveni vizibile pe suprafață, ceea ce reprezintă o problemă pentru piesele vizibile.",
          "Fibra este de asemenea abrazivă; uzura matriței și a ansamblului șurub-cilindru crește, iar intervalele de întreținere se scurtează.",
        ],
      },
      {
        h: "Anizotropia — aspectul frecvent neglijat",
        p: [
          "Fibrele de sticlă tind să se alinieze în direcția de curgere. Aceasta înseamnă că piesa se comportă diferit pe direcția de curgere față de direcția perpendiculară — ratele de contracție și valorile de rezistență devin dependente de direcție.",
          "Ca urmare, piesele se pot deforma. Poziția punctului de injecție și proiectarea curgerii devin mai critice decât s-ar aștepta la conținuturi ridicate de fibră.",
        ],
      },
      {
        h: "O abordare practică",
        p: [
          "Conținuturile reduse (aproximativ 10–20%) sunt potrivite pentru piese la care se dorește o stabilitate dimensională îmbunătățită și o creștere moderată a rigidității, păstrând totodată tenacitatea.",
          "Conținuturile medii (în jur de 30%) reprezintă alegerea standard pentru majoritatea aplicațiilor tehnice: un punct echilibrat între rezistență și tenacitate.",
          "Conținuturile ridicate (40% și peste) sunt destinate pieselor structurale care vizează înlocuirea metalului, unde sunt necesare rigiditate și performanță termică maxime — dar proiectarea trebuie tratată cu atenție în privința deformării și fragilității.",
        ],
      },
      {
        h: "Valorile numerice provin din TDS",
        p: [
          "Tendințele de mai sus sunt generale; valorile reale de modul, rezistență și contracție ale fiecărui grad depind de formulare și apar doar în fișa tehnică oficială. TDS-ul gradului respectiv trebuie consultat înainte de decizie.",
          "La Buteo Petrochemicals avem acces la compoundurile PA, PBT, PPS și PP armate cu fibră de sticlă de la LG Chem. Împărtășiți-ne condițiile de solicitare ale piesei și vom stabili împreună conținutul potrivit de armare, validându-l cu mostre.",
        ],
      },
    ],
  },
  {
    slug: "plastik-hammadde-kurutma",
    date: "2026-07-15",
    category: "Producție",
    title: "Uscarea Materiilor Prime Plastice: De Ce și Cum?",
    excerpt:
      "O mare parte dintre defectele de suprafață și pierderile de rezistență întâlnite la injecție provin din uscarea insuficientă.",
    readingMinutes: 4,
    relatedBrands: ["lumid-luxy", "lupoy", "lupox-lumax"],
    sections: [
      {
        h: "De ce este umiditatea o problemă?",
        p: [
          "Unii polimeri absorb umiditate din aer. În timpul procesării, această umiditate se vaporizează la temperatură ridicată și creează două tipuri de probleme: defecte vizibile de suprafață și deteriorare permanentă a structurii moleculare.",
          "În materiale precum poliesterul (PBT), policarbonatul (PC) și poliamida (PA), umiditatea provoacă o reacție de hidroliză la temperatură ridicată. Această reacție scurtează lanțurile polimerice — masa moleculară scade, iar materialul își pierde permanent rezistența.",
          "Aspectul critic este că deteriorarea prin hidroliză este ireversibilă. Chiar dacă materialul este uscat și reprocesat, rezistența pierdută nu revine.",
        ],
      },
      {
        h: "Simptome",
        p: [
          "Semnele tipice ale uscării insuficiente includ dungi argintii pe suprafață, bule, pete mate, fragilitate și rezistență la impact mai mică decât cea așteptată.",
          "Piesele transparente pot prezenta opacitate, iar cele armate cu fibră de sticlă pot prezenta urme pronunțate de fibră pe suprafață.",
        ],
      },
      {
        h: "Uscarea corectă",
        p: [
          "Temperatura și durata de uscare variază în funcție de material și grad; aceste valori sunt indicate în fișa tehnică respectivă și nu trebuie estimate. Uscarea excesivă poate de asemenea deteriora materialul (modificare de culoare, îngălbenire).",
          "Pentru plasticele tehnice higroscopice, uscătoarele cu aer cald sunt adesea insuficiente; trebuie utilizate uscătoare cu desicant (aer uscat). Performanța punctului de rouă a uscătorului trebuie verificată periodic.",
          "Materialul uscat reabsoarbe rapid umiditatea dacă este lăsat deschis. Prin urmare, materialul trebuie transportat de la uscător la mașină într-un sistem închis, cu timpi de așteptare minimizați.",
        ],
      },
      {
        h: "Depozitare",
        p: [
          "Ambalajul original nedeschis asigură o barieră împotriva umidității. Sacii deschiși trebuie închiși etanș și păstrați într-un mediu uscat și răcoros.",
          "Materialul scos din depozitare la rece nu trebuie procesat direct; pe suprafața ambalajului se poate forma condens. Lăsați materialul să ajungă la temperatura camerei înainte de a deschide ambalajul.",
        ],
      },
      {
        h: "Rezumat",
        p: [
          "Uscarea nu este o formalitate dinaintea producției, ci o etapă de proces care determină direct performanța materialului. Pentru condițiile corecte, folosiți întotdeauna TDS-ul gradului respectiv.",
          "Punem la dispoziție TDS-ul oficial pentru fiecare produs pe care îl furnizăm, iar echipa noastră tehnică vă poate oferi suport privind condițiile de uscare și procesare.",
        ],
      },
    ],
  },
];

const POSTS: Record<Lang, BlogPost[]> = { tr: TR, en: EN, ro: RO };

/** Locale'e göre tüm yazılar — tarihe göre yeniden eskiye. */
export function getPosts(locale: string): BlogPost[] {
  const list = POSTS[(locale as Lang)] ?? POSTS.tr;
  return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Slug ile tek yazı (yoksa null). */
export function getPost(slug: string, locale: string): BlogPost | null {
  return getPosts(locale).find((p) => p.slug === slug) ?? null;
}

/** Tüm yazı slug'ları — generateStaticParams ve sitemap için. */
export const ALL_POST_SLUGS = TR.map((p) => p.slug);
