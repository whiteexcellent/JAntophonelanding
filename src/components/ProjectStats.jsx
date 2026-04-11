import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Bell, Zap, Loader2, AlertCircle, CheckCircle2, X } from "lucide-react";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";
import { motion, AnimatePresence } from "motion/react";

// Discord'un standart kodunu parse etmek
const renderDiscordContent = (content) => {
  if (!content) return null;
  const parts = content.split(/(```[\s\S]*?```|`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      const match = part.match(/```(\w+)?\n([\s\S]*?)```/);
      const codeText = match ? match[2] : part.slice(3, -3);
      return (
        <div key={index} className="my-2 max-w-full overflow-hidden rounded-xl border border-black/10 bg-[#282a36] shadow-sm dark:border-white/10">
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-3 py-1.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]"></div>
            </div>
            {match && match[1] && <span className="ml-2 text-[10px] font-bold uppercase text-white/50">{match[1]}</span>}
          </div>
          <div className="custom-scrollbar overflow-x-auto p-3">
            <code className="block whitespace-pre font-mono text-[13px] leading-relaxed text-[#f8f8f2]">
              {codeText}
            </code>
          </div>
        </div>
      );
    } else if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="mx-0.5 rounded-md bg-black/5 px-1.5 py-0.5 font-mono text-[13px] font-bold text-[#E83E8C] dark:bg-white/10 dark:text-[#FF79C6]">
          {part.slice(1, -1)}
        </code>
      );
    }
    // Metin içi linkleri veya boşlukları düzgün renderla
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textParts = part.split(urlRegex);
    
    return (
      <span key={index}>
        {textParts.map((textPart, i) => {
          if (textPart.match(urlRegex)) {
            return (
              <a 
                key={i} 
                href={textPart} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 transition-colors hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                onClick={(e) => e.stopPropagation()}
              >
                {textPart}
              </a>
            );
          }
          return textPart;
        })}
      </span>
    );
  });
};

export function ProjectStats() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("changelog");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pop-up Lightbox state'i
  const [selectedImage, setSelectedImage] = useState(null);

  const t = {
    title: lang === "tr" ? "Son Gelişmeler" : "Latest Updates",
    subtitle: lang === "tr" ? "Tüm güncellemeler doğrudan Discord sunucumuzdan." : "All updates are delivered directly from our Discord.",
    changelog: lang === "tr" ? "Yama Notları" : "Changelogs",
    general: lang === "tr" ? "Update İmages" : "Update Images",
    loading: lang === "tr" ? "Yükleniyor..." : "Loading...",
    error: lang === "tr" ? "Sunucuya bağlanılamadı." : "Connection failed.",
    empty: lang === "tr" ? "Henüz mesaj yok." : "No messages yet.",
    botTag: lang === "tr" ? "BOT" : "BOT"
  };

  const fetchMessages = async (isBackground = false) => {
    if (!isBackground) setLoading(true);
    setError(null);
    try {
      const apiUrl = process.env.NODE_ENV === "development" 
        ? `http://localhost:3001/api/discord-messages?type=${activeTab}`
        : `/api/discord-messages?type=${activeTab}`;
        
      const res = await fetch(apiUrl);
      const contentType = res.headers.get("content-type") || "";
      if (!res.ok || !contentType.includes("application/json")) {
        setMessages([]);
        return;
      }
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);
      if (Array.isArray(data)) setMessages(data);
    } catch (err) {
      setMessages([]);
      if (!isBackground) setError(null);
    } finally {
      if (!isBackground) setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(() => fetchMessages(true), 15000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const getAvatar = (author) => {
    if (author.avatar) return `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=128`;
    return `https://cdn.discordapp.com/embed/avatars/${parseInt(author.discriminator || author.id) % 5}.png`;
  };

  // Esc tuşu ile popup kapatma
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Özel CSS (Scrollbar gizleme/düzenleme için) */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(150, 150, 150, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(150, 150, 150, 0.5); }
      `}} />

      {/* Resim Büyütme (Pop-up Lightbox) Modal'ı */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute right-6 top-6 z-[10000] rounded-full bg-white/20 p-2 text-white shadow-xl backdrop-blur-md transition hover:bg-white/40 hover:scale-110 sm:right-10 sm:top-10">
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              src={selectedImage}
              alt="Enlarged"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
              onClick={(e) => e.stopPropagation()} // Resme tıklanırsa kapanmasın
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative z-10 flex w-full flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
        
        {/* Title Area */}
        <div className="mb-8 w-full max-w-4xl text-center">
          <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            {t.title}
          </h2>
          <p className="mx-auto max-w-xl font-medium text-neutral-500 sm:text-lg dark:text-neutral-400">
            {t.subtitle}
          </p>
        </div>

        {/* Ana Dış Kutu (Apple Glassmorphism) */}
        <div className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-black/5 bg-white/60 p-4 shadow-2xl shadow-black/5 backdrop-blur-3xl sm:p-8 dark:border-white/10 dark:bg-[#111116]/80 dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          
          {/* iOS Segmented Control */}
          <div className="relative mx-auto mb-8 flex w-full max-w-[340px] items-center gap-1 rounded-full bg-neutral-200/50 p-1.5 shadow-inner dark:bg-white/5">
            <button onClick={() => setActiveTab("changelog")} className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${activeTab === "changelog" ? "text-slate-900 shadow-sm dark:text-neutral-900" : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"}`}>
              {activeTab === "changelog" && <motion.div layoutId="tabMarker" className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:bg-white" transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />}
              <Zap size={16} className={activeTab === "changelog" ? "text-blue-500" : ""} /> {t.changelog}
            </button>
            <button onClick={() => setActiveTab("update")} className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-colors ${activeTab === "update" ? "text-slate-900 shadow-sm dark:text-neutral-900" : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"}`}>
              {activeTab === "update" && <motion.div layoutId="tabMarker" className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:bg-white" transition={{ type: "spring", bounce: 0.25, duration: 0.5 }} />}
              <Bell size={16} className={activeTab === "update" ? "text-emerald-500" : ""} /> {t.general}
            </button>
          </div>

          {/* Chat Kapsayıcısı - Yüksekliği Sabit (Scrollable) */}
          <div className="custom-scrollbar relative max-h-[500px] min-h-[300px] w-full overflow-y-auto overflow-x-hidden pr-2 sm:max-h-[600px] sm:pr-4">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-[300px] flex-col items-center justify-center gap-5 text-neutral-500">
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }} className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 }} className="h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.4 }} className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  </div>
                  <p className="text-sm font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">{t.loading}</p>
                </motion.div>
              ) : error ? (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-[300px] flex-col items-center justify-center gap-2 text-red-500/80">
                  <AlertCircle size={36} />
                  <p className="font-semibold">{error}</p>
                </motion.div>
              ) : messages.length === 0 ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-[300px] flex-col items-center justify-center gap-2 text-neutral-400">
                  <p className="font-medium">{t.empty}</p>
                </motion.div>
              ) : (
                <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1 pb-4">
                  {messages.map((msg, idx) => {
                    const isSameAuthor = idx > 0 && messages[idx - 1].author.id === msg.author.id;
                    const dateObj = new Date(msg.timestamp);

                    return (
                      <div 
                        key={msg.id} 
                        className={`group flex items-start gap-4 rounded-xl px-2 py-2 transition-colors hover:bg-black/5 sm:px-4 sm:py-3 dark:hover:bg-white/5 ${
                          !isSameAuthor ? 'mt-4' : 'mt-0.5'
                        }`}
                      >
                        {/* Sol Taraf: Avatar (Discord stili - sadece ilk mesajda gösterilir) */}
                        <div className="flex w-10 shrink-0 justify-center">
                          {!isSameAuthor ? (
                            <img 
                              src={getAvatar(msg.author)} 
                              alt="Avatar" 
                              className="h-10 w-10 cursor-pointer rounded-full object-cover shadow-sm ring-1 ring-black/10 dark:ring-white/10"
                            />
                          ) : (
                            <span className="hidden mt-1 text-[10px] font-bold text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                              {format(dateObj, "HH:mm")}
                            </span>
                          )}
                        </div>

                        {/* Sağ Taraf: Mesaj Gövdesi */}
                        <div className="flex min-w-0 flex-1 flex-col">
                          
                          {/* İsim ve Tarih (Sadece ilk mesajda) */}
                          {!isSameAuthor && (
                            <div className="mb-0.5 flex flex-wrap items-baseline gap-x-2">
                              <span className="cursor-pointer text-[15px] font-bold tracking-tight text-[#111214] hover:underline dark:text-[#F2F3F5]">
                                {msg.author?.global_name || msg.author?.username}
                              </span>
                              
                              {msg.author.bot && (
                                <span className="flex items-center gap-[2px] rounded bg-[#5865F2] px-[4px] py-[1px] text-[9px] font-bold tracking-wide text-white">
                                  <CheckCircle2 size={10} strokeWidth={3} />
                                  {t.botTag}
                                </span>
                              )}

                              <span className="text-[12px] font-medium text-[#5C5E66] dark:text-[#949BA4]">
                                {format(dateObj, "dd.MM.yyyy HH:mm", { locale: lang === "tr" ? tr : enUS })}
                              </span>
                            </div>
                          )}

                          {/* Mesaj İçeriği */}
                          {msg.content && (
                            <div className="break-words whitespace-pre-wrap text-[15px] leading-[1.45] text-[#313338] dark:text-[#DBDEE1]">
                              {renderDiscordContent(msg.content)}
                            </div>
                          )}

                          {/* Resimler (Eğer varsa) */}
                          {msg.attachments && msg.attachments.length > 0 && (
                             <div className={`mt-2 grid gap-1.5 ${
                                msg.attachments.length === 1 ? 'grid-cols-1 max-w-[350px]' : 
                                msg.attachments.length === 2 ? 'grid-cols-2 max-w-[450px]' : 
                                'grid-cols-2 sm:grid-cols-3 max-w-[500px]'
                              }`}>
                                {msg.attachments.map((att) => (
                                  <div 
                                    key={att.id} 
                                    onClick={() => setSelectedImage(att.url)}
                                    className="group/img relative cursor-zoom-in overflow-hidden rounded-xl bg-black/5 dark:bg-white/5 outline outline-1 outline-black/5 dark:outline-white/10"
                                  >
                                   <div className="absolute inset-0 z-10 bg-black/0 transition-colors group-hover/img:bg-black/10"></div>
                                   <img 
                                    src={att.url} 
                                    alt="Attachment" 
                                    loading="lazy"
                                    className={`w-full object-cover transition-transform duration-500 group-hover/img:scale-105 ${
                                      msg.attachments.length === 1 ? 'max-h-[300px]' : 'aspect-square max-h-[150px]'
                                    }`}
                                   />
                                  </div>
                                ))}
                             </div>
                          )}

                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </>
  );
}
