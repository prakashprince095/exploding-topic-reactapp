import styles from "./ThirdSection.module.css";
import { responseData } from "../trendingstartup-data";
const ThirdSection = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Key Indicators Section */}
        <div className={styles.section}>
          <h3 className={styles.header}>
            <i className={styles.icon}></i> Key Indicators:
          </h3>
          <div className={styles.indicators}>
            {[
              "Growth",
              "Seasonality",
              "Speed",
              "Volatility",
              "Sentiment",
              "Forecast",
            ].map((indicator, index) => (
              <div key={index} className={styles.indicatorRow}>
                <span className={styles.label}>{indicator}:</span>
                <div className={styles.levels}>
                  <button
                    className={`${styles.level} ${
                      index % 3 === 1 ? styles.active : ""
                    }`}
                  >
                    Low
                  </button>
                  <button
                    className={`${styles.level} ${
                      index % 3 === 2 ? styles.active : ""
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    className={`${styles.level} ${
                      index % 3 === 0 ? styles.active : ""
                    }`}
                  >
                    High
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channels Section */}
        <div className={styles.section}>
          <h3 className={styles.header}>
            <i className={styles.icon}></i> Channels:
          </h3>
          <div className={styles.channels}>
            {[
              { name: "LinkedIn", percentage: 80 },
              { name: "Instagram", percentage: 70 },
              { name: "Facebook", percentage: 60 },
              { name: "Reddit", percentage: 50 },
              { name: "Youtube", percentage: 40 },
              { name: "Pinterest", percentage: 30 },
              { name: "TikTok", percentage: 20 },
            ].map((channel, index) => (
              <div key={index} className={styles.channelRow}>
                <div className={styles.channelInfo}>
                  <img
                    src={`${channel.name.toLowerCase()}-icon.png`}
                    alt={channel.name}
                    className={styles.channelIcon}
                  />
                  <span className={styles.channelName}>{channel.name}</span>
                </div>
                <div className={styles.channelBar}>
                  <div
                    className={styles.channelProgress}
                    style={{ width: `${channel.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories and Reports Section */}
        <div className={styles.sideSection}>
          <div className={styles.categories}>
            <h4 className={styles.sideHeader}>Categories:</h4>
            <div className={styles.tags}>
              {responseData.crunchbaseData.data.organization.industries.map(
                (tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className={styles.reports}>
            <h4 className={styles.sideHeader}>Reports:</h4>
            <div className={styles.tags}>
              {["AI", "Technology", "Software"].map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThirdSection;
