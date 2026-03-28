import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FAQSection({ section }) {
  const { lang } = useLanguage();

  const defaultItemsEN = [
    {
      question: "What makes Janto feel different from a standard phone UI?",
      answer: "The docs describe a full phone ecosystem, not just a launcher. Messages, WhisApp, Vibeshot, banking, garage, emergency, settings, vault, and battery all live on one owned device with persistent metadata.",
    },
    {
      question: "Is it built for serious RP servers?",
      answer: "Yes. Item-level ownership, battery drain and powerbank support, location-aware emergency reporting, multi-account banking, and bridge-ready integrations make it fit deeper RP environments.",
    },
    {
      question: "Which live interaction layers are actually included?",
      answer: "Docs call out voice notes, contact cards, replies, live location, link previews, reels, stories, live broadcasts, map sharing, screen mirroring, and location-aware emergency flows.",
    },
    {
      question: "How broad is the integration surface?",
      answer: "Janto is documented across QBox, QBCore, ESX, vRP or standalone patterns, with support touching inventory, garages, banking, voice, media upload, logging, and language layers.",
    },
  ];

  const defaultItemsTR = [
    {
      question: "Janto'yu standart bir telefon arayüzunden ayiran sey ne?",
      answer: "Dokumanlar Janto'yu yalnizca bir launcher gibi degil; Messages, WhisApp, Vibeshot, banka, garaj, acil durum, ayarlar, vault ve bataryayi tek sahip olunan cihazda birleştiren tam bir telefon ekosistemi olarak konumlandiriyor.",
    },
    {
      question: "Ciddi RP sunuculari icin uygun mu?",
      answer: "Evet. Item seviyesinde sahiplik, batarya dususu ve powerbank destegi, konum farkindalikli acil bildirim, coklu hesap bankaciligi ve bridge hazir entegrasyonlar daha derin RP sunucularina uygun bir temel kurar.",
    },
    {
      question: "Hangi canli etkilesim katmanlari gerçekten var?",
      answer: "Dokumanlarda sesli not, kişi karti, cevap akişi, canli konum, link önizlemesi, reels, hikayeler, canli yayınlar, harita paylasimi, ekran yansitma ve konum odakli acil durum akışlari acikca yer aliyor.",
    },
    {
      question: "Entegrasyon kapsami ne kadar genis?",
      answer: "Janto; QBox, QBCore, ESX, vRP ve standalone yapilarla birlikte envanter, garaj, bankacilik, ses, medya upload, log ve birden fazla dil katmanına dokunan genis bir entegrasyon yuzeyi sunar.",
    },
  ];

  const items = section?.items || (lang === "tr" ? defaultItemsTR : defaultItemsEN);

  const t = {
    eyebrow: lang === "tr" ? "SSS" : "FAQ",
    title: lang === "tr" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions",
    desc:
      lang === "tr"
        ? "Sahiplik hissi, entegrasyon kapsami ve dokümanlarda anlatilan özellik derinligi hakkinda kisa cevaplar."
        : "Short answers on ownership, integrations, and the feature depth documented across the Janto ecosystem.",
  };

  return (
    <section className="relative z-10 w-full bg-transparent py-20 sm:py-24 lg:py-32" id="faq">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 space-y-4 text-center sm:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
            {section?.eyebrow || t.eyebrow}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
            {section?.title || t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {t.desc}
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="mx-auto w-full max-w-3xl space-y-4">
          {items.map((item, idx) => (
            <Accordion.Item
              key={idx}
              value={`item-${idx}`}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white/50 backdrop-blur-sm transition-colors hover:bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-neutral-900 dark:text-white sm:text-lg">
                  <span className="pr-8">{item.question}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-180 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-white"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-neutral-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-neutral-400">
                <div className="px-6 pb-6 pt-0 text-sm leading-relaxed sm:text-base">{item.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
