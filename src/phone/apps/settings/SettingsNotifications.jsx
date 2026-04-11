import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

function SubPage({ title, children }) {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)
  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '0 16px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{title}</h1>
      </div>
      {children}
      <div style={{ height: 40 }} />
    </div>
  )
}

export function SettingsNotifications() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const previewPolicy = useSystemStore(s => s.previewPolicy)
  const setPreviewPolicy = useSystemStore(s => s.setPreviewPolicy)
  const groupBg = isDark ? '#1c1c1e' : '#fff'
  const policies = ['always', 'whenUnlocked', 'never']
  return (
    <SubPage title={t('settings.notifications', lang)}>
      <div style={{ padding: '8px 16px', fontSize: 13, fontWeight: 600, opacity: 0.4, textTransform: 'uppercase' }}>{t('settings.previewPolicy', lang)}</div>
      <div style={{ margin: '0 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {policies.map(p => (
          <div key={p} onClick={() => setPreviewPolicy(p)} style={{
            display: 'flex', alignItems: 'center', minHeight: 48, padding: '0 16px', cursor: 'pointer',
            borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
          }}>
            <span style={{ flex: 1, fontSize: 16 }}>{t(`settings.${p}`, lang)}</span>
            {previewPolicy === p && <span style={{ color: '#0a84ff', fontSize: 18 }}>✓</span>}
          </div>
        ))}
      </div>
    </SubPage>
  )
}
export default SettingsNotifications
