
import config from "@payload-config";
import { getPayload } from "payload";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Destination, Media, Package } from "@/payload-types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getMedia(media: number | Media | null | undefined) {
  if (!media || typeof media === "number") return null;
  return media;
}

function getRelatedPackages(
  packages: Package[],
  destinationId: number,
) {
  return packages.filter((pkg) =>
    (pkg.destinations ?? []).some((item) => {
      const id = typeof item === "number" ? item : item.id;
      return id === destinationId;
    }),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "destinations",
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: "published" } },
      ],
    },
    limit: 1,
  });

  const destination = result.docs[0];

  if (!destination) {
    return { title: "Destination Not Found" };
  }

  return {
    title: destination.name,
    description: destination.shortDescription,
  };
}

export default async function DestinationDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const destinationResult = await payload.find({
    collection: "destinations",
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: "published" } },
      ],
    },
    depth: 2,
    limit: 1,
  });

  const destination = destinationResult.docs[0] as Destination | undefined;

  if (!destination) {
    notFound();
  }

  const packagesResult = await payload.find({
    collection: "packages",
    where: {
      status: { equals: "published" },
    },
    depth: 1,
    limit: 100,
  });

  const relatedPackages = getRelatedPackages(
    packagesResult.docs as Package[],
    destination.id,
  );

  const featuredImage = getMedia(destination.featuredImage);
  const gallery = (destination.gallery ?? [])
    .map((item) => getMedia(item))
    .filter((item): item is Media => Boolean(item?.url));

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[65vh] overflow-hidden bg-[#071B2D]">
        {featuredImage?.url && (
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || destination.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D] via-[#071B2D]/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-12">
          <Link
            href="/destinations"
            className="mb-8 w-fit text-sm text-white/80 transition hover:text-white"
          >
            ← All destinations
          </Link>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#A8D8F0]">
            {destination.country.replaceAll("-", " ")}
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-medium text-white md:text-7xl">
            {destination.name}
          </h1>

          {destination.subtitle && (
            <p className="mt-5 text-lg text-white/80 md:text-xl">
              {destination.subtitle}
            </p>
          )}

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {destination.shortDescription}
          </p>
        </div>
      </section>

      {/* Destination information */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] md:px-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Discover the destination
          </p>

          <h2 className="mb-8 font-serif text-3xl text-[#071B2D] md:text-4xl">
            Explore {destination.name}
          </h2>

          {destination.description ? (
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#071B2D] prose-p:leading-8 prose-p:text-gray-600">
              <RichText data={destination.description} />
            </div>
          ) : (
            <p className="leading-8 text-gray-600">
              {destination.shortDescription}
            </p>
          )}

          {destination.region && (
            <p className="mt-8 text-sm text-gray-500">
              <span className="font-semibold text-[#071B2D]">Region:</span>{" "}
              {destination.region}
            </p>
          )}
        </div>

        {/* Highlights */}
        {destination.highlights && destination.highlights.length > 0 && (
          <aside className="h-fit rounded-2xl bg-[#F3F8FB] p-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Highlights
            </p>

            <div className="space-y-6">
              {destination.highlights.map((highlight, index) => (
                <div key={highlight.id ?? index}>
                  <h3 className="font-serif text-xl text-[#071B2D]">
                    {highlight.title}
                  </h3>
                  {highlight.description && (
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {highlight.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        )}
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              The experience
            </p>
            <h2 className="font-serif text-3xl text-[#071B2D] md:text-4xl">
              Moments in {destination.name}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <div
                key={image.id ?? index}
                className="relative h-72 overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.url!}
                  alt={image.alt || destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related packages */}
      {relatedPackages.length > 0 && (
        <section className="bg-[#F3F8FB] py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Find your journey
            </p>

            <h2 className="mb-10 font-serif text-3xl text-[#071B2D] md:text-4xl">
              Packages featuring {destination.name}
            </h2>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedPackages.map((pkg) => {
                const image = getMedia(pkg.featuredImage);

                return (
                  <article
                    key={pkg.id}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm"
                  >
                    <div className="relative h-64">
                      {image?.url ? (
                        <Image
                          src={image.url}
                          alt={image.alt || pkg.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full bg-slate-200" />
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-2xl text-[#071B2D]">
                        {pkg.title}
                      </h3>

                      <p className="mt-3 text-sm text-gray-600">
                        {pkg.duration}
                      </p>

                      <p className="mt-2 font-semibold text-sky-800">
                        {pkg.price}
                      </p>

                      <Link
                        href="/packages"
                        className="mt-6 inline-flex text-sm font-semibold text-[#071B2D] transition hover:text-sky-700"
                      >
                        Explore package →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry CTA */}
      <section className="bg-[#071B2D] px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D8F0]">
          Your African journey starts here
        </p>

        <h2 className="mx-auto max-w-3xl font-serif text-3xl text-white md:text-5xl">
          Ready to experience {destination.name}?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
          Let us help you plan a memorable journey through this incredible
          destination.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#071B2D] transition hover:bg-[#A8D8F0]"
        >
          Plan your journey
        </Link>
      </section>
    </main>
  );
}
