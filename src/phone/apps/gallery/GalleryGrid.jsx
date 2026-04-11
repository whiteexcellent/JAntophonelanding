import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { galleryPhotos } from '../../data/sketchRuntimeAssets'
import { IOSSegmentedControl } from '../../components/ios'

export default function GalleryGrid() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    t('gallery.photos', language) || 'Photos',
    t('gallery.videos', language) || 'Videos',
    t('gallery.albums', language) || 'Albums',
  ]

  const tabIds = ['photos', 'videos', 'albums']

  const albums = [
    { id: 'recents', name: language === 'tr' ? 'Son Eklenenler' : 'Recents', count: galleryPhotos.length, cover: galleryPhotos[0]?.src },
    { id: 'favorites', name: language === 'tr' ? 'Favoriler' : 'Favorites', count: 4, cover: galleryPhotos[3]?.src },
    { id: 'screenshots', name: language === 'tr' ? 'Ekran Görüntüleri' : 'Screenshots', count: 3, cover: galleryPhotos[8]?.src },
    { id: 'selfies', name: 'Selfies', count: 2, cover: galleryPhotos[12]?.src },
  ]

  const currentTab = tabIds[activeTab]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('gallery.title', language) || 'Gallery'}</span>
        <div style={{ width: 50 }} />
      </div>

      {/* iOS Segmented Control */}
      <div style={{ padding: '8px 18px 4px' }}>
        <IOSSegmentedControl
          segments={tabs}
          activeIndex={activeTab}
          onChange={setActiveTab}
          variant={isDark ? 'dark' : 'light'}
        />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px 18px' }}>
        {currentTab === 'photos' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
            {galleryPhotos.map((photo, i) => (
              <div key={photo.id} onClick={() => pushRoute('gallery.preview', { photoId: i })} style={{
                aspectRatio: '1', borderRadius: 2, cursor: 'pointer', overflow: 'hidden',
              }}>
                <img src={photo.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        )}

        {currentTab === 'albums' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {albums.map(album => (
              <div key={album.id} style={{ cursor: 'pointer' }}>
                <div style={{ aspectRatio: '1', borderRadius: 12, overflow: 'hidden', marginBottom: 6, background: isDark ? '#1c1c1e' : '#e5e5ea' }}>
                  {album.cover && <img src={album.cover} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>{album.name}</div>
                <div style={{ fontSize: 12, opacity: 0.5 }}>{album.count}</div>
              </div>
            ))}
          </div>
        )}

        {currentTab === 'videos' && (
          <div style={{ textAlign: 'center', padding: '40px 20px', opacity: 0.4, fontSize: 14 }}>
            {language === 'tr' ? 'Henüz video yok' : 'No videos yet'}
          </div>
        )}
      </div>
    </div>
  )
}
