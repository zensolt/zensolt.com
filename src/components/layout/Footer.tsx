import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div
              className="flex items-center gap-2 cursor-pointer mb-6"
              onClick={() => scrollTo("#home")}
            >
              <div className="w-8 h-8 rounded bg-linear-to-tr from-primary to-secondary flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                Z
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Zensolt Consultants
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Build scalable digital products with web, mobile, cloud, and AI
              expertise. From idea to production — Zensolt Consultants delivers
              complete technology solutions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => scrollTo("#about")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#services")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#ai-ml")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  AI/ML Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#technologies")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#process")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li>contact@zensolt.com</li>
              <li>Shillong, Meghalaya, India</li>
              <li className="mt-4">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="text-primary hover:text-white transition-colors underline underline-offset-4"
                >
                  Start a project together
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Zensolt Consultants. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
