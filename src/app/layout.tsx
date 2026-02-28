import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buteo Petrokimya | Mühendislik Plastik Distribütörü",
  description: "LG Chem ve Basechem Türkiye distribütörü.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
