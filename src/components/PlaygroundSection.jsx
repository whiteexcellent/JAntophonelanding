import { motion } from "motion/react";
import { Code2, ScanSearch, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import PhoneRuntime from "../phone/core/PhoneRuntime";
import PhoneInspectorPanel from "../phone/core/PhoneInspectorPanel";
import { useLanguage } from "../context/LanguageContext";
import { useViewport } from "../hooks/useViewport";

function DemoRuntimePanel({ language, compact = false }) {
  return (
    <div
      className={`relative flex h-full min-h-0 flex-col overflow-auto bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_24%),linear-gradient(180deg,#09111e_0%,#040814_100%)] ${
        compact ? "px-4 py-5 sm:px-6 sm:py-6" : "px-6 py-6"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,184,255,0.24),transparent_22%),radial-gradient(circle_at_bottom,rgba(35,86,180,0.18),transparent_28%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 top-8 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-white/36">
        <span>Apple kit metrics</span>
        <span>Interactive runtime</span>
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 items-start justify-center py-8 sm:py-10">
        <div className="flex h-full w-full items-start justify-center overflow-visible">
          <div
            className="relative max-w-full shrink-0"
            style={{
              aspectRatio: "433 / 882",
              width: "min(100%, 390px)",
              maxWidth: "390px",
              minHeight: compact ? "720px" : "794px",
            }}
          >
            <div className="absolute inset-x-[12%] -bottom-8 h-16 rounded-full bg-[radial-gradient(circle,rgba(117,171,255,0.45),rgba(24,36,74,0))] blur-2xl" />
            <div className="absolute inset-x-8 top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(255,255,255,0))] blur-2xl" />
            <PhoneRuntime mode="interactive" initialLanguage={language} initialTheme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundSection({ section }) {
  const { lang } = useLanguage();
  const { isMobile, isTablet } = useViewport();
  const runtimeLanguage = lang === "tr" ? "tr" : "en";
  const compact = isMobile || isTablet;

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
          className="relative mt-10 overflow-hidden rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(17,26,43,0.98),rgba(7,11,20,0.98))] shadow-[0_35px_120px_rgba(0,0,0,0.36)] sm:mt-12 sm:rounded-[34px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(122,184,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.1),transparent_24%)]" />
          <div className="relative flex flex-wrap items-center gap-3 border-b border-white/8 bg-white/[0.03] px-4 py-4 sm:px-6">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
              <Sparkles className="h-3.5 w-3.5" />
              iOS 26 reconstruction
            </div>
            <div className="mx-auto flex items-center gap-2 text-xs font-mono text-white/38">
              <Code2 className="h-3 w-3" />
              workspace / apple-ios-kit-demo
            </div>
            <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium text-cyan-100/80">
              <ScanSearch className="h-3.5 w-3.5" />
              live inspector
            </div>
          </div>

          <div className="hidden h-[980px] overflow-hidden lg:block xl:h-[1020px]">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={38} minSize={26}>
                <PhoneInspectorPanel />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={62} minSize={42}>
                <DemoRuntimePanel language={runtimeLanguage} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          <div className="lg:hidden">
            <ResizablePanelGroup direction="vertical" className="min-h-[1220px] sm:min-h-[1280px]">
              <ResizablePanel defaultSize={38} minSize={22}>
                <PhoneInspectorPanel />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={62} minSize={46}>
                <DemoRuntimePanel language={runtimeLanguage} compact={compact} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
