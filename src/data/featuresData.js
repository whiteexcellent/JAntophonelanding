import {
  MessagesSquare,
  Clapperboard,
  Compass,
  WalletCards,
  Siren,
  Cpu,
} from "lucide-react";

export const compatibilityData = [
  { framework: "QBox", inventory: "ox-inventory", garages: "qbx-garages", banking: "Renewed Banking", voice: "pma-voice", media: "Fivemanage", logs: "Fivemanage", lang: "English" },
  { framework: "QBCore", inventory: "qb-inventory", garages: "qb-garage", banking: "QB Banking", voice: "SaltyChat", media: "CDN Support", logs: "Discord Webhooks", lang: "Turkish" },
  { framework: "ESX", inventory: "qs-inventory", garages: "cd-garage", banking: "ESX Banking", voice: "-", media: "-", logs: "-", lang: "Russian" },
  { framework: "VRP (Exp.)", inventory: "tgiann-inventory", garages: "loaf-garage", banking: "Brutal Banking", voice: "-", media: "-", logs: "-", lang: "German" },
  { framework: "Standalone", inventory: "esx-inventory", garages: "jg-advancedgarages", banking: "Standalone", voice: "-", media: "-", logs: "-", lang: "French" },
  { framework: "-", inventory: "standalone", garages: "qs-advancedgarages", banking: "-", voice: "-", media: "-", logs: "-", lang: "Spanish" },
  { framework: "-", inventory: "-", garages: "-", banking: "-", voice: "-", media: "-", logs: "-", lang: "Japanese" },
  { framework: "-", inventory: "-", garages: "-", banking: "-", voice: "-", media: "-", logs: "-", lang: "Arabic" },
];

export const compatibilitySectionData = {
  tr: {
    headers: ["Framework", "Envanter", "Garaj", "Banka", "Ses", "Medya Upload", "Log Sistemi", "Dil"],
  },
  en: {
    headers: ["Framework", "Inventory", "Garage", "Banking", "Voice", "Media Upload", "Log System", "Language"],
  },
};

const featuresListTR = [
  {
    category: "Sosyal Medya & Iletisim",
    icon: MessagesSquare,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    items: [
      { name: "Mesajlar", icon: "/ekosistem/messages.png", desc: "SMS, sesli not, konum karti ve hizli medya paylasimi sunan yerel mesajlasma akisi." },
      { name: "Vibeshot", icon: "/ekosistem/vibeshot.svg", desc: "Gonderiler, reels, hikayeler, mention'lar ve canli yayinlarla sosyal kimligi oyuna tasir." },
      { name: "WhisApp", icon: "/ekosistem/whisapp.svg", desc: "Canli konum, link onizlemesi, kisi karti, cevap ve topluluk yapilariyla gelismis sohbet deneyimi sunar." },
      { name: "DarkChat", icon: "/ekosistem/darkchat.svg", desc: "Yeralti dunyasi icin planlanan anonim ve sifreli iletisim katmani." },
    ],
  },
  {
    category: "Medya & Yaraticilik",
    icon: Clapperboard,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    items: [
      { name: "Galeri", icon: "/ekosistem/gallery.png", desc: "Tarih ve baglama gore gruplanan medya kutuphanesi, favoriler ve duzenleme akisi sunar." },
      { name: "Kamera", icon: "/ekosistem/camera.png", desc: "Arka kamera, selfie, arac ici cekim, filtre ve video kaydi ile capture-first akisi destekler." },
      { name: "Muzik", icon: "/ekosistem/rythm-sync.png", desc: "Arama, playlist, chart, YouTube ekleme ve arac ici dinleme ile telefonu medya katmanina cevirir." },
    ],
  },
  {
    category: "Araclar & Uretkenlik",
    icon: Compass,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    items: [
      { name: "Notlar", icon: "/ekosistem/notes.png", desc: "Hizli not alma ve klasor duzeniyle kisa bilgi akisini cebinize tasir." },
      { name: "Takvim", icon: "/ekosistem/calendar.svg", desc: "Etkinlik, lokasyon, davet ve bildirim akislariyla roleplay zamanlamasini duzenler." },
      { name: "Harita", icon: "/ekosistem/maps.png", desc: "Canli GPS, rota takibi ve konum paylasimi ile dunya baglantisini surekli tutar." },
    ],
  },
  {
    category: "Finans & Hizmetler",
    icon: WalletCards,
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    items: [
      { name: "Banka", icon: "/ekosistem/bank.svg", desc: "Kisisel, is, gang, corp ve paylasimli hesaplar arasinda kart odakli gecis sunar." },
      { name: "Magaza", icon: "/ekosistem/app-store.png", desc: "Uygulama, oyun ve servis kesfi icin telefonun kendi dagitim katmanini saglar." },
      { name: "Ilanlar", icon: "/ekosistem/ads.png", desc: "Fotograf destekli ilanlar, favoriler ve kategori bazli pazar akisiyla sunucu ekonomisini telefona baglar." },
    ],
  },
  {
    category: "Araclar & Acil Durum",
    icon: Siren,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    items: [
      { name: "Garaj", icon: "/ekosistem/garage.svg", desc: "Sahip olunan araclar, impound durumu, yakit, motor ve govde sagligini tek ekranda gosterir." },
      { name: "Acil", icon: "/ekosistem/emergency.svg", desc: "Polis ve ambulans raporlari, tek tus acil cagri ve otomatik GPS paylasimi ile dispatch akisina baglanir." },
    ],
  },
  {
    category: "Sistem",
    icon: Cpu,
    color: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-400",
    items: [
      { name: "Ayarlar", icon: "/ekosistem/settings.png", desc: "Baglantilar, bildirimler, sesler, temalar ve uygulama davranislari icin merkez kontrol alani." },
      { name: "Vault", icon: "/ekosistem/vault.svg", desc: "Bulut yedekleme ve veri geri yukleme ile telefon icerigini cihaz sahipligine baglar." },
      { name: "Batarya", icon: "/ekosistem/battery.svg", desc: "Kullanimla azalan sarj, metadata kaliciligi ve powerbank destegi ile telefonu gercek bir item gibi hissettirir." },
    ],
  },
];

const featuresListEN = [
  {
    category: "Social Media & Communication",
    icon: MessagesSquare,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    items: [
      { name: "Messages", icon: "/ekosistem/messages.png", desc: "Native messaging flow with SMS, voice notes, location cards, and fast media sharing." },
      { name: "Vibeshot", icon: "/ekosistem/vibeshot.svg", desc: "Posts, reels, stories, mentions, and live broadcasts push social identity into gameplay." },
      { name: "WhisApp", icon: "/ekosistem/whisapp.svg", desc: "Advanced chat with live location, link previews, contact cards, replies, and community structures." },
      { name: "DarkChat", icon: "/ekosistem/darkchat.svg", desc: "Planned anonymous encrypted communication layer for underground roleplay." },
    ],
  },
  {
    category: "Media & Creativity",
    icon: Clapperboard,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-400",
    items: [
      { name: "Gallery", icon: "/ekosistem/gallery.png", desc: "Media library with grouped moments, favorites, editing, and cleaner browsing across captured content." },
      { name: "Camera", icon: "/ekosistem/camera.png", desc: "Rear camera, selfie mode, vehicle capture, filters, and video recording built into the phone flow." },
      { name: "Music", icon: "/ekosistem/rythm-sync.png", desc: "Search, playlists, charts, YouTube import, and in-vehicle listening turn the phone into a real media layer." },
    ],
  },
  {
    category: "Tools & Productivity",
    icon: Compass,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    items: [
      { name: "Notes", icon: "/ekosistem/notes.png", desc: "Fast note-taking and folder organization for pocket-sized information management." },
      { name: "Calendar", icon: "/ekosistem/calendar.svg", desc: "Events, locations, invitations, and reminders keep roleplay scheduling structured." },
      { name: "Maps", icon: "/ekosistem/maps.png", desc: "Live GPS, route tracking, and shared location keep the world layer attached to the phone." },
    ],
  },
  {
    category: "Finance & Services",
    icon: WalletCards,
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
    items: [
      { name: "Bank", icon: "/ekosistem/bank.svg", desc: "Card-style switching across personal, job, gang, corp, and shared accounts inside one finance hub." },
      { name: "Store", icon: "/ekosistem/app-store.png", desc: "Phone-native discovery layer for apps, games, and optional services." },
      { name: "Ads", icon: "/ekosistem/ads.png", desc: "Photo-supported listings, favorites, and category browsing connect the server economy to the phone." },
    ],
  },
  {
    category: "Vehicles & Emergency",
    icon: Siren,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
    items: [
      { name: "Garage", icon: "/ekosistem/garage.svg", desc: "Owned vehicles, impound state, fuel, engine, and body health stay visible from the same device." },
      { name: "Emergency", icon: "/ekosistem/emergency.svg", desc: "Police and ambulance reports, one-tap emergency calls, and automatic GPS sharing connect straight into dispatch flows." },
    ],
  },
  {
    category: "System",
    icon: Cpu,
    color: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-400",
    items: [
      { name: "Settings", icon: "/ekosistem/settings.png", desc: "Central control for connections, notifications, sounds, themes, and app-level behavior." },
      { name: "Vault", icon: "/ekosistem/vault.svg", desc: "Cloud backup and restore layer that keeps phone content tied to actual device ownership." },
      { name: "Battery", icon: "/ekosistem/battery.svg", desc: "Usage-based drain, metadata persistence, vehicle charging, and powerbank support make the phone feel real." },
    ],
  },
];

export const featuresList = { tr: featuresListTR, en: featuresListEN };

const videoContentTR = {
  title: "Telefon scriptinden fazlasi: tam sistem katmani",
  subtitle: "Dokumanlarda; iletisim, sosyal kimlik, finans, araclar, dispatch, medya ve kalici cihaz sahipligi tek bir mobil yuzeyde anlatiliyor.",
  url: "https://www.youtube.com/embed/UlY6Uc65NMo?autoplay=0&rel=0&showinfo=0",
};

const videoContentEN = {
  title: "More than a phone script: a full system layer",
  subtitle: "The docs position Janto as one mobile surface for communication, social identity, finance, vehicles, dispatch, media, and persistent device ownership.",
  url: "https://www.youtube.com/embed/UlY6Uc65NMo?autoplay=0&rel=0&showinfo=0",
};

export const videoContent = { tr: videoContentTR, en: videoContentEN };
