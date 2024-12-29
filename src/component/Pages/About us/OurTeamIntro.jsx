import React from "react";
import styles from "./OurTeamIntro.module.css";

const OurTeamIntro = () => {
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Chief Data Scientist",
      description:
        "With over 15 years of experience in machine learning and AI, Dr. Smith leads our data science initiatives.",
      image:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    },
    {
      name: "John Doe",
      role: "Head of Analytics",
      description:
        "John's expertise in business intelligence helps our clients turn data into strategic decisions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcVXIgWCvTbb55lDj91N_g2rd0F3rma21CA&s",
    },
    {
      name: "Emily Chen",
      role: "Senior Data Engineer",
      description:
        "Emily ensures our data infrastructure is robust, scalable, and secure.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
    },
    {
      name: "Michael Johnson",
      role: "UX Research Lead",
      description:
        "Michael bridges the gap between data insights and user-centric design.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Team</h2>
      <p className={styles.subheading}>
        Our diverse team of data scientists, analysts, and industry experts work
        together to deliver unparalleled insights.
      </p>
      <div className={styles.team}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.image}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamIntro;
