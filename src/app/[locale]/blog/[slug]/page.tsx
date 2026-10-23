import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Clock, Info, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, getPosts, ALL_POST_SLUGS } from "@/data/blog";
import { getBlogExtra } from "@/data/blogExtras";
import { BRAND_SLUGS } from "@/data/lgchemBrands";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_POST_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};

  const path = `/blog/${slug}`;
  const clamp = (s: string, max = 158) => {
    if (s.length <= max) return s;
    const cut = s.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[.,;:]$/, "") + "…";
  };

  return {
    title: post.title.length <= 48 ? `${post.title} | ${SITE_NAME}` : post.title,
    description: clamp(post.excerpt),
    keywords: [post.title, post.category, ...post.relatedBrands.map((b) => BRAND_SLUGS[b] ?? b)],
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages: {
        tr: `${SITE_URL}/tr${path}`,
        en: `${SITE_URL}/en${path}`,
        ro: `${SITE_URL}/ro${path}`,
        "x-default": `${SITE_URL}/tr${path}`,
      },
    },
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      url: `${SITE_URL}/${locale}${path}`,
      title: post.title,
      description: clamp(post.excerpt),
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const { locale, slug } = use(params);
  const t = useTranslations("blog");

  const post = getPost(slug, locale);
  if (!post) notFound();

  const others = getPosts(locale).filter((p) => p.slug !== slug).slice(0, 3);
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const extra = getBlogExtra(slug, locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        inLanguage: locale,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: t("badge"), item: `${SITE_URL}/${locale}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(extra
        ? [{
            "@type": "FAQPage",
            mainEntity: extra.faq.map((x) => ({
              "@type": "Question",
              name: x.q,
              acceptedAnswer: { "@type": "Answer", text: x.a },
            })),
          }]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0d2b1a 0%, #1B4332 100%)" }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60 mb-6 flex-wrap">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{t("home")}</Link>
              <ChevronRight size={14} />
              <Link href={`/${locale}/blog`} className="hover:text-white transition-colors">{t("badge")}</Link>
            </nav>

            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/60">
                <Clock size={14} /> {post.readingMinutes} {t("readTime")}
              </span>
              <time dateTime={post.date} className="text-sm text-white/60">
                {new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>

            <h1 className="text-3xl lg:text-5xl font-black text-white mb-5 leading-tight">{post.title}</h1>
            <p className="text-white/80 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* Gövde */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Kısa cevap — öne çıkan snippet için */}
            {extra && (
              <div className="mb-12 p-6 rounded-2xl border-l-4" style={{ borderColor: "#40916C", background: "#f0fdf4" }}>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-2" style={{ color: "#1B4332" }}>
                  <Zap size={15} /> {t("shortAnswer")}
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">{extra.answer}</p>
              </div>
            )}

            {extra?.table && (
              <div className="mb-12 overflow-x-auto rounded-2xl border border-gray-100">
                <table className="w-full text-left text-sm">
                  <caption className="text-left p-4 font-bold text-gray-900 text-base">{extra.table.caption}</caption>
                  <thead style={{ background: "#1B4332" }}>
                    <tr>
                      {extra.table.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold text-white whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {extra.table.rows.map((r, i) => (
                      <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                        {r.map((c, j) => (
                          j === 0
                            ? <th key={j} scope="row" className="px-4 py-3 font-semibold text-gray-900">{c}</th>
                            : <td key={j} className="px-4 py-3 text-gray-600">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {post.sections.map((s, i) => (
              <section key={i} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.h}</h2>
                <div className="space-y-4">
                  {s.p.map((p, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed text-lg">{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* SSS — FAQPage */}
            {extra && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">{t("faqTitle")}</h2>
                <div className="space-y-3">
                  {extra.faq.map((x, i) => (
                    <details key={i} className="group rounded-2xl border border-gray-100 overflow-hidden" open={i === 0}>
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                        {x.q}
                        <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">{x.a}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Dürüstlük notu */}
            <div className="flex items-start gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50">
              <Info size={18} className="text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-500 leading-relaxed">{t("disclaimer")}</p>
            </div>

            {/* İlgili ürün aileleri — iç linkleme */}
            {post.relatedBrands.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-5">{t("relatedTitle")}</h2>
                <div className="flex flex-wrap gap-3">
                  {post.relatedBrands.map((b) => (
                    <Link
                      key={b}
                      href={`/${locale}/lgchem/${b}`}
                      className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-semibold text-sm text-gray-700 hover:border-green-300 hover:text-green-800 transition-all"
                    >
                      {BRAND_SLUGS[b] ?? b}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Diğer yazılar */}
        {others.length > 0 && (
          <section className="py-16" style={{ background: "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("allPosts")}</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${locale}/blog/${p.slug}`}
                    className="group flex flex-col p-6 rounded-3xl bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-xs font-bold px-3 py-1 rounded-full mb-3 self-start" style={{ backgroundColor: "#f0fdf4", color: "#1B4332" }}>
                      {p.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors leading-snug">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
              <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 font-semibold" style={{ color: "#1B4332" }}>
                {t("backToBlog")} <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20" style={{ background: "#0d2b1a" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
            <p className="text-white/70 mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
                style={{ backgroundColor: "#4CAF50" }}
              >
                {t("ctaBtn")} <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+905421894340"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                +90 542 189 43 40
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
