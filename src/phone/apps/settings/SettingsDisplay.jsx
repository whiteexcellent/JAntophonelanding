import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

export default function SettingsDisplay() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const brightness = useSystemStore(s => s.brightness)
  const setBrightness = useSystemStore(s => s.setBrightness)
  const pop = useNavigationStore(s => s.popRoute)

  const [autoBrightness, setAutoBrightness] = useState(true)
  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.displayBrightness', lang)}</h1>
      </div>

      {/* Brightness slider */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '16px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>
          {lang === 'tr' ? 'Parlaklik' : 'Brightness'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 16, opacity: 0.5 }}>🔅</span>
          <input
            type="range"
            min={0}
            max={100}
            value={brightness}
            onChange={e => setBrightness(Number(e.target.value))}
            style={{
              flex: 1, height: 4, appearance: 'none', WebkitAppearance: 'none',
              background: `linear-gradient(to right, #0a84ff 0%, #0a84ff ${brightness}%, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} ${brightness}%, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} 100%)`,
              borderRadius: 2, outline: 'none', cursor: 'pointer',
            }}
          />
          <span style={{ fontSize: 16, opacity: 0.5 }}>🔆</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: 8, fontSize: 13, opacity: 0.4 }}>{brightness}%</div>
      </div>

      {/* Auto-brightness toggle */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>💡</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Otomatik Parlaklik' : 'Auto-Brightness'}
          </span>
          <div
            onClick={() => setAutoBrightness(!autoBrightness)}
            data-on={String(autoBrightness)}
            className="phone-toggle"
          >
            <div className="phone-toggle-knob" />
          </div>
        </div>
      </div>

      {/* Text Size info */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>🔤</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Yazi Boyutu' : 'Text Size'}
          </span>
          <span style={{ fontSize: 15, opacity: 0.4 }}>{lang === 'tr' ? 'Varsayilan' : 'Default'}</span>
          <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
          borderTop: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>🅱️</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Kalin Yazi' : 'Bold Text'}
          </span>
          <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
        </div>
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
