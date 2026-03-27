import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { MotionReveal } from "./MotionReveal";
import { DeviceShell } from "./DeviceShell";

export function PhoneStage({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [reducedMotion, slides?.length]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[activeIndex];

  return (
    <MotionReveal className="phone-stage simplified" delay={120}>
      <motion.div
        className="hero-device-wrap center-hero-device"
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={reducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DeviceShell
          className="hero-device"
          ambient={activeSlide.accent}
          title={activeSlide.title}
          meta={activeSlide.time}
          headerBadge="Live UI"
          screenClassName="screen-carousel"
          footer={
            <div className="carousel-progress" style={{display: 'flex', gap: '8px', justifyContent: 'center'}}>
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={`progress-dot ${index === activeIndex ? "active" : ""}`}
                  style={{
                    width: index === activeIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === activeIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                    border: 'none',
                    transition: 'all 0.3s'
                  }}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          }
        >
          <div className="screen-carousel-stack" style={{width: '100%', height: '100%', position: 'relative'}}>
            <AnimatePresence mode="wait">
              <motion.article
                key={activeSlide.title}
                className="hero-slide hero-slide-active"
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}
              >
                <img src={activeSlide.asset} alt={activeSlide.title} className="device-capture hero-capture" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </motion.article>
            </AnimatePresence>
          </div>
        </DeviceShell>
      </motion.div>
    </MotionReveal>
  );
}
