import React from "react";
import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { compatibilityData, compatibilitySectionData, featuresList, videoContent } from "../data/featuresData";
import { useLanguage } from "../context/LanguageContext";

export function FeaturesSection() {
  const { lang } = useLanguage();
  const currentFeatures = featuresList[lang] || featuresList.en;
  const currentVideo = videoContent[lang] || videoContent.en;
  const compSectionData = compatibilitySectionData[lang] || compatibilitySectionData.en;

  const t = {
    ecosystemTitle: lang === "tr" ? "Dokumanlarla Dogrulanan Uygulama Ekosistemi" : "Docs-Backed App Ecosystem",
    ecosystemBody:
      lang === "tr"
        ? "Janto Phone; mesajlasma, sosyal kimlik, finans, arac yonetimi, acil durum ve sistem sahipligini tek bir telefon yuzeyinde birlestirir. Asagidaki bloklar dokumanlarda vurgulanan gercek uygulama katmanlarini ozetler."
        : "Janto Phone combines communication, social identity, finance, vehicle control, emergency response, and system ownership inside one phone surface. The blocks below summarize the real app layers called out in the documentation.",
    compatibilityTitle: lang === "tr" ? "Platform Uyumlulugu" : "Platform Compatibility",
    compatibilityBody:
      lang === "tr"
        ? "Dokumanlar; framework, envanter, garaj, bankacilik, ses, medya upload, log ve dil tarafinda genis bir entegrasyon yuzeyi tarif ediyor. Amac yalnizca guzel gorunen bir telefon degil, sunucunun geri kalanina baglanan bir cihaz."
        : "The docs describe a broad integration surface across frameworks, inventory, garage, banking, voice, media upload, logging, and language layers. The goal is not just a pretty phone, but a device that plugs into the rest of the server.",
    compatibilityHint:
      lang === "tr"
        ? "Tum uyumluluk tablosu icin yatay kaydirin"
        : "Swipe horizontally for full compatibility matrix",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const renderTableCell = (val, isFramework = false) => {
    if (val === "-") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-md border border-black/5 bg-black/5 px-2.5 py-1 text-xs font-medium text-neutral-500 dark:border-white/5 dark:bg-white/5">
          <Minus className="h-3 w-3" /> {lang === "tr" ? "Yok" : "None"}
        </span>
      );
    }

    if (isFramework) {
      return (
        <span className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
          </span>
          {val}
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
        <Check className="h-3 w-3" /> {val}
      </span>
    );
  };

  return (
    <section id="features" className="relative z-20 overflow-hidden bg-transparent py-20 transition-colors duration-500 sm:py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[120px] dark:bg-blue-900/15 sm:h-[800px] sm:w-[800px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-400/20 blur-[120px] dark:bg-purple-900/15 sm:h-[600px] sm:w-[600px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-20 px-4 sm:space-y-24 sm:px-6 lg:space-y-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center sm:space-y-12"
        >
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl font-black tracking-tight text-blue-600 drop-shadow-sm dark:text-blue-500 sm:text-4xl md:text-6xl">
              {currentVideo.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light text-neutral-600 dark:text-neutral-400 sm:text-lg md:text-xl">
              {currentVideo.subtitle}
            </p>
          </div>

          <div className="group relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-[1.4rem] bg-black/5 p-1.5 shadow-2xl shadow-blue-500/10 ring-1 ring-black/5 backdrop-blur-sm dark:bg-white/5 dark:ring-white/10 dark:shadow-blue-500/20 sm:rounded-3xl sm:p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-slate-100 dark:bg-black sm:rounded-2xl">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:from-white/5" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src={currentVideo.url}
                title="Janto Phone Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16"
          >
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
              {t.ecosystemTitle}
            </h3>
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
              {t.ecosystemBody}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6"
          >
            {currentFeatures.map((featureBlock, idx) => {
              const Icon = featureBlock.icon;

              return (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-neutral-200 bg-white p-5 shadow-xl shadow-black/5 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-[#0a0a0a] dark:shadow-black/50 dark:hover:border-white/20 dark:hover:shadow-blue-900/10 sm:rounded-[2rem] sm:p-8"
                >
                  <div className={`absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br ${featureBlock.color} opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100`} />

                  <div className="relative z-10 mb-8 flex items-start gap-4 sm:mb-10 sm:items-center sm:gap-5">
                    <div className="rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 p-3.5 shadow-inner ring-1 ring-black/5 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 dark:from-white/10 dark:to-white/[0.02] dark:ring-white/10 sm:p-4">
                      <Icon className={`h-8 w-8 ${featureBlock.iconColor} drop-shadow-md`} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-['Space_Grotesk'] text-xl font-bold tracking-normal text-neutral-800 drop-shadow-sm transition-colors duration-300 group-hover:text-black dark:text-white/90 dark:group-hover:text-white sm:text-2xl">
                      {featureBlock.category}
                    </h4>
                  </div>

                  <div className="relative z-10 space-y-5 sm:space-y-6">
                    {featureBlock.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="group/item relative flex flex-col gap-2">
                        <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                          {item.icon ? (
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-[0.9rem] border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 group-hover/item:scale-105 group-hover/item:border-neutral-300 dark:border-white/10 dark:bg-black/50 dark:group-hover/item:border-white/30">
                              <img src={item.icon} alt={item.name} className="h-full w-full object-cover" />
                            </div>
                          ) : (
                            <div className="mt-3 h-[2px] w-10 shrink-0 bg-gradient-to-r from-neutral-300 to-transparent transition-colors duration-300 group-hover/item:from-blue-500/50 dark:from-white/20 sm:mt-0" />
                          )}
                          <span className="font-['Space_Grotesk'] text-base font-bold capitalize tracking-normal text-neutral-700 opacity-90 transition-opacity group-hover/item:opacity-100 dark:text-white dark:opacity-80">
                            {item.name}
                          </span>
                        </div>
                        <span className="ml-[3.25rem] text-[14px] font-normal leading-relaxed text-neutral-500 opacity-90 transition-opacity group-hover/item:opacity-100 dark:text-neutral-400 dark:opacity-80 sm:ml-14 sm:text-[15px]">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10 sm:space-y-12"
        >
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h3 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
              {t.compatibilityTitle}
            </h3>
            <p className="text-base font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
              {t.compatibilityBody}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.65rem] bg-white/50 p-2 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0a0a0a]/50 dark:ring-white/10 md:rounded-[2rem] md:p-4">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-[80px] dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10" />

            <div className="relative z-10">
              <div className="px-2 pb-3 pt-1 text-left text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/40 md:hidden">
                {t.compatibilityHint}
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-10 bg-gradient-to-l from-white via-white/75 to-transparent dark:from-[#050505] dark:via-[#050505]/80 md:hidden" />

              <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-black/5 dark:bg-[#050505] dark:ring-white/5">
                <table className="min-w-[980px] w-full whitespace-nowrap text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/5 text-left text-sm dark:border-white/5">
                      <th className="sticky left-0 z-10 bg-neutral-50 px-6 py-5 font-semibold tracking-wide text-neutral-900 dark:bg-[#0b0f17] dark:text-white md:px-8 md:py-6">
                        {compSectionData.headers[0]}
                      </th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[1]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[2]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[3]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[4]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[5]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[6]}</th>
                      <th className="px-6 py-6 font-medium text-neutral-600 dark:text-neutral-300">{compSectionData.headers[7]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-white/5">
                    {compatibilityData.map((row, i) => (
                      <tr key={i} className="group transition-colors hover:bg-neutral-50 dark:hover:bg-white/[0.04]">
                        <td className="sticky left-0 z-10 bg-white px-6 py-5 dark:bg-[#050505] md:px-8">
                          {renderTableCell(row.framework, true)}
                        </td>
                        <td className="px-6 py-5">{renderTableCell(row.inventory)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.garages)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.banking)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.voice)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.media)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.logs)}</td>
                        <td className="px-6 py-5">{renderTableCell(row.lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
