import { useCallStore } from '../stores/callStore'
import { useMediaStore } from '../stores/mediaStore'
import { useNavigationStore } from '../stores/navigationStore'

function WaveformBars() {
  return (
    <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 16 }}>
      {[10, 16, 8, 14, 12].map((height, index) => (
        <div
          key={index}
          style={{
            width: 3,
            height,
            borderRadius: 1.5,
            background: '#ff2d55',
            animation: `phone-boot-pulse ${0.45 + index * 0.08}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  )
}

export function PhoneDynamicIsland() {
  const callStatus = useCallStore((s) => s.callStatus)
  const caller = useCallStore((s) => s.caller)
  const callElapsed = useCallStore((s) => s.elapsed)
  const isPlaying = useMediaStore((s) => s.isPlaying)
  const activeTrackId = useMediaStore((s) => s.activeTrackId)
  const minimized = useCallStore((s) => s.minimized)

  const hasCall = callStatus === 'active' && minimized
  const hasMedia = isPlaying && activeTrackId && !hasCall
  const restoreCall = useCallStore((s) => s.restoreCall)
  const openApp = useNavigationStore((s) => s.openApp)
  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

  if (hasCall) {
    return (
      <div
        className="phone-dynamic-island"
        onClick={restoreCall}
        style={{ width: 196, transition: 'width 220ms ease', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', width: '100%' }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: '#22c55e', animation: 'phone-boot-pulse 1s infinite' }} />
          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600, flex: 1 }}>
            {caller?.name || 'Call'}
          </span>
          <span style={{ fontSize: 11, color: '#22c55e', fontWeight: 600 }}>
            {formatTime(callElapsed)}
          </span>
        </div>
      </div>
    )
  }

  if (hasMedia) {
    return (
      <div
        className="phone-dynamic-island"
        onClick={() => openApp('music', 'player')}
        style={{ width: 172, transition: 'width 220ms ease', cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', width: '100%' }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              background: '#ff2d55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 9,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            M
          </div>
          <WaveformBars />
        </div>
      </div>
    )
  }

  return <div className="phone-dynamic-island" style={{ opacity: 0.98 }} />
}
