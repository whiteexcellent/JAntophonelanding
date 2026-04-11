import { useSystemStore } from '../../stores/systemStore'
import { useAccountStore } from '../../stores/accountStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

export default function SettingsAccount() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const owner = useAccountStore(s => s.deviceOwner)
  const pop = useNavigationStore(s => s.popRoute)
  const groupBg = isDark ? '#1c1c1e' : '#fff'

  const Row = ({ icon, label, onClick }) => (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', minHeight: 52, padding: '0 16px', gap: 12, cursor: 'pointer',
      borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
    }}>
      {icon && <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>{icon}</span>}
      <span style={{ flex: 1, fontSize: 16 }}>{label}</span>
      <span style={{ opacity: 0.3, fontSize: 18 }}>›</span>
    </div>
  )

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '0 16px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('settings.title', lang)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0' }}>
        <div style={{ width: 80, height: 80, borderRadius: 40, background: owner.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, color: '#fff' }}>{owner.initials}</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>{owner.name}</div>
        <div style={{ fontSize: 14, opacity: 0.5 }}>{owner.email}</div>
      </div>
      <div style={{ margin: '8px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <Row icon="👤" label={t('settings.profile', lang)} onClick={() => {}} />
        <Row icon="🔐" label={t('settings.passwordSecurity', lang)} onClick={() => {}} />
        <Row icon="💳" label={t('settings.paymentShipping', lang)} onClick={() => {}} />
        <Row icon="☁️" label={t('settings.icloud', lang)} onClick={() => {}} />
        <Row icon="🛒" label={t('settings.mediaPurchases', lang)} onClick={() => {}} />
        <Row icon="📍" label={t('settings.findMy', lang)} onClick={() => {}} />
      </div>
      <div style={{ height: 40 }} />
    </div>
  )
}
