import Link from "next/link";
import { journeys } from "@/app/data/journeys";

export default function CuratedJourneys() {
  return (
    <section className="bg-[#2f80b9] py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white/75">
              Curated Journeys
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
              Travel Africa, <em>beautifully.</em>
            </h2>
          </div>

          <p className="hidden text-xs font-bold tracking-[0.35em] text-white/70 md:block">
            {journeys.length.toString().padStart(2, "0")} JOURNEYS
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {journeys.map((journey, index) => (
            <div
              key={journey.slug}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="h-[360px] w-full object-cover md:h-[520px]"
                />
              </div>

              <div>
                <div className="mb-6 flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 md:text-xs">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px flex-1 bg-white/25" />
                  <span>{journey.duration}</span>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl">
                  {journey.title}
                </h3>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {journey.location}
                </p>

                <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                  {journey.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/25 pt-6">
                  <p className="font-serif text-2xl">{journey.price}</p>

                  <Link
                    href={`/packages/${journey.slug}`}
                    className="border-b border-white pb-1 text-xs font-bold uppercase tracking-[0.3em]"
                  >
                    Book This
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}