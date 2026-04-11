import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const privacyItems = [
  { icon: '📍', labelTr: 'Konum Servisleri', labelEn: 'Location Services', defaultOn: true },
  { icon: '🔍', labelTr: 'Takip', labelEn: 'Tracking', defaultOn: false },
  { icon: '📊', labelTr: 'Analitik', labelEn: 'Analytics', defaultOn: true },
  { icon: '📷', labelTr: 'Kamera Erisimi', labelEn: 'Camera Access', defaultOn: true },
  { icon: '🎤', labelTr: 'Mikrofon Erisimi', labelEn: 'Microphone Access', defaultOn: true },
  { icon: '📇', labelTr: 'Rehber Erisimi', labelEn: 'Contacts Access', defaultOn: false },
]

export default function SettingsPrivacy() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)

  const [toggles, setToggles] = useState(
    () => privacyItems.reduce((acc, item, i) => ({ ...acc, [i]: item.defaultOn }), {})
  )

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  const handleToggle = (index) => {
    setToggles(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.privacy', lang)}</h1>
      </div>

      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        {privacyItems.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
            borderBottom: i < privacyItems.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
          }}>
            <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{item.icon}</span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
              {lang === 'tr' ? item.labelTr : item.labelEn}
            </span>
            <div onClick={() => handleToggle(i)} data-on={String(!!toggles[i])} className="phone-toggle">
              <div className="phone-toggle-knob" />
            </div>
          </div>
        ))}
      </div>

      {/* Info text */}
      <div style={{ padding: '8px 28px', fontSize: 13, opacity: 0.4, lineHeight: 1.5 }}>
        {lang === 'tr'
          ? 'Uygulamalarin konumunuza, kameraniza ve diger kaynaklara erisimini buradan yonetebilirsiniz.'
          : 'Manage app access to your location, camera, and other resources here.'}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
