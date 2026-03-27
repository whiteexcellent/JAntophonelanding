import { MotionReveal } from "./MotionReveal";
import { PhoneStage } from "./PhoneStage";
import { AuroraBackground } from "./AuroraBackground";
import { RainbowButton } from "./magicui/RainbowButton";
import { ShimmerButton } from "./magicui/ShimmerButton";

export function HeroSection({ hero, ctas }) {
  return (
    <section className="hero-section" data-visual-mode={hero.visualMode}>
      <AuroraBackground className="hero-background" variant="hero" />

      <div className="container hero-layout">
        <MotionReveal className="hero-copy">
          <span className="eyebrow eyebrow-aurora">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>

          <div className="hero-actions">
            <ShimmerButton href={ctas.primary.href} tone={ctas.primary.tone}>
              {ctas.primary.label}
            </ShimmerButton>
            <RainbowButton href={ctas.secondary.href} tone={ctas.secondary.tone}>
              {ctas.secondary.label}
            </RainbowButton>
          </div>

          <div className="hero-signals hero-proof-grid">
            {hero.signals.map((signal, index) => (
              <MotionReveal key={signal.value} className="hero-signal-card" delay={index * 90}>
                <span className="signal-kicker">{signal.kicker}</span>
                <strong>{signal.value}</strong>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <PhoneStage
          slides={hero.slides}
          ghostLeft={hero.ghostLeft}
          ghostRight={hero.ghostRight}
        />
      </div>
    </section>
  );
}
