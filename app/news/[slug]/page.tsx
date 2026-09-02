import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import ArticleContent from "@/components/pages/ArticleContent";
import { ARTICLES, getArticle } from "@/lib/news";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Story Not Found — CSNN" };
  return {
    title: `${article.headline} — CSNN`,
    description: article.dek,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.headline,
    description: article.dek,
    articleSection: article.category,
    author: { "@type": "Organization", name: "Cornstar News Network (CSNN)" },
    publisher: {
      "@type": "Organization",
      name: "Cornstar Entertainment",
    },
    url: `https://the-cornstar.onrender.com/news/${article.slug}`,
    isAccessibleForFree: true,
    // A fictional, satirical publication.
    creativeWorkStatus: "Satire",
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent article={article} />
    </PageShell>
  );
}
