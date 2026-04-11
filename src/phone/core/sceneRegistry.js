export const heroScenes = [
  {
    id: "lockscreen",
    duration: 3500,
    route: null,
    surface: "lockscreen",
    stateOverrides: {
      system: { bootPhase: "locked", lockState: "locked", themeMode: "dark" },
      device: { batteryLevel: 87, isCharging: false },
    },
  },
  {
    id: "home",
    duration: 3500,
    route: null,
    surface: "home",
    stateOverrides: {
      system: { bootPhase: "unlocked", lockState: "unlocked", themeMode: "dark" },
    },
  },
  {
    id: "widget-edit",
    duration: 3500,
    route: null,
    surface: "home",
    stateOverrides: {
      system: { bootPhase: "unlocked", lockState: "unlocked" },
      home: { editMode: true },
    },
  },
  {
    id: "music-player",
    duration: 3500,
    route: { appId: "music", screen: "music.player", params: {} },
    surface: "app",
    stateOverrides: {
      system: { bootPhase: "unlocked" },
      media: { activeTrackId: "t1", isPlaying: true, elapsed: 45, duration: 210 },
    },
  },
  {
    id: "garage-detail",
    duration: 3500,
    route: { appId: "garage", screen: "garage.vehicleDetail", params: { vehicleId: "v1" } },
    surface: "app",
    stateOverrides: {
      system: { bootPhase: "unlocked" },
    },
  },
  {
    id: "settings-account",
    duration: 3500,
    route: { appId: "settings", screen: "settings.account", params: {} },
    surface: "app",
    stateOverrides: {
      system: { bootPhase: "unlocked" },
    },
  },
]

export const playgroundScenarios = [
  {
    id: "default",
    name: { tr: "Varsayilan", en: "Default" },
    description: { tr: "Standart telefon durumu", en: "Standard phone state" },
    stateOverrides: {},
  },
  {
    id: "low-battery",
    name: { tr: "Dusuk Pil", en: "Low Battery" },
    description: { tr: "Pil %5 ve dusuk guc modu", en: "Battery at 5% with low power mode" },
    stateOverrides: {
      device: { batteryLevel: 5 },
      system: { lowPowerMode: true },
    },
  },
  {
    id: "charging",
    name: { tr: "Sarj Oluyor", en: "Charging" },
    description: { tr: "Telefon sarjda", en: "Phone is charging" },
    stateOverrides: {
      device: { isCharging: true, chargeSource: "usb", batteryLevel: 42 },
    },
  },
  {
    id: "incoming-call",
    name: { tr: "Gelen Arama", en: "Incoming Call" },
    description: { tr: "Bir arama geliyor", en: "An incoming call" },
    stateOverrides: {
      call: { callStatus: "ringing", callType: "voice", caller: { name: "Ahmet Kaya", initials: "AK" } },
    },
  },
  {
    id: "music-playing",
    name: { tr: "Muzik Caliyor", en: "Music Playing" },
    description: { tr: "Arka planda muzik caliyor", en: "Music playing in background" },
    stateOverrides: {
      media: { activeTrackId: "t1", isPlaying: true, elapsed: 90, duration: 210, miniPlayerVisible: true },
    },
  },
  {
    id: "notifications-flood",
    name: { tr: "Bildirim Seli", en: "Notification Flood" },
    description: { tr: "Coklu bildirim senaryosu", en: "Multiple notifications scenario" },
    stateOverrides: {},
    onActivate: "floodNotifications",
  },
]

export default heroScenes
