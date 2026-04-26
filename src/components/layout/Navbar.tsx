import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI/ML", href: "#ai-ml" },
  { label: "Technologies", href: "#technologies" },
  { label: "Process", href: "#process" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("#home")}
        >
          <div className="w-8 h-8 rounded bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-[0_0_15px_rgba(0,183,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,183,255,0.6)] transition-shadow">
            Z
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Zensolt Consultants
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => scrollTo("#contact")}
            className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-[0_0_10px_rgba(0,183,255,0.1)] hover:shadow-[0_0_20px_rgba(0,183,255,0.3)]"
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-white transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-4 bg-primary text-white"
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
