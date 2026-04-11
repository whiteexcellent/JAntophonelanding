import { useSystemStore } from "../stores/systemStore"
import { useDeviceStore } from "../stores/deviceStore"
import { appleIosKit } from "../data/appleIosKit"

const metrics = appleIosKit.iphoneHome

export function PhoneStatusBar({ theme }) {
  const statusTime = useSystemStore((s) => s.statusTime)
  const batteryLevel = useDeviceStore((s) => s.batteryLevel)
  const wifiEnabled = useSystemStore((s) => s.wifiEnabled)
  const cellularEnabled = useSystemStore((s) => s.cellularEnabled)
  const textColor = "#ffffff"

  return (
    <div
      className="phone-status-bar"
      style={{
        height: metrics.statusBarHeight,
        padding: `${metrics.statusBarPadding.top}px ${metrics.statusBarPadding.right}px ${metrics.statusBarPadding.bottom}px ${metrics.statusBarPadding.left}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: textColor,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        pointerEvents: "none",
      }}
    >
      <div style={{ width: 100, display: "flex", justifyContent: "center" }}>
        <span
          style={{
            fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 590,
            fontSize: 17,
            lineHeight: "22px",
            textAlign: "center",
          }}
        >
          {statusTime || "09:41"}
        </span>
      </div>

      <div style={{ width: 100, display: "flex", justifyContent: "flex-end" }}>
        <div
          className="phone-status-icons"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            paddingTop: 1,
            paddingRight: 1,
          }}
        >
          {cellularEnabled && (
            <svg width="19.2" height="12.23" viewBox="0 0 19.2 12.23" fill="none" aria-hidden="true">
              <rect x="0" y="8.03" width="3.2" height="4.2" rx="0.5" fill={textColor} />
              <rect x="5.35" y="5.2" width="3.2" height="7.03" rx="0.5" fill={textColor} />
              <rect x="10.7" y="2.6" width="3.2" height="9.63" rx="0.5" fill={textColor} />
              <rect x="16" y="0" width="3.2" height="12.23" rx="0.5" fill={textColor} />
            </svg>
          )}

          {wifiEnabled && (
            <svg width="17.14" height="12.33" viewBox="0 0 17.14 12.33" fill="none" aria-hidden="true">
              <path d="M8.57 10.75a1.55 1.55 0 1 0 0 3.1a1.55 1.55 0 0 0 0-3.1Z" fill={textColor} />
              <path d="M4.6 8.35c2.16-2.1 5.82-2.1 7.98 0" stroke={textColor} strokeWidth="1.45" strokeLinecap="round" />
              <path d="M2.1 5.5c3.86-3.72 9.08-3.72 12.94 0" stroke={textColor} strokeWidth="1.45" strokeLinecap="round" />
              <path d="M0.2 2.25c5-4.7 11.74-4.7 16.74 0" stroke={textColor} strokeOpacity="0.4" strokeWidth="1.45" strokeLinecap="round" />
            </svg>
          )}

          <div style={{ position: "relative", width: 27.33, height: 13 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: 4.3,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 2.16,
                top: 2,
                bottom: 2,
                width: Math.max(4, Math.round((batteryLevel / 100) * 21)),
                borderRadius: 2.5,
                background: batteryLevel <= 20 ? "#ff453a" : textColor,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -2,
                top: 4.5,
                width: 1.33,
                height: 4,
                background: "rgba(255,255,255,0.4)",
                borderRadius: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
