import ProfileCard from "./ProfileCard";
import { useLanguage } from "../context/LanguageContext";

export function DeveloperSection() {
  const { lang } = useLanguage();
  const t = {
    meet: lang === "tr" ? "Geliştirici ile Tanışın" : "Meet the Developer",
    ozanStatus: lang === "tr" ? "Geliştirici" : "Developer",
    ozanTitle: lang === "tr" ? "Full Stack Geliştirici" : "Full Stack Developer",
    bluurStatus: lang === "tr" ? "3D Tasarımcı" : "3D Designer",
    bluurTitle: lang === "tr" ? "3D Model Tasarımcı" : "3D Model Designer",
    contact: lang === "tr" ? "İletişim" : "Contact",
  };

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center gap-10 bg-transparent px-4 py-20 sm:gap-12 sm:py-24">
      <div className="text-center">
        <h2 className="px-2 text-3xl font-black text-neutral-900 dark:text-white sm:px-6 md:text-5xl">{t.meet}</h2>
      </div>

      <div className="flex items-center justify-center gap-6 w-full max-w-[900px]">
        {/* Ana kart - Ozan Ozkan (ortada, büyük) */}
        <ProfileCard
          name={lang === "tr" ? "Ozan Özkan" : "Ozan Ozkan"}
          title={t.ozanTitle}
          handle="iamoznozkn"
          avatarUrl="/ozan.jpg"
          status={t.ozanStatus}
          contactText={t.contact}
          onContactClick={() => window.open("https://discord.gg/qW9bGKvQ9j", "_blank")}
          className="w-full max-w-[360px] sm:max-w-[420px] flex-shrink-0"
        />

        {/* Sağ kart - Bluur (daha küçük) */}
        <div className="hidden sm:block flex-shrink-0 w-[260px] md:w-[300px]">
          <ProfileCard
            name="Bluur"
            title={t.bluurTitle}
            handle="bluur"
            avatarUrl="/bluur.webp"
            status={t.bluurStatus}
            contactText={t.contact}
            onContactClick={() => window.open("https://discord.com/invite/bluur", "_blank")}
            className="w-full"
            behindGlowColor="rgba(0,200,200,0.5)"
          />
        </div>
      </div>
    </section>
  );
}
