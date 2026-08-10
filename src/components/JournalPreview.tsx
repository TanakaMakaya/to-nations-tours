import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/data/journeys/journal/journal";

export default function JournalPreview() {
  const featuredArticles = journalArticles.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#2f80b9]">
            To Nations Travel Journal
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#071126]">
            Stories, Guides & Travel Inspiration
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Discover expert travel tips, destination guides and inspiring
            stories from South Africa, Zimbabwe and Botswana.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group overflow-hidden rounded-3xl bg-[#f8fafc] shadow-lg transition hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2f80b9]">
                  {article.category}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-[#071126]">
                  {article.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {article.excerpt}
                </p>

                <div className="mt-5 flex justify-between text-sm text-slate-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-14 text-center">
          <Link
            href="/journal"
            className="inline-flex items-center rounded-full bg-[#ffffff] px-8 py-4 font-semibold text-white transition hover:bg-[#2f80b9]"
          >
            Explore All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}