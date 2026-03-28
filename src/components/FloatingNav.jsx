import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Switch from "@/components/sky-toggle";
import { LanguageSwitcher, useLanguage } from "../context/LanguageContext";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

export function FloatingNav({ brand, navLinks, discordHref, isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { lang } = useLanguage();
  const discordLabel = lang === "tr" ? "Discord'a Katil" : "Join Discord";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 18);
  });

  useBodyScrollLock(isOpen);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)" }}
    >
      <header
        className={`pointer-events-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "rounded-[1.75rem] md:rounded-full border border-black/10 bg-white/80 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-black/40 dark:shadow-black/50"
            : "rounded-[1.75rem] md:rounded-full bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="group flex min-w-0 items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-black/10 bg-black/5 shadow-[0_0_24px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-transform duration-300 ease-out group-hover:scale-[1.04] dark:border-white/10 dark:bg-white/6 dark:shadow-[0_0_24px_rgba(255,255,255,0.08)] sm:h-11 sm:w-11">
              <img src={brand.logo} alt={brand.name} className="h-full w-full object-cover invert dark:invert-0" />
            </div>
            <div className="flex min-w-0 flex-col">
              <h1 className="truncate text-[1rem] font-bold leading-tight tracking-tight text-black dark:text-white sm:text-[1.1rem]">
                {brand.name}
              </h1>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-black/60 dark:text-white/40">
                {brand.sublabel}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-black/60 transition-colors duration-300 hover:text-black dark:text-white/60 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher />
            <Switch checked={isDarkMode} onChange={toggleTheme} />
            <a href={discordHref} target="_blank" rel="noreferrer">
              <RainbowButton className="h-[38px] rounded-full border border-black/10 bg-white px-6 text-[13px] font-semibold tracking-wide text-neutral-900 shadow-lg shadow-black/10 hover:border-black/30 dark:border-white/20 dark:bg-black dark:text-white dark:shadow-white/5 dark:hover:border-white/40">
                <span className="relative z-10 drop-shadow-md">{discordLabel}</span>
              </RainbowButton>
            </a>
          </div>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-2xl border border-black/10 bg-white/55 p-2.5 text-black backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={isOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 right-0 top-full mt-3 flex flex-col gap-4 rounded-[1.75rem] border border-black/10 bg-white/92 p-4 shadow-2xl shadow-black/10 backdrop-blur-2xl dark:border-white/10 dark:bg-black/90 dark:shadow-black/40 md:hidden"
            >
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-black/5 px-3 py-3 dark:bg-white/5">
                <span className="text-sm font-medium text-black/60 dark:text-white/60">Dil / Language</span>
                <LanguageSwitcher />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-black/5 px-3 py-3 dark:bg-white/5">
                <span className="text-sm font-medium text-black/60 dark:text-white/60">
                  {lang === "tr" ? "Tema Degistir" : "Toggle Theme"}
                </span>
                <Switch checked={isDarkMode} onChange={toggleTheme} />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center rounded-2xl px-3 py-3 text-base font-medium text-black/80 transition-colors hover:bg-black/5 hover:text-black dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a href={discordHref} target="_blank" rel="noreferrer" className="mt-2" onClick={() => setIsOpen(false)}>
                <RainbowButton className="min-h-12 w-full rounded-2xl bg-black font-bold text-white dark:bg-white dark:text-black">
                  {discordLabel}
                </RainbowButton>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
