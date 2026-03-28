import { useEffect } from "react";

const LOCK_ATTR = "data-scroll-lock-count";
const PREV_OVERFLOW_ATTR = "data-scroll-lock-prev-overflow";

export function useBodyScrollLock(active) {
  useEffect(() => {
    if (!active || typeof document === "undefined") {
      return undefined;
    }

    const { body } = document;
    const currentCount = Number(body.getAttribute(LOCK_ATTR) || "0");

    if (currentCount === 0) {
      body.setAttribute(PREV_OVERFLOW_ATTR, body.style.overflow || "");
      body.style.overflow = "hidden";
    }

    body.setAttribute(LOCK_ATTR, String(currentCount + 1));

    return () => {
      const nextCount = Math.max(0, Number(body.getAttribute(LOCK_ATTR) || "1") - 1);

      if (nextCount === 0) {
        body.style.overflow = body.getAttribute(PREV_OVERFLOW_ATTR) || "";
        body.removeAttribute(LOCK_ATTR);
        body.removeAttribute(PREV_OVERFLOW_ATTR);
        return;
      }

      body.setAttribute(LOCK_ATTR, String(nextCount));
    };
  }, [active]);
}
