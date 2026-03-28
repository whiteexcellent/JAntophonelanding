import { forwardRef } from "react";

export const Iphone16Pro = forwardRef(
    (
        {
            width = 433,
            height = 882,
            src,
            videoSrc,
            showIsland = true,
            islandWidth = 125,
            islandHeight = 40,
            frameColor = "[#e5e5ea]",
            frameDarkColor = "[#1f2022]",
            bezelColor = "black",
            screenRadius = 55,
            shadow = true,
            rounded = true,
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
    ) => {
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
                {/* Outer frame */}
                <rect
                    x="2"
                    y="2"
                    width={width - 4}
                    height={height - 4}
                    rx={rounded ? 75 : 0}
                    className="fill-[#1A1A1A] dark:fill-[#000000] stroke-[#333333] dark:stroke-[#1A1A1A]"
                    strokeWidth="1.5"
                />

                {/* Inner bezel */}
                <rect
                    x="18"
                    y="18"
                    width={width - 36}
                    height={height - 36}
                    rx={rounded ? 58 : 0}
                    className={`fill-${bezelColor} dark:fill-black stroke-[#111] dark:stroke-neutral-800`}
                    strokeWidth="6"
                />

                {/* Dynamic Island */}
                {showIsland && (
                    <g>
                        {/* Camera dot */}
                        {showCamera && (
                            <circle
                                cx={width / 2 + islandWidth / 2 - 20}
                                cy="34"
                                r="4"
                                fill="#0f0f0f"
                                className="dark:fill-black"
                            />
                        )}
                        <rect
                            x={width / 2 - islandWidth / 2}
                            y="20"
                            width={islandWidth}
                            height={islandHeight}
                            rx="18"
                            fill="black"
                            className="drop-shadow-sm opacity-90 dark:opacity-100 dark:bg-black stroke-[0.5px] stroke-white/10 dark:stroke-white/5"
                        />
                        {/* Sensors */}
                        <circle
                            cx={width / 2 - islandWidth / 4 + 5}
                            cy="40"
                            r="5"
                            fill="#1a1a1a"
                            className="dark:fill-neutral-900"
                        />
                        <circle
                            cx={width / 2 + islandWidth / 4}
                            cy="40"
                            r="5"
                            fill="#1a1a1a"
                            className="dark:fill-neutral-900"
                        />
                    </g>
                )}

                {/* Screen content area */}
                <clipPath id="screenPath">
                    <rect
                        x="24"
                        y="24"
                        width={width - 48}
                        height={height - 48}
                        rx={screenRadius}
                    />
                </clipPath>

                {/* Content background/gradient fallback */}
                <rect
                    x="24"
                    y="24"
                    width={width - 48}
                    height={height - 48}
                    rx={screenRadius}
                    className={screenGradient || "fill-gray-100 dark:fill-neutral-800"}
                />

                <foreignObject
                    x="24"
                    y="24"
                    width={width - 48}
                    height={height - 48}
                    clipPath="url(#screenPath)"
                >
                    <div 
                        className="w-full h-full relative m-0 p-0" 
                        style={{ ...contentStyle, borderRadius: `${screenRadius}px`, overflow: 'hidden' }}
                    >
                        {children ? (
                            children
                        ) : videoSrc ? (
                            <video
                                src={videoSrc}
                                className={`w-full h-full object-cover ${contentClassName || ""}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : src ? (
                            <img
                                src={src}
                                alt="Screen content"
                                className={`w-full h-full object-cover ${contentClassName || ""}`}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-sm font-medium text-black dark:text-white">
                                Demo Content
                            </div>
                        )}
                    </div>
                </foreignObject>

                {/* Side buttons */}
                <path
                    d={`M -2 200 v 45 a 4 4 0 0 0 4 4 h 1 v -53 h -1 a 4 4 0 0 0 -4 4 z`}
                    className={`fill-${frameDarkColor} dark:fill-${frameColor} opacity-20 dark:opacity-40`}
                />
                <path
                    d={`M -2 265 v 85 a 4 4 0 0 0 4 4 h 1 v -93 h -1 a 4 4 0 0 0 -4 4 z`}
                    className={`fill-${frameDarkColor} dark:fill-${frameColor} opacity-20 dark:opacity-40`}
                />
                <path
                    d={`M -2 365 v 85 a 4 4 0 0 0 4 4 h 1 v -93 h -1 a 4 4 0 0 0 -4 4 z`}
                    className={`fill-${frameDarkColor} dark:fill-${frameColor} opacity-20 dark:opacity-40`}
                />

                {/* Power button */}
                <path
                    d={`M ${width} 280 v 115 a 4 4 0 0 0 -4 -4 h -1 v 123 h 1 a 4 4 0 0 0 4 -4 z`}
                    transform={`translate(${width}, 0) scale(-1, 1)`}
                    className={`fill-${frameDarkColor} dark:fill-${frameColor} opacity-20 dark:opacity-40`}
                />
            </svg>
        );
    }
);

Iphone16Pro.displayName = "Iphone16Pro";
