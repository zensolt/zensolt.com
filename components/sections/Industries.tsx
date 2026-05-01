import { INDUSTRIES } from "@/lib/data";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

export default function Industries() {
  return (
    <section id="industries" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Industries</div>
        <h2 className="zen-h2">Domain context, where it counts.</h2>
        <p className="zen-lead">
          Compliance, real-time data, and uptime expectations vary by sector. We
          factor that in before we commit to timelines or architecture.
        </p>
      </div>
      <div className="ind-grid">
        {INDUSTRIES.map((i) => (
          <div className="ind-card" key={i.name}>
            <div className="ind-icon">
              <Icon name={i.icon as IconName} size={28} />
            </div>
            <h4>{i.name}</h4>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
