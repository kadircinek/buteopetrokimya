"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const localeNames: Record<string, string> = {
  tr: "Türkçe",
  en: "English",
  ro: "Română",
};

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setLangOpen(false);
  };

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/products`, label: t("products") },
    { href: `/${locale}/lgchem`, label: "LG Chem" },
    { href: `/${locale}/basechem`, label: "Basechem" },
    { href: `/${locale}/sectors`, label: t("sectors") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <Image src="/logo.png" alt="Buteo Petrokimya" width={70} height={70} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-500 relative group ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                  scrolled
                    ? "text-gray-600 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Globe size={16} />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[140px]">
                  {["tr", "en", "ro"].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                        locale === loc ? "text-green-700 font-semibold bg-green-50" : "text-gray-700"
                      }`}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="bg-green-logo text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("getQuote")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex gap-2">
              {["tr", "en", "ro"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => { switchLocale(loc); setIsOpen(false); }}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                    locale === loc
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setIsOpen(false)}
              className="block text-center mt-2 bg-green-logo text-white font-semibold px-5 py-3 rounded-full"
              style={{backgroundColor: "#4CAF50"}}
            >
              {t("getQuote")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
