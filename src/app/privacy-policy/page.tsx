import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Shield, Cookie, Eye, Mail, Globe, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Handle Your Data",
  description:
    "Read the Emoji Moon Phase privacy policy. We do not collect personal information beyond standard anonymous analytics. See exactly what we track and why.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — Emoji Moon Phase",
    description:
      "We do not collect personal information beyond standard anonymous analytics. Read the full policy.",
  },
};

const LAST_UPDATED = "September 23, 2026";

const SECTIONS = [
  {
    icon: Eye,
    title: "Information we collect",
    body: [
      "Emoji Moon Phase is designed to work without an account. We do not ask for your name, email address, or any other identifying information to use the moon phase calculator, lunar calendar, or content on the site.",
      "The contact page invites you to email us if you choose. Anything you include in that email (your name, return address, and the contents of your message) is handled by your email provider and ours. We keep email correspondence only as long as needed to reply, then delete it.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and local storage",
    body: [
      "We do not set any first-party tracking cookies. The page may use your browser's local storage to remember preferences such as the month you were viewing in the calendar — this data stays on your device and is never sent to our servers.",
      "If we add analytics in the future, we will use privacy-respecting tools that do not store personally identifying information, and we will update this policy before doing so.",
    ],
  },
  {
    icon: Server,
    title: "Server logs",
    body: [
      "Like most websites, our hosting provider automatically records anonymous server logs for security and uptime monitoring. These logs typically include the date and time of the request, the requested URL, the referring URL, the user-agent string, an anonymized IP address, and the response status.",
      "These logs are kept for a short period for security and debugging purposes and are not associated with any personal identity.",
    ],
  },
  {
    icon: Globe,
    title: "Third-party services",
    body: [
      "The site itself does not embed third-party tracking pixels, social plugins, or advertising networks. External resources loaded include fonts served from Google Fonts, our favicon served from our own origin, and a moon phase widget iframe embedded from moonphaseemoji.com in the hero section. The iframe loads in your browser and does not transmit any identifying information from you to our servers.",
      "If you follow a link to one of the source websites listed in our footer (such as NASA or timeanddate.com), you leave this site and are subject to the privacy policy of the destination. We are not responsible for the privacy practices of external sites.",
    ],
  },
  {
    icon: Mail,
    title: "Your choices",
    body: [
      "Because we do not maintain user accounts or send marketing emails, there is no subscription to cancel. If you have emailed us and want your message deleted sooner than our standard retention window, just reply to the original thread or send a new message asking for deletion and we will action it promptly.",
      "You can clear local storage in your browser settings at any time, which resets any preferences stored on your device.",
    ],
  },
  {
    icon: Shield,
    title: "Children's privacy",
    body: [
      "Emoji Moon Phase is suitable for general audiences and is often used by students. We do not knowingly collect any personal information from visitors of any age, including children. If you believe a child has shared personal information with us through the contact form, please email us and we will promptly remove it.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Privacy{" "}
            <span className="text-gradient-gold">Policy</span>
          </>
        }
        description={`Last updated: ${LAST_UPDATED}. This policy explains what information Emoji Moon Phase collects (almost nothing) and how we handle it.`}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-12">
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            Emoji Moon Phase is built to be useful without surveillance. The
            live moon phase calculator runs entirely in your browser — the date
            is read from your device and the phase is computed locally — so
            no information about your visit is needed to deliver the page&apos;s
            core function. The sections below cover the small amount of data
            that is involved in operating the site.
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
            Questions about this policy?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Email{" "}
            <a
              href="mailto:tecsuli4155khan02@gmail.com"
              className="text-[oklch(0.82_0.16_75)] hover:underline underline-offset-4 break-all"
            >
              tecsuli4155khan02@gmail.com
            </a>{" "}
            and we will be happy to clarify any section.
          </p>
        </div>
      </div>
    </article>
  );
}
