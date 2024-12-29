import React from "react";
import styles from "./IntroCarrerPage.module.css";

const IntroCarrerPage = () => {
  return (
    <div className={styles.mainConatiner}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Join Our Team <span className={styles.emoji}>🚀</span>
          </h1>
          <p className={styles.subtitle}>
            Discover exciting opportunities and grow your career with us.
          </p>
        </div>

        {/* Why Work With Us Section */}
        <div className={styles.whySection}>
          <h2 className={styles.whyHeading}>Why Work With Us?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}>👥</div>
              <h3 className={styles.featureTitle}>Collaborative Culture</h3>
              <p className={styles.featureDescription}>
                Work with passionate individuals in a supportive environment.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>⚡</div>
              <h3 className={styles.featureTitle}>Innovation-Driven</h3>
              <p className={styles.featureDescription}>
                Be at the forefront of technology and shape the future.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>❤️</div>
              <h3 className={styles.featureTitle}>Work-Life Balance</h3>
              <p className={styles.featureDescription}>
                Flexible schedules and generous time-off policies.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.icon}>➡️</div>
              <h3 className={styles.featureTitle}>Growth Opportunities</h3>
              <p className={styles.featureDescription}>
                Continuous learning and career advancement paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCarrerPage;
