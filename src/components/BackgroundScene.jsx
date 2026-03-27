export function BackgroundScene({ variant = "hero-grid-beams", className = "" }) {
  return (
    <div className={`background-scene background-scene-${variant} ${className}`.trim()} aria-hidden="true">
      <span className="background-grid"></span>
      <span className="background-burst background-burst-a"></span>
      <span className="background-burst background-burst-b"></span>
      <span className="background-burst background-burst-c"></span>
      <span className="background-ring background-ring-a"></span>
      <span className="background-ring background-ring-b"></span>
      <span className="background-pocket background-pocket-a"></span>
      <span className="background-pocket background-pocket-b"></span>
      <span className="background-pocket background-pocket-c"></span>
      <span className="background-frequency background-frequency-a"></span>
      <span className="background-frequency background-frequency-b"></span>
      <span className="background-frequency background-frequency-c"></span>
      <span className="background-dust"></span>
      <span className="background-noise"></span>
    </div>
  );
}
