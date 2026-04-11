import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import vibseshotData from '../../data/vibeshot'
import { IOSTextField } from '../../components/ios'

export default function VibeshotLogin() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const pushRoute = useNavigationStore(s => s.pushRoute)
  const replaceRoute = useNavigationStore(s => s.replaceRoute)
  const isDark = themeMode === 'dark'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    replaceRoute('vibeshot.feed')
  }

  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: isDark ? '#000' : '#fafafa', padding: '0 32px',
    }}>
      <div style={{
        fontSize: 42, fontWeight: 900, letterSpacing: -2, marginBottom: 32,
        background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>Vibeshot</div>

      <div style={{ width: '100%', marginBottom: 10 }}>
        <IOSTextField
          value={username}
          onChange={setUsername}
          placeholder={t('vibeshot.username', language)}
          type="text"
          variant={isDark ? 'dark' : 'light'}
        />
      </div>
      <div style={{ width: '100%', marginBottom: 16 }}>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password"
          placeholder={t('vibeshot.password', language)}
          style={{
            width: '100%', padding: '14px 16px', borderRadius: 10, border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : '#dbdbdb'}`,
            background: isDark ? 'rgba(255,255,255,0.05)' : '#fafafa', color: isDark ? '#fff' : '#000',
            fontSize: 14, outline: 'none', boxSizing: 'border-box',
          }}
        />
      </div>

      <button onClick={handleLogin} style={{
        width: '100%', padding: '14px 0', borderRadius: 10, border: 'none', fontSize: 15, fontWeight: 700,
        background: '#0095f6', color: '#fff', cursor: 'pointer',
      }}>{t('vibeshot.login', language)}</button>

      <div style={{ marginTop: 20, fontSize: 13, opacity: 0.5 }}>
        {t('vibeshot.dontHaveAccount', language)} <span style={{ color: '#0095f6', cursor: 'pointer' }}>{t('vibeshot.signup', language)}</span>
      </div>
    </div>
  )
}
