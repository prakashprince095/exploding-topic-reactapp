import styles from "./FrequentQuestion.module.css";
import { useState } from "react";
const FrequentQuestion = ({ faqData }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedQuestion(null); // Reset expanded question when changing tabs
  };

  const toggleAnswer = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className={styles.faqcontainer}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabbutton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className={styles.faqcontent}>
          {faqData[activeTab].map((item, index) => (
            <div
              key={index}
              className={`${styles.faqitem} ${
                expandedQuestion === index ? styles.expanded : ""
              }`}
            >
              <div className={styles.faqheader}>
                <span className={styles.faqquestion}>{item.question}</span>
                <button
                  className={styles.dropdownbutton}
                  onClick={() => toggleAnswer(index)}
                >
                  {expandedQuestion === index ? "▲" : "▼"}
                </button>
              </div>
              {expandedQuestion === index && (
                <div className={styles.faqanswer}>{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FrequentQuestion;
