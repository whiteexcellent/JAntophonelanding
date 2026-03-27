import { landingContent } from "./data/landingContent";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustStrip } from "./components/TrustStrip";
import { FeatureGrid } from "./components/FeatureGrid";
import { HighlightGrid } from "./components/HighlightGrid";
import { DemoSection } from "./components/DemoSection";
import { StickyShowcase } from "./components/StickyShowcase";
import { MetadataSection } from "./components/MetadataSection";
import { CustomizationSection } from "./components/CustomizationSection";
import { DocsFeatureSection } from "./components/DocsFeatureSection";
import { CompatibilitySection } from "./components/CompatibilitySection";
import { PerformanceSection } from "./components/PerformanceSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { BackgroundScene } from "./components/BackgroundScene";

function App() {
  return (
    <div className="page-shell">
      <BackgroundScene variant="app-grid" className="page-scene" />
      <Navbar
        brand={landingContent.brand}
        navLinks={landingContent.navLinks}
        discordHref={landingContent.ctas.discord.href}
      />

      <main id="top">
        <HeroSection hero={landingContent.hero} ctas={landingContent.ctas} />
        <TrustStrip items={landingContent.trustItems} />
        <FeatureGrid section={landingContent.featuresSection} />
        <HighlightGrid items={landingContent.highlightItems} />
        <DemoSection section={landingContent.demoSection} />
        <StickyShowcase section={landingContent.showcaseSection} />
        <MetadataSection section={landingContent.metadataSection} />
        <CustomizationSection section={landingContent.customizationSection} />
        <DocsFeatureSection section={landingContent.docsFeatureSection} />
        <CompatibilitySection section={landingContent.compatibilitySection} />
        <PerformanceSection section={landingContent.performanceSection} />
        <EcosystemSection section={landingContent.ecosystemSection} />
        <FAQSection section={landingContent.faqSection} />
        <FinalCTA section={landingContent.finalCta} ctas={landingContent.ctas} />
      </main>
    </div>
  );
}

export default App;
