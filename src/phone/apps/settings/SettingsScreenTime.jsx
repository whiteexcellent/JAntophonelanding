import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const appUsageData = [
  { name: 'WhisApp', icon: '💬', minutes: 142, color: '#25D366' },
  { name: 'Vibeshot', icon: '📸', minutes: 98, color: '#E1306C' },
  { name: 'Messages', icon: '✉️', minutes: 64, color: '#0a84ff' },
  { name: 'Music', icon: '🎵', minutes: 38, color: '#fc3c44' },
  { name: 'Bank', icon: '🏦', minutes: 20, color: '#34c759' },
]

const maxMinutes = 142

export default function SettingsScreenTime() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'
  const subtextColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.screenTimeTitle', lang)}</h1>
      </div>

      {/* Daily Average */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '20px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, opacity: 0.5, marginBottom: 8 }}>{t('settings.dailyAverage', lang)}</div>
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
          4<span style={{ fontSize: 20, fontWeight: 500 }}>s</span>{' '}
          32<span style={{ fontSize: 20, fontWeight: 500 }}>dk</span>
        </div>
      </div>

      {/* Most Used Apps */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px 8px', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', opacity: 0.5 }}>
          {t('settings.mostUsed', lang)}
        </div>
        {appUsageData.map((app, i) => (
          <div key={app.name} style={{
            display: 'flex', alignItems: 'center', padding: '10px 16px', gap: 12,
            borderBottom: i < appUsageData.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
          }}>
            <span style={{ fontSize: 22, width: 32, textAlign: 'center' }}>{app.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{app.name}</div>
              <div style={{ height: 6, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 3,
                  width: `${(app.minutes / maxMinutes) * 100}%`,
                  background: app.color,
                  transition: 'width 0.3s ease',
                }} />
              </div>
            </div>
            <span style={{ fontSize: 13, color: subtextColor, minWidth: 40, textAlign: 'right' }}>
              {app.minutes >= 60 ? `${Math.floor(app.minutes / 60)}s ${app.minutes % 60}dk` : `${app.minutes}dk`}
            </span>
          </div>
        ))}
      </div>

      {/* Pickups */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '20px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 13, opacity: 0.5, marginBottom: 8 }}>{t('settings.pickups', lang)}</div>
        <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>47</div>
        <div style={{ fontSize: 13, opacity: 0.4, marginTop: 4 }}>{t('system.today', lang)}</div>
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
