import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { useNotificationStore } from '../../stores/notificationStore'
import { readLocalized, t } from '../../core/localization'
import { showToast } from '../../os/SystemToastHost'
import { getVehicle } from '../../data/garage'

export default function GarageDetail({ params }) {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const resolveIntent = useNavigationStore((s) => s.resolveIntent)
  const enqueueNotification = useNotificationStore((s) => s.enqueueNotification)
  const isDark = themeMode === 'dark'
  const vehicle = getVehicle(params?.vehicleId)

  if (!vehicle) {
    return <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.4 }}>Vehicle not found</div>
  }

  const bars = [
    { label: t('garage.fuel', language), val: vehicle.fuel, color: '#f59e0b' },
    { label: t('garage.engine', language), val: vehicle.engine, color: '#0a84ff' },
    { label: t('garage.body', language), val: vehicle.body, color: '#22c55e' },
  ]

  const handleCallVehicle = () => {
    enqueueNotification({
      appId: 'garage',
      icon: '/ekosistem/garage.svg',
      title: { tr: 'Garaj', en: 'Garage' },
      body: {
        tr: `${vehicle.name} yola cikti`,
        en: `${vehicle.name} is on the way`,
      },
      intent: { appId: 'garage', screen: 'garage.vehicleDetail', params: { vehicleId: vehicle.id } },
    })
    showToast(language === 'tr' ? `${vehicle.name} cagrildi` : `${vehicle.name} has been called`)
  }

  const handleShowOnMap = () => {
    resolveIntent({
      appId: 'maps',
      screen: 'maps.main',
      params: { destination: vehicle.name, plate: vehicle.plate },
    })
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700 }}>{vehicle.name}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '0 18px 20px' }}>
        <div
          style={{
            borderRadius: 24,
            padding: '24px 20px',
            textAlign: 'center',
            marginBottom: 16,
            background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
          }}
        >
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 28,
              margin: '0 auto 12px',
              background: `${vehicle.color}22`,
              color: vehicle.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            {vehicle.name.slice(0, 2).toUpperCase()}
          </div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>{vehicle.name}</div>
          <div style={{ fontSize: 13, opacity: 0.5, marginTop: 4 }}>
            {t('garage.plate', language)}: {vehicle.plate}
          </div>
          <div
            style={{
              display: 'inline-block',
              marginTop: 8,
              padding: '4px 14px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 600,
              background: vehicle.status === 'stored' ? '#22c55e22' : '#ff453a22',
              color: vehicle.status === 'stored' ? '#22c55e' : '#ff453a',
            }}
          >
            {t(`garage.${vehicle.status}`, language)}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          {bars.map((bar) => (
            <div
              key={bar.label}
              style={{
                padding: '12px 16px',
                borderRadius: 16,
                background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{bar.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: bar.color }}>{bar.val}%</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.1)' : '#e5e5ea' }}>
                <div style={{ height: '100%', width: `${bar.val}%`, borderRadius: 3, background: bar.color, transition: 'width 0.3s' }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={handleCallVehicle}
            style={{
              flex: 1,
              padding: '14px 0',
              borderRadius: 16,
              border: 'none',
              fontSize: 14,
              fontWeight: 700,
              background: '#0a84ff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {t('garage.callVehicle', language)}
          </button>
          <button
            onClick={handleShowOnMap}
            style={{
              flex: 1,
              padding: '14px 0',
              borderRadius: 16,
              border: 'none',
              fontSize: 14,
              fontWeight: 700,
              background: isDark ? 'rgba(255,255,255,0.1)' : '#e5e5ea',
              color: isDark ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {t('garage.showOnMap', language)}
          </button>
        </div>

        {vehicle.distanceHistory.length > 0 && (
          <div
            style={{
              marginTop: 16,
              padding: '14px 16px',
              borderRadius: 16,
              background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
              {t('garage.distanceHistory', language)}
            </div>
            {vehicle.distanceHistory.map((distance, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '6px 0',
                  borderTop: index > 0 ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}` : 'none',
                }}
              >
                <span style={{ fontSize: 13, opacity: 0.6 }}>{distance.date}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{distance.km} km</span>
              </div>
            ))}
          </div>
        )}

        {vehicle.insuranceHistory.length > 0 && (
          <div
            style={{
              marginTop: 16,
              padding: '14px 16px',
              borderRadius: 16,
              background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
              {t('garage.insuranceHistory', language)}
            </div>
            {vehicle.insuranceHistory.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '8px 0',
                  borderTop: index > 0 ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e5ea'}` : 'none',
                }}
              >
                <span style={{ fontSize: 13, opacity: 0.7 }}>{readLocalized(item.type, language, '')}</span>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{item.amount.toLocaleString('tr-TR')} TL</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
