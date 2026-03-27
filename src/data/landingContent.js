export const landingContent = {
  brand: {
    name: "Janto",
    sublabel: "Phone",
  },
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Demo", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ],
  ctas: {
    primary: { label: "Watch Demo", href: "#demo", tone: "beam" },
    secondary: { label: "Explore Features", href: "#features", tone: "frost" },
    discord: { label: "Join Discord", href: "https://discord.com", tone: "glass" },
  },
  hero: {
    visualMode: "hero-grid-beams",
    eyebrow: "Premium In-Game Phone for FiveM",
    title: "The phone your server deserves.",
    lead:
      "A premium in-game phone ecosystem for FiveM built with modern React UI, low resmon usage, live sharing, screen mirroring, and unique phone metadata that feels native inside serious roleplay.",
    signals: [
      { kicker: "Built with", value: "React + Vite UI" },
      { kicker: "Optimized for", value: "Low Resmon Usage" },
      { kicker: "Feels like", value: "A Real Phone Item" },
    ],
    ghostLeft: {
      label: "Communication Preview",
      asset: "/captures/hero/ghost-calls.svg",
      app: "Calls",
      time: "21:37",
      accent: "cyan",
      badge: "Voice",
      headline: "Direct contact layer",
      copy: "Calls, contact cards, and route-aware replies stay visible without turning the side phones into dead decoration.",
      chips: ["Voice", "Contact Card", "Reply"],
      status: "Calls + route replies",
      statLabel: "Active line",
      statValue: "4 contacts live",
    },
    ghostRight: {
      label: "World Interaction",
      asset: "/captures/hero/ghost-share.svg",
      app: "QuickLink",
      time: "21:39",
      accent: "violet",
      badge: "Share",
      headline: "Nearby world sync",
      copy: "QuickLink, map sharing, and mirrored proof moments now read like a premium side preview instead of a placeholder prop.",
      chips: ["QuickLink", "Nearby", "Mirror"],
      status: "Sharing + mirroring",
      statLabel: "Nearby sync",
      statValue: "3 players linked",
    },
    slides: [
      {
        title: "Lockscreen",
        time: "21:37",
        asset: "/captures/hero/lockscreen.svg",
        overlayCopy: "BioScan-secured lockscreen with live alerts and character-linked ownership.",
        accent: "cyan",
      },
      {
        title: "WhisApp",
        time: "21:41",
        asset: "/captures/hero/whisapp.svg",
        overlayCopy: "Media-rich messaging, voice notes, and live location inside one communication surface.",
        accent: "mint",
      },
      {
        title: "Live Location",
        time: "21:43",
        asset: "/captures/hero/live-location.svg",
        overlayCopy: "Shared routes and live movement data that stay useful during active RP.",
        accent: "blue",
      },
      {
        title: "Screen Mirroring",
        time: "21:46",
        asset: "/captures/hero/mirroring.svg",
        overlayCopy: "Mirror real feeds and shared visuals into the world without breaking immersion.",
        accent: "violet",
      },
      {
        title: "Fleeca Bank",
        time: "21:49",
        asset: "/captures/hero/fleeca-bank.svg",
        overlayCopy: "Modern account management, card UI, and cleaner finance flows on-device.",
        accent: "steel",
      },
      {
        title: "Garage",
        time: "21:52",
        asset: "/captures/hero/garage.svg",
        overlayCopy: "Vehicle state, garage access, and ownership details in a compact mobile flow.",
        accent: "cyan",
      },
    ],
  },
  trustItems: [
    "React + Vite UI",
    "Low Resmon Usage",
    "Unique Phone Metadata",
    "Real-Time Sharing",
    "Screen Mirroring",
    "Multi-Framework Ready",
  ],
  featuresSection: {
    id: "features",
    backdropMode: "section-light-rays",
    surfaceTone: "frost",
    eyebrow: "Core apps and systems",
    title: "One ecosystem. Multiple layers of RP.",
    body:
      "Janto Phone connects communication, identity, finance, media, vehicles, and emergency systems into one device experience instead of a cosmetic overlay.",
    features: [
      {
        icon: "W",
        kicker: "Messaging",
        title: "WhisApp",
        body: "Advanced chat with media sharing, live location, contact cards, and richer communication flows.",
        previewAsset: "/captures/demo/demo-share.svg",
        accentStyle: "cyan",
        surfaceTone: "hero",
        variant: "tall",
        meta: ["Live location", "Voice", "Cards"],
      },
      {
        icon: "V",
        kicker: "Social",
        title: "Vibeshot",
        body: "A social layer with posts, stories, profiles, reactions, and identity-driven roleplay.",
        previewAsset: "/captures/showcase/social.svg",
        accentStyle: "violet",
        surfaceTone: "metal",
        variant: "wide",
        meta: ["Stories", "Mentions", "Live"],
      },
      {
        icon: "$",
        kicker: "Finance",
        title: "Fleeca Bank",
        body: "Modern account management with card-style UI, multi-account views, and cleaner finance flows.",
        previewAsset: "/captures/hero/fleeca-bank.svg",
        accentStyle: "blue",
        surfaceTone: "frost",
        variant: "standard",
        meta: ["Cards", "Accounts", "Balance"],
      },
      {
        icon: "G",
        kicker: "Vehicles",
        title: "Garage",
        body: "Check owned vehicles, statuses, and access details directly from the phone without breaking immersion.",
        previewAsset: "/captures/hero/garage.svg",
        accentStyle: "steel",
        surfaceTone: "metal",
        variant: "standard",
        meta: ["Owned vehicles", "Status", "Access"],
      },
      {
        icon: "C",
        kicker: "Media",
        title: "Camera & Gallery",
        body: "Capture moments in-game, manage media intelligently, and move content naturally across apps.",
        previewAsset: "/captures/demo/demo-overview.svg",
        accentStyle: "mint",
        surfaceTone: "hero",
        variant: "wide",
        meta: ["Selfie", "Gallery", "Publishing"],
      },
      {
        icon: "E",
        kicker: "Response",
        title: "Emergency",
        body: "Fast access to location-aware alerts for police, ambulance, and urgent server-side response flows.",
        previewAsset: "/captures/showcase/world.svg",
        accentStyle: "red",
        surfaceTone: "frost",
        variant: "standard",
        meta: ["Alerts", "Dispatch", "Pins"],
      },
    ],
    chips: [
      "QuickLink",
      "BioScan Security",
      "Battery System",
      "Powerbank Support",
      "V Store",
      "Voice Notes",
      "Bridge Integrations",
      "Custom Wallpapers",
    ],
  },
  highlightItems: [
    {
      tone: "wide",
      kicker: "Real-time layer",
      title: "QuickLink turns nearby interaction into a visible product differentiator.",
      body:
        "Share routes, media, tracks, and live context with nearby players without reducing the phone to a static menu.",
      diagram: ["Phone", "Nearby players", "Shared world"],
    },
    {
      tone: "mirror",
      kicker: "Mirroring",
      title: "Screen mirroring that belongs inside RP.",
      body: "Use it for feeds, proof, shared media, and in-world moments that need more than a screenshot.",
    },
    {
      tone: "metadata",
      kicker: "Ownership",
      title: "Persistent phone metadata makes the device feel owned.",
      body: "Number, battery, security state, and app identity persist with the item instead of vanishing between sessions.",
    },
    {
      tone: "soft",
      kicker: "Developer-ready",
      title: "Bridge-friendly architecture for serious servers.",
      body: "Multi-framework support and cleaner event patterns make the ecosystem easier to integrate without bloating the UX.",
    },
  ],
  demoSection: {
    id: "demo",
    backdropMode: "section-light-rays",
    eyebrow: "Live demo staging",
    title: "A dedicated media lane for the product in motion.",
    body:
      "The demo section sells the phone before Discord ever becomes the main action. It previews active use-cases with real capture-ready framing.",
    videoEmbed: "https://www.youtube.com/embed/UlY6Uc65NMo?start=1&rel=0",
    videoTitle: "Janto Phone demo video",
    note:
      "The official docs note that the promo video does not include every feature; newer capabilities and UI updates live deeper in the documentation and showcase server.",
    items: [
      {
        title: "Active communication",
        type: "WhisApp flow",
        thumbnail: "/captures/demo/demo-overview.svg",
        source: "Test server + docs hybrid",
        caption: "Primary panel: messaging, contact cards, voice notes, and location flow in one shot.",
        signals: ["Messaging", "Voice notes", "Live location"],
      },
      {
        title: "Sharing and mirroring",
        type: "QuickLink + mirroring",
        thumbnail: "/captures/demo/demo-share.svg",
        source: "Capture-ready frame",
        caption: "Secondary panel: nearby sharing, mirrored content, and player-facing proof moments.",
        signals: ["QuickLink", "Mirroring", "Nearby proof"],
      },
      {
        title: "Identity and social layer",
        type: "Vibeshot",
        thumbnail: "/captures/demo/demo-vibeshot.svg",
        source: "Hybrid showcase",
        caption: "Secondary panel: profiles, posts, story-like moments, and identity-driven interaction.",
        signals: ["Profiles", "Stories", "Reactions"],
      },
    ],
    chapters: [
      {
        label: "WhisApp",
        detail: "Live location, media share, reaction-rich chat, and contact-card flows.",
      },
      {
        label: "Vibeshot",
        detail: "Reels, stories, mentions, live moments, and digital identity layers.",
      },
      {
        label: "World systems",
        detail: "Garage, emergency, banking, and map access from the same mobile surface.",
      },
    ],
  },
  showcaseSection: {
    backdropMode: "section-light-rays",
    eyebrow: "Sticky UI deep dive",
    title: "Product storytelling that proves the promise.",
    body:
      "Scroll through the parts that make the phone feel complete: communication, social identity, world interaction, and real ownership.",
    steps: [
      {
        label: "Communication",
        index: "01",
        contentType: "communication",
        headline: "Communication that feels complete.",
        body: "From fast messaging to media, voice notes, and live location sharing, communication becomes a real gameplay layer.",
        screenAsset: "/captures/showcase/communication.svg",
        caption: "Voice notes, route sharing, live location, and contact cards remain visible as one communication surface.",
        chips: ["Voice Notes", "Live Location", "Contact Cards"],
      },
      {
        label: "Social & Identity",
        index: "02",
        contentType: "social",
        headline: "A social life built into your server.",
        body: "Profiles, posts, stories, comments, music tags, and identity-driven interactions make the world feel alive.",
        screenAsset: "/captures/showcase/social.svg",
        caption: "Profiles, posts, stories, and reactions create an identity layer that feels lived-in instead of decorative.",
        chips: ["Profiles", "Stories", "Reactions"],
      },
      {
        label: "World Interaction",
        index: "03",
        contentType: "world",
        headline: "Your server systems, in one pocket-sized interface.",
        body: "Handle vehicles, banking, emergency flows, and live world interactions without leaving the roleplay surface.",
        screenAsset: "/captures/showcase/world.svg",
        caption: "Vehicle state, finance access, emergency triggers, and live map context sit inside a single touch surface.",
        chips: ["Bank", "Garage", "Emergency"],
      },
      {
        label: "Ownership",
        index: "04",
        contentType: "ownership",
        headline: "A phone that behaves like a real item.",
        body: "Unique ownership, persistent battery logic, BioScan security, and metadata give the device real in-world weight.",
        screenAsset: "/captures/showcase/ownership.svg",
        caption: "Metadata, battery, security, and ownership history persist with the item rather than disappearing behind the UI.",
        chips: ["Metadata", "Battery", "BioScan"],
      },
    ],
  },
  metadataSection: {
    eyebrow: "Real ownership",
    title: "Not just a UI. A real phone item.",
    body:
      "Each phone can carry its own number, media, data, battery state, and ownership history so the device becomes part of the world instead of a temporary overlay.",
    points: [
      "Unique metadata per device",
      "Persistent battery and security state",
      "Inventory-friendly ownership logic",
      "Transfer feel that stays immersive",
    ],
    stats: [
      { label: "Owner", value: "Jordan Vale" },
      { label: "Number", value: "(555) 014-871" },
      { label: "Battery", value: "82%" },
      { label: "BioScan", value: "Enabled" },
      { label: "Linked apps", value: "12 active" },
    ],
  },
  customizationSection: {
    eyebrow: "Customization",
    title: "Make the phone feel personal.",
    body:
      "From wallpapers and layouts to app choices and identity details, the phone adapts to the player instead of feeling static.",
    themes: [
      { key: "cyan", label: "Neon Cyan", note: "Signature glow" },
      { key: "ember", label: "Ember Red", note: "Urgent contrast" },
      { key: "aurora", label: "Aurora Mint", note: "Soft premium tone" },
    ],
    wallpaperModes: ["Home Screen", "Lock Screen", "Both"],
    widgets: [
      { label: "Layout", value: "Adaptive dock" },
      { label: "Wallpapers", value: "Link + gallery" },
      { label: "Identity", value: "Player-owned" },
    ],
    apps: [
      { name: "Chat", kicker: "Messages" },
      { name: "Bank", kicker: "Finance" },
      { name: "Garage", kicker: "Vehicles" },
      { name: "V Store", kicker: "Marketplace" },
      { name: "Gallery", kicker: "Media" },
      { name: "Emergency", kicker: "Response" },
    ],
  },
  docsFeatureSection: {
    eyebrow: "Docs-backed capabilities",
    title: "Features that go beyond the first video pass.",
    body:
      "Janto's documentation fills in the parts the promo video does not fully show: richer social loops, deeper camera workflows, persistent battery logic, and modern WebRTC-based interaction.",
    cards: [
      {
        title: "WhisApp depth",
        body:
          "Docs call out live location cards, fixed location pins, link previews, contact cards, reactions, reply/forward flow, and group/community structures.",
        chips: ["Live Location 1h/8h", "Contact Card", "Reply & Forward"],
        source:
          "https://docs.jantolab.com/tr/features/whisapp.html",
      },
      {
        title: "Vibeshot realism",
        body:
          "Carousel posts, reels, live streams, stories with draggable stickers, music tags, mentions, and verified profile controls make the social layer feel complete.",
        chips: ["Reels", "Stories", "Live", "Mentions"],
        source:
          "https://docs.jantolab.com/tr/features/vibeshot.html",
      },
      {
        title: "Camera-native workflow",
        body:
          "Rear camera, selfie mode, vehicle support, auto focus, screenshots, and direct publishing into Gallery, WhisApp, Vibeshot, Ads, and profile flows are all documented.",
        chips: ["Selfie", "Vehicle Camera", "Gallery Save"],
        source:
          "https://docs.jantolab.com/tr/features/camera.html",
      },
      {
        title: "WebRTC layer",
        body:
          "Video calls, Vibeshot live streams, and nearby screen share are documented as WebRTC-based, low-latency, and built to minimize server traffic.",
        chips: ["Video Call", "Instagram Live", "Screen Share"],
        source:
          "https://docs.jantolab.com/tr/phone/configuration/webrtc.html",
      },
      {
        title: "Persistent battery logic",
        body:
          "Battery drains during use, survives restarts via metadata, charges in vehicles, and can be topped up from a separate powerbank item with its own charge state.",
        chips: ["Vehicle Charge", "Powerbank", "Metadata Charge"],
        source:
          "https://docs.jantolab.com/tr/features/battery-powerbank.html",
      },
      {
        title: "Wallpaper modes",
        body:
          "Players can set wallpapers for the home screen, lock screen, or both, using built-in packs, external links, or media already living inside the phone.",
        chips: ["Built-in Packs", "URL Import", "Lock/Home Split"],
        source:
          "https://docs.jantolab.com/tr/phone/configuration/custom-wallpapers.html",
      },
    ],
  },
  compatibilitySection: {
    eyebrow: "Compatibility matrix",
    title: "One codebase across serious server stacks.",
    body:
      "The docs position Janto as a single phone ecosystem that spans major frameworks, inventory systems, garages, banking providers, voice stacks, and multiple languages.",
    rows: [
      {
        label: "Frameworks",
        values: ["QBox", "QBCore", "ESX", "vRP (Experimental)", "Standalone"],
      },
      {
        label: "Inventory",
        values: ["ox_inventory", "qb-inventory", "qs-inventory", "tgiann-inventory", "esx-inventory"],
      },
      {
        label: "Garages & Banking",
        values: ["qbx-garages", "qb-garage", "cd-garage", "Renewed Banking", "QB Banking", "ESX Banking"],
      },
      {
        label: "Voice & Languages",
        values: ["pma-voice", "SaltyChat", "English", "Turkish", "German", "Arabic"],
      },
    ],
  },
  performanceSection: {
    eyebrow: "Performance and trust",
    title: "Built for smooth, modern interaction.",
    body:
      "Janto Phone pairs a modern React-based UI with optimization-focused architecture, low idle resmon usage, and sync patterns designed to stay fluid during active play.",
    cards: [
      {
        label: "Frontend",
        value: "React + Vite",
        body: "Fast iteration and cleaner rendering for a modern in-game mobile experience.",
      },
      {
        label: "Performance",
        value: "Low Idle Resmon",
        body: "Designed to keep the experience responsive without noisy overhead.",
      },
      {
        label: "Sync Model",
        value: "Real-Time Aware",
        body: "Sharing, live location, and interaction patterns are built for active server play.",
      },
    ],
  },
  ecosystemSection: {
    eyebrow: "Ecosystem showcase",
    title: "More than a phone UI.",
    body:
      "Janto works best when it is framed as a living RP systems hub, not a cosmetic app grid.",
    items: [
      { title: "Communication", body: "WhisApp, messages, voice notes, live location, contact cards." },
      { title: "Social", body: "Vibeshot posts, profiles, reactions, stories, and public identity." },
      { title: "Media", body: "Camera, gallery, mirroring, sharing, and content movement across apps." },
      { title: "Finance", body: "Fleeca Bank accounts, cards, balances, and cleaner money management." },
      { title: "Vehicles", body: "Garage views, owned vehicles, states, and access details in one pocket flow." },
      { title: "Security", body: "BioScan, passwords, metadata, and battery state that persist with the item." },
    ],
  },
  faqSection: {
    id: "faq",
    backdropMode: "section-light-rays",
    eyebrow: "FAQ",
    title: "Questions serious RP servers ask first.",
    items: [
      {
        question: "What makes this feel different from a standard phone UI?",
        answer:
          "It is positioned as a full phone ecosystem with real ownership, live systems, social identity, and item-level persistence instead of a cosmetic overlay.",
      },
      {
        question: "Is it built for serious RP servers?",
        answer:
          "Yes. The landing frames Janto around immersion, ownership, communication depth, and practical server systems rather than gamer-style effects.",
      },
      {
        question: "Does it support live interaction features?",
        answer:
          "The page highlights real-time sharing, live location, screen mirroring, QuickLink flows, and location-aware emergency interactions.",
      },
      {
        question: "Where can I see the product in motion?",
        answer:
          "The primary call to action moves visitors into the dedicated demo lane first, while the rest of the page previews the main interaction layers.",
      },
    ],
  },
  finalCta: {
    backdropMode: "footer-depth",
    eyebrow: "Ready for rollout",
    title: "Bring premium phone UX to your server.",
    body:
      "Upgrade everyday RP with a modern in-game phone ecosystem built to feel right inside your world.",
  },
};
