// Janto Phone - Data Fixtures: Users & Contacts
export const users = {
  u1: {
    id: 'u1',
    name: 'Emre Yılmaz',
    username: 'emre.ylmz',
    initials: 'EY',
    color: '#0a84ff',
    phone: '+90 532 XXX XX XX',
    email: 'emre@jantolab.com',
    isOwner: true,
  },
  u2: {
    id: 'u2',
    name: 'Ahmet Kaya',
    username: 'ahmet.k',
    initials: 'AK',
    color: '#ff9500',
    phone: '+90 535 XXX XX XX',
  },
  u3: {
    id: 'u3',
    name: 'Zeynep Demir',
    username: 'zeynep.d',
    initials: 'ZD',
    color: '#ff2d55',
    phone: '+90 541 XXX XX XX',
  },
  u4: {
    id: 'u4',
    name: 'Can Özkan',
    username: 'can.ozk',
    initials: 'CÖ',
    color: '#22c55e',
    phone: '+90 544 XXX XX XX',
  },
}

export const contacts = [
  { id: 'c1', userId: 'u2', name: 'Ahmet Kaya', initials: 'AK', color: '#ff9500', phone: '+90 535 XXX XX XX', type: 'favorite', blocked: false },
  { id: 'c2', userId: 'u3', name: 'Zeynep Demir', initials: 'ZD', color: '#ff2d55', phone: '+90 541 XXX XX XX', type: 'regular', blocked: false },
  { id: 'c3', userId: 'u4', name: 'Can Özkan', initials: 'CÖ', color: '#22c55e', phone: '+90 544 XXX XX XX', type: 'favorite', blocked: false },
  { id: 'c4', userId: null, name: 'Mekanist Oto', initials: 'MO', color: '#8e8e93', phone: '+90 212 XXX XX XX', type: 'business', blocked: false },
  { id: 'c5', userId: null, name: 'Sigorta Plus', initials: 'SP', color: '#f59e0b', phone: '+90 850 XXX XX XX', type: 'business', blocked: false },
  { id: 'c6', userId: null, name: 'Eski Numara', initials: 'EN', color: '#636366', phone: '+90 555 XXX XX XX', type: 'regular', blocked: true },
]

export default users
