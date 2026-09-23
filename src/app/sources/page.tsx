import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { SourceList, PRIMARY_SOURCES } from "@/components/site/SourceList";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Sources — Where Our Moon Phase Data Comes From",
  description:
    "The full list of published references behind Emoji Moon Phase, including NASA Moon Phases, timeanddate.com, and Moon Phase Emoji.",
  alternates: { canonical: "/sources" },
  openGraph: {
    title: "Sources — Emoji Moon Phase",
    description:
      "See the published astronomical references behind every calculation and explanation on Emoji Moon Phase.",
  },
};

export default function SourcesPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Sources"
        title={
          <>
            Where our data{" "}
            <span className="text-gradient-gold">comes from</span>
          </>
        }
        description="Every calculation and explanation on Emoji Moon Phase is grounded in published astronomical references. Below are the primary sources we cite throughout the site, with notes on what each is used for."
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Methodology */}
        <section className="glass-card rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass-card-gold">
              <BookOpen className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
            </span>
            <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold">
              Our methodology
            </h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            The live moon phase calculator on this site uses the J2000
            reference new moon (Julian Day 2451550.1, corresponding to
            2000-01-06 18:14 UTC) and the IAU mean synodic month length of
            29.5306 days. For each requested date, we compute the Julian Day,
            subtract the reference, take the remainder modulo the synodic
            month, and map the resulting age fraction to one of the eight
            named phases plus the matching Unicode moon emoji. This approach
            is standard for casual educational use. For higher-precision
            work, please consult the references below.
          </p>
        </section>

        {/* Sources list */}
        <SourceList />

        {/* Citation note */}
        <section className="mt-12 glass-card rounded-2xl p-6 md:p-8">
          <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold mb-3">
            How we cite
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Inline citations appear as superscript markers next to specific
            facts throughout the content. Where a single fact draws on
            multiple sources, we cite the most authoritative one for that
            specific claim. Where our content is purely explanatory (such
            as the &quot;how moon phases work&quot; section) and draws on
            general knowledge found in any astronomy textbook, we may not
            attach a specific citation — the source list above stands as the
            general reference set.
          </p>
        </section>

        {/* Inline listing */}
        <section className="mt-8">
          <h2 className="font-[family-name:var(--font-display-serif)] text-xl md:text-2xl font-semibold mb-3">
            Quick reference list
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-muted-foreground">
            {PRIMARY_SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.82_0.16_75)] hover:underline underline-offset-4 break-all"
                >
                  {s.name}
                </a>{" "}
                — {s.url}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
