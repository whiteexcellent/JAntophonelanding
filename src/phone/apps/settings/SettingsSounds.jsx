import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

export default function SettingsSounds() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const volume = useSystemStore(s => s.volume)
  const setVolume = useSystemStore(s => s.setVolume)
  const pop = useNavigationStore(s => s.popRoute)

  const [vibration, setVibration] = useState(true)
  const [keyboardClicks, setKeyboardClicks] = useState(true)
  const [lockSound, setLockSound] = useState(true)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.soundsHaptics', lang)}</h1>
      </div>

      {/* Volume slider */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '16px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>
          {lang === 'tr' ? 'Ses Seviyesi' : 'Volume'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 16, opacity: 0.5 }}>🔈</span>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            style={{
              flex: 1, height: 4, appearance: 'none', WebkitAppearance: 'none',
              background: `linear-gradient(to right, #0a84ff 0%, #0a84ff ${volume}%, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} ${volume}%, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} 100%)`,
              borderRadius: 2, outline: 'none', cursor: 'pointer',
            }}
          />
          <span style={{ fontSize: 16, opacity: 0.5 }}>🔊</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: 8, fontSize: 13, opacity: 0.4 }}>{volume}%</div>
      </div>

      {/* Ringtone */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
          borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>🎵</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Zil Sesi' : 'Ringtone'}
          </span>
          <span style={{ fontSize: 15, opacity: 0.4 }}>Janto Pulse</span>
          <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>💬</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Mesaj Sesi' : 'Text Tone'}
          </span>
          <span style={{ fontSize: 15, opacity: 0.4 }}>Tri-tone</span>
          <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
        </div>
      </div>

      {/* Toggles */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
          borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>📳</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Titresim' : 'Vibration'}
          </span>
          <div onClick={() => setVibration(!vibration)} data-on={String(vibration)} className="phone-toggle">
            <div className="phone-toggle-knob" />
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
          borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>⌨️</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Klavye Sesleri' : 'Keyboard Clicks'}
          </span>
          <div onClick={() => setKeyboardClicks(!keyboardClicks)} data-on={String(keyboardClicks)} className="phone-toggle">
            <div className="phone-toggle-knob" />
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>🔒</span>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400 }}>
            {lang === 'tr' ? 'Kilit Sesi' : 'Lock Sound'}
          </span>
          <div onClick={() => setLockSound(!lockSound)} data-on={String(lockSound)} className="phone-toggle">
            <div className="phone-toggle-knob" />
          </div>
        </div>
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
