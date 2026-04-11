import React from 'react';

/**
 * iOS-style Segmented Control
 * @param {Object} props
 * @param {string[]} props.segments - Segment labels
 * @param {number} props.activeIndex - Currently active segment index
 * @param {(index: number) => void} props.onChange - Change handler
 * @param {'dark'|'light'} [props.variant='dark'] - Color variant
 * @param {string} [props.className] - Additional CSS classes
 */
export default function IOSSegmentedControl({
  segments = [],
  activeIndex = 0,
  onChange,
  variant = 'dark',
  className = '',
}) {
  const isDark = variant === 'dark';

  const containerStyle = {
    display: 'flex',
    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    borderRadius: 9,
    padding: 2,
    gap: 0,
    position: 'relative',
    height: 32,
  };

  const segmentStyle = (isActive) => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: isActive ? 600 : 500,
    color: isDark
      ? isActive ? '#fff' : 'rgba(255,255,255,0.55)'
      : isActive ? '#000' : 'rgba(0,0,0,0.45)',
    background: isActive
      ? isDark ? 'rgba(255,255,255,0.16)' : '#fff'
      : 'transparent',
    borderRadius: 7,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    boxShadow: isActive && !isDark ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
    letterSpacing: '-0.01em',
    padding: '0 12px',
    whiteSpace: 'nowrap',
  });

  return (
    <div style={containerStyle} className={className}>
      {segments.map((label, i) => (
        <div
          key={label}
          style={segmentStyle(i === activeIndex)}
          onClick={() => onChange?.(i)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
