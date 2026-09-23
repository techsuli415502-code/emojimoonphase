"use client";

import { SectionHeading } from "./SectionHeading";
import { Sun, Globe, Moon, Eye } from "lucide-react";

const STEPS = [
  {
    icon: Sun,
    title: "The Sun lights half the Moon",
    description:
      "Sunlight is the only source of moonlight. At any moment, exactly one half of the Moon is lit by the Sun — exactly like Earth's day side. The Moon itself produces no light; we only ever see reflected sunlight.",
  },
  {
    icon: Globe,
    title: "Earth, Moon, and Sun's angle changes",
    description:
      "As the Moon orbits Earth over ~29.5 days, the angle between the Sun, Earth, and Moon shifts. From our viewpoint on Earth, we see different fractions of the Moon's lit half — that is what creates the phases.",
  },
  {
    icon: Eye,
    title: "We see the lit portion facing us",
    description:
      "If the Moon is roughly between us and the Sun, the lit side faces away and we see a new moon. If we are between the Sun and Moon (full moon), the lit side faces us directly and the entire disk appears bright.",
  },
  {
    icon: Moon,
    title: "The cycle repeats every 29.53 days",
    description:
      "From new moon to next new moon takes one synodic month — about 29.5306 days. This is the cycle the emoji moon phase calculator on this page uses to determine today's moon emoji in real time.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How Moon Phases Work"
          title={
            <>
              The simple physics behind the{" "}
              <span className="text-gradient-gold">lunar cycle</span>
            </>
          }
          description="Moon phases are not caused by Earth's shadow falling on the Moon (that is a lunar eclipse, which is rare). They are caused simply by the changing angle between the Sun, Earth, and Moon as the Moon orbits us each month."
        />

        <div className="relative">
          {/* connector line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[oklch(0.82_0.16_75/0.30)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`reveal relative flex gap-4 md:gap-6 ${
                    idx % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="relative z-10 shrink-0">
                    <div className="h-12 w-12 rounded-full glass-card-gold flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[oklch(0.82_0.16_75)]" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-[10px] font-mono font-semibold text-[oklch(0.82_0.16_75)]">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 glass-card rounded-2xl p-5">
                    <h3 className="font-[family-name:var(--font-display-serif)] text-lg font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual explainer */}
        <div className="reveal mt-12 md:mt-16 max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8">
          <h3 className="font-[family-name:var(--font-display-serif)] text-xl font-semibold mb-4 text-center">
            The geometry at a glance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <GeometryCard emoji="🌑" name="New Moon" detail="Moon between Earth & Sun" />
            <GeometryCard emoji="🌓" name="Quarter" detail="Moon at 90° from Sun" />
            <GeometryCard emoji="🌕" name="Full Moon" detail="Earth between Sun & Moon" />
          </div>
          <p className="mt-5 text-xs text-muted-foreground text-center leading-relaxed">
            Note: lunar and solar eclipses only happen when the three bodies align
            nearly perfectly in 3D — which is why most full and new moons are not
            eclipses.
          </p>
        </div>
      </div>
    </section>
  );
}

function GeometryCard({ emoji, name, detail }: { emoji: string; name: string; detail: string }) {
  return (
    <div className="rounded-xl bg-[oklch(0.10_0.025_285/0.55)] border border-[oklch(0.95_0.012_85/0.06)] p-4">
      <span className="text-3xl block" role="img" aria-label={name}>{emoji}</span>
      <p className="mt-2 text-sm font-medium text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
    </div>
  );
}
