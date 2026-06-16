export const en = {
  site: {
    title: "Agent Skills",
    subtitle: "Agent Skill Reference",
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
    line1: "Agent Skills Reference · {count} skills across {cats} categories",
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
  allSkills: "All Skills",
};

export const id: typeof en = {
  site: {
    title: "Agent Skills",
    subtitle: "Referensi Skill Agent",
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
      "Referensi Agent Skills · {count} skill di {cats} kategori",
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
  allSkills: "Semua Skill",
};

export type Locale = "en" | "id";
export const translations = { en, id };
