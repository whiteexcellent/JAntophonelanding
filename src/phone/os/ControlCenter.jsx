import {
  BatteryMedium,
  Bluetooth,
  Flashlight,
  MoonStar,
  Pause,
  Plane,
  Play,
  ScreenShare,
  Signal,
  SunMedium,
  Volume2,
  Wifi,
} from "lucide-react"
import { useSystemStore } from "../stores/systemStore"
import { useDeviceStore } from "../stores/deviceStore"
import { useNavigationStore } from "../stores/navigationStore"
import { useMediaStore } from "../stores/mediaStore"
import { getTrack } from "../data/music"
import { appleIosKit } from "../data/appleIosKit"
import { appleSketchControlCenterAssets } from "../data/sketchRuntimeAssets"
import { readLocalized } from "../core/localization"

const cc = appleIosKit.controlCenter

function SmallToggle({ icon: Icon, active = false, tint = "#0a84ff", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: cc.tiles.small.width,
        height: cc.tiles.small.height,
        borderRadius: cc.tiles.small.radius,
        border: "none",
        cursor: onClick ? "pointer" : "default",
        display: "grid",
        placeItems: "center",
        background: active ? tint : "rgba(28,28,30,0.88)",
        color: "#fff",
        boxShadow: active ? `0 18px 40px color-mix(in srgb, ${tint} 35%, transparent)` : "none",
      }}
    >
      <Icon size={22} strokeWidth={2.2} />
    </button>
  )
}

function WideSlider({ icon: Icon, label, value, onChange }) {
  return (
    <div
      style={{
        width: cc.tiles.wide.width,
        height: cc.tiles.wide.height,
        borderRadius: cc.tiles.wide.radius,
        background: "rgba(28,28,30,0.88)",
        color: "#fff",
        padding: "14px 16px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Icon size={16} strokeWidth={2.25} />
        <span style={{ fontSize: 12, fontWeight: 700 }}>{label}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ width: "100%" }}
      />
    </div>
  )
}

function ConnectivityGroup({
  flightMode,
  wifiEnabled,
  bluetoothEnabled,
  toggleFlightMode,
  toggleWifi,
  toggleBluetooth,
}) {
  return (
    <div
      style={{
        width: cc.tiles.group.width,
        height: cc.tiles.group.height,
        borderRadius: cc.tiles.large.radius,
        background: "rgba(22,26,38,0.88)",
        padding: 0,
        display: "grid",
        gridTemplateColumns: `repeat(2, ${cc.tiles.small.width}px)`,
        gridTemplateRows: `repeat(2, ${cc.tiles.small.height}px)`,
        gap: cc.tiles.group.innerGap,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <SmallToggle icon={Plane} active={flightMode} onClick={toggleFlightMode} tint="#ff9f0a" />
      <SmallToggle icon={Signal} active tint="#34c759" />
      <SmallToggle icon={Wifi} active={wifiEnabled} onClick={toggleWifi} tint="#0a84ff" />
      <SmallToggle icon={Bluetooth} active={bluetoothEnabled} onClick={toggleBluetooth} tint="#0a84ff" />
    </div>
  )
}

function MediaCard({ language, track, isPlaying, pauseTrack, resumeTrack }) {
  return (
    <div
      style={{
        width: cc.tiles.large.width,
        height: cc.tiles.large.height,
        borderRadius: cc.tiles.large.radius,
        background: "#0c1321",
        color: "#fff",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={appleSketchControlCenterAssets.albumArtwork}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.68,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(18,24,40,0.26), rgba(7,10,18,0.56) 62%, rgba(5,8,14,0.84))",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", color: "rgba(255,255,255,0.48)", textTransform: "uppercase" }}>
          Now Playing
        </div>
        <div style={{ marginTop: 12, fontSize: 18, fontWeight: 700, lineHeight: 1.08 }}>
          {track ? readLocalized(track.title, language, "Music") : "Audio Surface"}
        </div>
        <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,0.62)" }}>
          {track?.artist || "Janto Phone"}
        </div>
      </div>
      <button
        type="button"
        onClick={isPlaying ? pauseTrack : resumeTrack}
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
          border: "none",
          background: "rgba(255,255,255,0.14)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          position: "relative",
          zIndex: 1,
        }}
      >
        {isPlaying ? <Pause size={18} strokeWidth={2.2} /> : <Play size={18} strokeWidth={2.2} />}
      </button>
    </div>
  )
}

function WideUtility({ icon: Icon, label, active = false, tint = "#ffd60a", onClick, value }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: cc.tiles.wide.width,
        height: cc.tiles.wide.height,
        borderRadius: cc.tiles.wide.radius,
        border: "none",
        cursor: onClick ? "pointer" : "default",
        background: active ? tint : "rgba(28,28,30,0.88)",
        color: "#fff",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Icon size={18} strokeWidth={2.2} />
        <span style={{ fontSize: 13, fontWeight: 700 }}>{label}</span>
      </div>
      {value ? <span style={{ fontSize: 12, color: "rgba(255,255,255,0.72)" }}>{value}</span> : null}
    </button>
  )
}

export function ControlCenter() {
  const language = useSystemStore((s) => s.language)
  const closeOverlaySurface = useNavigationStore((s) => s.closeOverlaySurface)
  const toggleWifi = useSystemStore((s) => s.toggleWifi)
  const toggleBluetooth = useSystemStore((s) => s.toggleBluetooth)
  const toggleFlightMode = useSystemStore((s) => s.toggleFlightMode)
  const toggleLowPowerMode = useSystemStore((s) => s.toggleLowPowerMode)
  const wifiEnabled = useSystemStore((s) => s.wifiEnabled)
  const bluetoothEnabled = useSystemStore((s) => s.bluetoothEnabled)
  const flightMode = useSystemStore((s) => s.flightMode)
  const lowPowerMode = useSystemStore((s) => s.lowPowerMode)
  const brightness = useSystemStore((s) => s.brightness)
  const setBrightness = useSystemStore((s) => s.setBrightness)
  const volume = useSystemStore((s) => s.volume)
  const setVolume = useSystemStore((s) => s.setVolume)
  const batteryLevel = useDeviceStore((s) => s.batteryLevel)
  const isPlaying = useMediaStore((s) => s.isPlaying)
  const activeTrackId = useMediaStore((s) => s.activeTrackId)
  const pauseTrack = useMediaStore((s) => s.pauseTrack)
  const resumeTrack = useMediaStore((s) => s.resumeTrack)
  const track = activeTrackId ? getTrack(activeTrackId) : null

  return (
    <div
      onClick={closeOverlaySurface}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 195,
        background: "rgba(3,7,18,0.34)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: "absolute",
          top: cc.panel.top,
          right: cc.panel.right,
          width: cc.panel.width,
          height: cc.panel.height,
          borderRadius: cc.panel.radius,
          background: "linear-gradient(180deg, rgba(11,18,34,0.84), rgba(5,9,18,0.94))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.35)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          padding: cc.panel.padding,
          display: "flex",
          flexDirection: "column",
          gap: cc.panel.gap,
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: cc.panel.gap }}>
          <ConnectivityGroup
            flightMode={flightMode}
            wifiEnabled={wifiEnabled}
            bluetoothEnabled={bluetoothEnabled}
            toggleFlightMode={toggleFlightMode}
            toggleWifi={toggleWifi}
            toggleBluetooth={toggleBluetooth}
          />
          <MediaCard
            language={language}
            track={track}
            isPlaying={isPlaying}
            pauseTrack={pauseTrack}
            resumeTrack={resumeTrack}
          />
        </div>

        <div style={{ display: "flex", gap: cc.panel.gap }}>
          <WideSlider icon={SunMedium} label="Brightness" value={brightness} onChange={setBrightness} />
          <WideSlider icon={Volume2} label="Volume" value={volume} onChange={setVolume} />
        </div>

        <div style={{ display: "flex", gap: cc.panel.gap }}>
          <WideUtility icon={MoonStar} label="Low Power" active={lowPowerMode} tint="#ffd60a" onClick={toggleLowPowerMode} />
          <WideUtility icon={BatteryMedium} label="Battery" value={`${batteryLevel}%`} />
        </div>

        <div style={{ display: "flex", gap: cc.panel.gap, alignItems: "center" }}>
          <div
            style={{
              width: cc.tiles.group.width,
              display: "grid",
              gridTemplateColumns: `repeat(2, ${cc.tiles.small.width}px)`,
              gap: cc.tiles.group.innerGap,
            }}
          >
            <SmallToggle icon={Flashlight} tint="#6366f1" />
            <SmallToggle icon={ScreenShare} tint="#34c759" />
          </div>
          <WideUtility icon={ScreenShare} label="Screen Mirroring" />
        </div>
      </div>
    </div>
  )
}
