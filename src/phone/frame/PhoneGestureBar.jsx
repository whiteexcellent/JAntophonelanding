import { useNavigationStore } from '../stores/navigationStore'

export function PhoneGestureBar({ theme }) {
  const isDark = theme === 'dark'
  const rootSurface = useNavigationStore((s) => s.rootSurface)
  const goHome = useNavigationStore((s) => s.goHome)

  return (
    <div
      className="phone-gesture-bar"
      onClick={() => {
        if (rootSurface === 'app') goHome()
      }}
      style={{
        background: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
        cursor: rootSurface === 'app' ? 'pointer' : 'default',
      }}
    />
  )
}
