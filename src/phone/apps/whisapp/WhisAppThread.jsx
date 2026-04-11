import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import whisappChats from '../../data/whisapp'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function WhisAppThread({ params }) {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const resolveIntent = useNavigationStore((s) => s.resolveIntent)
  const isDark = themeMode === 'dark'
  const [input, setInput] = useState('')

  const chat = whisappChats.find((entry) => entry.id === params?.chatId)
  if (!chat) {
    return <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>Chat not found</div>
  }

  const chatName = readLocalized(chat.name, language, 'Chat')
  const avatarSrc = getProfileAvatar(chat.contactId || chat.id)
  const [messages, setMessages] = useState(chat.messages)
  const isOwn = (message) => message.from === 'u1'

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages((current) => [
      ...current,
      {
        id: `local-${Date.now()}`,
        from: 'u1',
        type: 'text',
        text: { tr: trimmed, en: trimmed },
        time: useSystemStore.getState().statusTime || '09:41',
        read: true,
      },
    ])
    setInput('')
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#0b1418' : '#e5ddd5' }}>
      <div style={{
        padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10,
        background: isDark ? '#1f2c33' : '#075e54',
      }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', background: chat.color }}>
          <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ flex: 1 }} onClick={() => { if (chat.type === 'direct') pushRoute('whisapp.profile', { chatId: chat.id }) }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{chatName}</div>
          {chat.online && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>{t('whisapp.online', language)}</div>}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {messages.map((message) => (
          <div key={message.id} style={{ display: 'flex', justifyContent: isOwn(message) ? 'flex-end' : 'flex-start' }}>
            <div style={{
              position: 'relative', maxWidth: '78%', padding: '8px 12px', borderRadius: 10, fontSize: 14,
              background: isOwn(message) ? (isDark ? '#005c4b' : '#dcf8c6') : (isDark ? '#1f2c33' : '#fff'),
              color: isDark ? '#fff' : '#000',
              borderTopLeftRadius: isOwn(message) ? 10 : 0,
              borderTopRightRadius: isOwn(message) ? 0 : 10,
            }}>
              {message.type === 'liveLocation' && (
                <button
                  onClick={() => resolveIntent({ appId: 'maps', screen: 'maps.sharedLocation', params: { destination: chatName } })}
                  style={{ fontSize: 12, color: '#25d366', fontWeight: 600, marginBottom: 4, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  LIVE {t('whisapp.liveLocation', language)}
                </button>
              )}
              <div>{readLocalized(message.text, language, '')}</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 4, marginTop: 2 }}>
                <span style={{ fontSize: 10, opacity: 0.5 }}>{readLocalized(message.time, language, '')}</span>
                {isOwn(message) && (
                  <span style={{ fontSize: 12, color: message.read !== false ? '#53bdeb' : 'rgba(255,255,255,0.3)' }}>
                    &#10003;&#10003;
                  </span>
                )}
              </div>
              {message.reaction && (
                <div style={{
                  position: 'absolute', bottom: -6, right: 4, fontSize: 14,
                  background: isDark ? '#1f2c33' : '#fff', borderRadius: 10, padding: '0 4px',
                }}>
                  {message.reaction}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '8px 14px 12px', display: 'flex', gap: 8, alignItems: 'center', background: isDark ? '#1f2c33' : '#f0f0f0' }}>
        <input
          value={input} onChange={(event) => setInput(event.target.value)}
          placeholder={t('messages.typeMessage', language)}
          style={{
            flex: 1, padding: '10px 16px', borderRadius: 24, border: 'none', fontSize: 14,
            background: isDark ? '#2a3942' : '#fff', color: isDark ? '#fff' : '#000', outline: 'none',
          }}
        />
        <button onClick={handleSend} style={{
          minWidth: 54, height: 40, borderRadius: 20, background: '#25d366', border: 'none',
          color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 14px',
        }}>
          {language === 'tr' ? 'Gonder' : 'Send'}
        </button>
      </div>
    </div>
  )
}
