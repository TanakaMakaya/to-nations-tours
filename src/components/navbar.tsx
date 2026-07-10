"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Journeys", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#071126]/10 bg-[#e4eef7]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="To Nations Tours home"
        >
          <Image
            src="/images/logo1.png"
            alt="To Nations Tours"
            width={220}
            height={80}
            priority
            className="h-auto w-[155px] object-contain transition duration-300 hover:scale-[1.03] sm:w-[180px] lg:w-[210px]"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#071126] transition hover:text-[#2f80b9] xl:text-xs xl:tracking-[0.35em]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden border-b border-[#2f80b9] pb-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#12345a] transition hover:text-[#2f80b9] lg:block xl:text-xs xl:tracking-[0.35em]"
        >
          Plan a Journey
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#071126]/15 text-[#071126] transition hover:bg-white/60 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[#071126]/10 bg-[#e4eef7] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-6">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-[#071126]/10 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#071126] transition hover:pl-2 hover:text-[#2f80b9]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-6 block rounded-full bg-[#123d70] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.28em] text-white transition hover:bg-[#2f80b9]"
          >
            Plan a Journey
          </Link>

          <div className="mt-6 space-y-2 text-sm text-[#071126]/65">
            <a href="tel:+27814372766" className="block hover:text-[#2f80b9]">
              +27 81 437 2766
            </a>

            <a
              href="mailto:info@tonationstours.com"
              className="block hover:text-[#2f80b9]"
            >
              info@tonationstours.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}