import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="card-container cta-card">
      <h1>
        Join a Thriving Community of{" "}
        <span className="highlight">Innovators</span>
      </h1>
      <p>
        Thousands of businesses, investors, and entrepreneurs rely on our
        platform to stay ahead. Join them today and see the difference!
      </p>
      <div className="cta-buttons">
        <button className="btn btn-primary">Get Started →</button>
        <button className="btn btn-secondary">Try Free ↗</button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default CTA;
