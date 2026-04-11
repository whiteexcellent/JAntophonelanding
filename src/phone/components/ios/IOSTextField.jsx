import React, { useState } from 'react';

/**
 * iOS-style Text Field / Search Field
 * @param {Object} props
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 * @param {string} [props.placeholder='Search']
 * @param {'search'|'text'} [props.type='search']
 * @param {'dark'|'light'} [props.variant='dark']
 * @param {React.ReactNode} [props.leftIcon]
 * @param {boolean} [props.showCancel=false]
 * @param {string} [props.cancelText='Cancel']
 * @param {() => void} [props.onCancel]
 * @param {string} [props.className]
 */
export default function IOSTextField({
  value = '',
  onChange,
  placeholder = 'Search',
  type = 'search',
  variant = 'dark',
  leftIcon,
  showCancel = false,
  cancelText = 'Cancel',
  onCancel,
  className = '',
  ...rest
}) {
  const isDark = variant === 'dark';
  const [focused, setFocused] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: '100%',
  };

  const fieldWrapStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    height: 36,
    borderRadius: 10,
    padding: '0 10px',
    background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
    transition: 'background 0.15s',
  };

  const iconStyle = {
    fontSize: 15,
    color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)',
    flexShrink: 0,
    lineHeight: 1,
  };

  const inputStyle = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: 15,
    color: isDark ? '#fff' : '#000',
    fontFamily: 'inherit',
    padding: 0,
    lineHeight: '36px',
  };

  const clearStyle = {
    fontSize: 14,
    cursor: 'pointer',
    color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)',
    display: value ? 'block' : 'none',
    flexShrink: 0,
    lineHeight: 1,
  };

  const cancelStyle = {
    fontSize: 15,
    color: '#0a84ff',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    fontWeight: 400,
    display: (showCancel || focused) ? 'block' : 'none',
  };

  const searchIcon = type === 'search' ? (leftIcon || '🔍') : leftIcon;

  return (
    <div style={containerStyle} className={className}>
      <div style={fieldWrapStyle}>
        {searchIcon && <span style={iconStyle}>{searchIcon}</span>}
        <input
          style={inputStyle}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          {...rest}
        />
        <span style={clearStyle} onClick={() => onChange?.('')}>✕</span>
      </div>
      <span
        style={cancelStyle}
        onClick={() => {
          onChange?.('');
          onCancel?.();
        }}
      >
        {cancelText}
      </span>
    </div>
  );
}
