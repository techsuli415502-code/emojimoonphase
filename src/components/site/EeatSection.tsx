"use client";

import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export function EeatSection() {
  return (
    <section id="author" className="relative py-20 md:py-28 border-t border-[oklch(0.95_0.012_85/0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Author"
          title={
            <>
              Who writes{" "}
              <span className="text-gradient-gold">Emoji Moon Phase</span>
            </>
          }
          description="Transparency matters. Below is a first-person introduction from the author behind the content on this site, written in line with Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidance."
        />

        <div className="reveal max-w-4xl mx-auto">
          <div className="relative glass-card rounded-2xl p-6 md:p-10">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-[oklch(0.82_0.16_75/0.18)]" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden glass-card-gold flex items-center justify-center">
                  <span
                    className="text-5xl md:text-6xl"
                    role="img"
                    aria-label="Author avatar — waxing moon"
                  >
                    🌔
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-[oklch(0.82_0.16_75/0.85)]">
                  Content Specialist
                </p>
                <h3 className="mt-1 font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold">
                  Jacob Moses
                </h3>

                <div className="mt-5 space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Hi, I&apos;m Jacob Moses. I write and edit the content you read
                    here on Emoji Moon Phase. My focus as a content specialist is
                    breaking down astronomy and night-sky topics so that curious
                    readers can understand them without needing a telescope, a
                    maths background, or a degree in astrophysics. If a sentence
                    on this site is unclear to a non-astronomer, it&apos;s a bug
                    I want to fix.
                  </p>
                  <p>
                    My approach is simple: explain things the way I&apos;d want
                    them explained to me the first time I looked up and wondered
                    what that bright thing in the sky actually was. I read
                    primary sources from NASA, the US Naval Observatory, and
                    other long-standing astronomical references, then write the
                    explanations in plain English. I also build the small
                    tools on this page — like the live moon phase calculator —
                    so you can see the actual phase for today, not just read a
                    description of it.
                  </p>
                  <p>
                    I want to be straightforward about what I am and am not.
                    I am not an astronomer. I do not hold a degree in
                    planetary science or physics. I have not received awards
                    or formal credentials for this work, and I do not want to
                    imply otherwise. What I do bring is consistent practice:
                    every explanation on this site has been written, rewritten,
                    and fact-checked against published lunar data before it
                    goes live. When I&apos;m uncertain about something, I say so
                    directly in the article or leave the question for a future
                    update rather than guessing.
                  </p>
                  <p>
                    If you spot an error, or you have a question about the Moon
                    that you&apos;d like to see covered here, please use the
                    contact page. Reader feedback keeps the calculator and the
    explanations accurate, and I read every message.
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-[oklch(0.95_0.012_85/0.08)] grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  <Pill label="Focus" value="Moon & astronomy" />
                  <Pill label="Based on" value="NASA & USNO data" />
                  <Pill label="Updated" value="Continuously" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[oklch(0.10_0.025_285/0.55)] border border-[oklch(0.95_0.012_85/0.06)] p-3">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">{label}</p>
      <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
    </div>
  );
}
