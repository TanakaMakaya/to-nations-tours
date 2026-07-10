"use client";

import Link from "next/link";
import {
  ChevronLeft,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useState } from "react";

type ChatOption = {
  label: string;
  response: string;
  href?: string;
};

const chatOptions: ChatOption[] = [
  {
    label: "View available journeys",
    response:
      "We currently offer journeys across South Africa, Zimbabwe, Botswana, Eswatini and Lesotho.",
    href: "/packages",
  },
  {
    label: "Which safari is best?",
    response:
      "Botswana Explorer is ideal for the Okavango Delta and Chobe, while Zimbabwe Explorer combines Victoria Falls with Hwange National Park.",
    href: "/packages",
  },
  {
    label: "Do you offer family tours?",
    response:
      "Yes. Many journeys can be adjusted for families, couples, solo travellers and private groups.",
    href: "/contact",
  },
  {
    label: "Can a journey be customised?",
    response:
      "Yes. We can adjust dates, accommodation, activities, group size and destinations to suit your preferences.",
    href: "/contact",
  },
  {
    label: "How do I make a booking?",
    response:
      "Select a journey and click Check Availability, or send us your travel details through the enquiry form.",
    href: "/contact",
  },
  {
    label: "View contact details",
    response:
      "You can call +27 81 437 2766 or email info@tonationstours.com.",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<ChatOption | null>(null);

  function closeChat() {
    setIsOpen(false);
    setSelectedOption(null);
  }

  function goBack() {
    setSelectedOption(null);
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open travel assistant"
        className={`fixed bottom-5 right-5 z-70 flex h-16 w-16 items-center justify-center rounded-full bg-[#123d70] text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#2f80b9] ${
          isOpen ? "pointer-events-none scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <MessageCircle size={27} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-4 right-4 z-80 w-[calc(100%-2rem)] max-w-97.5 origin-bottom-right overflow-hidden rounded-4xl bg-white shadow-2xl transition-all duration-300 sm:bottom-6 sm:right-6 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-8 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-[#123d70] px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {selectedOption && (
                <button
                  type="button"
                  onClick={goBack}
                  aria-label="Go back"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              <div>
                <p className="font-serif text-xl">To Nations Assistant</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={closeChat}
              aria-label="Close travel assistant"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <X size={21} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-120 overflow-y-auto bg-[#f4f8fc] p-5">
          {!selectedOption ? (
            <>
              <div className="rounded-3xl rounded-tl-md bg-white p-5 shadow-sm">
                <p className="font-semibold text-[#071126]">
                  Hello, welcome to To Nations Tours 
                </p>

                <p className="mt-2 leading-7 text-slate-600">
                  How can we help you plan your Southern African journey?
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {chatOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setSelectedOption(option)}
                    className="flex w-full items-center justify-between rounded-2xl border border-[#071126]/10 bg-white px-5 py-4 text-left text-sm font-semibold text-[#071126] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f80b9] hover:text-[#2f80b9]"
                  >
                    {option.label}
                    <Send size={16} />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className="ml-auto max-w-[88%] rounded-3xl rounded-tr-md bg-[#2f80b9] p-4 text-white">
                <p>{selectedOption.label}</p>
              </div>

              <div className="mt-4 max-w-[92%] rounded-3xl rounded-tl-md bg-white p-5 shadow-sm">
                <p className="leading-7 text-slate-600">
                  {selectedOption.response}
                </p>

                {selectedOption.href && (
                  <Link
                    href={selectedOption.href}
                    onClick={closeChat}
                    className="mt-5 block rounded-full bg-[#123d70] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#2f80b9]"
                  >
                    Continue
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 bg-white p-4">
          <a
            href="https://wa.me/27814372766?text=Hello%20To%20Nations%20Tours,%20I%20would%20like%20help%20planning%20a%20journey."
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-3 text-center text-sm font-bold text-white transition hover:opacity-90"
          >
            WhatsApp
          </a>

          <a
            href="tel:+27814372766"
            className="flex items-center justify-center gap-2 rounded-full border border-[#123d70] px-4 py-3 text-sm font-bold text-[#123d70] transition hover:bg-[#123d70] hover:text-white"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}