import { useEffect, useState, Suspense, lazy } from "react";
import { Particles } from "@/components/ui/particles";
import { FloatingNav } from "./components/FloatingNav";
import { HeroSection } from "./components/HeroSection";
import { landingContent } from "./data/landingContent";
import { useLanguage } from "./context/LanguageContext";
import { useViewport } from "./hooks/useViewport";

const PlaygroundSection = lazy(() => import("./components/PlaygroundSection").then(module => ({ default: module.PlaygroundSection })));
const DeveloperSection = lazy(() => import("./components/DeveloperSection").then(module => ({ default: module.DeveloperSection })));
const ProjectStats = lazy(() => import("./components/ProjectStats").then(module => ({ default: module.ProjectStats })));
const FeaturesSection = lazy(() => import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const FAQSection = lazy(() => import("./components/FAQSection").then(module => ({ default: module.FAQSection })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const StorePopup = lazy(() => import("./components/StorePopup").then(module => ({ default: module.StorePopup })));

function App() {
  const { lang } = useLanguage();
  const content = landingContent[lang] || landingContent.en;
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { isMobile, isTablet } = useViewport();

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Dark mode is still the intended project default.
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white font-sans text-black transition-colors duration-500 dark:bg-black dark:text-white">
      <Particles
        className="pointer-events-none absolute inset-0 z-0"
        quantity={isMobile ? 36 : isTablet ? 72 : 150}
        ease={80}
        color={isDarkMode ? "#3b82f6" : "#0ea5e9"}
        refresh
      />

      <div className="relative z-50">
        <FloatingNav
          brand={content.brand}
          navLinks={content.navLinks}
          discordHref={content.ctas.discord.href}
          discordLabel={content.ctas.discord.label}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      </div>

      <main id="top" className="relative z-10 overflow-x-hidden pb-0 pt-24 md:pt-28 lg:pt-32">
        <HeroSection hero={content.hero} ctas={content.ctas} isDarkMode={isDarkMode} />
        <Suspense fallback={<div className="min-h-screen py-10" />}>
          <PlaygroundSection section={content.demoSection} />
          <FeaturesSection />
          <ProjectStats />
          <DeveloperSection />
          <FAQSection section={content.faqSection} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <StorePopup />
      </Suspense>
    </div>
  );
}

export default App;
