"use client";

import { CASES, type CaseStudy } from "@/lib/data";

function CaseThumbArt({
  c1,
  c2,
  idx,
}: {
  c1: string;
  c2: string;
  idx: number;
}) {
  return (
    <svg
      viewBox="0 0 320 200"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`tg${idx}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} stopOpacity="0.35" />
          <stop offset="1" stopColor={c2} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#tg${idx})`} />
      {idx === 0 && (
        <g stroke={c2} strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M10 150 L60 110 L110 130 L160 70 L210 100 L260 50 L310 80" />
          <path
            d="M10 170 L60 150 L110 160 L160 130 L210 145 L260 110 L310 130"
            opacity="0.4"
          />
        </g>
      )}
      {idx === 1 && (
        <g fill={c2} opacity="0.6">
          {Array.from({ length: 14 }).map((_, i) => (
            <rect
              key={i}
              x={20 + i * 22}
              y={80 + Math.sin(i) * 20}
              width="14"
              height={60 + (i % 4) * 20}
              rx="2"
            />
          ))}
        </g>
      )}
      {idx === 2 && (
        <g stroke={c2} fill="none" strokeWidth="1" opacity="0.7">
          <circle cx="160" cy="100" r="30" />
          <circle cx="160" cy="100" r="55" strokeDasharray="2 4" />
          <circle
            cx="160"
            cy="100"
            r="80"
            strokeDasharray="1 6"
            opacity="0.5"
          />
          <circle cx="160" cy="100" r="3" fill={c2} />
        </g>
      )}
    </svg>
  );
}

export default function CaseStudies({
  onOpen,
}: {
  onOpen: (c: CaseStudy) => void;
}) {
  return (
    <section id="cases" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Case Studies</div>
        <h2 className="zen-h2">
          Representative engagements we&apos;ve shipped.
        </h2>
        <p className="zen-lead">
          Each card summarizes the problem space, stack, and how we operated.
          Open one for the full narrative, architecture notes, and outcomes we
          publish alongside the build.
        </p>
      </div>
      <div className="cs-grid">
        {CASES.map((c, i) => (
          <button
            type="button"
            key={c.name}
            className="cs-card"
            onClick={() => onOpen(c)}
          >
            <div
              className="cs-thumb"
              style={{
                background: `linear-gradient(135deg, ${c.color1}22, ${c.color2}22), var(--bg-2)`,
              }}
            >
              <div className="badge">Case study · {c.tag}</div>
              <CaseThumbArt c1={c.color1} c2={c.color2} idx={i} />
            </div>
            <div className="cs-body">
              <h4>{c.name}</h4>
              <p>{c.desc}</p>
              <div className="cs-tags">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
