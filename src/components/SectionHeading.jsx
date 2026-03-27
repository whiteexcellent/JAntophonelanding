import { MotionReveal } from "./MotionReveal";

export function SectionHeading({ eyebrow, title, body, align = "left", className = "" }) {
  return (
    <MotionReveal className={`section-intro section-intro-${align} ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </MotionReveal>
  );
}
