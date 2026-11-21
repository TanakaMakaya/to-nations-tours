
import Link from "next/link";
import type { HomePage } from "@/payload-types";

type HeroProps = {
  content: HomePage["hero"];
};

export default function Hero({ content }: HeroProps) {
  const backgroundImage =
    typeof content.backgroundImage === "object" &&
    content.backgroundImage !== null
      ? content.backgroundImage.url
      : null;

  const eyebrow =
    content.eyebrow || "Authentic African Journeys · Meaningful memories";

  const title = content.title || "Explore Southern Africa";
  const accentText = content.accentText || "Like Never Before";

  const subtitle =
    content.subtitle ||
    "Discover unforgettable journeys across South Africa, Zimbabwe, and Botswana — from breathtaking landscapes and rich culture to world-class safaris and iconic natural wonders.";

  const buttonText = content.buttonText || "View Packages";
  const buttonLink = content.buttonLink || "/packages";

  const secondaryButtonText =
    content.secondaryButtonText || "Plan My Journey";

  const secondaryButtonLink =
    content.secondaryButtonLink || "/contact";

  return (
    <section className="relative mt-20 min-h-[calc(100svh-5rem)] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={backgroundImage || "/images/hero-fallback.jpg"}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#071126]/50" />
      <div className="absolute inset-0 bg-linear-to-r from-[#071126]/80 via-[#071126]/45 to-[#071126]/20" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-end px-5 pb-10 sm:px-6 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="mt-10 w-full max-w-3xl text-white md:mt-0">
          <p className="mb-5 inline-flex max-w-full rounded-full bg-white/90 px-5 py-3 text-[9px] font-bold uppercase leading-5 tracking-[0.22em] text-[#12345a] sm:text-xs sm:tracking-[0.3em]">
            {eyebrow}
          </p>

          <h1 className="font-serif text-[3.35rem] leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
            <br />

            <span className="italic text-[#c9e2ff]">
              {accentText}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-white/90 sm:text-lg md:text-xl">
            {subtitle}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            <Link
              href={buttonLink}
              className="flex min-h-14 items-center justify-center rounded-full border border-white px-4 py-3 text-center text-sm font-bold leading-5 text-white transition hover:bg-white hover:text-[#12345a] sm:px-8 sm:text-base"
            >
              {buttonText}
            </Link>

            <Link
              href={secondaryButtonLink}
              className="flex min-h-14 items-center justify-center rounded-full border border-white px-4 py-3 text-center text-sm font-bold leading-5 text-white transition hover:bg-white/10 sm:px-8 sm:text-base"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
