"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const links = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/products`, label: t("nav.products") },
    { href: `/${locale}/lgchem`, label: "LG Chem Ürünleri" },
    { href: `/${locale}/basechem`, label: "Basechem Ürünleri" },
    { href: `/${locale}/sectors`, label: t("nav.sectors") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <footer className="bg-green-900 text-white" style={{backgroundColor: "#0d2b1a"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <svg width="70" height="82" viewBox="0 0 140 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="68" r="62" stroke="white" strokeWidth="2" fill="none"/>
                <ellipse cx="70" cy="38" rx="52" ry="12" stroke="white" strokeWidth="1.2" fill="none"/>
                <ellipse cx="70" cy="68" rx="62" ry="18" stroke="white" strokeWidth="1.2" fill="none"/>
                <ellipse cx="70" cy="98" rx="52" ry="12" stroke="white" strokeWidth="1.2" fill="none"/>
                <ellipse cx="70" cy="20" rx="30" ry="6" stroke="white" strokeWidth="1" fill="none"/>
                <ellipse cx="70" cy="116" rx="30" ry="6" stroke="white" strokeWidth="1" fill="none"/>
                <ellipse cx="70" cy="68" rx="28" ry="62" stroke="white" strokeWidth="1.2" fill="none"/>
                <ellipse cx="70" cy="68" rx="52" ry="62" stroke="white" strokeWidth="1.2" fill="none"/>
                <line x1="70" y1="6" x2="70" y2="130" stroke="white" strokeWidth="1.5"/>
                <text x="70" y="78" textAnchor="middle" fill="#4CAF50" fontSize="26" fontWeight="800" letterSpacing="5" fontFamily="Arial Black, Arial, sans-serif">BUTEO</text>
                <text x="70" y="152" textAnchor="middle" fill="#aaaaaa" fontSize="11" letterSpacing="4" fontFamily="Arial, sans-serif">PETROKİMYA</text>
              </svg>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              {t("footer.description")}
            </p>
            {/* Partners */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-semibold text-gray-300 border border-white/10">
                LG Chem
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-semibold text-gray-300 border border-white/10">
                Basechem
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-5">
              {t("nav.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+90 542 189 43 40</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>info@buteopetrokimya.com</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Globe size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>www.buteopetrokimya.com</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>İstanbul, Türkiye</div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>Bucureşti, România</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Buteo Petrokimya. {t("footer.rights")}
          </p>
          <div className="flex gap-2">
            {["tr", "en", "ro"].map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                  locale === loc
                    ? "bg-green-700 text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
