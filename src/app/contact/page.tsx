import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#e4eef7]">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Plan Your Journey
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-tight text-[#071126] md:text-7xl">
            Let&apos;s create something{" "}
            <span className="italic text-[#2f80b9]">unforgettable.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Send us your travel details and our team will contact you to
            confirm availability and help plan your journey.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[1fr_380px]">
        <Suspense
          fallback={
            <div className="rounded-4xl bg-white p-10 text-slate-600">
              Loading booking form...
            </div>
          }
        >
          <BookingForm />
        </Suspense>

        <aside className="h-fit rounded-4xl bg-[#071126] p-8 text-white lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
            Contact Details
          </p>

          <div className="mt-8 space-y-6 text-white/75">
            <div>
              <p className="text-sm text-white/45">Email</p>
              <a
                href="mailto:info@tonationstours.com"
                className="mt-1 block hover:text-white"
              >
                info@tonationstours.com
              </a>
            </div>

            <div>
              <p className="text-sm text-white/45">Phone</p>
              <a
                href="tel:+27814372766"
                className="mt-1 block hover:text-white"
              >
                +27 65 166 5033
              </a>
            </div>

            <div>
              <p className="text-sm text-white/45">Office</p>
              <p className="mt-1 leading-7">
                60 Meppen Rd
                <br />
                Germiston, 1401
                <br />
                South Africa
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/27814372766?text=Hello%20To%20Nations%20Tours,%20I%20would%20like%20help%20planning%20a%20journey."
            target="_blank"
            rel="noreferrer"
            className="mt-8 block rounded-full border border-white/25 px-6 py-4 text-center font-semibold transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </aside>
      </section>
    </main>
  );
}