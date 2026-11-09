"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Safari Game Drives",
    description:
      "Search for elephants, lions, rhinos, buffalo and other remarkable wildlife.",
    image: "/activities/safari-game-drive.jpg",
    size: "large",
  },
  {
    title: "Bird Watching",
 
    image: "/activities/bird-watching.jpg",
    size: "small",
  },
  {
    title: "Victoria Falls Experience",
  
    image: "/activities/victoria-falls.jpg",
    size: "small",
  },
  {
    title: "Boat Cruise",
    description:
      "Relax on scenic river and lagoon cruises surrounded by wildlife and sunset views.",
    image: "/activities/boat-cruise.jpg",
    size: "wide",
  },
  {
    title: "Bush Breakfast",
    description:
      "Enjoy a memorable breakfast experience surrounded by peaceful African landscapes.",
    image: "/activities/bush-breakfast.jpeg",
    size: "large",
  },
  {
    title: "Cango Caves",
    // description:
    //   "Explore extraordinary underground chambers and ancient limestone formations.",
    image: "/activities/cango-caves.jpg",
    size: "small",
  },
  {
    title: "Canoeing & Kayaking",
    // description:
    //   "Paddle through rivers, lagoons and scenic waterways at a relaxed pace.",
    image: "/activities/canoeing.jpg",
    size: "small",
  },
  {
    title: "Wine & Food Experiences",
    description:
      "Taste award-winning wines, regional cuisine and carefully selected local flavours.",
    image: "/activities/wine-tasting.jpg",
    size: "wide",
  },
  {
    title: "Hiking & Walking",
    // description:
    //   "Explore mountain trails, forests, coastlines and nature reserves on foot.",
    image: "/activities/hiking.jpg",
    size: "small",
  },
  {
    title: "Adventure Activities",
    // description:
    //   "Choose from ziplining, surfing, bungee jumping and thrilling outdoor experiences.",
    image: "/activities/adventure.jpg",
    size: "small",
  },
  {
    title: "Mokoro Safari",
    description:
      "Glide through the peaceful Okavango Delta in a traditional mokoro canoe.",
    image: "/activities/mokoro-safari.jpg",
    size: "large",
  },
];

function getCardClasses(size: string) {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2 min-h-[420px] md:min-h-[520px]";
    case "wide":
      return "md:col-span-2 min-h-[300px]";
    default:
      return "min-h-[280px]";
  }
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen bg-[#e4eef7]">
      <section className="px-6 pb-14 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2f80b9]">
            Experiences
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-6xl leading-tight text-[#071126] md:text-8xl">
            Experiences that make every journey memorable.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
            Choose from wildlife, culture, food, scenery and adventure. These
            activities can be included in a journey designed around your
            interests.
          </p>
        </motion.div>
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid auto-rows-[minmax(260px,auto)] gap-5 md:grid-cols-4"
        >
          {activities.map((activity) => (
            <motion.article
              key={activity.title}
              variants={cardVariants}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[1.75rem] shadow-sm ${getCardClasses(
                activity.size,
              )}`}
            >
              <motion.img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#071126]/95 via-[#071126]/25 to-transparent" />

              <motion.div
                initial={{ opacity: 0.88, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7"
              >
                {/* <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9e2ff]">
                  To Nations Experience
                </p> */}

                <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  {activity.title}
                </h2>

                <p className="mt-3 max-w-md leading-7 text-white/75">
                  {activity.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex border-b border-white pb-1 text-xs font-bold uppercase tracking-[0.25em] transition hover:text-[#c9e2ff]"
                >
                  Add to My Journey
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#071126] px-6 py-20 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d8aa32]">
              Create Your Experience
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Combine the activities you love into one personalised journey.
            </h2>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="block shrink-0 rounded-full bg-[#2f80b9] px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-[#246fa3]"
            >
              Plan My Journey
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}