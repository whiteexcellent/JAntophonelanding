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
        </div>
      </div>
    </footer>
  );
}
