// FeaturedCaseStudy.jsx
import React from "react";
import styles from "./FeaturedCaseStudy.module.css";

const FeaturedCaseStudy = () => {
  const caseStudy = {
    title: "Revolutionizing E-commerce UX",
    organization: "TechMart Inc.",
    date: "January 2024",
    description:
      "How we improved conversion rates by 40% through innovative design solutions.",
    tags: ["E-commerce", "UX Design", "Conversion Optimization"],
    imageUrl:
      "https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.jpg?b=1&s=612x612&w=0&k=20&c=I8gIoXrpraVvPfQJ8NN3-kJKOP4yWw3FLNIsXo1dwks=",
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>Our Case Studies 📊</h2>
        <p>Explore how we’ve helped businesses transform and succeed.</p>
      </div>
      <div className={styles.featuredContainer}>
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
        ></div>
        <div className={styles.content}>
          {/* <h2 className={styles.heading}>Our Case Studies</h2>
          <p className={styles.subHeading}>
            Explore how we’ve helped businesses transform and succeed.
          </p> */}
          <div className={styles.caseStudyDetails}>
            <p className={styles.organization}>
              {caseStudy.organization} · {caseStudy.date}
            </p>
            <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
            <p className={styles.description}>{caseStudy.description}</p>
            <div className={styles.tags}>
              {caseStudy.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
