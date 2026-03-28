import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nav" });

  const titles: Record<string, string> = {
    tr: "Buteo Petrokimya | Mühendislik Plastik Distribütörü",
    en: "Buteo Petrochemicals | Engineering Plastics Distributor",
    ro: "Buteo Petrochemicals | Distribuitor Materiale Plastice",
  };

  return {
    title: titles[locale] || titles.tr,
    description:
      locale === "tr"
        ? "LG Chem ve Basechem Türkiye distribütörü. Mühendislik plastiklerinde uzman çözüm ortağınız."
        : locale === "ro"
        ? "Distribuitor Turcia LG Chem și Basechem. Partenerul dvs. expert în materiale plastice tehnice."
        : "LG Chem and Basechem Turkey distributor. Your expert partner in engineering plastics.",
    icons: { icon: "/logo.png" },
    keywords: t("home"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en" | "ro")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
