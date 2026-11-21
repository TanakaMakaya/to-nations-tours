
import {
  ShieldCheck,
  MapPinned,
  Users,
  HeartHandshake,
} from "lucide-react";

import type { HomePage } from "@/payload-types";

type WhyChooseUsProps = {
  features: NonNullable<HomePage["whyChooseUs"]>;
  section?: HomePage["whyChooseUsSection"];
};

const icons = [
  ShieldCheck,
  MapPinned,
  Users,
  HeartHandshake,
];

export default function WhyChooseUs({
  features,
  section,
}: WhyChooseUsProps) {
  return (
    <section className="bg-[#e4eef7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Why Choose Us
          </p>

          <h2 className="mt-6 font-serif text-5xl text-[#071126]">
            {section?.heading || "Every journey is crafted with care."}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {section?.description ||
              "At To Nations Tours, we believe travel should be authentic, effortless and unforgettable. Every itinerary is thoughtfully designed to showcase the very best of Southern Africa."}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={feature.id ?? feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon size={34} className="text-[#2f80b9]" />

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
