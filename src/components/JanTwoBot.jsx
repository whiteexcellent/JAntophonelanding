import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

// Karışık mesajlar: ipucu + eğlenceli
const messages = {
  tr: [
    "Merhaba! Ben JanTwo 🤖",
    "16 farklı uygulama keşfet!",
    "Türkçe ve İngilizce dil desteği var!",
    "Telefonla etkileşime geçmeyi dene!",
    "FiveM için en detaylı telefon scripti!",
    "Kod yazıyorum... bip bop!",
    "Apple iOS 26 UI Kit kullanıldı!",
    "Dark mode'u denedin mi?",
    "Garaj, banka, mesajlar... hepsi var!",
    "zzz... Şaka şaka, buradayım!",
    "Bu scripti Ozan geliştirdi!",
    "Haritada konumunu paylaşabilirsin!",
    "VibeShot ile fotoğraf paylaş!",
    "Beep boop... sistem aktif!",
    "WhisApp'ta mesajlaşmayı dene!",
    "Acil servisler hep yanında!",
  ],
  en: [
    "Hello! I'm JanTwo 🤖",
    "Discover 16 different apps!",
    "Turkish and English language support!",
    "Try interacting with the phone!",
    "The most detailed phone script for FiveM!",
    "Writing code... beep boop!",
    "Built with Apple iOS 26 UI Kit!",
    "Have you tried dark mode?",
    "Garage, bank, messages... it's all here!",
    "zzz... Just kidding, I'm here!",
    "This script was built by Ozan!",
    "Share your location on the map!",
    "Share photos with VibeShot!",
    "Beep boop... system active!",
    "Try messaging on WhisApp!",
    "Emergency services always with you!",
  ],
};

const BOT_IMAGE_SRC = encodeURI("/Şirin robot karakteri.png");

// Göz kırpma overlay — resmin üzerine kısa süreli karartma yaparak blink efekti
function BlinkOverlay() {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const blink = () => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    };
    // Rastgele 2.5-5sn aralıklarla göz kırp
    let timer;
    const schedule = () => {
      timer = setTimeout(() => {
        blink();
        schedule();
      }, 2500 + Math.random() * 2500);
    };
    schedule();
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {blinking && (
        <motion.div
          className="absolute z-20 pointer-events-none rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.08 }}
          style={{
            top: "22%",
            left: "52%",
            width: "32%",
            height: "8%",
            background: "rgba(210,185,155,0.85)",
            borderRadius: "50%",
            filter: "blur(2px)",
          }}
        />
      )}
    </AnimatePresence>
  );
}

// Anten ışığı — resmin üstünde parlayan küçük dot
function AntennaGlow({ isDark }) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none rounded-full"
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.3, 0.8],
        boxShadow: [
          `0 0 4px 2px ${isDark ? "rgba(100,200,255,0.3)" : "rgba(59,160,245,0.2)"}`,
          `0 0 12px 6px ${isDark ? "rgba(100,200,255,0.6)" : "rgba(59,160,245,0.5)"}`,
          `0 0 4px 2px ${isDark ? "rgba(100,200,255,0.3)" : "rgba(59,160,245,0.2)"}`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        top: "5%",
        right: "28%",
        width: 8,
        height: 8,
        background: isDark ? "#64d8ff" : "#3ba0f5",
      }}
    />
  );
}

// Parçacık efektleri — bot etrafında uçuşan küçük sparkle'lar
function Sparkles({ active, isDark }) {
  if (!active) return null;
  const particles = [
    { x: -20, y: -30, delay: 0, size: 4 },
    { x: 25, y: -40, delay: 0.3, size: 3 },
    { x: -30, y: -10, delay: 0.15, size: 3.5 },
    { x: 30, y: -20, delay: 0.45, size: 3 },
    { x: 0, y: -45, delay: 0.6, size: 4.5 },
  ];
  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute z-30 pointer-events-none rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: isDark ? "#8bd4ff" : "#5a9fff",
            left: "50%",
            top: "40%",
          }}
          animate={{
            x: [0, p.x, p.x * 1.2],
            y: [0, p.y, p.y * 1.4],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0],
          }}
          transition={{
            duration: 1.2,
            delay: p.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}

export function JanTwoBot() {
  const { lang } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);
  const [currentMsg, setCurrentMsg] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const msgIndex = useRef(0);
  const timerRef = useRef(null);
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  const localMessages = messages[lang] || messages.en;

  const showNextMessage = useCallback(() => {
    const msg = localMessages[msgIndex.current % localMessages.length];
    setCurrentMsg(msg);
    setShowBubble(true);
    setIsTalking(true);

    msgIndex.current += 1;

    // Konuşma animasyonu 1sn sonra dur
    setTimeout(() => setIsTalking(false), 1200);

    // 5 saniye sonra balonu kapat
    setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }, [localMessages]);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showNextMessage();
    }, 3000);

    timerRef.current = setInterval(() => {
      showNextMessage();
    }, 12000 + Math.random() * 8000);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [showNextMessage]);

  const handleClick = () => {
    showNextMessage();
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2 select-none"
      style={{ pointerEvents: "auto" }}
    >
      {/* Mesaj balonu */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative max-w-[220px] rounded-2xl px-4 py-3 text-[13px] leading-[1.5] font-medium shadow-xl"
            style={{
              background: isDark
                ? "rgba(20,30,65,0.94)"
                : "rgba(255,255,255,0.97)",
              color: isDark ? "#c5d4ff" : "#1a2a5a",
              border: isDark
                ? "1px solid rgba(100,140,255,0.25)"
                : "1px solid rgba(59,108,245,0.18)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {currentMsg}
            {/* Bubble tail */}
            <div
              className="absolute -bottom-[6px] right-8"
              style={{
                width: 12,
                height: 12,
                background: isDark ? "rgba(20,30,65,0.94)" : "rgba(255,255,255,0.97)",
                border: isDark
                  ? "1px solid rgba(100,140,255,0.25)"
                  : "1px solid rgba(59,108,245,0.18)",
                borderTop: "none",
                borderLeft: "none",
                transform: "rotate(45deg)",
                marginTop: -6,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bot karakteri */}
      <motion.div
        className="cursor-pointer relative"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.88 }}
        title="JanTwo"
      >
        {/* Zemin glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-2xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.55, 0.3],
            scaleX: [0.9, 1.1, 0.9],
            scaleY: [0.7, 0.9, 0.7],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "80%",
            height: "40%",
            background: isDark
              ? "radial-gradient(ellipse, rgba(80,150,255,0.4) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(59,108,245,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Ana image container */}
        <motion.div
          className="relative"
          animate={{
            y: [0, -6, 0],
            rotate: isHovered ? [0, -2, 2, -1, 0] : [0, 0.4, -0.4, 0],
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: isHovered
              ? { duration: 0.5, ease: "easeInOut" }
              : { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {/* Anten ışığı */}
          <AntennaGlow isDark={isDark} />

          {/* Göz kırpma overlay */}
          <BlinkOverlay />

          {/* Sparkle parçacıklar */}
          <Sparkles active={isTalking || isHovered} isDark={isDark} />

          {/* Bot resmi */}
          <motion.img
            src={BOT_IMAGE_SRC}
            alt="JanTwo bot"
            className="relative z-10 block h-[164px] w-[164px] object-contain sm:h-[180px] sm:w-[180px]"
            draggable="false"
            animate={{
              filter: isHovered
                ? [
                    "drop-shadow(0 0 8px rgba(100,180,255,0.5)) drop-shadow(0 24px 36px rgba(0,0,0,0.28))",
                    "drop-shadow(0 0 16px rgba(100,180,255,0.7)) drop-shadow(0 28px 42px rgba(0,0,0,0.34))",
                    "drop-shadow(0 0 8px rgba(100,180,255,0.5)) drop-shadow(0 24px 36px rgba(0,0,0,0.28))",
                  ]
                : [
                    "drop-shadow(0 24px 36px rgba(0,0,0,0.28))",
                    "drop-shadow(0 28px 42px rgba(0,0,0,0.34))",
                    "drop-shadow(0 24px 36px rgba(0,0,0,0.28))",
                  ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />

          {/* Konuşurken bounce efekti — resmin altında küçük zıplama çizgileri */}
          <AnimatePresence>
            {isTalking && (
              <motion.div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 z-0 flex items-end gap-[3px] pointer-events-none"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 3,
                      background: isDark ? "rgba(120,180,255,0.6)" : "rgba(59,108,245,0.4)",
                    }}
                    animate={{ height: [4, 10, 4] }}
                    transition={{
                      duration: 0.4,
                      repeat: 3,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
