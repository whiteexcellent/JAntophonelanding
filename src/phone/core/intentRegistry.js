// Janto Phone - Intent Registry
// Cross-app intent resolution

const intentHandlers = {
  'open.maps': (params) => ({ appId: 'maps', screen: 'maps.main', params }),
  'open.maps.location': (params) => ({ appId: 'maps', screen: 'maps.sharedLocation', params }),
  'open.maps.destination': (params) => ({ appId: 'maps', screen: 'maps.destination', params }),
  'open.emergency': () => ({ appId: 'emergency', screen: 'emergency.main', params: {} }),
  'open.camera': () => ({ appId: 'camera', screen: 'camera.capture', params: {} }),
  'open.music.player': () => ({ appId: 'music', screen: 'music.player', params: {} }),
  'open.messages.thread': (params) => ({ appId: 'messages', screen: 'messages.thread', params }),
  'open.whisapp.thread': (params) => ({ appId: 'whisapp', screen: 'whisapp.thread', params }),
  'open.vibeshot.profile': (params) => ({ appId: 'vibeshot', screen: 'vibeshot.profile', params }),
  'open.vibeshot.notifications': () => ({ appId: 'vibeshot', screen: 'vibeshot.notifications', params: {} }),
  'open.bank.account': (params) => ({ appId: 'bank', screen: 'bank.accountDetail', params }),
  'open.bank.history': () => ({ appId: 'bank', screen: 'bank.history', params: {} }),
  'open.garage.detail': (params) => ({ appId: 'garage', screen: 'garage.vehicleDetail', params }),
  'open.settings': () => ({ appId: 'settings', screen: 'settings.main', params: {} }),
  'open.battery': () => ({ appId: 'battery', screen: 'battery.main', params: {} }),
}

export function resolveIntent(intentId, params = {}) {
  const handler = intentHandlers[intentId]
  if (handler) return handler(params)
  // Fallback: try to parse as appId.screen
  const parts = intentId.split('.')
  if (parts.length >= 2) {
    return { appId: parts[0], screen: intentId, params }
  }
  return null
}

export default intentHandlers
