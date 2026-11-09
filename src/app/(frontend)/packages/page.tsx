"use client";

import PackageCard from "@/components/package/PackageCard";
import { journeys } from "@/data/journeys";
import { motion } from "framer-motion";

export default function PackagesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e4eef7]">
      <section className="relative px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-32 top-16 h-105 w-105 rounded-full bg-[#2f80b9] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 0.9 }}
            className="text-xs font-bold uppercase text-[#2f80b9]"
          >
            Curated Journeys
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70, skewY: 3 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-5xl font-serif text-6xl leading-[0.98] text-[#071126] md:text-8xl"
          >
            Choose your{" "}
            <span className="italic text-[#2f80b9]">
              African journey.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Explore carefully planned tours across South Africa, Zimbabwe,
            Botswana, Eswatini and Lesotho. Each journey combines culture,
            wildlife, scenery, comfort and meaningful local experiences.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.slug}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                  rotate: index % 2 === 0 ? -2 : 2,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
            >
              <PackageCard journey={journey} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="bg-[#071126] px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
            Tailor-Made Travel
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Cannot find the perfect journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Tell us where you want to go, what you enjoy and how you prefer to
            travel. We will help shape a journey around you.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-9 inline-flex rounded-full bg-[#2f80b9] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em]"
          >
            Plan My Journey
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}