import Link from "next/link";
import config from "@payload-config";
import { getPayload } from "payload";
import type { SiteSetting } from "@/payload-types";

export default async function Footer() {
  const payload = await getPayload({ config });

  const settings: SiteSetting = await payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });

  const siteName = settings.siteName || "To Nations Tours";
  const email = settings.contact?.email || "info@tonationstours.com";
  const phone = settings.contact?.phone || "+27 65 166 5033";
  const phoneLink = phone.replace(/[^\d+]/g, "");

  const address =
    settings.contact?.address ||
    "60 Meppen Rd\nGermiston, 1401\nGauteng, South Africa";

  const footerText =
    settings.footerText || `© ${new Date().getFullYear()} · ${siteName}`;

  const socialLinks = settings.socialLinks ?? [];

  return (
    <footer className="bg-[#050b20] text-white">
      {/* Call to action */}
      <section className="bg-[#e4eef7] px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-4xl bg-[#123d70] px-8 py-16 text-center text-white md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
            Start Your Journey
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Let us craft your{" "}
            <em className="text-[#d8aa32]">African escape.</em>
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

      {/* Footer content */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="font-serif text-2xl">{siteName}</h3>

          <p className="mt-6 max-w-sm leading-7 text-white/60">
            Authentic journeys and meaningful memories across South Africa,
            Zimbabwe, Botswana and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
            Explore
          </p>

          <div className="mt-6 space-y-4 text-sm font-bold uppercase tracking-[0.25em]">
            <Link
              href="/packages"
              className="block hover:text-[#2f80b9]"
            >
              Journeys
            </Link>

            <Link
              href="/destinations"
              className="block hover:text-[#2f80b9]"
            >
              Destinations
            </Link>

            <Link
              href="/activities"
              className="block hover:text-[#2f80b9]"
            >
              Activities
            </Link>

            <Link
              href="/contact"
              className="block hover:text-[#2f80b9]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact and social links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/40">
            Connect
          </p>

          <div className="mt-6 space-y-5 text-white/70">
            <a
              href={`mailto:${email}`}
              className="block transition hover:text-[#2f80b9]"
            >
              {email}
            </a>

            <a
              href={`tel:${phoneLink}`}
              className="block transition hover:text-[#2f80b9]"
            >
              {phone}
            </a>

            <p className="whitespace-pre-line leading-7">{address}</p>

            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.id ?? `${social.platform}-${social.url}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-[0.15em] transition hover:text-[#2f80b9]"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 py-8 text-center text-xs uppercase tracking-[0.35em] text-white/40">
        {footerText}
      </div>
    </footer>
  );
}