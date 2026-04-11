import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import bankData from '../../data/bank'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function BankDetail({ params = {} }) {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'
  const [copied, setCopied] = useState(false)
  const bankIcon = getAppleSketchArtwork('bank', themeMode)

  const account = bankData.accounts.find(a => a.id === params.accountId) || bankData.accounts[0]
  const transactions = bankData.transactions.filter(tx => tx.accountId === account.id)

  const handleCopyIban = () => {
    navigator.clipboard?.writeText(account.iban).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      {/* Header */}
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000', display: 'flex', alignItems: 'center', gap: 6 }}>
          {bankIcon && <img src={bankIcon} alt="" style={{ width: 20, height: 20, borderRadius: 5 }} />}
          {account.name[language]}
        </span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* Balance card */}
        <div style={{
          margin: '8px 18px 12px', padding: '24px 20px', borderRadius: 24,
          background: `linear-gradient(135deg, ${account.color}, ${account.color}cc)`,
          textAlign: 'center', color: '#fff',
        }}>
          <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 6 }}>{t('bank.balance', language)}</div>
          <div style={{ fontSize: 36, fontWeight: 800 }}>{account.balance.toLocaleString('tr-TR')} &#8378;</div>
          <div style={{ fontSize: 24, marginTop: 8 }}>{account.emoji}</div>
        </div>

        {/* IBAN */}
        <div style={{
          margin: '0 18px 14px', padding: '14px 16px', borderRadius: 16,
          background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 4 }}>{t('bank.iban', language)}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: isDark ? '#fff' : '#000', letterSpacing: 0.5 }}>{account.iban}</div>
          </div>
          <button onClick={handleCopyIban} style={{
            background: copied ? '#22c55e' : '#0a84ff', border: 'none', borderRadius: 10,
            padding: '8px 14px', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap', marginLeft: 10,
          }}>{copied ? t('system.copied', language) : t('bank.copyIban', language)}</button>
        </div>

        {/* Recent transactions */}
        <div style={{ padding: '0 18px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: isDark ? '#fff' : '#000' }}>{t('bank.history', language)}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {transactions.map(tx => (
              <div key={tx.id} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 16,
                background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: tx.type === 'income' ? 'rgba(34,197,94,0.15)' : 'rgba(255,69,58,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                  color: tx.type === 'income' ? '#22c55e' : '#ff453a',
                }}>{tx.type === 'income' ? '\u2193' : '\u2191'}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>{tx.description[language]}</div>
                  <div style={{ fontSize: 11, opacity: 0.5, marginTop: 2 }}>{tx.date} {tx.time}</div>
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: tx.type === 'income' ? '#22c55e' : '#ff453a',
                }}>{tx.type === 'income' ? '+' : ''}{tx.amount.toLocaleString('tr-TR')} &#8378;</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
