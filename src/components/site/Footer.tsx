"use client";

import Link from "next/link";
import { Moon, Mail, ExternalLink } from "lucide-react";

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const FOOTER_LEGAL = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const FOOTER_SECTIONS = [
  { href: "/#current-phase", label: "Current Moon Phase" },
  { href: "/#phases", label: "8 Moon Phases" },
  { href: "/#calendar", label: "Moon Phase Calendar" },
  { href: "/#meaning", label: "Moon Phase Meaning" },
  { href: "/#how-it-works", label: "How Moon Phases Work" },
  { href: "/#facts", label: "Moon Facts" },
  { href: "/#faq", label: "FAQ" },
];

// Direct external source links — no /sources page, no "www" prefix.
// moonphaseemoji.com is intentionally shown as a bare URL (no descriptive
// anchor text) and carries rel="nofollow" so no SEO link equity is passed.
const FOOTER_SOURCES: Array<{ name?: string; url: string; bare?: boolean }> = [
  { url: "https://moonphaseemoji.com/", bare: true },
  { name: "NASA — Moon Phases", url: "https://science.nasa.gov/moon/moon-phases/" },
  { name: "timeanddate.com — Moon Phases", url: "https://timeanddate.com/moon/phases/" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[oklch(0.95_0.012_85/0.08)] bg-[oklch(0.07_0.028_285/0.85)]">
      <div className="absolute inset-0 cosmic-vignette pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.82_0.16_75/0.18)]">
                <Moon className="h-4.5 w-4.5 text-[oklch(0.82_0.16_75)]" strokeWidth={1.75} />
              </span>
              <span className="font-[family-name:var(--font-display-serif)] text-lg font-semibold text-gradient-cosmic">
                Emoji Moon Phase
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              A clear, real-time guide to today&apos;s moon phase as a moon emoji,
              the lunar cycle, and the meaning behind every phase — built for
              curious sky-watchers, students, and astronomy lovers.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="mailto:tecsuli4155khan02@gmail.com"
                aria-label="Email Emoji Moon Phase"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.95_0.012_85/0.10)] text-foreground/70 hover:text-[oklch(0.82_0.16_75)] hover:border-[oklch(0.82_0.16_75/0.5)] transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Main pages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.16_75)] mb-4">
              Pages
            </h3>
            <ul className="space-y-3">
              {FOOTER_NAV.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.16_75)] mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {FOOTER_SECTIONS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources + Legal combined column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.16_75)] mb-4">
              Sources
            </h3>
            <ul className="space-y-3">
              {FOOTER_SOURCES.map((s) => {
                // For moonphaseemoji.com: bare URL anchor text + nofollow
                // (no descriptive anchor text, no link equity passed).
                // For the other sources: descriptive anchor text + standard noopener.
                const isBare = s.bare === true;
                const relAttr = isBare
                  ? "nofollow noopener noreferrer"
                  : "noopener noreferrer";
                const displayText = isBare ? s.url : s.name;
                return (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel={relAttr}
                      className="group inline-flex items-start gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      <span className={isBare ? "font-mono text-xs" : ""}>{displayText}</span>
                      <ExternalLink className="mt-0.5 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <h3 className="mt-7 text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.16_75)] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/70 leading-relaxed">
              Calculated using the J2000 synodic month model. Accuracy ±0.5 days
              for casual observation.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[oklch(0.95_0.012_85/0.08)] flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Emoji Moon Phase. All rights reserved.</p>
          <p>
            Made with care for the night sky ·{" "}
            <Link href="/#author" className="hover:text-foreground underline-offset-4 hover:underline">
              About Jacob Moses
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
