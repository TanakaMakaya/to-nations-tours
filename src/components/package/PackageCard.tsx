import Link from "next/link";
import type { Journey } from "@/types/journey";

export default function PackageCard({ journey }: { journey: Journey }) {
  return (
    <Link
      href={`/packages/${journey.slug}`}
      className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={journey.image}
          alt={journey.title}
          className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2f80b9]">
          {journey.destination}
        </p>

        <h2 className="mt-4 font-serif text-3xl text-[#071126]">
          {journey.title}
        </h2>

        <p className="mt-4 text-slate-600">
          {journey.duration} · {journey.nights}
        </p>

        <p className="mt-5 font-serif text-2xl text-[#071126]">
          {journey.price}
        </p>
      </div>
    </Link>
  );
}