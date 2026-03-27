import { MotionReveal } from "./MotionReveal";

export function TrustStrip({ items }) {
  return (
    <section className="trust-strip">
      <div className="container trust-items">
        {items.map((item, index) => (
          <MotionReveal key={item} className="trust-pill" delay={index * 50} as="span">
            {item}
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
