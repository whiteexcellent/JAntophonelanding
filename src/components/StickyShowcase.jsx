import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import { DeviceShell } from "./DeviceShell";
import { SectionBackdrop } from "./SectionBackdrop";
import { ShowcaseStepContent } from "./ShowcaseStepContent";

export function StickyShowcase({ section }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  const railHeight = useMemo(() => `${((activeIndex + 1) / section.steps.length) * 100}%`, [activeIndex, section.steps.length]);

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean);

    if (!nodes.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index || 0);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.55,
        rootMargin: "-10% 0px -20% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const activeStep = section.steps[activeIndex];

  return (
    <section className="section section-showcase">
      <SectionBackdrop variant={section.backdropMode} />
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />

        <div className="showcase-layout">
          <div className="showcase-steps-wrap">
            <div className="showcase-rail">
              <motion.span
                className="showcase-rail-fill"
                animate={{ height: railHeight }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              ></motion.span>
            </div>
            <div className="showcase-steps">
              {section.steps.map((step, index) => (
                <MotionReveal
                  key={step.label}
                  className={`showcase-step ${index === activeIndex ? "active" : ""}`}
                  delay={index * 90}
                  as="article"
                >
                  <button
                    type="button"
                    ref={(node) => {
                      stepRefs.current[index] = node;
                    }}
                    data-index={index}
                    onClick={() => setActiveIndex(index)}
                    className="showcase-step-button"
                  >
                    <span className="step-index">{step.index}</span>
                    <h3>{step.headline}</h3>
                    <p>{step.body}</p>
                  </button>
                </MotionReveal>
              ))}
            </div>
          </div>

          <MotionReveal className="showcase-device-wrap" delay={120}>
            <DeviceShell
              className="showcase-device"
              ambient="blue"
              title={activeStep.label}
              meta="Janto OS"
              headerBadge={activeStep.index}
              screenClassName="showcase-screen"
            >
              <div className="showcase-screen-stack">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeStep.label}
                    className="showcase-panel active"
                    initial={{ opacity: 0, y: 24, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -18, scale: 0.985 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img src={activeStep.screenAsset} alt="" aria-hidden="true" className="device-capture showcase-capture showcase-capture-backdrop" />
                    <ShowcaseStepContent step={activeStep} />
                    <div className="showcase-overlay showcase-overlay-floating">
                      <span className="capture-chip">{activeStep.label}</span>
                      <p>{activeStep.caption}</p>
                      <div className="showcase-chip-row">
                        {activeStep.chips.map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            </DeviceShell>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
