import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050b20] text-white">
      <section className="bg-[#e4eef7] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#123d70] px-8 py-16 text-center text-white md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
            Start Your Journey
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Let us craft your <em className="text-[#d8aa32]">African escape.</em>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Share your dream destination and our team will help you plan a
            memorable journey across Southern Africa.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#2f80b9] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-white hover:bg-[#246fa3]"
          >
            Request Itinerary →
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">
            To Nations <em className="text-[#2f80b9]">Tours</em>
          </h3>
          <p className="mt-6 max-w-sm leading-7 text-white/60">
            Authentic journeys and meaningful memories across South Africa,
            Zimbabwe, Botswana and beyond.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
            Explore
          </p>
          <div className="mt-6 space-y-4 text-sm font-bold uppercase tracking-[0.25em]">
            <Link href="/packages" className="block hover:text-[#2f80b9]">
              Journeys
            </Link>
            <Link href="/destinations" className="block hover:text-[#2f80b9]">
              Destinations
            </Link>
            <Link href="/activities" className="block hover:text-[#2f80b9]">
              Activities
            </Link>
            <Link href="/contact" className="block hover:text-[#2f80b9]">
              Contact
            </Link>
          </div>
        </div>

        <div>
  <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
    Connect
  </p>

  <div className="mt-6 space-y-5 text-white/70">
    <a
      href="mailto:info@tonationstours.com"
      className="block transition hover:text-[#2f80b9]"
    >
      info@tonationstours.com
    </a>

    <a
      href="tel:+27814372766"
      className="block transition hover:text-[#2f80b9]"
    >
      +27 81 437 2766
    </a>

    <p className="leading-7">
      60 Meppen Rd
      <br />
      Germiston, 1401
      <br />
      Gauteng, South Africa
    </p>
  </div>
</div>
</div>

      <div className="border-t border-white/10 px-6 py-8 text-center text-xs uppercase tracking-[0.35em] text-white/40">
        © 2026 · To Nations Tours
      </div>
    </footer>
    );
}