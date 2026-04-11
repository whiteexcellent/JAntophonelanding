import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const notes = [
  { id: 1, title: 'Meeting Notes', preview: 'Discussed Q2 roadmap with the team. Key priorities include...', date: '2026-03-28' },
  { id: 2, title: 'Shopping List', preview: 'Milk, eggs, bread, avocados, olive oil, pasta...', date: '2026-03-27' },
  { id: 3, title: 'Book Recommendations', preview: 'The Design of Everyday Things, Atomic Habits, Deep Work...', date: '2026-03-25' },
  { id: 4, title: 'Travel Ideas', preview: 'Tokyo in spring, Iceland northern lights, Bali retreat...', date: '2026-03-20' },
]

export default function NotesList() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('notes.title', language) || 'Notes'}</span>
        <button style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>
          +
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px' }}>
        {notes.map(note => (
          <div key={note.id} onClick={() => pushRoute('notes.detail', { noteId: note.id })} style={{
            background: isDark ? '#1c1c1e' : '#fff', borderRadius: 16, padding: '14px 16px',
            marginBottom: 8, cursor: 'pointer',
          }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: isDark ? '#fff' : '#000', marginBottom: 4 }}>
              {note.title}
            </div>
            <div style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)', marginBottom: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {note.preview}
            </div>
            <div style={{ fontSize: 11, color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)' }}>
              {note.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
