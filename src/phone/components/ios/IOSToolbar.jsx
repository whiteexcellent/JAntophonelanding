import React from 'react';

/**
 * iOS-style Bottom Toolbar
 * @param {Object} props
 * @param {{ id: string, icon: React.ReactNode, label?: string, onPress?: () => void }[]} props.items
 * @param {'dark'|'light'} [props.variant='dark']
 * @param {string} [props.className]
 */
export default function IOSToolbar({
  items = [],
  variant = 'dark',
  className = '',
}) {
  const isDark = variant === 'dark';

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: items.length <= 2 ? 'space-between' : 'space-around',
    padding: '8px 16px 24px',
    borderTop: `0.5px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
    flexShrink: 0,
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    cursor: 'pointer',
    color: '#0a84ff',
    fontSize: 22,
    padding: '4px 8px',
    WebkitTapHighlightColor: 'transparent',
  };

  const labelStyle = {
    fontSize: 10,
    fontWeight: 500,
  };

  return (
    <div style={containerStyle} className={className}>
      {items.map((item) => (
        <div key={item.id} style={itemStyle} onClick={item.onPress}>
          <span>{item.icon}</span>
          {item.label && <span style={labelStyle}>{item.label}</span>}
        </div>
      ))}
    </div>
  );
}
