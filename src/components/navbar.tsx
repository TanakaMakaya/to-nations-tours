import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#071126]/10 bg-[#e4eef7]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 pt-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="To Nations Tours"
            width={190}
            height={70}
            priority
            className="h-auto w-[280px] object-contain md:w-[240px] hover:scale-105"
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {["Journeys", "Destinations", "Activities", "About", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Journeys" ? "/packages" : `/${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-[0.35em] text-[#071126] transition hover:text-[#2f80b9]"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        <Link
          href="/packages"
          className="border-b border-[#2f80b9] pb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#12345a] transition hover:text-[#2f80b9] sm:text-xs sm:tracking-[0.35em]"
        >
          Plan a Journey
        </Link>
      </nav>
    </header>
  );
}