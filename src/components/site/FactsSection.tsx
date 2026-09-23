"use client";

import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Compass, Ruler, Mountain, Anchor, Feather, Sun, Thermometer } from "lucide-react";

const FACTS = [
  {
    icon: Ruler,
    title: "238,855 miles away",
    body: "On average the Moon sits 384,400 km (238,855 mi) from Earth — close enough that light from the Moon takes only ~1.28 seconds to reach your eyes.",
  },
  {
    icon: Mountain,
    title: "Tallest mountain: Mons Huygens",
    body: "At roughly 5,500 m (18,000 ft), Mons Huygens in the Apennine range is the tallest mountain on the Moon — about half the height of Everest but standing in near-vacuum.",
  },
  {
    icon: Anchor,
    title: "Drifting away at 3.8 cm/year",
    body: "Tidal interactions are slowly transferring Earth's rotational energy to the Moon's orbit. The Moon is moving away from Earth by about 3.8 cm (1.5 in) per year.",
  },
  {
    icon: Clock,
    title: "Same face, always",
    body: "The Moon is tidally locked to Earth, so it rotates once per orbit — meaning we always see the same near side, while the far side was unseen until 1959.",
  },
  {
    icon: Compass,
    title: "No dark side — only far side",
    body: "The phrase \"dark side of the Moon\" is misleading. The far side gets just as much sunlight as the near side; it was simply hidden from human view until space probes mapped it.",
  },
  {
    icon: Sun,
    title: "Day length: 29.5 Earth days",
    body: "One lunar day — sunrise to next sunrise at any given point on the Moon — lasts about 29.5 Earth days, matching the synodic month exactly.",
  },
  {
    icon: Feather,
    title: "12 people have walked on it",
    body: "Between 1969 and 1972, twelve Apollo astronauts walked on the Moon. No human has set foot there since the Apollo 17 mission in December 1972.",
  },
  {
    icon: Thermometer,
    title: "Surface swings of 270°C",
    body: "With no atmosphere to moderate temperature, the lunar surface swings from about +120°C in direct sunlight to -150°C in shadow within a single day-night cycle.",
  },
];

export function FactsSection() {
  return (
    <section id="facts" className="relative py-20 md:py-28 border-t border-[oklch(0.95_0.012_85/0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interesting Moon Facts"
          title={
            <>
              Eight things you may not{" "}
              <span className="text-gradient-gold">know about the Moon</span>
            </>
          }
          description="The Moon is the closest celestial body to Earth and the only one humans have ever visited. These facts round out the picture and give context to the phases you can see tonight."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FACTS.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <Card
                key={fact.title}
                className="reveal glass-card border-0 hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <CardContent className="p-5">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg glass-card-gold">
                    <Icon className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display-serif)] text-base font-semibold mb-1.5">
                    {fact.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {fact.body}
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
