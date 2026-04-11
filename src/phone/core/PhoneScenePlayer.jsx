import { useEffect, useRef } from 'react'
import { useSystemStore } from '../stores/systemStore'
import { useNavigationStore } from '../stores/navigationStore'
import { useMediaStore } from '../stores/mediaStore'
import { useHomeStore } from '../stores/homeStore'
import { useDeviceStore } from '../stores/deviceStore'
import { heroScenes } from './sceneRegistry'
import PhoneRuntime from './PhoneRuntime'

export default function PhoneScenePlayer({ language = 'tr', theme = 'dark' }) {
  const sceneIndex = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    const applyScene = (scene) => {
      const so = scene.stateOverrides || {}
      if (so.system) {
        const sys = useSystemStore.getState()
        Object.entries(so.system).forEach(([k, v]) => {
          if (typeof sys[k] !== 'undefined') useSystemStore.setState({ [k]: v })
        })
      }
      if (so.device) {
        Object.entries(so.device).forEach(([k, v]) => {
          useDeviceStore.setState({ [k]: v })
        })
      }
      if (so.media) {
        Object.entries(so.media).forEach(([k, v]) => {
          useMediaStore.setState({ [k]: v })
        })
      }
      if (so.home) {
        Object.entries(so.home).forEach(([k, v]) => {
          useHomeStore.setState({ [k]: v })
        })
      }
      // Set navigation surface
      if (scene.surface === 'lockscreen') {
        useSystemStore.setState({ bootPhase: 'locked', lockState: 'locked' })
        useNavigationStore.setState({ rootSurface: 'home', currentAppId: null, routeStack: [] })
      } else if (scene.surface === 'home') {
        useSystemStore.setState({ bootPhase: 'unlocked', lockState: 'unlocked' })
        useNavigationStore.setState({ rootSurface: 'home', currentAppId: null, routeStack: [] })
      } else if (scene.surface === 'app' && scene.route) {
        useSystemStore.setState({ bootPhase: 'unlocked', lockState: 'unlocked' })
        useNavigationStore.setState({
          rootSurface: 'app',
          currentAppId: scene.route.appId,
          routeStack: [{ appId: scene.route.appId, screen: scene.route.screen, params: scene.route.params || {}, presentation: 'push' }],
        })
      }
    }

    const cycle = () => {
      const scene = heroScenes[sceneIndex.current]
      applyScene(scene)
      sceneIndex.current = (sceneIndex.current + 1) % heroScenes.length
      timerRef.current = setTimeout(cycle, scene.duration || 3500)
    }

    cycle()
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <PhoneRuntime mode="readonly" initialLanguage={language} initialTheme={theme} />
  )
}
