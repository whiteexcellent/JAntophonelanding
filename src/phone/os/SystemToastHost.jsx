import { useState, useEffect } from 'react'

const toastQueue = []
let toastListeners = []
export function showToast(msg) {
  toastQueue.push({ id: Date.now(), msg })
  toastListeners.forEach(fn => fn([...toastQueue]))
}

export function SystemToastHost() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const listener = (q) => setToasts([...q])
    toastListeners.push(listener)
    return () => { toastListeners = toastListeners.filter(l => l !== listener) }
  }, [])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        toastQueue.shift()
        setToasts([...toastQueue])
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [toasts])

  if (toasts.length === 0) return null
  const toast = toasts[0]

  return (
    <div style={{
      position: 'absolute', bottom: 100, left: '50%', transform: 'translateX(-50%)', zIndex: 210,
      padding: '10px 20px', borderRadius: 20, fontSize: 13, fontWeight: 600,
      background: 'rgba(0,0,0,0.8)', color: '#fff', backdropFilter: 'blur(20px)',
      whiteSpace: 'nowrap', pointerEvents: 'none',
    }}>{toast.msg}</div>
  )
}
