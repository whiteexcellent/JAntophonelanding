import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { cameraAssets } from '../../data/sketchRuntimeAssets'

export default function CameraCapture() {
  const language = useSystemStore(s => s.language)
  const goBack = useNavigationStore(s => s.goBack)
  const [mode, setMode] = useState('photo')
  const [flash, setFlash] = useState(false)
  const [focusRing, setFocusRing] = useState(null)

  const modes = [
    { id: 'photo', label: t('camera.photo', language) || 'Photo' },
    { id: 'video', label: t('camera.video', language) || 'Video' },
    { id: 'portrait', label: t('camera.portrait', language) || 'Portrait' },
  ]

  const handleViewfinderClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setFocusRing({ x, y })
    setTimeout(() => setFocusRing(null), 800)
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000' }}>
      {/* Top bar */}
      <div style={{
        padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <button onClick={() => setFlash(!flash)} style={{
          background: 'none', border: 'none', color: flash ? '#ffd60a' : '#fff', fontSize: 20, cursor: 'pointer',
        }}>
          {flash ? '\u26A1' : '\u26A1'}
        </button>
      </div>

      {/* Viewfinder with Sketch image */}
      <div
        onClick={handleViewfinderClick}
        style={{
          flex: 1, position: 'relative', borderRadius: 16, margin: '0 8px', overflow: 'hidden',
          background: '#111',
        }}
      >
        <img src={cameraAssets.viewfinderBg} alt="" style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }} />

        {/* Focus ring animation */}
        {focusRing && (
          <div style={{
            position: 'absolute', left: focusRing.x - 30, top: focusRing.y - 30,
            width: 60, height: 60, borderRadius: 4, border: '1.5px solid #ffd60a',
            pointerEvents: 'none',
            animation: 'focusPulse 0.6s ease-out',
          }} />
        )}

        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', left: '33.33%', top: 0, bottom: 0, width: 0.5, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ position: 'absolute', left: '66.66%', top: 0, bottom: 0, width: 0.5, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ position: 'absolute', top: '33.33%', left: 0, right: 0, height: 0.5, background: 'rgba(255,255,255,0.15)' }} />
          <div style={{ position: 'absolute', top: '66.66%', left: 0, right: 0, height: 0.5, background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>

      {/* Mode selector */}
      <div style={{ padding: '16px 0 8px', display: 'flex', justifyContent: 'center', gap: 20 }}>
        {modes.map(m => (
          <button key={m.id} onClick={() => setMode(m.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: mode === m.id ? '#ffd60a' : 'rgba(255,255,255,0.5)',
            fontSize: 13, fontWeight: mode === m.id ? 700 : 500,
          }}>{m.label}</button>
        ))}
      </div>

      {/* Shutter + controls */}
      <div style={{ padding: '12px 0 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
        {/* Last capture thumbnail */}
        <div style={{ width: 36, height: 36, borderRadius: 8, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.3)' }}>
          <img src={cameraAssets.lastCapture} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        {/* Shutter */}
        <button style={{
          width: 68, height: 68, borderRadius: 34,
          background: mode === 'video' ? '#ff453a' : '#fff',
          border: '4px solid rgba(255,255,255,0.3)',
          cursor: 'pointer', flexShrink: 0,
        }} />
        {/* Flip camera */}
        <button style={{
          width: 36, height: 36, borderRadius: 18, background: 'rgba(255,255,255,0.15)',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 16, backdropFilter: 'blur(10px)',
        }}>
          &#x21BB;
        </button>
      </div>
    </div>
  )
}
