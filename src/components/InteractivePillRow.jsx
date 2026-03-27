export function InteractivePillRow({ items, className = "" }) {
  return (
    <div className={`interactive-pill-row ${className}`.trim()}>
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const tone = typeof item === "string" ? undefined : item.tone;

        return (
          <span key={label} className="interactive-pill" data-tone={tone}>
            {label}
          </span>
        );
      })}
    </div>
  );
}
