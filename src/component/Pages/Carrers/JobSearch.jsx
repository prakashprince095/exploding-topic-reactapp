import React from "react";
import styles from "./JobSearch.module.css";

const JobSearch = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Open Positions</h1>

      {/* Search and Department Filters */}
      <div className={styles.filters}>
        <label htmlFor="department" className={styles.search}>
          Search
        </label>
        <label htmlFor="department" className={styles.label}>
          Department
        </label>
      </div>
      <div className={styles.filters}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search jobs..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.department}>
          <select id="department" className={styles.select}>
            <option value="all">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div>
      </div>

      {/* No Matches Section */}
      <div className={styles.noMatchSection}>
        <h2 className={styles.noMatchHeading}>Don't see the right fit?</h2>
        <p className={styles.noMatchText}>
          We're always looking for talented individuals to join our team. Send
          us your resume, and we'll keep you in mind for future opportunities.
        </p>
        <button className={styles.submitButton}>
          Submit Your Resume <span className={styles.icon}>📤</span>
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
