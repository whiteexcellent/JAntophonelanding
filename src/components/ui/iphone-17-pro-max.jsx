import { forwardRef, useId } from "react";

export const Iphone17ProMax = forwardRef(function Iphone17ProMax(
  {
    width = 430,
    height = 932,
    src,
    videoSrc,
    showIsland = true,
    islandWidth = 126,
    islandHeight = 35,
    bezelColor = "#050505",
    frameColor,
    frameStroke,
    screenRadius = 42,
    shadow = true,
    rounded = true,
    finish = "graphite",
    contentClassName,
    contentStyle,
    showCamera = true,
    screenGradient,
    hoverAnimation = true,
    children,
    className,
    ...props
  },
  ref
) {
  const clipPathId = useId().replace(/:/g, "");
  const outerRadius = rounded ? 60 : 0;
  const innerRadius = rounded ? 51 : 0;
  const screenFill = screenGradient || "#000000";
  const finishPalette = {
    silver: {
      frame: "#b8b4af",
      stroke: "#d8d4cf",
      rail: "#8c8782",
      accent: "#ece9e4",
    },
    graphite: {
      frame: "#2b2b2f",
      stroke: "#57575f",
      rail: "#141418",
      accent: "#8f919a",
    },
    titanium: {
      frame: "#726b65",
      stroke: "#a39b93",
      rail: "#4a4641",
      accent: "#d7d0ca",
    },
    "deep-blue": {
      frame: "#3d5067",
      stroke: "#6e88a7",
      rail: "#243241",
      accent: "#8ca4c4",
    },
    "cosmic-orange": {
      frame: "#8f5b3f",
      stroke: "#c7865f",
      rail: "#5f3825",
      accent: "#f1b184",
    },
  };
  const palette = finishPalette[finish] || finishPalette.silver;
  const resolvedFrameColor = frameColor || palette.frame;
  const resolvedFrameStroke = frameStroke || palette.stroke;

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`
        ${shadow ? "drop-shadow-2xl" : ""}
        ${hoverAnimation ? "transition-transform duration-500 hover:scale-[1.02]" : ""}
        ${className || ""}
      `.trim()}
      {...props}
    >
      <rect
        x="2"
        y="2"
        width={width - 4}
        height={height - 4}
        rx={outerRadius}
        fill={`url(#bodyGradient-${clipPathId})`}
        stroke={resolvedFrameStroke}
        strokeWidth="1.5"
      />

      <rect
        x="10"
        y="10"
        width={width - 20}
        height={height - 20}
        rx={innerRadius}
        fill={bezelColor}
        stroke="#141414"
        strokeWidth="3.5"
      />

      {showIsland && (
        <g>
          {showCamera && (
            <circle
              cx={width / 2 + islandWidth / 2 - 18}
              cy="31.5"
              r="3.5"
              fill="#0b0b0b"
            />
          )}
          <rect
            x={width / 2 - islandWidth / 2}
            y="13"
            width={islandWidth}
            height={islandHeight}
            rx="17.5"
            fill="#000000"
            opacity="0.98"
          />
          <circle
            cx={width / 2 - islandWidth / 4 + 5}
            cy="31.5"
            r="4.5"
            fill="#181818"
          />
          <circle
            cx={width / 2 + islandWidth / 4}
            cy="31.5"
            r="4.5"
            fill="#181818"
          />
        </g>
      )}

      <defs>
        <linearGradient id={`bodyGradient-${clipPathId}`} x1="0" y1="0" x2={width} y2={height} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={resolvedFrameStroke} />
          <stop offset="0.2" stopColor={resolvedFrameColor} />
          <stop offset="0.55" stopColor={resolvedFrameColor} />
          <stop offset="1" stopColor={palette.rail} />
        </linearGradient>
        <clipPath id={clipPathId}>
          <rect
            x="14"
            y="14"
            width={width - 28}
            height={height - 28}
            rx={screenRadius}
          />
        </clipPath>
      </defs>

      <rect
        x="14"
        y="14"
        width={width - 28}
        height={height - 28}
        rx={screenRadius}
        fill={screenFill}
      />

      <foreignObject
        x="14"
        y="14"
        width={width - 28}
        height={height - 28}
        clipPath={`url(#${clipPathId})`}
      >
        <div
          className={`h-full w-full relative m-0 p-0 ${contentClassName || ""}`}
          style={{ ...contentStyle, borderRadius: `${screenRadius}px`, overflow: "hidden" }}
        >
          {children ? (
            children
          ) : videoSrc ? (
            <video
              src={videoSrc}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : src ? (
            <img
              src={src}
              alt="Screen content"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm font-medium text-white">
              Demo Content
            </div>
          )}
        </div>
      </foreignObject>

      <path
        d="M -2 190 v 46 a 4 4 0 0 0 4 4 h 1 v -54 h -1 a 4 4 0 0 0 -4 4 z"
        fill={palette.rail}
        opacity="0.55"
      />
      <path
        d="M -2 250 v 74 a 4 4 0 0 0 4 4 h 1 v -82 h -1 a 4 4 0 0 0 -4 4 z"
        fill={palette.rail}
        opacity="0.55"
      />
      <path
        d="M -2 340 v 108 a 4 4 0 0 0 4 4 h 1 v -116 h -1 a 4 4 0 0 0 -4 4 z"
        fill={palette.rail}
        opacity="0.55"
      />
      <path
        d={`M ${width} 304 v 124 a 4 4 0 0 0 -4 -4 h -1 v 132 h 1 a 4 4 0 0 0 4 -4 z`}
        transform={`translate(${width}, 0) scale(-1, 1)`}
        fill={palette.rail}
        opacity="0.55"
      />
      <rect
        x="7"
        y="7"
        width={width - 14}
        height={height - 14}
        rx={outerRadius - 6}
        fill="none"
        stroke={palette.accent}
        strokeOpacity="0.12"
      />
    </svg>
  );
});
