import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function VibeshotSettings() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const popRoute = useNavigationStore(s => s.popRoute)
  const isDark = themeMode === 'dark'

  const bg = isDark ? '#000' : '#fafafa'
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : '#fff'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const textPrimary = isDark ? '#fff' : '#000'
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

  const settingsItems = [
    { iconKey: 'settings', label: t('vibeshot.settingsPrivacy', language) },
    { iconKey: 'emergency', label: t('vibeshot.settingsBlocked', language) },
    { iconKey: 'settings', label: t('vibeshot.settingsPassword', language) },
    { iconKey: 'contacts', label: t('vibeshot.settingsFaceId', language) },
    { iconKey: 'safari', label: t('vibeshot.settingsLanguage', language) },
    { iconKey: 'files', label: t('vibeshot.settingsStoryArchive', language) },
  ]

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column',
      background: bg, color: textPrimary, height: '100%',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px 12px',
        borderBottom: `0.5px solid ${border}`,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(250,250,250,0.85)',
      }}>
        <button onClick={popRoute} style={{
          background: 'none', border: 'none', fontSize: 18, cursor: 'pointer',
          color: textPrimary, padding: 0,
        }}>&#8592;</button>
        <div style={{ fontSize: 17, fontWeight: 700 }}>{t('vibeshot.settingsPrivacy', language)}</div>
      </div>

      {/* Settings list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        <div style={{
          background: cardBg, borderRadius: 16, margin: '0 12px',
          border: `0.5px solid ${border}`, overflow: 'hidden',
        }}>
          {settingsItems.map((item, idx) => {
            const icon = getAppleSketchArtwork(item.iconKey, themeMode)
            return (
              <div key={idx} style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '15px 16px',
                borderBottom: idx < settingsItems.length - 1 ? `0.5px solid ${border}` : 'none',
                cursor: 'pointer', transition: 'background 0.15s',
              }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, overflow: 'hidden', flexShrink: 0 }}>
                  {icon ? (
                    <img src={icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', borderRadius: 7, background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>&#9881;</div>
                  )}
                </div>
                <span style={{ fontSize: 15, flex: 1 }}>{item.label}</span>
                <span style={{ fontSize: 14, color: textSecondary }}>&#8250;</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
