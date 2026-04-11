import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import messageThreads from '../../data/messages'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function MessagesThread({ params }) {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const resolveIntent = useNavigationStore((s) => s.resolveIntent)
  const isDark = themeMode === 'dark'
  const [input, setInput] = useState('')

  const thread = messageThreads.find((entry) => entry.id === params?.threadId)
  if (!thread) {
    return <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>Thread not found</div>
  }

  const avatarSrc = getProfileAvatar(thread.contactId || thread.id)
  const [messages, setMessages] = useState(thread.messages)
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
      },
    ])
    setInput('')
  }

  const renderMessageBody = (message) => {
    if (message.type === 'location') {
      return (
        <button
          onClick={() => resolveIntent({ appId: 'maps', screen: 'maps.sharedLocation', params: { destination: message.location?.name || 'Shared place' } })}
          style={{ display: 'grid', gap: 6, background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left', cursor: 'pointer' }}
        >
          <div style={{ fontWeight: 700 }}>Live Location</div>
          <div>{readLocalized(message.text, language, '')}</div>
          <div style={{ fontSize: 11, opacity: 0.72 }}>{message.location?.name || 'Shared place'}</div>
        </button>
      )
    }
    if (message.type === 'voice') {
      return (<div style={{ display: 'grid', gap: 6 }}><div style={{ fontWeight: 700 }}>Voice Message</div><div>{message.duration || 0}s</div></div>)
    }
    if (message.type === 'image') {
      return (<div style={{ display: 'grid', gap: 6 }}><div style={{ fontWeight: 700 }}>Photo</div><div>{readLocalized(message.text, language, '')}</div></div>)
    }
    if (message.type === 'contact') {
      return (<div style={{ display: 'grid', gap: 6 }}><div style={{ fontWeight: 700 }}>Contact Card</div><div>{readLocalized(message.text, language, '')}</div></div>)
    }
    return <div>{readLocalized(message.text, language, '')}</div>
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}` }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ width: 32, height: 32, borderRadius: 16, overflow: 'hidden', background: thread.color }}>
          <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <span style={{ fontSize: 16, fontWeight: 700, flex: 1 }}>{readLocalized(thread.name, language, 'Unknown')}</span>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {messages.map((message) => (
          <div key={message.id} style={{ display: 'flex', justifyContent: isOwn(message) ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '75%', padding: '10px 14px', borderRadius: 18, fontSize: 14,
              background: isOwn(message) ? '#0a84ff' : isDark ? 'rgba(255,255,255,0.1)' : '#e5e5ea',
              color: isOwn(message) ? '#fff' : isDark ? '#fff' : '#000',
              borderBottomRightRadius: isOwn(message) ? 4 : 18,
              borderBottomLeftRadius: isOwn(message) ? 18 : 4,
            }}>
              {renderMessageBody(message)}
              <div style={{ fontSize: 10, opacity: 0.5, marginTop: 4, textAlign: 'right' }}>{readLocalized(message.time, language, '')}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '8px 18px 12px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          value={input} onChange={(event) => setInput(event.target.value)}
          placeholder={t('messages.typeMessage', language)}
          style={{
            flex: 1, padding: '10px 16px', borderRadius: 20, border: 'none', fontSize: 14,
            background: isDark ? 'rgba(255,255,255,0.1)' : '#e5e5ea',
            color: isDark ? '#fff' : '#000', outline: 'none',
          }}
        />
        <button onClick={handleSend} style={{
          minWidth: 54, height: 36, borderRadius: 18, background: '#0a84ff', border: 'none',
          color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 14px',
        }}>
          {language === 'tr' ? 'Gonder' : 'Send'}
        </button>
      </div>
    </div>
  )
}
