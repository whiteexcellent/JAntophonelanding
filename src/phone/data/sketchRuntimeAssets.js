// Janto Phone - Sketch Runtime Assets
// Central asset registry for Apple iOS 26 UI Kit Sketch extraction

const SYSTEM_BASE = "/apple-kit/sketch/named_assets/System"
const KEYBOARDS_BASE = "/apple-kit/sketch/named_assets/Keyboards"
const PICKERS_BASE = "/apple-kit/sketch/named_assets/Pickers"
const ACTIVITY_BASE = "/apple-kit/sketch/named_assets/Activity_Views"
const KIT_BASE = "/apple-kit/sketch/named_assets/Kit"
const IMAGES_BASE = "/apple-kit/sketch/images"

// ── Wallpapers ──────────────────────────────────────
export const appleSketchWallpapers = {
  dark: `${SYSTEM_BASE}/Wallpapers_Dark_iPhone__2.png`,
  light: `${SYSTEM_BASE}/Wallpapers_Light_iPhone__2.png`,
  darkIpad: `${SYSTEM_BASE}/Wallpapers_Dark_iPad_Pro_M4_11__2.png`,
  lightIpad: `${SYSTEM_BASE}/Wallpapers_Light_iPad_Pro_M4_11__2.png`,
}

// ── Control Center ──────────────────────────────────
export const appleSketchControlCenterAssets = {
  albumArtwork: `${SYSTEM_BASE}/System_Control_Center_Dark_iPhone___Controls___2x2_-_Now_Playing___Album_Artwork__2.png`,
}

// ── App Icon Artwork (4 variants: Dark, Light Clear, Default) ───
const artworkByTheme = {
  dark: {
    messages: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Messages___messages-iOS-Dark__2.png`,
    whisapp: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Phone___phone-iOS-Dark__2.png`,
    vibeshot: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Camera___camera-iOS-Dark__2.png`,
    bank: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Wallet___wallet-iOS-Dark__2.png`,
    garage: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Home___home-iOS-Dark__2.png`,
    music: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Music___music-iOS-Dark__2.png`,
    gallery: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Photos___photos-iOS-Dark__2.png`,
    camera: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Camera___camera-iOS-Dark__2.png`,
    notes: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Notes___notes-iOS-Dark__2.png`,
    calendar: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Calendar___calendar-iOS-Dark__2.png`,
    maps: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Maps___maps-iOS-Dark__2.png`,
    vstore: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_App_Store___appstore-iOS-Dark__2.png`,
    vault: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Health___health-iOS-Dark__2.png`,
    emergency: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Health___health-iOS-Dark__2.png`,
    battery: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Settings___settings-iOS-Dark__2.png`,
    settings: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Settings___settings-iOS-Dark__2.png`,
    // Extra system apps for in-app usage
    safari: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Safari___safari-iOS-Dark__2.png`,
    mail: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Mail___mail-iOS-Dark__2.png`,
    weather: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Weather___weather-iOS-Dark__2.png`,
    clock: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Clock___clock-iOS-Dark__2.png`,
    facetime: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_FaceTime___facetime-iOS-Dark__2.png`,
    photos: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Photos___photos-iOS-Dark__2.png`,
    files: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Files___files-iOS-Dark__2.png`,
    contacts: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Contacts___contacts-iOS-Dark__2.png`,
    reminders: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Reminders___reminders-iOS-Dark__2.png`,
    findmy: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Find_My___findmy-iOS-Dark__2.png`,
    shortcuts: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Shortcuts___shortcuts-iOS-Dark__2.png`,
    translate: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Translate___translate-iOS-Dark__2.png`,
  },
  light: {
    messages: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Messages___messages-iOS-ClearLight__2.png`,
    whisapp: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Phone___phone-iOS-ClearLight__2.png`,
    vibeshot: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Camera___camera-iOS-ClearLight__2.png`,
    bank: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Wallet___wallet-iOS-ClearLight__2.png`,
    garage: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Home___home-iOS-ClearLight__2.png`,
    music: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Music___music-iOS-ClearLight__2.png`,
    gallery: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Photos___photos-iOS-ClearLight__2.png`,
    camera: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Camera___camera-iOS-ClearLight__2.png`,
    notes: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Notes___notes-iOS-ClearLight__2.png`,
    calendar: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Calendar___calendar-iOS-ClearLight__2.png`,
    maps: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Maps___maps-iOS-ClearLight__2.png`,
    vstore: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_App_Store___appstore-iOS-ClearLight__2.png`,
    vault: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Health___health-iOS-ClearLight__2.png`,
    emergency: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Health___health-iOS-ClearLight__2.png`,
    battery: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Settings___settings-iOS-ClearLight__2.png`,
    settings: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Settings___settings-iOS-ClearLight__2.png`,
    safari: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Safari___safari-iOS-ClearLight__2.png`,
    mail: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Mail___mail-iOS-ClearLight__2.png`,
    weather: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Weather___weather-iOS-ClearLight__2.png`,
    clock: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Clock___clock-iOS-ClearLight__2.png`,
    facetime: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_FaceTime___facetime-iOS-ClearLight__2.png`,
    photos: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Photos___photos-iOS-ClearLight__2.png`,
    files: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Files___files-iOS-ClearLight__2.png`,
    contacts: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Contacts___contacts-iOS-ClearLight__2.png`,
    reminders: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Reminders___reminders-iOS-ClearLight__2.png`,
    findmy: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Find_My___findmy-iOS-ClearLight__2.png`,
    shortcuts: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Shortcuts___shortcuts-iOS-ClearLight__2.png`,
    translate: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Translate___translate-iOS-ClearLight__2.png`,
  },
}

export function getAppleSketchArtwork(appId, themeMode = "dark") {
  const themeKey = themeMode === "light" ? "light" : "dark"
  return artworkByTheme[themeKey][appId] || artworkByTheme.dark[appId] || null
}

// ── Keyboard Assets ─────────────────────────────────
export const appleSketchKeyboards = {
  emojiGenmoji: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji_Search___Genmoji___Genmoji__2.png`,
  emojiRow2_1: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji___Row_2___IMG_2535__2.png`,
  emojiRow2_2: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji___Row_2___IMG_2536__2.png`,
  emojiRow3_1: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji___Row_3___IMG_2522__2.png`,
  emojiRow3_2: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji___Row_3___IMG_2526__2.png`,
  emojiRow3_3: `${KEYBOARDS_BASE}/Keyboard_Dark_iPhone_Emoji___Emoji___Row_3___IMG_2527__2.png`,
}

// ── Picker Assets ───────────────────────────────────
export const appleSketchPickers = {
  timeWheelDark: `${PICKERS_BASE}/Date_and_Time_Pickers_Wheel_Dark_Time_Picker___Time_Picker_Wheel__2.png`,
  timeWheelLight: `${PICKERS_BASE}/Date_and_Time_Pickers_Wheel_Light_Time_Picker___Time_Picker_Wheel__2.png`,
}

// ── Activity View Assets ────────────────────────────
export const appleSketchActivityViews = {
  personPhotoDouble1: `${ACTIVITY_BASE}/Activity_View___Person_-_Photo_-_Double___Frame__3.png`,
  personPhotoDouble2: `${ACTIVITY_BASE}/Activity_View___Person_-_Photo_-_Double___Frame__4.png`,
  darkPersonAppIcon: `${ACTIVITY_BASE}/Activity_View___Dark_Person___App_Icon___App_Icon___Messages-Light-60x60_3x__2.png`,
}

// ── Kit Swatch Assets ───────────────────────────────
export const appleSketchKit = {
  swatchDark: `${KIT_BASE}/Kit_Swatch_Background___Column_4___Dark_-_Base__2.png`,
  swatchLight: `${KIT_BASE}/Kit_Swatch_Background___Column_4___Light__2.png`,
}

// ── Gallery Photos (from Sketch raw images - curated selection) ──
// These are actual extracted images from the Sketch file used as realistic content
export const galleryPhotos = [
  { id: 'g1', src: `${IMAGES_BASE}/02116a9c1680bea86453631d1a14d9a35e81e09f.png`, aspect: 1 },
  { id: 'g2', src: `${IMAGES_BASE}/0246ca452bda6f59bd0bffb44166412561ff35d7.png`, aspect: 1 },
  { id: 'g3', src: `${IMAGES_BASE}/02d441b52849b9cfe3bec5b3b1d06624b363a7b5.png`, aspect: 1 },
  { id: 'g4', src: `${IMAGES_BASE}/03897844adf1c9d9d5746dd939da199d0d565643.png`, aspect: 1 },
  { id: 'g5', src: `${IMAGES_BASE}/0460450a304b1ae922d27842341be4052e81714b.png`, aspect: 1 },
  { id: 'g6', src: `${IMAGES_BASE}/051b58433fa383b24dbe8bfeaa2eabb89464232b.png`, aspect: 1 },
  { id: 'g7', src: `${IMAGES_BASE}/0527a2dcaabc5e1229ec365f1aa7f8a27ed46a60.png`, aspect: 1 },
  { id: 'g8', src: `${IMAGES_BASE}/07879ac06c2419aac5d0afc599a7a7a20b955a1e.png`, aspect: 1 },
  { id: 'g9', src: `${IMAGES_BASE}/095bc376d95ecbce6730096f1acb366a48ca207a.png`, aspect: 1 },
  { id: 'g10', src: `${IMAGES_BASE}/09f4a47740f7ddbe5e439fc608c938ddc1f043b6.png`, aspect: 1 },
  { id: 'g11', src: `${IMAGES_BASE}/0a13396347c1b4915f46333179032d6a8a5948ee.png`, aspect: 1 },
  { id: 'g12', src: `${IMAGES_BASE}/0ae9372578f0fb2b08758bd9cc968f4da046a007.png`, aspect: 1 },
  { id: 'g13', src: `${IMAGES_BASE}/0b1e35d16c268f4e09f2b120ff468024af41da42.png`, aspect: 1 },
  { id: 'g14', src: `${IMAGES_BASE}/0d238ef358a139f8257094d52b1393a129c4485d.png`, aspect: 1 },
  { id: 'g15', src: `${IMAGES_BASE}/0de6b742a91500c033f37c924a5186c97f4feed8.png`, aspect: 1 },
  { id: 'g16', src: `${IMAGES_BASE}/0f9bf4f039b76b2da016f690324cf2e547b04fab.png`, aspect: 1 },
  { id: 'g17', src: `${IMAGES_BASE}/132baebc99e8e1d6b55496631dd09c424288058f.png`, aspect: 1 },
  { id: 'g18', src: `${IMAGES_BASE}/14fef399a8759ba0960138250800f9560a60e445.png`, aspect: 1 },
  { id: 'g19', src: `${IMAGES_BASE}/193632f5fc8909ad52e609d1a6f5065e2e4353a5.png`, aspect: 1 },
  { id: 'g20', src: `${IMAGES_BASE}/1a9d6060cf20f91b6c4038f2847f25266515fd8e.png`, aspect: 1 },
]

// ── Music Album Covers (Sketch app icons repurposed as album art) ──
export const musicAlbumCovers = {
  t1: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Music___music-iOS-Dark__2.png`,
  t2: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Podcasts___podcasts-iOS-Dark__2.png`,
  t3: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Games___games-iOS-Dark__2.png`,
  t4: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Stocks___stocks-iOS-Dark__2.png`,
  t5: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Fitness___fitness-macOS-Dark__2.png`,
  t6: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Weather___weather-iOS-Dark__2.png`,
  t7: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Books___books-iOS-Dark__2.png`,
  t8: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Freeform___freeform-iOS-Dark__2.png`,
  t9: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Voice_Memos___voicememos-iOS-Dark__2.png`,
  t10: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Translate___translate-iOS-Dark__2.png`,
  t11: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_News___news-iOS-Dark__2.png`,
  t12: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Shortcuts___shortcuts-iOS-Dark__2.png`,
  // Light variants
  t1_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Music___music-iOS-ClearLight__2.png`,
  t2_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Podcasts___podcasts-iOS-ClearLight__2.png`,
  t3_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Games___games-iOS-ClearLight__2.png`,
  t4_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Stocks___stocks-iOS-ClearLight__2.png`,
  t5_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Fitness___fitness-macOS-ClearLight__2.png`,
  t6_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Weather___weather-iOS-ClearLight__2.png`,
  t7_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Books___books-iOS-ClearLight__2.png`,
  t8_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Freeform___freeform-iOS-ClearLight__2.png`,
  t9_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Voice_Memos___voicememos-iOS-ClearLight__2.png`,
  t10_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Translate___translate-iOS-ClearLight__2.png`,
  t11_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_News___news-iOS-ClearLight__2.png`,
  t12_light: `${SYSTEM_BASE}/App_Icons_Artwork_Light_Clear_Shortcuts___shortcuts-iOS-ClearLight__2.png`,
}

export function getMusicAlbumCover(trackId, themeMode = "dark") {
  if (themeMode === "light") {
    return musicAlbumCovers[`${trackId}_light`] || musicAlbumCovers[trackId] || null
  }
  return musicAlbumCovers[trackId] || null
}

// ── Vibeshot Post Images (Sketch raw images as social media content) ──
export const vibeShotPostImages = {
  p1: `${IMAGES_BASE}/132baebc99e8e1d6b55496631dd09c424288058f.png`,
  p2: `${IMAGES_BASE}/14fef399a8759ba0960138250800f9560a60e445.png`,
  p3: `${IMAGES_BASE}/193632f5fc8909ad52e609d1a6f5065e2e4353a5.png`,
  p4: `${IMAGES_BASE}/1a9d6060cf20f91b6c4038f2847f25266515fd8e.png`,
  p5: `${IMAGES_BASE}/0ae9372578f0fb2b08758bd9cc968f4da046a007.png`,
  p6: `${IMAGES_BASE}/0b1e35d16c268f4e09f2b120ff468024af41da42.png`,
  p7: `${IMAGES_BASE}/0d238ef358a139f8257094d52b1393a129c4485d.png`,
  p8: `${IMAGES_BASE}/0de6b742a91500c033f37c924a5186c97f4feed8.png`,
}

export function getVibeShotPostImage(postId) {
  return vibeShotPostImages[postId] || null
}

// ── Profile Avatars (using app icons as avatars) ──
export const profileAvatars = {
  vs1: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Messages___messages-iOS-Dark__2.png`,
  vs2: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Camera___camera-iOS-Dark__2.png`,
  vs3: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Photos___photos-iOS-Dark__2.png`,
  u1: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Messages___messages-iOS-Dark__2.png`,
  u2: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Camera___camera-iOS-Dark__2.png`,
  u3: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Photos___photos-iOS-Dark__2.png`,
  u4: `${SYSTEM_BASE}/App_Icons_Artwork_Dark_FaceTime___facetime-iOS-Dark__2.png`,
}

export function getProfileAvatar(userId) {
  return profileAvatars[userId] || `${SYSTEM_BASE}/App_Icons_Artwork_Dark_Contacts___contacts-iOS-Dark__2.png`
}

// ── Map Tiles (using Sketch images as map background) ──
export const mapAssets = {
  dark: `${IMAGES_BASE}/0527a2dcaabc5e1229ec365f1aa7f8a27ed46a60.png`,
  light: `${IMAGES_BASE}/07879ac06c2419aac5d0afc599a7a7a20b955a1e.png`,
}

// ── Camera Viewfinder Assets ──
export const cameraAssets = {
  viewfinderBg: `${IMAGES_BASE}/095bc376d95ecbce6730096f1acb366a48ca207a.png`,
  lastCapture: `${IMAGES_BASE}/09f4a47740f7ddbe5e439fc608c938ddc1f043b6.png`,
}

// ── iOS UI Components (Sketch extracted) ──
export const iosUIComponents = {
  keyboards: appleSketchKeyboards,
  pickers: appleSketchPickers,
  activityViews: appleSketchActivityViews,
  kit: appleSketchKit,
}
