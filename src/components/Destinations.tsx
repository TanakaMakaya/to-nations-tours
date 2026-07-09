import DestinationCard from "./DestinationCard";

const destinations = [
  {
    title: "South Africa",
    image: "/images/south-africa.jpg",
    description:
      "Wildlife safaris, Cape Town, the Garden Route, wine estates and unforgettable scenery.",
  },
  {
    title: "Zimbabwe",
    image: "/images/zimbabwe.jpg",
    description:
      "Experience the breathtaking Victoria Falls, cultural heritage and incredible national parks.",
  },
  {
    title: "Botswana",
    image: "/images/botswana.jpg",
    description:
      "Luxury safaris, the Okavango Delta, Chobe National Park and spectacular wildlife.",
  },
];

export default function Destinations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Explore Africa
          </p>

          <h2 className="mt-3 text-5xl font-bold text-gray-900">
            Our Destinations
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Carefully curated experiences across Southern Africa,
            combining luxury, adventure and authentic cultural encounters.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.title}
              {...destination}
            />
          ))}
        </div>

      </div>
    </section>
  );
}