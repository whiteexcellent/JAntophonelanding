import { MotionReveal } from "./MotionReveal";
import { SectionBackdrop } from "./SectionBackdrop";
import { SurfacePanel } from "./SurfacePanel";
import { RainbowButton } from "./magicui/RainbowButton";
import { ShimmerButton } from "./magicui/ShimmerButton";

export function FinalCTA({ section, ctas }) {
  return (
    <section className="section final-cta-section">
      <SectionBackdrop variant={section.backdropMode} />
      <div className="container">
        <MotionReveal>
          <SurfacePanel className="final-cta" tone="hero">
            <span className="eyebrow eyebrow-aurora">{section.eyebrow}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <div className="hero-actions">
              <ShimmerButton href={ctas.primary.href} tone={ctas.primary.tone}>
                {ctas.primary.label}
              </ShimmerButton>
              <RainbowButton href={ctas.discord.href} tone={ctas.discord.tone} external>
                {ctas.discord.label}
              </RainbowButton>
            </div>
          </SurfacePanel>
        </MotionReveal>
      </div>
    </section>
  );
}
