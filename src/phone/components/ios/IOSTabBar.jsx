import React from 'react';

/**
 * iOS-style Tab Bar
 * @param {Object} props
 * @param {{ id: string, label: string, icon: React.ReactNode }[]} props.tabs
 * @param {string} props.activeTab - Active tab id
 * @param {(tabId: string) => void} props.onChange - Tab change handler
 * @param {'dark'|'light'} [props.variant='dark'] - Color variant
 * @param {string} [props.accentColor] - Active tab accent color
 * @param {string} [props.className] - Additional CSS classes
 */
export default function IOSTabBar({
  tabs = [],
  activeTab,
  onChange,
  variant = 'dark',
  accentColor = '#0a84ff',
  className = '',
}) {
  const isDark = variant === 'dark';

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '6px 0 20px',
    borderTop: `0.5px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    flexShrink: 0,
    background: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  };

  const tabStyle = (isActive) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    cursor: 'pointer',
    padding: '4px 12px',
    WebkitTapHighlightColor: 'transparent',
    color: isActive
      ? accentColor
      : isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
    transition: 'color 0.15s ease',
  });

  const iconStyle = { fontSize: 22, lineHeight: 1 };
  const labelStyle = { fontSize: 10, fontWeight: 500, lineHeight: 1 };

  return (
    <div style={containerStyle} className={className}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            style={tabStyle(isActive)}
            onClick={() => onChange?.(tab.id)}
          >
            <span style={iconStyle}>{tab.icon}</span>
            <span style={labelStyle}>{tab.label}</span>
          </div>
        );
      })}
    </div>
  );
}
