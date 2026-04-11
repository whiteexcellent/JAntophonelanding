import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { useHomeStore } from '../../stores/homeStore'
import { t } from '../../core/localization'
import wallpapers from '../../data/wallpapers'

export default function SettingsWallpaper() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)
  const currentWallpaperId = useHomeStore(s => s.wallpaperId)
  const setWallpaper = useHomeStore(s => s.setWallpaper)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.wallpaper', lang)}</h1>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
        padding: '12px 16px',
      }}>
        {wallpapers.map(wp => {
          const isSelected = currentWallpaperId === wp.id
          return (
            <div
              key={wp.id}
              onClick={() => setWallpaper(wp.id)}
              style={{
                borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
                border: isSelected ? '3px solid #0a84ff' : `3px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              }}
            >
              <div style={{
                height: 140, background: wp.background,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                position: 'relative',
              }}>
                {isSelected && (
                  <div style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 26, height: 26, borderRadius: 13,
                    background: '#0a84ff', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 14, fontWeight: 700,
                  }}>
                    ✓
                  </div>
                )}
              </div>
              <div style={{
                padding: '10px 12px', fontSize: 13, fontWeight: 500,
                background: groupBg, textAlign: 'center',
              }}>
                {wp.name[lang] || wp.name.en}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
