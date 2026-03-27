export function ShowcaseStepContent({ step }) {
  if (step.contentType === "ownership") {
    return (
      <div className="showcase-rich-screen showcase-rich-screen-ownership">
        <div className="ownership-summary-card">
          <span className="showcase-ui-kicker">Metadata passport</span>
          <strong>{step.label} registry</strong>
          <div className="ownership-status-row">
            <span>BioScan locked</span>
            <span>Battery 82%</span>
          </div>
        </div>

        <div className="ownership-grid">
          <div className="ownership-cell">
            <span>Owner</span>
            <strong>Jordan Vale</strong>
          </div>
          <div className="ownership-cell">
            <span>Device ID</span>
            <strong>JN-04-A7</strong>
          </div>
          <div className="ownership-cell">
            <span>Transfer lock</span>
            <strong>Enabled</strong>
          </div>
          <div className="ownership-cell">
            <span>Powerbank</span>
            <strong>Connected</strong>
          </div>
        </div>

        <div className="ownership-timeline">
          <div>
            <span>Provisioned</span>
            <strong>14 Jan 2026</strong>
          </div>
          <div>
            <span>Last unlock</span>
            <strong>21:43</strong>
          </div>
          <div>
            <span>App trust</span>
            <strong>12 active</strong>
          </div>
        </div>
      </div>
    );
  }

  if (step.contentType === "world") {
    return (
      <div className="showcase-rich-screen showcase-rich-screen-world">
        <div className="world-stat-card">
          <span className="showcase-ui-kicker">World systems</span>
          <strong>Garage, dispatch, bank</strong>
          <p>Everything reachable from one pocket surface.</p>
        </div>

        <div className="world-grid">
          <div className="world-panel world-panel-map">
            <span>Live route</span>
            <strong>Alta to Vespucci</strong>
          </div>
          <div className="world-panel">
            <span>Garage</span>
            <strong>3 ready</strong>
          </div>
          <div className="world-panel">
            <span>Fleeca</span>
            <strong>$18,400</strong>
          </div>
          <div className="world-panel">
            <span>Emergency</span>
            <strong>2 alerts</strong>
          </div>
        </div>
      </div>
    );
  }

  if (step.contentType === "social") {
    return (
      <div className="showcase-rich-screen showcase-rich-screen-social">
        <div className="social-profile-card">
          <span className="showcase-ui-kicker">Vibeshot feed</span>
          <strong>@jordan.vale</strong>
          <p>Stories, reactions, mentions, and posts stay visually alive.</p>
        </div>

        <div className="social-cards">
          <div className="social-card social-card-tall">
            <span>Story lane</span>
            <strong>3 live cards</strong>
          </div>
          <div className="social-card">
            <span>Mentions</span>
            <strong>12 new</strong>
          </div>
          <div className="social-card">
            <span>Reactions</span>
            <strong>148 active</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="showcase-rich-screen showcase-rich-screen-communication">
      <div className="chat-preview-card">
        <span className="showcase-ui-kicker">WhisApp thread</span>
        <strong>Live location pinned</strong>
        <div className="chat-bubbles">
          <span className="chat-bubble bubble-left">Meet at Pillbox in 5.</span>
          <span className="chat-bubble bubble-right">Pinned route shared.</span>
          <span className="chat-bubble bubble-left">Voice note attached.</span>
        </div>
      </div>

      <div className="communication-side-stack">
        <div className="communication-panel">
          <span>Contact card</span>
          <strong>Jordan Vale</strong>
        </div>
        <div className="communication-panel">
          <span>Live share</span>
          <strong>8h active</strong>
        </div>
      </div>
    </div>
  );
}
