export const landingContent = {
  en: {
  "brand": {
    "name": "Janto",
    "sublabel": "Lab",
    "logo": "/favicon.png"
  },
  "navLinks": [
    {
      "label": "Features",
      "href": "#features"
    },
    {
      "label": "Demo",
      "href": "#demo"
    },
    {
      "label": "FAQ",
      "href": "#faq"
    }
  ],
  "ctas": {
    "primary": {
      "label": "Watch Demo",
      "href": "#demo",
      "tone": "beam"
    },
    "secondary": {
      "label": "Explore Features",
      "href": "#features",
      "tone": "frost"
    },
    "discord": {
      "label": "Join Discord",
      "href": "https://discord.gg/qW9bGKvQ9j",
      "tone": "glass"
    }
  },
  "hero": {
    "visualMode": "hero-grid-beams",
    "eyebrow": "Docs-backed phone ecosystem for FiveM",
    "title": "A living phone layer for serious RP servers.",
    "lead": "Janto Phone brings messaging, social identity, banking, garage access, emergency dispatch, camera workflows, settings, vault sync, and battery persistence into one connected mobile surface. It is built to feel like a real owned device, not a cosmetic overlay.",
    "signals": [
      {
        "kicker": "Connects",
        "value": "Comms, social, finance, dispatch"
      },
      {
        "kicker": "Persists",
        "value": "Battery, vault, and device metadata"
      },
      {
        "kicker": "Ready for",
        "value": "QBox, QBCore, ESX, and more"
      }
    ],
    "ghostLeft": {
      "label": "Communication Preview",
      "asset": "/captures/hero/ghost-calls.svg",
      "app": "Calls",
      "time": "21:37",
      "accent": "cyan",
      "badge": "Voice",
      "headline": "Calls, replies, and contact flow",
      "copy": "Messages and WhisApp turn communication into a real gameplay layer with voice notes, contact cards, replies, link previews, and live location windows.",
      "chips": [
        "Voice",
        "Contact Card",
        "Reply"
      ],
      "status": "Calls + route replies",
      "statLabel": "Active line",
      "statValue": "4 contacts live"
    },
    "ghostRight": {
      "label": "World Interaction",
      "asset": "/captures/hero/ghost-share.svg",
      "app": "QuickLink",
      "time": "21:39",
      "accent": "violet",
      "badge": "Share",
      "headline": "Nearby sharing and proof moments",
      "copy": "QuickLink, map sharing, and mirrored content keep world interaction visible from the same phone surface instead of hiding it behind menus.",
      "chips": [
        "QuickLink",
        "Nearby",
        "Mirror"
      ],
      "status": "Sharing + mirroring",
      "statLabel": "Nearby sync",
      "statValue": "3 players linked"
    },
    "slides": [
      {
        "title": "Homescreen",
        "time": "10:15",
        "asset": "/captures/hero/homescreen-cropped.png",
        "overlayCopy": "A dense app surface that brings communication, finance, media, utilities, and system control into one owned device.",
        "accent": "blue",
        "screenScale": 1.1,
        "screenOffsetY": 1
      },
      {
        "title": "Lockscreen",
        "time": "21:37",
        "asset": "/captures/hero/lockscreen-cropped.png",
        "overlayCopy": "An ownership-aware lockscreen with alerts, battery context, and a persistent phone identity tied to the player.",
        "accent": "cyan",
        "screenScale": 1.12,
        "screenOffsetY": 2
      },
      {
        "title": "Settings Map",
        "time": "14:23",
        "asset": "/captures/hero/settingsapp-cropped.png",
        "overlayCopy": "Connections, notifications, sounds, themes, and app-level behavior live inside one control center.",
        "accent": "violet",
        "screenScale": 1.1,
        "screenOffsetY": 1
      },
      {
        "title": "Music Player",
        "time": "16:40",
        "asset": "/captures/hero/musicapp-cropped.png",
        "overlayCopy": "Search, playlists, charts, and in-vehicle listening extend the phone into a real media layer.",
        "accent": "pink",
        "screenScale": 1.1,
        "screenOffsetY": -2
      },
      {
        "title": "Garage",
        "time": "18:05",
        "asset": "/captures/hero/garageapp-cropped.png",
        "overlayCopy": "Owned vehicles, impound state, fuel, engine, and body details stay one tap away from the same phone.",
        "accent": "orange",
        "screenScale": 1.08,
        "screenOffsetY": -1
      }
    ]
  },
  "trustItems": [
    "React + Vite UI",
    "Low Resmon Usage",
    "Unique Phone Metadata",
    "Real-Time Sharing",
    "Screen Mirroring",
    "Multi-Framework Ready"
  ],
  "featuresSection": {
    "id": "features",
    "backdropMode": "section-light-rays",
    "surfaceTone": "frost",
    "eyebrow": "Core apps and systems",
    "title": "One ecosystem. Multiple layers of RP.",
    "body": "Janto Phone connects communication, identity, finance, media, vehicles, and emergency systems into one device experience instead of a cosmetic overlay.",
    "features": [
      {
        "icon": "W",
        "kicker": "Messaging",
        "title": "WhisApp",
        "body": "Advanced chat with media sharing, live location, contact cards, and richer communication flows.",
        "previewAsset": "/captures/demo/demo-share.svg",
        "accentStyle": "cyan",
        "surfaceTone": "hero",
        "variant": "tall",
        "meta": [
          "Live location",
          "Voice",
          "Cards"
        ]
      },
      {
        "icon": "V",
        "kicker": "Social",
        "title": "Vibeshot",
        "body": "A social layer with posts, stories, profiles, reactions, and identity-driven roleplay.",
        "previewAsset": "/captures/showcase/social.svg",
        "accentStyle": "violet",
        "surfaceTone": "metal",
        "variant": "wide",
        "meta": [
          "Stories",
          "Mentions",
          "Live"
        ]
      },
      {
        "icon": "$",
        "kicker": "Finance",
        "title": "Fleeca Bank",
        "body": "Modern account management with card-style UI, multi-account views, and cleaner finance flows.",
        "previewAsset": "/captures/hero/fleeca-bank.svg",
        "accentStyle": "blue",
        "surfaceTone": "frost",
        "variant": "standard",
        "meta": [
          "Cards",
          "Accounts",
          "Balance"
        ]
      },
      {
        "icon": "G",
        "kicker": "Vehicles",
        "title": "Garage",
        "body": "Check owned vehicles, statuses, and access details directly from the phone without breaking immersion.",
        "previewAsset": "/captures/hero/garage.svg",
        "accentStyle": "steel",
        "surfaceTone": "metal",
        "variant": "standard",
        "meta": [
          "Owned vehicles",
          "Status",
          "Access"
        ]
      },
      {
        "icon": "C",
        "kicker": "Media",
        "title": "Camera & Gallery",
        "body": "Capture moments in-game, manage media intelligently, and move content naturally across apps.",
        "previewAsset": "/captures/demo/demo-overview.svg",
        "accentStyle": "mint",
        "surfaceTone": "hero",
        "variant": "wide",
        "meta": [
          "Selfie",
          "Gallery",
          "Publishing"
        ]
      },
      {
        "icon": "E",
        "kicker": "Response",
        "title": "Emergency",
        "body": "Fast access to location-aware alerts for police, ambulance, and urgent server-side response flows.",
        "previewAsset": "/captures/showcase/world.svg",
        "accentStyle": "red",
        "surfaceTone": "frost",
        "variant": "standard",
        "meta": [
          "Alerts",
          "Dispatch",
          "Pins"
        ]
      }
    ],
    "chips": [
      "QuickLink",
      "BioScan Security",
      "Battery System",
      "Powerbank Support",
      "V Store",
      "Voice Notes",
      "Bridge Integrations",
      "Custom Wallpapers"
    ]
  },
  "highlightItems": [
    {
      "tone": "wide",
      "kicker": "Real-time layer",
      "title": "QuickLink turns nearby interaction into a visible product differentiator.",
      "body": "Share routes, media, tracks, and live context with nearby players without reducing the phone to a static menu.",
      "diagram": [
        "Phone",
        "Nearby players",
        "Shared world"
      ]
    },
    {
      "tone": "mirror",
      "kicker": "Mirroring",
      "title": "Screen mirroring that belongs inside RP.",
      "body": "Use it for feeds, proof, shared media, and in-world moments that need more than a screenshot."
    },
    {
      "tone": "metadata",
      "kicker": "Ownership",
      "title": "Persistent phone metadata makes the device feel owned.",
      "body": "Number, battery, security state, and app identity persist with the item instead of vanishing between sessions."
    },
    {
      "tone": "soft",
      "kicker": "Developer-ready",
      "title": "Bridge-friendly architecture for serious servers.",
      "body": "Multi-framework support and cleaner event patterns make the ecosystem easier to integrate without bloating the UX."
    }
  ],
  "demoSection": {
    "id": "demo",
    "backdropMode": "section-light-rays",
    "eyebrow": "Docs-backed live walkthrough",
    "title": "See the phone as a gameplay system, not a skin.",
    "body": "The official docs position Janto as a connected device flow: Messages and WhisApp for communication, Vibeshot for social identity, Fleeca Bank for money movement, Garage and Emergency for world systems, and Settings, Vault, and Battery for real ownership.",
    "videoEmbed": "https://www.youtube.com/embed/UlY6Uc65NMo?start=1&rel=0",
    "videoHref": "https://www.youtube.com/watch?v=UlY6Uc65NMo&t=1s",
    "videoTitle": "Janto Phone demo video",
    "note": "The official docs note that the promo video does not include every feature; newer capabilities and UI updates live deeper in the documentation and showcase server.",
    "items": [
      {
        "title": "Communication with real depth",
        "type": "WhisApp flow",
        "accent": "cyan",
        "thumbnail": "/captures/demo/demo-overview.svg",
        "source": "Test server + docs hybrid",
        "caption": "Messages and WhisApp combine media share, voice notes, contact cards, replies, link previews, and live location in one phone-native flow.",
        "signals": [
          "Messaging",
          "Voice notes",
          "Live location"
        ]
      },
      {
        "title": "World sharing and mirrored proof",
        "type": "QuickLink + mirroring",
        "accent": "violet",
        "thumbnail": "/captures/demo/demo-share.svg",
        "source": "Capture-ready frame",
        "caption": "QuickLink, map sharing, and mirrored content keep nearby interaction readable during active RP moments.",
        "signals": [
          "QuickLink",
          "Mirroring",
          "Nearby proof"
        ]
      },
      {
        "title": "Profiles, stories, and live identity",
        "type": "Vibeshot",
        "accent": "orange",
        "thumbnail": "/captures/demo/demo-vibeshot.svg",
        "source": "Hybrid showcase",
        "caption": "Vibeshot adds posts, reels, stories, mentions, music tags, live broadcasts, and a stronger public identity layer.",
        "signals": [
          "Profiles",
          "Stories",
          "Reactions"
        ]
      }
    ],
    "chapters": [
      {
        "label": "WhisApp",
        "detail": "Voice notes, contact cards, reply chains, link previews, and live location windows."
      },
      {
        "label": "Vibeshot",
        "detail": "Carousel posts, reels, stories, live broadcasts, mentions, and reaction-driven social RP."
      },
      {
        "label": "World systems",
        "detail": "Garage status, dispatch-ready emergency calls, banking, and navigation from the same device."
      }
    ]
  },
  "showcaseSection": {
    "backdropMode": "section-light-rays",
    "eyebrow": "Sticky UI deep dive",
    "title": "Product storytelling that proves the promise.",
    "body": "Scroll through the parts that make the phone feel complete: communication, social identity, world interaction, and real ownership.",
    "steps": [
      {
        "label": "Communication",
        "index": "01",
        "contentType": "communication",
        "headline": "Communication that feels complete.",
        "body": "From fast messaging to media, voice notes, and live location sharing, communication becomes a real gameplay layer.",
        "screenAsset": "/captures/showcase/communication.svg",
        "caption": "Voice notes, route sharing, live location, and contact cards remain visible as one communication surface.",
        "chips": [
          "Voice Notes",
          "Live Location",
          "Contact Cards"
        ]
      },
      {
        "label": "Social & Identity",
        "index": "02",
        "contentType": "social",
        "headline": "A social life built into your server.",
        "body": "Profiles, posts, stories, comments, music tags, and identity-driven interactions make the world feel alive.",
        "screenAsset": "/captures/showcase/social.svg",
        "caption": "Profiles, posts, stories, and reactions create an identity layer that feels lived-in instead of decorative.",
        "chips": [
          "Profiles",
          "Stories",
          "Reactions"
        ]
      },
      {
        "label": "World Interaction",
        "index": "03",
        "contentType": "world",
        "headline": "Your server systems, in one pocket-sized interface.",
        "body": "Handle vehicles, banking, emergency flows, and live world interactions without leaving the roleplay surface.",
        "screenAsset": "/captures/showcase/world.svg",
        "caption": "Vehicle state, finance access, emergency triggers, and live map context sit inside a single touch surface.",
        "chips": [
          "Bank",
          "Garage",
          "Emergency"
        ]
      },
      {
        "label": "Ownership",
        "index": "04",
        "contentType": "ownership",
        "headline": "A phone that behaves like a real item.",
        "body": "Unique ownership, persistent battery logic, BioScan security, and metadata give the device real in-world weight.",
        "screenAsset": "/captures/showcase/ownership.svg",
        "caption": "Metadata, battery, security, and ownership history persist with the item rather than disappearing behind the UI.",
        "chips": [
          "Metadata",
          "Battery",
          "BioScan"
        ]
      }
    ]
  },
  "metadataSection": {
    "eyebrow": "Real ownership",
    "title": "Not just a UI. A real phone item.",
    "body": "Each phone can carry its own number, media, data, battery state, and ownership history so the device becomes part of the world instead of a temporary overlay.",
    "points": [
      "Unique metadata per device",
      "Persistent battery and security state",
      "Inventory-friendly ownership logic",
      "Transfer feel that stays immersive"
    ],
    "stats": [
      {
        "label": "Owner",
        "value": "Jordan Vale"
      },
      {
        "label": "Number",
        "value": "(555) 014-871"
      },
      {
        "label": "Battery",
        "value": "82%"
      },
      {
        "label": "BioScan",
        "value": "Enabled"
      },
      {
        "label": "Linked apps",
        "value": "12 active"
      }
    ]
  },
  "customizationSection": {
    "eyebrow": "Customization",
    "title": "Make the phone feel personal.",
    "body": "From wallpapers and layouts to app choices and identity details, the phone adapts to the player instead of feeling static.",
    "themes": [
      {
        "key": "cyan",
        "label": "Neon Cyan",
        "note": "Signature glow"
      },
      {
        "key": "ember",
        "label": "Ember Red",
        "note": "Urgent contrast"
      },
      {
        "key": "aurora",
        "label": "Aurora Mint",
        "note": "Soft premium tone"
      }
    ],
    "wallpaperModes": [
      "Home Screen",
      "Lock Screen",
      "Both"
    ],
    "widgets": [
      {
        "label": "Layout",
        "value": "Adaptive dock"
      },
      {
        "label": "Wallpapers",
        "value": "Link + gallery"
      },
      {
        "label": "Identity",
        "value": "Player-owned"
      }
    ],
    "apps": [
      {
        "name": "Chat",
        "kicker": "Messages"
      },
      {
        "name": "Bank",
        "kicker": "Finance"
      },
      {
        "name": "Garage",
        "kicker": "Vehicles"
      },
      {
        "name": "V Store",
        "kicker": "Marketplace"
      },
      {
        "name": "Gallery",
        "kicker": "Media"
      },
      {
        "name": "Emergency",
        "kicker": "Response"
      }
    ]
  },
  "docsFeatureSection": {
    "eyebrow": "Docs-backed capabilities",
    "title": "Features that go beyond the first video pass.",
    "body": "Janto's documentation fills in the parts the promo video does not fully show: richer social loops, deeper camera workflows, persistent battery logic, and modern WebRTC-based interaction.",
    "cards": [
      {
        "title": "WhisApp depth",
        "body": "Docs call out live location cards, fixed location pins, link previews, contact cards, reactions, reply/forward flow, and group/community structures.",
        "chips": [
          "Live Location 1h/8h",
          "Contact Card",
          "Reply & Forward"
        ],
        "source": "https://docs.jantolab.com/tr/features/whisapp.html"
      },
      {
        "title": "Vibeshot realism",
        "body": "Carousel posts, reels, live streams, stories with draggable stickers, music tags, mentions, and verified profile controls make the social layer feel complete.",
        "chips": [
          "Reels",
          "Stories",
          "Live",
          "Mentions"
        ],
        "source": "https://docs.jantolab.com/tr/features/vibeshot.html"
      },
      {
        "title": "Camera-native workflow",
        "body": "Rear camera, selfie mode, vehicle support, auto focus, screenshots, and direct publishing into Gallery, WhisApp, Vibeshot, Ads, and profile flows are all documented.",
        "chips": [
          "Selfie",
          "Vehicle Camera",
          "Gallery Save"
        ],
        "source": "https://docs.jantolab.com/tr/features/camera.html"
      },
      {
        "title": "WebRTC layer",
        "body": "Video calls, Vibeshot live streams, and nearby screen share are documented as WebRTC-based, low-latency, and built to minimize server traffic.",
        "chips": [
          "Video Call",
          "Instagram Live",
          "Screen Share"
        ],
        "source": "https://docs.jantolab.com/tr/phone/configuration/webrtc.html"
      },
      {
        "title": "Persistent battery logic",
        "body": "Battery drains during use, survives restarts via metadata, charges in vehicles, and can be topped up from a separate powerbank item with its own charge state.",
        "chips": [
          "Vehicle Charge",
          "Powerbank",
          "Metadata Charge"
        ],
        "source": "https://docs.jantolab.com/tr/features/battery-powerbank.html"
      },
      {
        "title": "Wallpaper modes",
        "body": "Players can set wallpapers for the home screen, lock screen, or both, using built-in packs, external links, or media already living inside the phone.",
        "chips": [
          "Built-in Packs",
          "URL Import",
          "Lock/Home Split"
        ],
        "source": "https://docs.jantolab.com/tr/phone/configuration/custom-wallpapers.html"
      }
    ]
  },
  "compatibilitySection": {
    "eyebrow": "Compatibility matrix",
    "title": "One codebase across serious server stacks.",
    "body": "The docs position Janto as a single phone ecosystem that spans major frameworks, inventory systems, garages, banking providers, voice stacks, and multiple languages.",
    "rows": [
      {
        "label": "Frameworks",
        "values": [
          "QBox",
          "QBCore",
          "ESX",
          "vRP (Experimental)",
          "Standalone"
        ]
      },
      {
        "label": "Inventory",
        "values": [
          "ox_inventory",
          "qb-inventory",
          "qs-inventory",
          "tgiann-inventory",
          "esx-inventory"
        ]
      },
      {
        "label": "Garages & Banking",
        "values": [
          "qbx-garages",
          "qb-garage",
          "cd-garage",
          "Renewed Banking",
          "QB Banking",
          "ESX Banking"
        ]
      },
      {
        "label": "Voice & Languages",
        "values": [
          "pma-voice",
          "SaltyChat",
          "English",
          "Turkish",
          "German",
          "Arabic"
        ]
      }
    ]
  },
  "performanceSection": {
    "eyebrow": "Performance and trust",
    "title": "Built for smooth, modern interaction.",
    "body": "Janto Phone pairs a modern React-based UI with optimization-focused architecture, low idle resmon usage, and sync patterns designed to stay fluid during active play.",
    "cards": [
      {
        "label": "Frontend",
        "value": "React + Vite",
        "body": "Fast iteration and cleaner rendering for a modern in-game mobile experience."
      },
      {
        "label": "Performance",
        "value": "Low Idle Resmon",
        "body": "Designed to keep the experience responsive without noisy overhead."
      },
      {
        "label": "Sync Model",
        "value": "Real-Time Aware",
        "body": "Sharing, live location, and interaction patterns are built for active server play."
      }
    ]
  },
  "ecosystemSection": {
    "eyebrow": "Ecosystem showcase",
    "title": "More than a phone UI.",
    "body": "Janto works best when it is framed as a living RP systems hub, not a cosmetic app grid.",
    "items": [
      {
        "title": "Communication",
        "body": "WhisApp, messages, voice notes, live location, contact cards."
      },
      {
        "title": "Social",
        "body": "Vibeshot posts, profiles, reactions, stories, and public identity."
      },
      {
        "title": "Media",
        "body": "Camera, gallery, mirroring, sharing, and content movement across apps."
      },
      {
        "title": "Finance",
        "body": "Fleeca Bank accounts, cards, balances, and cleaner money management."
      },
      {
        "title": "Vehicles",
        "body": "Garage views, owned vehicles, states, and access details in one pocket flow."
      },
      {
        "title": "Security",
        "body": "BioScan, passwords, metadata, and battery state that persist with the item."
      }
    ]
  },
  "faqSection": {
    "id": "faq",
    "backdropMode": "section-light-rays",
    "eyebrow": "FAQ",
    "title": "Questions server owners ask before they switch.",
    "items": [
      {
        "question": "What makes Janto feel different from a standard phone UI?",
        "answer": "The docs describe a full phone ecosystem, not just a launcher. Messages, WhisApp, Vibeshot, banking, garage, emergency, settings, vault, and battery all live on one owned device with persistent metadata."
      },
      {
        "question": "Is it built for serious RP servers?",
        "answer": "Yes. Item-level ownership, battery drain and powerbank support, location-aware emergency reporting, multi-account banking, and server-side system bridges make it fit deeper RP environments."
      },
      {
        "question": "Which live interaction layers are actually included?",
        "answer": "Docs call out voice notes, contact cards, replies, live location, link previews, reels, stories, live broadcasts, map sharing, screen mirroring, and location-aware emergency flows."
      },
      {
        "question": "How broad is the integration surface?",
        "answer": "Janto is documented across QBox, QBCore, ESX, vRP or standalone patterns, with support touching inventories, garages, banking providers, voice, media upload, logging, and multiple language layers."
      }
    ]
  },
  "finalCta": {
    "backdropMode": "footer-depth",
    "eyebrow": "Ready for rollout",
    "title": "Bring premium phone UX to your server.",
    "body": "Upgrade everyday RP with a modern in-game phone ecosystem built to feel right inside your world."
  }
},
  tr: {
  "brand": {
    "name": "Janto",
    "sublabel": "Lab",
    "logo": "/favicon.png"
  },
  "navLinks": [
    {
      "label": "Ozellikler",
      "href": "#features"
    },
    {
      "label": "Demo",
      "href": "#demo"
    },
    {
      "label": "SSS",
      "href": "#faq"
    }
  ],
  "ctas": {
    "primary": {
      "label": "Demoyu Izle",
      "href": "#demo",
      "tone": "beam"
    },
    "secondary": {
      "label": "Ozellikleri Kesfet",
      "href": "#features",
      "tone": "frost"
    },
    "discord": {
      "label": "Discord'a Katil",
      "href": "https://discord.gg/qW9bGKvQ9j",
      "tone": "glass"
    }
  },
  "hero": {
    "visualMode": "hero-grid-beams",
    "eyebrow": "Dokumanlarla dogrulanan FiveM telefon ekosistemi",
    "title": "Ciddi RP sunuculari icin yasayan bir telefon katmani.",
    "lead": "Janto Phone; mesajlasma, sosyal kimlik, bankacilik, garaj erisimi, acil durum dispatch akişi, kamera is akışlari, ayarlar, vault senkronu ve batarya kaliciligini tek bir bağlı mobil yuzeyde toplar. Kozmetik bir arayüz gibi degil, gerçekten sahip olunan bir cihaz gibi hissetmesi icin tasarlanmistir.",
    "signals": [
      {
        "kicker": "Baglar",
        "value": "İletişim, sosyal, finans, dispatch"
      },
      {
        "kicker": "Korur",
        "value": "Batarya, vault ve cihaz verisi"
      },
      {
        "kicker": "Hazir",
        "value": "QBox, QBCore, ESX ve fazlasi"
      }
    ],
    "ghostLeft": {
      "label": "İletişim Önizlemesi",
      "asset": "/captures/hero/ghost-calls.svg",
      "app": "Calls",
      "time": "21:37",
      "accent": "cyan",
      "badge": "Voice",
      "headline": "Arama, yanit ve kişi akişi",
      "copy": "Messages ve WhisApp; sesli not, kişi karti, cevap akişi, link önizlemesi ve canli konum pencereleriyle iletişimi gerçek bir oynanış katmanına dönüştürür.",
      "chips": [
        "Voice",
        "Contact Card",
        "Reply"
      ],
      "status": "Aramalar + konum yanitlari",
      "statLabel": "Aktif hat",
      "statValue": "4 baglanti aktif"
    },
    "ghostRight": {
      "label": "Dünya Etkilesimi",
      "asset": "/captures/hero/ghost-share.svg",
      "app": "QuickLink",
      "time": "21:39",
      "accent": "violet",
      "badge": "Share",
      "headline": "Yakin paylasim ve kanit anlari",
      "copy": "QuickLink, harita paylasimi ve yansitilan içerik; dünya etkilesimini menulere saklamak yerine ayni telefon yuzeyinde görünur tutar.",
      "chips": [
        "QuickLink",
        "Nearby",
        "Mirror"
      ],
      "status": "Paylasim + yansitma",
      "statLabel": "Yakin senkronizasyon",
      "statValue": "3 oyuncu bağlı"
    },
    "slides": [
      {
        "title": "Ana Ekran",
        "time": "10:15",
        "asset": "/captures/hero/homescreen-cropped.png",
        "overlayCopy": "İletişim, finans, medya, araçlar ve sistem kontrolunu tek sahip olunan cihazda birleştiren yoğun bir ana ekran.",
        "accent": "blue",
        "screenScale": 1.1,
        "screenOffsetY": 1
      },
      {
        "title": "Kilit Ekrani",
        "time": "21:37",
        "asset": "/captures/hero/lockscreen-cropped.png",
        "overlayCopy": "Bildirimler, batarya durumu ve oyuncuya bağlı telefon kimligiyle sahiplik hissini one cikan kilit ekran.",
        "accent": "cyan",
        "screenScale": 1.12,
        "screenOffsetY": 2
      },
      {
        "title": "Ayarlar Haritasi",
        "time": "14:23",
        "asset": "/captures/hero/settingsapp-cropped.png",
        "overlayCopy": "Baglantilar, bildirimler, sesler, temalar ve uygulama davranislari tek bir kontrol merkezinde toplanir.",
        "accent": "violet",
        "screenScale": 1.1,
        "screenOffsetY": 1
      },
      {
        "title": "Müzik Çalar",
        "time": "16:40",
        "asset": "/captures/hero/musicapp-cropped.png",
        "overlayCopy": "Arama, playlist, chart ve araç içi dinleme akışlariyla telefon gerçek bir medya katmanına dönüşür.",
        "accent": "pink",
        "screenScale": 1.1,
        "screenOffsetY": -2
      },
      {
        "title": "Garaj",
        "time": "18:05",
        "asset": "/captures/hero/garageapp-cropped.png",
        "overlayCopy": "Sahip olunan araçlar, impound durumu, yakit, motor ve govde bilgisi ayni telefon üzerinden yönetilir.",
        "accent": "orange",
        "screenScale": 1.08,
        "screenOffsetY": -1
      }
    ]
  },
  "trustItems": [
    "React + Vite UI",
    "Düşük Resmon Kullanımı",
    "Benzersiz Telefon Verileri",
    "Gerçek Zamanlı Paylaşım",
    "Ekran Yansıtma",
    "Çoklu Framework Hazır"
  ],
  "featuresSection": {
    "id": "features",
    "backdropMode": "section-light-rays",
    "surfaceTone": "frost",
    "eyebrow": "Temel uygulamalar ve sistemler",
    "title": "Tek ekosistem. Çoklu RP katmanı.",
    "body": "Janto Lab, iletişim, kimlik, finans, medya, araçlar ve acil durum sistemlerini sadece kozmetik bir eklenti yerine tek bir cihaz deneyiminde birleştirir.",
    "features": [
      {
        "icon": "W",
        "kicker": "Mesajlaşma",
        "title": "WhisApp",
        "body": "Medya paylaşımı, canlı konum ve daha zengin iletişim.",
        "previewAsset": "/captures/demo/demo-share.svg",
        "accentStyle": "cyan",
        "surfaceTone": "hero",
        "variant": "tall",
        "meta": [
          "Live location",
          "Voice",
          "Cards"
        ]
      },
      {
        "icon": "V",
        "kicker": "Sosyal",
        "title": "Vibeshot",
        "body": "Gönderiler, hikayeler, profiller, tepkiler.",
        "previewAsset": "/captures/showcase/social.svg",
        "accentStyle": "violet",
        "surfaceTone": "metal",
        "variant": "wide",
        "meta": [
          "Stories",
          "Mentions",
          "Live"
        ]
      },
      {
        "icon": "$",
        "kicker": "Finans",
        "title": "Fleeca Bank",
        "body": "Çoklu hesap görünümleri ve daha temiz akışlar.",
        "previewAsset": "/captures/hero/fleeca-bank.svg",
        "accentStyle": "blue",
        "surfaceTone": "frost",
        "variant": "standard",
        "meta": [
          "Cards",
          "Accounts",
          "Balance"
        ]
      },
      {
        "icon": "G",
        "kicker": "Araçlar",
        "title": "Garaj",
        "body": "Araçları doğrudan telefondan kontrol edin.",
        "previewAsset": "/captures/hero/garage.svg",
        "accentStyle": "steel",
        "surfaceTone": "metal",
        "variant": "standard",
        "meta": [
          "Owned vehicles",
          "Status",
          "Access"
        ]
      },
      {
        "icon": "C",
        "kicker": "Medya",
        "title": "Kamera & Galeri",
        "body": "Oyun içi anları yakalayın.",
        "previewAsset": "/captures/demo/demo-overview.svg",
        "accentStyle": "mint",
        "surfaceTone": "hero",
        "variant": "wide",
        "meta": [
          "Selfie",
          "Gallery",
          "Publishing"
        ]
      },
      {
        "icon": "E",
        "kicker": "Acil Durum",
        "title": "Acil Servis",
        "body": "Konum farkındalıklı acil destek.",
        "previewAsset": "/captures/showcase/world.svg",
        "accentStyle": "red",
        "surfaceTone": "frost",
        "variant": "standard",
        "meta": [
          "Alerts",
          "Dispatch",
          "Pins"
        ]
      }
    ],
    "chips": [
      "QuickLink",
      "BioScan Security",
      "Battery System",
      "Powerbank Support",
      "V Store",
      "Voice Notes",
      "Bridge Integrations",
      "Custom Wallpapers"
    ]
  },
  "highlightItems": [
    {
      "tone": "wide",
      "kicker": "Gerçek zamanlı katman",
      "title": "QuickLink etkileşimi.",
      "body": "Rotaları ve medyayı paylaşın.",
      "diagram": [
        "Phone",
        "Nearby players",
        "Shared world"
      ]
    },
    {
      "tone": "mirror",
      "kicker": "Yansıtma",
      "title": "Ekran yansıtma.",
      "body": "Kanıtlar ve medya aktarımı."
    },
    {
      "tone": "metadata",
      "kicker": "Sahiplik",
      "title": "Kalıcı veriler.",
      "body": "Batarya, numara korunur."
    },
    {
      "tone": "soft",
      "kicker": "Geliştirici dostu",
      "title": "Uyumlu mimari.",
      "body": "Çoklu framework yapısı."
    }
  ],
  "demoSection": {
    "id": "demo",
    "backdropMode": "section-light-rays",
    "eyebrow": "Dokuman destekli canli yuruyus",
    "title": "Bu telefonun bir kaplama degil, oyun sistemi oldugunu görün.",
    "body": "Resmi dokümanlar Janto'yu bağlı bir cihaz akişi olarak konumluyor: Messages ve WhisApp ile iletişim, Vibeshot ile sosyal kimlik, Fleeca Bank ile para hareketi, Garaj ve Acil ile dünya sistemleri, Settings, Vault ve Battery ile gerçek sahiplik.",
    "videoEmbed": "https://www.youtube.com/embed/UlY6Uc65NMo?start=1&rel=0",
    "videoHref": "https://www.youtube.com/watch?v=UlY6Uc65NMo&t=1s",
    "videoTitle": "Janto Phone tanitim videosu",
    "note": "Resmi dokümanlarda promo videonun tum özellikleri gostermedigi belirtiliyor; yeni yetenekler ve arayüz guncellemeleri dokümanlarda ve showcase sunucusunda daha detayli yer aliyor.",
    "items": [
      {
        "title": "Derinlikli iletişim akişi",
        "type": "WhisApp akişi",
        "accent": "cyan",
        "thumbnail": "/captures/demo/demo-overview.svg",
        "source": "Test sunucusu + dokuman hibriti",
        "caption": "Messages ve WhisApp; medya paylasimi, sesli not, kişi karti, cevap akişi, link önizlemesi ve canli konumu ayni telefon yuzeyinde birlestirir.",
        "signals": [
          "Mesajlasma",
          "Sesli not",
          "Canli konum"
        ]
      },
      {
        "title": "Dünya paylasimi ve yansitilan kanit",
        "type": "QuickLink + yansitma",
        "accent": "violet",
        "thumbnail": "/captures/demo/demo-share.svg",
        "source": "Capture-ready sahne",
        "caption": "QuickLink, harita paylasimi ve yansitilan içerik; aktif RP anlarinda yakin etkilesimi okunur tutar.",
        "signals": [
          "QuickLink",
          "Yansitma",
          "Yakin kanit"
        ]
      },
      {
        "title": "Profil, hikaye ve canli kimlik katmani",
        "type": "Vibeshot",
        "accent": "orange",
        "thumbnail": "/captures/demo/demo-vibeshot.svg",
        "source": "Hibrit showcase",
        "caption": "Vibeshot; gönderi, reels, hikaye, etiketleme, muzik etiketi, canli yayın ve sosyal kimlik akişini tek yerde toplar.",
        "signals": [
          "Profiller",
          "Hikayeler",
          "Tepkiler"
        ]
      }
    ],
    "chapters": [
      {
        "label": "WhisApp",
        "detail": "Sesli not, kişi karti, cevap zinciri, link önizlemesi ve canli konum pencereleri."
      },
      {
        "label": "Vibeshot",
        "detail": "Carousel gönderiler, reels, hikayeler, canli yayınlar ve reaksiyon odakli sosyal RP."
      },
      {
        "label": "Dünya sistemleri",
        "detail": "Garaj durumu, dispatch baglantili acil cagri, bankacilik ve navigasyon ayni cihazdan yönetilir."
      }
    ]
  },
  "showcaseSection": {
    "backdropMode": "section-light-rays",
    "eyebrow": "Sticky UI deep dive",
    "title": "Product storytelling that proves the promise.",
    "body": "Scroll through the parts that make the phone feel complete: communication, social identity, world interaction, and real ownership.",
    "steps": [
      {
        "label": "Communication",
        "index": "01",
        "contentType": "communication",
        "headline": "Communication that feels complete.",
        "body": "From fast messaging to media, voice notes, and live location sharing, communication becomes a real gameplay layer.",
        "screenAsset": "/captures/showcase/communication.svg",
        "caption": "Voice notes, route sharing, live location, and contact cards remain visible as one communication surface.",
        "chips": [
          "Voice Notes",
          "Live Location",
          "Contact Cards"
        ]
      },
      {
        "label": "Social & Identity",
        "index": "02",
        "contentType": "social",
        "headline": "A social life built into your server.",
        "body": "Profiles, posts, stories, comments, music tags, and identity-driven interactions make the world feel alive.",
        "screenAsset": "/captures/showcase/social.svg",
        "caption": "Profiles, posts, stories, and reactions create an identity layer that feels lived-in instead of decorative.",
        "chips": [
          "Profiles",
          "Stories",
          "Reactions"
        ]
      },
      {
        "label": "World Interaction",
        "index": "03",
        "contentType": "world",
        "headline": "Your server systems, in one pocket-sized interface.",
        "body": "Handle vehicles, banking, emergency flows, and live world interactions without leaving the roleplay surface.",
        "screenAsset": "/captures/showcase/world.svg",
        "caption": "Vehicle state, finance access, emergency triggers, and live map context sit inside a single touch surface.",
        "chips": [
          "Bank",
          "Garage",
          "Emergency"
        ]
      },
      {
        "label": "Ownership",
        "index": "04",
        "contentType": "ownership",
        "headline": "A phone that behaves like a real item.",
        "body": "Unique ownership, persistent battery logic, BioScan security, and metadata give the device real in-world weight.",
        "screenAsset": "/captures/showcase/ownership.svg",
        "caption": "Metadata, battery, security, and ownership history persist with the item rather than disappearing behind the UI.",
        "chips": [
          "Metadata",
          "Battery",
          "BioScan"
        ]
      }
    ]
  },
  "metadataSection": {
    "eyebrow": "Real ownership",
    "title": "Not just a UI. A real phone item.",
    "body": "Each phone can carry its own number, media, data, battery state, and ownership history so the device becomes part of the world instead of a temporary overlay.",
    "points": [
      "Unique metadata per device",
      "Persistent battery and security state",
      "Inventory-friendly ownership logic",
      "Transfer feel that stays immersive"
    ],
    "stats": [
      {
        "label": "Owner",
        "value": "Jordan Vale"
      },
      {
        "label": "Number",
        "value": "(555) 014-871"
      },
      {
        "label": "Battery",
        "value": "82%"
      },
      {
        "label": "BioScan",
        "value": "Enabled"
      },
      {
        "label": "Linked apps",
        "value": "12 active"
      }
    ]
  },
  "customizationSection": {
    "eyebrow": "Customization",
    "title": "Make the phone feel personal.",
    "body": "From wallpapers and layouts to app choices and identity details, the phone adapts to the player instead of feeling static.",
    "themes": [
      {
        "key": "cyan",
        "label": "Neon Cyan",
        "note": "Signature glow"
      },
      {
        "key": "ember",
        "label": "Ember Red",
        "note": "Urgent contrast"
      },
      {
        "key": "aurora",
        "label": "Aurora Mint",
        "note": "Soft premium tone"
      }
    ],
    "wallpaperModes": [
      "Home Screen",
      "Lock Screen",
      "Both"
    ],
    "widgets": [
      {
        "label": "Layout",
        "value": "Adaptive dock"
      },
      {
        "label": "Wallpapers",
        "value": "Link + gallery"
      },
      {
        "label": "Identity",
        "value": "Player-owned"
      }
    ],
    "apps": [
      {
        "name": "Chat",
        "kicker": "Messages"
      },
      {
        "name": "Bank",
        "kicker": "Finance"
      },
      {
        "name": "Garage",
        "kicker": "Vehicles"
      },
      {
        "name": "V Store",
        "kicker": "Marketplace"
      },
      {
        "name": "Gallery",
        "kicker": "Media"
      },
      {
        "name": "Emergency",
        "kicker": "Response"
      }
    ]
  },
  "docsFeatureSection": {
    "eyebrow": "Docs-backed capabilities",
    "title": "Features that go beyond the first video pass.",
    "body": "Janto's documentation fills in the parts the promo video does not fully show: richer social loops, deeper camera workflows, persistent battery logic, and modern WebRTC-based interaction.",
    "cards": [
      {
        "title": "WhisApp depth",
        "body": "Docs call out live location cards, fixed location pins, link previews, contact cards, reactions, reply/forward flow, and group/community structures.",
        "chips": [
          "Live Location 1h/8h",
          "Contact Card",
          "Reply & Forward"
        ],
        "source": "https://docs.jantolab.com/tr/features/whisapp.html"
      },
      {
        "title": "Vibeshot realism",
        "body": "Carousel posts, reels, live streams, stories with draggable stickers, music tags, mentions, and verified profile controls make the social layer feel complete.",
        "chips": [
          "Reels",
          "Stories",
          "Live",
          "Mentions"
        ],
        "source": "https://docs.jantolab.com/tr/features/vibeshot.html"
      },
      {
        "title": "Camera-native workflow",
        "body": "Rear camera, selfie mode, vehicle support, auto focus, screenshots, and direct publishing into Gallery, WhisApp, Vibeshot, Ads, and profile flows are all documented.",
        "chips": [
          "Selfie",
          "Vehicle Camera",
          "Gallery Save"
        ],
        "source": "https://docs.jantolab.com/tr/features/camera.html"
      },
      {
        "title": "WebRTC layer",
        "body": "Video calls, Vibeshot live streams, and nearby screen share are documented as WebRTC-based, low-latency, and built to minimize server traffic.",
        "chips": [
          "Video Call",
          "Instagram Live",
          "Screen Share"
        ],
        "source": "https://docs.jantolab.com/tr/phone/configuration/webrtc.html"
      },
      {
        "title": "Persistent battery logic",
        "body": "Battery drains during use, survives restarts via metadata, charges in vehicles, and can be topped up from a separate powerbank item with its own charge state.",
        "chips": [
          "Vehicle Charge",
          "Powerbank",
          "Metadata Charge"
        ],
        "source": "https://docs.jantolab.com/tr/features/battery-powerbank.html"
      },
      {
        "title": "Wallpaper modes",
        "body": "Players can set wallpapers for the home screen, lock screen, or both, using built-in packs, external links, or media already living inside the phone.",
        "chips": [
          "Built-in Packs",
          "URL Import",
          "Lock/Home Split"
        ],
        "source": "https://docs.jantolab.com/tr/phone/configuration/custom-wallpapers.html"
      }
    ]
  },
  "compatibilitySection": {
    "eyebrow": "Geliştirici uyumu",
    "title": "Kusursuz entegrasyon.",
    "body": "Dokumanlar Janto'yu; buyuk frameworkler, envanter sistemleri, garajlar, bankacilik saglayicilari, ses altyapilari ve birden fazla dili kapsayan tek bir telefon ekosistemi olarak konumluyor.",
    "rows": [
      {
        "label": "Frameworkler",
        "values": [
          "QBox",
          "QBCore",
          "ESX",
          "vRP (Experimental)",
          "Standalone"
        ]
      },
      {
        "label": "Envanter",
        "values": [
          "ox_inventory",
          "qb-inventory",
          "qs-inventory",
          "tgiann-inventory",
          "esx-inventory"
        ]
      },
      {
        "label": "Garaj ve Bankacilik",
        "values": [
          "qbx-garages",
          "qb-garage",
          "cd-garage",
          "Renewed Banking",
          "QB Banking",
          "ESX Banking"
        ]
      },
      {
        "label": "Ses ve Diller",
        "values": [
          "pma-voice",
          "SaltyChat",
          "Ingilizce",
          "Turkce",
          "Almanca",
          "Arapca"
        ]
      }
    ]
  },
  "performanceSection": {
    "eyebrow": "Performance and trust",
    "title": "Built for smooth, modern interaction.",
    "body": "Janto Lab pairs a modern React-based UI with optimization-focused architecture, low idle resmon usage, and sync patterns designed to stay fluid during active play.",
    "cards": [
      {
        "label": "Frontend",
        "value": "React + Vite",
        "body": "Fast iteration and cleaner rendering for a modern in-game mobile experience."
      },
      {
        "label": "Performance",
        "value": "Low Idle Resmon",
        "body": "Designed to keep the experience responsive without noisy overhead."
      },
      {
        "label": "Sync Model",
        "value": "Real-Time Aware",
        "body": "Sharing, live location, and interaction patterns are built for active server play."
      }
    ]
  },
  "ecosystemSection": {
    "eyebrow": "Ecosystem showcase",
    "title": "More than a phone UI.",
    "body": "Janto works best when it is framed as a living RP systems hub, not a cosmetic app grid.",
    "items": [
      {
        "title": "Communication",
        "body": "WhisApp, messages, voice notes, live location, contact cards."
      },
      {
        "title": "Social",
        "body": "Vibeshot posts, profiles, reactions, stories, and public identity."
      },
      {
        "title": "Media",
        "body": "Camera, gallery, mirroring, sharing, and content movement across apps."
      },
      {
        "title": "Finance",
        "body": "Fleeca Bank accounts, cards, balances, and cleaner money management."
      },
      {
        "title": "Vehicles",
        "body": "Garage views, owned vehicles, states, and access details in one pocket flow."
      },
      {
        "title": "Security",
        "body": "BioScan, passwords, metadata, and battery state that persist with the item."
      }
    ]
  },
  "faqSection": {
    "id": "faq",
    "backdropMode": "section-light-rays",
    "eyebrow": "Sıkça Sorulan Sorular",
    "title": "Sunucu sahiplerinin gecmeden once sordugu sorular.",
    "items": [
      {
        "question": "Janto'yu standart bir telefon arayüzunden ayiran sey ne?",
        "answer": "Dokumanlar Janto'yu yalnizca bir launcher gibi degil; Messages, WhisApp, Vibeshot, banka, garaj, acil durum, ayarlar, vault ve bataryayi tek sahip olunan cihazda birleştiren tam bir telefon ekosistemi olarak konumlandiriyor."
      },
      {
        "question": "Ciddi RP sunucuları için uygun mu?",
        "answer": "Evet. Item seviyesinde sahiplik, batarya dususu ve powerbank destegi, konum farkindalikli acil bildirim, coklu hesap bankaciligi ve sunucu tarafli bridge entegrasyonlari daha derin RP sunucularina uygun bir temel kurar."
      },
      {
        "question": "Hangi canli etkilesim katmanlari gerçekten var?",
        "answer": "Dokumanlarda sesli not, kişi karti, cevap akişi, canli konum, link önizlemesi, reels, hikayeler, canli yayınlar, harita paylasimi, ekran yansitma ve konum odakli acil durum akışlari acikca yer aliyor."
      },
      {
        "question": "Entegrasyon kapsami ne kadar genis?",
        "answer": "Janto; QBox, QBCore, ESX, vRP ve standalone yapilarla birlikte envanter, garaj, bankacilik, ses, medya upload, log ve birden fazla dil katmanına dokunan genis bir entegrasyon yuzeyi sunar."
      }
    ]
  },
  "finalCta": {
    "backdropMode": "footer-depth",
    "eyebrow": "Yayina hazir",
    "title": "Sunucuna premium telefon deneyimi getir.",
    "body": "Dünyana dogru sekilde oturan modern bir oyun ici telefon ekosistemiyle gunluk RP deneyimini yukselt."
  }
}
};
