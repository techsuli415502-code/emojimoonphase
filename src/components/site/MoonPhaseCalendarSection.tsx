"use client";

import { useMemo, useState } from "react";
import { getMoonPhase } from "@/lib/moon/moonPhase";
import { SectionHeading } from "./SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DayCell {
  date: Date;
  day: number;
  inMonth: boolean;
  phase: ReturnType<typeof getMoonPhase>;
}

function buildMonth(year: number, month: number): DayCell[] {
  const first = new Date(Date.UTC(year, month, 1));
  const firstDay = first.getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const prevDays = new Date(Date.UTC(year, month, 0)).getUTCDate();

  const cells: DayCell[] = [];
  // leading days from prev month
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = new Date(Date.UTC(year, month - 1, prevDays - i));
    cells.push({ date: d, day: d.getUTCDate(), inMonth: false, phase: getMoonPhase(d) });
  }
  // current month
  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(Date.UTC(year, month, day));
    cells.push({ date: d, day, inMonth: true, phase: getMoonPhase(d) });
  }
  // trailing
  while (cells.length % 7 !== 0) {
    const d = new Date(cells[cells.length - 1].date.getTime() + 86400000);
    cells.push({ date: d, day: d.getUTCDate(), inMonth: false, phase: getMoonPhase(d) });
  }
  return cells;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function MoonPhaseCalendarSection() {
  const today = new Date();
  const [year, setYear] = useState(today.getUTCFullYear());
  const [month, setMonth] = useState(today.getUTCMonth());

  const cells = useMemo(() => buildMonth(year, month), [year, month]);
  const todayKey = `${today.getUTCFullYear()}-${today.getUTCMonth()}-${today.getUTCDate()}`;

  const goPrev = () => {
    if (month === 0) {
      setYear((y) => y - 1);
      setMonth(11);
    } else {
      setMonth((m) => m - 1);
    }
  };
  const goNext = () => {
    if (month === 11) {
      setYear((y) => y + 1);
      setMonth(0);
    } else {
      setMonth((m) => m + 1);
    }
  };
  const goToday = () => {
    setYear(today.getUTCFullYear());
    setMonth(today.getUTCMonth());
  };

  return (
    <section id="calendar" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Moon Phase Calendar"
          title={
            <>
              Find the moon emoji for{" "}
              <span className="text-gradient-gold">any day</span>
            </>
          }
          description="Browse any month and see the moon emoji for every single day. The exact moon phase is calculated from the date — useful for planning a stargazing trip, scheduling a moonlit walk, or finding the next new moon for dark skies."
        />

        <div className="reveal max-w-5xl mx-auto">
          {/* Calendar header */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <button
              onClick={goPrev}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg glass-card hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-center">
              <p className="font-[family-name:var(--font-display-serif)] text-xl md:text-2xl font-semibold">
                {MONTHS[month]} {year}
              </p>
              <button
                onClick={goToday}
                className="mt-0.5 text-xs text-muted-foreground hover:text-[oklch(0.82_0.16_75)] underline-offset-4 hover:underline"
              >
                Jump to today
              </button>
            </div>
            <button
              onClick={goNext}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg glass-card hover:border-[oklch(0.82_0.16_75/0.32)] transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Weekday header */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="text-center text-[10px] uppercase tracking-widest text-muted-foreground/80 py-2"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {cells.map((cell, idx) => {
              const key = `${cell.date.getUTCFullYear()}-${cell.date.getUTCMonth()}-${cell.date.getUTCDate()}`;
              const isToday = key === todayKey;
              return (
                <div
                  key={idx}
                  className={`relative aspect-square rounded-lg p-1 sm:p-2 flex flex-col items-center justify-center text-center transition-colors ${
                    cell.inMonth
                      ? "glass-card hover:border-[oklch(0.82_0.16_75/0.32)]"
                      : "bg-transparent border border-transparent opacity-40"
                  } ${isToday ? "ring-1 ring-[oklch(0.82_0.16_75/0.55)]" : ""}`}
                  title={`${cell.date.toUTCString().slice(0, 16)} — ${cell.phase.name}`}
                >
                  <span className="text-[10px] font-mono text-muted-foreground/80 leading-none">
                    {cell.day}
                  </span>
                  <span
                    className="text-lg sm:text-2xl mt-0.5 leading-none"
                    role="img"
                    aria-label={`${cell.date.getUTCMonth() + 1}/${cell.date.getUTCDate()} — ${cell.phase.name}`}
                  >
                    {cell.phase.emoji}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-3 justify-center text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[oklch(0.82_0.16_75)]" />
              Highlighted: today&apos;s date
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Hover any cell to see the date and phase name.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
