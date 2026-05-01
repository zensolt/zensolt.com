export default function AIML() {
  return (
    <section id="ai" className="zen-section">
      <div className="zen-section-head">
        <div className="zen-eyebrow">AI / ML Solutions</div>
        <h2 className="zen-h2">AI that lives inside your product.</h2>
        <p className="zen-lead">
          RAG systems, conversational interfaces, call scoring, and predictive
          models — designed and deployed alongside the rest of your stack so
          they&apos;re observable, evaluable, and supportable.
        </p>
      </div>
      <div className="ai-feature">
        <div>
          <h3 className="zen-h3" style={{ fontSize: 24 }}>
            End-to-end AI engineering
          </h3>
          <p
            style={{
              color: "var(--ink-2)",
              fontSize: 15,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            From prompt design and retrieval architecture to evaluation and
            production rollout — including realtime voice with OpenAI Realtime
            API and LiveKit.
          </p>
          <ul className="ai-bullets">
            <li>RAG pipelines with vector search and source-cited answers</li>
            <li>LLM integrations with prompt versioning and evals</li>
            <li>Conversational and voice agents with tool-use and memory</li>
            <li>Call scoring &amp; predictive models on your real data</li>
          </ul>
        </div>
        <div className="ai-flow">
          <div className="row">
            <div className="step">1</div>
            <div className="lbl">
              Ingest
              <small>Documents, calls, events, knowledge bases</small>
            </div>
          </div>
          <div className="row">
            <div className="step">2</div>
            <div className="lbl">
              Embed &amp; index
              <small>Vector search · chunking · metadata filters</small>
            </div>
          </div>
          <div className="row">
            <div className="step">3</div>
            <div className="lbl">
              Reason
              <small>LLM orchestration · tools · structured output</small>
            </div>
          </div>
          <div className="row">
            <div className="step">4</div>
            <div className="lbl">
              Evaluate
              <small>Grounding · safety · regression tests · CI</small>
            </div>
          </div>
          <div className="row">
            <div className="step">5</div>
            <div className="lbl">
              Serve
              <small>API · realtime voice · audit log · cost guards</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
