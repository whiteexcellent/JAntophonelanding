import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { getDefaultThemeIdByMode } from '../data/themes'

export const useSystemStore = create(immer((set, get) => ({
  bootPhase: 'off', // off, booting, locked, unlocked
  lockState: 'locked',
  unlockMethod: 'swipe', // swipe, passcode, faceId
  passcode: '1234',
  bioscanEnabled: false,
  themeId: 'janto-dark',
  themeMode: 'dark',
  language: 'tr',
  brightness: 80,
  volume: 70,
  flightMode: false,
  wifiEnabled: true,
  bluetoothEnabled: true,
  cellularEnabled: true,
  lowPowerMode: false,
  previewPolicy: 'always', // always, whenUnlocked, never
  statusTime: '',
  is24HourFormat: true,
  hdPhotoMode: false,
  motionReduced: false,

  boot: () => set(s => { s.bootPhase = 'booting' }),
  finishBoot: () => set(s => { s.bootPhase = 'locked'; s.lockState = 'locked' }),
  lockPhone: () => set(s => { s.lockState = 'locked'; s.bootPhase = 'locked' }),
  unlockPhone: () => set(s => { s.lockState = 'unlocked'; s.bootPhase = 'unlocked' }),
  submitPasscode: (code) => {
    const correct = code === get().passcode
    if (correct) { set(s => { s.lockState = 'unlocked'; s.bootPhase = 'unlocked' }) }
    return correct
  },
  toggleTheme: () => set(s => {
    s.themeMode = s.themeMode === 'dark' ? 'light' : 'dark'
    s.themeId = getDefaultThemeIdByMode(s.themeMode)
  }),
  setTheme: (mode) => set(s => {
    s.themeMode = mode
    s.themeId = getDefaultThemeIdByMode(mode)
  }),
  setThemeId: (themeId, mode) => set(s => {
    s.themeId = themeId
    if (mode) s.themeMode = mode
  }),
  setLanguage: (lang) => set(s => { s.language = lang }),
  toggleFlightMode: () => set(s => {
    s.flightMode = !s.flightMode
    if (s.flightMode) { s.wifiEnabled = false; s.bluetoothEnabled = false; s.cellularEnabled = false }
  }),
  setBrightness: (v) => set(s => { s.brightness = v }),
  setVolume: (v) => set(s => { s.volume = v }),
  toggleLowPowerMode: () => set(s => { s.lowPowerMode = !s.lowPowerMode }),
  setPreviewPolicy: (p) => set(s => { s.previewPolicy = p }),
  setStatusTime: (t) => set(s => { s.statusTime = t }),
  toggleWifi: () => set(s => { s.wifiEnabled = !s.wifiEnabled }),
  toggleBluetooth: () => set(s => { s.bluetoothEnabled = !s.bluetoothEnabled }),
  toggleCellular: () => set(s => { s.cellularEnabled = !s.cellularEnabled }),
  setPasscode: (c) => set(s => { s.passcode = c }),
  toggleBioscan: () => set(s => { s.bioscanEnabled = !s.bioscanEnabled }),
  toggleHdPhoto: () => set(s => { s.hdPhotoMode = !s.hdPhotoMode }),
  toggle24Hour: () => set(s => { s.is24HourFormat = !s.is24HourFormat }),
  setMotionReduced: (value) => set(s => { s.motionReduced = value }),
})))
