/**
 * Injects JSON-LD structured data for the WebSite and FAQPage schema.
 * Boosts rich-result eligibility for the homepage.
 */
export function JsonLdScript() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Emoji Moon Phase",
    url: "https://emojimoonphase.space",
    description:
      "Real-time current moon phase shown as a large moon emoji, with a live countdown to the next full moon, a lunar calendar, and clear explanations of every phase.",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://emojimoonphase.space/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is the emoji moon phase calculated on this page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use the well-established synodic-month model. Starting from a known reference new moon in the year 2000, we count the number of days that have passed and divide by the average synodic month length of 29.5306 days. The fractional remainder tells us where the Moon is in its current cycle, and we map that to one of the eight named phases plus the matching moon emoji.",
        },
      },
      {
        "@type": "Question",
        name: "Why are there eight moon phases instead of just four?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four principal phases — new moon, first quarter, full moon, and last quarter — mark the moments when the Moon is at 0°, 90°, 180°, and 270° angular distance from the Sun. The four intermediate phases describe the appearance of the Moon between those exact moments.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a synodic month and a sidereal month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sidereal month (about 27.32 days) is how long the Moon takes to orbit Earth relative to the distant stars. A synodic month (about 29.53 days) is how long it takes to go from one new moon to the next new moon — longer because Earth itself has moved along its orbit around the Sun during that time.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([websiteSchema, faqSchema]),
      }}
    />
  );
}
