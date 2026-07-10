"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BadgeDollarSign,
  Compass,
  Globe2,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    title: "Recognised Excellence",
    description:
      "Trusted safari specialists focused on memorable service and quality experiences.",
    icon: Award,
  },
  {
    title: "Best Price Promise",
    description:
      "Carefully designed journeys that offer strong value without compromising the experience.",
    icon: BadgeDollarSign,
  },
  {
    title: "Tailored Adventures",
    description:
      "Flexible journeys shaped around your interests, travel style and preferred pace.",
    icon: Compass,
  },
  {
    title: "Diverse Choices",
    description:
      "Wildlife, culture, scenery, food and adventure experiences across Southern Africa.",
    icon: Globe2,
  },
];

const values = [
  {
    title: "Eco Friendly",
    description:
      "We take responsibility for protecting Africa’s culture, communities and natural wonders.",
    icon: Leaf,
  },
  {
    title: "Authenticity",
    description:
      "Every journey is designed to feel genuine, immersive and connected to local culture.",
    icon: HeartHandshake,
  },
  {
    title: "Safety",
    description:
      "Experienced guides, trusted partners and careful planning support every traveller.",
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#e4eef7]">
      {/* Hero */}
      <section className="relative min-h-[82vh] overflow-hidden px-6 pb-20 pt-36">
        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 0.16, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute -right-24 top-20 h-[420px] w-[420px] rounded-full bg-[#2f80b9] blur-[100px]"
        />

        <motion.div
          initial={{ opacity: 0, x: -120, rotate: -8 }}
          animate={{ opacity: 0.12, x: 0, rotate: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-[#123d70] blur-[90px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1 }}
            className="text-xs font-bold uppercase text-[#2f80b9]"
          >
            About To Nations Tours
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-6xl font-serif text-6xl leading-[0.98] text-[#071126] md:text-8xl"
          >
            Discover the heart of Southern Africa,{" "}
            <motion.span
              initial={{ color: "#071126" }}
              animate={{ color: "#2f80b9" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="italic"
            >
              where every journey becomes a story.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-slate-600"
          >
            We create carefully curated journeys across South Africa,
            Zimbabwe and Botswana, combining wildlife, culture, scenery,
            adventure and authentic local experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#071126]/10 bg-white/60 px-5 py-3 text-sm font-semibold text-[#071126] backdrop-blur"
          >
            <Sparkles size={18} className="text-[#2f80b9]" />
            Authentic journeys. Meaningful memories.
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2.5rem]"
          >
            <motion.img
              src="/images/zimbabwe-explorer.jpg"
              alt="To Nations Tours travel experience"
              className="h-140 w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.9 }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#071126]/70 via-transparent to-transparent" />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute bottom-0 p-8 text-white"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                Southern Africa
              </p>
              <h2 className="mt-3 font-serif text-4xl">
                Travel that feels personal.
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
              Our Story
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#071126]">
              More than visiting places. It is about creating memories.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                At To Nations Tours, we believe travel is about meaningful
                experiences, cultural connection and memories that last a
                lifetime.
              </p>

              <p>
                Our itineraries combine wildlife safaris, scenic landscapes,
                cultural encounters and authentic local experiences for solo
                travellers, couples, families and groups.
              </p>

              <p>
                We work with experienced guides, trusted local partners and
                quality accommodation providers to make every journey safe,
                comfortable and memorable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-[#071126] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
              Why Travel With Us
            </p>

            <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
              Thoughtfully planned journeys, delivered with care.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 70,
                      rotateY: index % 2 === 0 ? -18 : 18,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    },
                  }}
                  transition={{ duration: 0.75 }}
                  whileHover={{
                    y: -12,
                    rotate: index % 2 === 0 ? -1.5 : 1.5,
                    scale: 1.03,
                  }}
                  className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2f80b9]"
                  >
                    <Icon size={27} />
                  </motion.div>

                  <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>

                  <p className="mt-4 leading-7 text-white/65">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-white px-6 py-24">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -35, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#2f80b9]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
              Our Mission
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#071126] md:text-6xl">
              Inspiring unforgettable African adventures.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Our mission is to help travellers discover the wildlife,
              landscapes and cultures of Southern Africa through journeys that
              combine adventure, comfort and authentic local connection.
            </p>

            <blockquote className="mt-10 border-l-4 border-[#2f80b9] pl-6 font-serif text-3xl italic leading-relaxed text-[#123d70]">
              “Every destination tells a story. Every journey creates a
              memory.”
            </blockquote>
          </motion.div>

          <div className="grid gap-6">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? 100 : -100,
                    scale: 0.9,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                  }}
                  className="flex gap-5 rounded-4xl bg-[#e4eef7] p-7"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, 0] }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#2f80b9]"
                  >
                    <Icon size={27} />
                  </motion.div>

                  <div>
                    <h3 className="font-serif text-2xl text-[#071126]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9 }}
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#123d70] px-8 py-20 text-center text-white">
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]"
          >
            Your Story Starts Here
          </motion.p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
            Let us help you discover the extraordinary.
          </h2>

          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#2f80b9] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#123d70]"
            >
              Plan My Journey
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}