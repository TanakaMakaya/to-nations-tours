import { notFound } from "next/navigation";
import Image from "next/image";
import JournalSidebar from "@/components/journalSidebar";

import {
  journalArticles,
  articleContent,
} from "@/data/journeys/journal/journal";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = journalArticles.find(
    (a) => a.slug === slug
  );

  if (!article) {
    notFound();
  }

  const ArticleContent = articleContent[slug];

  if (!ArticleContent) {
    notFound();
  }

  return (
    <main className="bg-[#e4eef7] pt-32 pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2f80b9]">
            {article.category}
          </span>
        </div>

        <h1 className="font-serif text-5xl text-[#071126]">
          {article.title}
        </h1>

        <div className="mt-4 flex gap-4 text-sm text-slate-500">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="relative mt-10 h-125 overflow-hidden rounded-3xl">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Article + Sidebar */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_320px]">
        <article className="min-w-0">
          <ArticleContent />
        </article>

       <aside className="hidden lg:block">
  <JournalSidebar currentSlug={slug} />
</aside>
      </div>
    </main>
  );
}