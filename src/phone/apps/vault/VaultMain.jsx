import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function VaultMain() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const usedGB = 12.4
  const totalGB = 50
  const usagePercent = (usedGB / totalGB) * 100

  // Use Sketch app icons for section items
  const iconMap = {
    phone: getAppleSketchArtwork('settings', themeMode),
    messages: getAppleSketchArtwork('messages', themeMode),
    documents: getAppleSketchArtwork('notes', themeMode),
    photos: getAppleSketchArtwork('gallery', themeMode),
    media: getAppleSketchArtwork('music', themeMode),
  }

  const sections = [
    {
      title: t('vault.backups', language) || 'Backups',
      items: [
        { iconKey: 'phone', label: t('vault.phoneBackup', language) || 'Phone Backup', status: '2.1 GB' },
        { iconKey: 'messages', label: t('vault.messageBackup', language) || 'Message Backup', status: '340 MB' },
      ],
    },
    {
      title: t('vault.encryptedFiles', language) || 'Encrypted Files',
      items: [
        { iconKey: 'documents', label: t('vault.documents', language) || 'Documents', status: '1.8 GB' },
        { iconKey: 'photos', label: t('vault.photos', language) || 'Photos', status: '5.2 GB' },
        { iconKey: 'media', label: t('vault.media', language) || 'Media', status: '2.9 GB' },
      ],
    },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('vault.title', language) || 'Vault'}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px 18px' }}>
        <div style={{
          background: isDark ? '#1c1c1e' : '#fff', borderRadius: 20, padding: 20, marginBottom: 12,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>
              {t('vault.storage', language) || 'Storage'}
            </span>
            <span style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}>
              {usedGB} / {totalGB} GB
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: isDark ? 'rgba(255,255,255,0.1)' : '#e5e5ea', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${usagePercent}%`, borderRadius: 4, background: '#0a84ff' }} />
          </div>
        </div>

        {sections.map((section, si) => (
          <div key={si} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000', padding: '8px 0 6px' }}>
              {section.title}
            </div>
            <div style={{ background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, overflow: 'hidden' }}>
              {section.items.map((item, ii) => (
                <div key={ii} style={{
                  padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  borderBottom: ii < section.items.length - 1 ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}` : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, overflow: 'hidden' }}>
                      {iconMap[item.iconKey] ? (
                        <img src={iconMap[item.iconKey]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: '#0a84ff', borderRadius: 7 }} />
                      )}
                    </div>
                    <span style={{ fontSize: 15, color: isDark ? '#fff' : '#000' }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '14px 16px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, overflow: 'hidden' }}>
            {getAppleSketchArtwork('clock', themeMode) ? (
              <img src={getAppleSketchArtwork('clock', themeMode)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            ) : (
              <span style={{ fontSize: 12 }}>&#128336;</span>
            )}
          </div>
          <span style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}>
            {t('vault.lastBackup', language) || 'Last Backup'}: Mar 28, 2026 - 11:42 PM
          </span>
        </div>
      </div>
    </div>
  )
}
