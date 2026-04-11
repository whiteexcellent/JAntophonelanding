import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useDeviceStore = create(immer((set) => ({
  batteryLevel: 87,
  isCharging: false,
  chargeSource: null, // usb, wireless, powerbank
  powerbankLevel: 60,
  powerState: 'on', // on, off
  drainProfile: 'normal', // normal, heavy, idle

  setBatteryLevel: (v) => set(s => { s.batteryLevel = Math.max(0, Math.min(100, v)) }),
  drainTick: ({ lowPowerMode = false, screenActive = true } = {}) => set(s => {
    if (!s.isCharging && s.batteryLevel > 0) {
      const drain = s.drainProfile === 'heavy' ? 2 : s.drainProfile === 'idle' ? 0.2 : 0.5
      const multiplier = (lowPowerMode ? 0.6 : 1) * (screenActive ? 1 : 0.45)
      s.batteryLevel = Math.max(0, s.batteryLevel - drain * multiplier)
    }
  }),
  chargeTick: () => set(s => {
    if (!s.isCharging || s.batteryLevel >= 100) return
    const rate = s.chargeSource === 'wireless' ? 1.2 : s.chargeSource === 'powerbank' ? 1.6 : 2.1
    if (s.chargeSource === 'powerbank') {
      if (s.powerbankLevel <= 0) {
        s.isCharging = false
        s.chargeSource = null
        return
      }
      const transfer = Math.min(rate, s.powerbankLevel, 100 - s.batteryLevel)
      s.batteryLevel += transfer
      s.powerbankLevel = Math.max(0, s.powerbankLevel - transfer)
      if (s.powerbankLevel === 0) {
        s.isCharging = false
        s.chargeSource = null
      }
      return
    }

    s.batteryLevel = Math.min(100, s.batteryLevel + rate)
  }),
  startCharging: (source = 'usb') => set(s => { s.isCharging = true; s.chargeSource = source }),
  stopCharging: () => set(s => { s.isCharging = false; s.chargeSource = null }),
  setPowerbankLevel: (v) => set(s => { s.powerbankLevel = Math.max(0, Math.min(100, v)) }),
  powerOff: () => set(s => { s.powerState = 'off' }),
  powerOn: () => set(s => { s.powerState = 'on' }),
  setDrainProfile: (p) => set(s => { s.drainProfile = p }),
})))
