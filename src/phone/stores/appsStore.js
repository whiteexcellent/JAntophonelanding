import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useAppsStore = create(immer((set) => ({
  installedAppIds: [
    'messages', 'whisapp', 'vibeshot', 'bank', 'garage', 'music',
    'gallery', 'camera', 'notes', 'calendar', 'maps', 'vstore',
    'vault', 'emergency', 'battery', 'settings'
  ],
  appThemeOverrides: {},
  appPermissions: {},
  appDrafts: {},
  appUnreadCounts: { messages: 3, whisapp: 5, vibeshot: 2, bank: 1 },
  appSettings: {},

  setAppUnread: (appId, count) => set(s => { s.appUnreadCounts[appId] = count }),
  clearAppUnread: (appId) => set(s => { s.appUnreadCounts[appId] = 0 }),
  setAppDraft: (appId, draft) => set(s => { s.appDrafts[appId] = draft }),
  clearAppDraft: (appId) => set(s => { delete s.appDrafts[appId] }),
  setAppSetting: (appId, key, value) => set(s => {
    if (!s.appSettings[appId]) s.appSettings[appId] = {}
    s.appSettings[appId][key] = value
  }),
})))
