"use client";

import { useMemo, useState } from "react";
import { TECH, TECH_CATS } from "@/lib/data";

export default function TechStack() {
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () => (cat === "all" ? TECH : TECH.filter((t) => t.cat === cat)),
    [cat]
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = { all: TECH.length };
    TECH.forEach((t) => {
      m[t.cat] = (m[t.cat] ?? 0) + 1;
    });
    return m;
  }, []);

  return (
    <section id="tech" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Technologies</div>
        <h2 className="zen-h2">Technologies we ship in production.</h2>
        <p className="zen-lead">
          Filter by discipline to see how we might staff your next build. This
          is a living inventory — not an exhaustive vendor list.
        </p>
      </div>
      <div className="tech-filter">
        {TECH_CATS.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`chip${cat === c.id ? " active" : ""}`}
            onClick={() => setCat(c.id)}
          >
            {c.label}
            <span className="chip-count">{counts[c.id] ?? 0}</span>
          </button>
        ))}
      </div>
      <div className="tech-grid" key={cat}>
        {filtered.map((t) => (
          <div className="tech-item" key={t.name}>
            <div className="t-glyph">{t.glyph}</div>
            <div>
              <div className="t-name">{t.name}</div>
              <div className="t-cat">{t.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
