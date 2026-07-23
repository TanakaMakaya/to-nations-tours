
import Link from "next/link";
import Image from "next/image";
import { journalArticles } from "@/data/journeys/journal/journal";

export default function JournalPage() {
  return (
    <main className="bg-[#e4eef7] pt-36 pb-20">

      <section className="mx-auto max-w-7xl px-6 text-center">

        <p className="mb-4 uppercase tracking-[0.4em] text-[#2f80b9]">
          To Nations Travel Journal
        </p>

        <h1 className="font-serif text-5xl text-[#071126]">
          Stories from Southern Africa
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Travel guides, safari tips, destination inspiration and local stories
          from South Africa, Zimbabwe and Botswana.
        </p>

      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-10 px-6 md:grid-cols-2">

        {journalArticles.map(article => (

          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className="group overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2"
          >

            <div className="relative h-72 overflow-hidden">

              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover duration-700 group-hover:scale-110"
              />

            </div>

            <div className="p-8">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#2f80b9]">
                {article.category}
              </span>

              <h2 className="mt-5 font-serif text-3xl text-[#071126]">
                {article.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {article.excerpt}
              </p>

              <div className="mt-6 flex justify-between text-sm text-slate-500">

                <span>{article.date}</span>

                <span>{article.readTime}</span>

              </div>

            </div>

          </Link>

        ))}

      </section>

    </main>
  );
}