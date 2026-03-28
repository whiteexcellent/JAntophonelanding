import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Code2, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { Iphone16Pro } from "@/components/ui/iphone-16-pro";

const wallpapers = [
  {
    id: "aurora",
    label: "Aurora",
    glow: "from-cyan-400/28 via-sky-500/16 to-violet-500/18",
    screen:
      "radial-gradient(circle at 22% 12%, rgba(255,255,255,0.28), transparent 18%), radial-gradient(circle at 84% 20%, rgba(118,92,255,0.24), transparent 26%), linear-gradient(145deg, rgba(18,50,79,0.95) 0%, rgba(8,16,29,0.94) 54%, rgba(18,14,43,0.96) 100%)",
  },
  {
    id: "ember",
    label: "Ember",
    glow: "from-orange-400/28 via-amber-500/18 to-rose-500/18",
    screen:
      "radial-gradient(circle at 22% 12%, rgba(255,248,220,0.18), transparent 16%), radial-gradient(circle at 72% 24%, rgba(255,116,55,0.22), transparent 28%), linear-gradient(145deg, rgba(63,24,12,0.95) 0%, rgba(17,10,18,0.94) 54%, rgba(8,9,18,0.96) 100%)",
  },
  {
    id: "ice",
    label: "Ice",
    glow: "from-cyan-200/24 via-slate-200/16 to-blue-400/14",
    screen:
      "radial-gradient(circle at 26% 14%, rgba(255,255,255,0.28), transparent 18%), radial-gradient(circle at 78% 16%, rgba(108,184,255,0.18), transparent 22%), linear-gradient(145deg, rgba(15,34,48,0.94) 0%, rgba(8,14,26,0.94) 58%, rgba(4,11,18,0.96) 100%)",
  },
];

const homeApps = [
  { id: "messages", name: "Messages", icon: "/ekosistem/messages.png", description: "Quick replies, location pins" },
  { id: "whisapp", name: "WhisApp", icon: "/ekosistem/whisapp.svg", description: "Live location, media share" },
  { id: "vibeshot", name: "Vibeshot", icon: "/ekosistem/vibeshot.svg", description: "Social identity" },
  { id: "bank", name: "Bank", icon: "/ekosistem/bank.svg", description: "Fast account access" },
  { id: "garage", name: "Garage", icon: "/ekosistem/garage.svg", description: "Owned vehicle state" },
  { id: "maps", name: "Maps", icon: "/ekosistem/maps.png", description: "Pins, routes" },
  { id: "camera", name: "Camera", icon: "/ekosistem/camera.png", description: "Capture-first phone workflow" },
  { id: "ads", name: "Ads", icon: "/ekosistem/ads.png", description: "Yellow pages and ads" },
  { id: "vstore", name: "V Store", icon: "/ekosistem/app-store.png", description: "App repository" },
  { id: "calendar", name: "Calendar", icon: "/ekosistem/calendar.svg", description: "Time management" },
  { id: "darkchat", name: "Darkchat", icon: "/ekosistem/darkchat.svg", description: "Anonymous network" },
  { id: "gallery", name: "Gallery", icon: "/ekosistem/gallery.png", description: "Media storage" },
  { id: "notes", name: "Notes", icon: "/ekosistem/notes.png", description: "Quick thoughts" },
  { id: "rythm", name: "Rythm", icon: "/ekosistem/rythm-sync.png", description: "Music syncing" },
  { id: "vault", name: "Vault", icon: "/ekosistem/vault.svg", description: "Encrypted storage" },
  { id: "settings", name: "Settings", icon: "/ekosistem/settings.png", description: "Theme and system control" },
];

const dockApps = ["messages", "camera", "maps", "settings"];

function formatTime() {
  return new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

const appDetailedDocs = {
  messages: [
    { tone: "text-cyan-400 font-bold tracking-wide", text: "> [MESSAGES] CORE INITIALIZED" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Seamless SMS & Media Sharing" },
    { tone: "text-white/90 font-medium", text: "  |- Audio Waveform Integration" },
    { tone: "text-white/90 font-medium", text: "  |- Fast Voice/Video Transitions" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Verified Ready." },
  ],
  whisapp: [
    { tone: "text-green-400 font-bold tracking-wide", text: "> [WHISAPP] SYNCING SERVERS" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Live Location (1h/8h intervals)" },
    { tone: "text-white/90 font-medium", text: "  |- Rich Text & Link Previews" },
    { tone: "text-white/90 font-medium", text: "  |- Group Roles & Community Management" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Fully Encrypted." },
  ],
  vibeshot: [
    { tone: "text-fuchsia-400 font-bold tracking-wide", text: "> [VIBESHOT] SOCIAL GRID CONNECTED" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- 10-Item Carousels & Reels" },
    { tone: "text-white/90 font-medium", text: "  |- Music & Geo-Stickers" },
    { tone: "text-white/90 font-medium", text: "  |- Live Broadcasting Tracking" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Feed Active." },
  ],
  bank: [
    { tone: "text-emerald-400 font-bold tracking-wide", text: "> [BANK] SECURE FINANCIAL NET" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Multi-Account (Personal, Gang, Job)" },
    { tone: "text-white/90 font-medium", text: "  |- Instant Swipes & Transfers" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Blockchain Secured." },
  ],
  garage: [
    { tone: "text-orange-400 font-bold tracking-wide", text: "> [GARAGE] VEHICLE DATABASE" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Global Valuation & Impound states" },
    { tone: "text-white/90 font-medium", text: "  |- Diagnostics (Fuel, Engine, Body)" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Valet Available." },
  ],
  maps: [
    { tone: "text-blue-400 font-bold tracking-wide", text: "> [MAPS] SATELLITE UPLINK" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Live Nav Trajectories" },
    { tone: "text-white/90 font-medium", text: "  |- Multi-Level Topology Views" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: GPS Locked." },
  ],
  camera: [
    { tone: "text-yellow-400 font-bold tracking-wide", text: "> [CAMERA] LENS CALIBRATION" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Cinematic & 360 Pan Modes" },
    { tone: "text-white/90 font-medium", text: "  |- In-Vehicle Action Camera" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Ready to Shoot." },
  ],
  ads: [
    { tone: "text-yellow-500 font-bold tracking-wide", text: "> [ADS] MARKET NETWORK" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Global Listings & Search" },
    { tone: "text-white/90 font-medium", text: "  |- Image Submissions & Verified Sellers" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Economy Connected." },
  ],
  vstore: [
    { tone: "text-indigo-400 font-bold tracking-wide", text: "> [V STORE] APP REPOSITORY" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Centralised Package Updating" },
    { tone: "text-white/90 font-medium", text: "  |- One-Tap Configurations" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Mirror Synced." },
  ],
  calendar: [
    { tone: "text-rose-400 font-bold tracking-wide", text: "> [CALENDAR] TIME ENGINE" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Event Scheduling & Pings" },
    { tone: "text-white/90 font-medium", text: "  |- Job-Based Shared Calendars" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Clock Operational." },
  ],
  darkchat: [
    { tone: "text-gray-400 font-bold tracking-wide", text: "> [DARKCHAT] ONION ROUTER" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Untraceable P2P Nodes" },
    { tone: "text-white/90 font-medium", text: "  |- Auto-Wiping Burner Messages" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Invisible." },
  ],
  gallery: [
    { tone: "text-pink-400 font-bold tracking-wide", text: "> [GALLERY] MEDIA VAULT" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- High-Res Album Sorting" },
    { tone: "text-white/90 font-medium", text: "  |- Cloud Retention Protocol" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Storage Optimal." },
  ],
  notes: [
    { tone: "text-amber-400 font-bold tracking-wide", text: "> [NOTES] DATA PAD" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Rich Formatting Text Pad" },
    { tone: "text-white/90 font-medium", text: "  |- Secret Key Protection" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Saved." },
  ],
  rythm: [
    { tone: "text-purple-400 font-bold tracking-wide", text: "> [RYTHM] AUDIO ENGINE" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- 3D Audio Positional Emitters" },
    { tone: "text-white/90 font-medium", text: "  |- Shared Network Playlists" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Sound System Live." },
  ],
  vault: [
    { tone: "text-neutral-300 font-bold tracking-wide", text: "> [VAULT] BIOMETRIC LOCK" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Pin/Face-ID Integration" },
    { tone: "text-white/90 font-medium", text: "  |- Hidden Data Partitions" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: Lockdown Active." },
  ],
  settings: [
    { tone: "text-slate-300 font-bold tracking-wide", text: "> [SETTINGS] SYSTEM KERNEL" },
    { tone: "text-white/90 font-medium mt-1", text: "  |- Central Control Hub" },
    { tone: "text-white/90 font-medium", text: "  |- Wallpaper & Theme Overrides" },
    { tone: "text-white/90 font-medium", text: "  |- Notification Sound Profiles" },
    { tone: "text-emerald-400 font-semibold mt-1", text: "  `- Status: UID Registered." },
  ],
};

function buildTerminalLines(app) {
  const defaultHeader = [
    { tone: "text-white/50 font-medium text-[12px] mb-1", text: `Process ID: ${Math.floor(Math.random() * 9000 + 1000)}` },
    { tone: "text-white font-bold text-[14px]", text: `~ $ janto run ${app.id}.app` },
    { tone: "text-emerald-400/80 mb-2 mt-1", text: "Loading dependencies... OK." },
  ];
  const appLines = appDetailedDocs[app.id] || [{ tone: "text-white/50", text: "> Component offline." }];
  return [...defaultHeader, ...appLines];
}

function PhoneIcon({ app, active, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(app.id)}
      className={`group flex flex-col items-center gap-1.5 rounded-[18px] p-1.5 transition duration-300 ${
        active ? "bg-white/10 shadow-[0_16px_30px_rgba(0,0,0,0.18)]" : "bg-transparent hover:bg-white/7"
      }`}
    >
      <div className="relative overflow-hidden rounded-[16px] bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
        <img src={app.icon} alt={app.name} className="h-[48px] w-[48px] rounded-[16px] object-cover" />
      </div>
      <span className="text-[10px] font-medium leading-none -tracking-[0.01em] text-white/88">{app.name}</span>
    </button>
  );
}

function LivePhonePreview({ wallpaper, dockItems, selectedAppId, setSelectedAppId, time }) {
  return (
    <div className="relative flex justify-center">
      <Iphone16Pro className="h-auto w-full max-w-[300px] drop-shadow-[0_50px_120px_rgba(0,0,0,0.52)] sm:max-w-[340px]">
        <div className="relative h-full w-full overflow-hidden" style={{ background: wallpaper.screen }}>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/8 to-transparent" />

          <div className="relative flex h-full flex-col px-4 pb-4 pt-10">
            <div className="absolute left-1/2 top-2 z-50 flex h-[30px] w-[100px] -translate-x-1/2 items-center justify-end rounded-[20px] bg-black px-3">
              <div className="relative flex h-[12px] w-[12px] items-center justify-center rounded-full border border-white/5 bg-[#111]">
                <div className="h-[6px] w-[6px] rounded-full bg-[#080812] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
              </div>
            </div>

            <div className="-mt-4 mb-2 flex items-center justify-between px-2 text-[14px] font-semibold tracking-tight text-white">
              <span>{time}</span>
              <div className="flex items-center gap-1.5 text-white/90">
                <div className="mr-1 flex h-[11px] items-end gap-[1.5px]">
                  <div className="h-[5px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[7px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[9px] w-[3px] rounded-sm bg-white" />
                  <div className="h-[11px] w-[3px] rounded-sm bg-white" />
                </div>
                <div className="flex h-[12px] items-center justify-center rounded-[4px] border border-white/40 bg-white px-1.5 py-0.5 text-[10px] font-bold leading-none text-black">
                  100
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-3">
              {homeApps.map((app) => (
                <PhoneIcon key={app.id} app={app} active={app.id === selectedAppId} onSelect={setSelectedAppId} />
              ))}
            </div>

            <div className="mt-auto pt-4">
              <div className="rounded-[30px] border border-white/14 bg-white/[0.08] p-2 backdrop-blur-2xl">
                <div className="grid grid-cols-4 gap-2">
                  {dockItems.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setSelectedAppId(app.id)}
                      className="rounded-[18px] p-1.5 transition hover:bg-white/8"
                    >
                      <img src={app.icon} alt={app.name} className="h-[56px] w-[56px] rounded-[16px] object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Iphone16Pro>
    </div>
  );
}

function DemoTerminalPanel({ terminalLines, selectedAppId }) {
  return (
    <div className="flex h-full flex-col bg-[#0a0c10]">
      <div className="flex items-center gap-2 border-b border-white/6 bg-black/30 px-4 py-2 text-sm text-white/52">
        <Terminal className="h-4 w-4" />
        Live surface controls
      </div>

      <div className="flex-1 overflow-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed shadow-[inset-0_20px_20px_-20px_rgba(0,0,0,0.5)] sm:px-5 sm:py-5 sm:text-[13.5px]">
        <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-2 text-[11px] uppercase tracking-widest text-white/30">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          Terminal Runtime Active
        </div>
        {terminalLines.map((line, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.2 }}
            key={line.text + selectedAppId}
            className={`mt-1.5 first:mt-0 -mx-2 flex items-start gap-3 rounded px-2 py-0.5 transition-colors hover:bg-white/[0.02] ${line.tone}`}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
          className="mt-2 h-4 w-2 bg-white/60"
        />
      </div>
    </div>
  );
}

function DemoPhonePanel({ wallpaper, dockItems, selectedAppId, setSelectedAppId, time, compact }) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#08101c_0%,#040812_100%)] ${compact ? "px-4 py-6 sm:px-6 sm:py-8" : "px-6 py-8"}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${wallpaper.glow} opacity-90 blur-3xl`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />

      <div className="relative z-10 flex flex-1 items-center justify-center py-3">
        <LivePhonePreview
          wallpaper={wallpaper}
          dockItems={dockItems}
          selectedAppId={selectedAppId}
          setSelectedAppId={setSelectedAppId}
          time={time}
        />
      </div>
    </div>
  );
}

export function PlaygroundSection({ section }) {
  const [activeWallpaper] = useState(wallpapers[0].id);
  const [selectedAppId, setSelectedAppId] = useState("whisapp");
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const intervalId = window.setInterval(() => setTime(formatTime()), 30000);
    return () => window.clearInterval(intervalId);
  }, []);

  const wallpaper = useMemo(
    () => wallpapers.find((entry) => entry.id === activeWallpaper) ?? wallpapers[0],
    [activeWallpaper]
  );
  const selectedApp = useMemo(
    () => homeApps.find((app) => app.id === selectedAppId) ?? homeApps[0],
    [selectedAppId]
  );
  const dockItems = useMemo(
    () => dockApps.map((id) => homeApps.find((app) => app.id === id)).filter(Boolean),
    []
  );
  const terminalLines = useMemo(() => buildTerminalLines(selectedApp), [selectedApp]);

  return (
    <section className="relative z-10 w-full py-20 sm:py-24 lg:py-28" id={section.id}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title || "Try a living home screen instead."}
          body={section.body}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,31,0.98),rgba(5,9,18,0.98))] shadow-[0_35px_120px_rgba(0,0,0,0.36)] sm:mt-12 sm:rounded-[30px]"
        >
          <div className="flex items-center border-b border-white/8 bg-white/[0.03] px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-xs font-mono text-white/38">
              <Code2 className="h-3 w-3" />
              workspace / live-demo.tsx
            </div>
          </div>

          <div className="hidden h-[760px] overflow-hidden lg:block">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={38} minSize={26}>
                <DemoTerminalPanel terminalLines={terminalLines} selectedAppId={selectedAppId} />
              </ResizablePanel>

              <ResizableHandle withHandle className="bg-black/10 dark:bg-white/10" />

              <ResizablePanel defaultSize={62} minSize={36}>
                <DemoPhonePanel
                  wallpaper={wallpaper}
                  dockItems={dockItems}
                  selectedAppId={selectedAppId}
                  setSelectedAppId={setSelectedAppId}
                  time={time}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          <div className="h-[980px] overflow-hidden lg:hidden sm:h-[1040px]">
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={38} minSize={22}>
                <DemoTerminalPanel terminalLines={terminalLines} selectedAppId={selectedAppId} />
              </ResizablePanel>

              <ResizableHandle withHandle className="bg-black/10 dark:bg-white/10" />

              <ResizablePanel defaultSize={62} minSize={40}>
                <DemoPhonePanel
                  wallpaper={wallpaper}
                  dockItems={dockItems}
                  selectedAppId={selectedAppId}
                  setSelectedAppId={setSelectedAppId}
                  time={time}
                  compact
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
