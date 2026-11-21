
import Image from "next/image";
import Link from "next/link";
import type { Media, Package } from "@/payload-types";

function getImage(media: number | Media | null | undefined) {
  if (!media || typeof media === "number") return null;
  return media;
}

export default function PackageCard({ journey }: { journey: Package }) {
  const image = getImage(journey.featuredImage);

  return (
    <Link
      href={`/packages/${journey.slug}`}
      className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-80 overflow-hidden bg-slate-200">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || journey.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-slate-200" />
        )}
      </div>

      <div className="p-7">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2f80b9]">
          {journey.destinationLabel}
        </p>

        <h2 className="mt-4 font-serif text-3xl text-[#071126]">
          {journey.title}
        </h2>

        <p className="mt-4 text-slate-600">
          {journey.duration}
          {journey.nights ? ` · ${journey.nights}` : ""}
        </p>

        <p className="mt-5 font-serif text-2xl text-[#071126]">
          {journey.price}
        </p>
      </div>
    </Link>
  );
}
