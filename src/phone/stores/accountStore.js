import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useAccountStore = create(immer((set) => ({
  deviceOwner: {
    id: 'u1',
    name: 'Emre Yılmaz',
    username: 'emre.ylmz',
    email: 'emre@jantolab.com',
    phone: '+90 532 XXX XX XX',
    avatar: null,
    initials: 'EY',
    color: '#0a84ff',
  },
  jPhoneIdProfile: {
    plan: 'Premium',
    joinDate: '2024-03-15',
    deviceName: 'Janto Phone Pro',
  },
  icloudStorage: { used: 12.4, total: 50 },
  faceIdLinked: true,
  installedApps: 16,
  activeSessions: 1,

  updateOwner: (fields) => set(s => { Object.assign(s.deviceOwner, fields) }),
  setFaceIdLinked: (v) => set(s => { s.faceIdLinked = v }),
})))
