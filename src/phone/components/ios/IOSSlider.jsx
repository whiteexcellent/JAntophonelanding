import React, { useRef, useCallback } from 'react';

/**
 * iOS-style Slider
 * @param {Object} props
 * @param {number} props.value - Current value (0-1)
 * @param {(value: number) => void} props.onChange - Change handler
 * @param {string} [props.trackColor='#0a84ff'] - Filled track color
 * @param {React.ReactNode} [props.leftIcon] - Icon on left side
 * @param {React.ReactNode} [props.rightIcon] - Icon on right side
 * @param {'dark'|'light'} [props.variant='dark']
 * @param {string} [props.className]
 */
export default function IOSSlider({
  value = 0.5,
  onChange,
  trackColor = '#0a84ff',
  leftIcon,
  rightIcon,
  variant = 'dark',
  className = '',
}) {
  const isDark = variant === 'dark';
  const trackRef = useRef(null);

  const handleInteraction = useCallback((e) => {
    if (!trackRef.current || !onChange) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    onChange(ratio);
  }, [onChange]);

  const handlePointerDown = useCallback((e) => {
    handleInteraction(e);
    const handleMove = (ev) => {
      ev.preventDefault();
      handleInteraction(ev);
    };
    const handleUp = () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  }, [handleInteraction]);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  };

  const iconStyle = {
    fontSize: 14,
    color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
    flexShrink: 0,
  };

  const trackStyle = {
    flex: 1,
    height: 4,
    borderRadius: 2,
    background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)',
    position: 'relative',
    cursor: 'pointer',
    touchAction: 'none',
  };

  const fillStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: `${value * 100}%`,
    background: trackColor,
    borderRadius: 2,
    pointerEvents: 'none',
  };

  const thumbStyle = {
    position: 'absolute',
    top: '50%',
    left: `${value * 100}%`,
    transform: 'translate(-50%, -50%)',
    width: 28,
    height: 28,
    borderRadius: 14,
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle} className={className}>
      {leftIcon && <span style={iconStyle}>{leftIcon}</span>}
      <div
        ref={trackRef}
        style={trackStyle}
        onPointerDown={handlePointerDown}
      >
        <div style={fillStyle} />
        <div style={thumbStyle} />
      </div>
      {rightIcon && <span style={iconStyle}>{rightIcon}</span>}
    </div>
  );
}
