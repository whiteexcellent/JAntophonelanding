import { useEffect, useMemo, useState } from "react"
import { FileText, FolderOpen, Layers3, Search, Type, X } from "lucide-react"
import { useSystemStore } from "../../stores/systemStore"
import { useNavigationStore } from "../../stores/navigationStore"
import { t } from "../../core/localization"

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]

function getGroupName(asset) {
  return asset.path?.split("/")[0] || "Other"
}

function getAssetTitle(asset) {
  const parts = asset.path?.split("/") || []
  return parts[parts.length - 1] || asset.fileName || asset.name || "Asset"
}

function Segment({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        borderRadius: 999,
        padding: "8px 12px",
        background: active ? "#0a84ff" : "transparent",
        color: active ? "#fff" : "inherit",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  )
}

function AssetCard({ title, subtitle, previewUrl, extension, isDark, onOpen }) {
  const isImage = previewUrl && IMAGE_EXTENSIONS.includes(extension)

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{
        border: "none",
        borderRadius: 18,
        overflow: "hidden",
        background: isDark ? "rgba(28,28,30,0.94)" : "#fff",
        color: isDark ? "#fff" : "#000",
        textAlign: "left",
        padding: 0,
        cursor: "pointer",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          height: 120,
          background: isDark ? "linear-gradient(180deg, #121726, #0b1018)" : "linear-gradient(180deg, #edf4ff, #dbe8ff)",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {isImage ? (
          <img src={previewUrl} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
              display: "grid",
              placeItems: "center",
            }}
          >
            {extension === ".pdf" ? <FileText size={28} /> : <FolderOpen size={28} />}
          </div>
        )}
      </div>

      <div style={{ padding: "12px 12px 14px" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 6,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 11, opacity: 0.58, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {subtitle}
        </div>
      </div>
    </button>
  )
}

function AssetPreview({ item, isDark, onClose }) {
  if (!item) return null

  const isImage = item.url && IMAGE_EXTENSIONS.includes(item.extension)
  const isPdf = item.extension === ".pdf"

  return (
    <div
      onClick={onClose}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 80,
        background: "rgba(0,0,0,0.42)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 14,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 26,
          background: isDark ? "#0b0c10" : "#fff",
          color: isDark ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {item.title}
            </div>
            <div style={{ marginTop: 2, fontSize: 12, opacity: 0.55, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {item.subtitle}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              border: "none",
              background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
              color: "inherit",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ flex: 1, minHeight: 0, background: isDark ? "#000" : "#f5f5f7" }}>
          {isImage ? (
            <img src={item.url} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : isPdf ? (
            <iframe title={item.title} src={item.url} style={{ width: "100%", height: "100%", border: "none" }} />
          ) : item.url ? (
            <iframe title={item.title} src={item.url} style={{ width: "100%", height: "100%", border: "none" }} />
          ) : (
            <div style={{ height: "100%", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
              <div>
                <FileText size={32} style={{ margin: "0 auto 12px" }} />
                <div style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function VStoreMain() {
  const language = useSystemStore((s) => s.language)
  const themeMode = useSystemStore((s) => s.themeMode)
  const goBack = useNavigationStore((s) => s.goBack)
  const isDark = themeMode === "dark"

  const [view, setView] = useState("named")
  const [namedAssets, setNamedAssets] = useState([])
  const [archiveAssets, setArchiveAssets] = useState([])
  const [fonts, setFonts] = useState([])
  const [pages, setPages] = useState([])
  const [summary, setSummary] = useState(null)
  const [query, setQuery] = useState("")
  const [selectedGroup, setSelectedGroup] = useState("All")
  const [selectedItem, setSelectedItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true

    Promise.all([
      fetch("/apple-kit/sketch/named_assets.web.json").then((response) => response.ok ? response.json() : []),
      fetch("/apple-kit/sketch/asset_manifest.web.json").then((response) => response.ok ? response.json() : []),
      fetch("/apple-kit/sketch/fonts.web.json").then((response) => response.ok ? response.json() : []),
      fetch("/apple-kit/sketch/pages.web.json").then((response) => response.ok ? response.json() : []),
      fetch("/apple-kit/sketch/summary.web.json").then((response) => response.ok ? response.json() : null),
    ])
      .then(([namedData, archiveData, fontData, pageData, summaryData]) => {
        if (!active) return
        setNamedAssets(Array.isArray(namedData) ? namedData : [])
        setArchiveAssets(Array.isArray(archiveData) ? archiveData : [])
        setFonts(Array.isArray(fontData) ? fontData : [])
        setPages(Array.isArray(pageData) ? pageData : [])
        setSummary(summaryData)
      })
      .catch(() => {
        if (!active) return
        setError("Sketch assets could not be loaded.")
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const groups = useMemo(() => {
    const source = view === "named" ? namedAssets : archiveAssets
    const values = Array.from(new Set(source.map((asset) => getGroupName(asset)))).sort((a, b) => a.localeCompare(b))
    return ["All", ...values]
  }, [view, namedAssets, archiveAssets])

  const filteredNamed = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return namedAssets.filter((asset) => {
      const matchesGroup = selectedGroup === "All" || getGroupName(asset) === selectedGroup
      if (!matchesGroup) return false
      if (!needle) return true
      return [asset.path, asset.pageName, asset.fileName].filter(Boolean).some((value) => value.toLowerCase().includes(needle))
    })
  }, [namedAssets, query, selectedGroup])

  const filteredArchive = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return archiveAssets.filter((asset) => {
      const matchesGroup = selectedGroup === "All" || getGroupName(asset) === selectedGroup
      if (!matchesGroup) return false
      if (!needle) return true
      return [asset.usages?.[0]?.path, asset.fileName, asset.imageRef].filter(Boolean).some((value) => value.toLowerCase().includes(needle))
    })
  }, [archiveAssets, query, selectedGroup])

  const filteredFonts = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return fonts.filter((font) => !needle || font.fileName.toLowerCase().includes(needle))
  }, [fonts, query])

  const filteredPages = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return pages.filter((page) => !needle || page.name.toLowerCase().includes(needle) || page.path.toLowerCase().includes(needle))
  }, [pages, query])

  const currentCount =
    view === "named" ? filteredNamed.length :
    view === "archive" ? filteredArchive.length :
    view === "fonts" ? filteredFonts.length :
    filteredPages.length

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: isDark ? "#000" : "#f2f2f7", position: "relative" }}>
      <div style={{ padding: "12px 18px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={goBack} style={{ background: "none", border: "none", color: "#0a84ff", fontSize: 16, cursor: "pointer" }}>
          {t("system.back", language)}
        </button>
        <span style={{ fontSize: 17, fontWeight: 700, color: isDark ? "#fff" : "#000" }}>Apple UI Kit</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={{ padding: "0 18px 10px" }}>
        <div style={{ fontSize: 12, color: isDark ? "rgba(255,255,255,0.52)" : "rgba(0,0,0,0.5)" }}>
          {loading ? "Loading..." : `${currentCount} item${currentCount === 1 ? "" : "s"}`}
          {summary ? `  •  ${summary.pageCount} pages  •  ${summary.archiveImageCount} images  •  ${summary.archiveFontCount} fonts` : ""}
        </div>
      </div>

      <div style={{ padding: "0 18px 12px" }}>
        <div
          style={{
            height: 38,
            borderRadius: 14,
            background: isDark ? "rgba(28,28,30,0.94)" : "#fff",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 12px",
          }}
        >
          <Search size={16} color={isDark ? "rgba(255,255,255,0.54)" : "rgba(0,0,0,0.44)"} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sketch exports"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: isDark ? "#fff" : "#000",
              fontSize: 14,
            }}
          />
        </div>
      </div>

      <div
        style={{
          margin: "0 18px 12px",
          padding: 4,
          borderRadius: 999,
          background: isDark ? "rgba(28,28,30,0.94)" : "#fff",
          display: "flex",
          overflowX: "auto",
        }}
      >
        <Segment active={view === "named"} onClick={() => { setView("named"); setSelectedGroup("All") }}>Named</Segment>
        <Segment active={view === "archive"} onClick={() => { setView("archive"); setSelectedGroup("All") }}>Archive</Segment>
        <Segment active={view === "fonts"} onClick={() => { setView("fonts"); setSelectedGroup("All") }}>Fonts</Segment>
        <Segment active={view === "pages"} onClick={() => { setView("pages"); setSelectedGroup("All") }}>Pages</Segment>
      </div>

      {(view === "named" || view === "archive") && (
        <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "0 18px 14px" }}>
          {groups.map((group) => {
            const active = group === selectedGroup
            return (
              <button
                key={group}
                type="button"
                onClick={() => setSelectedGroup(group)}
                style={{
                  border: "none",
                  borderRadius: 999,
                  padding: "8px 12px",
                  background: active ? "#0a84ff" : isDark ? "rgba(28,28,30,0.94)" : "#fff",
                  color: active ? "#fff" : isDark ? "#fff" : "#000",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {group}
              </button>
            )
          })}
        </div>
      )}

      <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: "0 18px 24px" }}>
        {loading ? (
          <div style={{ paddingTop: 40, textAlign: "center", opacity: 0.5 }}>Loading...</div>
        ) : error ? (
          <div style={{ borderRadius: 18, background: isDark ? "rgba(28,28,30,0.94)" : "#fff", padding: 18, color: isDark ? "#fff" : "#000" }}>
            {error}
          </div>
        ) : view === "fonts" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filteredFonts.map((font) => (
              <button
                key={font.fileName}
                type="button"
                onClick={() => setSelectedItem({ title: font.fileName, subtitle: "Sketch font export", url: font.url, extension: PathExt(font.fileName) })}
                style={{
                  border: "none",
                  borderRadius: 16,
                  background: isDark ? "rgba(28,28,30,0.94)" : "#fff",
                  color: isDark ? "#fff" : "#000",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 14, background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", display: "grid", placeItems: "center" }}>
                  <Type size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{font.fileName}</div>
                  <div style={{ marginTop: 2, fontSize: 12, opacity: 0.55, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{font.url}</div>
                </div>
              </button>
            ))}
          </div>
        ) : view === "pages" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filteredPages.map((page) => (
              <div
                key={page.id}
                style={{
                  borderRadius: 16,
                  background: isDark ? "rgba(28,28,30,0.94)" : "#fff",
                  color: isDark ? "#fff" : "#000",
                  padding: "14px 16px",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700 }}>{page.name}</div>
                <div style={{ marginTop: 4, fontSize: 12, opacity: 0.55 }}>{page.path}</div>
                <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>{page.layerCount} layers</div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, color: isDark ? "#fff" : "#000" }}>
              <Layers3 size={16} />
              <span style={{ fontSize: 13, fontWeight: 700 }}>
                {view === "named" ? "Named sketch exports" : "Raw archive assets"}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              {(view === "named" ? filteredNamed : filteredArchive).map((asset) => {
                const extension = asset.extension || PathExt(asset.fileName)
                const title = view === "named" ? getAssetTitle(asset) : asset.fileName
                const subtitle = view === "named" ? getGroupName(asset) : asset.usages?.[0]?.path || asset.imageRef
                const previewUrl = asset.url
                return (
                  <AssetCard
                    key={asset.url || asset.imageRef}
                    title={title}
                    subtitle={subtitle}
                    previewUrl={previewUrl}
                    extension={extension}
                    isDark={isDark}
                    onOpen={() => setSelectedItem({ title, subtitle, url: previewUrl, extension })}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>

      <AssetPreview item={selectedItem} isDark={isDark} onClose={() => setSelectedItem(null)} />
    </div>
  )
}

function PathExt(fileName = "") {
  const dot = fileName.lastIndexOf(".")
  return dot >= 0 ? fileName.slice(dot).toLowerCase() : ""
}
