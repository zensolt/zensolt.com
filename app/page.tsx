"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import AIML from "@/components/sections/AIML";
import CapabilitySplits from "@/components/sections/CapabilitySplits";
import TechStack from "@/components/sections/TechStack";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import CaseModal from "@/components/ui/CaseModal";
import type { CaseStudy } from "@/lib/data";

export default function Home() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="zen-shell">
      <div className="zen-mesh" aria-hidden />
      <div className="zen-grid" aria-hidden />
      <Header onCTA={scrollToContact} />
      <main id="main-content">
        <Hero onCTA={scrollToContact} />
        <TrustStrip />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal">
          <AIML />
        </div>
        <div className="reveal">
          <CapabilitySplits />
        </div>
        <div className="reveal">
          <TechStack />
        </div>
        <div className="reveal">
          <Industries />
        </div>
        <div className="reveal">
          <Process />
        </div>
        <div className="reveal">
          <CaseStudies onOpen={setActiveCase} />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
      <CaseModal data={activeCase} onClose={() => setActiveCase(null)} />
    </div>
  );
}
