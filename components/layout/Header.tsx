"use client";

import { useState, useEffect, useCallback } from "react";
import ZenLogo from "@/components/ui/ZenLogo";
import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["AI/ML", "#ai"],
  ["Technologies", "#tech"],
  ["Process", "#process"],
  ["Contact", "#contact"],
] as const;

type NavHref = (typeof NAV_LINKS)[number][1];

const SECTION_ORDER: readonly NavHref[] = [
  "#home",
  "#about",
  "#services",
  "#ai",
  "#tech",
  "#process",
  "#contact",
];

export default function Header({ onCTA }: { onCTA: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [activeHref, setActiveHref] = useState<NavHref>("#home");

  const updateActiveSection = useCallback(() => {
    const header = document.querySelector(".zen-header");
    const offset = (header?.getBoundingClientRect().height ?? 64) + 12;
    let current: NavHref = "#home";
    for (const href of SECTION_ORDER) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) continue;
      const { top } = el.getBoundingClientRect();
      if (top <= offset) current = href;
    }
    setActiveHref(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      updateActiveSection();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <header className={`zen-header${scrolled ? " scrolled" : ""}`}>
      <div className="zen-header-inner">
        <a href="#home" className="zen-logo">
          <span className="zen-logo-mark">
            <ZenLogo />
          </span>
          <span>Zensolt Consultants</span>
        </a>
        <nav className="zen-nav" aria-label="Primary">
          {NAV_LINKS.map(([label, href]) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>
        <div className="zen-cta-row">
          <button className="btn btn-primary" onClick={onCTA}>
            Start a Project <Icon name="arrow" size={14} />
          </button>
          <button
            className={`zen-hamburger${mobile ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
      <div className={`zen-mobile-menu${mobile ? " open" : ""}`}>
        <nav aria-label="Primary mobile">
          {NAV_LINKS.map(([label, href]) => {
            const isActive = activeHref === href;
            return (
              <a
                key={href}
                href={href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setMobile(false)}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
