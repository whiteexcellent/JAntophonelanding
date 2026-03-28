import ProfileCard from "./ProfileCard";
import { useLanguage } from "../context/LanguageContext";

export function DeveloperSection() {
  const { lang } = useLanguage();
  const t = {
    meet: lang === "tr" ? "Gelistirici ile Tanisin" : "Meet the Developer",
    status: lang === "tr" ? "Gelistiriliyor" : "Developing",
    title: lang === "tr" ? "Full Stack Gelistirici" : "Full Stack Developer",
    contact: lang === "tr" ? "Iletisim" : "Contact",
  };

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center gap-10 bg-transparent px-4 py-20 sm:gap-12 sm:py-24">
      <div className="text-center">
        <h2 className="px-2 text-3xl font-black text-neutral-900 dark:text-white sm:px-6 md:text-5xl">{t.meet}</h2>
      </div>

      <ProfileCard
        name="Ozan Ozkan"
        title={t.title}
        handle="iamoznozkn"
        avatarUrl="/ozan.jpg"
        status={t.status}
        contactText={t.contact}
        onContactClick={() => window.open("https://discord.gg/qW9bGKvQ9j", "_blank")}
        className="w-full max-w-[360px] sm:max-w-[420px]"
      />
    </section>
  );
}
