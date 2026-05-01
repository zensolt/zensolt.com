import { INDUSTRIES } from "@/lib/data";

const sectors = INDUSTRIES.map((i) => i.name);

export default function TrustStrip() {
  const summary = `Sectors we build in: ${sectors.join(", ")}.`;

  return (
    <div className="trust">
      <div className="trust-inner">
        <span className="trust-label" aria-hidden="true">
          Sectors we build in
        </span>
        <span className="trust-sr-summary">{summary}</span>
        <div className="trust-marquee" aria-hidden="true">
          <div className="trust-marquee-track">
            <div className="trust-marquee-group">
              {sectors.map((name) => (
                <span className="trust-item" key={`a-${name}`}>
                  {name}
                </span>
              ))}
            </div>
            <div className="trust-marquee-group trust-marquee-group--dup">
              {sectors.map((name) => (
                <span className="trust-item" key={`b-${name}`}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
