import { appleWallpapers } from "./appleIosKit"
import { appleSketchWallpapers } from "./sketchRuntimeAssets"

export const wallpapers = [
  {
    id: "ios26-dark",
    name: { tr: "iOS 26 Koyu", en: "iOS 26 Dark" },
    background: `linear-gradient(180deg, rgba(0,0,0,0.14), rgba(0,0,0,0.28)), url('${appleSketchWallpapers.dark}') center / cover no-repeat`,
    lockBackground: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.34)), url('${appleSketchWallpapers.dark}') center / cover no-repeat`,
    theme: "dark",
  },
  {
    id: "ios26-light",
    name: { tr: "iOS 26 Acik", en: "iOS 26 Light" },
    background: `linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.1)), url('${appleSketchWallpapers.light}') center / cover no-repeat`,
    lockBackground: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.14)), url('${appleSketchWallpapers.light}') center / cover no-repeat`,
    theme: "light",
  },
  {
    id: "ios26-dark-ipad",
    name: { tr: "iPad Koyu", en: "iPad Dark" },
    background: `linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.22)), url('${appleSketchWallpapers.darkIpad}') center / cover no-repeat`,
    lockBackground: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.28)), url('${appleSketchWallpapers.darkIpad}') center / cover no-repeat`,
    theme: "dark",
  },
  {
    id: "ios26-light-ipad",
    name: { tr: "iPad Acik", en: "iPad Light" },
    background: `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.08)), url('${appleSketchWallpapers.lightIpad}') center / cover no-repeat`,
    lockBackground: `linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.12)), url('${appleSketchWallpapers.lightIpad}') center / cover no-repeat`,
    theme: "light",
  },
  {
    id: "midnight-blue",
    name: { tr: "Gece Mavisi", en: "Midnight Blue" },
    background: `linear-gradient(135deg, #0c1445 0%, #1a237e 25%, #283593 50%, #1a237e 75%, #0c1445 100%)`,
    lockBackground: `linear-gradient(135deg, #0c1445 0%, #1a237e 25%, #283593 50%, #1a237e 75%, #0c1445 100%)`,
    theme: "dark",
  },
  {
    id: "sunset-warm",
    name: { tr: "Gun Batimi", en: "Sunset Warm" },
    background: `linear-gradient(160deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #f5576c 100%)`,
    lockBackground: `linear-gradient(160deg, #667eea 0%, #764ba2 30%, #f093fb 60%, #f5576c 100%)`,
    theme: "dark",
  },
]

export function getWallpaper(id) {
  return wallpapers.find((wallpaper) => wallpaper.id === id) || wallpapers[0]
}

export default wallpapers
