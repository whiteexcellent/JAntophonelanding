import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const languages = [
  { code: 'tr', labelKey: 'settings.turkish', flag: '🇹🇷' },
  { code: 'en', labelKey: 'settings.english', flag: '🇬🇧' },
]

export default function SettingsLanguage() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const setLanguage = useSystemStore(s => s.setLanguage)
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.language', lang)}</h1>
      </div>

      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {languages.map((item, i) => (
          <div
            key={item.code}
            onClick={() => setLanguage(item.code)}
            style={{
              display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
              cursor: 'pointer',
              borderBottom: i < languages.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
            }}
          >
            <span style={{ fontSize: 22 }}>{item.flag}</span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>{t(item.labelKey, lang)}</span>
            {lang === item.code && <span style={{ fontSize: 20, color: '#0a84ff', fontWeight: 600 }}>✓</span>}
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
