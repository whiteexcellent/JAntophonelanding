import { useNavigationStore } from '../stores/navigationStore'
import { useSystemStore } from '../stores/systemStore'

export function PhoneModalHost() {
  const modalStack = useNavigationStore(s => s.modalStack)
  const closeModal = useNavigationStore(s => s.closeModal)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'

  if (modalStack.length === 0) return null
  const modal = modalStack[modalStack.length - 1]

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 180,
      background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 20px',
    }} onClick={closeModal}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: 300, borderRadius: 20, padding: 24,
        background: isDark ? '#1c1c1e' : '#fff',
        color: isDark ? '#fff' : '#000',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
      }}>
        {typeof modal === 'string' ? <div style={{ fontSize: 15, textAlign: 'center' }}>{modal}</div> : modal}
      </div>
    </div>
  )
}
