import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import { getProfileAvatar, getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'
import { IOSToggle } from '../../components/ios'

function BackButton({ onBack }) {
  const lang = useSystemStore(s => s.language)
  return (
    <div onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: 'var(--phone-blue)' }}>
      <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
    </div>
  )
}

function SettingsRow({ icon, iconSrc, label, value, chevron = true, toggle, toggleValue, onToggle, onClick, danger }) {
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12,
      cursor: onClick ? 'pointer' : 'default',
      borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
    }}>
      {iconSrc ? (
        <div style={{ width: 28, height: 28, borderRadius: 7, overflow: 'hidden', flexShrink: 0 }}>
          <img src={iconSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      ) : icon ? (
        <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{icon}</span>
      ) : null}
      <span style={{ flex: 1, fontSize: 16, fontWeight: 400, color: danger ? '#ff453a' : undefined }}>{label}</span>
      {value && <span style={{ fontSize: 15, opacity: 0.4 }}>{value}</span>}
      {toggle && (
        <IOSToggle value={!!toggleValue} onChange={() => onToggle?.()} />
      )}
      {chevron && !toggle && <span style={{ opacity: 0.3, fontSize: 18 }}>&rsaquo;</span>}
    </div>
  )
}

export default function SettingsMain() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const flightMode = useSystemStore(s => s.flightMode)
  const wifiEnabled = useSystemStore(s => s.wifiEnabled)
  const bluetoothEnabled = useSystemStore(s => s.bluetoothEnabled)
  const toggleFlightMode = useSystemStore(s => s.toggleFlightMode)
  const toggleWifi = useSystemStore(s => s.toggleWifi)
  const toggleBluetooth = useSystemStore(s => s.toggleBluetooth)
  const push = useNavigationStore(s => s.pushRoute)

  const bg = isDark ? '#111' : '#fff'
  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.title', lang)}</h1>
      </div>

      {/* Account header */}
      <div onClick={() => push('settings.account')} style={{
        margin: '8px 16px', borderRadius: 18, background: groupBg, padding: '14px 16px',
        display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
      }}>
        <div style={{ width: 60, height: 60, borderRadius: 30, overflow: 'hidden', background: '#0a84ff' }}>
          <img src={getProfileAvatar('u1')} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Emre Yılmaz</div>
          <div style={{ fontSize: 13, opacity: 0.5 }}>{t('settings.accountName', lang)}</div>
        </div>
        <span style={{ marginLeft: 'auto', opacity: 0.3, fontSize: 18 }}>›</span>
      </div>

      {/* Connectivity group */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <SettingsRow icon="✈️" label={t('settings.airplaneMode', lang)} toggle toggleValue={flightMode} onToggle={toggleFlightMode} chevron={false} />
        <SettingsRow icon="📶" label={t('settings.wifi', lang)} value={wifiEnabled ? t('settings.connected', lang) : t('settings.off', lang)} toggle toggleValue={wifiEnabled} onToggle={toggleWifi} chevron={false} />
        <SettingsRow icon="🔵" label={t('settings.bluetooth', lang)} toggle toggleValue={bluetoothEnabled} onToggle={toggleBluetooth} chevron={false} />
        <SettingsRow icon="📱" label={t('settings.cellularData', lang)} onClick={() => {}} />
      </div>

      {/* General group */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <SettingsRow icon="🔔" label={t('settings.notifications', lang)} onClick={() => push('settings.notifications.index')} />
        <SettingsRow icon="🔊" label={t('settings.soundsHaptics', lang)} onClick={() => push('settings.soundsHaptics')} />
        <SettingsRow icon="⏱" label={t('settings.screenTime', lang)} onClick={() => push('settings.screenTime')} />
        <SettingsRow icon="⚙️" label={t('settings.general', lang)} onClick={() => push('settings.general')} />
      </div>

      {/* Display group */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <SettingsRow icon="🌓" label={t('settings.displayBrightness', lang)} onClick={() => push('settings.displayBrightness')} />
        <SettingsRow icon="🎨" label={t('settings.theme', lang)} onClick={() => push('settings.theme')} />
        <SettingsRow icon="🖼" label={t('settings.wallpaper', lang)} onClick={() => push('settings.wallpaper')} />
        <SettingsRow icon="🌐" label={t('settings.language', lang)} value={lang === 'tr' ? 'Türkçe' : 'English'} onClick={() => push('settings.language')} />
      </div>

      {/* Info group */}
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <SettingsRow icon="♿" label={t('settings.accessibility', lang)} onClick={() => {}} />
        <SettingsRow icon="❓" label={t('settings.help', lang)} onClick={() => push('settings.help')} />
        <SettingsRow icon="ℹ️" label={t('settings.about', lang)} onClick={() => push('settings.about')} />
        <SettingsRow icon="📄" label={t('settings.terms', lang)} onClick={() => {}} />
        <SettingsRow icon="🔒" label={t('settings.privacy', lang)} onClick={() => push('settings.privacy')} />
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
