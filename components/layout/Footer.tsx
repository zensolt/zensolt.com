import ZenLogo from "@/components/ui/ZenLogo";
import { PROCESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="zen-footer">
      <div className="zen-footer-inner">
        <div className="footer-grid">
          <div>
            <div className="zen-logo" style={{ marginBottom: 14 }}>
              <span className="zen-logo-mark">
                <ZenLogo />
              </span>
              <span>Zensolt Consultants</span>
            </div>
            <p className="desc">
              Web, mobile, cloud, and AI engineering — one team from discovery
              through launch and beyond.
            </p>
          </div>
          <div className="footer-nav-col">
            <h5>Services</h5>
            <p className="footer-nav-lead">
              Delivery areas — each links to a section on this page.
            </p>
            <ul>
              <li>
                <a href="#services">All services</a>
              </li>
              <li>
                <a href="#web">Web development</a>
              </li>
              <li>
                <a href="#mobile">Mobile apps</a>
              </li>
              <li>
                <a href="#cloud">Cloud &amp; DevOps</a>
              </li>
              <li>
                <a href="#ai">AI / ML</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h5>Company</h5>
            <p className="footer-nav-lead">
              Story, process, proof, and a direct way to reach the team.
            </p>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#cases">Case studies</a>
              </li>
              <li>
                <a href="#industries">Industries</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h5>How we work</h5>
            <p className="footer-nav-lead">
              Five phases — demos every two weeks in <strong>Build</strong>,
              observability live before <strong>Deploy</strong>.
            </p>
            <ul className="footer-proc-list">
              {PROCESS.map((p) => (
                <li key={p.num}>
                  <a href="#process">
                    <span className="footer-proc-num">{p.num}</span>
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bot">
          <span>© 2026 Zensolt Consultants — All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
