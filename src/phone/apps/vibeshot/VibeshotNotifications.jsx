import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import vibseshotData from '../../data/vibeshot'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function VibeshotNotifications() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const popRoute = useNavigationStore(s => s.popRoute)
  const isDark = themeMode === 'dark'

  const bg = isDark ? '#000' : '#fafafa'
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : '#fff'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const textPrimary = isDark ? '#fff' : '#000'
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

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
        <div style={{ fontSize: 17, fontWeight: 700 }}>{t('vibeshot.notifications', language)}</div>
      </div>

      {/* Notification list */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {vibseshotData.notifications.map(notif => {
          const notifText = typeof notif.text === 'object' ? notif.text[language] || notif.text.en : notif.text
          return (
            <div key={notif.id} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: `0.5px solid ${border}`,
              background: cardBg, cursor: 'pointer',
              transition: 'background 0.15s',
            }}>
              {/* Avatar */}
              <div style={{
                width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', background: notif.color,
                flexShrink: 0,
              }}>
                <img src={getProfileAvatar(notif.userId || notif.id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700 }}>{notif.from}</span>
                  {' '}{notifText}
                </div>
                <div style={{
                  fontSize: 11, color: textSecondary, marginTop: 3,
                }}>{notif.time} {t('vibeshot.ago', language)}</div>
              </div>

              {/* Type indicator */}
              <div style={{ fontSize: 16, flexShrink: 0 }}>
                {notif.type === 'like' && '❤️'}
                {notif.type === 'comment' && '💬'}
                {notif.type === 'follow' && '👤'}
                {notif.type === 'mention' && '📌'}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
