import { useSystemStore } from '../stores/systemStore'
import { PhoneStatusBar } from './PhoneStatusBar'
import { PhoneDynamicIsland } from './PhoneDynamicIsland'
import { PhoneGestureBar } from './PhoneGestureBar'
import { PhoneTopGestures } from './PhoneTopGestures'
import { getThemeManifest } from '../data/themes'

export function PhoneViewport({ children }) {
  const themeMode = useSystemStore(s => s.themeMode)
  const themeId = useSystemStore(s => s.themeId)
  const theme = getThemeManifest(themeId)

  return (
    <div
      className="phone-viewport"
      style={{
        background: theme.surfaceTokens.screen,
        color: theme.textTokens.primary,
      }}
    >
      <div
        className="phone-content"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
      <PhoneDynamicIsland theme={themeMode} />
      <PhoneStatusBar theme={themeMode} />
      <PhoneTopGestures />
      <PhoneGestureBar theme={themeMode} />
    </div>
  )
}
