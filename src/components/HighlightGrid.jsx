import { MotionReveal } from "./MotionReveal";

export function HighlightGrid({ items }) {
  return (
    <section className="section section-highlights">
      <div className="container highlight-grid">
        {items.map((item, index) => (
          <MotionReveal
            key={item.title}
            className={`highlight-card ${item.tone === "wide" ? "highlight-card-wide" : ""} ${
              item.tone === "soft" ? "highlight-card-soft" : ""
            }`.trim()}
            delay={index * 80}
          >
            <span className="highlight-kicker">{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.diagram ? (
              <div className="highlight-diagram">
                {item.diagram.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            ) : null}
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
