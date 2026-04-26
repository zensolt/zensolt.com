"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  CheckCircle2,
  ChevronRight,
  Zap,
  Layers,
  Server,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { apiUrl } from "@/lib/api";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide some details about your project"),
});

// Helper for scroll to
const scrollTo = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(apiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText);
      }
      toast.success("Thanks — we'll be in touch within 1 business day.");
      form.reset();
    } catch (e) {
      console.error(e);
      toast.error(
        "We couldn't send your message. Please email contact@zensolt.com or try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      >
        {/* Abstract Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Premium Engineering Partner
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6">
                Build scalable{" "}
                <span className="text-gradient">digital products</span> with
                web, mobile, cloud, and AI expertise.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Zensolt Consultants helps businesses design, develop, deploy, and scale
                modern digital products — from websites and mobile apps to
                backend systems, cloud infrastructure, and AI/ML solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base shadow-[0_0_20px_rgba(0,183,255,0.3)]"
                  onClick={() => scrollTo("#contact")}
                >
                  Start a Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5 text-white text-base"
                  onClick={() => scrollTo("#services")}
                >
                  Explore Services
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Backend Engineering",
                  "Cloud & Infra Setup",
                  "AI/ML Solutions",
                  "Real-time Systems",
                ].map((chip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-3 py-1.5 rounded-md border border-white/5 bg-card/50 text-xs text-muted-foreground backdrop-blur-sm flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    {chip}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 glass-card p-2 group"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img
                src="/hero-abstract.png"
                alt="Zensolt Consultants abstract technology concept"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 -left-4 md:left-4 glass-card p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Layers size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      End-to-End
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Product Development
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-12 -right-4 md:right-8 glass-card p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                    <Server size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Production-Ready
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Scalable Architecture
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-24 bg-card/30 border-y border-white/5 relative"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Your end-to-end technology partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zensolt Consultants is a technology solutions company that builds reliable,
              scalable, and user-friendly digital products from idea validation
              to production deployment, covering web, mobile, backend, cloud,
              DevOps, and AI/ML.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We focus on product planning, UI/UX-focused development, clean
              architecture, secure backend systems, cloud-ready deployment,
              performance and scalability, AI-first innovation, and long-term
              maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering Quality",
                desc: "Clean code, robust architecture, and rigorous testing.",
              },
              {
                title: "Business Understanding",
                desc: "We build features that solve actual business problems.",
              },
              {
                title: "Scalable Architecture",
                desc: "Systems designed to grow with your user base.",
              },
              {
                title: "Transparent Delivery",
                desc: "Clear communication, agile sprints, and continuous visibility.",
              },
              {
                title: "Production Reliability",
                desc: "Monitored, secure, and highly available deployments.",
              },
              {
                title: "Continuous Improvement",
                desc: "Iterative enhancements based on user feedback and data.",
              },
            ].map((value, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="p-6 rounded-xl border border-white/5 bg-background hover:bg-card transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Complete Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From concept to cloud, we provide the full spectrum of engineering
              capabilities needed to build modern digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe />,
                title: "Web Application Development",
                desc: "We build fast, responsive, SEO-friendly, and scalable web applications using React.js, Next.js, TypeScript, HTML, CSS, and modern frontend architecture.",
                includes: [
                  "Business websites",
                  "Admin dashboards",
                  "SaaS platforms",
                  "Internal tools",
                  "Landing pages",
                  "Web portals",
                ],
              },
              {
                icon: <Smartphone />,
                title: "Mobile App Development",
                desc: "We build high-quality Android and iOS applications using React Native, Flutter, Expo, and native mobile capabilities.",
                includes: [
                  "Cross-platform apps",
                  "Android apps",
                  "iOS apps",
                  "React Native apps",
                  "Flutter apps",
                  "Native module integrations",
                ],
              },
              {
                icon: <Database />,
                title: "Backend & API Development",
                desc: "We develop secure, scalable backend systems and APIs using Node.js, NestJS, Express.js, authentication, RBAC, async processing, and clean backend architecture.",
                includes: [
                  "REST APIs",
                  "Authentication",
                  "RBAC",
                  "Admin APIs",
                  "Microservices",
                  "Async jobs",
                ],
              },
              {
                icon: <Cloud />,
                title: "Cloud & Infrastructure Setup",
                desc: "We set up reliable cloud infrastructure for production applications using AWS and Firebase with scalable, secure, and monitored deployments.",
                includes: [
                  "AWS setup",
                  "Serverless architecture",
                  "API Gateway",
                  "Lambda functions",
                  "RDS setup",
                  "Cognito auth",
                ],
              },
              {
                icon: <Code />,
                title: "DevOps & CI/CD",
                desc: "We help teams automate deployment, improve release reliability, and monitor production systems.",
                includes: [
                  "CI/CD pipelines",
                  "Git-based workflows",
                  "Deployment automation",
                  "Logging & monitoring",
                  "CloudWatch",
                  "Error tracking",
                ],
              },
              {
                icon: <Cpu />,
                title: "AI/ML Solutions",
                desc: "We build practical AI-powered systems using RAG, LLM integrations, conversational AI, prompt engineering, predictive modeling, vector search, and LiveKit.",
                includes: [
                  "AI chatbots",
                  "RAG assistants",
                  "Voice AI agents",
                  "Call scoring systems",
                  "Predictive models",
                  "LLM workflows",
                ],
              },
              {
                icon: <Zap />,
                title: "Real-time Applications",
                desc: "We build real-time applications using WebSockets, WebRTC, LiveKit, streaming APIs, and event-driven systems.",
                includes: [
                  "Chat systems",
                  "Voice/video comms",
                  "Live collaboration",
                  "Real-time dashboards",
                  "Streaming workflows",
                ],
              },
              {
                icon: <Layers />,
                title: "Tech Consulting & Architecture",
                desc: "We help businesses choose the right technology, plan scalable architecture, and design reliable software systems.",
                includes: [
                  "HLD",
                  "LLD",
                  "System design",
                  "Database design",
                  "Architecture review",
                  "Tech stack selection",
                ],
              },
              {
                icon: <Database />,
                title: "Database Design & Management",
                desc: "We design and manage databases for reliable, secure, and scalable data storage.",
                includes: [
                  "MongoDB",
                  "MySQL",
                  "Schema design",
                  "Query optimization",
                  "Data modeling",
                  "Backup strategy",
                ],
              },
              {
                icon: <CheckCircle2 />,
                title: "Maintenance & Support",
                desc: "We support existing applications by improving performance, fixing issues, upgrading technology, and monitoring production systems.",
                includes: [
                  "Bug fixing",
                  "Performance optimization",
                  "Feature enhancements",
                  "Monitoring",
                  "Tech upgrades",
                ],
              },
            ].map((service, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                key={i}
                className="glass-card p-6 rounded-2xl flex flex-col group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-card border border-white/5 flex items-center justify-center text-white mb-6 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 grow">
                  {service.desc}
                </p>
                <ul className="space-y-2 mt-auto border-t border-white/5 pt-4">
                  {service.includes.slice(0, 4).map((item, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                  {service.includes.length > 4 && (
                    <li className="text-xs text-muted-foreground/60 italic ml-5">
                      + more capabilities
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI/ML SECTION (Cinematic) */}
      <section id="ai-ml" className="py-32 bg-black relative overflow-hidden">
        {/* Background glow for AI section */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" /> AI Lab
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                AI/ML solutions built for{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">
                  real business use cases
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We help businesses move beyond AI experiments and build
                production-ready AI systems that improve support, training,
                automation, decision-making, and customer experience.
              </p>
            </div>
            <div className="lg:col-span-5 h-[300px] lg:h-full relative rounded-2xl overflow-hidden border border-white/10 opacity-80">
              <img
                src="/ai-accent.png"
                alt="AI Neural Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "RAG-based Knowledge Assistants",
                desc: "Build private knowledge assistants that answer questions from company documents, PDFs, databases, websites, and internal knowledge sources.",
                useCases:
                  "Internal knowledge bot, Customer support assistant, Document Q&A",
              },
              {
                title: "AI Chatbots",
                desc: "Create intelligent chatbots for websites, apps, internal tools, and customer support workflows.",
                useCases:
                  "Customer support chatbot, Lead qualification bot, FAQ assistant",
              },
              {
                title: "Conversational AI & Voice Agents",
                desc: "Build real-time AI agents for roleplays, interviews, sales training, and voice-based support using STT, LLM, TTS, WebRTC.",
                useCases:
                  "AI interview simulator, Sales pitch practice, AI voice support",
              },
              {
                title: "Call Scoring & Evaluation",
                desc: "Analyze call transcripts and evaluate conversations against structured rubrics with scores, evidence, and improvement suggestions.",
                useCases: "Sales call QA, Support call QA, Training feedback",
              },
              {
                title: "Predictive Modeling",
                desc: "Use historical business data to build models that predict outcomes, score leads, identify risks, and support better decisions.",
                useCases:
                  "Lead scoring, Churn prediction, Performance prediction",
              },
              {
                title: "LLM Workflow Automation",
                desc: "Integrate LLMs into business workflows to automate repetitive tasks, generate structured outputs, and improve productivity.",
                useCases:
                  "Report generation, Data summarization, CRM automation",
              },
              {
                title: "Vector & Semantic Search",
                desc: "Build search systems that understand meaning, not just keywords, using embeddings and vector databases.",
                useCases:
                  "Semantic document search, Product search, Knowledge base search",
              },
              {
                title: "Prompt Engineering & Guardrails",
                desc: "Design reliable prompts, structured JSON outputs, evaluation pipelines, and AI guardrails for predictable behavior.",
                useCases:
                  "Prompt design, JSON schema outputs, Human review workflows",
              },
            ].map((ai, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="p-6 rounded-2xl border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-colors group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/30 transition-colors" />
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10">
                  {ai.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 relative z-10">
                  {ai.desc}
                </p>
                <div className="mt-auto relative z-10">
                  <p className="text-xs font-medium text-secondary mb-1">
                    USE CASES
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {ai.useCases}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section
        id="technologies"
        className="py-24 bg-card/30 border-y border-white/5"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies we master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            We use modern, production-tested technologies to ensure your product
            is fast, secure, and maintainable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500 mb-16">
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <SiReact className="w-10 h-10 text-[#61DAFB]" />
              <span className="text-xs text-muted-foreground">
                React & Native
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <SiNextdotjs className="w-10 h-10 text-white" />
              <span className="text-xs text-muted-foreground">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <SiTypescript className="w-10 h-10 text-[#3178C6]" />
              <span className="text-xs text-muted-foreground">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <SiPython className="w-10 h-10 text-[#3776AB]" />
              <span className="text-xs text-muted-foreground">Python</span>
            </div>
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <SiNodedotjs className="w-10 h-10 text-[#339933]" />
              <span className="text-xs text-muted-foreground">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
              <FaAws className="w-10 h-10 text-[#FF9900]" />
              <span className="text-xs text-muted-foreground">AWS</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  Languages
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>JavaScript, TypeScript</li>
                  <li>Python, Java, C</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  Frontend & Mobile
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>React.js, Next.js</li>
                  <li>HTML, CSS, Tailwind CSS</li>
                  <li>React Native, Expo</li>
                  <li>Flutter, Android, iOS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  Backend & Databases
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Node.js, NestJS, Express.js</li>
                  <li>Serverless Architecture</li>
                  <li>MySQL, MongoDB</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  Cloud & DevOps
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>AWS (Lambda, API Gateway, S3, SQS, RDS)</li>
                  <li>CloudWatch, Cognito, Amplify</li>
                  <li>Firebase</li>
                  <li>CI/CD Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  AI/ML
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>RAG, LLM Integrations</li>
                  <li>Conversational AI</li>
                  <li>Prompt Engineering</li>
                  <li>Vector Search</li>
                  <li>OpenAI Realtime API, LiveKit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  APIs & Real-time
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>REST APIs</li>
                  <li>WebSockets</li>
                  <li>WebRTC</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  System Design
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>HLD & LLD</li>
                  <li>Scalable APIs</li>
                  <li>Event-Driven Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  Tools
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Git</li>
                  <li>AWS CodeCommit</li>
                  <li>Android Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Industries we serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring technical expertise and domain knowledge to a wide range
              of industries, building solutions tailored to specific business
              needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SaaS & Startups",
              "EdTech & Learning",
              "FinTech",
              "Healthcare",
              "E-commerce & Retail",
              "Real Estate",
              "Logistics & Supply Chain",
              "Media & Entertainment",
              "AI Products",
              "Enterprise Internal Tools",
            ].map((industry, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="px-6 py-3 rounded-full border border-white/10 bg-card/50 text-sm font-medium text-white backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              How we work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured, transparent engineering process focused on shipping
              reliable software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connection Line Desktop */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10 z-0" />

            {[
              {
                num: "01",
                title: "Discovery & Requirements",
                desc: "Understanding your business goals, target audience, and technical constraints.",
              },
              {
                num: "02",
                title: "Architecture & Planning",
                desc: "Designing system architecture, database schemas, and API contracts.",
              },
              {
                num: "03",
                title: "UI/UX & Prototyping",
                desc: "Creating high-fidelity designs and interactive prototypes for validation.",
              },
              {
                num: "04",
                title: "Development & Iteration",
                desc: "Agile sprints with regular demos, clean code, and peer reviews.",
              },
              {
                num: "05",
                title: "QA & Deployment",
                desc: "Rigorous testing, CI/CD setup, and zero-downtime production releases.",
              },
              {
                num: "06",
                title: "Support & Scale",
                desc: "Continuous monitoring, performance tuning, and feature expansion.",
              },
            ].map((step, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="relative z-10 bg-background pt-4 px-2"
              >
                <div className="w-16 h-16 rounded-full bg-card border border-white/10 flex items-center justify-center text-xl font-display font-bold text-primary mb-6 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / ARCHETYPES SECTION */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Project archetypes we ship
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Examples of the architectural complexity and product quality we
              deliver across different domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "ai-voice",
                title: "AI Voice Interview Simulator",
                desc: "Real-time STT + LLM + TTS over WebRTC",
              },
              {
                img: "saas-admin",
                title: "Multi-tenant SaaS Admin",
                desc: "RBAC, audit trails, billing-ready infrastructure",
              },
              {
                img: "mobile-app",
                title: "Cross-platform Customer App",
                desc: "React Native with offline-first local sync",
              },
              {
                img: "rag-portal",
                title: "RAG Knowledge Portal",
                desc: "Semantic search over private company documents",
              },
              {
                img: "serverless-pipeline",
                title: "Serverless Event Pipeline",
                desc: "High-throughput SQS, Lambda, EventBridge",
              },
              {
                img: "realtime-dash",
                title: "Real-time Collaboration",
                desc: "WebSockets with live presence and state sync",
              },
            ].map((project, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 relative">
                  <img
                    src={`/portfolio/${project.img}.png`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to build?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Tell us about your project, timeline, and goals. We'll get back
                to you with a technical assessment and proposed engagement
                model.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-white/5 flex items-center justify-center text-primary shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Prefer email?
                    </h4>
                    <p className="text-muted-foreground">
                      Reach out directly to{" "}
                      <a
                        href="mailto:contact@zensolt.com"
                        className="text-primary hover:underline"
                      >
                        contact@zensolt.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-background/50 border-white/10 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@company.com"
                              className="bg-background/50 border-white/10 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Company (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Corp"
                            className="bg-background/50 border-white/10 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">
                            Project Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10 focus:ring-primary">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web">
                                Web Application
                              </SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="ai">AI/ML Solution</SelectItem>
                              <SelectItem value="backend">
                                Backend/Cloud Infra
                              </SelectItem>
                              <SelectItem value="fullstack">
                                End-to-End Product
                              </SelectItem>
                              <SelectItem value="consulting">
                                Architecture Consulting
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">
                            Budget Range
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-white/10 focus:ring-primary">
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10k-25k">
                                $10k - $25k
                              </SelectItem>
                              <SelectItem value="25k-50k">
                                $25k - $50k
                              </SelectItem>
                              <SelectItem value="50k-100k">
                                $50k - $100k
                              </SelectItem>
                              <SelectItem value="100k+">$100k+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about the problem you're trying to solve..."
                            className="min-h-[120px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-base"
                  >
                    {isSubmitting ? "Sending…" : "Start a Project"}{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
