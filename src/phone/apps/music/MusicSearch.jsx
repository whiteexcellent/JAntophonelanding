import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { useMediaStore } from '../../stores/mediaStore'
import { t } from '../../core/localization'
import { musicData } from '../../data/music'
import { getMusicAlbumCover } from '../../data/sketchRuntimeAssets'
import { IOSTextField } from '../../components/ios'

export default function MusicSearch() {
  const lang = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'
  const pop = useNavigationStore(s => s.popRoute)
  const push = useNavigationStore(s => s.pushRoute)
  const playTrack = useMediaStore(s => s.playTrack)
  const [query, setQuery] = useState('')

  const allTracks = musicData.tracks
  const trackIds = allTracks.map(t => t.id)

  const results = query.trim()
    ? allTracks.filter(tr => {
        const title = typeof tr.title === 'object' ? (tr.title[lang] || tr.title.en || '') : tr.title
        const artist = tr.artist || ''
        const q = query.toLowerCase()
        return title.toLowerCase().includes(q) || artist.toLowerCase().includes(q)
      })
    : []

  const handlePlay = (trackId) => {
    playTrack(trackId, trackIds)
    push('music.player')
  }

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '0 16px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>&lsaquo;</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 8 }}>{t('music.search', lang)}</h1>
      </div>

      {/* iOS Search Field */}
      <div style={{ padding: '0 16px 8px' }}>
        <IOSTextField
          value={query}
          onChange={setQuery}
          placeholder={t('music.search', lang)}
          type="search"
          variant={isDark ? 'dark' : 'light'}
          cancelText={lang === 'tr' ? 'Iptal' : 'Cancel'}
          onCancel={() => setQuery('')}
        />
      </div>

      {/* Search results */}
      {query.trim() && results.length > 0 && (
        <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.5, marginBottom: 4 }}>
            {results.length} {lang === 'tr' ? 'sonuc' : 'results'}
          </div>
          {results.map(tr => {
            const cover = getMusicAlbumCover(tr.id, themeMode)
            const title = typeof tr.title === 'object' ? tr.title[lang] : tr.title
            return (
              <div key={tr.id} onClick={() => handlePlay(tr.id)} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 14,
                background: isDark ? 'rgba(255,255,255,0.06)' : '#fff', cursor: 'pointer',
              }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, overflow: 'hidden', background: isDark ? '#1c1c1e' : '#e5e5ea', flexShrink: 0 }}>
                  {cover && <img src={cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
                  <div style={{ fontSize: 12, opacity: 0.5 }}>{tr.artist}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', opacity: 0.4, fontSize: 14 }}>
          {lang === 'tr' ? 'Sonuc bulunamadi' : 'No results found'}
        </div>
      )}

      {/* Categories (show when no search) */}
      {!query.trim() && (
        <>
          <div style={{ padding: '16px 16px 8px', fontSize: 18, fontWeight: 700 }}>{t('music.categories', lang)}</div>
          <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {musicData.categories.map(c => (
              <div key={c.id} style={{ height: 80, borderRadius: 14, background: isDark ? '#1c1c1e' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>
                <span style={{ fontSize: 24 }}>{c.emoji}</span>
                {typeof c.name === 'object' ? c.name[lang] : c.name}
              </div>
            ))}
          </div>
        </>
      )}
      <div style={{ height: 40 }} />
    </div>
  )
}
