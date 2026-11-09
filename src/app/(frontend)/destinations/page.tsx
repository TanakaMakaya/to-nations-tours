"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const destinations = [
  {
    title: "South Africa",
    subtitle: "Cities · Coastlines · Wildlife",
    description:
      "Explore Cape Town, the Garden Route, the Cape Winelands, vibrant cultural destinations and unforgettable safari reserves.",
    image: "/images/destinations/south-africa.jpg",
    size: "large",
  },
  {
    title: "Zimbabwe",
    subtitle: "Victoria Falls · Hwange · Heritage",
    description:
      "Experience Victoria Falls, the Zambezi River, Hwange National Park, Great Zimbabwe and warm local hospitality.",
    image: "/images/destinations/zimbabwe.jpg",
    size: "wide",
  },
  {
    title: "Botswana",
    subtitle: "Chobe · Okavango · Moremi",
    description:
      "Discover peaceful waterways, abundant wildlife and some of Africa's most remarkable safari experiences.",
    image: "/images/destinations/botswana.jpg",
    size: "wide",
  },
  {
    title: "Eswatini",
    subtitle: "Culture · Crafts · Nature",
    description:
      "Meet welcoming communities, visit traditional markets and experience the cultural heart of the Kingdom of Eswatini.",
    image: "/images/destinations/eswatini.jpg",
    size: "small",
  },
  {
    title: "Lesotho",
    subtitle: "Mountains · Villages · Scenery",
    description:
      "Journey through dramatic mountain passes, highland villages and the spectacular landscapes of the Mountain Kingdom.",
    image: "/images/destinations/lesotho.jpg",
    size: "small",
  },
];

function getDestinationClasses(size: string) {
  if (size === "large") {
    return "md:col-span-2 md:row-span-2 min-h-[480px] md:min-h-[620px]";
  }

  if (size === "wide") {
    return "md:col-span-2 min-h-[340px]";
  }

  return "min-h-[320px]";
}

export default function DestinationsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#e4eef7]">
      <section className="relative px-6 pb-16 pt-36">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#2f80b9]/20 blur-[90px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]"
          >
            Explore Southern Africa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-5xl font-serif text-6xl leading-[0.98] text-[#071126] md:text-8xl"
          >
            Five destinations.{" "}
            <span className="italic text-[#2f80b9]">
              Endless discoveries.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Discover the wildlife, landscapes, cultures and stories of South
            Africa, Zimbabwe, Botswana, Eswatini and Lesotho.
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid auto-rows-[minmax(300px,auto)] gap-5 md:grid-cols-4"
        >
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                  scale: 0.94,
                  rotate: index % 2 === 0 ? -2 : 2,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                },
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.015,
              }}
              className={`group relative overflow-hidden rounded-4xl shadow-sm ${getDestinationClasses(
                destination.size,
              )}`}
            >
              <motion.img
                src={destination.image}
                alt={destination.title}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.9 }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#071126]/95 via-[#071126]/25 to-transparent" />

              <motion.div
                initial={{ y: 15 }}
                whileHover={{ y: 0 }}
                className="absolute inset-x-0 bottom-0 p-7 text-white md:p-9"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9e2ff]">
                  {destination.subtitle}
                </p>

                <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
                  {destination.title}
                </h2>

                <p className="mt-4 max-w-lg leading-7 text-white/75">
                  {destination.description}
                </p>

                <Link
                  href="/packages"
                  className="mt-6 inline-flex border-b border-white pb-1 text-xs font-bold uppercase tracking-[0.25em] transition hover:text-[#c9e2ff]"
                >
                  Explore Journeys
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
              Multi-Country Journeys
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#071126] md:text-6xl">
              Experience more than one nation in a single adventure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Combine neighbouring countries into one seamless journey. Explore
              South Africa, Eswatini and Lesotho, or connect Victoria Falls with
             Botswanas Chobe National Park.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#123d70] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#2f80b9]"
            >
              Create a Multi-Country Tour
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-[2.5rem]"
          >
            <motion.img
              src="/images/destinations/multi-country.jpg"
              alt="Southern African landscape"
              className="h-130 w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.9 }}
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="bg-[#071126] px-6 py-20 text-center text-white"
      >
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
          Your Destination Awaits
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">
          Where will your African story begin?
        </h2>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-[#2f80b9] px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#071126]"
        >
          Plan My Journey
        </Link>
      </motion.section>
    </main>
  );
}