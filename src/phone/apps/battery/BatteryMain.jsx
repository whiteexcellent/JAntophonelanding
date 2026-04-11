import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { useDeviceStore } from '../../stores/deviceStore'
import { t } from '../../core/localization'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'
import { IOSToggle } from '../../components/ios'

export default function BatteryMain() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const batteryLevel = useDeviceStore(s => s.batteryLevel)
  const isCharging = useDeviceStore(s => s.isCharging)
  const chargeSource = useDeviceStore(s => s.chargeSource)
  const powerbankLevel = useDeviceStore(s => s.powerbankLevel)

  const [lowPowerMode, setLowPowerMode] = useState(false)
  const batteryIcon = getAppleSketchArtwork('battery', themeMode)

  const batteryColor = batteryLevel <= 20 ? '#ff453a' : batteryLevel <= 50 ? '#ffd60a' : '#30d158'
  const pct = Math.round(batteryLevel)
  const circumference = 2 * Math.PI * 54
  const dashOffset = circumference - (circumference * pct / 100)

  const usageStats = [
    { label: t('battery.screen', language) || 'Screen', pct: 38, color: '#0a84ff', iconKey: 'gallery' },
    { label: t('battery.apps', language) || 'Apps', pct: 24, color: '#30d158', iconKey: 'vstore' },
    { label: t('battery.network', language) || 'Network', pct: 18, color: '#ff9f0a', iconKey: 'safari' },
    { label: t('battery.system', language) || 'System', pct: 12, color: '#bf5af2', iconKey: 'settings' },
    { label: t('battery.other', language) || 'Other', pct: 8, color: '#636366', iconKey: 'files' },
  ]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {batteryIcon && <img src={batteryIcon} alt="" style={{ width: 22, height: 22, borderRadius: 5 }} />}
          <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('battery.title', language) || 'Battery'}</span>
        </div>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px 18px' }}>
        <div style={{
          background: isDark ? '#1c1c1e' : '#fff', borderRadius: 20, padding: '28px 20px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 12,
        }}>
          <div style={{ position: 'relative', width: 128, height: 128, marginBottom: 12 }}>
            <svg width="128" height="128" viewBox="0 0 128 128" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="64" cy="64" r="54" fill="none" stroke={isDark ? 'rgba(255,255,255,0.08)' : '#e5e5ea'} strokeWidth="10" />
              <circle cx="64" cy="64" r="54" fill="none" stroke={batteryColor} strokeWidth="10"
                strokeDasharray={circumference} strokeDashoffset={dashOffset}
                strokeLinecap="round" />
            </svg>
            <div style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 32, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{pct}%</span>
            </div>
          </div>

          {isCharging && (
            <div style={{ fontSize: 13, color: '#30d158', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              &#9889; {t('battery.charging', language) || 'Charging'} ({chargeSource === 'wireless' ? 'Wireless' : chargeSource === 'powerbank' ? 'Powerbank' : 'USB'})
            </div>
          )}
        </div>

        {/* Low Power Mode Toggle */}
        <div style={{
          background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '14px 16px',
          marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 15, color: isDark ? '#fff' : '#000' }}>
            {t('battery.lowPowerMode', language) || 'Low Power Mode'}
          </span>
          <IOSToggle
            value={lowPowerMode}
            onChange={setLowPowerMode}
            activeColor="#30d158"
          />
        </div>

        {chargeSource === 'powerbank' && (
          <div style={{
            background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '14px 16px', marginBottom: 12,
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000', marginBottom: 8 }}>
              {t('battery.powerbank', language) || 'Powerbank'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 6, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.08)' : '#e5e5ea', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${powerbankLevel}%`, borderRadius: 3, background: '#ff9f0a' }} />
              </div>
              <span style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}>
                {Math.round(powerbankLevel)}%
              </span>
            </div>
          </div>
        )}

        {/* Usage stats with app icons */}
        <div style={{ background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '14px 16px' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000', marginBottom: 10 }}>
            {t('battery.usageStats', language) || 'Usage Stats'}
          </div>
          {usageStats.map((stat, i) => {
            const icon = getAppleSketchArtwork(stat.iconKey, themeMode)
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < usageStats.length - 1 ? 10 : 0,
              }}>
                <div style={{ width: 20, height: 20, borderRadius: 5, overflow: 'hidden', flexShrink: 0 }}>
                  {icon ? (
                    <img src={icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', borderRadius: 5, background: stat.color }} />
                  )}
                </div>
                <span style={{ flex: 1, fontSize: 14, color: isDark ? '#fff' : '#000' }}>{stat.label}</span>
                <div style={{ width: 80, height: 5, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.08)' : '#e5e5ea', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${stat.pct}%`, borderRadius: 3, background: stat.color }} />
                </div>
                <span style={{ fontSize: 12, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', minWidth: 28, textAlign: 'right' }}>
                  {stat.pct}%
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
