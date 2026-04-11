// Janto Phone - Data Fixtures: WhisApp
export const whisappChats = [
  {
    id: 'wa1',
    type: 'direct',
    userId: 'u2',
    name: 'Ahmet Kaya',
    initials: 'AK',
    color: '#ff9500',
    lastMessage: { tr: 'Canlı konumu açtım, bakabilirsin', en: 'I turned on live location, you can check' },
    time: '15:10',
    unread: 3,
    online: true,
    muted: false,
    liveLocation: true,
    messages: [
      { id: 'w1', from: 'u2', text: { tr: 'Neredesin?', en: 'Where are you?' }, time: '14:50', read: true },
      { id: 'w2', from: 'u1', text: { tr: 'Yoldayım, birazdan oradayım', en: "I'm on the way, almost there" }, time: '14:55', read: true },
      { id: 'w3', from: 'u2', text: { tr: 'Canlı konumu açtım, bakabilirsin', en: 'I turned on live location, you can check' }, time: '15:10', read: false, type: 'liveLocation' },
    ]
  },
  {
    id: 'wa2',
    type: 'direct',
    userId: 'u3',
    name: 'Zeynep Demir',
    initials: 'ZD',
    color: '#ff2d55',
    lastMessage: { tr: 'Yarın görüşürüz 👋', en: 'See you tomorrow 👋' },
    time: '12:30',
    unread: 0,
    online: false,
    muted: false,
    messages: [
      { id: 'w4', from: 'u3', text: { tr: 'Toplantı saat kaçta?', en: 'What time is the meeting?' }, time: '12:00' },
      { id: 'w5', from: 'u1', text: { tr: 'Saat 3\'te', en: 'At 3 o\'clock' }, time: '12:15' },
      { id: 'w6', from: 'u3', text: { tr: 'Yarın görüşürüz 👋', en: 'See you tomorrow 👋' }, time: '12:30', reaction: '👍' },
    ]
  },
  {
    id: 'wa3',
    type: 'direct',
    userId: 'u4',
    name: 'Can Özkan',
    initials: 'CÖ',
    color: '#22c55e',
    lastMessage: { tr: 'Aracı garajdan aldım', en: 'I picked up the car from garage' },
    time: '11:00',
    unread: 0,
    online: true,
    muted: false,
    messages: [
      { id: 'w7', from: 'u4', text: { tr: 'Aracı garajdan aldım', en: 'I picked up the car from garage' }, time: '11:00' },
    ]
  },
  {
    id: 'wa4',
    type: 'group',
    name: { tr: 'Ekip Sohbeti', en: 'Team Chat' },
    initials: 'ES',
    color: '#0a84ff',
    members: ['u1', 'u2', 'u3', 'u4'],
    lastMessage: { tr: 'Can: Herkes hazır mı?', en: 'Can: Is everyone ready?' },
    time: '16:00',
    unread: 2,
    muted: false,
    messages: [
      { id: 'w8', from: 'u2', text: { tr: 'Bu akşam operasyon var', en: 'There is an operation tonight' }, time: '15:30' },
      { id: 'w9', from: 'u3', text: { tr: 'Tamam, ben hazırım', en: 'Ok, I\'m ready' }, time: '15:45' },
      { id: 'w10', from: 'u4', text: { tr: 'Herkes hazır mı?', en: 'Is everyone ready?' }, time: '16:00' },
    ]
  },
  {
    id: 'wa5',
    type: 'community',
    name: { tr: 'Şehir Topluluk', en: 'City Community' },
    initials: 'ŞT',
    color: '#34c759',
    members: ['u1'],
    lastMessage: { tr: 'Duyuru: Yeni etkinlik eklendi', en: 'Announcement: New event added' },
    time: '09:00',
    unread: 0,
    muted: true,
    messages: [
      { id: 'w11', from: 'admin', text: { tr: 'Duyuru: Yeni etkinlik eklendi', en: 'Announcement: New event added' }, time: '09:00' },
    ]
  },
]

export default whisappChats
