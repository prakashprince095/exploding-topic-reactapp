import React from "react";
import "./ExplodingGPT.css";
import ExplodingGPTCard from "./ExplodingGPTCards";
const ExplodingGPT = () => {
  const cards = [
    {
      icon: "🚀",
      title: "Trending Startups",
      description: "Search through all your files in one place.",
    },
    {
      icon: "📊",
      title: "Trending Products",
      description: "We automatically save your files as you type.",
    },
    {
      icon: "📈",
      title: "Meta Wave",
      description: "Supports 100+ languages and counting.",
    },
    {
      icon: "📅",
      title: "Deep Dive Analysis",
      description: "Use the calendar to filter your files by date.",
    },
    {
      icon: "📖",
      title: "Reports",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
    },
    {
      icon: "📖",
      title: "Reports",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
    },
  ];

  return (
    <div className="exploding-gpt-container">
      <h2>
        What's <span>Exploding GPT?</span>
      </h2>
      <p>
        This section provides a breakdown of what the platform offers,
        highlighting its unique strengths in clear and relatable terms.
      </p>

      <div className="exploding-gpt-grid">
        {cards.map((card, index) => (
          <ExplodingGPTCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplodingGPT;
