import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">Process</div>
        <h2 className="zen-h2">Five steps, no surprises.</h2>
        <p className="zen-lead">
          A process designed for accountability — measurable progress every two
          weeks, not a black box that returns three months later.
        </p>
      </div>
      <div className="process-list">
        {PROCESS.map((p) => (
          <div className="proc-row" key={p.num}>
            <div className="proc-num">{p.num} / STEP</div>
            <div className="proc-name">{p.name}</div>
            <div className="proc-desc">{p.desc}</div>
            <div className="proc-deliver">
              {p.deliver.map((d) => (
                <div key={d}>→ {d}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
