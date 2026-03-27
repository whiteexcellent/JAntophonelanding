export function IPhone({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 390 844"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <g filter="url(#iphone-shadow)">
        <path
          d="M63 2H327C361.242 2 389 29.758 389 64V780C389 814.242 361.242 842 327 842H63C28.758 842 1 814.242 1 780V64C1 29.758 28.758 2 63 2Z"
          fill="rgba(11, 16, 29, 0.96)"
          stroke="rgba(216, 231, 255, 0.12)"
        />
        <path
          d="M63.5 8H326.5C358.032 8 383.5 33.468 383.5 65V779C383.5 810.532 358.032 836 326.5 836H63.5C31.968 836 6.5 810.532 6.5 779V65C6.5 33.468 31.968 8 63.5 8Z"
          fill="rgba(7, 11, 20, 0.98)"
          stroke="rgba(255, 255, 255, 0.05)"
        />
      </g>

      <path
        d="M6.5 67C6.5 34.415 32.915 8 65.5 8H324.5C357.085 8 383.5 34.415 383.5 67V777C383.5 809.585 357.085 836 324.5 836H65.5C32.915 836 6.5 809.585 6.5 777V67Z"
        fill="rgba(4, 9, 17, 0.84)"
        stroke="rgba(193, 211, 242, 0.08)"
        strokeWidth="0.8"
      />

      <g clipPath="url(#iphone-screen-clip)">
        <rect x="18" y="20" width="354" height="804" rx="46" fill="rgba(4, 9, 17, 0.92)" />
        <rect x="22" y="24" width="346" height="796" rx="42" fill="rgba(7, 13, 23, 0.94)" />
      </g>

      <rect x="154" y="17" width="82" height="12" rx="6" fill="rgba(3, 7, 13, 0.96)" />
      <circle cx="177" cy="23" r="3.2" fill="rgba(133, 154, 189, 0.52)" />
      <circle cx="213" cy="23" r="2.3" fill="rgba(133, 154, 189, 0.42)" />

      <path d="M386 182H390V264H386V182Z" fill="rgba(160, 174, 201, 0.52)" />
      <path d="M386 300H390V352H386V300Z" fill="rgba(160, 174, 201, 0.52)" />
      <path d="M0 188H4V266H0V188Z" fill="rgba(160, 174, 201, 0.34)" />

      <defs>
        <filter id="iphone-shadow" x="0" y="0" width="390" height="844" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="22" stdDeviation="24" floodColor="rgba(0, 0, 0, 0.42)" />
        </filter>
        <clipPath id="iphone-screen-clip">
          <rect x="18" y="20" width="354" height="804" rx="46" />
        </clipPath>
      </defs>
    </svg>
  );
}