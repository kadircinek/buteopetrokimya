import type { Metadata } from "next";
import { buildMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("contact", locale as Locale);
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
