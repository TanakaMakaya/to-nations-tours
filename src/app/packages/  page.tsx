import { journeys } from "@/data/journeys";
import PackageCard from "@/components/package/PackageCard";

export default function PackagesPage() {
  return (
    <main className="bg-[#e4eef7]">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Curated Journeys
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-tight text-[#071126] md:text-8xl">
            Choose your <em>African journey.</em>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore handpicked tours across Southern Africa, designed for
            comfort, culture, wildlife and unforgettable memories.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {journeys.map((journey) => (
          <PackageCard key={journey.slug} journey={journey} />
        ))}
      </section>
    </main>
  );
}