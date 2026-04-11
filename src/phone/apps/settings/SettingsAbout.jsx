import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const aboutData = [
  { labelKey: null, label: 'Device', value: 'Janto Phone Pro' },
  { labelKey: 'settings.version', value: '2.4.1' },
  { labelKey: 'settings.storage', value: '12.4 GB / 50 GB' },
  { labelKey: null, label: 'Serial', value: 'JNTP-2024-001' },
  { labelKey: null, label: 'Model', value: 'JP-Pro-X1' },
  { labelKey: null, label: 'OS', value: 'JantoOS 2.4' },
]

export default function SettingsAbout() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  const getLabel = (item) => {
    if (item.labelKey) return t(item.labelKey, lang)
    if (lang === 'tr') {
      const trLabels = { 'Device': 'Cihaz', 'Serial': 'Seri No', 'Model': 'Model', 'OS': 'IS' }
      return trLabels[item.label] || item.label
    }
    return item.label
  }

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.about', lang)}</h1>
      </div>

      {/* Device icon */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <div style={{
          width: 80, height: 140, borderRadius: 16,
          border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
        }}>
          <span style={{ fontSize: 36 }}>📱</span>
        </div>
      </div>

      {/* Device info */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {aboutData.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', minHeight: 48, padding: '0 16px',
            borderBottom: i < aboutData.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
          }}>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>{getLabel(item)}</span>
            <span style={{ fontSize: 15, opacity: 0.5 }}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Storage bar */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '16px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{t('settings.storage', lang)}</div>
        <div style={{ height: 8, borderRadius: 4, background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 4, width: '24.8%',
            background: 'linear-gradient(90deg, #0a84ff 0%, #5856d6 100%)',
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, opacity: 0.5 }}>
          <span>12.4 GB</span>
          <span>50 GB</span>
        </div>
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
