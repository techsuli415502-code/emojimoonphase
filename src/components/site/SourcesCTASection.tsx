import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SOURCES_PREVIEW = [
  {
    name: "Moon Phase Emoji",
    url: "https://www.moonphaseemoji.com/",
    description:
      "A companion reference for daily moon phase emoji and quick visual reference.",
  },
  {
    name: "NASA — Moon Phases",
    url: "https://science.nasa.gov/moon/moon-phases/",
    description:
      "Official NASA explainer of the eight lunar phases, with diagrams and educational resources.",
  },
  {
    name: "timeanddate.com — Moon Phases",
    url: "https://www.timeanddate.com/moon/phases/",
    description:
      "Long-standing reference for moonrise, moonset, and phase times for any location worldwide.",
  },
];

export function SourcesCTASection() {
  return (
    <section id="sources-cta" className="relative py-20 md:py-28 border-t border-[oklch(0.95_0.012_85/0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sources & References"
          title={
            <>
              Where our moon data{" "}
              <span className="text-gradient-gold">comes from</span>
            </>
          }
          description="Every page on this site is grounded in published lunar data. These three sources are the primary references we cite throughout, and you can review them directly for deeper technical detail."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {SOURCES_PREVIEW.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-6 hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-[family-name:var(--font-display-serif)] text-lg font-semibold">
                  {s.name}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-[oklch(0.82_0.16_75)] transition-colors shrink-0" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <p className="mt-3 text-xs text-muted-foreground/70 truncate">
                {s.url.replace(/^https?:\/\//, "")}
              </p>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <Link
            href="/sources"
            className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.82_0.16_75)] text-[oklch(0.14_0.03_285)] px-6 py-3 text-sm font-semibold hover:bg-[oklch(0.88_0.16_75)] transition-colors"
          >
            See the full sources page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
