import { useSystemStore } from '../../stores/systemStore'
import { useMediaStore } from '../../stores/mediaStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { musicData } from '../../data/music'
import { getMusicAlbumCover } from '../../data/sketchRuntimeAssets'

export default function MusicLibrary() {
  const lang = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'
  const pop = useNavigationStore(s => s.popRoute)
  const likedTrackIds = useMediaStore(s => s.likedTrackIds)
  const playTrack = useMediaStore(s => s.playTrack)
  const push = useNavigationStore(s => s.pushRoute)
  const likedTracks = musicData.tracks.filter(t => likedTrackIds.includes(t.id))

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '0 16px' }}>
        <div onClick={pop} style={{ display:'flex',alignItems:'center',gap:4,cursor:'pointer',padding:'8px 0',fontSize:17,color:'#0a84ff' }}><span style={{fontSize:20}}>&lsaquo;</span> {t('system.back',lang)}</div>
        <h1 style={{ fontSize: 34, fontWeight: 800, margin: 0 }}>{t('music.library', lang)}</h1>
      </div>
      <div style={{ padding: '16px 16px 8px', fontSize: 18, fontWeight: 700 }}>{'\u2665'} {t('music.liked', lang)} ({likedTracks.length})</div>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {likedTracks.map(track => {
          const cover = getMusicAlbumCover(track.id, themeMode)
          return (
            <div key={track.id} onClick={() => { playTrack(track.id, likedTrackIds); push('music.player') }} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 14,
              background: isDark ? '#1c1c1e' : '#fff', cursor: 'pointer',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', background: isDark ? '#222' : '#eee', flexShrink: 0 }}>
                {cover ? <img src={cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{track.emoji}</div>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{typeof track.title === 'object' ? track.title[lang] : track.title}</div>
                <div style={{ fontSize: 12, opacity: 0.5 }}>{track.artist}</div>
              </div>
              <span style={{ opacity: 0.3 }}>&rsaquo;</span>
            </div>
          )
        })}
        {likedTracks.length === 0 && <div style={{ padding: 20, textAlign: 'center', opacity: 0.4, fontSize: 14 }}>{lang === 'tr' ? 'Henuz begenilen sarki yok' : 'No liked songs yet'}</div>}
      </div>
      <div style={{ height: 40 }} />
    </div>
  )
}
