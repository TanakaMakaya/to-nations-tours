import { journalArticles } from "@/data/journeys/journal/journal";
import { notFound } from "next/navigation";


export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = journalArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-36">
      <h1>{article.title}</h1>
    </main>
  );
}