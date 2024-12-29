import styles from "./RelatedTrends.module.css";
const RealtedTrends = () => {
  const trends = [
    { name: "OpenAI", change: "+10%", count: "74K", positive: true },
    {
      name: "Microsoft Cooperation",
      change: "-10%",
      count: "74K",
      positive: false,
    },
    { name: "OpenAI", change: "+10%", count: "74K", positive: true },
    {
      name: "Microsoft Cooperation",
      change: "-10%",
      count: "74K",
      positive: false,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Related Trends:</h2>
        <div className={styles.grid}>
          {trends.map((trend, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}></div>
              <div className={styles.content}>
                <span className={styles.name}>{trend.name}</span>
                <span
                  className={`${styles.change} ${
                    trend.positive ? styles.positive : styles.negative
                  }`}
                >
                  {trend.change}
                </span>
                <span className={styles.count}>{trend.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RealtedTrends;
