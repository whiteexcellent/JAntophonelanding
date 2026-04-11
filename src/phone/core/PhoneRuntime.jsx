import { useSystemStore } from "../stores/systemStore"
import { useNavigationStore } from "../stores/navigationStore"
import { useCallStore } from "../stores/callStore"
import { PhoneEngineProvider } from "./PhoneEngineProvider"
import { PhoneFrame } from "../frame/PhoneFrame"
import { PhoneRouteRenderer } from "../router/PhoneRouteRenderer"
import BootScreen from "../os/BootScreen"
import LockScreen from "../os/LockScreen"
import HomeScreen from "../os/HomeScreen"
import { NotificationBannerHost } from "../os/NotificationBannerHost"
import { NotificationCenter } from "../os/NotificationCenter"
import { ControlCenter } from "../os/ControlCenter"
import { PhoneModalHost } from "../os/PhoneModalHost"
import { PhoneSheetHost } from "../os/PhoneSheetHost"
import { SystemToastHost } from "../os/SystemToastHost"
import { t } from "./localization"

function CallOverlay() {
  const callStatus = useCallStore((s) => s.callStatus)
  const caller = useCallStore((s) => s.caller)
  const elapsed = useCallStore((s) => s.elapsed)
  const minimized = useCallStore((s) => s.minimized)
  const acceptCall = useCallStore((s) => s.acceptCall)
  const rejectCall = useCallStore((s) => s.rejectCall)
  const endCall = useCallStore((s) => s.endCall)
  const minimizeCall = useCallStore((s) => s.minimizeCall)
  const language = useSystemStore((s) => s.language)

  if (callStatus === "idle" || minimized) return null

  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
  const name = caller?.name || "Unknown"

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 250,
        background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          background: caller?.color || "#0a84ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        {caller?.initials || name[0]}
      </div>
      <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 14, opacity: 0.6, marginBottom: 32 }}>
        {callStatus === "ringing" ? t("call.incoming", language) : formatTime(elapsed)}
      </div>

      <div style={{ display: "flex", gap: 24 }}>
        {callStatus === "ringing" ? (
          <>
            <button
              onClick={rejectCall}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#ff453a",
                border: "none",
                color: "#fff",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              {t("call.reject", language)}
            </button>
            <button
              onClick={acceptCall}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#22c55e",
                border: "none",
                color: "#fff",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              {t("call.accept", language)}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={minimizeCall}
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {t("call.minimize", language)}
            </button>
            <button
              onClick={endCall}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                background: "#ff453a",
                border: "none",
                color: "#fff",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              {t("call.end", language)}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function PhoneRuntimeInner() {
  const bootPhase = useSystemStore((s) => s.bootPhase)
  const rootSurface = useNavigationStore((s) => s.rootSurface)
  const overlaySurface = useNavigationStore((s) => s.overlaySurface)
  const goHome = useNavigationStore((s) => s.goHome)
  const goBack = useNavigationStore((s) => s.goBack)

  let content = null
  if (bootPhase === "off" || bootPhase === "booting") {
    content = <BootScreen />
  } else if (bootPhase === "locked") {
    content = <LockScreen />
  } else if (rootSurface === "app") {
    content = <PhoneRouteRenderer />
  } else {
    content = <HomeScreen />
  }

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onDoubleClick={(e) => {
        e.preventDefault()
        goHome()
      }}
    >
      {content}
      <CallOverlay />
      {bootPhase === "unlocked" && overlaySurface === "notifications" && <NotificationCenter />}
      {bootPhase === "unlocked" && overlaySurface === "control-center" && <ControlCenter />}
      <NotificationBannerHost />
      <PhoneModalHost />
      <PhoneSheetHost />
      <SystemToastHost />
      {bootPhase === "unlocked" && rootSurface === "app" && (
        <div
          onClick={goBack}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100,
          }}
        >
          <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.3)" }} />
        </div>
      )}
    </div>
  )
}

export default function PhoneRuntime({
  mode = "interactive",
  initialLanguage = "tr",
  initialTheme = "dark",
}) {
  return (
    <PhoneEngineProvider mode={mode} initialLanguage={initialLanguage} initialTheme={initialTheme}>
      <PhoneFrame interactive={mode === "interactive"}>
        <PhoneRuntimeInner />
      </PhoneFrame>
    </PhoneEngineProvider>
  )
}
