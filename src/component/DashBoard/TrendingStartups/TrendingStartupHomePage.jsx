import DropDownDisplay from "@/component/Reusable/DropDownDisplay";
import styles from "./TrendingStartupsHomePage.module.css";
import { Link } from "react-router-dom";
const TrendingStartupHomePage = () => {
  const data = [
    {
      name: "Alibaba Group",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "Canada Drives",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "Mystery Tackle Box",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "Instamart",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "Bloomscape",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "zulily",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "Ocado Group",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
    {
      name: "CommerceHub",
      location: "Seattle, United States",
      funding: "$129B",
      description: "Amazon is a tech firm with a focus on ....",
    },
  ];
  const allCategory = [
    "Technology",
    "Buisness",
    "Socials",
    "Beauty",
    "HealthCare",
    "Finance",
    "Food",
  ];
  const countries = ["USA", "Canada", "India", "China", "UK"];
  const sortBy = ["Name", "Volume", "Profits", "Loss", "Searches"];
  const timeFrame = [
    "3 months",
    "6 months",
    "1 year",
    "2 year",
    "3 year",
    "4 year",
    "5 year",
  ];
  const totalFunding = [
    "Less than $1M",
    "$1M-$5M",
    "$5M-$10M",
    "More than $10M",
  ];
  const noOfEmployee = ["1-25", "25-50", "50-100", "100-1000", "1000-5000"];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headingcontainer}>
          <h2>Trending Startups</h2>
          <div className={styles.filters}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Startups"
            />
            {/* <button className={styles.toggleButton}>
            <i className="fas fa-th"></i>
          </button> */}
          </div>
        </div>

        <div className={styles.filtercontainer}>
          <DropDownDisplay
            dropdownvalue={allCategory}
            shownValue={"All Categories"}
          ></DropDownDisplay>
          <DropDownDisplay
            dropdownvalue={countries}
            shownValue={"Countries"}
          ></DropDownDisplay>
          <DropDownDisplay
            dropdownvalue={sortBy}
            shownValue={"Sort by"}
          ></DropDownDisplay>
          <DropDownDisplay
            dropdownvalue={timeFrame}
            shownValue={"Time Frame"}
          ></DropDownDisplay>
          <DropDownDisplay
            dropdownvalue={totalFunding}
            shownValue={"Total Funding"}
          ></DropDownDisplay>
          <DropDownDisplay
            dropdownvalue={noOfEmployee}
            shownValue={"No Of Employees"}
          ></DropDownDisplay>
        </div>

        <div className={styles.cards}>
          {data.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardImage}></div>
                <span className={styles.funding}>Funding: {item.funding}</span>
              </div>
              <p className={styles.cardTitle}>{item.name}</p>
              <p className={styles.cardDescription}>{item.description}</p>
              <p className={styles.cardLocation}>{item.location}</p>
              <div className={styles.cardChart}>
                <Link to="/dashboard/trendingstartups/details">
                  Go to Details
                </Link>
                {/* Link to /dashboard/trendingstartups/details */}
                {/* Link to /dashboard/trendingstartups/details */}
                <span>Graph Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TrendingStartupHomePage;
