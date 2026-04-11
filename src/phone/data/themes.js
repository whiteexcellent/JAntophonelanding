export const caseVariants = {
  graphite: {
    id: 'graphite',
    label: { tr: 'Grafit', en: 'Graphite' },
    frameColor: '#1a1a1a',
    frameStroke: '#333333',
    bezelColor: '#020202',
  },
  titanium: {
    id: 'titanium',
    label: { tr: 'Titanyum', en: 'Titanium' },
    frameColor: '#77716a',
    frameStroke: '#918a82',
    bezelColor: '#0f0f10',
  },
  silver: {
    id: 'silver',
    label: { tr: 'Gumus', en: 'Silver' },
    frameColor: '#d0d3d8',
    frameStroke: '#b3b8bf',
    bezelColor: '#f3f4f6',
  },
}

export const iconPacks = {
  classic: {
    id: 'classic',
    label: { tr: 'Klasik', en: 'Classic' },
    filter: 'none',
  },
  mono: {
    id: 'mono',
    label: { tr: 'Mono', en: 'Mono' },
    filter: 'grayscale(1) contrast(1.1) brightness(1.08)',
  },
  vivid: {
    id: 'vivid',
    label: { tr: 'Canli', en: 'Vivid' },
    filter: 'saturate(1.08) contrast(1.04)',
  },
}

export const themeManifests = [
  {
    id: 'janto-dark',
    label: { tr: 'Janto Koyu', en: 'Janto Dark' },
    mode: 'dark',
    surfaceTokens: {
      screen: '#000000',
      list: '#1c1c1e',
      card: 'rgba(255,255,255,0.08)',
      dock: 'rgba(255,255,255,0.08)',
    },
    textTokens: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.64)',
    },
    accentTokens: {
      primary: '#0a84ff',
      media: '#ff2d55',
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ff453a',
    },
    wallpaperLockId: 'dark-iridescent',
    wallpaperHomeId: 'dark-iridescent',
    iconPackId: 'classic',
    caseVariant: 'graphite',
  },
  {
    id: 'janto-carbon',
    label: { tr: 'Karbon Gece', en: 'Carbon Night' },
    mode: 'dark',
    surfaceTokens: {
      screen: '#020303',
      list: '#141518',
      card: 'rgba(255,255,255,0.06)',
      dock: 'rgba(255,255,255,0.07)',
    },
    textTokens: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.6)',
    },
    accentTokens: {
      primary: '#30b0ff',
      media: '#ff375f',
      success: '#32d74b',
      warning: '#ff9f0a',
      danger: '#ff453a',
    },
    wallpaperLockId: 'monochrome-dark',
    wallpaperHomeId: 'soft-gradient',
    iconPackId: 'mono',
    caseVariant: 'titanium',
  },
  {
    id: 'janto-light',
    label: { tr: 'Janto Acik', en: 'Janto Light' },
    mode: 'light',
    surfaceTokens: {
      screen: '#f2f2f7',
      list: '#ffffff',
      card: 'rgba(0,0,0,0.05)',
      dock: 'rgba(255,255,255,0.75)',
    },
    textTokens: {
      primary: '#111111',
      secondary: 'rgba(0,0,0,0.56)',
    },
    accentTokens: {
      primary: '#0a84ff',
      media: '#ff2d55',
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ff453a',
    },
    wallpaperLockId: 'muted-light',
    wallpaperHomeId: 'muted-light',
    iconPackId: 'classic',
    caseVariant: 'silver',
  },
]

const themeById = Object.fromEntries(themeManifests.map((theme) => [theme.id, theme]))

export function getThemeManifest(themeId = 'janto-dark') {
  return themeById[themeId] || themeManifests[0]
}

export function getDefaultThemeIdByMode(mode = 'dark') {
  return themeManifests.find((theme) => theme.mode === mode)?.id || 'janto-dark'
}

export function getCaseVariant(caseId = 'graphite') {
  return caseVariants[caseId] || caseVariants.graphite
}

export function getIconPack(iconPackId = 'classic') {
  return iconPacks[iconPackId] || iconPacks.classic
}

export default themeManifests
