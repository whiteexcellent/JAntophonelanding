import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { mapAssets } from '../../data/sketchRuntimeAssets'

export default function MapsSharedLocation({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const name = params.name || (language === 'tr' ? 'Paylasilan Konum' : 'Shared Location')
  const lat = params.lat || '40.9906'
  const lng = params.lng || '29.0240'
  const mapBg = isDark ? mapAssets.dark : mapAssets.light

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7', position: 'relative' }}>
      {/* Map with Sketch image */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <img src={mapBg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: isDark ? 'brightness(0.7)' : 'none' }} />

        {/* Pin */}
        <div style={{
          position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -100%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 22, background: '#ff453a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(255,69,58,0.4)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#fff"/>
              <circle cx="12" cy="9" r="2.5" fill="#ff453a"/>
            </svg>
          </div>
        </div>

        {/* Back */}
        <div style={{ position: 'absolute', top: 12, left: 14 }}>
          <button onClick={goBack} style={{
            background: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
            border: 'none', borderRadius: 12, padding: '8px 14px', cursor: 'pointer',
            color: '#0a84ff', fontSize: 14, fontWeight: 600, backdropFilter: 'blur(10px)',
          }}>{t('system.back', language)}</button>
        </div>
      </div>

      {/* Location card */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '20px 18px 28px', borderRadius: '20px 20px 0 0',
        background: isDark ? 'rgba(28,28,30,0.95)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          {t('maps.sharedLocation', language)}
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: isDark ? '#fff' : '#000', marginBottom: 8 }}>{name}</div>
        <div style={{ fontSize: 13, opacity: 0.5, marginBottom: 16, fontFamily: 'monospace' }}>{lat}, {lng}</div>
        <button style={{
          width: '100%', padding: '14px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: '#0a84ff', color: '#fff', fontSize: 15, fontWeight: 700,
        }}>{t('maps.navigate', language)}</button>
      </div>
    </div>
  )
}
