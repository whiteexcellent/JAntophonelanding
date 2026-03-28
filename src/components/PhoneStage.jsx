import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useLanguage } from "../context/LanguageContext";
import { MotionReveal } from "./MotionReveal";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";

export function PhoneStage({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const { lang } = useLanguage();

  useEffect(() => {
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [reducedMotion, slides?.length]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[activeIndex];
  const activeImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    transform: `translate(${activeSlide.screenOffsetX || 0}px, ${activeSlide.screenOffsetY || 0}px) scale(${activeSlide.screenScale || 1})`,
    transformOrigin: "center center",
    imageRendering: "auto",
  };

  return (
    <MotionReveal className="w-full flex flex-col justify-center items-center" delay={120}>
      <motion.div
        className="hero-device-wrap center-hero-device"
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Iphone16Pro className="w-full h-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto shadow-2xl">
          <div className="screen-carousel-stack" style={{ width: "100%", height: "100%", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.article
                key={activeSlide.title}
                className="hero-slide hero-slide-active"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
              >
                <img
                  src={activeSlide.asset}
                  alt={activeSlide.title}
                  className="hero-capture pointer-events-none select-none"
                  style={activeImageStyle}
                  decoding="async"
                  loading="eager"
                />
              </motion.article>
            </AnimatePresence>
          </div>
        </Iphone16Pro>
        
        {/* Carousel Progress */}
        <div className="carousel-progress mt-8 flex items-center justify-center gap-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.title}
                type="button"
                aria-label={(lang === "tr" ? "Goster " : "Show ") + slide.title}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center justify-center transition-all duration-300 ease-out rounded-full ${
                  isActive 
                    ? "w-12 h-6 bg-slate-400/20 dark:bg-slate-500/20" 
                    : "w-6 h-6 hover:bg-slate-400/10 dark:hover:bg-slate-500/10"
                }`}
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-6 h-2 bg-slate-500 dark:bg-slate-400"
                      : "w-2 h-2 bg-slate-300 dark:bg-slate-600"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </motion.div>
    </MotionReveal>
  );
}
