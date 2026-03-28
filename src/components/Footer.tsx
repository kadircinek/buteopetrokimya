"use client";

import Link from "next/link";
import Image from "next/image";
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
              <Image src="/logo.png" alt="Buteo Petrokimya" width={70} height={70} className="object-contain" />
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
