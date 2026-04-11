import React from 'react';
import { appleSketchKeyboards } from '../../data/sketchRuntimeAssets';

/**
 * iOS Keyboard overlay using Sketch keyboard assets
 * @param {Object} props
 * @param {boolean} props.visible
 * @param {'default'|'emoji'} [props.type='default']
 * @param {'dark'|'light'} [props.variant='dark']
 * @param {string} [props.className]
 */
export default function IOSKeyboard({
  visible = false,
  type = 'default',
  variant = 'dark',
  className = '',
}) {
  if (!visible) return null;

  // Resolve keyboard image from Sketch assets
  const keyboardImages = appleSketchKeyboards || {};
  const keys = Object.keys(keyboardImages);
  let src = null;

  if (type === 'emoji') {
    src = keys.find((k) => k.toLowerCase().includes('emoji'))
      ? keyboardImages[keys.find((k) => k.toLowerCase().includes('emoji'))]
      : null;
  }

  if (!src) {
    // Try to find a matching variant keyboard
    const variantKey = keys.find(
      (k) => k.toLowerCase().includes(variant) && !k.toLowerCase().includes('emoji')
    );
    src = variantKey
      ? keyboardImages[variantKey]
      : keys.length > 0
        ? keyboardImages[keys[0]]
        : null;
  }

  const containerStyle = {
    width: '100%',
    flexShrink: 0,
    background: variant === 'dark' ? '#1c1c1e' : '#d1d3d9',
    borderTop: `0.5px solid ${variant === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
  };

  if (src) {
    return (
      <div style={containerStyle} className={className}>
        <img
          src={src}
          alt="iOS Keyboard"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          draggable={false}
        />
      </div>
    );
  }

  // Fallback: simple visual keyboard representation
  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M'],
  ];
  const isDark = variant === 'dark';

  return (
    <div style={{ ...containerStyle, padding: '6px 3px 20px' }} className={className}>
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: 'flex', justifyContent: 'center', gap: 5, marginBottom: 8 }}>
          {row.map((key) => (
            <div
              key={key}
              style={{
                width: ri === 2 ? 30 : 32,
                height: 42,
                borderRadius: 5,
                background: isDark ? 'rgba(255,255,255,0.12)' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 400,
                color: isDark ? '#fff' : '#000',
                boxShadow: isDark ? 'none' : '0 1px 0 rgba(0,0,0,0.15)',
              }}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
      {/* Space bar row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
        <div style={{
          width: 70, height: 42, borderRadius: 5,
          background: isDark ? 'rgba(255,255,255,0.06)' : '#adb3bc',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: isDark ? '#fff' : '#000',
        }}>123</div>
        <div style={{
          flex: 1, maxWidth: 180, height: 42, borderRadius: 5,
          background: isDark ? 'rgba(255,255,255,0.12)' : '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: isDark ? '#fff' : '#000',
          boxShadow: isDark ? 'none' : '0 1px 0 rgba(0,0,0,0.15)',
        }}>boşluk</div>
        <div style={{
          width: 70, height: 42, borderRadius: 5,
          background: isDark ? 'rgba(255,255,255,0.06)' : '#adb3bc',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: isDark ? '#fff' : '#000',
        }}>⏎</div>
      </div>
    </div>
  );
}
