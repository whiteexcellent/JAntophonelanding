import { Iphone17ProMax } from '../../components/ui/iphone-17-pro-max'
import { PhoneViewport } from './PhoneViewport'
import { useSystemStore } from '../stores/systemStore'
import { useHomeStore } from '../stores/homeStore'
import { getCaseVariant, getThemeManifest } from '../data/themes'

export function PhoneFrame({ interactive = true, shellVariant = 'iphone17promax', children }) {
  const themeId = useSystemStore((s) => s.themeId)
  const caseId = useHomeStore((s) => s.caseId)
  const theme = getThemeManifest(themeId)
  const shellCase = getCaseVariant(caseId || theme.caseVariant)
  const finishByCase = {
    graphite: 'graphite',
    titanium: 'titanium',
    silver: 'silver',
  }

  return (
    <div
      className="phone-shell"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        pointerEvents: interactive ? 'auto' : 'none',
      }}
    >
      <Iphone17ProMax
        width={430}
        height={932}
        showIsland={false}
        hoverAnimation={false}
        finish={finishByCase[shellCase.id] || 'graphite'}
        frameColor={shellCase.frameColor}
        frameStroke={shellCase.frameStroke}
        bezelColor={shellCase.bezelColor}
        screenGradient={theme.surfaceTokens.screen}
        className="h-full w-full"
        contentStyle={{ background: theme.surfaceTokens.screen }}
      >
        <PhoneViewport>{children}</PhoneViewport>
      </Iphone17ProMax>
    </div>
  )
}
