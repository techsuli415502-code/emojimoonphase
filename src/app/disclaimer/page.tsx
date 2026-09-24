import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { AlertTriangle, Activity, ExternalLink, Calendar, Telescope } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer — Important Information About This Site",
  description:
    "Read the Emoji Moon Phase disclaimer. The moon phase calculator uses a mean synodic-month model with accuracy of about half a day. Not for navigation or critical uses.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer — Emoji Moon Phase",
    description:
      "The moon phase calculator uses a mean synodic-month model. Read the full disclaimer before relying on the data.",
  },
};

const LAST_UPDATED = "September 23, 2026";

const SECTIONS = [
  {
    icon: Activity,
    title: "Calculator accuracy",
    body: [
      "The live moon phase calculator on this site uses the J2000 reference new moon and the IAU mean synodic month length of 29.5306 days. This approach is highly accurate for casual visual observation and educational use.",
      "However, the actual Moon does not move at constant angular velocity along its orbit. Perturbations from the Sun, Earth's equatorial bulge, and the Moon's own orbital eccentricity mean the true phase moment can differ from the mean value by up to several hours — roughly half a day in either direction near phase boundaries.",
      "For activities where exact timing matters — astronomy photography, eclipse planning, religious observance tied to lunar visibility, or any safety-critical application — please consult a professional ephemeris such as that published by NASA JPL or the US Naval Observatory.",
    ],
  },
  {
    icon: Calendar,
    title: "Calendar display",
    body: [
      "The moon phase calendar on this site shows the phase at 00:00 UTC for each day. The actual phase may transition during the day, so a date marked as \"first quarter\" may show the quarter moon emoji on both the day before and the day of the actual quarter moment.",
      "This is a deliberate simplification for readability and is consistent with how most public moon phase calendars present their data.",
    ],
  },
  {
    icon: ExternalLink,
    title: "External links",
    body: [
      "This site links to external resources including NASA and timeanddate.com. We have no control over the content, accuracy, or availability of those external sites, and we accept no responsibility for any loss or damage arising from reliance on information contained on those sites.",
      "Following any external link is at your own risk. Each external site operates under its own terms and privacy policy.",
    ],
  },
  {
    icon: Telescope,
    title: "Educational purpose",
    body: [
      "All written content on Emoji Moon Phase is provided for general educational and informational purposes only. It is not intended as professional astronomy advice and should not be relied upon as a sole source for any decision-making.",
      "Astronomy as a discipline involves precision far beyond what is necessary for casual observation. Where the content on this site simplifies a topic for readability, we have aimed to do so without misleading — but no simplification is perfect. When in doubt, consult primary sources.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "No professional advice",
    body: [
      "Nothing on this Site constitutes professional advice of any kind, including but not limited to astronomical, navigational, religious, agricultural, or legal advice. The content reflects our understanding at the time of writing and may be revised without notice.",
      "If you rely on moon phase information for safety-critical decisions, religious observance, or scientific work, you must verify the data against an authoritative source such as NASA's JPL Horizons system or the US Naval Observatory.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            <span className="text-gradient-gold">Disclaimer</span>
          </>
        }
        description={`Last updated: ${LAST_UPDATED}. Please read carefully. The information on this site is for general educational use only.`}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-12">
        <div className="glass-card-gold rounded-2xl p-6 md:p-8 border border-[oklch(0.82_0.16_75/0.32)]">
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            <strong>Summary:</strong> The moon phase calculator is highly
            accurate for casual use but is not a substitute for a professional
            ephemeris. Anything written here is educational. We link to
            external sites we trust but cannot control. Do not rely on this
            site for safety-critical decisions.
          </p>
        </div>

        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass-card-gold">
                  <Icon className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                </span>
                <h2 className="font-[family-name:var(--font-display-serif)] text-2xl md:text-3xl font-semibold">
                  {section.title}
                </h2>
              </div>
              {section.body.map((p, idx) => (
                <p key={idx} className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          );
        })}

        <div className="glass-card rounded-2xl p-6 md:p-8 text-center">
          <h2 className="font-[family-name:var(--font-display-serif)] text-xl font-semibold mb-2">
            Questions about this disclaimer?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Email{" "}
            <a
              href="mailto:tecsuli4155khan02@gmail.com"
              className="text-[oklch(0.82_0.16_75)] hover:underline underline-offset-4 break-all"
            >
              tecsuli4155khan02@gmail.com
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
