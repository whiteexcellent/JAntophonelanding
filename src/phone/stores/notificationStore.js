import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useNotificationStore = create(immer((set) => ({
  bannerQueue: [],
  notificationCenter: [],
  lockscreenNotifications: [],
  badgeCounts: {},
  appPrefs: {},

  enqueueNotification: (notif) => set(s => {
    s.bannerQueue.push({ ...notif, id: notif.id || `n_${Date.now()}`, receivedAt: new Date().toISOString() })
    s.notificationCenter.unshift({ ...notif, id: notif.id || `n_${Date.now()}`, receivedAt: new Date().toISOString() })
    s.lockscreenNotifications.unshift({ ...notif, id: notif.id || `n_${Date.now()}`, receivedAt: new Date().toISOString() })
    if (notif.appId) {
      s.badgeCounts[notif.appId] = (s.badgeCounts[notif.appId] || 0) + 1
    }
  }),
  dismissBanner: () => set(s => { s.bannerQueue.shift() }),
  dismissNotification: (id) => set(s => {
    s.notificationCenter = s.notificationCenter.filter(n => n.id !== id)
    s.lockscreenNotifications = s.lockscreenNotifications.filter(n => n.id !== id)
  }),
  clearAll: () => set(s => {
    s.notificationCenter = []
    s.lockscreenNotifications = []
    s.badgeCounts = {}
  }),
  openNotification: (id) => set(s => {
    s.notificationCenter = s.notificationCenter.filter(n => n.id !== id)
  }),
  setNotificationPrefs: (appId, prefs) => set(s => { s.appPrefs[appId] = prefs }),
  clearBadge: (appId) => set(s => { s.badgeCounts[appId] = 0 }),
})))
