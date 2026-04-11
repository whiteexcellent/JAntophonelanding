import { appleSketchWallpapers } from "./sketchRuntimeAssets"

export const appleIosKit = {
  iphoneHome: {
    canvas: { width: 402, height: 874 },
    statusBarHeight: 62,
    statusBarPadding: { top: 21, right: 24, bottom: 19, left: 24 },
    appGrid: {
      paddingTop: 28.666,
      paddingX: 26,
      columnGap: 12,
      rowGap: 17.333,
      slotWidth: 72,
      slotHeight: 83,
      iconSize: 64,
      labelGap: 5,
      columns: 4,
    },
    searchPill: {
      width: 78,
      height: 30,
      bottomOffset: 140,
      radius: 100,
    },
    dock: {
      outerWidth: 402,
      outerHeight: 140,
      innerWidth: 368,
      innerHeight: 103,
      radius: 38,
      gap: 29,
      paddingTop: 20,
      paddingRight: 19,
      paddingBottom: 19,
      paddingLeft: 19,
      iconSize: 64,
      bottomOffset: 17,
    },
  },
  quickActions: {
    card: {
      width: 250,
      height: 335,
      radius: 30,
      itemHeight: 42,
      widgetRowHeight: 38,
      paddingX: 26,
      paddingTop: 7.5,
      paddingBottom: 11,
      gap: 17.5,
    },
    actions: {
      messages: [
        { id: "compose", icon: "pencil", label: { tr: "Yeni Mesaj", en: "New Message" } },
        { id: "favorites", icon: "star", label: { tr: "Favoriler", en: "Favorites" } },
        { id: "archive", icon: "archive", label: { tr: "Arsiv", en: "Archive" } },
      ],
      camera: [
        { id: "photo", icon: "camera", label: { tr: "Fotograf Cek", en: "Take Photo" } },
        { id: "video", icon: "video", label: { tr: "Video Kaydet", en: "Record Video" } },
        { id: "portrait", icon: "scan-face", label: { tr: "Portre", en: "Portrait" } },
      ],
      maps: [
        { id: "home", icon: "house", label: { tr: "Eve Git", en: "Go Home" } },
        { id: "share", icon: "share", label: { tr: "Konum Paylas", en: "Share Location" } },
        { id: "search", icon: "locate", label: { tr: "Yakinda Ara", en: "Search Nearby" } },
      ],
      settings: [
        { id: "wifi", icon: "wifi", label: { tr: "Wi-Fi", en: "Wi-Fi" } },
        { id: "display", icon: "sun", label: { tr: "Ekran", en: "Display" } },
        { id: "battery", icon: "battery", label: { tr: "Pil", en: "Battery" } },
      ],
      default: [
        { id: "open", icon: "arrow-up-right", label: { tr: "Ac", en: "Open" } },
        { id: "share", icon: "share", label: { tr: "Paylas", en: "Share" } },
        { id: "remove", icon: "minus", label: { tr: "Kaldir", en: "Remove App" }, destructive: true },
      ],
    },
  },
  controlCenter: {
    canvas: { width: 402, height: 874 },
    panel: {
      width: 327,
      height: 497,
      top: 68,
      right: 20,
      radius: 34,
      padding: 18,
      gap: 17,
    },
    tiles: {
      small: { width: 68, height: 68, radius: 22 },
      wide: { width: 155, height: 69, radius: 24 },
      large: { width: 155, height: 155, radius: 28 },
      group: { width: 155, height: 155, innerGap: 19 },
    },
  },
  lockScreen: {
    controls: {
      size: 58,
      bottomOffset: 48,
      sideOffset: 24,
    },
    clock: {
      topOffset: 86,
      timeSize: 92,
      dateSize: 22,
    },
  },
}

export const appleWallpapers = appleSketchWallpapers

export function getQuickActionsForApp(appId) {
  return appleIosKit.quickActions.actions[appId] || appleIosKit.quickActions.actions.default
}
