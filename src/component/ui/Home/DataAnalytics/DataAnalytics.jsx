import React from "react";
import "./DataAnalytics.css";
import { motion } from "framer-motion";

const DataAnalytics = () => {
  <motion.div
    className="line-animation"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5 }}
  />;
  return (
    <div className="data-analytics-container">
      <div className="data-analytics-content">
        <h2>
          Our Data for <span>Analytics</span>
        </h2>
        <p>
          Gain insights and make data-driven decisions with our advanced
          analytics tools.
        </p>
        <div className="data-analytics-details">
          <h3>The Foundation of Reliable Insights</h3>
          <p>
            Our data is sourced from trusted platforms like Crunchbase, Amazon,
            Twitter, Instagram, and TikTok, enhanced with AI algorithms, and
            updated in real-time to ensure accuracy and relevance.
          </p>
          <ul>
            <li>Trusted sources and public databases</li>
            <li>AI-powered analysis for deeper insights</li>
            <li>Real-time updates for accuracy</li>
          </ul>
          <div className="cta-buttons">
            <button className="get-started-btn">Get Started →</button>
            <button className="try-free-btn">Try Free →</button>
          </div>
        </div>
      </div>
      <div className="data-analytics-visual">
        <div className="center-icon">⚙️</div>
        <div className="connected-icons">
          <div className="connected-icon google-drive">📁</div>
          <div className="connected-icon docs">📄</div>
          <div className="connected-icon whatsapp">💬</div>
          <div className="connected-icon messenger">💌</div>
          <div className="connected-icon notion">📝</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DataAnalytics;
