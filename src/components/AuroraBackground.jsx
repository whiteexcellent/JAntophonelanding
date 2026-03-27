export function AuroraBackground({ className = "", variant = "hero" }) {
  return (
    <div className={`aurora-field aurora-field-${variant} ${className}`.trim()} aria-hidden="true">
      <span className="aurora-grid"></span>
      <span className="aurora-orb aurora-orb-cyan"></span>
      <span className="aurora-orb aurora-orb-violet"></span>
      <span className="aurora-orb aurora-orb-blue"></span>
      <span className="aurora-sweep aurora-sweep-left"></span>
      <span className="aurora-sweep aurora-sweep-right"></span>
      <span className="aurora-noise"></span>
    </div>
  );
}
