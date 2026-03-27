import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function MetadataSection({ section }) {
  return (
    <section className="section metadata-section">
      <div className="container split-layout">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} className="section-copy" />
        <MotionReveal className="metadata-card">
          {section.stats.map((item, index) => (
            <div key={item.label} className="metadata-row" style={{ "--delay": `${index * 80}ms` }}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </MotionReveal>
      </div>
      <div className="container metadata-points">
        {section.points.map((point, index) => (
          <MotionReveal key={point} as="span" className="metadata-point" delay={index * 70}>
            {point}
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
