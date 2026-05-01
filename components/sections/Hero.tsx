import Icon from "@/components/ui/Icon";

function HeroBadge() {
  return (
    <div className="zen-hero-head">
      <span className="pill">Capabilities</span>
      <span>RAG, voice AI, and realtime stacks — production, not pilots</span>
    </div>
  );
}

function HeroBody({ onCTA }: { onCTA: () => void }) {
  return (
    <div className="hero-b">
      <div>
        <HeroBadge />
        <h1 className="zen-h1">
          From first sketch to live product —{" "}
          <span className="gradient-text">one team owns the full stack.</span>
        </h1>
        <p className="zen-lead">
          Web, mobile, APIs, AWS, and AI/ML — architected and shipped together,
          with observability and support long after launch day.
        </p>
        <div className="hero-cta-row">
          <button className="btn btn-primary" onClick={onCTA}>
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
