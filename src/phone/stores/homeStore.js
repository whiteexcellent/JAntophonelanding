import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useHomeStore = create(immer((set) => ({
  pages: [0],
  dockAppIds: ['messages', 'camera', 'maps', 'settings'],
  dockLayout: ['messages', 'camera', 'maps', 'settings'],
  currentPage: 0,
  editMode: false,
  wallpaperId: 'dark-iridescent',
  wallpaperLockId: 'dark-iridescent',
  wallpaperHomeId: 'dark-iridescent',
  caseId: 'graphite',
  iconPackId: 'classic',
  widgetInstances: [
    { id: 'w1', type: 'weather', size: 'small', position: { row: 0, col: 0 } },
    { id: 'w2', type: 'date', size: 'small', position: { row: 0, col: 1 } },
    { id: 'w3', type: 'media', size: 'medium', position: { row: 1, col: 0 } },
  ],
  widgetLayout: [
    { id: 'w1', type: 'weather', size: 'small', position: { row: 0, col: 0 } },
    { id: 'w2', type: 'date', size: 'small', position: { row: 0, col: 1 } },
    { id: 'w3', type: 'media', size: 'medium', position: { row: 1, col: 0 } },
  ],
  appLayout: [
    'messages', 'whisapp', 'vibeshot', 'bank',
    'garage', 'music', 'gallery', 'camera',
    'notes', 'calendar', 'maps', 'vstore',
    'vault', 'emergency', 'battery', 'settings'
  ],
  searchOpen: false,

  enterEditMode: () => set(s => { s.editMode = true }),
  exitEditMode: () => set(s => { s.editMode = false }),
  moveApp: (fromIdx, toIdx) => set(s => {
    const item = s.appLayout.splice(fromIdx, 1)[0]
    s.appLayout.splice(toIdx, 0, item)
  }),
  moveWidget: (id, position) => set(s => {
    const w = s.widgetInstances.find(w => w.id === id)
    const layoutWidget = s.widgetLayout.find(w => w.id === id)
    if (w) w.position = position
    if (layoutWidget) layoutWidget.position = position
  }),
  addWidget: (widget) => set(s => {
    s.widgetInstances.push(widget)
    s.widgetLayout.push(widget)
  }),
  addWidgetFromType: (type, size = 'small') => set(s => {
    const widget = {
      id: `w${Date.now()}`,
      type,
      size,
      position: { row: s.widgetInstances.length, col: 0 },
    }
    s.widgetInstances.push(widget)
    s.widgetLayout.push(widget)
  }),
  removeWidget: (id) => set(s => {
    s.widgetInstances = s.widgetInstances.filter(w => w.id !== id)
    s.widgetLayout = s.widgetLayout.filter(w => w.id !== id)
  }),
  setWallpaper: (id) => set(s => {
    s.wallpaperId = id
    s.wallpaperHomeId = id
    s.wallpaperLockId = id
  }),
  setWallpaperTarget: (target, id) => set(s => {
    if (target === 'home' || target === 'both') {
      s.wallpaperHomeId = id
      s.wallpaperId = id
    }
    if (target === 'lock' || target === 'both') {
      s.wallpaperLockId = id
    }
  }),
  setCase: (id) => set(s => { s.caseId = id }),
  setIconPack: (id) => set(s => { s.iconPackId = id }),
  setCurrentPage: (p) => set(s => { s.currentPage = p }),
  resetHomeLayout: () => set(s => {
    s.appLayout = ['messages', 'whisapp', 'vibeshot', 'bank', 'garage', 'music', 'gallery', 'camera', 'notes', 'calendar', 'maps', 'vstore', 'vault', 'emergency', 'battery', 'settings']
    s.dockAppIds = ['messages', 'camera', 'maps', 'settings']
    s.dockLayout = ['messages', 'camera', 'maps', 'settings']
    s.widgetInstances = [
      { id: 'w1', type: 'weather', size: 'small', position: { row: 0, col: 0 } },
      { id: 'w2', type: 'date', size: 'small', position: { row: 0, col: 1 } },
      { id: 'w3', type: 'media', size: 'medium', position: { row: 1, col: 0 } },
    ]
    s.widgetLayout = [...s.widgetInstances]
  }),
  openSearch: () => set(s => { s.searchOpen = true }),
  closeSearch: () => set(s => { s.searchOpen = false }),
  setDockLayout: (dockLayout) => set(s => {
    s.dockLayout = dockLayout
    s.dockAppIds = dockLayout
  }),
  applyThemePresentation: ({ wallpaperLockId, wallpaperHomeId, iconPackId, caseVariant }) => set(s => {
    if (wallpaperLockId) s.wallpaperLockId = wallpaperLockId
    if (wallpaperHomeId) {
      s.wallpaperHomeId = wallpaperHomeId
      s.wallpaperId = wallpaperHomeId
    }
    if (iconPackId) s.iconPackId = iconPackId
    if (caseVariant) s.caseId = caseVariant
  }),
})))
