import { ExternalLink } from "lucide-react";

export const PRIMARY_SOURCES = [
  {
    name: "Moon Phase Emoji",
    url: "https://www.moonphaseemoji.com/",
    description:
      "Companion reference for daily moon phase emoji and quick visual reference. Useful for cross-checking the emoji mapping used on this site.",
    relevance:
      "Reference for emoji-to-phase mapping consistency.",
  },
  {
    name: "NASA — Moon Phases",
    url: "https://science.nasa.gov/moon/moon-phases/",
    description:
      "Official NASA explainer of the eight lunar phases, with diagrams, photographs, and educational resources suitable for general audiences.",
    relevance:
      "Primary reference for phase definitions and educational diagrams.",
  },
  {
    name: "timeanddate.com — Moon Phases",
    url: "https://www.timeanddate.com/moon/phases/",
    description:
      "Long-standing astronomical reference providing moonrise, moonset, and phase times for any location worldwide, plus historical and future dates.",
    relevance:
      "Cross-check for phase timing and global moonrise patterns.",
  },
] as const;

export function SourceList() {
  return (
    <ul className="space-y-4">
      {PRIMARY_SOURCES.map((s, idx) => (
        <li key={s.url} className="glass-card rounded-2xl p-5 md:p-6">
          <div className="flex items-start gap-4">
            <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full glass-card-gold font-mono text-sm font-semibold text-[oklch(0.82_0.16_75)]">
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-[family-name:var(--font-display-serif)] text-lg md:text-xl font-semibold">
                  {s.name}
                </h3>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[oklch(0.82_0.16_75)] hover:underline underline-offset-4 truncate"
                >
                  {s.url.replace(/^https?:\/\//, "")}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/70">
                <span className="font-medium text-foreground/80">Used for:</span>{" "}
                {s.relevance}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
