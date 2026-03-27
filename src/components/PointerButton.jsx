export function PointerButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  tone,
}) {
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
      className={`button button-${variant} ${className}`.trim()}
      onPointerMove={handlePointerMove}
      data-tone={tone || variant}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="button-halo"></span>
      <span className="button-sheen"></span>
      <span className="button-label">{children}</span>
    </a>
  );
}
