import { useMemo, useState } from "react";
import { MotionReveal } from "./MotionReveal";
import { SectionHeading } from "./SectionHeading";
import { DeviceShell } from "./DeviceShell";
import { SegmentedControl } from "./SegmentedControl";

const wallpaperModeMeta = {
  "Home Screen": "Primary canvas",
  "Lock Screen": "Locked state",
  Both: "Dual surfaces",
};

export function CustomizationSection({ section }) {
  const [activeTheme, setActiveTheme] = useState(section.themes[0].key);
  const [activeWallpaperMode, setActiveWallpaperMode] = useState(section.wallpaperModes[0]);

  const activeThemeObject = section.themes.find((theme) => theme.key === activeTheme) ?? section.themes[0];
  const wallpaperCopy = useMemo(() => {
    if (activeWallpaperMode === "Lock Screen") {
      return "BioScan-ready lock states can carry a distinct wallpaper without flattening the main home surface.";
    }

    if (activeWallpaperMode === "Both") {
      return "Set one look across lock and home or split them for a more personal, item-owned phone identity.";
    }

    return "Home layouts stay visual, readable, and premium instead of dropping players into a dead icon grid.";
  }, [activeWallpaperMode]);

  return (
    <section className="section customization-section">
      <div className="container split-layout customization-layout">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} body={section.body} className="section-copy" />

        <div className="customization-stack">
          <MotionReveal className="theme-switcher">
            <SegmentedControl
              items={section.themes.map((theme) => ({
                id: theme.key,
                label: theme.label,
                meta: theme.note,
              }))}
              value={activeTheme}
              onChange={setActiveTheme}
              className="theme-segmented-control"
              ariaLabel="Theme selector"
            />
          </MotionReveal>

          <MotionReveal className="wallpaper-mode-row" delay={70}>
            <SegmentedControl
              items={section.wallpaperModes.map((mode) => ({
                id: mode,
                label: mode,
                meta: wallpaperModeMeta[mode],
              }))}
              value={activeWallpaperMode}
              onChange={setActiveWallpaperMode}
              className="wallpaper-segmented-control"
              ariaLabel="Wallpaper surface selector"
            />
          </MotionReveal>

          <MotionReveal delay={100}>
            <DeviceShell
              className="custom-device"
              ambient={activeTheme}
              title="Personalize"
              meta={activeWallpaperMode}
              headerBadge={activeThemeObject.label}
              screenClassName={`custom-screen custom-screen-${activeTheme}`}
            >
              <div className="customization-screen-shell">
                <div className="custom-hero-panel">
                  <div className="wallpaper-preview">
                    <span className="showcase-ui-kicker">Adaptive wallpaper</span>
                    <strong>{activeThemeObject.label}</strong>
                    <p>{wallpaperCopy}</p>
                  </div>

                  <div className="custom-widget-row">
                    {section.widgets.map((widget) => (
                      <div key={widget.label} className="custom-widget-card">
                        <span>{widget.label}</span>
                        <strong>{widget.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="app-grid custom-app-grid">
                  {section.apps.map((app) => (
                    <div key={app.name} className="custom-app-card">
                      <span className="custom-app-icon">{app.name.charAt(0)}</span>
                      <strong>{app.name}</strong>
                      <small>{app.kicker}</small>
                    </div>
                  ))}
                </div>
              </div>
            </DeviceShell>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
