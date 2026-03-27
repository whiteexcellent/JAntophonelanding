import { motion, useReducedMotion } from "motion/react";

const motionTags = {
  article: motion.article,
  nav: motion.nav,
  section: motion.section,
  header: motion.header,
  li: motion.li,
  ul: motion.ul,
  span: motion.span,
  div: motion.div,
};

export function MotionReveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motionTags[Tag] || motion.div;

  return (
    <MotionTag
      className={`motion-reveal ${className}`.trim()}
      initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(10px)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.74, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
