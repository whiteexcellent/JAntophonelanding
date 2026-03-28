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
            <a href="https://kick.com/jantoo" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#53FC18] dark:hover:text-[#53FC18]" aria-label="Kick">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/iamoznozkn" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#E1306C] dark:hover:text-[#E1306C]" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#FF0000] dark:hover:text-[#FF0000]" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.twitch.tv/imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#9146FF] dark:hover:text-[#9146FF]" aria-label="Twitch">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@imjanto" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-black dark:hover:text-white" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
