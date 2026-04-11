import { readNormalized } from './text'

const appRegistry = {
  messages: {
    id: 'messages',
    name: { tr: 'Mesajlar', en: 'Messages' },
    icon: '/ekosistem/messages.png',
    color: '#22c55e',
    defaultScreen: 'messages.list',
    category: 'social',
  },
  whisapp: {
    id: 'whisapp',
    name: { tr: 'WhisApp', en: 'WhisApp' },
    icon: '/ekosistem/whisapp.svg',
    color: '#25d366',
    defaultScreen: 'whisapp.inbox',
    category: 'social',
  },
  vibeshot: {
    id: 'vibeshot',
    name: { tr: 'Vibeshot', en: 'Vibeshot' },
    icon: '/ekosistem/vibeshot.svg',
    color: '#e1306c',
    defaultScreen: 'vibeshot.feed',
    category: 'social',
  },
  bank: {
    id: 'bank',
    name: { tr: 'Banka', en: 'Bank' },
    icon: '/ekosistem/bank.svg',
    color: '#0a84ff',
    defaultScreen: 'bank.accounts',
    category: 'finance',
  },
  garage: {
    id: 'garage',
    name: { tr: 'Garaj', en: 'Garage' },
    icon: '/ekosistem/garage.svg',
    color: '#f59e0b',
    defaultScreen: 'garage.list',
    category: 'utility',
  },
  music: {
    id: 'music',
    name: { tr: 'Muzik', en: 'Music' },
    icon: '/ekosistem/rythm-sync.png',
    color: '#ff2d55',
    defaultScreen: 'music.home',
    category: 'media',
  },
  gallery: {
    id: 'gallery',
    name: { tr: 'Galeri', en: 'Gallery' },
    icon: '/ekosistem/gallery.png',
    color: '#ff9500',
    defaultScreen: 'gallery.grid',
    category: 'media',
  },
  camera: {
    id: 'camera',
    name: { tr: 'Kamera', en: 'Camera' },
    icon: '/ekosistem/camera.png',
    color: '#8e8e93',
    defaultScreen: 'camera.capture',
    category: 'media',
  },
  notes: {
    id: 'notes',
    name: { tr: 'Notlar', en: 'Notes' },
    icon: '/ekosistem/notes.png',
    color: '#ffcc00',
    defaultScreen: 'notes.list',
    category: 'utility',
  },
  calendar: {
    id: 'calendar',
    name: { tr: 'Takvim', en: 'Calendar' },
    icon: '/ekosistem/calendar.svg',
    color: '#ff3b30',
    defaultScreen: 'calendar.month',
    category: 'utility',
  },
  maps: {
    id: 'maps',
    name: { tr: 'Haritalar', en: 'Maps' },
    icon: '/ekosistem/maps.png',
    color: '#34c759',
    defaultScreen: 'maps.main',
    category: 'utility',
  },
  vstore: {
    id: 'vstore',
    name: { tr: 'V Store', en: 'V Store' },
    icon: '/ekosistem/app-store.png',
    color: '#0a84ff',
    defaultScreen: 'vstore.main',
    category: 'system',
  },
  vault: {
    id: 'vault',
    name: { tr: 'Kasa', en: 'Vault' },
    icon: '/ekosistem/vault.svg',
    color: '#8e8e93',
    defaultScreen: 'vault.main',
    category: 'system',
  },
  emergency: {
    id: 'emergency',
    name: { tr: 'Acil Durum', en: 'Emergency' },
    icon: '/ekosistem/emergency.png',
    color: '#ff453a',
    defaultScreen: 'emergency.main',
    category: 'system',
  },
  battery: {
    id: 'battery',
    name: { tr: 'Pil', en: 'Battery' },
    icon: '/ekosistem/battery.png',
    color: '#34c759',
    defaultScreen: 'battery.main',
    category: 'system',
  },
  settings: {
    id: 'settings',
    name: { tr: 'Ayarlar', en: 'Settings' },
    icon: '/ekosistem/settings.png',
    color: '#8e8e93',
    defaultScreen: 'settings.main',
    category: 'system',
  },
}

export function getApp(appId) {
  return appRegistry[appId] || null
}

export function getAppName(appId, lang = 'tr') {
  const app = appRegistry[appId]
  return app ? readNormalized(app.name, lang, appId) : appId
}

export function getAllApps() {
  return Object.values(appRegistry)
}

export function getAppsByCategory(category) {
  return Object.values(appRegistry).filter((app) => app.category === category)
}

export default appRegistry
