import { useState } from "react"
import { Bolt, Camera, FlashlightOff } from "lucide-react"
import { useSystemStore } from "../stores/systemStore"
import { useDeviceStore } from "../stores/deviceStore"
import { useNotificationStore } from "../stores/notificationStore"
import { useNavigationStore } from "../stores/navigationStore"
import { getWallpaper } from "../data/wallpapers"
import { appleIosKit } from "../data/appleIosKit"
import { useHomeStore } from "../stores/homeStore"
import { t } from "../core/localization"

const metrics = appleIosKit.lockScreen

function glassCircle() {
  return {
    width: metrics.controls.size,
    height: metrics.controls.size,
    borderRadius: 999,
    background: "rgba(16,16,18,0.32)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    display: "grid",
    placeItems: "center",
    color: "#e5e5ea",
    fontSize: 22,
  }
}

export default function LockScreen() {
  const language = useSystemStore((s) => s.language)
  const unlockPhone = useSystemStore((s) => s.unlockPhone)
  const batteryLevel = useDeviceStore((s) => s.batteryLevel)
  const isCharging = useDeviceStore((s) => s.isCharging)
  const statusTime = useSystemStore((s) => s.statusTime)
  const lockNotifications = useNotificationStore((s) => s.lockscreenNotifications)
  const clearBadge = useNotificationStore((s) => s.clearBadge)
  const openNotification = useNotificationStore((s) => s.openNotification)
  const resolveIntent = useNavigationStore((s) => s.resolveIntent)
  const wallpaperId = useHomeStore((s) => s.wallpaperLockId || s.wallpaperId)
  const wallpaper = getWallpaper(wallpaperId)

  const [touchStart, setTouchStart] = useState(null)
  const now = new Date()
  const dayNames = language === "tr"
    ? ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]
    : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthNames = language === "tr"
    ? ["Ocak", "Subat", "Mart", "Nisan", "Mayis", "Haziran", "Temmuz", "Agustos", "Eylul", "Ekim", "Kasim", "Aralik"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const dateStr = `${dayNames[now.getDay()]}, ${now.getDate()} ${monthNames[now.getMonth()]}`

  const handleUnlock = () => unlockPhone()

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        background: wallpaper.lockBackground,
        cursor: "pointer",
      }}
      onClick={handleUnlock}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientY)}
      onTouchEnd={(event) => {
        if (touchStart && touchStart - event.changedTouches[0].clientY > 48) handleUnlock()
        setTouchStart(null)
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.18) 44%, rgba(0,0,0,0.34))",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, marginTop: metrics.clock.topOffset, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: metrics.clock.timeSize,
            lineHeight: 0.92,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            textShadow: "0 8px 32px rgba(0,0,0,0.35)",
          }}
        >
          {statusTime || "09:41"}
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: metrics.clock.dateSize,
            lineHeight: "26px",
            fontWeight: 590,
            letterSpacing: "-0.02em",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {dateStr}
        </div>
        {isCharging && (
          <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, opacity: 0.84, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <Bolt size={14} />
            <span>{batteryLevel}%</span>
          </div>
        )}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "0 14px",
          marginTop: 24,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxHeight: 248,
          overflow: "hidden",
        }}
      >
        {lockNotifications.slice(0, 4).map((notification) => (
          <button
            key={notification.id}
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              unlockPhone()
              if (notification.appId) clearBadge(notification.appId)
              openNotification(notification.id)
              if (notification.intent) resolveIntent(notification.intent)
            }}
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(22,22,24,0.24)",
              borderRadius: 18,
              padding: "12px 14px",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              color: "#fff",
              textAlign: "left",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              cursor: "pointer",
            }}
          >
            {notification.icon && (
              <img src={notification.icon} alt="" style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0 }} />
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>
                {typeof notification.title === "object" ? notification.title[language] || notification.title.en : notification.title}
              </div>
              <div
                style={{
                  marginTop: 2,
                  fontSize: 12,
                  opacity: 0.76,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {typeof notification.body === "object" ? notification.body[language] || notification.body.en : notification.body}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: metrics.controls.bottomOffset,
          display: "flex",
          justifyContent: "space-between",
          padding: `0 ${metrics.controls.sideOffset}px`,
          zIndex: 2,
        }}
      >
        <div onClick={(event) => event.stopPropagation()} style={glassCircle()}>
          <FlashlightOff size={22} />
        </div>
        <div
          onClick={(event) => {
            event.stopPropagation()
            unlockPhone()
            resolveIntent({ appId: "camera", screen: "camera.capture", params: {} })
          }}
          style={glassCircle()}
        >
          <Camera size={22} />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "rgba(255,255,255,0.88)",
          textShadow: "0 2px 14px rgba(0,0,0,0.35)",
          zIndex: 2,
        }}
      >
        {t("system.swipeUp", language)}
      </div>
    </div>
  )
}
