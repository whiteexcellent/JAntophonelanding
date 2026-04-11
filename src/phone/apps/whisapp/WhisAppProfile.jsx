import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import whisappChats from '../../data/whisapp'
import { users } from '../../data/users'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function WhisAppProfile({ params }) {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'

  const chat = whisappChats.find((entry) => entry.id === params?.chatId)
  if (!chat || chat.type !== 'direct') {
    return <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>Profile unavailable</div>
  }

  const user = users[chat.userId] || {}

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#25d366', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 18px 20px' }}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              overflow: 'hidden',
              background: chat.color,
              margin: '0 auto 12px',
            }}
          >
            <img src={getProfileAvatar(chat.contactId || chat.userId || chat.id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>{readLocalized(chat.name, language, 'User')}</div>
          {user.phone && <div style={{ fontSize: 14, opacity: 0.5, marginTop: 4 }}>{readLocalized(user.phone, language, '')}</div>}
          {chat.online && <div style={{ fontSize: 13, color: '#25d366', marginTop: 4 }}>{t('whisapp.online', language)}</div>}
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
          {['Bell', 'Find', 'Call', 'Video'].map((label) => (
            <div
              key={label}
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark ? 'rgba(255,255,255,0.08)' : '#fff',
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {[
          { label: t('whisapp.media', language), icon: 'Media' },
          { label: t('whisapp.sharedLocation', language), icon: 'Map' },
          { label: t('whisapp.muted', language), icon: 'Mute' },
          { label: t('whisapp.blocked', language), icon: 'Block' },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 16px',
              borderRadius: 16,
              marginBottom: 8,
              background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, opacity: 0.65, minWidth: 44 }}>{item.icon}</span>
            <span style={{ fontSize: 15, fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
