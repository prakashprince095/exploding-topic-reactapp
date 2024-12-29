import React from "react";
import styles from "./CaseStudiesCard.module.css";

const CaseStudiesCard = ({
  title,
  organization,
  date,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.organization}>{organization}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
        <button type="button" className="btn btn-secondary">
          Read Case Study
        </button>
      </div>
    </div>
  );
};

export default CaseStudiesCard;
