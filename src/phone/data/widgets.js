// Janto Phone - Data Fixtures: Widgets
export const widgetTypes = {
  weather: {
    id: 'weather',
    name: { tr: 'Hava Durumu', en: 'Weather' },
    sizes: ['small', 'medium'],
    render: (size, theme) => ({
      emoji: '☀️',
      title: { tr: '24°C', en: '24°C' },
      subtitle: { tr: 'Güneşli', en: 'Sunny' },
      location: 'Los Santos',
    }),
  },
  date: {
    id: 'date',
    name: { tr: 'Tarih', en: 'Date' },
    sizes: ['small'],
    render: () => {
      const d = new Date()
      const days = { tr: ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'], en: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] }
      const months = { tr: ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'], en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] }
      return { day: d.getDate(), dayName: days, month: months, monthIndex: d.getMonth(), dayIndex: d.getDay() }
    },
  },
  calendar: {
    id: 'calendar',
    name: { tr: 'Takvim', en: 'Calendar' },
    sizes: ['small', 'medium'],
    render: () => ({ emoji: '📅', events: 2 }),
  },
  time: {
    id: 'time',
    name: { tr: 'Saat', en: 'Clock' },
    sizes: ['small'],
    render: () => ({ type: 'analog' }),
  },
  media: {
    id: 'media',
    name: { tr: 'Medya', en: 'Media' },
    sizes: ['medium'],
    render: () => ({ emoji: '🎵', compact: true }),
  },
}

export default widgetTypes
