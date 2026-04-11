import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const generalItems = [
  { icon: '📡', labelKey: null, labelTr: 'Yazilim Guncelleme', labelEn: 'Software Update', value: null },
  { icon: '💾', labelKey: 'settings.storage', value: '12.4 GB' },
  { icon: 'ℹ️', labelKey: 'settings.about', value: null },
  { icon: '🔄', labelKey: null, labelTr: 'Aktar veya Sifirla', labelEn: 'Transfer or Reset', value: null },
  { icon: '⌨️', labelKey: null, labelTr: 'Klavye', labelEn: 'Keyboard', value: null },
  { icon: '🌐', labelKey: 'settings.language', value: null },
  { icon: '📖', labelKey: null, labelTr: 'Sozluk', labelEn: 'Dictionary', value: null },
  { icon: '🔠', labelKey: null, labelTr: 'Yazı Tipi', labelEn: 'Fonts', value: null },
  { icon: '📅', labelKey: null, labelTr: 'Tarih ve Saat', labelEn: 'Date & Time', value: null },
  { icon: '🔋', labelKey: null, labelTr: 'Arka Plan Yenileme', labelEn: 'Background App Refresh', value: null },
]

export default function SettingsGeneral() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  const getLabel = (item) => {
    if (item.labelKey) return t(item.labelKey, lang)
    return lang === 'tr' ? item.labelTr : item.labelEn
  }

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.general', lang)}</h1>
      </div>

      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {generalItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
            borderBottom: i < generalItems.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
          }}>
            <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{item.icon}</span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>{getLabel(item)}</span>
            {item.value && <span style={{ fontSize: 15, opacity: 0.4 }}>{item.value}</span>}
            <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
