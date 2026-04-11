import React from 'react';

/**
 * iOS-style Toggle Switch
 * @param {Object} props
 * @param {boolean} props.value - Toggle state
 * @param {(value: boolean) => void} props.onChange - Change handler
 * @param {string} [props.activeColor='#34c759'] - Background color when on
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className]
 */
export default function IOSToggle({
  value = false,
  onChange,
  activeColor = '#34c759',
  disabled = false,
  className = '',
}) {
  const containerStyle = {
    width: 51,
    height: 31,
    borderRadius: 16,
    background: value ? activeColor : '#39393d',
    position: 'relative',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background 0.25s ease',
    flexShrink: 0,
    opacity: disabled ? 0.5 : 1,
  };

  const knobStyle = {
    width: 27,
    height: 27,
    borderRadius: 14,
    background: '#fff',
    position: 'absolute',
    top: 2,
    left: value ? 22 : 2,
    transition: 'left 0.25s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  };

  return (
    <div
      style={containerStyle}
      className={className}
      onClick={() => !disabled && onChange?.(!value)}
    >
      <div style={knobStyle} />
    </div>
  );
}
