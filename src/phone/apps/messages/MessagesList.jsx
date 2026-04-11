import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import messageThreads from '../../data/messages'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function MessagesList() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700 }}>{t('messages.title', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px' }}>
        {messageThreads.map((thread) => {
          const avatarSrc = getProfileAvatar(thread.contactId || thread.id)
          return (
            <div key={thread.id}
              onClick={() => pushRoute('messages.thread', { threadId: thread.id })}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', cursor: 'pointer',
                borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}`,
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 24, overflow: 'hidden', flexShrink: 0,
                background: thread.color,
              }}>
                <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: thread.unread > 0 ? 700 : 500 }}>{readLocalized(thread.name, language, 'Unknown')}</span>
                  <span style={{ fontSize: 12, opacity: 0.4 }}>{readLocalized(thread.time, language, '')}</span>
                </div>
                <div style={{ fontSize: 13, opacity: 0.5, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {readLocalized(thread.lastMessage, language, '')}
                </div>
              </div>
              {thread.unread > 0 && (
                <div style={{
                  minWidth: 20, height: 20, borderRadius: 10, background: '#0a84ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: '#fff', padding: '0 6px',
                }}>
                  {thread.unread}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
