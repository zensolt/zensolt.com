import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="zen-section">
      <div className="about-grid">
        <div>
          <div className="zen-eyebrow">About Zensolt Consultants</div>
          <h2 className="zen-h2">
            Engineering partner for teams that need ownership, not handoffs.
          </h2>
          <p className="zen-lead">
            We design, build, deploy, and run serious digital products. The same
            engineers who write your architecture docs answer the pager and tune
            your cloud bill — so startups, SMEs, and growth-stage companies get
            continuity from prototype to production.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-ghost" href="#process">
              How we work <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
        <div className="about-pillars">
          <div className="pillar">
            <div className="pillar-num">01 / END‑TO‑END</div>
            <h4>One team, one timeline.</h4>
            <p>
              Product, design, engineering, infra, and AI work together — not
              handed off across vendors.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">02 / ARCHITECTURE</div>
            <h4>Built to scale.</h4>
            <p>
              HLD/LLD, event-driven systems, and cost-aware AWS architectures
              sized for the next 24 months.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">03 / AI‑NATIVE</div>
            <h4>Real AI, in production.</h4>
            <p>
              RAG, conversational, and realtime AI wired into your product — not
              a sidecar demo.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-num">04 / SUPPORTED</div>
            <h4>We stay after launch.</h4>
            <p>
              Monitoring, on-call, and roadmap partnership so the system you
              launched keeps running.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
