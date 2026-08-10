import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/data/journeys/journal/journal";

interface Props {
  currentSlug: string;
}

export default function JournalSidebar({
  currentSlug,
}: Props) {
  const relatedArticles = journalArticles.filter(
    (article) => article.slug !== currentSlug
  );

  return (
    <aside className="sticky top-32 h-fit">
      <h3 className="mb-6 font-serif text-2xl text-[#071126]">
        Related Articles
      </h3>

      <div className="space-y-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1"
          >
            <div className="relative h-40">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-[#2f80b9]">
                {article.category}
              </p>

              <h4 className="font-semibold text-[#071126]">
                {article.title}
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                {article.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}