export type SupportChatAction =
  | "scroll_contact"
  | "scroll_cases"
  | "scroll_process"
  | "scroll_services"
  | "scroll_about"
  | "scroll_tech"
  | "scroll_ai"
  | "scroll_industries"
  | "scroll_web"
  | "scroll_mobile"
  | "scroll_cloud"
  | "close"
  | "copy_email";

export type SupportChatOption = {
  label: string;
  next?: string;
  action?: SupportChatAction;
};

export type SupportChatNode = {
  message: string;
  options: SupportChatOption[];
};

export const SUPPORT_CHAT_START = "start";

export const SUPPORT_CHAT_LOOP = "loop_end";

export const SUPPORT_CHAT_AFTER_CTA = "after_cta";

export const SUPPORT_CHAT_FLOW: Record<string, SupportChatNode> = {
  start: {
    message:
      "Hi — I am the Zensolt Consultants support assistant.\n\nAsk about our services, tech stack, pricing in INR, process, industries, case studies, or how to reach us — all grounded in what is on this site. Tap an option below.",
    options: [
      { label: "Services & what we build", next: "menu_services" },
      { label: "Tech stack & tools", next: "menu_tech" },
      { label: "About Zensolt", next: "menu_about_co" },
      { label: "Web, mobile & cloud pillars", next: "menu_caps" },
      { label: "AI / ML solutions", next: "menu_ai_hub" },
      { label: "Industries we serve", next: "menu_industries_hub" },
      { label: "Case studies", next: "menu_cases_hub" },
      { label: "Starting or scoping a project", next: "menu_project" },
      { label: "Pricing, budgets & timelines", next: "menu_pricing" },
      { label: "How we work (process)", next: "menu_process" },
      { label: "Contact & location", next: "menu_contact" },
    ],
  },

  /* ─── Services (9 lines + DevOps) ─────────────────────── */
  menu_services: {
    message:
      "We cover the full lifecycle: web, mobile, APIs, cloud, DevOps, AI/ML, real-time, consulting, and production support. Pick a line for a short summary — wording matches our Services section.",
    options: [
      { label: "01 Web — React, Next.js, TypeScript", next: "svc_web" },
      { label: "02 Mobile — React Native & Flutter", next: "svc_mobile" },
      { label: "03 Backend & APIs — Node, NestJS", next: "svc_backend" },
      { label: "04 Cloud infrastructure — AWS-first", next: "svc_cloud" },
      { label: "05 DevOps & CI/CD", next: "svc_devops" },
      { label: "06 AI/ML solutions", next: "svc_ai" },
      { label: "07 Real-time — WebRTC, WebSockets", next: "svc_realtime" },
      { label: "08 Tech consulting", next: "svc_consult" },
      { label: "09 Production support", next: "svc_support" },
      { label: "← Main menu", next: "start" },
    ],
  },

  svc_web: {
    message:
      "Web Application Development\n\nReact, Next.js, and TypeScript apps built for production: App Router, SSR/ISR, edge routes, and performance budgets you can measure.\n\nTags we highlight: Next.js, React, TypeScript.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      {
        label: "Web capability pillar on page",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_web",
      },
      {
        label: "Contact / start a thread",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_mobile: {
    message:
      "Mobile App Development\n\nReact Native and Flutter with Expo, native bridges, store-ready release trains, and telemetry from day one.\n\nTags: React Native, Flutter, Expo.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      {
        label: "Mobile capability pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_mobile",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_backend: {
    message:
      "Backend & API Development\n\nNode.js and NestJS — REST, WebSockets, queues, and event-driven flows sized for your first scale-up.\n\nTags: Node.js, NestJS, Serverless.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_cloud: {
    message:
      "Cloud Infrastructure\n\nAWS-first designs: Lambda, API Gateway, RDS, S3, SQS — cost, reliability, and security reviewed before go-live.\n\nTags: AWS, Lambda, RDS.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      {
        label: "Cloud capability pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cloud",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_devops: {
    message:
      "DevOps & CI/CD\n\nPipelines, IaC, staging and prod parity, dashboards, and runbooks so releases are routine, not risky.\n\nTags: CI/CD, CloudWatch, IaC.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      { label: "Process — Deploy stage", next: "proc_deploy" },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_ai: {
    message:
      "AI/ML Solutions\n\nRAG, conversational agents, scoring, and forecasting — integrated with auth, audit trails, and guardrails, not bolted on.\n\nTags: RAG, LLM, Vector Search.",
    options: [
      {
        label: "AI / ML section on page",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      { label: "More on AI (assistant topics)", next: "menu_ai_hub" },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_realtime: {
    message:
      "Real-time Systems\n\nWebSockets, WebRTC, and voice stacks (including OpenAI Realtime and LiveKit) tuned for latency and resilience.\n\nTags: WebRTC, WebSockets, LiveKit.",
    options: [
      {
        label: "Jump to Services",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_consult: {
    message:
      "Tech Consulting\n\nArchitecture reviews, HLD/LLD, and hands-on pairing from discovery through launch and the first post-release quarter.\n\nTags: Architecture, HLD/LLD, Audit.",
    options: [
      {
        label: "Process overview",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  svc_support: {
    message:
      "Production Support\n\nMonitoring, logging, SLOs, incident response, and roadmap hygiene so the product you launch keeps earning trust.\n\nTags: Monitoring, Logging, On-call.",
    options: [
      { label: "Process — Scale stage", next: "proc_scale" },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Services menu", next: "menu_services" },
    ],
  },

  /* ─── Tech stack hub ───────────────────────────────────── */
  menu_tech: {
    message:
      "Our TechStack section groups tools by category: languages, frontend, mobile, backend, databases, cloud & DevOps, AI/ML, real-time, and tooling. Below you can open a category summary (aligned with the chips on the page).",
    options: [
      { label: "Languages & runtimes", next: "tech_lang" },
      { label: "Frontend", next: "tech_fe" },
      { label: "Mobile", next: "tech_mob" },
      { label: "Backend", next: "tech_be" },
      { label: "Databases", next: "tech_db" },
      { label: "Cloud & DevOps", next: "tech_cloud" },
      { label: "AI / ML building blocks", next: "tech_ai_stack" },
      { label: "Real-time", next: "tech_rt" },
      { label: "Tools", next: "tech_tools" },
      {
        label: "Open TechStack on page",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  tech_lang: {
    message:
      "Languages\n\nTypeScript · JavaScript · Python · Java · C — we pick based on team, ecosystem, and operational fit, not fashion.",
    options: [
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_fe: {
    message:
      "Frontend\n\nReact.js · Next.js · Tailwind CSS · HTML / CSS — including App Router, SSR/ISR, edge routes, and design-system friendly structure.",
    options: [
      {
        label: "Web capability pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_web",
      },
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_mob: {
    message:
      "Mobile\n\nReact Native · Flutter · Expo · Android · iOS — store pipelines, native modules, and telemetry as first-class concerns.",
    options: [
      {
        label: "Mobile capability pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_mobile",
      },
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_be: {
    message:
      "Backend\n\nNode.js · NestJS · Express.js · Serverless — APIs, queues, and event-driven services sized for growth.",
    options: [
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_db: {
    message:
      "Databases\n\nMySQL · MongoDB — schema design, scaling, and operational playbooks alongside your app roadmap.",
    options: [
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_cloud: {
    message:
      "Cloud & DevOps\n\nAWS Lambda · API Gateway · S3 · SQS · RDS · CloudWatch · Cognito · Amplify · Firebase — plus CI/CD and observability as part of delivery, not an afterthought.",
    options: [
      {
        label: "Cloud capability pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cloud",
      },
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_ai_stack: {
    message:
      "AI / ML (stack labels)\n\nRAG · LLM Integrations · Conversational AI · Vector Search · OpenAI Realtime · LiveKit — built to be observable, evaluable, and supportable next to the rest of your product.",
    options: [
      {
        label: "AI section on page",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      { label: "AI topics (RAG, voice, flow)", next: "menu_ai_hub" },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_rt: {
    message:
      "Real-time\n\nREST APIs · WebSockets · WebRTC — latency- and resilience-aware patterns for dashboards, collaboration, and voice.",
    options: [
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  tech_tools: {
    message:
      "Tools\n\nGit · CI/CD · Android Studio — delivery discipline and mobile tooling integrated with how your team ships.",
    options: [
      {
        label: "Open TechStack",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_tech",
      },
      { label: "← Tech menu", next: "menu_tech" },
    ],
  },

  /* ─── About ───────────────────────────────────────────── */
  menu_about_co: {
    message:
      "About Zensolt Consultants\n\nWe position as an engineering partner for teams that need ownership, not handoffs. The same engineers who write architecture docs can answer the pager and tune the cloud bill — continuity from prototype to production.\n\nPillars on the page: end-to-end one team; architecture sized for ~24 months; AI-native production patterns; and ongoing support after launch.",
    options: [
      {
        label: "Open About section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_about",
      },
      {
        label: "How we work (process)",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      {
        label: "Contact",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  /* ─── Capability splits ───────────────────────────────── */
  menu_caps: {
    message:
      "Core capabilities on this site are three pillars: web, mobile, and cloud — engineered as one system with shared contracts and integration discipline.",
    options: [
      { label: "01 — Web development", next: "cap_web" },
      { label: "02 — Mobile apps", next: "cap_mobile" },
      { label: "03 — Cloud & infrastructure", next: "cap_cloud" },
      {
        label: "Open capabilities area (#web)",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_web",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  cap_web: {
    message:
      "Web development pillar\n\nFast, accessible, scalable web apps: React, Next.js, TypeScript with SSR, ISR, and edge rendering; Tailwind-friendly design systems.\n\nHighlights: App Router & edge, component libraries, SEO & Core Web Vitals, auth/RBAC/async processing.",
    options: [
      {
        label: "Scroll to web pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_web",
      },
      { label: "Services — web line", next: "svc_web" },
      { label: "← Capability menu", next: "menu_caps" },
    ],
  },

  cap_mobile: {
    message:
      "Mobile pillar\n\nCross-platform apps that feel native: React Native and Flutter with Expo, native modules, crash reporting, update channels, and store pipelines.\n\nHighlights: offline-first & background sync, push & deep links, IAP, App Store / Play release pipelines.",
    options: [
      {
        label: "Scroll to mobile pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_mobile",
      },
      { label: "Services — mobile line", next: "svc_mobile" },
      { label: "← Capability menu", next: "menu_caps" },
    ],
  },

  cap_cloud: {
    message:
      "Cloud & infrastructure pillar\n\nAWS architectures that scale predictably: Lambda, API Gateway, S3, SQS, RDS, CloudWatch, Cognito, Amplify — with CI/CD, observability, and cost controls from day one.\n\nHighlights: serverless/event-driven, MySQL/MongoDB scaling, monitoring & alerting, cost & reliability SLOs.",
    options: [
      {
        label: "Scroll to cloud pillar",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cloud",
      },
      { label: "Services — cloud line", next: "svc_cloud" },
      { label: "← Capability menu", next: "menu_caps" },
    ],
  },

  /* ─── AI hub ──────────────────────────────────────────── */
  menu_ai_hub: {
    message:
      "AI / ML on this page\n\nHeadline: AI that lives inside your product. We cover end-to-end AI engineering — RAG, conversational UI, call scoring, predictive models — observable, evaluable, supportable alongside your stack. Realtime voice: OpenAI Realtime API and LiveKit.",
    options: [
      { label: "RAG, search & evaluation", next: "ai_rag" },
      { label: "Voice & realtime agents", next: "ai_voice" },
      { label: "Ingest → Serve flow (5 steps)", next: "ai_pipeline" },
      {
        label: "Open AI section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  ai_rag: {
    message:
      "RAG & grounding\n\n• RAG pipelines with vector search and source-cited answers\n• Chunking, metadata filters, retrieval tuning\n• LLM integrations with prompt versioning and evals\n• Evaluation: grounding, safety, regression tests in CI",
    options: [
      {
        label: "Open AI section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      { label: "Services — AI/ML line", next: "svc_ai" },
      { label: "← AI menu", next: "menu_ai_hub" },
    ],
  },

  ai_voice: {
    message:
      "Voice & realtime\n\nConversational and voice agents with tool-use and memory — including realtime voice via OpenAI Realtime and LiveKit as called out on the page.",
    options: [
      {
        label: "Open AI section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      { label: "Real-time service line", next: "svc_realtime" },
      { label: "← AI menu", next: "menu_ai_hub" },
    ],
  },

  ai_pipeline: {
    message:
      "Five-step flow on the page:\n\n1. Ingest — documents, calls, events, knowledge bases\n2. Embed & index — vector search, chunking, metadata filters\n3. Reason — LLM orchestration, tools, structured output\n4. Evaluate — grounding, safety, regression tests, CI\n5. Serve — API, realtime voice, audit log, cost guards",
    options: [
      {
        label: "Open AI section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_ai",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← AI menu", next: "menu_ai_hub" },
    ],
  },

  /* ─── Industries ───────────────────────────────────────── */
  menu_industries_hub: {
    message:
      "Industries section lists: Fintech, EdTech, HealthTech, E-commerce, Logistics, Travel, Insurance, Energy, Government, Security, and Healthcare — each with a one-line value statement on the page.",
    options: [
      { label: "Finance, commerce & insurance", next: "ind_fin_com" },
      { label: "Learning & health", next: "ind_learn_health" },
      { label: "Operations & travel", next: "ind_ops_travel" },
      { label: "Energy, government & security", next: "ind_pub" },
      {
        label: "Open Industries section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_industries",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  ind_fin_com: {
    message:
      "Fintech — Payments, ledgers, KYC/KYB, and infrastructure for auditors and traffic spikes.\n\nE-commerce — Storefronts, checkout, catalog, fulfillment integrations, commerce analytics.\n\nInsurance — Claims, underwriting, risk scoring — compliance and scale.",
    options: [
      {
        label: "Open Industries",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_industries",
      },
      { label: "← Industries menu", next: "menu_industries_hub" },
    ],
  },

  ind_learn_health: {
    message:
      "EdTech — Learning products, live collaboration, media delivery, progress data at classroom scale.\n\nHealthTech — Patient apps, telehealth, regulated data paths with consent and logging.\n\nHealthcare — Systems, patient portals, telemedicine — fast, reliable, scalable delivery.",
    options: [
      {
        label: "Open Industries",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_industries",
      },
      { label: "← Industries menu", next: "menu_industries_hub" },
    ],
  },

  ind_ops_travel: {
    message:
      "Logistics — Tracking, dispatch, fleet views, operator consoles that need timely, accurate data.\n\nTravel — Bookings, itineraries, flight tracking, 24/7 customer support experiences.",
    options: [
      {
        label: "Open Industries",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_industries",
      },
      { label: "← Industries menu", next: "menu_industries_hub" },
    ],
  },

  ind_pub: {
    message:
      "Energy — Grid management, load balancing, demand response — responsive and reliable systems.\n\nGovernment — Public services, regulatory compliance, citizen apps — secure, scalable, transparent.\n\nSecurity — Access control, compliance-oriented systems — fast, reliable delivery.",
    options: [
      {
        label: "Open Industries",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_industries",
      },
      { label: "← Industries menu", next: "menu_industries_hub" },
    ],
  },

  /* ─── Case studies ───────────────────────────────────── */
  menu_cases_hub: {
    message:
      "Case cards on the site (representative, full write-ups coming soon):\n• Fintech — Real-time payments dashboard\n• EdTech — Live learning platform\n• HealthTech — Conversational triage AI",
    options: [
      { label: "Fintech case — payments dashboard", next: "case_fintech" },
      { label: "EdTech case — live learning", next: "case_edtech" },
      { label: "HealthTech case — triage AI", next: "case_health" },
      {
        label: "Open Case studies section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cases",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  case_fintech: {
    message:
      "Real-time payments dashboard (Fintech)\n\nEvent-sourced processing, WebSocket telemetry, and a Next.js control room for operators watching money movement.\n\nStack tags on the card: Next.js, Node.js, AWS, WebSockets.",
    options: [
      {
        label: "Open Case studies",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cases",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Case studies menu", next: "menu_cases_hub" },
    ],
  },

  case_edtech: {
    message:
      "Live learning platform (EdTech)\n\nLiveKit-backed classrooms, session recording, and an LLM layer that turns lessons into student-ready summaries.\n\nStack tags: LiveKit, WebRTC, LLM, React.",
    options: [
      {
        label: "Open Case studies",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cases",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Case studies menu", next: "menu_cases_hub" },
    ],
  },

  case_health: {
    message:
      "Conversational triage AI (HealthTech)\n\nRAG over approved clinical sources, strict RBAC, immutable audit trails, and a React Native path for patients.\n\nStack tags: RAG, React Native, NestJS, RBAC.",
    options: [
      {
        label: "Open Case studies",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_cases",
      },
      {
        label: "Contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Case studies menu", next: "menu_cases_hub" },
    ],
  },

  /* ─── Project paths ──────────────────────────────────── */
  menu_project: {
    message:
      "Tell me where you are in the product journey — I will suggest a next step; you can always open the contact form with one tap.",
    options: [
      { label: "We are building something new", next: "proj_new" },
      { label: "We need to improve or scale what exists", next: "proj_scale" },
      { label: "We need help stabilizing or taking over", next: "proj_rescue" },
      { label: "We mainly need an architecture / audit", next: "proj_audit" },
      { label: "← Main menu", next: "start" },
    ],
  },

  proj_new: {
    message:
      "Greenfield: align on outcomes, users, constraints, and metrics before locking the stack. We run two-week iteration loops with working software each cycle — demos, not decks.\n\nUse the form for goals, timeline, and budget band.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      {
        label: "Process overview",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Project menu", next: "menu_project" },
    ],
  },

  proj_scale: {
    message:
      "Scale-up: performance, cost, reliability, and safe releases — usually observability-first so we fix what actually hurts users or the bill. Describe traffic, pain points, and launches in the form.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      {
        label: "Services overview",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_services",
      },
      { label: "← Project menu", next: "menu_project" },
    ],
  },

  proj_rescue: {
    message:
      "Rescue / takeover: repos, deploy paths, data stores, on-call reality, and a path to tests, staging parity, and rollback. We prefer honest milestones that prove delivery in your environment.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Project menu", next: "menu_project" },
    ],
  },

  proj_audit: {
    message:
      "Architecture / audit: written read on threats, scaling limits, cost drivers, and a sequenced plan — sometimes with workshops or pairing. Useful before funding the next phase.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "Process — Architect", next: "proc_arch" },
      { label: "← Project menu", next: "menu_project" },
    ],
  },

  /* ─── Pricing & budgets ──────────────────────────────── */
  menu_pricing: {
    message:
      "Pricing is scoped after we understand scope, risk, and timeline. Models: fixed phases when requirements are clear; time-and-materials or retained capacity when discovery is still moving.\n\nThe contact form uses INR budget bands — same list below if you want detail without scrolling.",
    options: [
      { label: "INR budget bands (contact form)", next: "pricing_bands" },
      { label: "Engagement models explained", next: "pricing_engagement" },
      { label: "What drives cost & duration?", next: "pricing_drivers" },
      { label: "Rough timelines", next: "pricing_timelines" },
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  pricing_bands: {
    message:
      "Budget options on the contact form (INR, not a quote):\n\n• Under ₹50 thousand\n• ₹50 thousand – ₹1 lakh\n• ₹1 lakh – ₹2 lakh\n• ₹2 lakh – ₹5 lakh\n• ₹5 lakh – ₹10 lakh\n• ₹10 lakh – ₹50 lakh\n• ₹50 lakh – ₹1 crore\n• Let's discuss\n\nChoosing a band helps us respond with the right level of detail. Final pricing is always confirmed after discovery.",
    options: [
      { label: "Service types on the form", next: "pricing_form_services" },
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Pricing menu", next: "menu_pricing" },
    ],
  },

  pricing_form_services: {
    message:
      "Service dropdown on the contact form aligns with how we talk about work:\n\n• Web development\n• Mobile apps\n• Backend & APIs\n• Cloud & DevOps\n• AI / ML\n• Tech consulting\n• Not sure yet\n\nPick what is closest — we refine on the call.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Pricing menu", next: "menu_pricing" },
    ],
  },

  pricing_engagement: {
    message:
      "Engagement shapes:\n\n• Fixed phases — when deliverables and acceptance tests are clear enough to bound.\n• Time & materials — when exploration, integrations, or legacy unknowns dominate.\n• Retained capacity — when you want predictable throughput across a quarter with prioritised backlog.\n\nWe often blend: short discovery on T&M, then a fixed build phase.",
    options: [
      { label: "INR budget bands", next: "pricing_bands" },
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Pricing menu", next: "menu_pricing" },
    ],
  },

  pricing_drivers: {
    message:
      "What typically moves cost and schedule:\n\n• Integrations (payments, identity, ERPs, carriers)\n• Compliance & audit logging (health, finance, gov)\n• Real-time scale (WebRTC, sockets, fan-out)\n• AI eval & safety work beyond a first demo\n• Environments: staging, data seeding, release automation\n\nSharing constraints early in the form reduces back-and-forth.",
    options: [
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Pricing menu", next: "menu_pricing" },
    ],
  },

  pricing_timelines: {
    message:
      "Timelines are indicative until discovery lands:\n\n• Focused assessment or architecture sprint: often a few weeks.\n• MVP slice with production discipline: commonly multiple iteration cycles (we work in two-week loops with shippable increments).\n• Larger programmes: phased roadmap after Discover + Architect.\n\nExact dates belong in a proposal — the form is the right place to share your target window.",
    options: [
      {
        label: "How we work (process)",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      {
        label: "Open contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "← Pricing menu", next: "menu_pricing" },
    ],
  },

  /* ─── Process (per phase) ────────────────────────────── */
  menu_process: {
    message:
      "Process has five stages on the page — each with a short description and deliverables. Drill in or open the full section.",
    options: [
      { label: "01 Discover", next: "proc_disc" },
      { label: "02 Architect", next: "proc_arch" },
      { label: "03 Build", next: "proc_build" },
      { label: "04 Deploy", next: "proc_deploy" },
      { label: "05 Scale", next: "proc_scale" },
      {
        label: "Open Process section",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Main menu", next: "start" },
    ],
  },

  proc_disc: {
    message:
      "Discover\n\nWorkshops to align on outcomes, users, constraints, and success metrics. We map the problem before we touch a keyboard.\n\nDeliverables: Product brief · Success metrics · Risk register",
    options: [
      { label: "Next: Architect", next: "proc_arch" },
      {
        label: "Open Process",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Process menu", next: "menu_process" },
    ],
  },

  proc_arch: {
    message:
      "Architect\n\nHLD and LLD covering data, services, infra, and integrations — sized for your first launch and the next 24 months.\n\nDeliverables: HLD / LLD · API contracts · Cost model",
    options: [
      { label: "Previous: Discover", next: "proc_disc" },
      { label: "Next: Build", next: "proc_build" },
      {
        label: "Open Process",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Process menu", next: "menu_process" },
    ],
  },

  proc_build: {
    message:
      "Build\n\nTwo-week iterations with working software at the end of every cycle. Demos, not status reports.\n\nDeliverables: Working increments · Test coverage · Live preview",
    options: [
      { label: "Previous: Architect", next: "proc_arch" },
      { label: "Next: Deploy", next: "proc_deploy" },
      {
        label: "Open Process",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Process menu", next: "menu_process" },
    ],
  },

  proc_deploy: {
    message:
      "Deploy\n\nHardened CI/CD into staging and production with monitoring, logging, alerting, and runbooks ready on day one.\n\nDeliverables: CI/CD pipeline · Observability · Runbooks",
    options: [
      { label: "Previous: Build", next: "proc_build" },
      { label: "Next: Scale", next: "proc_scale" },
      {
        label: "Open Process",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Process menu", next: "menu_process" },
    ],
  },

  proc_scale: {
    message:
      "Scale\n\nPerformance work, cost optimization, on-call coverage, and a roadmap for the next quarter — not a handover and goodbye.\n\nDeliverables: SLOs · Cost reviews · Roadmap",
    options: [
      { label: "Previous: Deploy", next: "proc_deploy" },
      {
        label: "Open Process",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_process",
      },
      { label: "← Process menu", next: "menu_process" },
    ],
  },

  /* ─── Contact ─────────────────────────────────────────── */
  menu_contact: {
    message:
      "Zensolt Consultants\n\n• Email — contact@zensolt.com\n• Phone — +91 94350 00000\n• Location — Shillong, Meghalaya, India\n\nThe contact form captures name, company, service interest, INR budget band, and message — fastest path for a useful first reply.",
    options: [
      {
        label: "Jump to contact form",
        next: SUPPORT_CHAT_AFTER_CTA,
        action: "scroll_contact",
      },
      { label: "Copy email address", next: "after_copy", action: "copy_email" },
      { label: "← Main menu", next: "start" },
    ],
  },

  after_copy: {
    message:
      "If your browser allowed it, contact@zensolt.com should be on your clipboard.\n\nYou can also use the contact form or the footer.",
    options: [
      { label: "I have another question", next: SUPPORT_CHAT_LOOP },
      { label: "Main menu", next: "start" },
    ],
  },

  /* ─── Post-action & loop ─────────────────────────────── */
  after_cta: {
    message:
      "Done — scroll the page behind this chat anytime. Want to explore something else?",
    options: [
      { label: "I have another question", next: SUPPORT_CHAT_LOOP },
      { label: "No, that is all — thanks", next: "farewell" },
    ],
  },

  [SUPPORT_CHAT_LOOP]: {
    message: "Choose another topic or return to the top level.",
    options: [
      { label: "Main menu", next: "start" },
      { label: "Services", next: "menu_services" },
      { label: "Tech stack", next: "menu_tech" },
      { label: "Pricing & budgets", next: "menu_pricing" },
      { label: "AI / ML", next: "menu_ai_hub" },
      { label: "Industries", next: "menu_industries_hub" },
      { label: "Case studies", next: "menu_cases_hub" },
      { label: "Contact", next: "menu_contact" },
    ],
  },

  farewell: {
    message:
      "Thanks for visiting Zensolt Consultants. If you used the form or email, we will reply as soon as we can.\n\nReopen this assistant any time from the support icon.",
    options: [
      { label: "Close chat", action: "close" },
      { label: "Main menu", next: "start" },
    ],
  },
};
