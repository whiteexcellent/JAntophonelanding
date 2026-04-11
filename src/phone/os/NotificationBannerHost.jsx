import { useState, useEffect } from 'react'
import { useNotificationStore } from '../stores/notificationStore'
import { useSystemStore } from '../stores/systemStore'
import { useNavigationStore } from '../stores/navigationStore'

export function NotificationBannerHost() {
  const bannerQueue = useNotificationStore(s => s.bannerQueue)
  const dismissBanner = useNotificationStore(s => s.dismissBanner)
  const clearBadge = useNotificationStore(s => s.clearBadge)
  const openNotification = useNotificationStore(s => s.openNotification)
  const resolveIntent = useNavigationStore(s => s.resolveIntent)
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'
  const [visible, setVisible] = useState(false)

  const banner = bannerQueue.length > 0 ? bannerQueue[0] : null

  useEffect(() => {
    if (banner) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        setTimeout(dismissBanner, 300)
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [banner?.id])

  if (!banner) return null

  return (
    <div style={{
      position: 'absolute', top: 4, left: 8, right: 8, zIndex: 200,
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      pointerEvents: 'auto',
    }}>
      <div
        onClick={() => {
          if (banner.intent) resolveIntent(banner.intent)
          if (banner.appId) clearBadge(banner.appId)
          openNotification(banner.id)
          dismissBanner()
        }}
        style={{
        width: '100%', borderRadius: 20, padding: '12px 14px',
        display: 'flex', alignItems: 'center', gap: 10,
        background: isDark ? 'rgba(30,30,30,0.92)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(40px)', cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}>
        {banner.icon && <img src={banner.icon} alt="" style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0 }} />}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>
            {typeof banner.title === 'object' ? (banner.title[language] || banner.title.en) : banner.title}
          </div>
          <div style={{ fontSize: 12, opacity: 0.6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: isDark ? '#fff' : '#000' }}>
            {typeof banner.body === 'object' ? (banner.body[language] || banner.body.en) : banner.body}
          </div>
        </div>
      </div>
    </div>
  )
}
