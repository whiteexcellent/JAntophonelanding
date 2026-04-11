import { useNotificationStore } from "../stores/notificationStore"
import { useSystemStore } from "../stores/systemStore"
import { useNavigationStore } from "../stores/navigationStore"
import { useHomeStore } from "../stores/homeStore"
import { getWallpaper } from "../data/wallpapers"
import { getAppleSketchArtwork } from "../data/sketchRuntimeAssets"
import { t } from "../core/localization"

function NotificationIcon({ notification, themeMode }) {
  const source = getAppleSketchArtwork(notification.appId || "messages", themeMode) || notification.icon

  return (
    <div
      style={{
        position: "relative",
        width: 42,
        height: 42,
        borderRadius: 12,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "0 10px 20px rgba(0,0,0,0.16)",
      }}
    >
      <img
        src={source}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.26))",
        }}
      />
      {notification.icon && (
        <img
          src={notification.icon}
          alt=""
          style={{
            position: "absolute",
            inset: 9,
            width: 24,
            height: 24,
            objectFit: "contain",
            borderRadius: 8,
            filter: notification.icon.endsWith(".svg") ? "brightness(0) invert(1)" : "none",
          }}
        />
      )}
    </div>
  )
}

export function NotificationCenter() {
  const notifications = useNotificationStore((s) => s.notificationCenter)
  const clearAll = useNotificationStore((s) => s.clearAll)
  const dismissNotification = useNotificationStore((s) => s.dismissNotification)
  const resolveIntent = useNavigationStore((s) => s.resolveIntent)
  const closeOverlaySurface = useNavigationStore((s) => s.closeOverlaySurface)
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const wallpaperId = useHomeStore((s) => s.wallpaperLockId || s.wallpaperId)
  const wallpaper = getWallpaper(wallpaperId)
  const isDark = themeMode === "dark"
  const now = new Date()
  const headingDate = now.toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 190,
        background: wallpaper.lockBackground,
        display: "flex",
        flexDirection: "column",
        padding: "52px 14px 20px",
      }}
      onClick={closeOverlaySurface}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(180deg, rgba(5,8,14,0.34), rgba(3,5,11,0.62) 44%, rgba(3,5,10,0.8))"
            : "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(18,22,28,0.18) 44%, rgba(12,16,22,0.38))",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "rgba(255,255,255,0.68)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
            }}
          >
            {headingDate}
          </div>
          <span
            style={{
              display: "block",
              marginTop: 6,
              fontSize: 28,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
            }}
          >
            {t("system.notifications", language)}
          </span>
        </div>
        {notifications.length > 0 && (
          <button
            onClick={(event) => {
              event.stopPropagation()
              clearAll()
            }}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              color: "#fff",
              padding: "9px 14px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {t("system.clearAll", language)}
          </button>
        )}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          paddingBottom: 12,
        }}
      >
        {notifications.length === 0 && (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.56,
              color: "#fff",
              fontSize: 15,
            }}
          >
            {t("system.noNotifications", language)}
          </div>
        )}

        {notifications.map((notification) => (
          <div
            key={notification.id}
            onClick={(event) => {
              event.stopPropagation()
              if (notification.intent) resolveIntent(notification.intent)
              dismissNotification(notification.id)
              closeOverlaySurface()
            }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "14px 14px",
              borderRadius: 22,
              background: isDark ? "rgba(24,28,38,0.42)" : "rgba(255,255,255,0.42)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.45)"}`,
              boxShadow: "0 18px 48px rgba(0,0,0,0.18)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              cursor: "pointer",
            }}
          >
            <NotificationIcon notification={notification} themeMode={themeMode} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.62)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {notification.appId || "Janto Phone"}
              </div>
              <div
                style={{
                  marginTop: 3,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                {typeof notification.title === "object" ? notification.title[language] || notification.title.en : notification.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.72)",
                  marginTop: 4,
                  lineHeight: 1.35,
                }}
              >
                {typeof notification.body === "object" ? notification.body[language] || notification.body.en : notification.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
