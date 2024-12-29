import styles from "./RelatedStartups.module.css";
const RelatedStartups = () => {
  const startups = [
    {
      name: "OpenAI",
      volume: "45K",
      growthRate: "+15%",
      revenue: "$20B",
      description:
        "OpenAI, founded in 2015, develops advanced AI technologies like ChatGPT and DALL·E to benefit humanity. It focuses on innovation, safety, and ethical AI use, shaping the future responsibly.",
      logo: "https://via.placeholder.com/40", // Replace with actual logo URL
    },
    {
      name: "Microsoft",
      volume: "45K",
      growthRate: "+07%",
      revenue: "$400B",
      description:
        "OpenAI, founded in 2015, develops advanced AI technologies like ChatGPT and DALL·E to benefit humanity. It focuses on innovation, safety, and ethical AI use, shaping the future responsibly.",
      logo: "https://via.placeholder.com/40", // Replace with actual logo URL
    },
    {
      name: "Microsoft",
      volume: "45K",
      growthRate: "+07%",
      revenue: "$400B",
      description:
        "OpenAI, founded in 2015, develops advanced AI technologies like ChatGPT and DALL·E to benefit humanity. It focuses on innovation, safety, and ethical AI use, shaping the future responsibly.",
      logo: "https://via.placeholder.com/40", // Replace with actual logo URL
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Related Startups:</h2>
        <div className={styles.cards}>
          {startups.map((startup, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.headerSection}>
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className={styles.logo}
                />
                <span className={styles.name}>{startup.name}</span>
              </div>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.icon}>📦</span>
                  <span className={styles.metricLabel}>Volume:</span>
                  <span className={styles.metricValue}>{startup.volume}</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.icon}>📈</span>
                  <span className={styles.metricLabel}>Growth Rate:</span>
                  <span
                    className={`${styles.metricValue} ${
                      startup.growthRate.startsWith("+")
                        ? styles.positive
                        : styles.negative
                    }`}
                  >
                    {startup.growthRate}
                  </span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.icon}>🔄</span>
                  <span className={styles.metricLabel}>Revenue:</span>
                  <span className={styles.metricValue}>{startup.revenue}</span>
                </div>
              </div>
              <p className={styles.description}>{startup.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RelatedStartups;
