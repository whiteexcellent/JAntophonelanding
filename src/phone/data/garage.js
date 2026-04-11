// Janto Phone - Data Fixtures: Garage
export const garageData = {
  vehicles: [
    {
      id: 'v1',
      name: 'Sultan RS',
      plate: '34 JNT 01',
      emoji: '🏎️',
      color: '#ff453a',
      status: 'stored', // stored, out, impounded, junkyard
      fuel: 78,
      engine: 92,
      body: 85,
      mileage: 12450,
      insurance: { tr: 'Aktif', en: 'Active' },
      insuranceExpiry: '2024-12-15',
      value: 185000,
      distanceHistory: [
        { date: '2024-03-01', km: 45 },
        { date: '2024-03-02', km: 120 },
        { date: '2024-03-03', km: 30 },
        { date: '2024-03-04', km: 85 },
      ],
      insuranceHistory: [
        { date: '2024-01-15', type: { tr: 'Kasko Yenileme', en: 'Full Coverage Renewal' }, amount: 4500 },
        { date: '2023-07-20', type: { tr: 'Hasar Talebi', en: 'Damage Claim' }, amount: -2200 },
      ],
    },
    {
      id: 'v2',
      name: 'Elegy RH8',
      plate: '34 JNT 02',
      emoji: '🚗',
      color: '#0a84ff',
      status: 'out',
      fuel: 45,
      engine: 88,
      body: 72,
      mileage: 28900,
      insurance: { tr: 'Aktif', en: 'Active' },
      insuranceExpiry: '2024-09-30',
      value: 142000,
      distanceHistory: [
        { date: '2024-03-01', km: 200 },
        { date: '2024-03-02', km: 55 },
      ],
      insuranceHistory: [
        { date: '2024-02-01', type: { tr: 'Kasko Yenileme', en: 'Full Coverage Renewal' }, amount: 3800 },
      ],
    },
    {
      id: 'v3',
      name: 'Kuruma',
      plate: '34 JNT 03',
      emoji: '🚙',
      color: '#f59e0b',
      status: 'impounded',
      fuel: 12,
      engine: 55,
      body: 40,
      mileage: 67200,
      insurance: { tr: 'Süresi Dolmuş', en: 'Expired' },
      insuranceExpiry: '2024-01-01',
      value: 45000,
      distanceHistory: [],
      insuranceHistory: [],
    },
    {
      id: 'v4',
      name: 'Faggio',
      plate: '34 JNT 04',
      emoji: '🛵',
      color: '#22c55e',
      status: 'junkyard',
      fuel: 0,
      engine: 10,
      body: 15,
      mileage: 95000,
      insurance: { tr: 'Yok', en: 'None' },
      insuranceExpiry: null,
      value: 2500,
      distanceHistory: [],
      insuranceHistory: [],
    },
  ],
  stats: {
    totalVehicles: 4,
    stored: 1,
    out: 1,
    impounded: 1,
    junkyard: 1,
  },
}

export function getVehicle(id) {
  return garageData.vehicles.find(v => v.id === id) || null
}

export default garageData
