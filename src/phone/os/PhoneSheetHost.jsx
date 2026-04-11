import { useNavigationStore } from '../stores/navigationStore'
import { useSystemStore } from '../stores/systemStore'

export function PhoneSheetHost() {
  const sheetStack = useNavigationStore(s => s.sheetStack)
  const closeSheet = useNavigationStore(s => s.closeSheet)
  const themeMode = useSystemStore(s => s.themeMode)
  const isDark = themeMode === 'dark'

  if (sheetStack.length === 0) return null
  const sheet = sheetStack[sheetStack.length - 1]

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 170,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }} onClick={closeSheet}>
      <div onClick={e => e.stopPropagation()} style={{
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        padding: '8px 0 24px', maxHeight: '70%', overflow: 'auto',
        background: isDark ? '#1c1c1e' : '#fff',
        color: isDark ? '#fff' : '#000',
      }}>
        <div style={{ width: 36, height: 5, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)', margin: '0 auto 12px' }} />
        <div style={{ padding: '0 20px' }}>
          {typeof sheet === 'string' ? <div style={{ fontSize: 15 }}>{sheet}</div> : sheet}
        </div>
      </div>
    </div>
  )
}
