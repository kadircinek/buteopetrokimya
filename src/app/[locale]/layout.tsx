import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildMetadata, SITE_URL, SITE_NAME, type Locale } from "@/lib/seo";
import FloatingContact from "@/components/FloatingContact";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = (routing.locales.includes(locale as Locale) ? locale : "tr") as Locale;

  return {
    metadataBase: new URL(SITE_URL),
    ...buildMetadata("home", loc),
    icons: { icon: "/logo.png", apple: "/logo.png" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function StructuredData({ locale }: { locale: Locale }) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Buteo Petrokimya",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "LG Chem ve Basechem Türkiye distribütörü. Mühendislik plastikleri ve plastik hammadde tedarikçisi.",
      areaServed: ["TR", "Europe"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+90-542-189-43-40",
        contactType: "sales",
        availableLanguage: ["Turkish", "English", "Romanian"],
      },
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "Strada MIHAIL KOGĂLNICEANU, Nr. 12, Clădirea C4, Camera 23, Sectorul 5",
          addressLocality: "Bucureşti",
          addressCountry: "RO",
        },
      ],
      brand: [
        { "@type": "Brand", name: "LG Chem" },
        { "@type": "Brand", name: "Basechem" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: locale,
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
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
        <StructuredData locale={locale as Locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingContact />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
