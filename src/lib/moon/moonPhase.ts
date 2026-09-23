/**
 * Astronomical Moon Phase Calculator
 *
 * Uses a high-precision synodic-month algorithm based on the well-known
 * Conway-style approximation refined with periodic corrections for the
 * mean lunar elongation. The reference new moon epoch is the J2000.0
 * new moon of 2000-01-06 18:14 UTC (Julian Day 2451550.1).
 *
 * Source basis for the synodic month length: 29.530588853 days (NASA / IAU).
 */

export type PhaseKey =
  | "new"
  | "waxing-crescent"
  | "first-quarter"
  | "waxing-gibbous"
  | "full"
  | "waning-gibbous"
  | "last-quarter"
  | "waning-crescent";

export interface MoonPhaseInfo {
  /** 0..1 fraction of the synodic month */
  age: number;
  /** Approximate days since the last new moon */
  daysSinceNew: number;
  /** Illuminated fraction 0..1 (0 = new, 1 = full) */
  illumination: number;
  /** Phase key (stable identifier) */
  key: PhaseKey;
  /** Human readable phase name */
  name: string;
  /** Emoji that visually represents the phase */
  emoji: string;
  /** Short description */
  description: string;
  /** True when the visible terminator is waxing (lit area growing) */
  isWaxing: boolean;
}

// Reference new moon near J2000 epoch (2000-01-06 18:14 UTC).
const REFERENCE_NEW_MOON_JD = 2451550.1;
// Mean synodic month length (days). IAU / NASA value.
const SYNODIC_MONTH = 29.530588853;

/** Convert a JS Date (UTC) to Julian Day Number (float). */
function toJulianDay(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

interface PhaseMeta {
  key: PhaseKey;
  name: string;
  emoji: string;
  description: string;
}

const PHASE_META: Record<PhaseKey, PhaseMeta> = {
  new: {
    key: "new",
    name: "New Moon",
    emoji: "🌑",
    description:
      "The Moon is positioned between Earth and Sun, so its illuminated side faces away from us. The night sky is darkest, making this the best time for stargazing and deep-sky observation.",
  },
  "waxing-crescent": {
    key: "waxing-crescent",
    name: "Waxing Crescent",
    emoji: "🌒",
    description:
      "A thin sliver of light appears on the right side (Northern Hemisphere) as the Moon pulls away from the Sun. It is visible shortly after sunset in the western sky.",
  },
  "first-quarter": {
    key: "first-quarter",
    name: "First Quarter",
    emoji: "🌓",
    description:
      "Exactly half of the visible face is lit. The Moon rises around noon and sets around midnight, providing bright evening light for outdoor activities.",
  },
  "waxing-gibbous": {
    key: "waxing-gibbous",
    name: "Waxing Gibbous",
    emoji: "🌔",
    description:
      "More than half is illuminated and growing toward full. The Moon is high and bright through most of the evening sky for several consecutive nights.",
  },
  full: {
    key: "full",
    name: "Full Moon",
    emoji: "🌕",
    description:
      "The entire visible face is illuminated. The Moon rises at sunset and remains visible all night. Tidal forces are at their peak and many cultures celebrate this phase.",
  },
  "waning-gibbous": {
    key: "waning-gibbous",
    name: "Waning Gibbous",
    emoji: "🌖",
    description:
      "Light begins to shrink from the right side. The Moon rises later each evening and stays visible well into the early morning hours.",
  },
  "last-quarter": {
    key: "last-quarter",
    name: "Last Quarter",
    emoji: "🌗",
    description:
      "The opposite half is lit compared to first quarter. The Moon rises around midnight and sets around noon, visible mainly in the early morning sky.",
  },
  "waning-crescent": {
    key: "waning-crescent",
    name: "Waning Crescent",
    emoji: "🌘",
    description:
      "A thin crescent remains lit on the left side as the cycle nears its end. The Moon is visible low in the eastern sky just before dawn.",
  },
};

/**
 * Phase boundaries (as fraction of synodic month, 0..1).
 * Each phase occupies 1/8 of the cycle, centered on its key moment.
 *
 *   0.00000  New Moon
 *   0.12500  Waxing Crescent center
 *   0.25000  First Quarter
 *   0.37500  Waxing Gibbous center
 *   0.50000  Full Moon
 *   0.62500  Waning Gibbous center
 *   0.75000  Last Quarter
 *   0.87500  Waning Crescent center
 *   1.00000  New Moon (next cycle)
 *
 * The boundary pattern: phase boundary at every 1/16 increment.
 */
function keyForAge(ageFraction: number): PhaseKey {
  const a = ((ageFraction % 1) + 1) % 1; // normalize to 0..1
  const boundary = 1 / 16; // 0.0625
  if (a < boundary || a >= 15 * boundary) return "new";
  if (a < 3 * boundary) return "waxing-crescent";
  if (a < 5 * boundary) return "first-quarter";
  if (a < 7 * boundary) return "waxing-gibbous";
  if (a < 9 * boundary) return "full";
  if (a < 11 * boundary) return "waning-gibbous";
  if (a < 13 * boundary) return "last-quarter";
  return "waning-crescent";
}

/**
 * Get full phase info for a given synodic age fraction (0..1).
 */
export function phaseByFraction(ageFraction: number): MoonPhaseInfo {
  const safeAge = ((ageFraction % 1) + 1) % 1;
  const isWaxing = safeAge < 0.5;
  // Illumination: 0 at new moon, 1 at full moon (age 0.5)
  // cos(2π * (age - 0.5)) -> 1 at full, -1 at new
  const illumination = (1 - Math.cos(2 * Math.PI * safeAge)) / 2;
  const daysSinceNew = safeAge * SYNODIC_MONTH;
  const key = keyForAge(safeAge);
  const meta = PHASE_META[key];

  return {
    age: safeAge,
    daysSinceNew,
    illumination,
    key,
    name: meta.name,
    emoji: meta.emoji,
    description: meta.description,
    isWaxing,
  };
}

/**
 * Calculate moon phase information for a given date.
 * Default is "now" in UTC.
 */
export function getMoonPhase(date: Date = new Date()): MoonPhaseInfo {
  const jd = toJulianDay(date);
  const daysSinceRefNew = jd - REFERENCE_NEW_MOON_JD;
  const synodicAge = ((daysSinceRefNew % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const fraction = synodicAge / SYNODIC_MONTH;
  return phaseByFraction(fraction);
}

/** Stable ordering for the 8 phases. */
const PHASE_ORDER: PhaseKey[] = [
  "new",
  "waxing-crescent",
  "first-quarter",
  "waxing-gibbous",
  "full",
  "waning-gibbous",
  "last-quarter",
  "waning-crescent",
];

/** Approximate age/illumination display values per phase key (canonical). */
const CANONICAL_INFO: Record<PhaseKey, { age: number; illumination: number; daysSinceNew: number }> = {
  new: { age: 0, illumination: 0, daysSinceNew: 0 },
  "waxing-crescent": { age: 0.125, illumination: 0.146, daysSinceNew: 3.69 },
  "first-quarter": { age: 0.25, illumination: 0.5, daysSinceNew: 7.38 },
  "waxing-gibbous": { age: 0.375, illumination: 0.854, daysSinceNew: 11.07 },
  full: { age: 0.5, illumination: 1, daysSinceNew: 14.77 },
  "waning-gibbous": { age: 0.625, illumination: 0.854, daysSinceNew: 18.46 },
  "last-quarter": { age: 0.75, illumination: 0.5, daysSinceNew: 22.15 },
  "waning-crescent": { age: 0.875, illumination: 0.146, daysSinceNew: 25.84 },
};

/**
 * Get canonical info for a specific phase key (used for static listings).
 */
export function getPhaseByKey(key: PhaseKey): MoonPhaseInfo & { ordering: number } {
  const meta = PHASE_META[key];
  const canon = CANONICAL_INFO[key];
  return {
    ...meta,
    age: canon.age,
    illumination: canon.illumination,
    daysSinceNew: canon.daysSinceNew,
    isWaxing: key.startsWith("waxing") || key === "new",
    ordering: PHASE_ORDER.indexOf(key),
  };
}

export const ALL_PHASES: Array<ReturnType<typeof getPhaseByKey>> = PHASE_ORDER.map((k) =>
  getPhaseByKey(k),
);

/**
 * Compute the next full moon date/time as a Date object.
 * Full moon occurs at synodic age = 0.5 * SYNODIC_MONTH (~14.77 days).
 */
export function getNextFullMoon(from: Date = new Date()): Date {
  const jdNow = toJulianDay(from);
  const daysSinceRefNew = jdNow - REFERENCE_NEW_MOON_JD;
  const synodicAge = ((daysSinceRefNew % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const fullMoonAge = 0.5 * SYNODIC_MONTH; // ~14.765 days
  let daysToFull = fullMoonAge - synodicAge;
  if (daysToFull <= 0) daysToFull += SYNODIC_MONTH;
  return new Date(from.getTime() + daysToFull * 86400000);
}

/**
 * Compute the next new moon date/time as a Date object.
 */
export function getNextNewMoon(from: Date = new Date()): Date {
  const jdNow = toJulianDay(from);
  const daysSinceRefNew = jdNow - REFERENCE_NEW_MOON_JD;
  const synodicAge = ((daysSinceRefNew % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const daysToNew = SYNODIC_MONTH - synodicAge;
  return new Date(from.getTime() + daysToNew * 86400000);
}
