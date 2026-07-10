import Link from "next/link";
import { HeartHandshake, MapPinned, ShieldCheck, Users } from "lucide-react";

const values = [
  {
    title: "Authentic Experiences",
    description:
      "We design journeys that connect travellers with real places, local communities and meaningful stories.",
    icon: MapPinned,
  },
  {
    title: "Personal Service",
    description:
      "Every traveller receives friendly, responsive support from the first enquiry until the journey is complete.",
    icon: HeartHandshake,
  },
  {
    title: "Responsible Travel",
    description:
      "We support local businesses, community experiences and responsible wildlife tourism wherever possible.",
    icon: ShieldCheck,
  },
  {
    title: "Journeys for Everyone",
    description:
      "We create flexible experiences for couples, families, small groups and independent travellers.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#e4eef7]">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            About To Nations Tours
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-tight text-[#071126] md:text-8xl">
            Authentic journeys. Meaningful memories.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            To Nations Tours creates carefully planned travel experiences
            across Southern Africa, combining wildlife, culture, scenery,
            adventure and personal service.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src="/images/about/about-us.jpg"
            alt="Southern African travel experience"
            className="h-[520px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Our Story
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#071126]">
            Travel designed with care and local understanding.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              To Nations Tours was created to help travellers experience the
              beauty and diversity of Southern Africa through journeys that
              feel personal, comfortable and authentic.
            </p>

            <p>
              Our itineraries bring together iconic attractions, wildlife,
              cultural heritage, local cuisine and unforgettable landscapes
              across South Africa, Zimbabwe, Botswana, Eswatini and Lesotho.
            </p>

            <p>
              Whether you are planning your first African holiday, a family
              trip, an adventure with friends or a private escape, our team
              helps shape the experience around your interests and needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
              Our Mission
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#071126] md:text-6xl">
              To make African travel welcoming, memorable and meaningful.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We aim to create high-quality journeys that celebrate local
              culture, protect natural environments and provide lasting value
              to both travellers and the communities they visit.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[2rem] bg-[#e4eef7] p-8"
                >
                  <Icon size={32} className="text-[#2f80b9]" />

                  <h3 className="mt-6 font-serif text-2xl text-[#071126]">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#123d70] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
              Start Your Journey
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Let us help you discover Southern Africa.
            </h2>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-[#2f80b9] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-[#246fa3]"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}