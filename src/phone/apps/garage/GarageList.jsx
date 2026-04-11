import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import garageData from '../../data/garage'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function GarageList() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'
  const garageIcon = getAppleSketchArtwork('garage', themeMode)

  const stats = garageData.stats

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {garageIcon && <img src={garageIcon} alt="" style={{ width: 24, height: 24, borderRadius: 6 }} />}
          <span style={{ fontSize: 17, fontWeight: 700 }}>{t('garage.title', language)}</span>
        </div>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ display: 'flex', gap: 8, padding: '8px 18px', overflow: 'auto' }}>
        {[
          { label: t('garage.totalVehicles', language), val: stats.totalVehicles, color: '#0a84ff' },
          { label: t('garage.stored', language), val: stats.stored, color: '#22c55e' },
          { label: t('garage.out', language), val: stats.out, color: '#f59e0b' },
          { label: t('garage.impounded', language), val: stats.impounded, color: '#ff453a' },
        ].map((stat) => (
          <div key={stat.label} style={{
            flex: 1, minWidth: 70, padding: '10px 8px', borderRadius: 16, textAlign: 'center',
            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: stat.color }}>{stat.val}</div>
            <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {garageData.vehicles.map((vehicle) => {
          // Use app icons as vehicle type indicators
          const vehicleTypeIcon = vehicle.type === 'motorcycle'
            ? getAppleSketchArtwork('maps', themeMode)
            : getAppleSketchArtwork('garage', themeMode)

          return (
            <div key={vehicle.id}
              onClick={() => pushRoute('garage.vehicleDetail', { vehicleId: vehicle.id })}
              style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
                borderRadius: 20, cursor: 'pointer',
                background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, overflow: 'hidden',
                background: `${vehicle.color}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {vehicleTypeIcon ? (
                  <img src={vehicleTypeIcon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: 24 }}>{vehicle.emoji}</span>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{vehicle.name}</div>
                <div style={{ fontSize: 12, opacity: 0.5, marginTop: 2 }}>
                  {vehicle.plate} &bull; {typeof vehicle.insurance === 'object' ? vehicle.insurance[language] : vehicle.insurance}
                </div>
              </div>
              <div style={{
                padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 600,
                background: vehicle.status === 'stored' ? '#22c55e22' : vehicle.status === 'out' ? '#f59e0b22' : vehicle.status === 'impounded' ? '#ff453a22' : '#8e8e9322',
                color: vehicle.status === 'stored' ? '#22c55e' : vehicle.status === 'out' ? '#f59e0b' : vehicle.status === 'impounded' ? '#ff453a' : '#8e8e93',
              }}>
                {t(`garage.${vehicle.status}`, language)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
