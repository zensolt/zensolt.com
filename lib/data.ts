export const SERVICES = [
  {
    num: "01",
    title: "Web Application Development",
    desc: "React, Next.js, and TypeScript apps built for production: App Router, SSR/ISR, edge routes, and performance budgets you can measure.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "React Native and Flutter with Expo, native bridges, store-ready release trains, and telemetry from day one.",
    tags: ["React Native", "Flutter", "Expo"],
  },
  {
    num: "03",
    title: "Backend & API Development",
    desc: "Node.js and NestJS services — REST, WebSockets, queues, and event-driven flows sized for your first scale-up.",
    tags: ["Node.js", "NestJS", "Serverless"],
  },
  {
    num: "04",
    title: "Cloud Infrastructure",
    desc: "AWS-first designs: Lambda, API Gateway, RDS, S3, SQS — cost, reliability, and security reviewed before go-live.",
    tags: ["AWS", "Lambda", "RDS"],
  },
  {
    num: "05",
    title: "DevOps & CI/CD",
    desc: "Pipelines, IaC, staging and prod parity, dashboards, and runbooks so releases are routine, not risky.",
    tags: ["CI/CD", "CloudWatch", "IaC"],
  },
  {
    num: "06",
    title: "AI/ML Solutions",
    desc: "RAG, conversational agents, scoring, and forecasting — integrated with auth, audit trails, and guardrails, not bolted on.",
    tags: ["RAG", "LLM", "Vector Search"],
  },
  {
    num: "07",
    title: "Real-time Systems",
    desc: "WebSockets, WebRTC, and voice stacks (including OpenAI Realtime and LiveKit) tuned for latency and resilience.",
    tags: ["WebRTC", "WebSockets", "LiveKit"],
  },
  {
    num: "08",
    title: "Tech Consulting",
    desc: "Architecture reviews, HLD/LLD, and hands-on pairing from discovery through launch and the first post-release quarter.",
    tags: ["Architecture", "HLD/LLD", "Audit"],
  },
  {
    num: "09",
    title: "Production Support",
    desc: "Monitoring, logging, SLOs, incident response, and roadmap hygiene so the product you launch keeps earning trust.",
    tags: ["Monitoring", "Logging", "On-call"],
  },
] as const;

export type TechItem = { name: string; cat: string; glyph: string };

export const TECH: TechItem[] = [
  { name: "TypeScript", cat: "language", glyph: "TS" },
  { name: "JavaScript", cat: "language", glyph: "JS" },
  { name: "Python", cat: "language", glyph: "Py" },
  { name: "Java", cat: "language", glyph: "Jv" },
  { name: "C", cat: "language", glyph: "C" },
  { name: "React.js", cat: "frontend", glyph: "Rc" },
  { name: "Next.js", cat: "frontend", glyph: "Nx" },
  { name: "Tailwind CSS", cat: "frontend", glyph: "Tw" },
  { name: "HTML / CSS", cat: "frontend", glyph: "<>" },
  { name: "React Native", cat: "mobile", glyph: "RN" },
  { name: "Flutter", cat: "mobile", glyph: "Fl" },
  { name: "Expo", cat: "mobile", glyph: "Ex" },
  { name: "Android", cat: "mobile", glyph: "An" },
  { name: "iOS", cat: "mobile", glyph: "iO" },
  { name: "Node.js", cat: "backend", glyph: "No" },
  { name: "NestJS", cat: "backend", glyph: "Ne" },
  { name: "Express.js", cat: "backend", glyph: "Ex" },
  { name: "Serverless", cat: "backend", glyph: "λ" },
  { name: "MySQL", cat: "database", glyph: "Sq" },
  { name: "MongoDB", cat: "database", glyph: "Mg" },
  { name: "AWS Lambda", cat: "cloud", glyph: "λ" },
  { name: "API Gateway", cat: "cloud", glyph: "Gw" },
  { name: "S3", cat: "cloud", glyph: "S3" },
  { name: "SQS", cat: "cloud", glyph: "Q" },
  { name: "RDS", cat: "cloud", glyph: "DB" },
  { name: "CloudWatch", cat: "cloud", glyph: "CW" },
  { name: "Cognito", cat: "cloud", glyph: "Cg" },
  { name: "Amplify", cat: "cloud", glyph: "Am" },
  { name: "Firebase", cat: "cloud", glyph: "Fb" },
  { name: "RAG", cat: "ai", glyph: "R" },
  { name: "LLM Integrations", cat: "ai", glyph: "L" },
  { name: "Conversational AI", cat: "ai", glyph: "C" },
  { name: "Vector Search", cat: "ai", glyph: "V" },
  { name: "OpenAI Realtime", cat: "ai", glyph: "OA" },
  { name: "LiveKit", cat: "ai", glyph: "Lk" },
  { name: "REST APIs", cat: "realtime", glyph: "RE" },
  { name: "WebSockets", cat: "realtime", glyph: "Ws" },
  { name: "WebRTC", cat: "realtime", glyph: "Rt" },
  { name: "Git", cat: "tools", glyph: "Gt" },
  { name: "CI/CD", cat: "tools", glyph: "CI" },
  { name: "Android Studio", cat: "tools", glyph: "AS" },
];

export const TECH_CATS = [
  { id: "all", label: "All" },
  { id: "language", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "AI / ML" },
  { id: "realtime", label: "Real-time" },
  { id: "tools", label: "Tools" },
] as const;

export const INDUSTRIES = [
  {
    name: "Fintech",
    desc: "Payments, ledgers, KYC/KYB, and infrastructure that stands up to auditors and spikes in traffic.",
    icon: "fin",
  },
  {
    name: "EdTech",
    desc: "Learning products, live collaboration, media delivery, and progress data at classroom scale.",
    icon: "edu",
  },
  {
    name: "HealthTech",
    desc: "Patient-facing apps, telehealth flows, and regulated data paths with consent and logging built in.",
    icon: "health",
  },
  {
    name: "E-commerce",
    desc: "Storefronts, checkout, catalog, fulfillment integrations, and commerce analytics.",
    icon: "cart",
  },
  {
    name: "Logistics",
    desc: "Tracking, dispatch, fleet views, and operator consoles that depend on timely, accurate data.",
    icon: "truck",
  },
  {
    name: "Travel",
    desc: "Bookings, itineraries, flight tracking, and customer support that needs to be available 24/7.",
    icon: "plane",
  },
  {
    name: "Insurance",
    desc: "Claims processing, underwriting, and risk scoring — built for compliance and scale.",
    icon: "insurance",
  },
  {
    name: "Energy",
    desc: "Grid management, load balancing, and demand response systems that need to be responsive and reliable.",
    icon: "energy",
  },
  {
    name: "Government",
    desc: "Public services, regulatory compliance, and citizen-facing apps that need to be secure, scalable, and transparent.",
    icon: "government",
  },
  {
    name: "Security",
    desc: "Security systems, access control, and compliance audits that need to be fast, reliable, and scalable.",
    icon: "security",
  },
  {
    name: "Healthcare",
    desc: "Healthcare systems, patient portals, and telemedicine platforms that need to be fast, reliable, and scalable.",
    icon: "healthcare",
  },
] as const;

export const PROCESS = [
  {
    num: "01",
    name: "Discover",
    desc: "Workshops to align on outcomes, users, constraints, and success metrics. We map the problem before we touch a keyboard.",
    deliver: ["Product brief", "Success metrics", "Risk register"],
  },
  {
    num: "02",
    name: "Architect",
    desc: "HLD and LLD covering data, services, infra, and integrations — sized for your first launch and the next 24 months.",
    deliver: ["HLD / LLD", "API contracts", "Cost model"],
  },
  {
    num: "03",
    name: "Build",
    desc: "Two-week iterations with working software at the end of every cycle. Demos, not status reports.",
    deliver: ["Working increments", "Test coverage", "Live preview"],
  },
  {
    num: "04",
    name: "Deploy",
    desc: "Hardened CI/CD into staging and production with monitoring, logging, alerting, and runbooks ready on day one.",
    deliver: ["CI/CD pipeline", "Observability", "Runbooks"],
  },
  {
    num: "05",
    name: "Scale",
    desc: "Performance work, cost optimization, on-call coverage, and a roadmap for the next quarter — not a handover and goodbye.",
    deliver: ["SLOs", "Cost reviews", "Roadmap"],
  },
] as const;

export type CaseStudy = {
  tag: string;
  name: string;
  desc: string;
  tags: string[];
  color1: string;
  color2: string;
};

export const CASES: CaseStudy[] = [
  {
    tag: "Fintech",
    name: "Real-time payments dashboard",
    desc: "Event-sourced processing, WebSocket telemetry, and a Next.js control room for operators watching money movement.",
    tags: ["Next.js", "Node.js", "AWS", "WebSockets"],
    color1: "#1baf8a",
    color2: "#5eead4",
  },
  {
    tag: "EdTech",
    name: "Live learning platform",
    desc: "LiveKit-backed classrooms, session recording, and an LLM layer that turns lessons into student-ready summaries.",
    tags: ["LiveKit", "WebRTC", "LLM", "React"],
    color1: "#5eead4",
    color2: "#0f766e",
  },
  {
    tag: "HealthTech",
    name: "Conversational triage AI",
    desc: "RAG over approved clinical sources, strict RBAC, immutable audit trails, and a React Native path for patients.",
    tags: ["RAG", "React Native", "NestJS", "RBAC"],
    color1: "#0f766e",
    color2: "#1baf8a",
  },
];

/** Site contact — single source for footer, forms, and schema. */
export const SITE_CONTACT = {
  email: "contact@zensolt.com",
  phone: "+91 94350 00000",
  /** Full line for location display */
  locationLine: "Shillong, Meghalaya, India",
  /** Optional public profile URLs (empty string = link to #contact until set) */
  social: {
    linkedin: "",
    github: "",
    twitter: "",
  },
} as const;
