"use client";

import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Compass, Activity, Moon, Calendar, Users } from "lucide-react";

const MEANINGS = [
  {
    emoji: "🌑",
    title: "New Moon — Beginnings",
    icon: Sparkles,
    description:
      "A fresh lunar cycle. Traditionally associated with intention-setting, quiet reflection, and planting seeds — literally and metaphorically. The dark sky is ideal for stargazing because there is no moonlight to wash out fainter stars and the Milky Way.",
  },
  {
    emoji: "🌒",
    title: "Waxing Crescent — Intention",
    icon: Compass,
    description:
      "Plans take root and momentum builds. The thin sliver of light is often read as a sign to take small, deliberate steps toward a goal you set at the new moon. Visibility improves each evening.",
  },
  {
    emoji: "🌓",
    title: "First Quarter — Action",
    icon: Activity,
    description:
      "A time of decision and visible progress. Half the Moon is lit, half is dark — a natural checkpoint to reassess what is working and what needs adjustment before the full moon.",
  },
  {
    emoji: "🌔",
    title: "Waxing Gibbous — Refinement",
    icon: Calendar,
    description:
      "Almost full, almost ready. A phase for polishing, refining, and tying up loose ends before the energy peaks. The Moon is bright enough to read by and casts clear shadows.",
  },
  {
    emoji: "🌕",
    title: "Full Moon — Culmination",
    icon: Moon,
    description:
      "The Moon is fully lit and visible all night. Culturally tied to celebration, heightened emotion, and completion. Tides are at their most extreme because the Sun and Moon pull together.",
  },
  {
    emoji: "🌖",
    title: "Waning Gibbous — Gratitude",
    icon: Users,
    description:
      "Energy begins to recede. A natural moment to express gratitude for what the cycle produced, share results, and start winding down the projects that peaked at full moon.",
  },
  {
    emoji: "🌗",
    title: "Last Quarter — Release",
    icon: Compass,
    description:
      "Time to let go. The opposite half is lit compared to first quarter — a mirror moment for release, forgiveness, and clearing space for the next cycle to begin at the new moon.",
  },
  {
    emoji: "🌘",
    title: "Waning Crescent — Rest",
    icon: Sparkles,
    description:
      "The cycle is closing. The remaining crescent is a soft reminder to rest, integrate, and prepare internally for what comes next. The Moon rises shortly before dawn.",
  },
];

export function MeaningSection() {
  return (
    <section id="meaning" className="relative py-20 md:py-28 border-t border-[oklch(0.95_0.012_85/0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Moon Phase Meaning"
          title={
            <>
              What each phase has{" "}
              <span className="text-gradient-gold">meant to people</span>
            </>
          }
          description="For thousands of years, farmers, sailors, poets, and astronomers have tracked the Moon's phases and attached meaning to each one. These are not scientific laws — they are cultural patterns that help people sync their lives to a rhythm older than any calendar."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MEANINGS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <Card
                key={m.title}
                className="reveal glass-card border-0 hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-4xl select-none"
                      role="img"
                      aria-label={m.title.split("—")[0].trim()}
                    >
                      {m.emoji}
                    </span>
                    <Icon className="h-4 w-4 text-[oklch(0.82_0.16_75/0.55)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display-serif)] text-lg font-semibold mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
