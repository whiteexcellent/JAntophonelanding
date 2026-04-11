import { useEffect } from 'react'
import { useSystemStore } from '../stores/systemStore'

export default function BootScreen() {
  const finishBoot = useSystemStore(s => s.finishBoot)

  useEffect(() => {
    const timer = setTimeout(finishBoot, 1800)
    return () => clearTimeout(timer)
  }, [finishBoot])

  return (
    <div style={{
      position: 'absolute', inset: 0, background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 200,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22, fontWeight: 800, color: '#fff',
      }}>J</div>
      <div style={{
        width: 80, height: 4, borderRadius: 2, marginTop: 24,
        background: 'linear-gradient(90deg, transparent, rgba(10,132,255,0.6), transparent)',
        animation: 'phone-boot-pulse 1.5s ease-in-out infinite',
      }} />
    </div>
  )
}
