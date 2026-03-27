import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionHeading } from "./SectionHeading";
import { FeatureCardShell } from "./FeatureCardShell";
import { InteractivePillRow } from "./InteractivePillRow";
import { MotionReveal } from "./MotionReveal";
import { SectionBackdrop } from "./SectionBackdrop";

export function FeatureGrid({ section }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    const sync = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);

    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  const activeFeature = section.features[selectedIndex] || section.features[0];

  return (
    <section className="section section-features" id={section.id}>
      <SectionBackdrop variant={section.backdropMode} />
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />

        <div className="feature-rail-shell">
          <div className="feature-rail-viewport" ref={emblaRef}>
            <div className="feature-rail-container">
              {section.features.map((feature, index) => (
                <div key={feature.title} className="feature-rail-slide">
                  <FeatureCardShell feature={feature} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <MotionReveal className="feature-active-caption">
          <span className="capture-chip">{activeFeature.kicker}</span>
          <strong>{activeFeature.title}</strong>
          <p>{activeFeature.body}</p>
        </MotionReveal>

        <MotionReveal className="feature-chips-wrap">
          <InteractivePillRow items={section.chips} className="feature-chips" />
        </MotionReveal>
      </div>
    </section>
  );
}
