import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const themes = [
  { mode: 'dark', labelKey: 'settings.darkMode', icon: '🌙' },
  { mode: 'light', labelKey: 'settings.lightMode', icon: '☀️' },
]

export default function SettingsTheme() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const themeMode = useSystemStore(s => s.themeMode)
  const setTheme = useSystemStore(s => s.setTheme)
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.theme', lang)}</h1>
      </div>

      {/* Theme preview cards */}
      <div style={{ display: 'flex', gap: 12, padding: '12px 16px' }}>
        {themes.map(item => {
          const isSelected = themeMode === item.mode
          const previewBg = item.mode === 'dark' ? '#1c1c1e' : '#f2f2f7'
          const previewText = item.mode === 'dark' ? '#fff' : '#000'
          return (
            <div
              key={item.mode}
              onClick={() => setTheme(item.mode)}
              style={{
                flex: 1, borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
                border: isSelected ? '3px solid #0a84ff' : `3px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              }}
            >
              <div style={{
                height: 100, background: previewBg, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>
                <span style={{ fontSize: 28 }}>{item.icon}</span>
                <div style={{ width: '60%', height: 6, borderRadius: 3, background: item.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)' }} />
                <div style={{ width: '40%', height: 6, borderRadius: 3, background: item.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)' }} />
              </div>
              <div style={{
                padding: '10px 0', textAlign: 'center', fontSize: 14, fontWeight: 500,
                background: groupBg, color: isSelected ? '#0a84ff' : undefined,
              }}>
                {t(item.labelKey, lang)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Selection list */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {themes.map((item, i) => (
          <div
            key={item.mode}
            onClick={() => setTheme(item.mode)}
            style={{
              display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
              cursor: 'pointer',
              borderBottom: i < themes.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
            }}
          >
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>{t(item.labelKey, lang)}</span>
            {themeMode === item.mode && <span style={{ fontSize: 20, color: '#0a84ff', fontWeight: 600 }}>✓</span>}
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
