import { BackgroundScene } from "./BackgroundScene";

export function SectionBackdrop({ variant = "section-light-rays", className = "" }) {
  return (
    <div className={`section-backdrop ${className}`.trim()}>
      <BackgroundScene variant={variant} />
    </div>
  );
}
