import { useSystemStore } from "../stores/systemStore"
import { useNavigationStore } from "../stores/navigationStore"
import { useDeviceStore } from "../stores/deviceStore"
import { useMediaStore } from "../stores/mediaStore"
import { useCallStore } from "../stores/callStore"
import { useNotificationStore } from "../stores/notificationStore"
import { getAppName, getAllApps } from "./appRegistry"
import { playgroundScenarios } from "./sceneRegistry"
import { notificationFixtures } from "../data/notifications"
import { t } from "./localization"

export default function PhoneInspectorPanel() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const bootPhase = useSystemStore((s) => s.bootPhase)
  const currentAppId = useNavigationStore((s) => s.currentAppId)
  const routeStack = useNavigationStore((s) => s.routeStack)
  const rootSurface = useNavigationStore((s) => s.rootSurface)
  const batteryLevel = useDeviceStore((s) => s.batteryLevel)
  const isCharging = useDeviceStore((s) => s.isCharging)
  const isPlaying = useMediaStore((s) => s.isPlaying)
  const callStatus = useCallStore((s) => s.callStatus)

  const setLanguage = useSystemStore((s) => s.setLanguage)
  const setTheme = useSystemStore((s) => s.setTheme)
  const lockPhone = useSystemStore((s) => s.lockPhone)
  const unlockPhone = useSystemStore((s) => s.unlockPhone)
  const setBatteryLevel = useDeviceStore((s) => s.setBatteryLevel)
  const startCharging = useDeviceStore((s) => s.startCharging)
  const stopCharging = useDeviceStore((s) => s.stopCharging)
  const enqueueNotification = useNotificationStore((s) => s.enqueueNotification)
  const clearAllNotifications = useNotificationStore((s) => s.clearAll)
  const startIncomingCall = useCallStore((s) => s.startIncomingCall)
  const openApp = useNavigationStore((s) => s.openApp)
  const goHome = useNavigationStore((s) => s.goHome)

  const currentRoute = routeStack.length > 0 ? routeStack[routeStack.length - 1] : null
  const currentAppLabel = currentAppId ? getAppName(currentAppId, language) : "-"
  const currentRouteLabel = currentRoute?.screen || "-"
  const allApps = getAllApps()

  const btnStyle = {
    padding: "7px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
  }

  const labelStyle = {
    fontSize: 10,
    fontWeight: 700,
    color: "rgba(255,255,255,0.42)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 6,
  }

  const resetRuntime = () => {
    useSystemStore.setState({
      bootPhase: "unlocked",
      lockState: "unlocked",
      themeMode: "dark",
      language: "tr",
      lowPowerMode: false,
    })
    useNavigationStore.setState({
      rootSurface: "home",
      currentAppId: null,
      routeStack: [],
      modalStack: [],
      sheetStack: [],
      pendingIntent: null,
    })
    useDeviceStore.setState({ batteryLevel: 87, isCharging: false, chargeSource: null })
    useMediaStore.setState({
      isPlaying: false,
      activeTrackId: null,
      miniPlayerVisible: false,
      playerPresentation: "hidden",
      elapsed: 0,
    })
    useCallStore.setState({
      callStatus: "idle",
      caller: null,
      callee: null,
      minimized: false,
      elapsed: 0,
      callType: null,
    })
    clearAllNotifications()
  }

  const activateScenario = (scenario) => {
    resetRuntime()

    const overrides = scenario.stateOverrides || {}
    if (overrides.system) Object.entries(overrides.system).forEach(([key, value]) => useSystemStore.setState({ [key]: value }))
    if (overrides.device) Object.entries(overrides.device).forEach(([key, value]) => useDeviceStore.setState({ [key]: value }))
    if (overrides.media) Object.entries(overrides.media).forEach(([key, value]) => useMediaStore.setState({ [key]: value }))
    if (overrides.call) Object.entries(overrides.call).forEach(([key, value]) => useCallStore.setState({ [key]: value }))

    if (scenario.id === "music-playing") {
      openApp("music", "player")
      return
    }

    if (scenario.id === "incoming-call") {
      startIncomingCall({ name: "Ahmet Kaya", initials: "AK", color: "#ff9500" }, "voice")
      return
    }

    if (scenario.onActivate === "floodNotifications") {
      goHome()
      notificationFixtures.slice(0, 4).forEach((notification, index) => {
        setTimeout(() => {
          enqueueNotification({ ...notification, id: `${notification.id}-${index}-${Date.now()}` })
        }, index * 150)
      })
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0c10",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        fontSize: 12,
        overflow: "auto",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      }}
    >
      <div
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontSize: 13,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ color: "#0a84ff" }}>&#9670;</span> Runtime Console
      </div>

      <div style={{ flex: 1, overflow: "auto", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            borderRadius: 12,
            padding: "12px 14px",
            background: "linear-gradient(180deg, rgba(10,132,255,0.14), rgba(10,132,255,0.04))",
            border: "1px solid rgba(10,132,255,0.18)",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.78)",
          }}
        >
          This panel controls the live phone on the right. Open apps, lock or unlock the device, inject notifications,
          and trigger focused scenarios without leaving the demo.
        </div>

        <div>
          <div style={labelStyle}>State</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div>Phase: <span style={{ color: "#22c55e" }}>{bootPhase}</span></div>
            <div>Surface: <span style={{ color: "#f59e0b" }}>{rootSurface}</span></div>
            <div>App: <span style={{ color: "#0a84ff" }}>{currentAppLabel}</span></div>
            <div>Route: <span style={{ color: "#8e8e93" }}>{currentRouteLabel}</span></div>
            <div>Battery: <span style={{ color: batteryLevel <= 20 ? "#ff453a" : "#22c55e" }}>{batteryLevel}%</span>{isCharging ? " Charging" : ""}</div>
            <div>Call: <span style={{ color: callStatus !== "idle" ? "#ff453a" : "#8e8e93" }}>{callStatus}</span></div>
            <div>Media: <span style={{ color: isPlaying ? "#ff2d55" : "#8e8e93" }}>{isPlaying ? "playing" : "idle"}</span></div>
          </div>
        </div>

        <div>
          <div style={labelStyle}>Quick Controls</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button style={btnStyle} onClick={unlockPhone}>Unlock</button>
            <button style={btnStyle} onClick={lockPhone}>Lock</button>
            <button style={btnStyle} onClick={goHome}>Home</button>
          </div>
        </div>

        <div>
          <div style={labelStyle}>Open App</div>
          <select
            onChange={(e) => {
              if (e.target.value) openApp(e.target.value)
            }}
            value=""
            style={{ width: "100%", padding: "7px 8px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", background: "#111", color: "#fff", fontSize: 12 }}
          >
            <option value="">{t("playground.selectApp", language)}</option>
            {allApps.map((app) => (
              <option key={app.id} value={app.id}>
                {getAppName(app.id, language)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div style={labelStyle}>Display</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button style={btnStyle} onClick={() => setTheme(themeMode === "dark" ? "light" : "dark")}>
              {themeMode === "dark" ? "Light" : "Dark"}
            </button>
            <button style={btnStyle} onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
              {language === "tr" ? "EN" : "TR"}
            </button>
          </div>
        </div>

        <div>
          <div style={labelStyle}>Battery</div>
          <input
            type="range"
            min="0"
            max="100"
            value={batteryLevel}
            onChange={(e) => setBatteryLevel(Number(e.target.value))}
            style={{ width: "100%" }}
          />
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <button style={btnStyle} onClick={() => (isCharging ? stopCharging() : startCharging("usb"))}>
              {isCharging ? "Unplug" : "Charge"}
            </button>
          </div>
        </div>

        <div>
          <div style={labelStyle}>Notifications</div>
          <button
            style={btnStyle}
            onClick={() => {
              const notification = notificationFixtures[Math.floor(Math.random() * notificationFixtures.length)]
              enqueueNotification({ ...notification, id: `${notification.id}-${Date.now()}` })
            }}
          >
            {t("playground.sendNotification", language)}
          </button>
        </div>

        <div>
          <div style={labelStyle}>Call</div>
          <button
            style={btnStyle}
            onClick={() => {
              startIncomingCall({ name: "Ahmet Kaya", initials: "AK", color: "#ff9500" }, "voice")
            }}
          >
            {t("playground.incomingCall", language)}
          </button>
        </div>

        <div>
          <div style={labelStyle}>Scenarios</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {playgroundScenarios.map((scenario) => (
              <button
                key={scenario.id}
                style={{ ...btnStyle, textAlign: "left" }}
                onClick={() => activateScenario(scenario)}
              >
                {typeof scenario.name === "object" ? scenario.name[language] || scenario.name.en : scenario.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            style={{ ...btnStyle, background: "rgba(255,69,58,0.2)", color: "#ff453a" }}
            onClick={resetRuntime}
          >
            {t("playground.reset", language)}
          </button>
        </div>
      </div>
    </div>
  )
}
