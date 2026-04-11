import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'
import bankData from '../../data/bank'
import { IOSSegmentedControl } from '../../components/ios'
import { getAppleSketchArtwork } from '../../data/sketchRuntimeAssets'

export default function BankHistory() {
  const language = useSystemStore(s => s.language)
  const themeMode = useSystemStore(s => s.themeMode)
  const goBack = useNavigationStore(s => s.goBack)
  const isDark = themeMode === 'dark'

  const [filterIndex, setFilterIndex] = useState(0)
  const filterKeys = ['all', 'income', 'expense']

  const allTransactions = [...bankData.transactions].sort((a, b) => {
    const da = new Date(a.date + 'T' + a.time)
    const db = new Date(b.date + 'T' + b.time)
    return db - da
  })

  const filter = filterKeys[filterIndex]
  const filtered = filter === 'all'
    ? allTransactions
    : allTransactions.filter(tx => tx.type === filter)

  const segments = [
    language === 'tr' ? 'Hepsi' : 'All',
    t('bank.income', language),
    t('bank.expense', language),
  ]

  const bankIcon = getAppleSketchArtwork('bank', themeMode)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      {/* Header */}
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {bankIcon && <img src={bankIcon} alt="" style={{ width: 20, height: 20, borderRadius: 5 }} />}
          <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('bank.history', language)}</span>
        </div>
        <div style={{ width: 50 }} />
      </div>

      {/* Filter tabs — iOS Segmented Control */}
      <div style={{ padding: '8px 18px 12px' }}>
        <IOSSegmentedControl
          segments={segments}
          activeIndex={filterIndex}
          onChange={setFilterIndex}
          variant={isDark ? 'dark' : 'light'}
        />
      </div>

      {/* Transaction list */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px', opacity: 0.4, fontSize: 14 }}>
            {language === 'tr' ? 'Islem bulunamadi' : 'No transactions found'}
          </div>
        )}
        {filtered.map(tx => (
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
              <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tx.description[language]}</div>
              <div style={{ fontSize: 11, opacity: 0.5, marginTop: 2 }}>{tx.date} {tx.time}</div>
            </div>
            <div style={{
              fontSize: 15, fontWeight: 700,
              color: tx.type === 'income' ? '#22c55e' : '#ff453a',
            }}>{tx.type === 'income' ? '+' : ''}{tx.amount.toLocaleString('tr-TR')} &#8378;</div>
          </div>
        ))}
        <div style={{ height: 20 }} />
      </div>
    </div>
  )
}
