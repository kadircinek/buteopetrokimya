import type { Metadata } from "next";
import { buildMetadata, type Locale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata("finder", locale as Locale);
}

export default function FinderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
