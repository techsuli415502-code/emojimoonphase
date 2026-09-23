"use client";

import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How is the emoji moon phase calculated on this page?",
    a: "We use the well-established synodic-month model. Starting from a known reference new moon in the year 2000, we count the number of days that have passed and divide by the average synodic month length of 29.5306 days. The fractional remainder tells us exactly where the Moon is in its current cycle, and we map that to one of the eight named phases plus the matching moon emoji. The result updates every second so the countdown stays live.",
  },
  {
    q: "Why are there eight moon phases instead of just four?",
    a: "The four principal phases — new moon, first quarter, full moon, and last quarter — mark the moments when the Moon is at 0°, 90°, 180°, and 270° angular distance from the Sun in our sky. The four intermediate phases (waxing crescent, waxing gibbous, waning gibbous, and waning crescent) describe the appearance of the Moon between those exact moments. Together they describe the full continuous cycle, which is why we show all eight on this page.",
  },
  {
    q: "Is the emoji an accurate picture of what I'll see in the sky?",
    a: "For casual observation, yes — the emoji captures the right illuminated fraction for that point in the cycle. The real Moon, however, also shows surface detail (maria, ray systems, crater shadows) and appears tilted slightly differently depending on your latitude. Emojis are a symbolic representation, useful for understanding the cycle at a glance.",
  },
  {
    q: "Why do moonrise and moonset times change every day?",
    a: "Because the Moon is constantly moving along its orbit around Earth (about 13° per day eastward), it rises about 50 minutes later each day on average. This is why a full moonrise can happen right at sunset, while a few days later you'll wait until late evening for the Moon to clear the horizon.",
  },
  {
    q: "What is the difference between a synodic month and a sidereal month?",
    a: "A sidereal month (about 27.32 days) is how long the Moon takes to orbit Earth once relative to the distant stars. A synodic month (about 29.53 days) is how long it takes to go from one new moon to the next new moon — and it is longer because Earth itself has moved along its orbit around the Sun during that time. Moon phases follow the synodic month, which is what this page uses.",
  },
  {
    q: "Does the Moon produce its own light?",
    a: "No. The Moon produces no light of its own — every bit of moonlight you see is reflected sunlight. When we say the Moon is \"full,\" we simply mean the entire sunlit half happens to be facing Earth at that moment.",
  },
  {
    q: "Why is the dark side of the Moon not actually dark?",
    a: "The far side of the Moon — the side we never see from Earth — receives just as much sunlight as the near side over the course of a lunar day. The phrase \"dark side\" is a popular misnomer; the correct term is \"far side\" because it is permanently turned away from Earth, not from the Sun.",
  },
  {
    q: "Can the moon emoji be used for astronomy or science?",
    a: "Yes, with caveats. The moon emojis (🌑🌒🌓🌔🌕🌖🌗🌘) are useful for representing phases in calendars, classroom materials, social media, and quick illustrations. They are not a substitute for an actual ephemeris if you need positional accuracy for observation, photography, or research, but they work very well for human-readable, semantic descriptions of the current phase.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked{" "}
              <span className="text-gradient-gold">moon questions</span>
            </>
          }
          description="Straight answers to the questions people ask most often about moon phases, moon emojis, and how the calculator on this page works. If your question is not here, feel free to reach out through the contact page."
        />

        <div className="reveal max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="glass-card border border-[oklch(0.95_0.012_85/0.08)] rounded-xl px-5 mb-3"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-[family-name:var(--font-display-serif)] text-base md:text-lg font-medium pr-3">
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base leading-relaxed text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
