import { CosmicBackground } from "@/components/site/CosmicBackground";
import { LiveMoonHero } from "@/components/site/LiveMoonHero";
import { EightPhasesSection } from "@/components/site/EightPhasesSection";
import { LunarCycleSection } from "@/components/site/LunarCycleSection";
import { MoonPhaseCalendarSection } from "@/components/site/MoonPhaseCalendarSection";
import { MeaningSection } from "@/components/site/MeaningSection";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { FactsSection } from "@/components/site/FactsSection";
import { FAQSection } from "@/components/site/FAQSection";
import { EeatSection } from "@/components/site/EeatSection";
import { SourcesCTASection } from "@/components/site/SourcesCTASection";
import { JsonLdScript } from "@/components/site/JsonLdScript";

export default function Home() {
  return (
    <div className="relative">
      {/* Cosmic background for the hero only — pages below use the body's plum backdrop */}
      <CosmicBackground className="h-[100vh] sticky top-0" />
      <div className="relative">
        <LiveMoonHero />
        <EightPhasesSection />
        <LunarCycleSection />
        <MoonPhaseCalendarSection />
        <MeaningSection />
        <HowItWorksSection />
        <FactsSection />
        <FAQSection />
        <EeatSection />
        <SourcesCTASection />
      </div>
      <JsonLdScript />
    </div>
  );
}
