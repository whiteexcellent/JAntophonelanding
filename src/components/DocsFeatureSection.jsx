import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function DocsFeatureSection({ section }) {
  return (
    <section className="section section-docs-features">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />
        <div className="docs-feature-grid">
          {section.cards.map((card, index) => (
            <MotionReveal key={card.title} className="docs-feature-card" delay={index * 60}>
              <div className="docs-feature-top">
                <span className="capture-chip">Docs-backed</span>
                <a href={card.source} target="_blank" rel="noreferrer" className="docs-source-link">
                  View docs
                </a>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="docs-chip-row">
                {card.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
