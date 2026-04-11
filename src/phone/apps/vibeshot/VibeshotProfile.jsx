import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import vibseshotData from '../../data/vibeshot'
import { getProfileAvatar, getVibeShotPostImage } from '../../data/sketchRuntimeAssets'

export default function VibeshotProfile({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const popRoute = useNavigationStore(s => s.popRoute)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const isDark = themeMode === 'dark'

  const isOwnProfile = !params.userId || params.userId === vibseshotData.currentUser.id
  const user = isOwnProfile
    ? vibseshotData.currentUser
    : vibseshotData.profiles.find(p => p.id === params.userId) || vibseshotData.currentUser

  const bio = typeof user.bio === 'object' ? user.bio[language] || user.bio.en : user.bio
  const userPosts = vibseshotData.posts.filter(p => p.userId === user.id)
  const avatarSrc = getProfileAvatar(user.id)

  const bg = isDark ? '#000' : '#fafafa'
  const border = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
  const textPrimary = isDark ? '#fff' : '#000'
  const textSecondary = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)'

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: bg, color: textPrimary, height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px 12px',
        borderBottom: `0.5px solid ${border}`,
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        background: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(250,250,250,0.85)',
      }}>
        <button onClick={popRoute} style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: textPrimary, padding: 0 }}>&#8592;</button>
        <div style={{ fontSize: 17, fontWeight: 700, flex: 1 }}>{user.username}</div>
        {isOwnProfile && (
          <span onClick={() => pushRoute('vibeshot.settings')} style={{ fontSize: 20, cursor: 'pointer' }}>&#9776;</span>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Profile info */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {/* Avatar */}
            <div style={{
              width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
              border: `3px solid ${user.color}`, boxShadow: `0 0 0 2px ${user.color}33`,
            }}>
              <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 20, flex: 1, justifyContent: 'center' }}>
              {[
                { value: user.posts, label: t('vibeshot.posts', language) },
                { value: user.followers, label: t('vibeshot.followers', language) },
                { value: user.following, label: t('vibeshot.following', language) },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: textSecondary, marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.displayName}</div>
            <div style={{ fontSize: 13, color: textSecondary, marginTop: 4, lineHeight: 1.4 }}>{bio}</div>
          </div>

          <div style={{ marginTop: 16, marginBottom: 20 }}>
            {isOwnProfile ? (
              <button style={{
                width: '100%', padding: '9px 0', borderRadius: 10, fontSize: 14, fontWeight: 700,
                background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                color: textPrimary, border: `0.5px solid ${border}`, cursor: 'pointer',
              }}>{t('vibeshot.editProfile', language)}</button>
            ) : (
              <button style={{
                width: '100%', padding: '9px 0', borderRadius: 10, fontSize: 14, fontWeight: 700,
                background: user.isFollowing ? (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)') : '#0095f6',
                color: user.isFollowing ? textPrimary : '#fff',
                border: user.isFollowing ? `0.5px solid ${border}` : 'none', cursor: 'pointer',
              }}>{user.isFollowing ? t('vibeshot.following', language) : t('vibeshot.follow', language)}</button>
            )}
          </div>
        </div>

        {/* Grid divider */}
        <div style={{
          display: 'flex', justifyContent: 'center', borderTop: `0.5px solid ${border}`,
          borderBottom: `0.5px solid ${border}`, padding: '10px 0',
        }}>
          <span style={{ fontSize: 18 }}>&#9638;</span>
        </div>

        {/* Posts grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, padding: 2 }}>
          {userPosts.length > 0 ? userPosts.map(post => {
            const postImg = getVibeShotPostImage(post.id)
            return (
              <div key={post.id} style={{
                aspectRatio: '1', overflow: 'hidden', cursor: 'pointer', borderRadius: 2,
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
              }}>
                {postImg ? (
                  <img src={postImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>{post.emoji}</div>
                )}
              </div>
            )
          }) : (
            <div style={{
              gridColumn: '1 / -1', textAlign: 'center', padding: '40px 20px',
              color: textSecondary, fontSize: 14,
            }}>{t('vibeshot.noPosts', language)}</div>
          )}
        </div>
      </div>
    </div>
  )
}
