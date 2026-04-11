// Janto Phone - Data Fixtures: Music
export const musicData = {
  tracks: [
    { id: 't1', title: { tr: 'Gece Sürüşü', en: 'Night Drive' }, artist: 'DJ Volkan', emoji: '🌃', duration: 210, category: 'electronic' },
    { id: 't2', title: { tr: 'Şehir Işıkları', en: 'City Lights' }, artist: 'Neon Pulse', emoji: '🏙️', duration: 185, category: 'electronic' },
    { id: 't3', title: { tr: 'Yüksek Hız', en: 'High Speed' }, artist: 'Turbo Beat', emoji: '🏎️', duration: 240, category: 'hiphop' },
    { id: 't4', title: { tr: 'Sessiz Sokaklar', en: 'Silent Streets' }, artist: 'Gölge', emoji: '🌙', duration: 195, category: 'jazz' },
    { id: 't5', title: { tr: 'Adrenalin', en: 'Adrenaline' }, artist: 'Bass Machine', emoji: '⚡', duration: 220, category: 'electronic' },
    { id: 't6', title: { tr: 'Rüzgar', en: 'Wind' }, artist: 'Akustik Trio', emoji: '🍃', duration: 175, category: 'pop' },
    { id: 't7', title: { tr: 'Karanlık Yol', en: 'Dark Road' }, artist: 'Underground', emoji: '🛣️', duration: 260, category: 'rock' },
    { id: 't8', title: { tr: 'Altın Saat', en: 'Golden Hour' }, artist: 'Sunset Wave', emoji: '🌅', duration: 200, category: 'pop' },
    { id: 't9', title: { tr: 'Motor Sesi', en: 'Engine Sound' }, artist: 'V8 Records', emoji: '🔊', duration: 230, category: 'rock' },
    { id: 't10', title: { tr: 'Yıldızlar Altında', en: 'Under the Stars' }, artist: 'Luna', emoji: '⭐', duration: 190, category: 'classical' },
    { id: 't11', title: { tr: 'Beton Orman', en: 'Concrete Jungle' }, artist: 'Street Flow', emoji: '🏗️', duration: 215, category: 'hiphop' },
    { id: 't12', title: { tr: 'Son Tur', en: 'Last Lap' }, artist: 'Finish Line', emoji: '🏁', duration: 245, category: 'electronic' },
  ],
  playlists: [
    { id: 'pl1', name: { tr: 'Sürüş Listesi', en: 'Drive Playlist' }, emoji: '🚗', trackIds: ['t1', 't3', 't5', 't7', 't9', 't12'], color: '#0a84ff' },
    { id: 'pl2', name: { tr: 'Gece Modu', en: 'Night Mode' }, emoji: '🌙', trackIds: ['t1', 't2', 't4', 't10'], color: '#5856d6' },
    { id: 'pl3', name: { tr: 'Enerji', en: 'Energy' }, emoji: '⚡', trackIds: ['t3', 't5', 't9', 't11', 't12'], color: '#ff2d55' },
    { id: 'pl4', name: { tr: 'Rahatla', en: 'Chill' }, emoji: '☕', trackIds: ['t6', 't8', 't10'], color: '#34c759' },
  ],
  categories: [
    { id: 'pop', name: { tr: 'Pop', en: 'Pop' }, emoji: '🎤' },
    { id: 'rock', name: { tr: 'Rock', en: 'Rock' }, emoji: '🎸' },
    { id: 'hiphop', name: { tr: 'Hip-Hop', en: 'Hip-Hop' }, emoji: '🎧' },
    { id: 'electronic', name: { tr: 'Elektronik', en: 'Electronic' }, emoji: '🎹' },
    { id: 'jazz', name: { tr: 'Caz', en: 'Jazz' }, emoji: '🎷' },
    { id: 'classical', name: { tr: 'Klasik', en: 'Classical' }, emoji: '🎻' },
  ],
}

export function getTrack(id) {
  return musicData.tracks.find(t => t.id === id) || null
}

export default musicData
