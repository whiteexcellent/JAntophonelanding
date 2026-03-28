import { useLanguage } from "../context/LanguageContext";
import { Download, Users, UserPlus, TrendingUp, TrendingDown } from "lucide-react";

export function ProjectStats() {
  const { lang } = useLanguage();
  const t = {
    downloads: lang === "tr" ? "İndirmeler" : "Downloads",
    users: lang === "tr" ? "Yeni Kullanıcılar" : "New Users",
    registers: lang === "tr" ? "Yeni Kayıtlar" : "New Registers",
    interval: lang === "tr" ? "1 Oca - 1 Şub" : "Jan 1st - Feb 1st"
  };

  return (
    <section className="relative z-10 flex w-full items-center justify-center px-4 py-10 sm:py-16">
      <div className="stats stats-vertical w-full max-w-5xl overflow-hidden rounded-3xl border border-black/5 bg-white/60 text-neutral-900 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-500 hover:shadow-black/10 dark:border-white/10 dark:bg-black/40 dark:text-white/90 dark:shadow-blue-900/5 lg:stats-horizontal">
        
        <div className="stat relative group overflow-hidden border-b border-black/5 dark:border-white/5 lg:border-b-0 lg:border-r">
          <div className="absolute -right-6 -top-6 text-black/5 transition-transform duration-500 group-hover:scale-110 dark:text-white/5">
            <Download size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <Download size={20} className="stroke-[2.5]" />
            </div>
            <div className="stat-title font-medium text-neutral-500 dark:text-white/60">{t.downloads}</div>
          </div>
          <div className="stat-value relative z-10 mt-3 text-4xl font-black text-neutral-900 dark:text-white">31K</div>
          <div className="stat-desc relative z-10 mt-1 font-medium text-neutral-400 dark:text-white/40">{t.interval}</div>
        </div>

        <div className="stat relative group overflow-hidden border-b border-black/5 dark:border-white/5 lg:border-b-0 lg:border-r">
          <div className="absolute -right-6 -top-6 text-black/5 transition-transform duration-500 group-hover:scale-110 dark:text-white/5">
            <Users size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400">
              <Users size={20} className="stroke-[2.5]" />
            </div>
            <div className="stat-title font-medium text-neutral-500 dark:text-white/60">{t.users}</div>
          </div>
          <div className="stat-value relative z-10 mt-3 text-4xl font-black text-neutral-900 dark:text-white">4,200</div>
          <div className="stat-desc relative z-10 mt-1 flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">
            <TrendingUp size={14} className="stroke-[3]" />
            400 (22%)
          </div>
        </div>

        <div className="stat relative group overflow-hidden border-black/5 dark:border-white/5">
          <div className="absolute -right-6 -top-6 text-black/5 transition-transform duration-500 group-hover:scale-110 dark:text-white/5">
            <UserPlus size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400">
              <UserPlus size={20} className="stroke-[2.5]" />
            </div>
            <div className="stat-title font-medium text-neutral-500 dark:text-white/60">{t.registers}</div>
          </div>
          <div className="stat-value relative z-10 mt-3 text-4xl font-black text-neutral-900 dark:text-white">1,200</div>
          <div className="stat-desc relative z-10 mt-1 flex items-center gap-1 font-semibold text-red-600 dark:text-red-400">
            <TrendingDown size={14} className="stroke-[3]" />
            90 (14%)
          </div>
        </div>

      </div>
    </section>
  );
}
