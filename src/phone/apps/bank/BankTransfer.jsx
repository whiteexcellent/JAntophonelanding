import { useState } from 'react'
import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { useNotificationStore } from '../../stores/notificationStore'
import { t } from '../../core/localization'
import { showToast } from '../../os/SystemToastHost'
import bankData from '../../data/bank'
import { getProfileAvatar } from '../../data/sketchRuntimeAssets'

export default function BankTransfer() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const replaceRoute = useNavigationStore((s) => s.replaceRoute)
  const enqueueNotification = useNotificationStore((s) => s.enqueueNotification)
  const isDark = themeMode === 'dark'

  const [selectedRecipient, setSelectedRecipient] = useState(null)
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [sent, setSent] = useState(false)
  const sourceAccount = bankData.accounts[0]

  const numericAmount = Number(amount)
  const canSend = Boolean(selectedRecipient && numericAmount > 0)

  const handleSend = () => {
    if (!selectedRecipient || !numericAmount) return
    if (numericAmount > sourceAccount.balance) {
      showToast(t('bank.insufficientFunds', language))
      return
    }
    setSent(true)
    showToast(t('bank.transactionSuccess', language))
    enqueueNotification({
      appId: 'bank',
      title: { tr: 'Banka', en: 'Bank' },
      body: {
        tr: `${selectedRecipient.name} hesabina ${numericAmount.toLocaleString('tr-TR')} TL gonderildi`,
        en: `${numericAmount.toLocaleString('en-US')} TL sent to ${selectedRecipient.name}`,
      },
      intent: { appId: 'bank', screen: 'bank.accountDetail', params: { accountId: sourceAccount.id } },
      previewAllowed: true,
    })
    setTimeout(() => {
      setSent(false)
      replaceRoute('bank.accountDetail', { accountId: sourceAccount.id })
    }, 1200)
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: isDark ? '#000' : '#f2f2f7' }}>
      <div style={{ padding: '12px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#0a84ff', fontSize: 16, cursor: 'pointer' }}>
          {t('system.back', language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? '#fff' : '#000' }}>{t('bank.transfer', language)}</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '8px 18px' }}>
        {sent && (
          <div style={{
            padding: '14px 16px', borderRadius: 16, marginBottom: 12,
            background: 'rgba(34,197,94,0.15)', color: '#22c55e',
            fontSize: 14, fontWeight: 600, textAlign: 'center',
          }}>
            {t('bank.transactionSuccess', language)}
          </div>
        )}

        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10, color: isDark ? '#fff' : '#000' }}>
          {t('bank.registeredRecipients', language)}
        </div>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 14 }}>
          {bankData.recipients.map((recipient) => {
            const avatarSrc = getProfileAvatar(recipient.id)
            return (
              <div key={recipient.id}
                onClick={() => setSelectedRecipient(recipient)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', minWidth: 64 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 26, overflow: 'hidden',
                  border: selectedRecipient?.id === recipient.id ? '3px solid #0a84ff' : '3px solid transparent',
                }}>
                  <img src={avatarSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ fontSize: 11, textAlign: 'center', color: isDark ? '#fff' : '#000', opacity: 0.7, maxWidth: 64, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {recipient.name}
                </div>
              </div>
            )
          })}
        </div>

        {selectedRecipient && (
          <div style={{
            padding: '12px 16px', borderRadius: 16, marginBottom: 14,
            background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: isDark ? '#fff' : '#000' }}>{selectedRecipient.name}</div>
            <div style={{ fontSize: 12, opacity: 0.5, marginTop: 4 }}>{selectedRecipient.iban}</div>
          </div>
        )}

        <div style={{
          padding: '14px 16px', borderRadius: 16, marginBottom: 10,
          background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
        }}>
          <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 6 }}>{t('bank.amount', language)}</div>
          <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00 TL"
            style={{
              width: '100%', background: 'none', border: 'none', outline: 'none',
              fontSize: 24, fontWeight: 800, color: isDark ? '#fff' : '#000',
            }}
          />
        </div>

        <div style={{
          padding: '14px 16px', borderRadius: 16, marginBottom: 18,
          background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
        }}>
          <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 6 }}>{t('bank.description', language)}</div>
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}
            placeholder="..."
            style={{
              width: '100%', background: 'none', border: 'none', outline: 'none',
              fontSize: 15, color: isDark ? '#fff' : '#000',
            }}
          />
        </div>

        <button onClick={handleSend} style={{
          width: '100%', padding: '16px 0', borderRadius: 16, border: 'none', cursor: 'pointer',
          background: canSend ? '#0a84ff' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
          color: canSend ? '#fff' : isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
          fontSize: 16, fontWeight: 700,
        }}>
          {t('bank.sendMoney', language)}
        </button>
      </div>
    </div>
  )
}
