"use client";

import { ALL_PHASES } from "@/lib/moon/moonPhase";
import { SectionHeading } from "./SectionHeading";

export function LunarCycleSection() {
  // The cycle as a continuous ring: waxing phases followed by waning
  const ordered = [
    ALL_PHASES[0],
    ALL_PHASES[1],
    ALL_PHASES[2],
    ALL_PHASES[3],
    ALL_PHASES[4],
    ALL_PHASES[5],
    ALL_PHASES[6],
    ALL_PHASES[7],
  ];

  return (
    <section id="lunar-cycle" className="relative py-20 md:py-28 border-y border-[oklch(0.95_0.012_85/0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Lunar Cycle"
          title={
            <>
              One month in the life of{" "}
              <span className="text-gradient-gold">the Moon</span>
            </>
          }
          description="The Moon completes a full orbit of Earth roughly every 27.3 days, but because Earth is also moving around the Sun, it takes the Moon about 29.5 days to cycle through all eight phases — the synodic month."
        />

        {/* Horizontal cycle visual */}
        <div className="reveal relative mt-10 mb-14">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.16_75/0.35)] to-transparent" />
          <div className="relative grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-2">
            {ordered.map((phase, idx) => (
              <div
                key={phase.key + idx}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 -m-2 rounded-full"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "radial-gradient(circle, oklch(0.82_0.16_75/0.20), transparent 70%)"
                          : "radial-gradient(circle, oklch(0.55_0.20_320/0.20), transparent 70%)",
                    }}
                  />
                  <span
                    className="relative inline-block text-3xl md:text-4xl"
                    role="img"
                    aria-label={phase.name}
                  >
                    {phase.emoji}
                  </span>
                </div>
                <span className="text-[10px] md:text-xs font-medium leading-tight text-foreground/80">
                  {phase.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CycleStat
            value="29.53"
            unit="days"
            label="Synodic month"
            description="The time between two identical phases — e.g. full moon to full moon. This is the cycle that drives the moon emoji you see on this page."
          />
          <CycleStat
            value="27.32"
            unit="days"
            label="Sidereal month"
            description="The time it takes the Moon to complete one orbit of Earth relative to the distant stars. Shorter than the synodic month because Earth itself moves along its orbit."
          />
          <CycleStat
            value="50"
            unit="min/day"
            label="Moonrise shift"
            description="On average, the Moon rises about 50 minutes later each day, which is why each phase appears at a slightly different time of night."
          />
        </div>
      </div>
    </section>
  );
}

function CycleStat({
  value,
  unit,
  label,
  description,
}: {
  value: string;
  unit: string;
  label: string;
  description: string;
}) {
  return (
    <div className="reveal glass-card rounded-2xl p-6">
      <p className="text-xs uppercase tracking-widest text-[oklch(0.82_0.16_75/0.85)] mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="font-[family-name:var(--font-display-serif)] text-4xl md:text-5xl font-semibold text-gradient-gold">
          {value}
        </span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
