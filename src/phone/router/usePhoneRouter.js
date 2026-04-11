import { useNavigationStore } from '../stores/navigationStore'

export function usePhoneRouter() {
  const currentAppId = useNavigationStore(s => s.currentAppId)
  const routeStack = useNavigationStore(s => s.routeStack)
  const rootSurface = useNavigationStore(s => s.rootSurface)
  const openApp = useNavigationStore(s => s.openApp)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const popRoute = useNavigationStore(s => s.popRoute)
  const goBack = useNavigationStore(s => s.goBack)
  const goHome = useNavigationStore(s => s.goHome)
  const resolveIntent = useNavigationStore(s => s.resolveIntent)

  const currentRoute = routeStack.length > 0 ? routeStack[routeStack.length - 1] : null
  const canGoBack = routeStack.length > 1

  return {
    currentAppId,
    currentRoute,
    rootSurface,
    routeStack,
    canGoBack,
    openApp,
    push: pushRoute,
    pop: popRoute,
    back: goBack,
    home: goHome,
    resolveIntent,
    navigate: (screen, params = {}) => pushRoute(screen, params),
  }
}
