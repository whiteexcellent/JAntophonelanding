// Janto Phone - Data Fixtures: Bank
export const bankData = {
  accounts: [
    {
      id: 'ba1',
      type: 'personal',
      name: { tr: 'Kişisel Hesap', en: 'Personal Account' },
      balance: 24750,
      iban: 'TR12 0001 2345 6789 0123 4567 89',
      color: '#0a84ff',
      emoji: '💳',
    },
    {
      id: 'ba2',
      type: 'job',
      name: { tr: 'İş Hesabı', en: 'Job Account' },
      balance: 8400,
      iban: 'TR34 0001 2345 6789 0123 4567 90',
      color: '#22c55e',
      emoji: '💼',
    },
    {
      id: 'ba3',
      type: 'shared',
      name: { tr: 'Ortak Hesap', en: 'Shared Account' },
      balance: 3200,
      iban: 'TR56 0001 2345 6789 0123 4567 91',
      color: '#f59e0b',
      emoji: '🤝',
    },
  ],
  transactions: [
    { id: 'tx1', accountId: 'ba1', type: 'income', amount: 5000, description: { tr: 'Maaş Ödemesi', en: 'Salary Payment' }, from: 'İş Yeri', time: '14:00', date: '2024-03-04' },
    { id: 'tx2', accountId: 'ba1', type: 'expense', amount: -350, description: { tr: 'Market Alışverişi', en: 'Grocery Shopping' }, to: 'Market', time: '11:30', date: '2024-03-04' },
    { id: 'tx3', accountId: 'ba1', type: 'expense', amount: -1200, description: { tr: 'Kira Ödemesi', en: 'Rent Payment' }, to: 'Ev Sahibi', time: '09:00', date: '2024-03-03' },
    { id: 'tx4', accountId: 'ba1', type: 'income', amount: 800, description: { tr: 'Transfer Geldi', en: 'Transfer Received' }, from: 'Ahmet Kaya', time: '16:20', date: '2024-03-02' },
    { id: 'tx5', accountId: 'ba1', type: 'expense', amount: -4500, description: { tr: 'Araç Sigorta', en: 'Vehicle Insurance' }, to: 'Sigorta Plus', time: '10:00', date: '2024-03-01' },
    { id: 'tx6', accountId: 'ba2', type: 'income', amount: 3200, description: { tr: 'Görev Bonusu', en: 'Mission Bonus' }, from: 'Organizasyon', time: '22:00', date: '2024-03-03' },
    { id: 'tx7', accountId: 'ba2', type: 'expense', amount: -750, description: { tr: 'Ekipman Alımı', en: 'Equipment Purchase' }, to: 'Silah Dükkanı', time: '15:30', date: '2024-03-02' },
    { id: 'tx8', accountId: 'ba2', type: 'income', amount: 1500, description: { tr: 'İş Geliri', en: 'Job Income' }, from: 'Patron', time: '20:00', date: '2024-03-01' },
    { id: 'tx9', accountId: 'ba3', type: 'income', amount: 2000, description: { tr: 'Ortak Gelir', en: 'Shared Income' }, from: 'Ekip', time: '18:00', date: '2024-03-03' },
    { id: 'tx10', accountId: 'ba3', type: 'expense', amount: -600, description: { tr: 'Araç Tamiri', en: 'Vehicle Repair' }, to: 'Mekanist Oto', time: '14:00', date: '2024-03-02' },
    { id: 'tx11', accountId: 'ba1', type: 'expense', amount: -180, description: { tr: 'Yakıt', en: 'Fuel' }, to: 'Benzinlik', time: '08:30', date: '2024-03-04' },
    { id: 'tx12', accountId: 'ba1', type: 'expense', amount: -95, description: { tr: 'Kahve & Yemek', en: 'Coffee & Food' }, to: 'Restoran', time: '13:00', date: '2024-03-04' },
  ],
  recipients: [
    { id: 'r1', name: 'Ahmet Kaya', iban: 'TR78 0001 9876 5432 1098 7654 32', initials: 'AK', color: '#ff9500' },
    { id: 'r2', name: 'Zeynep Demir', iban: 'TR90 0001 8765 4321 0987 6543 21', initials: 'ZD', color: '#ff2d55' },
    { id: 'r3', name: 'Can Özkan', iban: 'TR12 0001 7654 3210 9876 5432 10', initials: 'CÖ', color: '#22c55e' },
    { id: 'r4', name: 'Mekanist Oto', iban: 'TR34 0001 6543 2109 8765 4321 09', initials: 'MO', color: '#8e8e93' },
    { id: 'r5', name: 'Sigorta Plus', iban: 'TR56 0001 5432 1098 7654 3210 98', initials: 'SP', color: '#f59e0b' },
  ],
  bills: [
    { id: 'b1', name: { tr: 'Elektrik Faturası', en: 'Electric Bill' }, amount: 450, dueDate: '2024-03-15', paid: false },
    { id: 'b2', name: { tr: 'Su Faturası', en: 'Water Bill' }, amount: 120, dueDate: '2024-03-20', paid: false },
    { id: 'b3', name: { tr: 'İnternet Faturası', en: 'Internet Bill' }, amount: 250, dueDate: '2024-03-10', paid: true },
  ],
}

export default bankData
