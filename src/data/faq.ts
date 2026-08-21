/**
 * Sıkça Sorulan Sorular — FAQPage şeması + içerik derinliği için.
 * Cevaplar yalnızca sitede doğrulanmış gerçek bilgilere dayanır
 * (distribütörlükler, ofisler, depolar, hizmetler). Fiyat/MOQ gibi
 * taahhüt içeren bilgiler bilinçli olarak "iletişime geçin" şeklinde bırakılmıştır.
 */
export type Locale = "tr" | "en" | "ro";

export type FaqItem = {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
};

export const FAQ: FaqItem[] = [
  {
    q: {
      tr: "Hangi markaların Türkiye distribütörüsünüz?",
      en: "Which brands are you the Turkey distributor for?",
      ro: "Pentru ce mărci sunteți distribuitor în Turcia?",
    },
    a: {
      tr: "Buteo Petrokimya, LG Chem ve Basechem'in Türkiye distribütörüdür. LG Chem tarafında LUPOY (PC), LUPOX (PBT), LUMID (PA6/PA66), LUMILOY (mPPE), LUSEP (PPS), LUCON, LUMIPLAS, LUCEL (POM), LUPOL (PP), LUPOS ve KEYFLEX BT (TPE) ürün ailelerini; Basechem tarafında ise alev geciktirici ve cam elyaf takviyeli ABS, PC, PBT, PC/ABS, PPO/PPE ve PA compoundlarını sunuyoruz.",
      en: "Buteo Petrochemicals is the Turkey distributor for LG Chem and Basechem. From LG Chem we offer LUPOY (PC), LUPOX (PBT), LUMID (PA6/PA66), LUMILOY (mPPE), LUSEP (PPS), LUCON, LUMIPLAS, LUCEL (POM), LUPOL (PP), LUPOS and KEYFLEX BT (TPE); from Basechem, flame retardant and glass fiber reinforced ABS, PC, PBT, PC/ABS, PPO/PPE and PA compounds.",
      ro: "Buteo Petrochemicals este distribuitorul din Turcia pentru LG Chem și Basechem. De la LG Chem oferim LUPOY (PC), LUPOX (PBT), LUMID (PA6/PA66), LUMILOY (mPPE), LUSEP (PPS), LUCON, LUMIPLAS, LUCEL (POM), LUPOL (PP), LUPOS și KEYFLEX BT (TPE); de la Basechem, compounduri ABS, PC, PBT, PC/ABS, PPO/PPE și PA.",
    },
  },
  {
    q: {
      tr: "Teknik veri sayfasına (TDS) nasıl ulaşabilirim?",
      en: "How can I access the technical data sheet (TDS)?",
      ro: "Cum pot accesa fișa tehnică (TDS)?",
    },
    a: {
      tr: "Ürün sayfalarımızdaki herhangi bir ürüne veya grade'e tıklayarak TDS talebinde bulunabilirsiniz. İletişim bilgilerinizi bıraktıktan sonra LG Chem ürünlerinde doğrudan üreticinin resmi teknik doküman sayfasına yönlendirilirsiniz; diğer ürünlerde ilgili TDS'i e-posta ile iletiyoruz.",
      en: "You can request a TDS by clicking any product or grade on our product pages. After leaving your contact details, LG Chem products link directly to the manufacturer's official technical document page; for other products we send the relevant TDS by email.",
      ro: "Puteți solicita un TDS făcând clic pe orice produs sau grad din paginile noastre de produse. După ce lăsați datele de contact, produsele LG Chem trimit direct la pagina oficială a producătorului; pentru alte produse trimitem TDS-ul prin email.",
    },
  },
  {
    q: {
      tr: "Numune talep edebilir miyim?",
      en: "Can I request a sample?",
      ro: "Pot solicita o mostră?",
    },
    a: {
      tr: "Evet. LG Chem ve Basechem ürün sayfalarımızdaki \"Numune Talep Et\" butonunu kullanarak numune talebinde bulunabilirsiniz. Talebiniz satış ekibimize iletilir ve sizinle iletişime geçilir.",
      en: "Yes. You can request a sample using the \"Request Sample\" button on our LG Chem and Basechem product pages. Your request reaches our sales team and we will contact you.",
      ro: "Da. Puteți solicita o mostră folosind butonul \"Solicitați Mostră\" din paginile de produse LG Chem și Basechem. Solicitarea ajunge la echipa noastră de vânzări.",
    },
  },
  {
    q: {
      tr: "Teslimat ne kadar sürede yapılıyor?",
      en: "How fast is delivery?",
      ro: "Cât durează livrarea?",
    },
    a: {
      tr: "İstanbul'da Avrupa ve Anadolu Yakası'nda olmak üzere iki depomuz bulunuyor. İhtiyacınıza bağlı olarak İstanbul il sınırları içerisinde aynı gün fabrikanıza teslimat imkânı sunuyoruz. Türkiye'nin diğer illeri ve Avrupa sevkiyatları için lütfen satış ekibimizle iletişime geçin.",
      en: "We have two warehouses in Istanbul, on the European and Anatolian sides. Depending on your needs, we can deliver to your factory the same day within Istanbul city limits. For other cities in Turkey and European shipments, please contact our sales team.",
      ro: "Avem două depozite în Istanbul, pe malul european și anatolian. În funcție de nevoi, putem livra în aceeași zi în limitele orașului Istanbul. Pentru alte orașe și livrări europene, contactați echipa noastră.",
    },
  },
  {
    q: {
      tr: "Avrupa'ya tedarik yapıyor musunuz?",
      en: "Do you supply to Europe?",
      ro: "Furnizați în Europa?",
    },
    a: {
      tr: "Evet. BUTEO PETROCHEMICALS ROMANIA S.R.L. unvanlı Bükreş ofisimiz üzerinden Avrupa operasyonlarımızı yürütüyor ve AB pazarına tedarik sağlıyoruz.",
      en: "Yes. We run our European operations through our Bucharest office, BUTEO PETROCHEMICALS ROMANIA S.R.L., supplying the EU market.",
      ro: "Da. Ne desfășurăm operațiunile europene prin biroul din București, BUTEO PETROCHEMICALS ROMANIA S.R.L., furnizând pe piața UE.",
    },
  },
  {
    q: {
      tr: "Uygulamama uygun hammaddeyi nasıl seçerim?",
      en: "How do I choose the right material for my application?",
      ro: "Cum aleg materialul potrivit pentru aplicația mea?",
    },
    a: {
      tr: "Web sitemizdeki Hammadde Bulucu aracını kullanabilirsiniz: üretim yönteminizi, kullanım alanınızı ve istediğiniz özellikleri (darbe, ısı, UV, alev geciktiricilik, gıda teması vb.) seçtiğinizde uygulamanıza uygun ürün ailelerini görürsünüz. Kesin grade seçimi için AR-GE destekli satış ekibimiz size özel öneri sunar.",
      en: "You can use the Material Finder tool on our website: select your production method, application and required properties (impact, heat, UV, flame retardancy, food contact, etc.) to see suitable product families. For the exact grade, our R&D-supported sales team provides a tailored recommendation.",
      ro: "Puteți folosi instrumentul Găsitor Materiale de pe site: selectați metoda de producție, aplicația și proprietățile dorite pentru a vedea familiile de produse potrivite. Pentru gradul exact, echipa noastră oferă o recomandare personalizată.",
    },
  },
  {
    q: {
      tr: "Hangi sektörlere hizmet veriyorsunuz?",
      en: "Which sectors do you serve?",
      ro: "Ce sectoare deserviți?",
    },
    a: {
      tr: "Otomotiv, elektrik-elektronik, beyaz eşya, inşaat ve altyapı, medikal ve sağlık, mobilya ve ev gereçleri, savunma ve havacılık, tarım ve sulama, denizcilik ve ulaşım, oyuncak ve hobi, enerji ve aydınlatma olmak üzere 11 sektöre hizmet veriyoruz.",
      en: "We serve 11 sectors: automotive, electrical & electronics, white goods, construction & infrastructure, medical & healthcare, furniture & household, defense & aerospace, agriculture & irrigation, marine & transportation, toys & hobbies, and energy & lighting.",
      ro: "Deservim 11 sectoare: auto, electric și electronic, electrocasnice, construcții, medical, mobilier, apărare și aerospațial, agricultură, maritim și transport, jucării și energie și iluminat.",
    },
  },
  {
    q: {
      tr: "Fiyat teklifi nasıl alabilirim?",
      en: "How can I get a price quote?",
      ro: "Cum pot obține o ofertă de preț?",
    },
    a: {
      tr: "İletişim sayfamızdaki formu doldurabilir, sağ alttaki WhatsApp butonundan yazabilir veya +90 542 189 43 40 numaralı telefondan bize ulaşabilirsiniz. Ürün kodu ve tahmini miktarı belirtmeniz teklif sürecini hızlandırır.",
      en: "You can fill in the form on our contact page, message us via the WhatsApp button at the bottom right, or call +90 542 189 43 40. Sharing the product code and estimated quantity speeds up the quotation process.",
      ro: "Puteți completa formularul din pagina de contact, ne puteți scrie pe WhatsApp sau ne puteți suna la +90 542 189 43 40. Menționarea codului de produs și a cantității accelerează procesul.",
    },
  },
];
