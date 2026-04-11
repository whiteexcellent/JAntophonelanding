import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

const events = [
  { title: 'Team Standup', time: '10:00 AM', color: '#0a84ff' },
  { title: 'Design Review', time: '2:30 PM', color: '#30d158' },
]

const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function CalendarMonth() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const today = now.getDate()
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth()

  const monthName = new Date(year, month).toLocaleString(language === 'tr' ? 'tr-TR' : 'en-US', { month: 'long' })

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
  }

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={prevMonth} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 18, cursor: 'pointer' }}>◀</button>
          <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000', minWidth: 140, textAlign: 'center' }}>
            {monthName} {year}
          </span>
          <button onClick={nextMonth} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 18, cursor: 'pointer' }}>▶</button>
        </div>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ padding: '12px 18px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0, textAlign: 'center' }}>
          {dayLabels.map(d => (
            <div key={d} style={{ fontSize: 11, fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', padding: '6px 0' }}>
              {d}
            </div>
          ))}
          {cells.map((day, i) => {
            const isToday = isCurrentMonth && day === today
            return (
              <div key={i} style={{
                padding: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {day && (
                  <div style={{
                    width: 32, height: 32, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isToday ? '#0a84ff' : 'transparent',
                    color: isToday ? '#fff' : (isDark ? '#fff' : '#000'),
                    fontSize: 14, fontWeight: isToday ? 700 : 400,
                  }}>
                    {day}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ padding: '16px 18px', flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000', marginBottom: 10 }}>
          {t('calendar.events', language) || 'Events'}
        </div>
        {events.map((ev, i) => (
          <div key={i} style={{
            background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '12px 16px',
            marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 4, height: 36, borderRadius: 2, background: ev.color }} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>{ev.title}</div>
              <div style={{ fontSize: 12, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)', marginTop: 2 }}>{ev.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
