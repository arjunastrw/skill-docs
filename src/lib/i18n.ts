export const en = {
  nav: {
    start: "Start",
    skills: "Skills",
    mcp: "MCP",
    models: "Models",
    config: "Config",
    prompts: "Prompts",
    templates: "Templates",
    search: "Search across Agent Hub...",
  },
  site: {
    title: "Agent Hub",
    subtitle: "Agent Reference",
    description:
      "103 specialized agent skills for software engineering, media generation, design, and tooling. Each skill provides exact instructions and workflows for a specific task.",
  },
  search: {
    placeholder: "Search skills...",
  },
  filter: {
    all: "All",
  },
  skill: {
    triggers: "Trigger Phrases",
    whenToUse: "When To Use",
    combosWith: "Combos With",
    usedTogetherBy: "Used Together By",
    noTriggers: "No specific triggers",
    noSkillsFound: "No skills found",
    noSkillsHint: "Try a different search term or category filter.",
  },
  combos: {
    title: "Skill Combinations",
    description:
      "Common scenarios and which skills work best together. Each combo forms a complete workflow for a real task.",
  },
  footer: {
    line1: "Agent Hub · {count} skills across {cats} categories",
    line2: "Deploy via GitHub Pages",
  },
  categories: {
    process: "Process & Workflow",
    design: "Design & Visual",
    "media-gen": "Media Generation",
    code: "Code & Engineering",
    tooling: "Tooling & Infrastructure",
    docs: "Documents & Writing",
  },
  comboScenarios: {
    "Building a new feature from scratch":
      "Full feature lifecycle: design → plan → implement with TDD → review → merge.",
    "Fixing a hard bug":
      "Scientific debugging loop: reproduce, minimize, fix, verify with tests.",
    "Creating a landing page":
      "Design-first approach: brainstorm → generate design refs → implement faithfully.",
    "Generating AI media (images/video/music)":
      "Route through smart catalog routers that pick the best model for each task.",
    "Creating a presentation or document":
      "Plan content → create slides with theme → export to PDF.",
    "Deploying to production":
      "Verify everything passes → deploy → optimize for cost and performance.",
    "Setting up a new project":
      "Configure agent context → design architecture → isolate workspace → set up UI.",
    "Writing documentation":
      "Structured co-authoring → review for style → export to polished format.",
    "Code review cycle":
      "Request review → process feedback rigorously → verify fixes before claiming done.",
    "Architecture improvement":
      "Zoom out to see big picture → find deepening opportunities → stress-test against docs.",
    "Managing issues and triage":
      "Convert plans to issues → triage incoming items → manage workflow states.",
    "Creating an AI avatar or talking head video":
      "Generate avatar → sync lips to audio → optionally swap face identity.",
  },
  comboScenarioTitles: {
    "Building a new feature from scratch": "Building a new feature from scratch",
    "Fixing a hard bug": "Fixing a hard bug",
    "Creating a landing page": "Creating a landing page",
    "Generating AI media (images/video/music)": "Generating AI media (images/video/music)",
    "Creating a presentation or document": "Creating a presentation or document",
    "Deploying to production": "Deploying to production",
    "Setting up a new project": "Setting up a new project",
    "Writing documentation": "Writing documentation",
    "Code review cycle": "Code review cycle",
    "Architecture improvement": "Architecture improvement",
    "Managing issues and triage": "Managing issues and triage",
    "Creating an AI avatar or talking head video": "Creating an AI avatar or talking head video",
  },
  allSkills: "All Skills",
  start: {
    title: "Get Started",
    subtitle: "Agent CLI Comparison",
    description:
      "Compare the most popular AI agent CLIs. Find the right tool for your workflow — whether you prefer terminal-native, IDE-integrated, or open-source solutions.",
    tableHeaders: {
      cli: "CLI",
      vendor: "Vendor",
      platform: "Platform",
      pricing: "Pricing",
      install: "Install",
      features: "Key Features",
    },
    installGuides: "Install Guides",
    installGuidesDesc: "Quick setup for each agent CLI. Copy the install command to get started in seconds.",
    authSetup: "Auth Setup",
    quickStart: "Quick Start",
    docs: "Docs",
  },
  mcp: {
    title: "MCP Servers",
    subtitle: "Model Context Protocol Servers",
    description:
      "Extend your agent's capabilities with MCP servers. Browse available servers for file operations, databases, APIs, browsers, search, and more.",
    searchPlaceholder: "Search MCP servers...",
    install: "Install",
    envVars: "Environment Variables",
    useCases: "Use Cases",
    noServersFound: "No MCP servers found",
    noServersHint: "Try a different search term or category filter.",
    allServers: "All Servers",
    buildGuide: "Build Your Own MCP Server",
    buildGuideDesc:
      "Create custom MCP servers in Python or Node.js. Follow the step-by-step guide below.",
  },
  models: {
    title: "AI Models",
    subtitle: "Model Comparison",
    description:
      "Compare AI models across providers. Context windows, pricing, benchmarks, and best use cases — find the right model for your agent.",
    searchPlaceholder: "Search models...",
    tableHeaders: {
      model: "Model",
      provider: "Provider",
      context: "Context",
      pricing: "Pricing (Input/Output per 1M tokens)",
      modalities: "Modalities",
      bench: "Benchmarks",
    },
    strengths: "Strengths",
    bestUseCases: "Best Use Cases",
    noModelsFound: "No models found",
    noModelsHint: "Try a different search term or provider filter.",
    allModels: "All Models",
  },
  config: {
    title: "Agent Config",
    subtitle: "Configuration Reference",
    description:
      "How to configure each agent CLI. File locations, formats, sections, and best practices — set up your agent once, use it everywhere.",
    searchPlaceholder: "Search by CLI name...",
    sections: "Sections",
    bestPractices: "Best Practices",
    noConfigFound: "No configuration found",
    noConfigHint: "Try a different search term.",
    comparisonTitle: "Side-by-Side Comparison",
    comparisonDesc: "Equivalent config files across different agent CLIs.",
  },
  globalSearch: {
    placeholder: "Search across Agent Hub...",
    noResults: "No results found",
    noResultsHint: "Try a different search term.",
    sections: {
      cli: "Agent CLIs",
      skills: "Skills",
      mcp: "MCP Servers",
      models: "AI Models",
      config: "Config",
    },
  },
  prompts: {
    title: "Prompts",
    subtitle: "Prompt Templates",
    description:
      "Curated prompt templates for AI agents. Copy and use these prompts with any compatible CLI. Community-contributed and tested.",
    searchPlaceholder: "Search prompts...",
    copy: "Copy",
    copied: "Copied",
    compatibleCLIs: "Compatible CLIs",
    noPromptsFound: "No prompts found",
    noPromptsHint: "Try a different search term or category filter.",
    allPrompts: "All Prompts",
    contributor: "Contributed by",
  },
  templates: {
    title: "Templates",
    subtitle: "Agent Templates",
    description:
      "Ready-to-use agent configuration templates. Copy a config, place it in your project, and your agent is set up for a specific role.",
    searchPlaceholder: "Search by CLI...",
    role: "Role",
    howToUse: "How to Use",
    noTemplatesFound: "No templates found",
    noTemplatesHint: "Try a different search term or CLI filter.",
    allTemplates: "All Templates",
    contributor: "Contributed by",
  },
  request: {
    title: "Request Content",
    subtitle: "Submit a Request",
    description:
      "Request new content for Agent Hub. Skills, MCP servers, AI models, CLIs, prompts, or templates — the community votes and contributors pick them up.",
    selectType: "What do you want to request?",
    typeSkill: "Agent Skill",
    typeMCP: "MCP Server",
    typeModel: "AI Model",
    typeCLI: "Agent CLI",
    typePrompt: "Prompt Template",
    typeTemplate: "Agent Template",
    nameLabel: "Name",
    namePlaceholder: "e.g., Super Debugger Skill",
    descLabel: "Description",
    descPlaceholder: "What it does and why it should be in Agent Hub...",
    previewIssue: "Preview Issue",
    openIssue: "Open GitHub Issue",
    howItWorks: "How It Works",
    howItWorksDesc:
      "Submit a request via GitHub issue. The community can vote with 👍 reactions. Contributors pick top-voted requests to implement.",
  },
};

export const id: typeof en = {
  nav: {
    start: "Mulai",
    skills: "Skill",
    mcp: "MCP",
    models: "Model",
    config: "Konfigurasi",
    prompts: "Prompt",
    templates: "Template",
    search: "Cari di Agent Hub...",
  },
  site: {
    title: "Agent Hub",
    subtitle: "Referensi Agent",
    description:
      "103 skill agent khusus untuk rekayasa perangkat lunak, generasi media, desain, dan perkakas. Setiap skill menyediakan instruksi dan alur kerja yang tepat untuk tugas tertentu.",
  },
  search: {
    placeholder: "Cari skill...",
  },
  filter: {
    all: "Semua",
  },
  skill: {
    triggers: "Frasa Pemicu",
    whenToUse: "Kapan Digunakan",
    combosWith: "Kombinasi Dengan",
    usedTogetherBy: "Digunakan Bersama Oleh",
    noTriggers: "Tidak ada pemicu spesifik",
    noSkillsFound: "Skill tidak ditemukan",
    noSkillsHint:
      "Coba istilah pencarian atau filter kategori yang berbeda.",
  },
  combos: {
    title: "Kombinasi Skill",
    description:
      "Skenario umum dan skill mana yang paling cocok digunakan bersama. Setiap kombinasi membentuk alur kerja lengkap untuk tugas nyata.",
  },
  footer: {
    line1:
      "Agent Hub · {count} skill di {cats} kategori",
    line2: "Deploy via GitHub Pages",
  },
  categories: {
    process: "Proses & Alur Kerja",
    design: "Desain & Visual",
    "media-gen": "Generasi Media",
    code: "Kode & Rekayasa",
    tooling: "Perkakas & Infrastruktur",
    docs: "Dokumen & Penulisan",
  },
  comboScenarios: {
    "Building a new feature from scratch":
      "Siklus fitur lengkap: desain → rencana → implementasi dengan TDD → review → merge.",
    "Fixing a hard bug":
      "Loop debugging ilmiah: reproduksi, minimalisasi, perbaiki, verifikasi dengan tes.",
    "Creating a landing page":
      "Pendekatan desain-pertama: brainstorming → hasilkan referensi desain → implementasi setia.",
    "Generating AI media (images/video/music)":
      "Rute melalui router katalog cerdas yang memilih model terbaik untuk setiap tugas.",
    "Creating a presentation or document":
      "Rencanakan konten → buat slide dengan tema → ekspor ke PDF.",
    "Deploying to production":
      "Verifikasi semua lolos → deploy → optimalkan biaya dan performa.",
    "Setting up a new project":
      "Konfigurasi konteks agent → desain arsitektur → isolasi workspace → atur UI.",
    "Writing documentation":
      "Co-authoring terstruktur → review gaya → ekspor ke format yang rapi.",
    "Code review cycle":
      "Minta review → proses umpan balik dengan ketat → verifikasi perbaikan sebelum klaim selesai.",
    "Architecture improvement":
      "Zoom out lihat gambaran besar → temukan peluang pendalaman → uji stres terhadap dokumen.",
    "Managing issues and triage":
      "Konversi rencana ke issues → triase item masuk → kelola status alur kerja.",
    "Creating an AI avatar or talking head video":
      "Hasilkan avatar → sinkronkan bibir ke audio → opsional tukar identitas wajah.",
  },
  comboScenarioTitles: {
    "Building a new feature from scratch": "Membangun fitur baru dari awal",
    "Fixing a hard bug": "Memperbaiki bug sulit",
    "Creating a landing page": "Membuat landing page",
    "Generating AI media (images/video/music)": "Menghasilkan media AI (gambar/video/musik)",
    "Creating a presentation or document": "Membuat presentasi atau dokumen",
    "Deploying to production": "Deploy ke production",
    "Setting up a new project": "Menyiapkan proyek baru",
    "Writing documentation": "Menulis dokumentasi",
    "Code review cycle": "Siklus code review",
    "Architecture improvement": "Perbaikan arsitektur",
    "Managing issues and triage": "Mengelola issues dan triase",
    "Creating an AI avatar or talking head video": "Membuat avatar AI atau video talking head",
  },
  allSkills: "Semua Skill",
  start: {
    title: "Mulai",
    subtitle: "Perbandingan Agent CLI",
    description:
      "Bandingkan AI agent CLI paling populer. Temukan alat yang tepat untuk alur kerja Anda — baik terminal-native, IDE-integrated, maupun open-source.",
    tableHeaders: {
      cli: "CLI",
      vendor: "Vendor",
      platform: "Platform",
      pricing: "Harga",
      install: "Install",
      features: "Fitur Utama",
    },
    installGuides: "Panduan Install",
    installGuidesDesc:
      "Setup cepat untuk setiap agent CLI. Salin perintah install untuk memulai dalam hitungan detik.",
    authSetup: "Pengaturan Auth",
    quickStart: "Mulai Cepat",
    docs: "Dokumentasi",
  },
  mcp: {
    title: "Server MCP",
    subtitle: "Server Model Context Protocol",
    description:
      "Perluas kemampuan agent Anda dengan server MCP. Jelajahi server yang tersedia untuk operasi file, database, API, browser, pencarian, dan lainnya.",
    searchPlaceholder: "Cari server MCP...",
    install: "Install",
    envVars: "Variabel Lingkungan",
    useCases: "Kasus Penggunaan",
    noServersFound: "Server MCP tidak ditemukan",
    noServersHint:
      "Coba istilah pencarian atau filter kategori yang berbeda.",
    allServers: "Semua Server",
    buildGuide: "Buat Server MCP Sendiri",
    buildGuideDesc:
      "Buat server MCP kustom dengan Python atau Node.js. Ikuti panduan langkah demi langkah di bawah.",
  },
  models: {
    title: "AI Models",
    subtitle: "Model Comparison",
    description:
      "Compare AI models across providers. Context windows, pricing, benchmarks, and best use cases — find the right model for your agent.",
    searchPlaceholder: "Search models...",
    tableHeaders: {
      model: "Model",
      provider: "Provider",
      context: "Context",
      pricing: "Pricing (Input/Output per 1M tokens)",
      modalities: "Modalities",
      bench: "Benchmarks",
    },
    strengths: "Strengths",
    bestUseCases: "Best Use Cases",
    noModelsFound: "No models found",
    noModelsHint: "Try a different search term or provider filter.",
    allModels: "All Models",
  },
  config: {
    title: "Agent Config",
    subtitle: "Configuration Reference",
    description:
      "How to configure each agent CLI. File locations, formats, sections, and best practices — set up your agent once, use it everywhere.",
    searchPlaceholder: "Search by CLI name...",
    sections: "Sections",
    bestPractices: "Best Practices",
    noConfigFound: "No configuration found",
    noConfigHint: "Try a different search term.",
    comparisonTitle: "Side-by-Side Comparison",
    comparisonDesc: "Equivalent config files across different agent CLIs.",
  },
  globalSearch: {
    placeholder: "Search across Agent Hub...",
    noResults: "No results found",
    noResultsHint: "Try a different search term.",
    sections: {
      cli: "Agent CLIs",
      skills: "Skills",
      mcp: "MCP Servers",
      models: "AI Models",
      config: "Config",
    },
  },
  prompts: {
    title: "Prompt",
    subtitle: "Template Prompt",
    description:
      "Template prompt terkurasi untuk AI agent. Salin dan gunakan prompt ini dengan CLI yang kompatibel. Kontribusi dan teruji oleh komunitas.",
    searchPlaceholder: "Cari prompt...",
    copy: "Salin",
    copied: "Tersalin",
    compatibleCLIs: "CLI Kompatibel",
    noPromptsFound: "Prompt tidak ditemukan",
    noPromptsHint:
      "Coba istilah pencarian atau filter kategori yang berbeda.",
    allPrompts: "Semua Prompt",
    contributor: "Kontributor",
  },
  templates: {
    title: "Template",
    subtitle: "Template Agent",
    description:
      "Template konfigurasi agent siap pakai. Salin config, letakkan di proyek, dan agent Anda siap untuk peran tertentu.",
    searchPlaceholder: "Cari berdasarkan CLI...",
    role: "Peran",
    howToUse: "Cara Menggunakan",
    noTemplatesFound: "Template tidak ditemukan",
    noTemplatesHint:
      "Coba istilah pencarian atau filter CLI yang berbeda.",
    allTemplates: "Semua Template",
    contributor: "Kontributor",
  },
  request: {
    title: "Request Konten",
    subtitle: "Kirim Permintaan",
    description:
      "Minta konten baru untuk Agent Hub. Skill, server MCP, model AI, CLI, prompt, atau template — komunitas vote dan kontributor yang mengerjakan.",
    selectType: "Apa yang ingin Anda minta?",
    typeSkill: "Skill Agent",
    typeMCP: "Server MCP",
    typeModel: "Model AI",
    typeCLI: "Agent CLI",
    typePrompt: "Template Prompt",
    typeTemplate: "Template Agent",
    nameLabel: "Nama",
    namePlaceholder: "contoh: Skill Super Debugger",
    descLabel: "Deskripsi",
    descPlaceholder: "Apa fungsinya dan mengapa harus ada di Agent Hub...",
    previewIssue: "Pratinjau Issue",
    openIssue: "Buka GitHub Issue",
    howItWorks: "Cara Kerja",
    howItWorksDesc:
      "Kirim permintaan melalui GitHub issue. Komunitas bisa vote dengan reaksi 👍. Kontributor mengerjakan permintaan teratas.",
  },
};

export type Locale = "en" | "id";
export const translations = { en, id };
