import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";

const MOVEMENT_DAMPING = 1400;

const DEFAULT_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 4,
  baseColor: [0.08, 0.14, 0.24],
  markerColor: [0.43, 0.84, 1],
  glowColor: [0.16, 0.36, 0.76],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.08 },
    { location: [30.0444, 31.2357], size: 0.06 },
    { location: [39.9042, 116.4074], size: 0.06 },
    { location: [-23.5505, -46.6333], size: 0.08 },
    { location: [19.4326, -99.1332], size: 0.08 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.07 },
  ],
};

export function Globe({ className = "", config = DEFAULT_CONFIG }) {
  const canvasRef = useRef(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.0028;
        }

        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    window.setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, rs]);

  return (
    <div className={`magic-globe ${className}`.trim()}>
      <canvas className="magic-globe-canvas" ref={canvasRef} />
    </div>
  );
}
