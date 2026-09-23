import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Mail, Clock, Globe, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Reach the Emoji Moon Phase Team",
  description:
    "Contact Emoji Moon Phase with feedback, corrections, or questions about the live moon phase calculator, lunar calendar, or any content on the site.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Emoji Moon Phase",
    description:
      "Reach the Emoji Moon Phase team with feedback, corrections, or questions about the live moon phase calculator.",
  },
};

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "tecsuli4155khan02@gmail.com",
    detail:
      "Best for detailed questions, corrections, partnership inquiries, and anything you'd like the author to read in full.",
    href: "mailto:tecsuli4155khan02@gmail.com",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "2–5 business days",
    detail:
      "Messages are read in the order they arrive. We aim to reply within a few business days but high message volume can occasionally extend this.",
  },
  {
    icon: Globe,
    label: "Coverage",
    value: "Worldwide",
    detail:
      "The moon phase calculator uses UTC and works globally. Our content is written in English and intended for a general international audience.",
  },
  {
    icon: MessageSquare,
    label: "Feedback",
    value: "Always welcome",
    detail:
      "Spotted a typo, a miscalculation, or a confusing explanation? Let us know — every correction makes the next reader's visit better.",
  },
];

export default function ContactPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Contact Us"
        title={
          <>
            Get in touch with{" "}
            <span className="text-gradient-gold">the team</span>
          </>
        }
        description="Have a question about the moon phase calculator, spotted a bug, or want to suggest a topic for the site? Send an email — the author reads every message."
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Contact info */}
          <div className="lg:col-span-3 space-y-5">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-[oklch(0.82_0.16_75/0.85)] mb-2">
                Primary email
              </p>
              <a
                href="mailto:tecsuli4155khan02@gmail.com"
                className="font-[family-name:var(--font-display-serif)] text-xl md:text-2xl font-semibold text-gradient-gold break-all hover:underline underline-offset-4"
              >
                tecsuli4155khan02@gmail.com
              </a>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                Whether you have noticed that today&apos;s moon emoji does not
                match what you see in the sky, you would like to suggest an
                addition to the FAQ, or you simply want to share a photo of the
                Moon from your location, this is the address to use. Please
                include the date and your time zone if your question relates to
                a specific phase — it makes the answer faster and more accurate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_METHODS.slice(1).map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="glass-card rounded-2xl p-5">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg glass-card-gold">
                      <Icon className="h-4 w-4 text-[oklch(0.82_0.16_75)]" />
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
                      {m.label}
                    </p>
                    <p className="text-base font-semibold text-foreground mt-0.5">
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {m.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick contact form (mailTo-based, no backend) */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 md:p-8 sticky top-24">
              <h2 className="font-[family-name:var(--font-display-serif)] text-xl font-semibold mb-4">
                Send a quick message
              </h2>
              <form
                className="space-y-4"
                action="mailto:tecsuli4155khan02@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground/80 mb-1.5">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Skywatcher"
                    className="w-full rounded-lg bg-[oklch(0.10_0.025_285/0.55)] border border-[oklch(0.95_0.012_85/0.10)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[oklch(0.82_0.16_75/0.55)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground/80 mb-1.5">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg bg-[oklch(0.10_0.025_285/0.55)] border border-[oklch(0.95_0.012_85/0.10)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[oklch(0.82_0.16_75/0.55)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full rounded-lg bg-[oklch(0.10_0.025_285/0.55)] border border-[oklch(0.95_0.012_85/0.10)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-[oklch(0.82_0.16_75/0.55)] focus:outline-none resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[oklch(0.82_0.16_75)] text-[oklch(0.14_0.03_285)] px-4 py-3 text-sm font-semibold hover:bg-[oklch(0.88_0.16_75)] transition-colors"
                >
                  Send message
                </button>
                <p className="text-[10px] text-muted-foreground/70 text-center leading-relaxed">
                  Submitting opens your email client pre-filled with your message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
