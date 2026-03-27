import { MotionReveal } from "./MotionReveal";
import { SurfacePanel } from "./SurfacePanel";

export function FeatureCardShell({ feature, index }) {
  return (
    <MotionReveal className="feature-card-motion" delay={index * 70}>
      <SurfacePanel
        tone={feature.surfaceTone || "frost"}
        className={`feature-card feature-card-${feature.variant || "standard"}`}
      >
        <div className="feature-card-glow" data-accent={feature.accentStyle}></div>
        <div className="feature-card-top">
          <span className="feature-mini-kicker">{feature.kicker}</span>
          <div className="feature-icon">{feature.icon}</div>
        </div>

        <div className="feature-card-copy">
          <h3>{feature.title}</h3>
          <p>{feature.body}</p>
        </div>

        <div className="feature-card-meta">
          {feature.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mini-preview">
          <img src={feature.previewAsset} alt={feature.title} className="feature-preview-image" />
        </div>
      </SurfacePanel>
    </MotionReveal>
  );
}
