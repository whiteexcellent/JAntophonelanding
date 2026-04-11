import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { galleryPhotos } from '../../data/sketchRuntimeAssets'

export default function GalleryPreview({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const goBack = useNavigationStore(s => s.goBack)
  const [showControls, setShowControls] = useState(true)
  const [photoIdx, setPhotoIdx] = useState(params.photoId ?? 0)
  const [favorite, setFavorite] = useState(false)

  const photo = galleryPhotos[photoIdx] || galleryPhotos[0]
  const hasPrev = photoIdx > 0
  const hasNext = photoIdx < galleryPhotos.length - 1

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000', position: 'relative' }}
      onClick={() => setShowControls(c => !c)}>

      {/* Top bar */}
      {showControls && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
          padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
        }}>
          <button onClick={(e) => { e.stopPropagation(); goBack() }} style={{
            background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff', fontSize: 16,
            cursor: 'pointer', borderRadius: 20, padding: '6px 14px', backdropFilter: 'blur(10px)',
          }}>
            {t('system.back', language)}
          </button>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 500 }}>
            {photoIdx + 1} / {galleryPhotos.length}
          </span>
          <button onClick={(e) => { e.stopPropagation(); setFavorite(f => !f) }} style={{
            background: 'rgba(0,0,0,0.4)', border: 'none', fontSize: 20, cursor: 'pointer',
            borderRadius: 20, padding: '4px 10px', backdropFilter: 'blur(10px)',
            color: favorite ? '#ff453a' : 'rgba(255,255,255,0.8)',
          }}>
            {favorite ? '\u2665' : '\u2661'}
          </button>
        </div>
      )}

      {/* Image */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src={photo.src} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />

        {/* Nav arrows */}
        {showControls && hasPrev && (
          <button onClick={(e) => { e.stopPropagation(); setPhotoIdx(i => i - 1) }} style={{
            position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: 18, background: 'rgba(0,0,0,0.5)',
            border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer', backdropFilter: 'blur(10px)',
          }}>&lsaquo;</button>
        )}
        {showControls && hasNext && (
          <button onClick={(e) => { e.stopPropagation(); setPhotoIdx(i => i + 1) }} style={{
            position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
            width: 36, height: 36, borderRadius: 18, background: 'rgba(0,0,0,0.5)',
            border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer', backdropFilter: 'blur(10px)',
          }}>&rsaquo;</button>
        )}
      </div>

      {/* Bottom toolbar */}
      {showControls && (
        <div style={{
          padding: '16px 0 28px', display: 'flex', justifyContent: 'space-around', alignItems: 'center',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }}>
          {[
            { icon: '\u21D7', label: t('gallery.share', language) || 'Share' },
            { icon: '\u2661', label: t('gallery.favorite', language) || 'Favorite' },
            { icon: '\u24D8', label: t('gallery.info', language) || 'Info' },
            { icon: '\u2716', label: t('gallery.delete', language) || 'Delete' },
          ].map((btn, i) => (
            <button key={i} onClick={(e) => e.stopPropagation()} style={{
              background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            }}>
              <span style={{ fontSize: 22 }}>{btn.icon}</span>
              <span style={{ fontSize: 11, opacity: 0.7 }}>{btn.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
