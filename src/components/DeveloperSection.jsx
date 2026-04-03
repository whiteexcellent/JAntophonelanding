import ProfileCard from "./ProfileCard";
import { useLanguage } from "../context/LanguageContext";

export function DeveloperSection() {
  const { lang } = useLanguage();
  const t = {
    meet: lang === "tr" ? "Geliştirici ile Tanışın" : "Meet the Developer",
    status: lang === "tr" ? "Geliştirici" : "Developer",
    title: lang === "tr" ? "Full Stack Geliştirici" : "Full Stack Developer",
    designerStatus: lang === "tr" ? "3D Tasarımcı" : "3D Designer",
    designerTitle: lang === "tr" ? "3D Model Tasarımcısı" : "3D Model Designer",
    contact: lang === "tr" ? "İletişim" : "Contact",
  };

  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center gap-10 bg-transparent px-4 py-20 sm:gap-12 sm:py-24">
      <div className="text-center">
        <h2 className="px-2 text-3xl font-black text-neutral-900 dark:text-white sm:px-6 md:text-5xl">{t.meet}</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:flex-wrap sm:gap-10">
        <ProfileCard
          name={lang === "tr" ? "Ozan Özkan" : "Ozan Ozkan"}
          title={t.title}
          handle="iamoznozkn"
          avatarUrl="/ozan.jpg"
          status={t.status}
          contactText={t.contact}
          onContactClick={() => window.open("https://discord.gg/qW9bGKvQ9j", "_blank")}
          className="w-full max-w-[360px] sm:max-w-[420px]"
        />

        <ProfileCard
          name="Bluur Design"
          title={t.designerTitle}
          handle="bluur"
          avatarUrl="https://github.com/user-attachments/assets/9b1bb738-5444-4723-a490-73edd0b4fe35"
          status={t.designerStatus}
          contactText={t.contact}
          onContactClick={() => window.open("https://discord.gg/bluur", "_blank")}
          className="w-full max-w-[360px] sm:max-w-[420px]"
        />
      </div>
    </section>
  );
}
