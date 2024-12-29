import React, { useState } from "react";
import styles from "./BlogCardList.module.css";
import BlogCard from "./BlogCard";

const BlogCardList = () => {
  const cardData = [
    {
      id: 1,
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Prashant Bhatt",
      date: "05 Jan 2024",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Product", "Tools", "Tech"],
    },
    {
      id: 2,
      title: "Building your API Stack",
      description:
        "The complete guide to building a robust API infrastructure.",
      author: "Lisa Miller",
      date: "03 Jan 2024",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Software Development", "Tech"],
    },
    {
      id: 3,
      title: "Bill Walsh leadership",
      description:
        "A deep dive into the mindset of transforming a 2-14 team into a Super Bowl winning dynasty.",
      author: "Alex Wilson",
      date: "01 Jan 2024",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Design", "Leadership"],
    },
    {
      id: 4,
      title: "PM mental models",
      description:
        "Mental models help you solve problems and make better decisions.",
      author: "David Peterson",
      date: "29 Dec 2023",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Product", "Strategy", "Framework"],
    },
    {
      id: 5,
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles plus helpful tips.",
      author: "Caroline Wu",
      date: "28 Dec 2023",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Design", "Research"],
    },
    {
      id: 6,
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger and our individual designs better.",
      author: "Rachel Craig",
      date: "26 Dec 2023",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Design", "Research"],
    },
    {
      id: 7,
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger and our individual designs better.",
      author: "Rachel Craig",
      date: "26 Dec 2023",
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/36/71/writing-an-article-for-blog-on-computer-vector-7813671.jpg",
      tags: ["Design", "Research"],
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
            <BlogCard key={index} {...card} />
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

export default BlogCardList;
