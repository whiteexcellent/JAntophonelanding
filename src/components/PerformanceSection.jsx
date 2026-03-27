import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function PerformanceSection({ section }) {
  return (
    <section className="section performance-section">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />
        <div className="performance-grid">
          {section.cards.map((card, index) => (
            <MotionReveal key={card.label} as="article" delay={index * 80}>
              <span className="metric-label">{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.body}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
