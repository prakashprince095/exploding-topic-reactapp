import React from "react";
import StartupCard from "./StartupCard";
import styles from "./StartupList.module.css";

const data = [
  {
    name: "Alibaba Group",
    funding: "$129B",
    description: "A tech firm with a focus on ...",
    location: "Seattle, United States",
    graphData: [
      { month: "Jan", value: 100 },
      { month: "Feb", value: 120 },
      { month: "Mar", value: 140 },
      { month: "Apr", value: 130 },
    ],
  },
  {
    name: "Canada Drives",
    funding: "$129B",
    description: "A tech firm with a focus on ...",
    location: "Seattle, United States",
    graphData: [
      { month: "Jan", value: 110 },
      { month: "Feb", value: 115 },
      { month: "Mar", value: 105 },
      { month: "Apr", value: 125 },
    ],
  },
  {
    name: "Mystery Tackle Box",
    funding: "$129B",
    description: "A tech firm with a focus on ...",
    location: "Seattle, United States",
    graphData: [
      { month: "Jan", value: 120 },
      { month: "Feb", value: 100 },
      { month: "Mar", value: 110 },
      { month: "Apr", value: 130 },
    ],
  },
];

const StartupList = () => {
  return (
    <div className={styles.container}>
      <h2>Discover the leading startups at a glance</h2>
      <p>
        Each card reveals key insights like funding, growth trends, and
        location, offering a snapshot of innovation to help you explore
        opportunities effortlessly.
      </p>
      <div className={styles.cardList}>
        {data.map((startup, index) => (
          <StartupCard key={index} startup={startup} />
        ))}
      </div>
      <button className={styles.seeMore}>See More Trends ➡️</button>
    </div>
  );
};

export default StartupList;
