"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const HERO_TAGLINES = [
  "Web, mobile, APIs, AWS, and models — owned past launch day.",
  "RAG, voice AI, and realtime stacks — production, not pilots",
  "Full-stack for web, mobile, cloud — AI and ops in one team.",
] as const;

const HERO_HEADLINE_SUFFIXES = [
  "one team owns it end to end.",
  "idea to prod in one swimlane.",
  "a single squad drives it all.",
  "from concept to launch, unified.",
  "one crew builds and runs it all.",
] as const;

const TAGLINE_INTERVAL_MS = 2500;
const TYPE_MS = 48;
const DELETE_MS = 32;
const PAUSE_AT_FULL_MS = 2400;
const GAP_BETWEEN_PHRASES_MS = 450;

function useReducedMotionAfterMount(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduced;
}

function HeroRotatingTagline() {
  const reduced = useReducedMotionAfterMount();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => {
      setI((n) => (n + 1) % HERO_TAGLINES.length);
    }, TAGLINE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [reduced]);

  const line = HERO_TAGLINES[reduced ? 0 : i];

  return (
    <span
      className="zen-hero-head-tagline"
      {...(reduced ? {} : { "aria-live": "polite" as const })}
    >
      <span key={line} className="zen-hero-head-tagline-inner">
        {line}
      </span>
    </span>
  );
}

function HeroTypingGradient() {
  const reduced = useReducedMotionAfterMount();
  const [typed, setTyped] = useState<string>(HERO_HEADLINE_SUFFIXES[0]);

  useLayoutEffect(() => {
    if (reduced) {
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let phraseIndex = 0;
    let charIndex = 0;
    type Mode = "typing" | "pause" | "deleting";
    let mode: Mode = "typing";

    const step = () => {
      if (cancelled) return;
      const phrase = HERO_HEADLINE_SUFFIXES[phraseIndex];
      if (mode === "typing") {
        if (charIndex < phrase.length) {
          charIndex += 1;
          setTyped(phrase.slice(0, charIndex));
          timeoutId = setTimeout(step, TYPE_MS);
        } else {
          mode = "pause";
          timeoutId = setTimeout(step, PAUSE_AT_FULL_MS);
        }
      } else if (mode === "pause") {
        mode = "deleting";
        timeoutId = setTimeout(step, 0);
      } else if (charIndex > 0) {
        charIndex -= 1;
        setTyped(phrase.slice(0, charIndex));
        timeoutId = setTimeout(step, DELETE_MS);
      } else {
        phraseIndex = (phraseIndex + 1) % HERO_HEADLINE_SUFFIXES.length;
        mode = "typing";
        timeoutId = setTimeout(step, GAP_BETWEEN_PHRASES_MS);
      }
    };

    const kickoff = window.setTimeout(() => {
      if (cancelled) return;
      setTyped("");
      phraseIndex = 0;
      charIndex = 0;
      mode = "typing";
      timeoutId = setTimeout(step, 280);
    }, 0);

    return () => {
      cancelled = true;
      clearTimeout(kickoff);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [reduced]);

  const shown = reduced ? HERO_HEADLINE_SUFFIXES[0] : typed;
  const measureText = HERO_HEADLINE_SUFFIXES[0];

  return (
    <span className="zen-hero-h1-typed-slot">
      <span className="zen-hero-h1-typed-measure gradient-text" aria-hidden>
        {measureText}
      </span>
      <span className="zen-hero-h1-typed-visible">
        <span className="gradient-text">{shown}</span>
        {!reduced ? (
          <span className="zen-hero-type-cursor" aria-hidden />
        ) : null}
      </span>
    </span>
  );
}

function HeroBadge() {
  return (
    <div className="zen-hero-head">
      <span className="pill">Capabilities</span>
      <HeroRotatingTagline />
    </div>
  );
}

function HeroBody({ onCTA }: { onCTA: () => void }) {
  return (
    <div className="hero-b">
      <div>
        <HeroBadge />
        <h1 className="zen-h1 zen-hero-h1">
          <span className="zen-hero-h1-prefix">
            From first sketch to live product —{" "}
          </span>
          <HeroTypingGradient />
        </h1>
        <p className="zen-lead">
          Web, mobile, APIs, AWS, and AI/ML — architected and shipped together,
          with observability and support long after launch day.
        </p>
        <div className="hero-cta-row">
          <button type="button" className="btn btn-primary" onClick={onCTA}>
            Start a Project <Icon name="arrow" size={14} />
          </button>
          <a className="btn btn-ghost" href="#services">
            Explore Services
          </a>
        </div>
      </div>
      <div className="terminal">
        <div className="terminal-bar">
          <div className="dot r" />
          <div className="dot y" />
          <div className="dot g" />
          <span className="file">~/zensolt — production</span>
        </div>
        <div className="terminal-body">
          <div className="line">
            <span className="tk-mute">
              {"// "}zensolt — one team, full stack, production-ready
            </span>
          </div>
          <div className="line">
            <span className="tk-c">$</span>{" "}
            <span className="tk-b">zensolt</span> deploy{" "}
            <span className="tk-str">&quot;your-product&quot;</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> Architecture ……………{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> Web + Mobile clients …{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> APIs &amp; data layer ……{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> AWS infrastructure ……{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> AI / RAG pipeline ……{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-mute">›</span> Monitoring + on-call …{" "}
            <span className="tk-c">ready</span>
          </div>
          <div className="line">
            <span className="tk-v">production</span> ·{" "}
            <span className="tk-num">99.95%</span> uptime ·{" "}
            <span className="tk-num">p95 &lt; 120ms</span>{" "}
            <span className="cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onCTA }: { onCTA: () => void }) {
  return (
    <section id="home" className="zen-section zen-hero">
      <HeroBody onCTA={onCTA} />
    </section>
  );
}
