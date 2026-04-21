"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
            <p className="text-white/70 text-lg">{t("description")}</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Office info */}
              <div className="space-y-8">
                {/* Turkey */}
                <div className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🇹🇷</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{t("turkey")}</h2>
                      <p className="text-gray-500 text-sm">Buteo Petrokimya</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: "#1B4332"}}>
                        <Phone size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{t("phone")}</div>
                        <a href="tel:+905421894340" className="font-semibold text-gray-800 hover:text-green-700">+90 542 189 43 40</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: "#2D6A4F"}}>
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{t("email")}</div>
                        <a href="mailto:info@buteopetrokimya.com" className="font-semibold text-gray-800 hover:text-green-700">
                          info@buteopetrokimya.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: "#40916C"}}>
                        <Globe size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{t("website")}</div>
                        <span className="font-semibold text-gray-800">www.buteopetrokimya.com</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5" style={{backgroundColor: "#52B788"}}>
                        <MapPin size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{t("warehousesLabel")}</div>
                        <div className="font-semibold text-gray-800 text-sm">{t("europeBank")}</div>
                        <div className="font-semibold text-gray-800 text-sm">{t("anatoliaBank")}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Romania */}
                <div className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🇷🇴</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{t("romania")}</h2>
                      <p className="text-gray-500 text-sm">{t("roCompany")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5" style={{backgroundColor: "#1B4332"}}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">{t("roCompany")}</div>
                      <div className="font-medium text-gray-800 text-sm leading-relaxed">{t("roAddress")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="p-8 rounded-3xl border border-gray-100 shadow-sm">
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: "#f0fdf4"}}>
                      <CheckCircle size={32} style={{color: "#1B4332"}} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("formSuccess")}</h3>
                    <p className="text-gray-500">{t("formReply")}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("formTitle")}</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t("formName")}</label>
                        <input
                          type="text"
                          required
                          placeholder={t("namePlaceholder")}
                          value={form.name}
                          onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                          style={{"--tw-ring-color": "#1B4332"} as React.CSSProperties}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t("formEmail")}</label>
                        <input
                          type="email"
                          required
                          placeholder={t("emailPlaceholder")}
                          value={form.email}
                          onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("formCompany")}</label>
                      <input
                        type="text"
                        placeholder={t("companyPlaceholder")}
                        value={form.company}
                        onChange={e => setForm({...form, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("formMessage")}</label>
                      <textarea
                        required
                        rows={5}
                        placeholder={t("messagePlaceholder")}
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      style={{backgroundColor: "#1B4332"}}
                    >
                      <Send size={18} />
                      {t("formSend")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp */}
        <section className="py-12" style={{background: "#f0fdf4"}}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-600 mb-4">Hızlı iletişim için WhatsApp üzerinden de ulaşabilirsiniz</p>
            <a
              href="https://wa.me/905421894340"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{backgroundColor: "#25D366"}}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Yazın
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
