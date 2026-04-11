import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const notesData = {
  1: { title: 'Meeting Notes', body: 'Discussed Q2 roadmap with the team. Key priorities include launching the new dashboard, improving onboarding flow, and reducing churn. Action items assigned to each team lead.' },
  2: { title: 'Shopping List', body: 'Milk, eggs, bread, avocados, olive oil, pasta, tomato sauce, garlic, onions, chicken breast, rice, lemons.' },
  3: { title: 'Book Recommendations', body: 'The Design of Everyday Things - Don Norman\nAtomic Habits - James Clear\nDeep Work - Cal Newport\nThinking, Fast and Slow - Daniel Kahneman' },
  4: { title: 'Travel Ideas', body: 'Tokyo in spring for cherry blossoms. Iceland in winter for northern lights. Bali for a wellness retreat. Portugal coast road trip.' },
}

export default function NotesDetail({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const noteId = params.noteId ?? 1
  const note = notesData[noteId] || notesData[1]
  const [title, setTitle] = useState(note.title)
  const [body, setBody] = useState(note.body)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <button style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
          {t('notes.save', language) || 'Save'}
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px 18px' }}>
        <input value={title} onChange={e => setTitle(e.target.value)} style={{
          width: '100%', border: 'none', outline: 'none', fontSize: 24, fontWeight: 700,
          background: 'transparent', color: isDark ? '#fff' : '#000', padding: '8px 0',
          fontFamily: 'inherit',
        }} />
        <textarea value={body} onChange={e => setBody(e.target.value)} style={{
          width: '100%', border: 'none', outline: 'none', fontSize: 15, lineHeight: 1.6,
          background: 'transparent', color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.8)',
          padding: '4px 0', resize: 'none', minHeight: 300, fontFamily: 'inherit',
        }} />
      </div>
    </div>
  )
}
