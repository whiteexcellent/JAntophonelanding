import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useScenarioStore = create(immer((set) => ({
  activeScenario: null,
  heroSceneIndex: 0,
  scenePlaybackStatus: 'idle', // idle, playing, paused, finished

  loadScenario: (scenario) => set(s => { s.activeScenario = scenario; s.heroSceneIndex = 0; s.scenePlaybackStatus = 'idle' }),
  resetScenario: () => set(s => { s.activeScenario = null; s.heroSceneIndex = 0; s.scenePlaybackStatus = 'idle' }),
  playScene: () => set(s => { s.scenePlaybackStatus = 'playing' }),
  pauseScene: () => set(s => { s.scenePlaybackStatus = 'paused' }),
  nextScene: () => set(s => {
    if (s.activeScenario && s.heroSceneIndex < s.activeScenario.scenes.length - 1) {
      s.heroSceneIndex += 1
    } else {
      s.heroSceneIndex = 0 // loop
    }
  }),
  setSceneIndex: (i) => set(s => { s.heroSceneIndex = i }),
})))
