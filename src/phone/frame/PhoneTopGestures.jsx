import { useSystemStore } from "../stores/systemStore"
import { useNavigationStore } from "../stores/navigationStore"

export function PhoneTopGestures() {
  const bootPhase = useSystemStore((s) => s.bootPhase)
  const rootSurface = useNavigationStore((s) => s.rootSurface)
  const toggleOverlaySurface = useNavigationStore((s) => s.toggleOverlaySurface)

  if (bootPhase !== "unlocked") return null

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 84,
        zIndex: 130,
        display: "flex",
        pointerEvents: rootSurface === "home" || rootSurface === "app" ? "auto" : "none",
      }}
    >
      <button
        type="button"
        aria-label="Open notifications"
        onClick={() => toggleOverlaySurface("notifications")}
        style={{
          flex: 1,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      />
      <button
        type="button"
        aria-label="Open control center"
        onClick={() => toggleOverlaySurface("control-center")}
        style={{
          flex: 1,
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      />
    </div>
  )
}
