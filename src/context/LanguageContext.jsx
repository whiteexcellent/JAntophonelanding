import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Check } from "lucide-react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("janto_lang");
    if (saved) setLang(saved);
  }, []);

  const changeLanguage = (nextLang) => {
    setLang(nextLang);
    localStorage.setItem("janto_lang", nextLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:bg-black/10 dark:border-white/10 dark:bg-black/20 dark:hover:bg-black/40"
      >
        <Globe className="h-4 w-4 text-black/70 transition-colors group-hover:text-black dark:text-white/70 dark:group-hover:text-white" />
        <span className="text-[13px] font-medium uppercase tracking-wide text-black/80 transition-colors group-hover:text-black dark:text-white/80 dark:group-hover:text-white">
          {lang}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-1.5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(15,15,15,0.85)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5" />

              <button
                onClick={() => {
                  changeLanguage("en");
                  setIsOpen(false);
                }}
                className={`relative w-full rounded-[12px] px-3 py-2.5 text-[13px] font-medium transition-all ${
                  lang === "en" ? "bg-black/10 text-black dark:bg-white/10 dark:text-white" : "text-black/60 hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                <span className="flex items-center justify-between">
                  <span>English</span>
                  {lang === "en" && <Check className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />}
                </span>
              </button>

              <button
                onClick={() => {
                  changeLanguage("tr");
                  setIsOpen(false);
                }}
                className={`relative w-full rounded-[12px] px-3 py-2.5 text-[13px] font-medium transition-all ${
                  lang === "tr" ? "bg-black/10 text-black dark:bg-white/10 dark:text-white" : "text-black/60 hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                <span className="flex items-center justify-between">
                  <span>Turkce</span>
                  {lang === "tr" && <Check className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />}
                </span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
