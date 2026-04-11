// Janto Phone - Data Fixtures: Messages
export const messageThreads = [
  {
    id: 'mt1',
    contactId: 'c1',
    userId: 'u2',
    name: 'Ahmet Kaya',
    initials: 'AK',
    color: '#ff9500',
    lastMessage: { tr: 'Tamam, orada buluşalım', en: 'Ok, let\'s meet there' },
    time: '14:32',
    unread: 2,
    messages: [
      { id: 'm1', from: 'u2', type: 'text', text: { tr: 'Selam, bugün müsait misin?', en: 'Hey, are you free today?' }, time: '14:20' },
      { id: 'm2', from: 'u1', type: 'text', text: { tr: 'Evet, ne yapmak istiyorsun?', en: 'Yes, what do you want to do?' }, time: '14:22' },
      { id: 'm3', from: 'u2', type: 'text', text: { tr: 'Bir yere gidelim, sana konum atıyorum', en: 'Let\'s go somewhere, sending you location' }, time: '14:25' },
      { id: 'm4', from: 'u2', type: 'location', text: { tr: '📍 Canlı Konum Paylaşıldı', en: '📍 Live Location Shared' }, time: '14:28', location: { lat: 41.0082, lng: 28.9784, name: 'Taksim Meydanı' } },
      { id: 'm5', from: 'u1', type: 'text', text: { tr: 'Tamam, orada buluşalım', en: 'Ok, let\'s meet there' }, time: '14:32' },
    ]
  },
  {
    id: 'mt2',
    contactId: 'c2',
    userId: 'u3',
    name: 'Zeynep Demir',
    initials: 'ZD',
    color: '#ff2d55',
    lastMessage: { tr: 'Fotoğrafı gördün mü?', en: 'Did you see the photo?' },
    time: '13:15',
    unread: 0,
    messages: [
      { id: 'm6', from: 'u3', type: 'text', text: { tr: 'Merhaba!', en: 'Hello!' }, time: '12:40' },
      { id: 'm7', from: 'u1', type: 'text', text: { tr: 'Selam Zeynep, nasılsın?', en: 'Hi Zeynep, how are you?' }, time: '12:42' },
      { id: 'm8', from: 'u3', type: 'image', text: { tr: '🖼️ Fotoğraf', en: '🖼️ Photo' }, time: '13:10' },
      { id: 'm9', from: 'u3', type: 'text', text: { tr: 'Fotoğrafı gördün mü?', en: 'Did you see the photo?' }, time: '13:15' },
    ]
  },
  {
    id: 'mt3',
    contactId: 'c3',
    userId: 'u4',
    name: 'Can Özkan',
    initials: 'CÖ',
    color: '#22c55e',
    lastMessage: { tr: '🎤 Sesli Mesaj (0:12)', en: '🎤 Voice Message (0:12)' },
    time: '11:45',
    unread: 1,
    messages: [
      { id: 'm10', from: 'u4', type: 'text', text: { tr: 'Araç hazır mı?', en: 'Is the vehicle ready?' }, time: '11:30' },
      { id: 'm11', from: 'u1', type: 'text', text: { tr: 'Evet, garajdan çektirdim', en: 'Yes, I got it from the garage' }, time: '11:35' },
      { id: 'm12', from: 'u4', type: 'voice', text: { tr: '🎤 Sesli Mesaj (0:12)', en: '🎤 Voice Message (0:12)' }, time: '11:45', duration: 12 },
    ]
  },
  {
    id: 'mt4',
    contactId: 'c4',
    userId: null,
    name: 'Mekanist Oto',
    initials: 'MO',
    color: '#8e8e93',
    lastMessage: { tr: 'Aracınız teslime hazır', en: 'Your vehicle is ready for pickup' },
    time: '10:00',
    unread: 0,
    messages: [
      { id: 'm13', from: 'other', type: 'text', text: { tr: 'Aracınız teslime hazır', en: 'Your vehicle is ready for pickup' }, time: '10:00' },
    ]
  },
  {
    id: 'mt5',
    contactId: 'c5',
    userId: null,
    name: 'Sigorta Plus',
    initials: 'SP',
    color: '#f59e0b',
    lastMessage: { tr: 'Poliçe yenileme hatırlatması', en: 'Policy renewal reminder' },
    time: 'Dün',
    unread: 0,
    messages: [
      { id: 'm14', from: 'other', type: 'text', text: { tr: 'Poliçe yenileme hatırlatması. Son tarih: 15 Nisan.', en: 'Policy renewal reminder. Deadline: April 15.' }, time: 'Dün' },
    ]
  },
  {
    id: 'mt6',
    contactId: 'c1',
    userId: 'u2',
    name: 'Ahmet Kaya',
    initials: 'AK',
    color: '#ff9500',
    lastMessage: { tr: '👤 Kişi Kartı: Can Özkan', en: '👤 Contact Card: Can Özkan' },
    time: '09:20',
    unread: 0,
    messages: [
      { id: 'm15', from: 'u2', type: 'contact', text: { tr: '👤 Kişi Kartı: Can Özkan', en: '👤 Contact Card: Can Özkan' }, time: '09:20', contactRef: 'c3' },
    ]
  },
]

export default messageThreads
