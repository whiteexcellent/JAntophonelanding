import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { lang } = useLanguage();
  const t = {
    desc: lang === "tr" ? "FiveM sunucularını yeni nesil premium scriptler ve nefes kesici kullanıcı deneyimleriyle güçlendiriyoruz." : "Empowering FiveM servers with next-generation premium scripts and breathtaking user experiences.",
    products: lang === "tr" ? "Ürünler" : "Products",
    phone: lang === "tr" ? "Telefon Sistemi" : "Phone System",
    banking: lang === "tr" ? "Banka Sistemi" : "Banking",
    garage: lang === "tr" ? "Garaj" : "Garage",
    resources: lang === "tr" ? "Kaynaklar" : "Resources",
    doc: lang === "tr" ? "Dokümantasyon" : "Documentation",
    support: lang === "tr" ? "Destek" : "Support",
    api: lang === "tr" ? "API Referansı" : "API Reference",
    legal: lang === "tr" ? "Yasal & İletişim" : "Legal & Connect",
    tos: lang === "tr" ? "Hizmet Şartları" : "Terms of Service",
    community: lang === "tr" ? "Discord Topluluğu ↗" : "Discord Community ↗",
    rights: lang === "tr" ? "Tüm hakları saklıdır." : "All rights reserved.",
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent pt-16 pb-24 transition-colors duration-500 sm:pb-8">
      <div className="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-12 md:gap-12 lg:gap-8">
          <div className="col-span-1 flex flex-col gap-4 md:col-span-5 lg:col-span-4">
            <a href="#top" className="group flex w-fit items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-black text-white shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-105 dark:bg-transparent dark:text-black dark:shadow-none">
                <img src="/favicon.png" alt="Janto Logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">Janto</h1>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-white/40">DEV</p>
              </div>
            </a>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-neutral-600 dark:text-white/50">
              {t.desc}
            </p>
          </div>

          <div className="col-span-1 grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3 lg:col-span-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.products}</h4>
              <a href="https://docs.jantolab.com/en/features/" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.phone}</a>
              <a href="https://docs.jantolab.com/en/features/bank.html#bank" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.banking}</a>
              <a href="https://docs.jantolab.com/en/features/garage.html#garage" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.garage}</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.resources}</h4>
              <a href="https://docs.jantolab.com/en/" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.doc}</a>
              <a href="https://discord.gg/qW9bGKvQ9j" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.support}</a>
              <a href="https://docs.jantolab.com/en/api/server-exports.html" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.api}</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.legal}</h4>
              <a href="https://docs.jantolab.com/en/guide/faq.html" target="_blank" rel="noopener noreferrer" className="w-fit break-words text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-white/50 dark:hover:text-white">{t.tos}</a>
              <a href="https://discord.gg/qW9bGKvQ9j" target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-1 break-words text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">{t.community}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 text-center sm:flex-row sm:text-left dark:border-white/5">
          <p className="text-xs font-medium text-neutral-500 dark:text-white/40">
            © {new Date().getFullYear()} Janto Development. {t.rights} <span className="ml-2 border-l border-black/20 pl-2 dark:border-white/20">{lang === 'tr' ? 'Site Tasarımı: ' : 'Designed by '}<a href="https://github.com/whiteexcellent" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-800 hover:underline dark:hover:text-white">whiteexcellent</a></span>
          </p>

          <div className="flex items-center gap-4 text-neutral-500 dark:text-white/40">
            <a href="https://kick.com/jantoo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-900 dark:hover:text-white" aria-label="Kick">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.141 3.963h-2.477v4.945h-2.435V3.963H11.23v4.945H8.756V3.963H3.722v16.074h5.034v-4.943h2.473v4.943h2.518v-4.943h2.477v4.943h4.945V3.963zM16.14 13.91h-2.435v-2.474h2.435v2.474z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/iamoznozkn" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-900 dark:hover:text-white" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-900 dark:hover:text-white" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://www.twitch.tv/imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-900 dark:hover:text-white" aria-label="Twitch">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-900 dark:hover:text-white" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.25-.97 4.41-2.58 5.92-1.89 1.83-4.52 2.89-7.1 2.65-2.59-.16-5.04-1.47-6.52-3.48-1.57-2.09-2.02-4.89-1.2-7.39.77-2.42 2.62-4.42 4.97-5.32 2.45-.96 5.25-.8 7.6 0v4.08c-1.39-.77-3.08-1.01-4.7-.63-1.61.34-3.04 1.4-3.8 2.87-.79 1.51-.7 3.32.22 4.75 1.01 1.58 2.89 2.51 4.74 2.37 1.89-.13 3.65-1.29 4.41-3.01.44-.98.6-2.09.58-3.18V.02h-1.69Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
