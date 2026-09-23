"use client";

import { ALL_PHASES } from "@/lib/moon/moonPhase";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export function EightPhasesSection() {
  return (
    <section id="phases" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The 8 Moon Phases"
          title={
            <>
              Every face the{" "}
              <span className="text-gradient-gold">Moon shows us</span>
            </>
          }
          description="As the Moon orbits Earth, the angle between the Sun, Earth, and Moon changes — and so does the part of the Moon we see illuminated. Over a 29.5-day cycle, the Moon passes through eight named phases, each with its own emoji."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ALL_PHASES.map((phase, idx) => (
            <Card
              key={phase.key}
              className="group reveal glass-card border-0 hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors overflow-hidden"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <span
                    className="text-5xl md:text-6xl select-none transition-transform group-hover:scale-110 origin-bottom"
                    role="img"
                    aria-label={phase.name}
                  >
                    {phase.emoji}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70 mt-2">
                    Phase {idx + 1} / 8
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display-serif)] text-xl font-semibold mb-2 text-foreground">
                  {phase.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[oklch(0.95_0.012_85/0.08)] grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-muted-foreground/70">Illumination</p>
                    <p className="font-mono font-medium text-foreground">
                      {Math.round(phase.illumination * 100)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/70">Age</p>
                    <p className="font-mono font-medium text-foreground">
                      {phase.daysSinceNew.toFixed(1)} d
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
