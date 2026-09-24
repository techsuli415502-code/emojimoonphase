"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { getMoonPhase, getNextFullMoon, getNextNewMoon, type MoonPhaseInfo } from "@/lib/moon/moonPhase";
import { CosmicBackground } from "./CosmicBackground";
import { Check, Copy } from "lucide-react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeCountdown(target: Date, now: Date): Countdown {
  const ms = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

/**
 * Live hero section showing the real-time moon phase as a large emoji,
 * with the phase name, illumination %, current UTC date, and a countdown
 * to the next full moon. Updates every second so the countdown stays live.
 *
 * The moon emoji is click-to-copy: clicking it copies the emoji to the
 * clipboard and shows a confirmation toast.
 *
 * Also embeds a third-party moon-phase widget from moonphaseemoji.com
 * in the right column as a complementary visual reference.
 */
export function LiveMoonHero() {
  const [now, setNow] = useState<Date | null>(null);
  const [phase, setPhase] = useState<MoonPhaseInfo | null>(null);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<{ title: string; description: string; tone: "ok" | "err" } | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(d);
      setPhase(getMoonPhase(d));
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const showToast = useCallback((t: { title: string; description: string; tone: "ok" | "err" }) => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    setToast(t);
    toastTimer.current = window.setTimeout(() => setToast(null), 2400);
  }, []);

  const nextFullMoon = useMemo(() => (now ? getNextFullMoon(now) : null), [now]);
  const nextNewMoon = useMemo(() => (now ? getNextNewMoon(now) : null), [now]);

  const fullCountdown = useMemo(
    () => (nextFullMoon && now ? computeCountdown(nextFullMoon, now) : null),
    [nextFullMoon, now],
  );

  const illuminationPct = phase ? Math.round(phase.illumination * 100) : 0;

  const handleCopyEmoji = useCallback(async () => {
    if (!phase) return;
    let ok = false;

    // Try the modern async Clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(phase.emoji);
        ok = true;
      } catch {
        ok = false;
      }
    }

    // Fallback: hidden-textarea + execCommand("copy")
    if (!ok) {
      try {
        const ta = document.createElement("textarea");
        ta.value = phase.emoji;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "0";
        ta.style.left = "0";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ta.setSelectionRange(0, ta.value.length);
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }

    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
      showToast({
        title: "Moon emoji copied",
        description: `${phase.emoji}  ${phase.name} is on your clipboard — paste it anywhere.`,
        tone: "ok",
      });
    } else {
      showToast({
        title: "Couldn't copy automatically",
        description: "Select the moon emoji and press Ctrl/Cmd+C to copy manually.",
        tone: "err",
      });
    }
  }, [phase, showToast]);

  return (
    <section
      id="current-phase"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Cosmic backdrop for the hero — absolute so it never takes vertical space */}
      <CosmicBackground />
      {/* Orbit decorations around the moon */}
      <div className="absolute inset-x-0 top-24 md:top-32 flex justify-center pointer-events-none" aria-hidden="true">
        <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]">
          <div className="orbit-ring inset-0 spin-slow" />
          <div className="orbit-ring inset-[12%] spin-slow" style={{ animationDirection: "reverse", animationDuration: "85s" }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: live moon emoji (click to copy) + embed widget */}
          <div className="flex flex-col items-center text-center order-1 lg:order-1 gap-6">
            <div className="relative">
              {/* halo */}
              <div
                className="absolute inset-0 -m-12 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.82 0.16 75 / 0.30), transparent 65%)",
                  filter: "blur(20px)",
                }}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={handleCopyEmoji}
                aria-label={`Copy ${phase?.name ?? "moon"} emoji to clipboard`}
                title="Click to copy emoji"
                className="group relative inline-flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.82_0.16_75)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <span
                  className="moon-aura relative font-[family-name:var(--font-display-serif)] leading-none select-none cursor-pointer transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
                  style={{ fontSize: "clamp(8rem, 22vw, 16rem)" }}
                  role="img"
                  aria-label={`Current moon phase: ${phase?.name ?? "loading"}`}
                >
                  {phase?.emoji ?? "🌕"}
                </span>
                {/* Copy indicator */}
                <span
                  className={`pointer-events-none absolute bottom-2 right-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.14_0.03_285/0.85)] border border-[oklch(0.82_0.16_75/0.4)] backdrop-blur transition-all duration-300 ${
                    copied ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-70 group-hover:scale-100"
                  }`}
                  aria-hidden="true"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                  ) : (
                    <Copy className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                  )}
                </span>
              </button>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.82_0.16_75/0.32)] bg-[oklch(0.14_0.03_285/0.55)] px-4 py-1.5 text-xs font-medium text-[oklch(0.82_0.16_75)] backdrop-blur">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.16_75)] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.16_75)]" />
              </span>
              Live · Updated in real time
            </div>

            {/* Embed widget from moonphaseemoji.com */}
            <div className="reveal is-visible">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mb-2">
                Live moon phase widget
              </p>
              <iframe
                src="https://moonphaseemoji.com/embed?bg=020208&accent=fbbf24&label=true&size=large&lang=en"
                width={280}
                height={240}
                loading="lazy"
                title="Today's moon phase"
                style={{ border: 0, borderRadius: 12, overflow: "hidden" }}
                className="shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          {/* Right: text + stats */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <p className="text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.16_75/0.85)] mb-4">
              Today&apos;s Moon · {now ? now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : ""}
            </p>
            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-display-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight glow-soft"
            >
              <span className="text-gradient-gold">Emoji Moon Phase</span>{" "}
              <span className="block sm:inline">for today</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed text-muted-foreground">
              The Moon is currently in the{" "}
              <strong className="font-semibold text-foreground">{phase?.name ?? "Full Moon"}</strong>{" "}
              phase. Click the moon emoji to copy it to your clipboard, or read on for
              the live countdown, illumination %, and the full lunar cycle explained
              in plain English.
            </p>

            {/* Stat tiles */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              <StatTile
                label="Phase name"
                value={phase?.name ?? "—"}
              />
              <StatTile
                label="Illumination"
                value={`${illuminationPct}%`}
              />
              <StatTile
                label="Trend"
                value={phase?.isWaxing ? "Waxing ↑" : "Waning ↓"}
              />
            </div>

            {/* Countdown */}
            {fullCountdown && (
              <div className="mt-8 max-w-xl mx-auto lg:mx-0 rounded-2xl glass-card-gold p-5">
                <p className="text-xs uppercase tracking-widest text-[oklch(0.82_0.16_75)] mb-3">
                  Countdown to next Full Moon
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4" aria-live="polite">
                  <CountdownTile value={fullCountdown.days} label="Days" />
                  <CountdownTile value={pad(fullCountdown.hours)} label="Hrs" />
                  <CountdownTile value={pad(fullCountdown.minutes)} label="Min" />
                  <CountdownTile value={pad(fullCountdown.seconds)} label="Sec" />
                </div>
                {nextFullMoon && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    Estimated peak:{" "}
                    {nextFullMoon.toLocaleString("en-US", {
                      dateStyle: "long",
                      timeStyle: "short",
                      timeZone: "UTC",
                    })}{" "}
                    UTC
                  </p>
                )}
              </div>
            )}

            {nextNewMoon && (
              <p className="mt-4 text-xs text-muted-foreground">
                Next new moon in{" "}
                {Math.max(0, Math.ceil((nextNewMoon.getTime() - (now?.getTime() ?? 0)) / 86400000))}{" "}
                days ·{" "}
                {nextNewMoon.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            <p className="mt-4 text-xs text-muted-foreground/70">
              Tip: click the big moon emoji above to copy it.
            </p>
          </div>
        </div>
      </div>

      {/* Inline toast notification (no global provider required) */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-sm w-[calc(100vw-2rem)] pointer-events-none"
        >
          <div
            className={`pointer-events-auto flex items-start gap-3 rounded-xl px-4 py-3 backdrop-blur-md border shadow-2xl ${
              toast.tone === "ok"
                ? "bg-[oklch(0.14_0.03_285/0.92)] border-[oklch(0.82_0.16_75/0.45)]"
                : "bg-[oklch(0.20_0.05_25/0.92)] border-[oklch(0.65_0.22_20/0.55)]"
            }`}
          >
            <span
              className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                toast.tone === "ok"
                  ? "bg-[oklch(0.82_0.16_75/0.20)] text-[oklch(0.82_0.16_75)]"
                  : "bg-[oklch(0.65_0.22_20/0.20)] text-[oklch(0.80_0.20_25)]"
              }`}
            >
              {toast.tone === "ok" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{toast.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{toast.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl glass-card p-3 text-center">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">{label}</p>
      <p className="mt-1 text-sm sm:text-base font-semibold text-foreground">{value}</p>
    </div>
  );
}

function CountdownTile({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-[family-name:var(--font-geist-mono)] text-2xl sm:text-3xl font-semibold tabular-nums text-gradient-gold">
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}
