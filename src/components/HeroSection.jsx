import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { PhoneStage } from "./PhoneStage";
import { Globe } from "@/components/ui/cobe-globe";
import { TrialButton } from "@/components/ui/trial-button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function HeroSection({ hero, ctas, isDarkMode }) {
  const { lang } = useLanguage();
  return (
    <section className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-x-hidden pt-12 pb-20 sm:pt-16 md:pt-20 md:pb-24 lg:pt-20 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,178,255,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,248,255,0.72)_55%,rgba(239,244,255,0.98))] transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,rgba(72,116,197,0.22),transparent_28%),linear-gradient(180deg,rgba(2,6,14,0.96),rgba(3,8,18,0.92)_55%,rgba(2,5,12,1))]" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-64 w-full bg-gradient-to-b from-transparent to-white transition-colors duration-500 dark:to-black" />

      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden opacity-90 mix-blend-normal dark:opacity-40 dark:mix-blend-screen">
        <div className="pointer-events-none h-[650px] w-[650px] md:h-[1000px] md:w-[1000px]">
          <Globe
            dark={isDarkMode ? 1 : 0}
            baseColor={isDarkMode ? [0.4, 0.65, 1] : [1, 1, 1]}
            glowColor={isDarkMode ? [0.27, 0.57, 0.9] : [1, 1, 1]}
          />
        </div>
      </div>

      <div className="pointer-events-none container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pointer-events-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <Breadcrumb className="mb-6 hidden md:block">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                    {lang === "tr" ? "Ana Sayfa" : "Home"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-neutral-400" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/scripts" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                    {lang === "tr" ? "FiveM Scriptleri" : "FiveM Scripts"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-neutral-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-neutral-900 dark:text-white">{lang === "tr" ? "Telefon Scripti" : "Phone Script"}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-3 py-1 text-sm font-medium text-blue-700 shadow-[0_10px_30px_rgba(86,124,199,0.14)] backdrop-blur-md dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              {hero.eyebrow}
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tighter text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-white/50">
                {hero.title}
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-white/60 sm:mb-10 sm:text-lg md:text-xl">
              {hero.lead}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="rounded-2xl border border-black/6 bg-white/70 px-4 py-3 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-white/[0.04]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 dark:text-white/38">
                  Source
                </div>
                <div className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white">
                  Apple iOS 26 UI Kit
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <a href={ctas.primary.href} className="w-full overflow-visible sm:w-auto" style={{ position: "relative", zIndex: 50 }}>
                <TrialButton
                  className="h-[52px] w-full px-8 text-[15px] font-semibold text-black dark:text-neutral-100 bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 sm:w-auto"
                  trailColor="#0ea5e9"
                  blurColor="#3b82f6"
                >
                  {ctas.primary.label}
                </TrialButton>
              </a>
              <a href={ctas.secondary.href} className="group flex w-full items-center justify-center sm:w-auto">
                <HoverBorderGradient
                  containerClassName="w-full rounded-2xl sm:w-auto"
                  as="div"
                  className="flex h-[52px] w-full cursor-pointer items-center justify-center rounded-xl bg-black/5 px-8 text-[15px] font-medium text-neutral-900 backdrop-blur-md transition-colors duration-300 hover:bg-black/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
                >
                  <span className="relative z-10">{ctas.secondary.label}</span>
                </HoverBorderGradient>
              </a>
            </div>

            <div className="mt-12 grid w-full max-w-xl grid-cols-1 gap-4 border-t border-black/10 pt-8 dark:border-white/10 min-[480px]:grid-cols-2 lg:max-w-md">
              {hero.signals.map((signal, index) => (
                <motion.div
                  key={signal.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col gap-1 rounded-2xl border border-black/5 bg-white/55 px-4 py-4 text-left shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-white/8 dark:bg-white/[0.03]"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-white/40">
                    {signal.kicker}
                  </span>
                  <strong className="text-2xl font-bold text-neutral-900 dark:text-white">{signal.value}</strong>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative order-last flex w-full justify-center lg:absolute lg:right-0 lg:top-1/2 lg:w-1/2 lg:-translate-y-1/2 lg:translate-x-[12%] lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none">
              <PhoneStage slides={hero.slides} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
