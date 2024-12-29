// FeaturedCaseStudy.jsx
import React from "react";
import styles from "./FeaturedBlog.module.css";

const FeaturedBlog = () => {
  const caseStudy = {
    title: "UX review presentations ",
    organization: "David Chen",
    date: "January 10 2024",
    description:
      "How do you create compelling presentation that wow your colleagues and impress your managers?.",
    tags: ["Design", "Research", "Presentation"],
    imageUrl:
      "https://enwpgo.files.wordpress.com/2018/06/how-to-write-a-good-blog-post-header.webp",
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>Writings from our team ✍️</h2>
        <p>The latest industry news, interviews,technology and resources.</p>
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

export default FeaturedBlog;
