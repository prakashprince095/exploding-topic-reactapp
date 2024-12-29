import React from "react";
import styles from "./OurCulture.module.css";

const OurCulture = () => {
  return (
    <div className={styles.container}>
      {/* Culture Section */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Our Culture</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Innovation</h3>
            <p>
              We encourage creative thinking and embrace new ideas to solve
              complex problems.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Diversity & Inclusion</h3>
            <p>
              We celebrate diversity and create an inclusive environment where
              everyone feels valued.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Continuous Learning</h3>
            <p>
              We invest in our employees' growth through training, workshops,
              and conference attendance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.section}>
        <h2 className={styles.heading}>What Our Employees Say</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Employee"
              className={styles.employeeImage}
            />
            <div className={styles.textContent}>
              <h3 className={styles.name}>Jane Doe</h3>
              <p className={styles.designation}>Senior Developer</p>
              <p className={styles.quote}>
                "Working here has been an incredible journey. The supportive
                environment and challenging projects have helped me grow both
                personally and professionally."
              </p>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <img
              src="https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
              alt="Employee"
              className={styles.employeeImage}
            />
            <div className={styles.textContent}>
              <h3 className={styles.name}>John Smith</h3>
              <p className={styles.designation}>Product Manager</p>
              <p className={styles.quote}>
                "The collaborative culture here is unmatched. I've had the
                opportunity to work with brilliant minds and create products
                that truly make a difference."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCulture;
