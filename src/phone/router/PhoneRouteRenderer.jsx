import { useState, useEffect, useCallback } from 'react'
import { useNavigationStore } from '../stores/navigationStore'
import { getRouteLoader } from './routeMap'

function LazyScreen({ loader, params }) {
  const [Component, setComponent] = useState(null)

  useEffect(() => {
    let cancelled = false
    if (loader) {
      loader().then(mod => {
        if (!cancelled) setComponent(() => mod.default || mod[Object.keys(mod)[0]])
      }).catch(() => {
        if (!cancelled) setComponent(() => FallbackScreen)
      })
    }
    return () => { cancelled = true }
  }, [loader])

  if (!Component) return <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>...</div>
  return <Component params={params} />
}

function FallbackScreen() {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4, fontSize: 14 }}>
      Screen not found
    </div>
  )
}

export function PhoneRouteRenderer() {
  const routeStack = useNavigationStore(s => s.routeStack)
  const currentRoute = routeStack.length > 0 ? routeStack[routeStack.length - 1] : null

  if (!currentRoute) return null

  const loader = getRouteLoader(currentRoute.screen)
  if (!loader) return <FallbackScreen />

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <LazyScreen key={currentRoute.screen} loader={loader} params={currentRoute.params || {}} />
    </div>
  )
}
