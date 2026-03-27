import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RainbowButton } from "./magicui/RainbowButton";

export function FloatingNav({ brand, navLinks, discordHref }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""} ${isOpen ? "is-open" : ""}`.trim()}>
      <div className="container">
        <nav className="floating-nav">
          <a className="brand" href="#top" aria-label={`${brand.name} ${brand.sublabel}`} onClick={() => setIsOpen(false)}>
            <span className="brand-mark"></span>
            <span className="brand-copy">
              <strong>{brand.name}</strong>
              <span>{brand.sublabel}</span>
            </span>
          </a>

          <div className="floating-nav-center">
            <NavigationMenu.Root className="floating-nav-menu">
              <NavigationMenu.List className="floating-nav-list">
                {navLinks.map((link) => (
                  <NavigationMenu.Item key={link.href}>
                    <NavigationMenu.Link asChild className="floating-nav-link">
                      <a href={link.href}>{link.label}</a>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>

          <div className="floating-nav-actions">
            <RainbowButton href={discordHref} tone="glass" className="nav-cta nav-cta-desktop" external>
              Join Discord
            </RainbowButton>

            <button
              type="button"
              className={`nav-toggle ${isOpen ? "active" : ""}`.trim()}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mobile-nav-panel"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container">
              <div className="mobile-nav-card">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                ))}

                <RainbowButton href={discordHref} tone="glass" className="mobile-nav-cta" external>
                  Join Discord
                </RainbowButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
