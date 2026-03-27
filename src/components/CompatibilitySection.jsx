import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function CompatibilitySection({ section }) {
  return (
    <section className="section section-compatibility">
      <div className="container">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} />
        <div className="compatibility-table">
          {section.rows.map((row, index) => (
            <MotionReveal key={row.label} className="compatibility-row" delay={index * 70}>
              <div className="compatibility-label">{row.label}</div>
              <div className="compatibility-values">
                {row.values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
