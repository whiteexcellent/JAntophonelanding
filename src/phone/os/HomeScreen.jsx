import { useMemo, useRef, useState } from "react"
import {
  Archive,
  ArrowUpRight,
  BatteryMedium,
  CalendarDays,
  Camera,
  CloudSun,
  House,
  LocateFixed,
  Minus,
  Music2,
  Pencil,
  ScanFace,
  Search,
  Share2,
  Star,
  SunMedium,
  Video,
  Wifi,
} from "lucide-react"
import { useSystemStore } from "../stores/systemStore"
import { useNavigationStore } from "../stores/navigationStore"
import { useHomeStore } from "../stores/homeStore"
import { useMediaStore } from "../stores/mediaStore"
import { getWallpaper } from "../data/wallpapers"
import { appleIosKit, getQuickActionsForApp } from "../data/appleIosKit"
import { getApp, getAppName } from "../core/appRegistry"
import { readLocalized, t } from "../core/localization"
import { getTrack } from "../data/music"
import { getIconPack } from "../data/themes"
import { getAppleSketchArtwork } from "../data/sketchRuntimeAssets"

const metrics = appleIosKit.iphoneHome
const quickMetrics = appleIosKit.quickActions.card
const APPLE_ICON_RADIUS = 18

const quickActionIconByName = {
  pencil: Pencil,
  star: Star,
  archive: Archive,
  camera: Camera,
  video: Video,
  "scan-face": ScanFace,
  house: House,
  share: Share2,
  locate: LocateFixed,
  wifi: Wifi,
  sun: SunMedium,
  battery: BatteryMedium,
  "arrow-up-right": ArrowUpRight,
  minus: Minus,
}

const widgetIconByType = {
  weather: CloudSun,
  date: CalendarDays,
  media: Music2,
  calendar: CalendarDays,
}

function pageDots(isDark) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: 48,
        height: 7,
      }}
    >
      <div style={{ width: 7, height: 7, borderRadius: 50, background: "#fff" }} />
      <div style={{ width: 7, height: 7, borderRadius: 50, background: isDark ? "#fff" : "#111", opacity: 0.3 }} />
    </div>
  )
}

function WidgetCard({ widget, isDark, language, track }) {
  const small = widget.size === "small"
  const width = small ? 164 : 348
  const titleColor = isDark ? "#fff" : "#111"
  const subColor = isDark ? "rgba(255,255,255,0.68)" : "rgba(17,17,17,0.56)"
  const WidgetGlyph = widgetIconByType[widget.type] || CloudSun

  let kicker = "Weather"
  let title = language === "tr" ? "Acik" : "Clear"
  let detail = "24°"

  if (widget.type === "date") {
    kicker = language === "tr" ? "Takvim" : "Calendar"
    title = new Date().toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", { weekday: "short" })
    detail = new Date().toLocaleDateString(language === "tr" ? "tr-TR" : "en-US", { day: "numeric", month: "long" })
  } else if (widget.type === "media") {
    kicker = language === "tr" ? "Simdi Caliyor" : "Now Playing"
    title = track ? readLocalized(track.title, language, "Music") : language === "tr" ? "Muzik" : "Music"
    detail = track?.artist || (language === "tr" ? "Ses Yuzeyi" : "Audio Surface")
  } else if (widget.type === "calendar") {
    kicker = language === "tr" ? "Program" : "Schedule"
    title = language === "tr" ? "2 Etkinlik" : "2 Events"
    detail = language === "tr" ? "Saat 14:00 sonrasi" : "After 2:00 PM"
  }

  return (
    <div
      style={{
        width,
        height: 164,
        borderRadius: 28,
        padding: 18,
        color: titleColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: isDark
          ? "linear-gradient(180deg, rgba(18,26,42,0.56), rgba(3,7,17,0.46))"
          : "linear-gradient(180deg, rgba(255,255,255,0.54), rgba(255,255,255,0.28))",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.45)"}`,
        boxShadow: "0 20px 50px rgba(0,0,0,0.14)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 14,
            background: isDark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.66)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <WidgetGlyph size={18} strokeWidth={2.3} />
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", opacity: 0.72 }}>{kicker.toUpperCase()}</span>
      </div>

      <div>
        <div style={{ fontSize: small ? 28 : 24, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.05em" }}>{detail}</div>
        <div style={{ marginTop: 6, fontSize: 15, fontWeight: 600, color: titleColor }}>{title}</div>
        <div
          style={{
            marginTop: 3,
            fontSize: 12,
            color: subColor,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {small ? kicker : language === "tr" ? "Apple kit metrikleriyle hizalandi" : "Aligned to Apple kit metrics"}
        </div>
      </div>
    </div>
  )
}

function AppIconImage({ app, iconPack, size, themeMode = "dark", shadow = true }) {
  const isSvg = app.icon.endsWith(".svg")
  const artworkUrl = getAppleSketchArtwork(app.id, themeMode)
  const tileStyle = {
    width: size,
    height: size,
    borderRadius: APPLE_ICON_RADIUS,
    background: artworkUrl
      ? "#0d1220"
      : `linear-gradient(180deg, color-mix(in srgb, ${app.color} 88%, white 12%) 0%, color-mix(in srgb, ${app.color} 66%, #08111f 34%) 100%)`,
    boxShadow: shadow ? "0 12px 30px rgba(0,0,0,0.2)" : "none",
    border: "1px solid rgba(255,255,255,0.12)",
    overflow: "hidden",
    position: "relative",
  }

  return (
    <div style={{ ...tileStyle, display: "grid", placeItems: "center" }}>
      {artworkUrl && (
        <img
          src={artworkUrl}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: artworkUrl
            ? "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(8,10,18,0.28) 58%, rgba(4,6,12,0.5))"
            : "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0))",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: size * 0.56,
          height: size * 0.56,
          display: "grid",
          placeItems: "center",
          borderRadius: 16,
          background: isSvg ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)",
          boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <img
          src={app.icon}
          alt=""
          style={{
            width: isSvg ? size * 0.34 : size * 0.42,
            height: isSvg ? size * 0.34 : size * 0.42,
            objectFit: "contain",
            borderRadius: 12,
            filter: isSvg ? "brightness(0) invert(1)" : iconPack.filter,
          }}
        />
      </div>
    </div>
  )
}

function QuickActionsSheet({ appId, language, isDark, position, onClose, onOpen }) {
  const app = getApp(appId)
  const actions = getQuickActionsForApp(appId)

  if (!app || !position) return null

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.23)",
          zIndex: 80,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: quickMetrics.width,
          height: quickMetrics.height,
          zIndex: 90,
          borderRadius: quickMetrics.radius,
          overflow: "hidden",
          background: isDark
            ? "linear-gradient(180deg, rgba(29,31,38,0.8), rgba(16,18,24,0.72))"
            : "linear-gradient(180deg, rgba(255,255,255,0.76), rgba(241,241,244,0.64))",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.55)"}`,
          boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      >
        <div
          style={{
            padding: `${quickMetrics.paddingTop}px 17px 6px`,
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {["App", "S", "M", "L"].map((item, index) => (
            <div
              key={item}
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                display: "grid",
                placeItems: "center",
                background: index === 2 ? (isDark ? "#121212" : "#ededed") : "transparent",
                color: isDark ? "#fff" : "#000",
                opacity: index === 0 ? 1 : 0.82,
                mixBlendMode: isDark ? "plus-lighter" : "plus-darker",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div style={{ padding: `0 ${quickMetrics.paddingX}px ${quickMetrics.paddingBottom}px` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, height: quickMetrics.itemHeight }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, overflow: "hidden" }}>
              <AppIconImage app={app} iconPack={{ filter: "none" }} size={20} themeMode={isDark ? "dark" : "light"} shadow={false} />
            </div>
            <span style={{ fontSize: 17, color: isDark ? "#f5f5f5" : "#1a1a1a", fontWeight: 500 }}>{getAppName(appId, language)}</span>
          </div>

          {actions.map((action) => {
            const ActionIcon = quickActionIconByName[action.icon] || ArrowUpRight

            return (
              <button
                key={action.id}
                type="button"
                onClick={() => {
                  onOpen(appId)
                  onClose()
                }}
                style={{
                  width: "100%",
                  height: quickMetrics.itemHeight,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  border: "none",
                  background: "transparent",
                  color: action.destructive ? "#ff383c" : isDark ? "#f5f5f5" : "#1a1a1a",
                  fontSize: 17,
                  textAlign: "left",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <span style={{ width: 20, display: "grid", placeItems: "center" }}>
                  <ActionIcon size={18} strokeWidth={2.2} />
                </span>
                <span>{action.label[language] || action.label.en}</span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default function HomeScreen() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const openApp = useNavigationStore((s) => s.openApp)
  const appLayout = useHomeStore((s) => s.appLayout)
  const dockAppIds = useHomeStore((s) => s.dockAppIds)
  const wallpaperId = useHomeStore((s) => s.wallpaperId)
  const editMode = useHomeStore((s) => s.editMode)
  const enterEditMode = useHomeStore((s) => s.enterEditMode)
  const exitEditMode = useHomeStore((s) => s.exitEditMode)
  const widgetInstances = useHomeStore((s) => s.widgetInstances)
  const removeWidget = useHomeStore((s) => s.removeWidget)
  const iconPackId = useHomeStore((s) => s.iconPackId)
  const miniPlayerVisible = useMediaStore((s) => s.miniPlayerVisible)
  const activeTrackId = useMediaStore((s) => s.activeTrackId)
  const isPlaying = useMediaStore((s) => s.isPlaying)
  const pauseTrack = useMediaStore((s) => s.pauseTrack)
  const resumeTrack = useMediaStore((s) => s.resumeTrack)

  const wallpaper = getWallpaper(wallpaperId)
  const isDark = themeMode === "dark"
  const track = activeTrackId ? getTrack(activeTrackId) : null
  const iconPack = getIconPack(iconPackId)
  const homeRef = useRef(null)
  const longPressRef = useRef(null)
  const [quickAppId, setQuickAppId] = useState(null)
  const [quickPosition, setQuickPosition] = useState(null)

  const widgetCards = useMemo(() => widgetInstances.slice(0, 3), [widgetInstances])
  const visibleApps = useMemo(() => appLayout.slice(0, widgetCards.length ? 12 : 16), [appLayout, widgetCards.length])

  const openQuickActions = (appId, anchorRect) => {
    const rootRect = homeRef.current?.getBoundingClientRect()
    if (!rootRect) return

    const x = Math.max(
      16,
      Math.min(anchorRect.left - rootRect.left - 32, rootRect.width - quickMetrics.width - 16),
    )
    const y = Math.max(
      90,
      Math.min(anchorRect.top - rootRect.top - quickMetrics.height - 18, rootRect.height - quickMetrics.height - 120),
    )

    setQuickAppId(appId)
    setQuickPosition({ x, y })
  }

  const handleContextOpen = (appId, event) => {
    event.preventDefault()
    openQuickActions(appId, event.currentTarget.getBoundingClientRect())
  }

  const startLongPress = (appId, event) => {
    const anchor = event.currentTarget
    longPressRef.current = window.setTimeout(() => {
      openQuickActions(appId, anchor.getBoundingClientRect())
    }, 420)
  }

  const clearLongPress = () => {
    if (longPressRef.current) {
      window.clearTimeout(longPressRef.current)
      longPressRef.current = null
    }
  }

  return (
    <div
      ref={homeRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: wallpaper.background,
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isDark
            ? "linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.14) 24%, rgba(0,0,0,0.06) 54%, rgba(0,0,0,0.18))"
            : "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.06) 28%, rgba(0,0,0,0.04) 60%, rgba(0,0,0,0.12))",
          pointerEvents: "none",
        }}
      />

      {editMode && (
        <div
          style={{
            position: "absolute",
            top: 54,
            right: 16,
            zIndex: 60,
          }}
        >
          <button
            type="button"
            onClick={exitEditMode}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "none",
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {t("system.done", language)}
          </button>
        </div>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingLeft: metrics.appGrid.paddingX,
          paddingRight: metrics.appGrid.paddingX,
          paddingTop: 86,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {widgetCards.length > 0 && (
          <>
            <div style={{ display: "flex", gap: 12 }}>
              {widgetCards.slice(0, 2).map((widget) => (
                <div key={widget.id} style={{ position: "relative" }}>
                  <WidgetCard widget={widget} isDark={isDark} language={language} track={track} />
                  {editMode && (
                    <button
                      type="button"
                      onClick={() => removeWidget(widget.id)}
                      style={{
                        position: "absolute",
                        top: -6,
                        left: -6,
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        border: "none",
                        background: "#ff383c",
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 1,
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>
            {widgetCards[2] && (
              <div style={{ position: "relative" }}>
                <WidgetCard widget={widgetCards[2]} isDark={isDark} language={language} track={track} />
                {editMode && (
                  <button
                    type="button"
                    onClick={() => removeWidget(widgetCards[2].id)}
                    style={{
                      position: "absolute",
                      top: -6,
                      left: -6,
                      width: 24,
                      height: 24,
                      borderRadius: 999,
                      border: "none",
                      background: "#ff383c",
                      color: "#fff",
                      fontSize: 16,
                      lineHeight: 1,
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          paddingLeft: metrics.appGrid.paddingX,
          paddingRight: metrics.appGrid.paddingX,
          paddingTop: widgetCards.length ? 22 : 148,
          paddingBottom: 180,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${metrics.appGrid.columns}, ${metrics.appGrid.slotWidth}px)`,
            justifyContent: "space-between",
            columnGap: metrics.appGrid.columnGap,
            rowGap: metrics.appGrid.rowGap,
          }}
        >
          {visibleApps.map((appId) => {
            const app = getApp(appId)
            if (!app) return null

            return (
              <button
                key={appId}
                type="button"
                onClick={() => {
                  if (!editMode) openApp(appId)
                }}
                onContextMenu={(event) => handleContextOpen(appId, event)}
                onPointerDown={(event) => startLongPress(appId, event)}
                onPointerUp={clearLongPress}
                onPointerLeave={clearLongPress}
                onDoubleClick={() => enterEditMode()}
                style={{
                  width: metrics.appGrid.slotWidth,
                  height: metrics.appGrid.slotHeight,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: metrics.appGrid.labelGap,
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  color: "#fff",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  animation: editMode ? "phone-jiggle 0.25s ease-in-out infinite" : "none",
                }}
              >
                <div style={{ position: "relative" }}>
                  <AppIconImage app={app} iconPack={iconPack} size={metrics.appGrid.iconSize} themeMode={themeMode} />
                  {editMode && (
                    <div
                      style={{
                        position: "absolute",
                        top: -4,
                        left: -4,
                        width: 24,
                        height: 24,
                        borderRadius: 999,
                        background: "#ff383c",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        fontSize: 14,
                        fontWeight: 700,
                      }}
                    >
                      -
                    </div>
                  )}
                </div>
                <span
                  style={{
                    width: metrics.appGrid.slotWidth,
                    fontSize: 11.5,
                    lineHeight: "14px",
                    fontWeight: 510,
                    textAlign: "center",
                    color: "#fff",
                    textShadow: "0 2px 25px rgba(0,0,0,0.9)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {getAppName(appId, language)}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {!editMode && (
        <>
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: metrics.searchPill.bottomOffset + 36,
              transform: "translateX(-50%)",
              zIndex: 8,
            }}
          >
            {pageDots(isDark)}
          </div>
          <button
            type="button"
            style={{
              position: "absolute",
              left: "50%",
              bottom: metrics.searchPill.bottomOffset,
              transform: "translateX(-50%)",
              width: metrics.searchPill.width,
              height: metrics.searchPill.height,
              borderRadius: metrics.searchPill.radius,
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: isDark ? "rgba(0,0,0,0.32)" : "rgba(17,17,17,0.18)",
              color: "#fff",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              cursor: "pointer",
              zIndex: 8,
              textShadow: "0 1px 12px rgba(0,0,0,0.6)",
            }}
          >
            <Search size={12} strokeWidth={2.6} />
            <span style={{ fontSize: 11.5, fontWeight: 590 }}>Search</span>
          </button>
        </>
      )}

      {miniPlayerVisible && track && !editMode && (
        <button
          type="button"
          onClick={() => openApp("music", "player")}
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 106,
            height: 58,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.12)",
            background: isDark ? "rgba(20,20,24,0.68)" : "rgba(255,255,255,0.68)",
            color: isDark ? "#fff" : "#111",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 12px",
            cursor: "pointer",
            textAlign: "left",
            zIndex: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Music2 size={18} strokeWidth={2.2} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {readLocalized(track.title, language, "Music")}
            </div>
            <div style={{ fontSize: 12, opacity: 0.58 }}>{track.artist}</div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              isPlaying ? pauseTrack() : resumeTrack()
            }}
            style={{
              border: "none",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </button>
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: metrics.dock.bottomOffset,
          height: metrics.dock.outerHeight,
          padding: `${metrics.dock.paddingTop}px 17px 17px`,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: metrics.dock.innerWidth,
            height: metrics.dock.innerHeight,
            margin: "0 auto",
            borderRadius: metrics.dock.radius,
            border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.55)"}`,
            background: isDark
              ? "linear-gradient(180deg, rgba(34,34,38,0.3), rgba(9,9,12,0.34))"
              : "linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0.18))",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${metrics.dock.paddingTop}px ${metrics.dock.paddingRight}px ${metrics.dock.paddingBottom}px ${metrics.dock.paddingLeft}px`,
            gap: metrics.dock.gap,
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          }}
        >
          {dockAppIds.map((appId) => {
            const app = getApp(appId)
            if (!app) return null

            return (
              <button
                key={appId}
                type="button"
                onClick={() => openApp(appId)}
                style={{
                  width: metrics.dock.iconSize,
                  height: metrics.dock.iconSize,
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <AppIconImage app={app} iconPack={iconPack} size={metrics.dock.iconSize} themeMode={themeMode} shadow={false} />
              </button>
            )
          })}
        </div>
      </div>

      <QuickActionsSheet
        appId={quickAppId}
        language={language}
        isDark={isDark}
        position={quickPosition}
        onClose={() => {
          setQuickAppId(null)
          setQuickPosition(null)
        }}
        onOpen={(appId) => openApp(appId)}
      />
    </div>
  )
}
