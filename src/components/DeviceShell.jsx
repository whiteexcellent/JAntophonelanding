import { IPhone } from "./magicui/IPhone";

export function DeviceShell({
  className = "",
  ambient = "cyan",
  title,
  meta,
  headerBadge,
  screenClassName = "",
  footer,
  children,
}) {
  return (
    <div className={`device-shell ${className}`.trim()} data-ambient={ambient}>
      <IPhone className="device-shell-iphone" />

      <div className="device-shell-layer">
        <div className="device-shell-chrome" aria-hidden="true">
          <span className="device-shell-speaker"></span>
          <span className="device-shell-camera"></span>
        </div>

        <div className="device-shell-topbar">
          <div className="device-shell-meta">
            <span>{title}</span>
            {headerBadge ? <span className="device-shell-badge">{headerBadge}</span> : null}
          </div>
          <span>{meta}</span>
        </div>

        <div className={`device-shell-screen ${screenClassName}`.trim()}>{children}</div>
        {footer ? <div className="device-shell-footer">{footer}</div> : null}
      </div>
    </div>
  );
}
