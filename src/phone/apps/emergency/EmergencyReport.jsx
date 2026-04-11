import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

export default function EmergencyReport() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const [type, setType] = useState('police')
  const [description, setDescription] = useState('')
  const [sendLocation, setSendLocation] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const types = [
    { key: 'police', emoji: '\uD83D\uDE94' },
    { key: 'ambulance', emoji: '\uD83D\uDE91' },
    { key: 'fire', emoji: '\uD83D\uDE92' },
  ]

  const handleSubmit = () => {
    if (!description.trim()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: isDark ? '#000' : '#f2f2f7', padding: 40, textAlign: 'center',
      }}>
        <div style={{ fontSize: 56, marginBottom: 20 }}>&#9989;</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: '#22c55e', marginBottom: 10 }}>
          {t('emergency.confirmation', language)}
        </div>
        <div style={{ fontSize: 15, opacity: 0.6, marginBottom: 30, color: isDark ? '#fff' : '#000' }}>
          {t('emergency.reportSent', language)}
        </div>
        <button onClick={goBack} style={{
          padding: '14px 40px', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: '#0a84ff', color: '#fff', fontSize: 15, fontWeight: 700,
        }}>{t('system.back', language)}</button>
      </div>
    )
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      {/* Header */}
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#ff453a', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: '#ff453a' }}>{t('emergency.report', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '12px 18px' }}>
        {/* Type selector */}
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: isDark ? '#fff' : '#000' }}>
          {language === 'tr' ? 'Bildirim Tipi' : 'Report Type'}
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
          {types.map(tp => (
            <button key={tp.key} onClick={() => setType(tp.key)} style={{
              flex: 1, padding: '16px 8px', borderRadius: 18, border: 'none', cursor: 'pointer',
              background: type === tp.key
                ? (isDark ? 'rgba(255,69,58,0.2)' : 'rgba(255,69,58,0.1)')
                : (isDark ? 'rgba(255,255,255,0.06)' : '#fff'),
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              outline: type === tp.key ? '2px solid #ff453a' : 'none',
            }}>
              <span style={{ fontSize: 28 }}>{tp.emoji}</span>
              <span style={{
                fontSize: 12, fontWeight: 600,
                color: type === tp.key ? '#ff453a' : (isDark ? '#fff' : '#000'),
              }}>{t(`emergency.${tp.key}`, language)}</span>
            </button>
          ))}
        </div>

        {/* Description */}
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: isDark ? '#fff' : '#000' }}>
          {t('bank.description', language)}
        </div>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={5}
          placeholder="..."
          style={{
            width: '100%', padding: '14px 16px', borderRadius: 16, border: 'none', resize: 'none',
            background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
            color: isDark ? '#fff' : '#000', fontSize: 15, outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        {/* Send location toggle */}
        <div onClick={() => setSendLocation(!sendLocation)} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px', borderRadius: 16, marginTop: 14, cursor: 'pointer',
          background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
        }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>
            {t('emergency.sendLocation', language)}
          </span>
          <div style={{
            width: 48, height: 28, borderRadius: 14, padding: 2,
            background: sendLocation ? '#22c55e' : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'),
            transition: 'background 0.2s',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 12, background: '#fff',
              transform: sendLocation ? 'translateX(20px)' : 'translateX(0)',
              transition: 'transform 0.2s',
            }} />
          </div>
        </div>

        {/* Submit */}
        <button onClick={handleSubmit} style={{
          width: '100%', padding: '16px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          marginTop: 20,
          background: description.trim() ? '#ff453a' : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'),
          color: description.trim() ? '#fff' : (isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'),
          fontSize: 16, fontWeight: 700,
        }}>{t('system.send', language)}</button>
      </div>
    </div>
  )
}
