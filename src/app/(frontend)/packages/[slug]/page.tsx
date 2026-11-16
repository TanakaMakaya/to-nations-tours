
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Activity, Media, Package } from "@/payload-types";
import ItineraryAccordion from "@/components/ItineraryAccordion";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getMedia(media: number | Media | null | undefined) {
  if (!media || typeof media === "number") return null;
  return media;
}

function getArrayItems(
  items: { item?: string | null }[] | null | undefined,
) {
  return (items ?? [])
    .map((entry) => entry.item)
    .filter((item): item is string => Boolean(item));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "packages",
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: "published" } },
      ],
    },
    limit: 1,
  });

  const journey = result.docs[0];

  if (!journey) {
    return {
      title: "Journey Not Found",
    };
  }

  return {
    title: journey.title,
    description:
      journey.overview ||
      `${journey.title} - Explore Southern Africa with To Nations Tours.`,
  };
}

export default async function JourneyPage({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "packages",
    where: {
      and: [
        { slug: { equals: slug } },
        { status: { equals: "published" } },
      ],
    },
    depth: 2,
    limit: 1,
  });

  const journey = result.docs[0] as Package | undefined;

  if (!journey) {
    notFound();
  }

  const featuredImage = getMedia(journey.featuredImage);

  const highlights = getArrayItems(journey.highlights);
  const includes = getArrayItems(journey.includes);
  const excludes = getArrayItems(journey.excludes);

  const itinerary = (journey.itinerary ?? []).map((item) => ({
    day: item.day,
    title: item.title,
    description: item.description,
  }));

  const gallery = (journey.gallery ?? [])
    .map((item) => getMedia(item))
    .filter((item): item is Media => Boolean(item?.url));

  const activities = (journey.activities ?? [])
    .filter(
      (item): item is Activity =>
        typeof item !== "number" && item.status === "published",
    );

  const faqs = journey.faqs ?? [];

  const information = [
    ["Transportation", journey.transportation],
    ["Tour Type", journey.tourType],
    ["Language", journey.language],
    ["Fitness Level", journey.fitnessLevel],
    ["Group Size", journey.groupSize],
    [
      "Age",
      journey.minimumAge || journey.maximumAge
        ? `${journey.minimumAge || "No minimum"} - ${journey.maximumAge || "No maximum"}`
        : null,
    ],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <main className="bg-[#e4eef7]">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#071126]">
        {featuredImage?.url && (
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || journey.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-[#071126]/60" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-20 pt-32 text-white">
          <div>
            <Link
              href="/packages"
              className="mb-8 inline-block text-sm text-white/75 transition hover:text-white"
            >
              ← Back to journeys
            </Link>

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
              {journey.destinationLabel}
            </p>

            <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-tight md:text-8xl">
              {journey.title}
            </h1>

            <p className="mt-6 text-xl text-white/80">
              {journey.duration}
              {journey.nights ? ` · ${journey.nights}` : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Package details */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_380px]">
        <div>
          {/* Information cards */}
          {information.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {information.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2f80b9]">
                    {label}
                  </p>

                  <p className="mt-3 font-semibold text-[#071126]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          {journey.overview && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Overview
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                {journey.overview}
              </p>
            </section>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Highlights
              </h2>

              <ul className="mt-6 space-y-4 text-lg text-slate-700">
                {highlights.map((item, index) => (
                  <li key={`${item}-${index}`}>• {item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Itinerary */}
          {itinerary.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Itinerary
              </h2>

              {journey.itineraryIntro && (
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  {journey.itineraryIntro}
                </p>
              )}

              <ItineraryAccordion itinerary={itinerary} />
            </section>
          )}

          {/* Cost includes and excludes */}
          {(includes.length > 0 || excludes.length > 0) && (
            <section className="mt-16 grid gap-8 md:grid-cols-2">
              {includes.length > 0 && (
                <div>
                  <h2 className="font-serif text-4xl text-[#071126]">
                    Cost Includes
                  </h2>

                  <ul className="mt-6 space-y-3 text-slate-700">
                    {includes.map((item, index) => (
                      <li key={`${item}-${index}`}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {excludes.length > 0 && (
                <div>
                  <h2 className="font-serif text-4xl text-[#071126]">
                    Cost Excludes
                  </h2>

                  <ul className="mt-6 space-y-3 text-slate-700">
                    {excludes.map((item, index) => (
                      <li key={`${item}-${index}`}>× {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Activities */}
          {activities.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Experiences Along the Way
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Discover some of the unforgettable experiences included in
                this journey.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {activities.map((activity) => {
                  const image = getMedia(activity.featuredImage);

                  return (
                    <article
                      key={activity.id}
                      className="overflow-hidden rounded-2xl bg-white shadow-sm"
                    >
                      {image?.url && (
                        <div className="relative h-56">
                          <Image
                            src={image.url}
                            alt={image.alt || activity.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f80b9]">
                          {activity.category.replaceAll("-", " ")}
                        </p>

                        <h3 className="mt-3 font-serif text-2xl text-[#071126]">
                          {activity.name}
                        </h3>

                        {activity.shortDescription && (
                          <p className="mt-3 leading-7 text-slate-600">
                            {activity.shortDescription}
                          </p>
                        )}

                        {activity.duration && (
                          <p className="mt-4 text-sm font-semibold text-slate-500">
                            Duration: {activity.duration}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Journey Gallery
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {gallery.map((image, index) => (
                  <div
                    key={image.id ?? index}
                    className="relative h-72 overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={image.url!}
                      alt={image.alt || journey.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-5xl text-[#071126]">
                Frequently Asked Questions
              </h2>

              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.id ?? index}
                    className="group rounded-2xl bg-white p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#071126]">
                      {faq.question}

                      <span className="text-2xl text-[#2f80b9] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-4 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Booking sidebar */}
        <aside className="h-fit rounded-4xl bg-white p-8 shadow-xl lg:sticky lg:top-28">
          <p className="font-serif text-3xl text-[#071126]">
            {journey.price}
          </p>

          {journey.childPrice && (
            <p className="mt-2 text-slate-500">
              {journey.childPrice}
            </p>
          )}

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p>✓ Best Price Guaranteed</p>
            <p>✓ No Booking Fees</p>
          </div>

          <Link
            href={`/contact?trip=${journey.slug}`}
            className="mt-8 block rounded-full bg-[#2f80b9] px-6 py-4 text-center font-bold text-white transition hover:bg-[#246fa3]"
          >
            Check Availability
          </Link>

          <p className="mt-6 text-center text-sm text-slate-500">
            Need help with booking? Send us a message.
          </p>
        </aside>
      </section>
    </main>
  );
}
