import DropDownDisplay from "@/component/Reusable/DropDownDisplay";
import styles from "./InsightsHubHomePage.module.css";
import { FaBookOpen } from "react-icons/fa";
import { useState } from "react";
import { AlignCenter } from "lucide-react";
const InsightsHubHomePage = () => {
  const filterSortBy = ["Category", "volume"];
  const filterby = ["Filter", "Tech", "Health", "Automobile", "Finance"];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.headingconatiner}>
          <div display="flex"></div>
          <div className={styles.heading}>
            {" "}
            <FaBookOpen /> Insights Hub
          </div>
          <div className={styles.filtercontainer}>
            <input className={styles.inputbox} placeholder="Search"></input>
            <DropDownDisplay
              dropdownvalue={filterSortBy}
              shownValue={"Sort By"}
            ></DropDownDisplay>
            <DropDownDisplay
              dropdownvalue={filterby}
              shownValue={"Filter By"}
            ></DropDownDisplay>
          </div>
        </div>
        <div className={styles.outerContainer}>
          <h3 className={styles.trendingheading}>Trending Startups</h3>
          <div className={styles.content}>
            <p>Add Startups in your Hub.</p>
            <button className={styles.startupsButton}>Startups</button>
          </div>
          <button
            className={`${styles.btn} ${styles.bottomLeft}`}
            onClick={toggleModal}
          >
            {isModalOpen ? "Show Less" : "Show More"}
          </button>

          {isModalOpen && (
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={toggleModal}>
                ×
              </button>
              <div className={styles.modalContent}>
                <p>No Product item is found.</p>
              </div>
            </div>
          )}
        </div>
        <div className={styles.outerContainer}>
          <h3 className={styles.trendingheading}>Product Discover</h3>
          <div className={styles.content}>
            <p>Add Product in your Hub.</p>
            <button className={styles.startupsButton}>Startups</button>
          </div>
          <button
            className={`${styles.btn} ${styles.bottomLeft}`}
            onClick={toggleModal}
          >
            {isModalOpen ? "Show Less" : "Show More"}
          </button>

          {isModalOpen && (
            <div className={styles.modal}>
              <button className={styles.closeBtn} onClick={toggleModal}>
                ×
              </button>
              <div className={styles.modalContent}>
                <p>No Product item is found.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default InsightsHubHomePage;
