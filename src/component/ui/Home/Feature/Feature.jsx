import React from "react";
import FeatureCard from "./FeatureCard";
import "./Feature.css"; // Importing Feature.css from the same folder

const Features = () => {
  const featureList = [
    {
      icon: "📈",
      title: "Real-Time Data Updates",
      description:
        "Never miss an opportunity. Our data refreshes in real time, ensuring you always have the latest insights.",
    },
    {
      icon: "🛠️",
      title: "Advanced Filtering Options",
      description:
        "Customize your search based on industries, funding stages, regions, and more for hyper-targeted results.",
    },
    {
      icon: "📊",
      title: "In-Depth Analytics",
      description:
        "Beyond raw data, our analytics tools uncover patterns, trends, and actionable insights.",
    },
    {
      icon: "☁️",
      title: "Custom Dashboards",
      description:
        "Personalize your view to track metrics and KPIs that matter most to you.",
    },
    {
      icon: "👥",
      title: "Founder and Investor Profiles",
      description:
        "Access detailed profiles to discover influential players and potential collaborators.",
    },
    {
      icon: "📏",
      title: "Industry Benchmarking Tools",
      description:
        "Compare your performance against industry leaders to identify gaps and opportunities.",
    },
    {
      icon: "🤝",
      title: "Collaboration Features",
      description:
        "Share dashboards, reports, and insights seamlessly with your team.",
    },
    {
      icon: "🔒",
      title: "Secure and Reliable",
      description:
        "Your data is protected with industry-standard security protocols, ensuring privacy and trust.",
    },
  ];

  return (
    <div className="features-container">
      <h2>
        Features Designed for <span>Your Success</span>
      </h2>
      {/* <p>
        Highlighting the platform’s standout features ensures users recognize
        its unique value proposition. Each feature card explains how it solves
        user pain points or creates opportunities.
      </p> */}
      <span>
        Highlighting the platform’s standout features ensures users recognize
        its unique value proposition. Each Whitespace and line breaks will be
        preserved. You can also add indentation.
      </span>

      <div className="feature-grid">
        {featureList.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
