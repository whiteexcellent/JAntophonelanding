import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { mapAssets } from '../../data/sketchRuntimeAssets'

export default function MapsMain({ params = {} }) {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'
  const destination = params.destination || t('maps.yourLocation', language)
  const subtitle = params.plate || t('maps.navigate', language)

  const mapBg = isDark ? mapAssets.dark : mapAssets.light

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7', position: 'relative' }}>
      {/* Map area with Sketch image */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <img src={mapBg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: isDark ? 'brightness(0.7)' : 'none' }} />

        {/* Pin */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 20,
            background: '#0a84ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(10,132,255,0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#fff"/>
              <circle cx="12" cy="9" r="2.5" fill="#0a84ff"/>
            </svg>
          </div>
          <div style={{
            marginTop: 6, padding: '4px 10px', borderRadius: 8,
            background: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)',
            fontSize: 11, fontWeight: 600, color: isDark ? '#fff' : '#000',
            whiteSpace: 'nowrap', backdropFilter: 'blur(10px)',
          }}>
            {destination}
          </div>
        </div>

        {/* Back button */}
        <div style={{ position: 'absolute', top: 12, left: 14 }}>
          <button onClick={goBack} style={{
            background: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
            border: 'none', borderRadius: 12, padding: '8px 14px', cursor: 'pointer',
            color: '#0a84ff', fontSize: 14, fontWeight: 600, backdropFilter: 'blur(10px)',
          }}>
            {t('system.back', language)}
          </button>
        </div>
      </div>

      {/* Bottom card */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '16px 18px 24px', borderRadius: '20px 20px 0 0',
        background: isDark ? 'rgba(28,28,30,0.95)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: isDark ? '#fff' : '#000' }}>
          {t('maps.title', language)}
        </div>
        <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 12 }}>{subtitle}</div>
        <div style={{
          padding: '12px 16px', borderRadius: 14,
          background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
          fontSize: 15, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
        }}>
          {t('system.search', language)}...
        </div>
      </div>
    </div>
  )
}
