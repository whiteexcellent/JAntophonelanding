import { useState } from "react";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import { DemoRail } from "./DemoRail";
import { SectionBackdrop } from "./SectionBackdrop";
import { SurfacePanel } from "./SurfacePanel";

export function DemoSection({ section }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = section.items[activeIndex];

  return (
    <section className="section section-demo" id={section.id}>
      <SectionBackdrop variant={section.backdropMode} />
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />

        <div className="demo-layout demo-layout-v3">
          <MotionReveal delay={80}>
            <SurfacePanel className="demo-primary-card" tone="hero">
              <div className="demo-primary-head">
                <span className="capture-chip">{activeItem.type}</span>
                <span>{activeItem.source}</span>
              </div>
              <div className="demo-primary-media">
                <div className="demo-video-shell">
                  <iframe
                    src={section.videoEmbed}
                    title={section.videoTitle}
                    className="demo-video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="demo-primary-copy">
                <strong>{activeItem.title}</strong>
                <p>{activeItem.caption}</p>
              </div>
            </SurfacePanel>
          </MotionReveal>

          <MotionReveal delay={120}>
            <SurfacePanel className="demo-side-card" tone="metal">
              <span className="eyebrow eyebrow-aurora">Editorial framing</span>
              <p className="demo-side-note">{section.note}</p>
              <div className="demo-chapter-grid">
                {section.chapters.map((chapter) => (
                  <div key={chapter.label} className="demo-chapter-card">
                    <span>{chapter.label}</span>
                    <p>{chapter.detail}</p>
                  </div>
                ))}
              </div>
            </SurfacePanel>
          </MotionReveal>
        </div>

        <MotionReveal className="demo-scrubber demo-scrubber-v3">
          <DemoRail items={section.items} activeIndex={activeIndex} onSelect={setActiveIndex} />
        </MotionReveal>
      </div>
    </section>
  );
}
