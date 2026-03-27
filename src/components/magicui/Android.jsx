// Adapted from the official Magic UI Android registry component.
export function Android({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 380 830"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z" fill="rgba(160, 174, 201, 0.56)" />
      <path d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z" fill="rgba(160, 174, 201, 0.56)" />
      <path d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z" fill="rgba(17, 25, 42, 0.96)" />
      <path d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z" fill="rgba(8, 13, 24, 0.98)" stroke="rgba(196, 221, 255, 0.1)" />

      <g clipPath="url(#android-screen-clip)">
        <path
          d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
          fill="rgba(4, 9, 17, 0.9)"
          stroke="rgba(196, 221, 255, 0.08)"
          strokeWidth="0.5"
        />
      </g>

      <circle cx="189" cy="28" r="9" fill="rgba(8, 13, 24, 0.98)" />
      <circle cx="189" cy="28" r="4" fill="rgba(104, 132, 175, 0.48)" />

      <defs>
        <clipPath id="android-screen-clip">
          <rect width="360" height="800" rx="33" ry="25" transform="translate(9 14)" />
        </clipPath>
      </defs>
    </svg>
  );
}
