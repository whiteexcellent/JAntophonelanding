export function SegmentedControl({
  items,
  value,
  onChange,
  className = "",
  ariaLabel = "Segmented control",
}) {
  return (
    <div className={`segmented-control ${className}`.trim()} role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const id = typeof item === "string" ? item : item.id;
        const label = typeof item === "string" ? item : item.label;
        const meta = typeof item === "string" ? "" : item.meta;
        const isActive = id === value;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`segmented-control-item ${isActive ? "active" : ""}`.trim()}
            onClick={() => onChange(id)}
          >
            <span>{label}</span>
            {meta ? <small>{meta}</small> : null}
          </button>
        );
      })}
    </div>
  );
}
