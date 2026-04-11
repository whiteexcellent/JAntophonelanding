import { useSystemStore } from '../../stores/systemStore'
import { useNavigationStore } from '../../stores/navigationStore'
import { t } from '../../core/localization'

const faqItems = [
  {
    questionTr: 'Janto Phone nasil sifirlanir?',
    questionEn: 'How do I reset my Janto Phone?',
    answerTr: 'Ayarlar > Genel > Aktar veya Sifirla bolumunden cihazinizi fabrika ayarlarina dondurabilirsiniz.',
    answerEn: 'Go to Settings > General > Transfer or Reset to restore your device to factory settings.',
  },
  {
    questionTr: 'Pil omrunu nasil uzatabilirim?',
    questionEn: 'How can I extend battery life?',
    answerTr: 'Dusuk Guc Modunu aktif edin, ekran parlakligini azaltin ve arka plan yenilemelerini kapatin.',
    answerEn: 'Enable Low Power Mode, reduce screen brightness, and turn off background app refresh.',
  },
  {
    questionTr: 'Dil degistirme nasil yapilir?',
    questionEn: 'How do I change language?',
    answerTr: 'Ayarlar > Dil bolumunden Turkce veya Ingilizce secebilirsiniz.',
    answerEn: 'Go to Settings > Language to choose Turkish or English.',
  },
]

export default function SettingsHelp() {
  const lang = useSystemStore(s => s.language)
  const isDark = useSystemStore(s => s.themeMode) === 'dark'
  const pop = useNavigationStore(s => s.popRoute)

  const groupBg = isDark ? '#1c1c1e' : '#fff'

  return (
    <div style={{ flex: 1, background: isDark ? '#000' : '#f2f2f7', overflowY: 'auto', scrollbarWidth: 'none' }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <div onClick={pop} style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', padding: '8px 0', fontSize: 17, color: '#0a84ff' }}>
          <span style={{ fontSize: 20 }}>‹</span> {t('system.back', lang)}
        </div>
        <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.5 }}>{t('settings.help', lang)}</h1>
      </div>

      {/* Device info header */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, padding: '20px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>📱</div>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Janto Phone v2.4.1</div>
        <div style={{ fontSize: 13, opacity: 0.5, marginTop: 4 }}>JantoOS 2.4</div>
      </div>

      {/* Contact info */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px 8px', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', opacity: 0.5 }}>
          {lang === 'tr' ? 'Iletisim' : 'Contact'}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 48, padding: '0 16px', gap: 12,
          borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>📧</span>
          <span style={{ flex: 1, fontSize: 16 }}>support@jantophone.com</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 48, padding: '0 16px', gap: 12,
          borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>🌐</span>
          <span style={{ flex: 1, fontSize: 16 }}>www.jantophone.com</span>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', minHeight: 48, padding: '0 16px', gap: 12,
        }}>
          <span style={{ fontSize: 20, width: 28, textAlign: 'center' }}>📞</span>
          <span style={{ flex: 1, fontSize: 16 }}>+90 212 555 0199</span>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ margin: '12px 16px', borderRadius: 18, background: groupBg, overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px 8px', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', opacity: 0.5 }}>
          {lang === 'tr' ? 'Sik Sorulan Sorular' : 'FAQ'}
        </div>
        {faqItems.map((item, i) => (
          <div key={i} style={{
            padding: '12px 16px',
            borderBottom: i < faqItems.length - 1 ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none',
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>
              {lang === 'tr' ? item.questionTr : item.questionEn}
            </div>
            <div style={{ fontSize: 14, opacity: 0.6, lineHeight: 1.5 }}>
              {lang === 'tr' ? item.answerTr : item.answerEn}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
