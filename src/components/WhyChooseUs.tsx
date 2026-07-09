import {
  ShieldCheck,
  MapPinned,
  Users,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Travel Experts",
    description:
      "We carefully plan every journey to ensure a safe, seamless and memorable travel experience.",
  },
  {
    icon: MapPinned,
    title: "Local Knowledge",
    description:
      "Our itineraries are built from real experience across South Africa, Zimbabwe and Botswana.",
  },
  {
    icon: Users,
    title: "Tailor-Made Journeys",
    description:
      "Whether you're travelling solo, with family or in a group, we create an itinerary that suits you.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Service",
    description:
      "From your first enquiry until you return home, our team is with you every step of the journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#e4eef7] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Why Choose Us
          </p>

          <h2 className="mt-6 font-serif text-5xl text-[#071126]">
            Every journey is crafted with care.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At To Nations Tours, we believe travel should be authentic,
            effortless and unforgettable. Every itinerary is thoughtfully
            designed to showcase the very best of Southern Africa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={34}
                  className="text-[#2f80b9]"
                />

                <h3 className="mt-6 text-xl font-semibold text-[#071126]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}