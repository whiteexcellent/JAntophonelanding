export function ShimmerButton({ href, children, className = "", external = false, tone }) {
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
  };

  return (
    <a
      href={href}
      className={`magic-button shimmer-button ${className}`.trim()}
      onPointerMove={handlePointerMove}
      data-tone={tone || "shimmer"}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="magic-button-core"></span>
      <span className="magic-button-sheen"></span>
      <span className="magic-button-label">{children}</span>
    </a>
  );
}