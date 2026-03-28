import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  LayoutGrid,
  PackageOpen,
  PlayCircle,
  ShoppingBag,
  Smartphone,
  X,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useViewport } from "../hooks/useViewport";

const mediaList = [
  { id: 1, type: "image", src: "https://dunb17ur4ymx4.cloudfront.net/packages/images/917ada7ab58a00f5e6ed27a7b0ad011454df4e22.png", thumb: "https://dunb17ur4ymx4.cloudfront.net/packages/images/917ada7ab58a00f5e6ed27a7b0ad011454df4e22.png" },
  { id: 2, type: "video", src: "https://www.youtube.com/embed/WCHUznv2Ca8?autoplay=1&color=white&rel=0", thumb: "https://i.ytimg.com/vi_webp/WCHUznv2Ca8/maxresdefault.webp" },
  { id: 3, type: "image", src: "https://dunb17ur4ymx4.cloudfront.net/packages/images/d9c68083b8a8703a3f82458d64f7255f52b7a669.png", thumb: "https://dunb17ur4ymx4.cloudfront.net/packages/images/d9c68083b8a8703a3f82458d64f7255f52b7a669.png" },
  { id: 4, type: "image", src: "https://dunb17ur4ymx4.cloudfront.net/packages/images/d1fe3ddf2e3e0a2dc4ba36b83fedc8f6e26c0976.png", thumb: "https://dunb17ur4ymx4.cloudfront.net/packages/images/d1fe3ddf2e3e0a2dc4ba36b83fedc8f6e26c0976.png" },
  { id: 5, type: "image", src: "https://dunb17ur4ymx4.cloudfront.net/packages/images/6aa771d60ee384070c4bd65a05999c2c8f7c3bc3.png", thumb: "https://dunb17ur4ymx4.cloudfront.net/packages/images/6aa771d60ee384070c4bd65a05999c2c8f7c3bc3.png" },
  { id: 6, type: "image", src: "https://dunb17ur4ymx4.cloudfront.net/packages/images/63eff6aa9c502c54b7dbbaa2c25ec886b2662d5e.png", thumb: "https://dunb17ur4ymx4.cloudfront.net/packages/images/63eff6aa9c502c54b7dbbaa2c25ec886b2662d5e.png" },
];

const frameworks = [
  { name: "QBox", inventory: "ox-inventory", garage: "qbx-garage", bank: "Renewed Banking" },
  { name: "QBCore", inventory: "qb-inventory", garage: "qb-garage", bank: "QB Banking" },
  { name: "ESX", inventory: "qs-inventory", garage: "cd-garage", bank: "ESX Banking" },
  { name: "VRP", inventory: "tgiann-inventory", garage: "loaf-garage", bank: "Brutal Banking" },
  { name: "Standalone", inventory: "esx-inventory", garage: "jg-advancedgarages", bank: "Standalone" },
];

function getStoreText(lang) {
  if (lang === "tr") {
    return {
      purchaseLifetime: "Ömür Boyu Satın Al",
      subscribeMonthly: "Aylık Abone Ol",
      protectedText: "FiveM Asset Escrow ile korunmaktadır",
      whyTitle: "Neden Janto Lab?",
      buyLifetime: "Ömür Boyu Al",
      monthly: "Aylık",
      lifetime: "Ömür Boyu",
      alphaRelease: "Alpha Sürüm",
      bestValue: "En İyi Değer",
      supremePerformance: "Üst Düzey Performans",
      multiFramework: "Çoklu Framework",
      optimizedPerformance: "Optimize Performans",
      optimizedPerformanceBody: "Performans odaklı mimari; boşta 0.00ms resmon kullanımı sunar.",
      modernUi: "Modern UI/UX",
      modernUiBody: "Akıcı animasyonlar ve duyarlılık odaklı düzen ile React tabanlı etkileyici bir arayüz sunar.",
      developerFriendly: "Geliştirici Dostu",
      developerFriendlyBody: "Diğer scriptlerle kolay entegrasyon için kapsamlı API ve event sistemi sunar.",
      nextGenEcosystem: "Yeni Nesil Ekosistem",
      nextGenLead: "Janto Lab, geleneksel telefon scriptlerinin ötesine geçerek yaşayan bir rol yapma ekosistemi sunar. Alpha aşamasında en iyi fiyatla sahip olun.",
      coreRequirements: "Temel Gereksinimler",
      appEcosystem: "Uygulama Ekosistemi",
      supportedScripts: "Desteklenen Scriptler",
      framework: "Framework",
      inventory: "Envanter",
      supportNote: "* Banka, ses ve garaj entegrasyonlari icin genis kapsamli destek sunar.",
      voiceRequirement: "pma-voice (sesli mesaj ve aramalar icin)",
      ecosystemApps: ["WhisApp", "Vibeshot", "Bankacilik", "V Store", "Ilan Kurulumu", "Canli Haritalar", "Kamera ve Galeri", "Ekran Yansitma"],
    };
  }

  return {
    purchaseLifetime: "Purchase Lifetime",
    subscribeMonthly: "Subscribe Monthly",
    protectedText: "Protected via FiveM Asset Escrow",
    whyTitle: "Why Janto Lab?",
    buyLifetime: "Buy Lifetime",
    monthly: "Monthly",
    lifetime: "Lifetime",
    alphaRelease: "Alpha Release",
    bestValue: "Best Value",
    supremePerformance: "Supreme Performance",
    multiFramework: "Multi-Framework",
    optimizedPerformance: "Optimized Performance",
    optimizedPerformanceBody: "Performance-oriented architecture; provides 0.00ms resmon usage in idle mode.",
    modernUi: "Modern UI/UX",
    modernUiBody: "Stunning React-based interface with fluid animations and responsive design.",
    developerFriendly: "Developer Friendly",
    developerFriendlyBody: "Comprehensive API and event system for easy integration with other scripts.",
    nextGenEcosystem: "Next-Gen Ecosystem",
    nextGenLead: "Janto Lab goes far beyond traditional phone scripts to deliver a living roleplay ecosystem. Secure it at the best price by joining during the Alpha stage.",
    coreRequirements: "Core Requirements",
    appEcosystem: "App Ecosystem",
    supportedScripts: "Supported Scripts",
    framework: "Framework",
    inventory: "Inventory",
    supportNote: "* Supports extensive banking, voice, and garage integrations globally.",
    voiceRequirement: "pma-voice (for voice msgs & calls)",
    ecosystemApps: ["WhisApp", "Vibeshot", "Banking", "V Store", "Ads Setup", "Live Maps", "Camera & Gallery", "Screen Mirroring"],
  };
}

export function StorePopup() {
  const { lang } = useLanguage();
  const { isDesktop } = useViewport();
  const t = getStoreText(lang);

  const [isOpen, setIsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(mediaList[0]);
  const [selectedPlan, setSelectedPlan] = useState("lifetime");

  useBodyScrollLock(isOpen);

  return (
    <>
      {isDesktop ? (
        <div className="fixed left-0 top-1/2 z-[80] -translate-y-1/2">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-r-2xl border border-l-0 border-white/20 bg-black/80 px-2.5 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 ease-out hover:pl-3 hover:pr-4 dark:border-black/20 dark:bg-white/90 dark:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 rounded-r-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-black/5 dark:to-transparent" />
            <ShoppingBag className="relative z-10 h-5 w-5 shrink-0 animate-bounce text-white dark:text-black" style={{ animationDuration: "3s" }} />
            <span
              className="relative z-10 whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.15em] text-white dark:text-black"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {t.buyLifetime}
            </span>
          </button>
        </div>
      ) : !isOpen ? (
        <div
          className="fixed inset-x-0 z-[80] px-4"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex min-h-14 w-full items-center justify-center gap-3 rounded-[1.4rem] border border-white/12 bg-black/85 px-5 py-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/92 dark:text-black"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-[0.14em] uppercase">{t.buyLifetime}</span>
          </button>
        </div>
      ) : null}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-[100] flex bg-black/60 backdrop-blur-md ${isDesktop ? "items-center justify-center p-4 sm:p-6 md:p-12" : "items-end justify-stretch px-0 pt-10"}`}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: isDesktop ? 0.95 : 1, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: isDesktop ? 0.95 : 1, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className={`relative flex w-full overflow-hidden border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0a0a0c] ${isDesktop ? "max-h-[90vh] max-w-[1200px] rounded-[2rem] flex-col md:flex-row" : "max-h-[92dvh] min-h-[70dvh] flex-col rounded-t-[2rem] rounded-b-none"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {!isDesktop && <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-black/10 dark:bg-white/10" />}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-50 rounded-full bg-black/5 p-2.5 text-black/60 backdrop-blur-xl transition-colors hover:bg-black/10 hover:text-black dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className={`flex w-full flex-col border-black/5 bg-neutral-100/50 p-4 dark:bg-black ${isDesktop ? "md:w-3/5 md:border-b-0 md:border-r md:p-8" : "border-b"}`}>
                <motion.div
                  key={activeMedia.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-black/5 shadow-inner dark:border-white/10 dark:bg-white/5"
                >
                  {activeMedia.type === "video" ? (
                    <iframe
                      src={activeMedia.src}
                      className="h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Product Video"
                    />
                  ) : (
                    <img src={activeMedia.src} alt="Janto Lab Presentation" className="h-full w-full object-cover" />
                  )}
                </motion.div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {mediaList.map((media) => (
                    <button
                      key={media.id}
                      type="button"
                      onClick={() => setActiveMedia(media)}
                      className={`relative aspect-[16/9] w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                        activeMedia.id === media.id ? "scale-105 border-blue-500 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={media.thumb} alt="thumbnail" className="h-full w-full object-cover" />
                      {media.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <PlayCircle className="h-8 w-8 text-white opacity-90" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className={`mt-5 grid gap-4 ${isDesktop ? "mt-auto grid-cols-2" : "grid-cols-1"}`}>
                  <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-white/5">
                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-sm text-black dark:text-white">{t.supremePerformance}</strong>
                      <span className="text-xs text-black/60 dark:text-white/50">0.00 - 0.01 ms idle usage</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-white/5">
                    <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                      <PackageOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-sm text-black dark:text-white">{t.multiFramework}</strong>
                      <span className="text-xs text-black/60 dark:text-white/50">ESX, QBCore, vRP & Standalone</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`w-full ${isDesktop ? "overflow-y-auto md:w-2/5 lg:w-[40%]" : "overflow-y-auto"} [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
                <div
                  className="flex flex-col p-5 sm:p-6 md:p-8"
                  style={!isDesktop ? { paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)" } : undefined}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-black/70 dark:bg-white/10 dark:text-white/70">
                        <StarIcon className="h-3.5 w-3.5" /> {t.alphaRelease}
                      </div>
                      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-4xl">
                        {t.planTitle} <br />
                        <span className="text-blue-600 dark:text-blue-500">{selectedPlan === "lifetime" ? t.lifetime : t.monthly}</span>
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan("monthly")}
                      className={`flex-1 rounded-2xl border-2 p-4 text-left transition-all ${
                        selectedPlan === "monthly"
                          ? "border-blue-600 bg-blue-500/10"
                          : "border-black/5 bg-black/5 hover:border-black/10 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10"
                      }`}
                    >
                      <span className="mb-1 block text-sm font-semibold text-black/60 dark:text-white/60">{t.monthly}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-black dark:text-white">$22.41</span>
                        <span className="text-sm font-normal text-black/50 dark:text-white/40">/mo</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPlan("lifetime")}
                      className={`relative flex-1 rounded-2xl border-2 p-4 text-left transition-all ${
                        selectedPlan === "lifetime"
                          ? "border-blue-600 bg-blue-500/10"
                          : "border-black/5 bg-black/5 hover:border-black/10 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10"
                      }`}
                    >
                      <div className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {t.bestValue}
                      </div>
                      <span className="mb-1 block text-sm font-semibold text-black/60 dark:text-white/60">{t.lifetime}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-black dark:text-white">$103.71</span>
                        <span className="text-sm font-normal text-black/50 dark:text-white/40">USD</span>
                      </div>
                    </button>
                  </div>

                  <a
                    href={selectedPlan === "lifetime" ? "https://store.jantolab.com/package/7247156" : "https://store.jantolab.com/package/7272096"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-2xl"
                  >
                    {selectedPlan === "lifetime" ? t.purchaseLifetime : t.subscribeMonthly}
                    <ArrowUpRight className="h-5 w-5" />
                  </a>

                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs leading-snug text-black/50 dark:text-white/40">
                    <ShieldIcon className="h-4 w-4" /> {t.protectedText}
                  </p>

                  <div className="mt-8 flex flex-col gap-8">
                    <div>
                      <h3 className="mb-4 text-lg font-bold text-black dark:text-white">{t.whyTitle}</h3>
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-3">
                          <div className="h-fit rounded-xl bg-blue-500/10 p-2.5 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                            <Cpu className="h-5 w-5" />
                          </div>
                          <div>
                            <strong className="mb-0.5 block text-[15px] text-black dark:text-white">{t.optimizedPerformance}</strong>
                            <span className="text-[13.5px] leading-relaxed text-black/70 dark:text-white/70">
                              {lang === "tr" ? (
                                <>
                                  Performans odakli mimari; <strong className="font-semibold text-black/90 dark:text-white/90">0.00ms resmon kullanimi</strong> bosta sunar.
                                </>
                              ) : (
                                <>
                                  Performance-oriented architecture; provides <strong className="font-semibold text-black/90 dark:text-white/90">0.00ms resmon usage</strong> in idle mode.
                                </>
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="h-fit rounded-xl bg-rose-500/10 p-2.5 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
                            <Smartphone className="h-5 w-5" />
                          </div>
                          <div>
                            <strong className="mb-0.5 block text-[15px] text-black dark:text-white">{t.modernUi}</strong>
                            <span className="text-[13.5px] leading-relaxed text-black/70 dark:text-white/70">{t.modernUiBody}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="h-fit rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                            <Code2 className="h-5 w-5" />
                          </div>
                          <div>
                            <strong className="mb-0.5 block text-[15px] text-black dark:text-white">{t.developerFriendly}</strong>
                            <span className="text-[13.5px] leading-relaxed text-black/70 dark:text-white/70">{t.developerFriendlyBody}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-bold text-black dark:text-white">
                        <Smartphone className="h-5 w-5 text-blue-500" />
                        {t.nextGenEcosystem}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-black/70 dark:text-white/70">{t.nextGenLead}</p>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-bold text-black dark:text-white">{t.coreRequirements}</h3>
                      <ul className="space-y-2">
                        {["oxmysql", t.voiceRequirement, "OneSync Infinity"].map((req, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-[15px] font-medium text-black/70 dark:text-white/70">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-black dark:text-white">
                        <LayoutGrid className="h-5 w-5 text-indigo-500" />
                        {t.appEcosystem}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {t.ecosystemApps.map((app, i) => (
                          <div key={i} className="flex items-center gap-2 rounded-lg border border-black/5 bg-black/5 px-3 py-2 text-[13px] font-semibold text-black/80 dark:border-white/5 dark:bg-white/5 dark:text-white/80">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {app}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-lg font-bold text-black dark:text-white">{t.supportedScripts}</h3>
                      <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <table className="w-full min-w-[360px] whitespace-nowrap text-left text-sm">
                          <thead className="bg-black/5 text-black/60 dark:bg-white/10 dark:text-white/60">
                            <tr>
                              <th className="px-4 py-3 font-semibold">{t.framework}</th>
                              <th className="px-4 py-3 font-semibold">{t.inventory}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-black/5 text-black/80 dark:divide-white/5 dark:text-white/80">
                            {frameworks.map((fw, i) => (
                              <tr key={i} className="transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                                <td className="px-4 py-3 font-medium">{fw.name}</td>
                                <td className="px-4 py-3 text-black/60 dark:text-white/60">{fw.inventory}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-3 text-xs italic text-black/50 dark:text-white/40">{t.supportNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StarIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
