import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocale } from "next-intl";
import { CheckCircle2, Truck, Zap, Shield, FlaskConical, Layers, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const s = useTranslations("services");
  const r = useTranslations("rnd");
  const locale = useLocale();

  const features = [
    { icon: <CheckCircle2 size={22} />, title: t("feature1Title"), desc: t("feature1Desc") },
    { icon: <Truck size={22} />, title: t("feature3Title"), desc: t("feature3Desc") },
    { icon: <Zap size={22} />, title: t("feature4Title"), desc: t("feature4Desc") },
    { icon: <Shield size={22} />, title: t("feature2Title"), desc: t("feature2Desc") },
  ];

  const rndItems = [
    { title: r("t1"), desc: r("d1") },
    { title: r("t2"), desc: r("d2") },
    { title: r("t3"), desc: r("d3") },
    { title: r("t4"), desc: r("d4") },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden" style={{background: "linear-gradient(135deg, #0d2b1a, #1B4332, #2D6A4F)"}}>
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-6">
              {t("badge")}
            </span>
            <h1 className="text-5xl font-bold text-white mb-4">
              {t("title")} <span style={{color: "#4CAF50"}}>{t("titleHighlight")}</span>
            </h1>
          </div>
        </section>

        {/* Main About */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Buteo Petrokimya Hakkında</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{t("description1")}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{t("description2")}</p>

                {/* Timeline */}
                <div className="space-y-4">
                  {[
                    { year: "2023", text: "Şirket kuruldu" },
                    { year: "2023", text: "LG Chem Türkiye distribütörlüğü alındı" },
                    { year: "2024", text: "Basechem distribütörlüğü başladı" },
                    { year: "2025", text: "Romanya ofisi açıldı" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-sm font-bold px-3 py-1 rounded-full text-white flex-shrink-0" style={{backgroundColor: "#1B4332"}}>
                        {item.year}
                      </span>
                      <span className="text-gray-600 pt-0.5">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white" style={{backgroundColor: i % 2 === 0 ? "#1B4332" : "#2D6A4F"}}>
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20" style={{background: "#f8fafc"}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ofislerimiz</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Turkey */}
              <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇹🇷</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Türkiye Ofisi</h3>
                    <p className="text-gray-500 text-sm">Ana Merkez</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div><span className="font-semibold text-gray-800">Şirket:</span> Buteo Petrokimya</div>
                  <div><span className="font-semibold text-gray-800">Lokasyon:</span> İstanbul, Türkiye</div>
                  <div><span className="font-semibold text-gray-800">Depolar:</span> Avrupa Yakası + Anadolu Yakası</div>
                  <div><span className="font-semibold text-gray-800">Tel:</span> +90 542 189 43 40</div>
                  <div><span className="font-semibold text-gray-800">Web:</span> www.buteopetrokimya.com</div>
                </div>
              </div>

              {/* Romania */}
              <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇷🇴</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Romanya Ofisi</h3>
                    <p className="text-gray-500 text-sm">Avrupa Operasyonları</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div><span className="font-semibold text-gray-800">Şirket:</span> BUTEO PETROCHEMICALS ROMANIA S.R.L.</div>
                  <div><span className="font-semibold text-gray-800">Adres:</span> Bucureşti Sectorul 5, Strada MIHAIL KOGĂLNICEANU, Nr. 12, Clădirea C4, Camera 23</div>
                  <div><span className="font-semibold text-gray-800">Şehir:</span> Bükreş, Romanya</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-2 rounded-full" style={{color: "#2D6A4F", backgroundColor: "#f0fdf4"}}>
                {r("badge")}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {r("title")} <span style={{color: "#1B4332"}}>{r("titleHighlight")}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rndItems.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl text-white" style={{background: "linear-gradient(135deg, #1B4332, #2D6A4F)"}}>
                  <div className="text-3xl font-bold mb-3 opacity-30">0{i + 1}</div>
                  <h3 className="font-bold mb-3 text-sm">{item.title}</h3>
                  <p className="text-white/75 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{background: "#f0fdf4"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4" style={{color: "#1B4332"}}>Çözüm Ortağınız Olmaya Hazırız</h2>
            <p className="text-gray-600 mb-8">Projeleriniz için teknik destek ve hammadde tedariki konusunda bize ulaşın.</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full"
              style={{backgroundColor: "#1B4332"}}
            >
              İletişime Geç <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
