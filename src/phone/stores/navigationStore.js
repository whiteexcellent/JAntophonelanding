import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useNavigationStore = create(immer((set, get) => ({
  rootSurface: 'home', // home, lockscreen, boot
  overlaySurface: null, // notifications, control-center
  currentAppId: null,
  routeStack: [],
  modalStack: [],
  sheetStack: [],
  overlayStack: [],
  lastHomePage: 0,
  lastRouteByApp: {},
  pendingIntent: null,
  returnRoute: null,
  sourceAppId: null,

  openApp: (appId, screen = 'main', params = {}, options = {}) => set(s => {
    const savedRoutes = s.lastRouteByApp[appId]
    if (screen === 'main' && savedRoutes?.length) {
      s.currentAppId = appId
      s.routeStack = [...savedRoutes]
      s.rootSurface = 'app'
      s.sourceAppId = options.sourceAppId || s.sourceAppId
      return
    }
    s.currentAppId = appId
    s.routeStack = [{ appId, screen: `${appId}.${screen}`, params, presentation: 'push' }]
    s.rootSurface = 'app'
    s.sourceAppId = options.sourceAppId || s.sourceAppId
  }),
  pushRoute: (screen, params = {}, presentation = 'push', options = {}) => set(s => {
    const appId = s.currentAppId
    s.routeStack.push({ appId, screen, params, presentation })
    if (options.sourceAppId) s.sourceAppId = options.sourceAppId
  }),
  replaceRoute: (screen, params = {}) => set(s => {
    if (s.routeStack.length > 0) {
      s.routeStack[s.routeStack.length - 1] = { appId: s.currentAppId, screen, params, presentation: 'push' }
    }
  }),
  popRoute: () => set(s => {
    if (s.routeStack.length > 1) {
      s.routeStack.pop()
    } else {
      if (s.currentAppId) {
        s.lastRouteByApp[s.currentAppId] = [...s.routeStack]
      }
      s.currentAppId = null
      s.routeStack = []
      s.rootSurface = 'home'
    }
  }),
  openModal: (content) => set(s => { s.modalStack.push(content) }),
  closeModal: () => set(s => { s.modalStack.pop() }),
  openSheet: (content) => set(s => { s.sheetStack.push(content) }),
  closeSheet: () => set(s => { s.sheetStack.pop() }),
  openOverlaySurface: (overlaySurface) => set(s => { s.overlaySurface = overlaySurface }),
  closeOverlaySurface: () => set(s => { s.overlaySurface = null }),
  toggleOverlaySurface: (overlaySurface) => set(s => {
    s.overlaySurface = s.overlaySurface === overlaySurface ? null : overlaySurface
  }),
  goBack: () => {
    const state = get()
    if (state.overlaySurface) { set(s => { s.overlaySurface = null }); return }
    if (state.sheetStack.length > 0) { set(s => { s.sheetStack.pop() }); return }
    if (state.modalStack.length > 0) { set(s => { s.modalStack.pop() }); return }
    if (state.routeStack.length > 1) { set(s => { s.routeStack.pop() }); return }
    set(s => {
      if (s.currentAppId) {
        s.lastRouteByApp[s.currentAppId] = [...s.routeStack]
      }
      s.currentAppId = null
      s.routeStack = []
      s.rootSurface = 'home'
    })
  },
  goHome: () => set(s => {
    if (s.currentAppId) {
      s.lastRouteByApp[s.currentAppId] = [...s.routeStack]
    }
    s.currentAppId = null
    s.routeStack = []
    s.modalStack = []
    s.sheetStack = []
    s.overlaySurface = null
    s.rootSurface = 'home'
  }),
  setLastHomePage: (p) => set(s => { s.lastHomePage = p }),
  resolveIntent: (intent) => set(s => {
    const currentRoute = s.routeStack.length > 0 ? s.routeStack[s.routeStack.length - 1] : null
    s.returnRoute = currentRoute
    s.sourceAppId = s.currentAppId
    s.currentAppId = intent.appId
    s.routeStack = [{ appId: intent.appId, screen: intent.screen, params: intent.params || {}, presentation: 'push' }]
    s.rootSurface = 'app'
    s.modalStack = []
    s.sheetStack = []
    s.overlaySurface = null
    s.pendingIntent = null
  }),
  setPendingIntent: (intent) => set(s => { s.pendingIntent = intent }),
  clearPendingIntent: () => set(s => { s.pendingIntent = null }),
  returnToSource: () => set(s => {
    if (s.returnRoute) {
      s.currentAppId = s.returnRoute.appId || null
      s.routeStack = s.returnRoute.appId ? [s.returnRoute] : []
      s.rootSurface = s.returnRoute.appId ? 'app' : 'home'
    } else {
      s.currentAppId = null
      s.routeStack = []
      s.rootSurface = 'home'
    }
    s.returnRoute = null
    s.sourceAppId = null
    s.overlaySurface = null
  }),
  getCurrentRoute: () => {
    const state = get()
    return state.routeStack.length > 0 ? state.routeStack[state.routeStack.length - 1] : null
  },
})))
