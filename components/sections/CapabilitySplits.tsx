function CloudArt() {
  const nodes = [
    { id: "api", x: 50, y: 25, label: "API GW" },
    { id: "fn1", x: 22, y: 50, label: "λ Auth" },
    { id: "fn2", x: 50, y: 50, label: "λ Orders" },
    { id: "fn3", x: 78, y: 50, label: "λ AI" },
    { id: "db", x: 22, y: 78, label: "RDS" },
    { id: "q", x: 50, y: 78, label: "SQS" },
    { id: "s3", x: 78, y: 78, label: "S3" },
  ] as const;
  const edges = [
    ["api", "fn1"],
    ["api", "fn2"],
    ["api", "fn3"],
    ["fn1", "db"],
    ["fn2", "q"],
    ["fn2", "db"],
    ["fn3", "s3"],
  ] as const;

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="eg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1baf8a" stopOpacity="0.65" />
          <stop offset="1" stopColor="#5eead4" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => {
        const A = nodes.find((n) => n.id === a)!;
        const B = nodes.find((n) => n.id === b)!;
        return (
          <line
            key={i}
            x1={A.x}
            y1={A.y}
            x2={B.x}
            y2={B.y}
            stroke="url(#eg)"
            strokeWidth="0.3"
            strokeDasharray="0.8 0.8"
          />
        );
      })}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r="6"
            fill="rgba(10,14,24,0.95)"
            stroke="rgba(34,211,238,0.35)"
            strokeWidth="0.4"
          />
          <circle cx={n.x} cy={n.y} r="1.5" fill="#5eead4" />
          <text
            x={n.x}
            y={n.y + 10}
            fontSize="2.2"
            fill="#aab4c2"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function CapabilitySplits() {
  return (
    <section className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Core capabilities</div>
        <h2 className="zen-h2">
          Web, mobile, and cloud — engineered as one system.
        </h2>
        <p className="zen-lead">
          Depth in each pillar, with integration tests and shared contracts so
          your web app, clients, and AWS estate stay aligned under load.
        </p>
      </div>

      <div id="web" className="split">
        <div>
          <div className="zen-eyebrow" style={{ color: "var(--blue)" }}>
            01 — Web Development
          </div>
          <h3>Fast, accessible, scalable web apps.</h3>
          <p>
            React, Next.js, and TypeScript with SSR, ISR, and edge rendering.
            Tailwind for design systems that designers and engineers can both
            move in.
          </p>
          <ul className="feat-list">
            <li>Next.js App Router and edge rendering</li>
            <li>Component libraries and design systems</li>
            <li>SEO, analytics, and Core Web Vitals</li>
            <li>Authentication, RBAC, and async processing</li>
          </ul>
        </div>
        <div className="split-art">
          <div className="browser-frame">
            <div className="bf-bar">
              <div className="d" style={{ background: "#ff5f57" }} />
              <div className="d" style={{ background: "#febc2e" }} />
              <div className="d" style={{ background: "#28c840" }} />
              <div className="url">app.zensolt.com</div>
            </div>
            <div className="bf-body">
              <div className="bf-skel" style={{ height: 18, width: "40%" }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 8,
                }}
              >
                <div className="bf-skel" style={{ height: 60 }} />
                <div className="bf-skel" style={{ height: 60 }} />
                <div
                  className="bf-skel"
                  style={{ height: 60, background: "var(--grad-soft)" }}
                />
              </div>
              <div className="bf-skel" style={{ height: 14, width: "85%" }} />
            </div>
          </div>
        </div>
      </div>

      <div id="mobile" className="split reverse">
        <div>
          <div className="zen-eyebrow" style={{ color: "var(--cyan)" }}>
            02 — Mobile Apps
          </div>
          <h3>Cross-platform apps that feel native.</h3>
          <p>
            React Native and Flutter — with Expo, native modules, and proper
            release engineering. We ship to both stores with crash-reporting and
            update channels in place.
          </p>
          <ul className="feat-list">
            <li>React Native, Flutter, Expo, and native modules</li>
            <li>Offline-first patterns and background sync</li>
            <li>Push, deep links, and in-app purchases</li>
            <li>App Store / Play Store release pipelines</li>
          </ul>
        </div>
        <div className="split-art">
          <div className="phone-frame">
            <div className="notch" />
            <div className="ph-body">
              <div className="ph-hello">GOOD MORNING</div>
              <div className="ph-card">
                Active sessions{" "}
                <strong style={{ float: "right", color: "var(--cyan)" }}>
                  1,284
                </strong>
              </div>
              <div className="ph-card">
                Latency p95{" "}
                <strong style={{ float: "right", color: "var(--cyan)" }}>
                  96ms
                </strong>
              </div>
              <div className="ph-card">
                Errors (24h){" "}
                <strong style={{ float: "right", color: "var(--cyan)" }}>
                  0.02%
                </strong>
              </div>
              <div className="ph-cta">Open dashboard</div>
            </div>
          </div>
        </div>
      </div>

      <div id="cloud" className="split">
        <div>
          <div className="zen-eyebrow" style={{ color: "var(--violet)" }}>
            03 — Cloud &amp; Infrastructure
          </div>
          <h3>AWS architectures that scale predictably.</h3>
          <p>
            Lambda, API Gateway, S3, SQS, RDS, CloudWatch, Cognito, and Amplify
            — wired together with CI/CD, observability, and cost controls from
            day one.
          </p>
          <ul className="feat-list">
            <li>Serverless and event-driven architectures</li>
            <li>Database design (MySQL, MongoDB) and scaling</li>
            <li>CI/CD, monitoring, logging, alerting</li>
            <li>Cost reviews and reliability SLOs</li>
          </ul>
        </div>
        <div className="split-art cloud-art">
          <CloudArt />
        </div>
      </div>
    </section>
  );
}
