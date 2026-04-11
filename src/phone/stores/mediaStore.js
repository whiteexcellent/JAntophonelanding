import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useMediaStore = create(immer((set, get) => ({
  activeTrackId: null,
  queue: [],
  elapsed: 0,
  duration: 0,
  isPlaying: false,
  miniPlayerVisible: false,
  playerPresentation: 'hidden', // hidden, mini, full
  likedTrackIds: ['t1', 't3', 't7'],

  playTrack: (trackId, trackList = []) => set(s => {
    s.activeTrackId = trackId
    s.isPlaying = true
    s.elapsed = 0
    s.duration = 210
    s.miniPlayerVisible = true
    s.playerPresentation = 'full'
    if (trackList.length > 0) s.queue = trackList
  }),
  pauseTrack: () => set(s => { s.isPlaying = false }),
  resumeTrack: () => set(s => { if (s.activeTrackId) s.isPlaying = true }),
  seekTrack: (time) => set(s => { s.elapsed = Math.max(0, Math.min(time, s.duration)) }),
  nextTrack: () => set(s => {
    const idx = s.queue.indexOf(s.activeTrackId)
    if (idx < s.queue.length - 1) {
      s.activeTrackId = s.queue[idx + 1]
      s.elapsed = 0
    }
  }),
  prevTrack: () => set(s => {
    if (s.elapsed > 3) { s.elapsed = 0; return }
    const idx = s.queue.indexOf(s.activeTrackId)
    if (idx > 0) {
      s.activeTrackId = s.queue[idx - 1]
      s.elapsed = 0
    }
  }),
  toggleLike: (trackId) => set(s => {
    const id = trackId || s.activeTrackId
    if (!id) return
    if (s.likedTrackIds.includes(id)) {
      s.likedTrackIds = s.likedTrackIds.filter(t => t !== id)
    } else {
      s.likedTrackIds.push(id)
    }
  }),
  showMiniPlayer: () => set(s => { s.miniPlayerVisible = true; s.playerPresentation = 'mini' }),
  hideMiniPlayer: () => set(s => { s.miniPlayerVisible = false; s.playerPresentation = 'hidden' }),
  setPlayerPresentation: (p) => set(s => { s.playerPresentation = p }),
  tickElapsed: () => set(s => { if (s.isPlaying && s.elapsed < s.duration) s.elapsed += 1 }),
})))
