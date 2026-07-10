import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      >
        <source src="/videos/videoHero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#071126]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071126]/80 via-[#071126]/45 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-50 pt-32 md:pb-24">
        <div className="max-w-3xl text-white">
          <p className="mb-6 inline-flex rounded-full bg-white/90 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#12345a] sm:text-xs sm:tracking-[0.35em]">
            To Nations · Authentic African Journeys
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-8xl">
            Explore Africa,
            <br />
            <span className="italic text-blue-200">
              one unforgettable journey.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-white/90 md:text-xl">
            Discover luxury safaris, cultural experiences and unforgettable
            adventures across South Africa, Zimbabwe and Botswana.
          </p>

          <div className="mt-10 flex flex-row gap-4">
            <Link
              href="/packages"
              className="rounded-full border border-white px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:px-9 sm:text-base"
            >
              View Packages
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10 sm:px-9 sm:text-base"
            >
              Plan My Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}