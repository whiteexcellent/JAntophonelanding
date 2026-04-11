import { useSystemStore } from '../../stores/systemStore'
import { useMediaStore } from '../../stores/mediaStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { musicData, getTrack } from '../../data/music'
import { getMusicAlbumCover } from '../../data/sketchRuntimeAssets'
import { IOSTabBar } from '../../components/ios'

function AlbumArt({ trackId, size = 140, style = {} }) {
  const themeMode = useSystemStore(s => s.themeMode)
  const src = getMusicAlbumCover(trackId, themeMode)
  return (
    <div style={{ width: size, height: size, borderRadius: 12, overflow: 'hidden', background: themeMode === 'dark' ? '#1c1c1e' : '#e5e5ea', flexShrink: 0, ...style }}>
      {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" /> : null}
    </div>
  )
}

export default function MusicHome() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const playTrack = useMediaStore(s => s.playTrack)
  const push = useNavigationStore(s => s.pushRoute)
  const activeTrackId = useMediaStore(s => s.activeTrackId)

  const track = activeTrackId ? getTrack(activeTrackId) : null
  const trackIds = musicData.tracks.map(t => t.id)

  const handlePlay = (trackId) => {
    playTrack(trackId, trackIds)
    push('music.player')
  }

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5, margin: 0 }}>{t('music.title', lang)}</h1>
      </div>

      {/* Category chips */}
      <div style={{ display: 'flex', gap: 8, padding: '8px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {musicData.categories.map(cat => (
          <div key={cat.id} style={{
            height: 38, borderRadius: 19, padding: '0 16px',
            background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
            whiteSpace: 'nowrap', cursor: 'pointer', flexShrink: 0,
          }}>
            <span>{cat.emoji}</span>
            <span>{typeof cat.name === 'object' ? cat.name[lang] : cat.name}</span>
          </div>
        ))}
      </div>

      {/* Trending rail */}
      <div style={{ padding: '16px 0 0' }}>
        <div style={{ padding: '0 16px 8px', fontSize: 20, fontWeight: 700 }}>{t('music.trending', lang)}</div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 16px', scrollbarWidth: 'none' }}>
          {musicData.tracks.slice(0, 6).map(tr => (
            <div key={tr.id} onClick={() => handlePlay(tr.id)} style={{
              flexShrink: 0, width: 140, borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
              background: isDark ? '#1c1c1e' : '#fff',
            }}>
              <AlbumArt trackId={tr.id} size={140} />
              <div style={{ padding: '8px 10px 4px', fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {typeof tr.title === 'object' ? tr.title[lang] : tr.title}
              </div>
              <div style={{ padding: '0 10px 10px', fontSize: 11, opacity: 0.5 }}>{tr.artist}</div>
            </div>
          ))}
        </div>
      </div>

      {/* For You rail */}
      <div style={{ padding: '16px 0 0' }}>
        <div style={{ padding: '0 16px 8px', fontSize: 20, fontWeight: 700 }}>{t('music.forYou', lang)}</div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 16px', scrollbarWidth: 'none' }}>
          {musicData.tracks.slice(6, 12).map(tr => (
            <div key={tr.id} onClick={() => handlePlay(tr.id)} style={{
              flexShrink: 0, width: 140, borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
              background: isDark ? '#1c1c1e' : '#fff',
            }}>
              <AlbumArt trackId={tr.id} size={140} />
              <div style={{ padding: '8px 10px 4px', fontSize: 13, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {typeof tr.title === 'object' ? tr.title[lang] : tr.title}
              </div>
              <div style={{ padding: '0 10px 10px', fontSize: 11, opacity: 0.5 }}>{tr.artist}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div style={{ padding: '16px 0 0' }}>
        <div style={{ padding: '0 16px 8px', fontSize: 20, fontWeight: 700 }}>{t('music.playlists', lang)}</div>
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {musicData.playlists.map(pl => {
            const coverTrackId = pl.trackIds[0]
            return (
              <div key={pl.id} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 16,
                background: isDark ? '#1c1c1e' : '#fff', cursor: 'pointer',
              }}>
                <AlbumArt trackId={coverTrackId} size={48} style={{ borderRadius: 10 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{typeof pl.name === 'object' ? pl.name[lang] : pl.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.5 }}>{pl.trackIds.length} {lang === 'tr' ? 'sarki' : 'songs'}</div>
                </div>
                <span style={{ opacity: 0.3, fontSize: 18 }}>&rsaquo;</span>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ height: track ? 100 : 40 }} />

      {/* Bottom tab bar */}
      <IOSTabBar
        tabs={[
          { id: 'home', icon: '\u266B', label: lang === 'tr' ? 'Ana Sayfa' : 'Home' },
          { id: 'search', icon: '\u26B2', label: t('music.search', lang) },
          { id: 'library', icon: '\u25A6', label: t('music.library', lang) },
        ]}
        activeTab="home"
        onChange={(tabId) => { if (tabId === 'search') push('music.search'); if (tabId === 'library') push('music.library') }}
        variant={isDark ? 'dark' : 'light'}
        accentColor="#fa2d55"
      />
    </div>
  )
}
