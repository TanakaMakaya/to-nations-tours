"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href === "/packages" && pathname.startsWith("/packages"));

  return (
    <Link
      href={href}
      className={`relative pb-2 text-xs font-bold uppercase tracking-[0.35em] transition ${
        active
          ? "text-[#2f80b9]"
          : "text-[#071126] hover:text-[#2f80b9]"
      }`}
    >
      {children}

      {active && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#2f80b9]"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
          }}
        />
      )}
    </Link>
  );
}