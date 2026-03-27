import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function EcosystemSection({ section }) {
  return (
    <section className="section ecosystem-section">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />
        <div className="ecosystem-grid">
          {section.items.map((item, index) => (
            <MotionReveal key={item.title} as="article" delay={index * 60}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
