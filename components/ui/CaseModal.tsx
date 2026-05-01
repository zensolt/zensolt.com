"use client";

import { useEffect } from "react";
import { CaseStudy } from "@/lib/data";
import Icon from "./Icon";

interface CaseModalProps {
  data: CaseStudy | null;
  onClose: () => void;
}

export default function CaseModal({ data, onClose }: CaseModalProps) {
  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <div className="zen-eyebrow" style={{ marginBottom: 10 }}>
              {data.tag} · Case study
            </div>
            <h2
              id="case-modal-title"
              className="zen-h2"
              style={{ fontSize: 32, marginBottom: 6 }}
            >
              {data.name}
            </h2>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <Icon name="close" size={16} />
          </button>
        </div>
        <div className="modal-body">
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 15.5,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {data.desc}
          </p>
          <div className="modal-meta">
            <div>
              <div
                style={{
                  color: "var(--ink-3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: 11,
                }}
              >
                Industry
              </div>
              <strong>{data.tag}</strong>
            </div>
            <div>
              <div
                style={{
                  color: "var(--ink-3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: 11,
                }}
              >
                Timeline
              </div>
              <strong>To be published</strong>
            </div>
            <div>
              <div
                style={{
                  color: "var(--ink-3)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: 11,
                }}
              >
                Status
              </div>
              <strong>Coming soon</strong>
            </div>
          </div>
          <h4
            style={{
              margin: "0 0 10px",
              fontSize: 14,
              color: "var(--ink-3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Stack
          </h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {data.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--line)",
                  fontSize: 12,
                  color: "var(--ink-2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <p style={{ color: "var(--ink-3)", fontSize: 13, marginTop: 28 }}>
            Want a deeper walkthrough? Reach out via the contact form and
            we&apos;ll share an NDA-friendly briefing.
          </p>
        </div>
      </div>
    </div>
  );
}
