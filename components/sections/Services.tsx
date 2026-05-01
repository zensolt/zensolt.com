import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Services</div>
        <h2 className="zen-h2">The services behind a full product launch.</h2>
        <p className="zen-lead">
          Engage end-to-end or plug us into a specific layer. Every engagement
          is staffed to production standards — tests, observability, and clear
          handover included.
        </p>
      </div>
      <div className="svc-grid">
        {SERVICES.map((svc) => (
          <div className="svc-card" key={svc.num}>
            <div className="svc-num">{svc.num} / SERVICE</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <div className="svc-tags">
              {svc.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
