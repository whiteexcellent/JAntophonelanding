import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function EmergencyMain() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const emergencyIcon = getAppleSketchArtwork('emergency', themeMode)

  const services = [
    { key: 'police', number: '155', color: '#0a84ff', appIcon: getAppleSketchArtwork('maps', themeMode) },
    { key: 'ambulance', number: '112', color: '#22c55e', appIcon: getAppleSketchArtwork('emergency', themeMode) },
    { key: 'fire', number: '110', color: '#ff9500', appIcon: getAppleSketchArtwork('weather', themeMode) },
  ]

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: isDark
        ? 'linear-gradient(180deg, #1a0000 0%, #000 40%)'
        : 'linear-gradient(180deg, #fff0f0 0%, #f2f2f7 40%)',
    }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#ff453a', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: '#ff453a' }}>{t('emergency.title', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      {/* Warning icon */}
      <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
        {emergencyIcon ? (
          <img src={emergencyIcon} alt="" style={{ width: 56, height: 56, borderRadius: 14 }} />
        ) : (
          <div style={{ fontSize: 48 }}>&#9888;&#65039;</div>
        )}
        <div style={{ fontSize: 13, color: '#ff453a', fontWeight: 600, marginTop: 8 }}>
          {t('emergency.callEmergency', language)}
        </div>
      </div>

      {/* Service buttons */}
      <div style={{ flex: 1, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {services.map(svc => (
          <div key={svc.key} style={{
            padding: '20px 20px', borderRadius: 24, cursor: 'pointer',
            background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
            display: 'flex', alignItems: 'center', gap: 16,
            border: `1px solid ${isDark ? 'rgba(255,69,58,0.2)' : 'rgba(255,69,58,0.1)'}`,
          }}>
            <div style={{
              width: 60, height: 60, borderRadius: 20, overflow: 'hidden',
              background: svc.color + '18',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {svc.appIcon ? (
                <img src={svc.appIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: 32 }}>&#128680;</span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>
                {t(`emergency.${svc.key}`, language)}
              </div>
              <div style={{ fontSize: 13, opacity: 0.5, marginTop: 2 }}>{svc.number}</div>
            </div>
            <div style={{
              padding: '10px 18px', borderRadius: 14, background: '#ff453a',
              color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer',
            }}>{t('emergency.callNow', language)}</div>
          </div>
        ))}

        <button onClick={() => pushRoute('emergency.report')} style={{
          marginTop: 'auto', width: '100%', padding: '16px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: isDark ? 'rgba(255,69,58,0.15)' : 'rgba(255,69,58,0.1)',
          color: '#ff453a', fontSize: 16, fontWeight: 700,
        }}>{t('emergency.report', language)}</button>
      </div>
    </div>
  )
}
