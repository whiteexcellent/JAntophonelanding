import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { readLocalized, t } from '../../core/localization'
import bankData from '../../data/bank'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function BankAccounts() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const pushRoute = useNavigationStore((s) => s.pushRoute)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === 'dark'
  const totalBalance = bankData.accounts.reduce((sum, account) => sum + account.balance, 0)
  const walletIcon = getAppleSketchArtwork('bank', themeMode)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('bank.title', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ textAlign: 'center', padding: '12px 18px 16px' }}>
        {walletIcon && <img src={walletIcon} alt="" style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 8 }} />}
        <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 4 }}>{t('bank.balance', language)}</div>
        <div style={{ fontSize: 32, fontWeight: 800, color: isDark ? '#fff' : '#000' }}>
          {totalBalance.toLocaleString('tr-TR')} TL
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '0 18px 12px' }}>
        <button onClick={() => pushRoute('bank.transfer')} style={{
          flex: 1, padding: '12px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: '#0a84ff', color: '#fff', fontSize: 14, fontWeight: 600,
        }}>
          {t('bank.transfer', language)}
        </button>
        <button onClick={() => pushRoute('bank.history')} style={{
          flex: 1, padding: '12px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
          color: isDark ? '#fff' : '#000', fontSize: 14, fontWeight: 600,
        }}>
          {t('bank.history', language)}
        </button>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '4px 18px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {bankData.accounts.map((account) => (
          <div key={account.id}
            onClick={() => pushRoute('bank.accountDetail', { accountId: account.id })}
            style={{
              padding: '18px 16px', borderRadius: 20, cursor: 'pointer',
              background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
            <div style={{
              width: 50, height: 50, borderRadius: 16,
              background: `${account.color}22`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24,
            }}>
              {account.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>
                {readLocalized(account.name, language, 'Account')}
              </div>
              <div style={{ fontSize: 12, opacity: 0.5, marginTop: 3 }}>
                {account.iban.slice(0, 7)}...{account.iban.slice(-4)}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: account.color }}>
                {account.balance.toLocaleString('tr-TR')} TL
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
