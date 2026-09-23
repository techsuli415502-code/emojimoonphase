import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Telescope, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Why We Built Emoji Moon Phase",
  description:
    "Learn why Emoji Moon Phase exists, who writes the content, and how every moon phase calculation on this site is grounded in published astronomical data.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — Emoji Moon Phase",
    description:
      "Why we built Emoji Moon Phase, who writes the content, and how our live moon phase calculator works.",
  },
};

const VALUES = [
  {
    icon: Compass,
    title: "Plain English, first",
    description:
      "Astronomy has a reputation for being intimidating. We strip jargon out where we can, and when a technical term is necessary we explain it the first time it appears. Every article is written so that a curious middle-schooler and a casual adult sky-watcher can both follow along.",
  },
  {
    icon: Telescope,
    title: "Backed by real data",
    description:
      "Our moon phase calculations use the J2000 reference new moon and the IAU synodic month length of 29.5306 days. We cross-check our results against NASA's Moon Phases reference and timeanddate.com before publishing anything that affects the live calculator.",
  },
  {
    icon: Sparkles,
    title: "Useful, not pretty",
    description:
      "The cosmic design is here to make the content enjoyable to read. The content itself — the calculator, the calendar, the FAQ answers — is the point. We prioritize clarity and accuracy over visual flourish when the two would conflict.",
  },
  {
    icon: Heart,
    title: "Reader feedback is welcome",
    description:
      "If you spot an error, a typo, or a phase calculation that looks off, please tell us. Every correction makes the site better for the next reader. Use the contact page to reach the author directly.",
  },
];

export default function AboutPage() {
  return (
    <article>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Why we built an{" "}
            <span className="text-gradient-gold">emoji moon phase</span> site
          </>
        }
        description="Emoji Moon Phase exists for one simple reason: the Moon is the most accessible object in the night sky, and the cycle it follows is genuinely interesting — but the explanations online are often either too technical or too thin. We wanted a middle path."
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
        <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold text-foreground">
          The middle path
        </h2>
        <p>
          Most moon phase sites fall into one of two camps. The first camp is
          deeply technical: ephemerides produced by government observatories,
          accurate to the second, written in a notation only other astronomers
          can read. The second camp is glossy and shallow: a big moon image, a
          one-line phase name, and very little else. There is rarely anything
          in between.
        </p>
        <p>
          Emoji Moon Phase sits deliberately in that gap. We use real
          astronomical math — the same J2000 synodic month model used in
          professional ephemerides — but we present it through moon emojis
          because that is the simplest visual language most people already
          understand. The result is a page that shows you exactly what the
          Moon looks like right now, gives you the numbers if you want them,
          and explains the cycle in plain English if you want to go deeper.
        </p>

        <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold text-foreground pt-6">
          Who writes this site
        </h2>
        <p>
          The content is written by Jacob Moses, a content specialist who
          has spent the last several years focused on astronomy and
          night-sky topics. He is not an astronomer, does not hold a degree
          in planetary science, and has not received awards for this work.
          What he brings is consistent practice: every explanation has been
          written, rewritten, and fact-checked against published lunar data
          before it goes live. You can read his full first-person bio at
          the bottom of the{" "}
          <Link
            href="/#author"
            className="text-[oklch(0.82_0.16_75)] hover:underline underline-offset-4"
          >
            homepage
          </Link>
          .
        </p>

        <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold text-foreground pt-6">
          Our editorial values
        </h2>
      </div>

      {/* Values cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="glass-card rounded-2xl p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg glass-card-gold">
                  <Icon className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display-serif)] text-xl font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.82_0.16_75)] text-[oklch(0.14_0.03_285)] px-6 py-3 text-sm font-semibold hover:bg-[oklch(0.88_0.16_75)] transition-colors"
          >
            Contact the author
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
