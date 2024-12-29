import React, { useState } from "react";
import "./MetaWaveHomePage.css"; // Optional CSS file for styling

// Card Component
const Card = ({ title, description, volume, growth }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-footer">
        <span className="volume volume-custom-className">Volume: {volume}</span>
        <span className="growth growth-custom-className">
          Growth: {growth}%
        </span>
      </div>
      {isExpanded && (
        <div className="additional-info">
          <p>More details about {title}...</p>
        </div>
      )}
      <button
        type="button"
        className=" toggle-button btn btn-primary"
        onClick={toggleExpansion}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
      {/* <button className="toggle-button" onClick={toggleExpansion}>
        {isExpanded ? "Show Less" : "Show More"}
      </button> */}
    </div>
  );
};

// MetaTrendsPage Component
const MetaWaveHomePage = () => {
  // Mock data (Replace with API data if available)
  const data = [
    {
      title: "AI Transcription",
      description:
        "Service that provides free, accurate AI-based transcriptions...",
      volume: "12.1K",
      growth: 7600,
    },
    {
      title: "AI Video Enhancers",
      description: "AI tools to enhance video quality...",
      volume: "10.2K",
      growth: 5800,
    },
    {
      title: "AI in Education",
      description: "Innovative tools to assist with learning and teaching...",
      volume: "8.3K",
      growth: 4800,
    },
    {
      title: "AI-Powered Content Generating Tools",
      description: "AI tools to generate written content...",
      volume: "7.8K",
      growth: 4200,
    },
    {
      title: "Text-to-Video Tools",
      description: "AI that converts text into videos...",
      volume: "6.4K",
      growth: 6200,
    },
    {
      title: "AI Presentation Makers",
      description: "Tools to create presentations using AI...",
      volume: "5.1K",
      growth: 3500,
    },
    {
      title: "AI Transcription",
      description:
        "Service that provides free, accurate AI-based transcriptions...",
      volume: "12.1K",
      growth: 7600,
    },
    {
      title: "AI Video Enhancers",
      description: "AI tools to enhance video quality...",
      volume: "10.2K",
      growth: 5800,
    },
    {
      title: "AI in Education",
      description: "Innovative tools to assist with learning and teaching...",
      volume: "8.3K",
      growth: 4800,
    },
    {
      title: "AI-Powered Content Generating Tools",
      description: "AI tools to generate written content...",
      volume: "7.8K",
      growth: 4200,
    },
    {
      title: "Text-to-Video Tools",
      description: "AI that converts text into videos...",
      volume: "6.4K",
      growth: 6200,
    },
    {
      title: "AI Presentation Makers",
      description: "Tools to create presentations using AI...",
      volume: "5.1K",
      growth: 3500,
    },
  ];

  return (
    <div className="meta-trends-page">
      <h1>Meta Trends</h1>
      <h2>Trending</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            volume={item.volume}
            growth={item.growth}
          />
        ))}
      </div>
    </div>
  );
};

export default MetaWaveHomePage;
