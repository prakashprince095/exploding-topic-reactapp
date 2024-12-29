import React, { useState } from "react";
import CaseStudiesCard from "./CaseStudiesCard";
import styles from "./CardList.module.css";

const CardList = () => {
  const cardData = [
    {
      title: "Streamlining Healthcare Operations",
      organization: "HealthFirst Network",
      date: "December 2023",
      description:
        "Implementing an AI-driven system to reduce patient wait times and improve care quality.",
      tags: ["Healthcare", "AI", "Process Optimization"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Reimagining Urban Transportation",
      organization: "MetroCity Council",
      date: "November 2023",
      description:
        "Designing a sustainable and efficient public transit system for a growing metropolis.",
      tags: ["Urban Planning", "Sustainability", "Transportation"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Transforming Financial Services",
      organization: "GlobalBank",
      date: "October 2023",
      description:
        "Creating a user-friendly mobile banking app that increased customer engagement by 200%.",
      tags: ["FinTech", "Mobile App", "User Engagement"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Elevating Online Education",
      organization: "EduTech Solutions",
      date: "September 2023",
      description:
        "Developing an interactive learning platform that improved student performance and retention.",
      tags: ["EdTech", "E-learning", "User Experience"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    {
      title: "Optimizing Supply Chain Management",
      organization: "LogiTech Global",
      date: "August 2023",
      description:
        "Implementing blockchain technology to enhance transparency and efficiency in global logistics.",
      tags: ["Supply Chain", "Blockchain", "Logistics"],
      imageUrl:
        "https://assets.clevelandclinic.org/transform/3e9f2415-20c9-45a8-a0ef-4f415008a18a/healthcare-workers-ai-1359494953",
    },
    // Add more card data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const visibleCards = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className={styles.mainConatiner}>
      <div className={styles.cardList}>
        <div className={styles.cardsContainer}>
          {visibleCards.map((card, index) => (
            <CaseStudiesCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
