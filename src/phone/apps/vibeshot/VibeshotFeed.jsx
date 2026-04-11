import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import vibseshotData from '../../data/vibeshot'
import { getVibeShotPostImage, getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function VibeshotFeed() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const popRoute = useNavigationStore((s) => s.popRoute)
  const isDark = themeMode === 'dark'
  const [activeTab, setActiveTab] = useState('feed')
  const [likedPosts, setLikedPosts] = useState({})
  const [savedPosts, setSavedPosts] = useState({})

  const toggleLike = (postId) => setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }))
  const toggleSave = (postId) => setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }))

  const bg = isDark ? '#000' : '#fafafa'
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : '#fff'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const textPrimary = isDark ? '#fff' : '#000'
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

  const tabs = [
    { key: 'feed', icon: '\u2302' },
    { key: 'explore', icon: '\u2315' },
    { key: 'reels', icon: '\u25B6' },
    { key: 'profile', icon: '\u2687' },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: bg, color: textPrimary, height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 16px 10px', borderBottom: `0.5px solid ${border}`,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(250,250,250,0.85)',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={popRoute} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: textPrimary, padding: 0 }}>
            &lsaquo;
          </button>
          <div style={{
            fontSize: 26, fontWeight: 900, letterSpacing: -1.5,
            background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Vibeshot
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ background: 'none', border: 'none', color: textPrimary, cursor: 'pointer', fontSize: 18 }} onClick={() => pushRoute('vibeshot.notifications')}>
            &#9829;
          </button>
          <button style={{ background: 'none', border: 'none', color: textPrimary, cursor: 'pointer', fontSize: 18 }}>
            &#9993;
          </button>
        </div>
      </div>

      {/* Feed */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 56 }}>
        {vibseshotData.posts.map((post) => {
          const isLiked = likedPosts[post.id] !== undefined ? likedPosts[post.id] : post.liked
          const isSaved = savedPosts[post.id] !== undefined ? savedPosts[post.id] : post.saved
          const caption = typeof post.caption === 'object' ? post.caption[language] || post.caption.en : post.caption
          const postImage = getVibeShotPostImage(post.id)
          const avatarSrc = getProfileAvatar(post.userId)

          return (
            <div key={post.id} style={{
              background: cardBg, borderRadius: 18, margin: '10px 12px',
              border: `0.5px solid ${border}`, overflow: 'hidden',
            }}>
              {/* Post header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px' }}>
                <div onClick={() => pushRoute('vibeshot.profile', { userId: post.userId })} style={{
                  width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', cursor: 'pointer', flexShrink: 0,
                  background: post.color,
                }}>
                  <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, cursor: 'pointer' }} onClick={() => pushRoute('vibeshot.profile', { userId: post.userId })}>
                  {post.username}
                </div>
              </div>

              {/* Post image */}
              <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
                {postImage ? (
                  <img src={postImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 72 }}>{post.emoji}</div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px 4px' }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <button onClick={() => toggleLike(post.id)} style={{ background: 'none', border: 'none', color: isLiked ? '#ff453a' : textPrimary, cursor: 'pointer', fontSize: 20, padding: 0 }}>
                    {isLiked ? '\u2665' : '\u2661'}
                  </button>
                  <button onClick={() => pushRoute('vibeshot.comments', { postId: post.id })} style={{ background: 'none', border: 'none', color: textPrimary, cursor: 'pointer', fontSize: 18, padding: 0 }}>
                    &#9997;
                  </button>
                  <button style={{ background: 'none', border: 'none', color: textPrimary, cursor: 'pointer', fontSize: 18, padding: 0 }}>
                    &#10132;
                  </button>
                </div>
                <button onClick={() => toggleSave(post.id)} style={{ background: 'none', border: 'none', color: textPrimary, cursor: 'pointer', fontSize: 18, padding: 0 }}>
                  {isSaved ? '\u2605' : '\u2606'}
                </button>
              </div>

              <div style={{ padding: '2px 14px', fontSize: 13, fontWeight: 700 }}>
                {(isLiked && !post.liked ? post.likes + 1 : !isLiked && post.liked ? post.likes - 1 : post.likes).toLocaleString()} {t('vibeshot.likes', language)}
              </div>

              <div style={{ padding: '4px 14px 6px', fontSize: 13, lineHeight: 1.4 }}>
                <span style={{ fontWeight: 600, marginRight: 6 }}>{post.username}</span>
                {caption}
              </div>

              <div onClick={() => pushRoute('vibeshot.comments', { postId: post.id })}
                style={{ padding: '0 14px 6px', fontSize: 12, color: textSecondary, cursor: 'pointer' }}>
                {t('vibeshot.viewComments', language)} ({post.comments})
              </div>

              <div style={{ padding: '0 14px 12px', fontSize: 11, color: textSecondary }}>
                {post.time} {t('vibeshot.ago', language)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        padding: '8px 0 12px', borderTop: `0.5px solid ${border}`,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: isDark ? 'rgba(0,0,0,0.85)' : 'rgba(250,250,250,0.9)',
        position: 'sticky', bottom: 0,
      }}>
        {tabs.map((tab) => (
          <div key={tab.key}
            onClick={() => { if (tab.key === 'profile') pushRoute('vibeshot.profile'); else setActiveTab(tab.key) }}
            style={{
              fontSize: 20, cursor: 'pointer', padding: '4px 12px',
              opacity: activeTab === tab.key ? 1 : 0.4,
            }}>
            {tab.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
