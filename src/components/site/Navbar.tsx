"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#current-phase", label: "Current Phase" },
  { href: "/#phases", label: "8 Phases" },
  { href: "/#calendar", label: "Calendar" },
  { href: "/#meaning", label: "Meaning" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

const SECONDARY_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[oklch(0.10_0.025_285/0.85)] backdrop-blur-md border-b border-[oklch(0.95_0.012_85/0.08)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[oklch(0.82_0.16_75/0.18)] group-hover:bg-[oklch(0.82_0.16_75/0.32)] transition-colors" />
              <Moon className="relative h-5 w-5 text-[oklch(0.82_0.16_75)]" strokeWidth={1.75} />
            </span>
            <span className="font-[family-name:var(--font-display-serif)] text-lg md:text-xl font-semibold tracking-tight text-gradient-cosmic">
              Emoji Moon Phase
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      active
                        ? "text-[oklch(0.82_0.16_75)]"
                        : "text-foreground/75 hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.16_75)] to-transparent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-foreground/5 transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-16 z-40 bg-[oklch(0.07_0.028_285/0.96)] backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <ul className="flex flex-col gap-1 p-6 max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
            {[...NAV_LINKS, ...SECONDARY_LINKS].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/90 hover:bg-foreground/5 hover:text-[oklch(0.82_0.16_75)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
