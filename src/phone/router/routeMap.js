// Janto Phone - Route Map
// Maps route strings to component lazy imports

const routeMap = {
  // Settings
  'settings.main': () => import('../apps/settings/SettingsMain'),
  'settings.account': () => import('../apps/settings/SettingsAccount'),
  'settings.notifications.index': () => import('../apps/settings/SettingsNotifications'),
  'settings.screenTime': () => import('../apps/settings/SettingsScreenTime'),
  'settings.language': () => import('../apps/settings/SettingsLanguage'),
  'settings.theme': () => import('../apps/settings/SettingsTheme'),
  'settings.wallpaper': () => import('../apps/settings/SettingsWallpaper'),
  'settings.about': () => import('../apps/settings/SettingsAbout'),
  'settings.general': () => import('../apps/settings/SettingsGeneral'),
  'settings.displayBrightness': () => import('../apps/settings/SettingsDisplay'),
  'settings.soundsHaptics': () => import('../apps/settings/SettingsSounds'),
  'settings.privacy': () => import('../apps/settings/SettingsPrivacy'),
  'settings.help': () => import('../apps/settings/SettingsHelp'),

  // Music
  'music.home': () => import('../apps/music/MusicHome'),
  'music.player': () => import('../apps/music/MusicPlayer'),
  'music.search': () => import('../apps/music/MusicSearch'),
  'music.library': () => import('../apps/music/MusicLibrary'),

  // Garage
  'garage.list': () => import('../apps/garage/GarageList'),
  'garage.vehicleDetail': () => import('../apps/garage/GarageDetail'),

  // Messages
  'messages.list': () => import('../apps/messages/MessagesList'),
  'messages.thread': () => import('../apps/messages/MessagesThread'),

  // WhisApp
  'whisapp.inbox': () => import('../apps/whisapp/WhisAppInbox'),
  'whisapp.thread': () => import('../apps/whisapp/WhisAppThread'),
  'whisapp.profile': () => import('../apps/whisapp/WhisAppProfile'),

  // Vibeshot
  'vibeshot.auth.login': () => import('../apps/vibeshot/VibeshotLogin'),
  'vibeshot.feed': () => import('../apps/vibeshot/VibeshotFeed'),
  'vibeshot.comments': () => import('../apps/vibeshot/VibeshotComments'),
  'vibeshot.profile': () => import('../apps/vibeshot/VibeshotProfile'),
  'vibeshot.notifications': () => import('../apps/vibeshot/VibeshotNotifications'),
  'vibeshot.settings': () => import('../apps/vibeshot/VibeshotSettings'),
  'vibeshot.settingsPrivacy': () => import('../apps/vibeshot/VibeshotSettings'),

  // Bank
  'bank.accounts': () => import('../apps/bank/BankAccounts'),
  'bank.accountDetail': () => import('../apps/bank/BankDetail'),
  'bank.transfer': () => import('../apps/bank/BankTransfer'),
  'bank.history': () => import('../apps/bank/BankHistory'),

  // Maps
  'maps.main': () => import('../apps/maps/MapsMain'),
  'maps.sharedLocation': () => import('../apps/maps/MapsSharedLocation'),

  // Emergency
  'emergency.main': () => import('../apps/emergency/EmergencyMain'),
  'emergency.report': () => import('../apps/emergency/EmergencyReport'),

  // Gallery
  'gallery.grid': () => import('../apps/gallery/GalleryGrid'),
  'gallery.preview': () => import('../apps/gallery/GalleryPreview'),

  // Camera
  'camera.capture': () => import('../apps/camera/CameraCapture'),

  // Notes
  'notes.list': () => import('../apps/notes/NotesList'),
  'notes.detail': () => import('../apps/notes/NotesDetail'),

  // Calendar
  'calendar.month': () => import('../apps/calendar/CalendarMonth'),

  // V Store
  'vstore.main': () => import('../apps/vstore/VStoreMain'),

  // Vault
  'vault.main': () => import('../apps/vault/VaultMain'),

  // Battery
  'battery.main': () => import('../apps/battery/BatteryMain'),
}

export function getRouteLoader(screen) {
  return routeMap[screen] || null
}

export default routeMap
