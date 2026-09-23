import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { FileText, Scale, Shield, AlertTriangle, RefreshCw, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Using Emoji Moon Phase",
  description:
    "Read the terms and conditions for using Emoji Moon Phase. Covers acceptable use, accuracy limits, intellectual property, and how to contact us.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions — Emoji Moon Phase",
    description:
      "Read the terms and conditions for using Emoji Moon Phase, including acceptable use, accuracy limits, and contact information.",
  },
};

const LAST_UPDATED = "September 23, 2026";

const SECTIONS = [
  {
    icon: FileText,
    title: "1. Acceptance of terms",
    body: [
      "By accessing or using Emoji Moon Phase (the \"Site\"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the Site.",
      "We may update these terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms. The \"Last updated\" date at the top of this page reflects the most recent revision.",
    ],
  },
  {
    icon: Scale,
    title: "2. Use of the Site",
    body: [
      "Emoji Moon Phase is provided as a free informational resource for personal, non-commercial use. You may browse the Site, use the moon phase calculator, view the lunar calendar, and read the content for your own education and enjoyment.",
      "You agree not to: (a) use automated scripts or bots to scrape large volumes of content from the Site; (b) attempt to disrupt or compromise the Site's infrastructure; (c) use the Site for any unlawful purpose; or (d) reproduce substantial portions of the content without attribution.",
    ],
  },
  {
    icon: Shield,
    title: "3. Intellectual property",
    body: [
      "The original content on this Site — including written explanations, the design, the visual identity, the favicon, and the source code of the calculator — is the intellectual property of Emoji Moon Phase and is protected by applicable copyright laws.",
      "The moon phase emojis themselves are part of the Unicode standard and are subject to their own licensing under the Unicode Consortium. The astronomical calculations use publicly known algorithms and are not subject to copyright.",
      "You are welcome to share short excerpts of content with attribution and a link back to the original page. For republication of full articles, please request permission by email first.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "4. No warranty of accuracy",
    body: [
      "While we make every reasonable effort to ensure the moon phase calculator is accurate, the calculations are based on a mean synodic-month model and may differ from precise ephemerides by up to half a day in either direction near phase boundaries.",
      "The Site and all content are provided \"as is\" without warranty of any kind, express or implied, including but not limited to warranties of accuracy, fitness for a particular purpose, or non-infringement. You rely on the Site at your own risk.",
    ],
  },
  {
    icon: RefreshCw,
    title: "5. Limitation of liability",
    body: [
      "To the maximum extent permitted by applicable law, Emoji Moon Phase, its author, and any contributors shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of, or inability to use, the Site.",
      "This includes damages resulting from reliance on the moon phase information presented here for activities such as photography, navigation, religious observance, or any other purpose.",
    ],
  },
  {
    icon: Mail,
    title: "6. Contact",
    body: [
      "If you have questions about these Terms & Conditions, or you wish to request permission to republish content, please contact us at:",
      "tecsuli4155khan02@gmail.com",
      "We will respond within a reasonable timeframe, typically two to five business days.",
    ],
  },
];

export default function TermsPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Terms &{" "}
            <span className="text-gradient-gold">Conditions</span>
          </>
        }
        description={`Last updated: ${LAST_UPDATED}. These terms govern your use of the Emoji Moon Phase website. Please read them carefully.`}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-12">
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            These terms apply to all visitors to Emoji Moon Phase. By using the
            Site you confirm that you have read, understood, and agree to be
            bound by them. If you do not agree, please stop using the Site
            immediately.
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
          <p className="text-xs uppercase tracking-widest text-[oklch(0.82_0.16_75/0.85)]">
            Effective date
          </p>
          <p className="mt-1 font-[family-name:var(--font-display-serif)] text-lg font-semibold">
            {LAST_UPDATED}
          </p>
        </div>
      </div>
    </article>
  );
}
