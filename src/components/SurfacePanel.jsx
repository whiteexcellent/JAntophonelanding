export function SurfacePanel({ children, className = "", tone = "frost", as: Tag = "div" }) {
  return <Tag className={`surface-panel surface-panel-${tone} ${className}`.trim()}>{children}</Tag>;
}
