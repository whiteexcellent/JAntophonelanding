import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import whisappChats from '../../data/whisapp'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function WhisAppInbox() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'

  const tabs = [
    { key: 'chats', label: t('whisapp.chats', language) },
    { key: 'groups', label: t('whisapp.groups', language) },
    { key: 'calls', label: t('whisapp.calls', language) },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#25d366', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700 }}>{t('whisapp.title', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ display: 'flex', gap: 0, padding: '4px 18px 8px' }}>
        {tabs.map((tab) => (
          <div key={tab.key} style={{
            flex: 1, textAlign: 'center', padding: '8px 0', fontSize: 13, fontWeight: 600,
            borderBottom: tab.key === 'chats' ? '2px solid #25d366' : '2px solid transparent',
            color: tab.key === 'chats' ? '#25d366' : isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
          }}>
            {tab.label}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 18px' }}>
        {whisappChats.map((chat) => {
          const avatarSrc = getProfileAvatar(chat.contactId || chat.id)
          return (
            <div key={chat.id}
              onClick={() => pushRoute('whisapp.thread', { chatId: chat.id })}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', cursor: 'pointer',
                borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}`,
              }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: 24, overflow: 'hidden', background: chat.color }}>
                  <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                {chat.online && (
                  <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: 6, background: '#25d366', border: `2px solid ${isDark ? '#000' : '#f2f2f7'}` }} />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: chat.unread > 0 ? 700 : 500 }}>
                    {readLocalized(chat.name, language, 'Chat')}
                  </span>
                  <span style={{ fontSize: 12, color: chat.unread > 0 ? '#25d366' : isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>
                    {readLocalized(chat.time, language, '')}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  {chat.muted && <span style={{ fontSize: 12, opacity: 0.4 }}>&#128263;</span>}
                  <span style={{ fontSize: 13, opacity: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                    {readLocalized(chat.lastMessage, language, '')}
                  </span>
                </div>
              </div>
              {chat.unread > 0 && (
                <div style={{
                  minWidth: 20, height: 20, borderRadius: 10, background: '#25d366',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: '#fff', padding: '0 6px',
                }}>
                  {chat.unread}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
