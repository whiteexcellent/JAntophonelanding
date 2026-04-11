import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useCallStore = create(immer((set, get) => ({
  callStatus: 'idle', // idle, ringing, active, ended
  callType: null, // voice, video
  caller: null,
  callee: null,
  elapsed: 0,
  isMuted: false,
  speakerEnabled: false,
  videoEnabled: false,
  minimized: false,
  busyFlag: false,

  startIncomingCall: (caller, type = 'voice') => set(s => {
    if (s.callStatus === 'active') { s.busyFlag = true; return }
    s.callStatus = 'ringing'
    s.callType = type
    s.caller = caller
    s.elapsed = 0
    s.isMuted = false
    s.speakerEnabled = false
    s.videoEnabled = type === 'video'
    s.minimized = false
  }),
  startOutgoingCall: (callee, type = 'voice') => set(s => {
    s.callStatus = 'active'
    s.callType = type
    s.callee = callee
    s.elapsed = 0
    s.isMuted = false
    s.speakerEnabled = false
    s.videoEnabled = type === 'video'
    s.minimized = false
  }),
  acceptCall: () => set(s => { s.callStatus = 'active'; s.busyFlag = false }),
  rejectCall: () => set(s => { s.callStatus = 'idle'; s.caller = null; s.callee = null; s.busyFlag = false }),
  endCall: () => set(s => { s.callStatus = 'idle'; s.caller = null; s.callee = null; s.elapsed = 0; s.minimized = false; s.busyFlag = false }),
  toggleMute: () => set(s => { s.isMuted = !s.isMuted }),
  toggleSpeaker: () => set(s => { s.speakerEnabled = !s.speakerEnabled }),
  toggleVideo: () => set(s => { s.videoEnabled = !s.videoEnabled }),
  minimizeCall: () => set(s => { s.minimized = true }),
  restoreCall: () => set(s => { s.minimized = false }),
  tickCall: () => set(s => { if (s.callStatus === 'active') s.elapsed += 1 }),
})))
