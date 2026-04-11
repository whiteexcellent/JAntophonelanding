import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import vibseshotData from '../../data/vibeshot'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function VibeshotComments({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const popRoute = useNavigationStore(s => s.popRoute)
  const isDark = themeMode === 'dark'
  const [commentText, setCommentText] = useState('')

  const post = vibseshotData.posts.find(p => p.id === params.postId) || vibseshotData.posts[0]
  const caption = typeof post.caption === 'object' ? post.caption[language] || post.caption.en : post.caption

  const bg = isDark ? '#000' : '#fafafa'
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : '#fff'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const textPrimary = isDark ? '#fff' : '#000'
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

  const sampleComments = [
    {
      id: 'sc1',
      username: 'ahmet.k',
      initials: 'AK',
      color: '#ff9500',
      text: { tr: 'Harika bir kare! Devamini bekliyoruz 🔥', en: 'Amazing shot! Looking forward to more 🔥' },
      time: '12dk',
      likes: 8,
    },
    {
      id: 'sc2',
      username: 'zeynep.d',
      initials: 'ZD',
      color: '#ff2d55',
      text: { tr: 'Cok guzel olmus, tebrikler 👏', en: 'Looks fantastic, congrats 👏' },
      time: '45dk',
      likes: 14,
    },
    {
      id: 'sc3',
      username: 'can.ozk',
      initials: 'CO',
      color: '#22c55e',
      text: { tr: 'Konum nere burasi? Gitmek lazim!', en: 'Where is this? Need to go there!' },
      time: '2s',
      likes: 3,
    },
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
        <div style={{ fontSize: 17, fontWeight: 700 }}>{t('vibeshot.comments', language)}</div>
      </div>

      {/* Comments list */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Original post caption */}
        <div style={{
          display: 'flex', gap: 12, padding: '16px',
          borderBottom: `0.5px solid ${border}`,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', background: post.color,
            flexShrink: 0,
          }}>
            <img src={getProfileAvatar(post.userId || post.id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700, marginRight: 6 }}>{post.username}</span>
              {caption}
            </div>
            <div style={{ fontSize: 11, color: textSecondary, marginTop: 4 }}>
              {post.time} {t('vibeshot.ago', language)}
            </div>
          </div>
        </div>

        {/* Sample comments */}
        {sampleComments.map(comment => {
          const cText = typeof comment.text === 'object' ? comment.text[language] || comment.text.en : comment.text
          return (
            <div key={comment.id} style={{
              display: 'flex', gap: 12, padding: '14px 16px',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', background: comment.color,
                flexShrink: 0,
              }}>
                <img src={getProfileAvatar(comment.id)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, marginRight: 6 }}>{comment.username}</span>
                  {cText}
                </div>
                <div style={{
                  display: 'flex', gap: 16, marginTop: 6, fontSize: 11, color: textSecondary,
                }}>
                  <span>{comment.time}</span>
                  <span style={{ fontWeight: 600, cursor: 'pointer' }}>
                    {comment.likes} {t('vibeshot.likes', language)}
                  </span>
                  <span style={{ fontWeight: 600, cursor: 'pointer' }}>
                    {t('vibeshot.reply', language)}
                  </span>
                </div>
              </div>
              <span style={{ fontSize: 12, color: textSecondary, cursor: 'pointer', alignSelf: 'center' }}>🤍</span>
            </div>
          )
        })}
      </div>

      {/* Comment input */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px 14px',
        borderTop: `0.5px solid ${border}`,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: isDark ? 'rgba(0,0,0,0.85)' : 'rgba(250,250,250,0.9)',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', background: vibseshotData.currentUser.color,
          flexShrink: 0,
        }}>
          <img src={getProfileAvatar('u1')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <input
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
          placeholder={t('vibeshot.addComment', language)}
          style={{
            flex: 1, padding: '10px 14px', borderRadius: 20, fontSize: 13,
            border: `1px solid ${border}`, outline: 'none',
            background: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
            color: textPrimary,
          }}
        />
        {commentText && (
          <button style={{
            background: 'none', border: 'none', color: '#0095f6',
            fontSize: 14, fontWeight: 700, cursor: 'pointer', padding: 0,
          }}>{t('vibeshot.post', language)}</button>
        )}
      </div>
    </div>
  )
}
