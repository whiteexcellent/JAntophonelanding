import { useEffect, useState } from "react";

function getWidth() {
  if (typeof window === "undefined") {
    return 1440;
  }

  return window.innerWidth;
}

export function useViewport() {
  const [width, setWidth] = useState(getWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isSmallMobile: width <= 479,
    isMobile: width <= 767,
    isTablet: width >= 768 && width <= 1023,
    isDesktop: width >= 1024,
  };
}
