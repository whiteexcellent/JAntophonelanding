import { useEffect, useRef, createContext, useContext } from 'react'
import { useSystemStore } from '../stores/systemStore'
import { useDeviceStore } from '../stores/deviceStore'
import { useNavigationStore } from '../stores/navigationStore'
import { useHomeStore } from '../stores/homeStore'
import { useNotificationStore } from '../stores/notificationStore'
import { useMediaStore } from '../stores/mediaStore'
import { useCallStore } from '../stores/callStore'
import { useAppsStore } from '../stores/appsStore'
import { useAccountStore } from '../stores/accountStore'
import { useScenarioStore } from '../stores/scenarioStore'

const PhoneEngineContext = createContext(null)

export function usePhoneEngine() {
  return useContext(PhoneEngineContext)
}

export function PhoneEngineProvider({
  mode = 'interactive', // interactive | readonly
  scenarioId = null,
  initialLanguage = 'tr',
  initialTheme = 'dark',
  initialAppId = null,
  initialRoute = null,
  children,
}) {
  const initialized = useRef(false)

  const resetRuntimeState = () => {
    useSystemStore.setState(useSystemStore.getInitialState(), true)
    useDeviceStore.setState(useDeviceStore.getInitialState(), true)
    useNavigationStore.setState(useNavigationStore.getInitialState(), true)
    useHomeStore.setState(useHomeStore.getInitialState(), true)
    useNotificationStore.setState(useNotificationStore.getInitialState(), true)
    useMediaStore.setState(useMediaStore.getInitialState(), true)
    useCallStore.setState(useCallStore.getInitialState(), true)
    useAppsStore.setState(useAppsStore.getInitialState(), true)
    useAccountStore.setState(useAccountStore.getInitialState(), true)
    useScenarioStore.setState(useScenarioStore.getInitialState(), true)
  }

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    resetRuntimeState()
    useSystemStore.getState().setLanguage(initialLanguage)
    useSystemStore.getState().setTheme(initialTheme)

    if (mode === 'interactive') {
      useSystemStore.getState().boot()
      setTimeout(() => {
        useSystemStore.getState().finishBoot()
      }, 1500)
    } else {
      useSystemStore.getState().unlockPhone()
    }

    if (initialRoute?.screen && initialRoute?.appId) {
      useNavigationStore.setState({
        currentAppId: initialRoute.appId,
        routeStack: [{ appId: initialRoute.appId, screen: initialRoute.screen, params: initialRoute.params || {}, presentation: 'push' }],
        rootSurface: 'app',
      })
    } else if (initialAppId) {
      useNavigationStore.getState().openApp(initialAppId)
    }
  }, [initialAppId, initialLanguage, initialRoute, initialTheme, mode])

  // Clock tick
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const is24 = useSystemStore.getState().is24HourFormat
      const h = is24 ? String(now.getHours()).padStart(2, '0') : String(now.getHours() % 12 || 12).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      useSystemStore.getState().setStatusTime(`${h}:${m}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  // Media elapsed tick
  useEffect(() => {
    const interval = setInterval(() => {
      const ms = useMediaStore.getState()
      if (ms.isPlaying) ms.tickElapsed()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Call elapsed tick
  useEffect(() => {
    const interval = setInterval(() => {
      const cs = useCallStore.getState()
      if (cs.callStatus === 'active') cs.tickCall()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const device = useDeviceStore.getState()
      const system = useSystemStore.getState()
      const navigation = useNavigationStore.getState()

      if (device.isCharging) {
        device.chargeTick()
      } else if (device.powerState === 'on') {
        const screenActive = system.bootPhase === 'unlocked' && navigation.rootSurface !== 'boot'
        device.drainTick({ lowPowerMode: system.lowPowerMode, screenActive })
      }

      const nextDevice = useDeviceStore.getState()
      if (nextDevice.batteryLevel <= 0 && nextDevice.powerState !== 'off') {
        nextDevice.powerOff()
        useSystemStore.setState({ bootPhase: 'off', lockState: 'locked' })
        useNavigationStore.setState({
          rootSurface: 'home',
          currentAppId: null,
          routeStack: [],
          modalStack: [],
          sheetStack: [],
        })
      }

      if (nextDevice.isCharging && nextDevice.batteryLevel >= 2 && nextDevice.powerState === 'off') {
        nextDevice.powerOn()
        useSystemStore.getState().boot()
        setTimeout(() => {
          useSystemStore.getState().finishBoot()
        }, 900)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const engine = {
    mode,
    isReadonly: mode === 'readonly',
    isInteractive: mode === 'interactive',
  }

  return (
    <PhoneEngineContext.Provider value={engine}>
      {children}
    </PhoneEngineContext.Provider>
  )
}
