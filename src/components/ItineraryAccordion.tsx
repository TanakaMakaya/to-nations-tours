"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export default function ItineraryAccordion({
  itinerary,
}: {
  itinerary: ItineraryDay[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-8 space-y-4">
      {itinerary.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 p-6 text-left"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e4eef7] text-[#2f80b9]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2f80b9]">
                    {item.day}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[#071126]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ChevronDown
                className={`shrink-0 text-slate-500 transition duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="border-t border-slate-100 px-6 pb-7 pt-2">
                    <p className="pl-17 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}