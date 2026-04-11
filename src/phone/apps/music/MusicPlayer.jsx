import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useMediaStore } from '../../stores/mediaStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { getTrack } from '../../data/music'
import { getMusicAlbumCover } from '../../data/sketchRuntimeAssets'
import { IOSSlider } from '../../components/ios'

export default function MusicPlayer() {
  const lang = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'
  const pop = useNavigationStore(s => s.popRoute)
  const activeTrackId = useMediaStore(s => s.activeTrackId)
  const isPlaying = useMediaStore(s => s.isPlaying)
  const elapsed = useMediaStore(s => s.elapsed)
  const duration = useMediaStore(s => s.duration)
  const pauseTrack = useMediaStore(s => s.pauseTrack)
  const resumeTrack = useMediaStore(s => s.resumeTrack)
  const nextTrack = useMediaStore(s => s.nextTrack)
  const prevTrack = useMediaStore(s => s.prevTrack)
  const likedTrackIds = useMediaStore(s => s.likedTrackIds)
  const toggleLike = useMediaStore(s => s.toggleLike)
  const [volume, setVolume] = useState(0.7)

  const track = activeTrackId ? getTrack(activeTrackId) : null
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
  const isLiked = activeTrackId && likedTrackIds.includes(activeTrackId)
  const progress = duration > 0 ? (elapsed / duration) * 100 : 0
  const albumCover = activeTrackId ? getMusicAlbumCover(activeTrackId, themeMode) : null

  if (!track) return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ opacity: 0.4, fontSize: 15 }}>{t('music.nowPlaying', lang)}</div>
    </div>
  )

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: isDark ? '#000' : '#f2f2f7', padding: '0 24px',
    }}>
      <div onClick={pop} style={{ position: 'absolute', top: 8, left: 16, cursor: 'pointer', fontSize: 17, color: '#0a84ff' }}>
        <span style={{ fontSize: 20 }}>&lsaquo;</span> {t('system.back', lang)}
      </div>

      {/* Album art */}
      <div style={{
        width: 260, height: 260, borderRadius: 16, margin: '0 auto', overflow: 'hidden',
        background: isDark ? '#1c1c1e' : '#e5e5ea',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        {albumCover ? (
          <img src={albumCover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>{track.emoji}</div>
        )}
      </div>

      {/* Track info */}
      <div style={{ marginTop: 28, textAlign: 'center', width: '100%' }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>{typeof track.title === 'object' ? track.title[lang] : track.title}</div>
        <div style={{ fontSize: 16, opacity: 0.5, marginTop: 4 }}>{track.artist}</div>
      </div>

      {/* Progress bar */}
      <div style={{ width: '100%', marginTop: 24 }}>
        <div style={{ width: '100%', height: 4, borderRadius: 2, background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ height: '100%', borderRadius: 2, width: `${progress}%`, background: '#ff2d55', transition: 'width 0.3s' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.4, marginTop: 4 }}>
          <span>{fmt(elapsed)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, marginTop: 20 }}>
        <div onClick={prevTrack} style={{ fontSize: 28, cursor: 'pointer', opacity: 0.7 }}>&#9198;</div>
        <div onClick={() => isPlaying ? pauseTrack() : resumeTrack()} style={{
          width: 64, height: 64, borderRadius: 32, background: isDark ? '#fff' : '#000',
          color: isDark ? '#000' : '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer',
        }}>{isPlaying ? '\u23F8' : '\u25B6'}</div>
        <div onClick={nextTrack} style={{ fontSize: 28, cursor: 'pointer', opacity: 0.7 }}>&#9197;</div>
      </div>

      {/* Like + Volume */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, width: '100%' }}>
        <div onClick={() => toggleLike(activeTrackId)} style={{ fontSize: 24, cursor: 'pointer' }}>
          {isLiked ? '\u2665\uFE0F' : '\u2661'}
        </div>
        <div style={{ flex: 1 }}>
          <IOSSlider
            value={volume}
            onChange={setVolume}
            trackColor={isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)'}
            leftIcon={<span>&#128264;</span>}
            rightIcon={<span>&#128266;</span>}
            variant={isDark ? 'dark' : 'light'}
          />
        </div>
      </div>
    </div>
  )
}
