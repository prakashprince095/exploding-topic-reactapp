import React from "react";
import styles from "./StartupCard.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const StartupCard = ({ startup }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <h3>{startup.name}</h3>
        <div className={styles.funding}>Funding: {startup.funding}</div>
      </div>
      <p>{startup.description}</p>
      <p className={styles.location}>{startup.location}</p>
      <div className={styles.graph}>
        <LineChart width={250} height={100} data={startup.graphData}>
          <Line type="monotone" dataKey="value" stroke="#007bff" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className={styles.actions}>
        <button>🔗</button>
        <button>↗</button>
      </div>
    </div>
  );
};

export default StartupCard;
