import DropDownDisplay from "@/component/Reusable/DropDownDisplay";
import styles from "./DiscoverProductsHomePage.module.css";
const DiscoverProductsHomePage = () => {
  const data = [
    {
      name: "EcoWidget",
      location: "Seattle, United States",
      Revenue: "$129B",
      growth: "+300K",
      description: "Eco-friendly gadget for energy savings  ....",
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
          <h2>Trending Products</h2>
          <div className={styles.filters}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Products"
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
                <span className={styles.funding}>Revenue {item.Revenue}</span>
              </div>
              <div className={styles.growthcomatiner}>
                <p className={styles.cardTitle}>{item.name}</p>
                <div className={styles.growth}>{item.growth}</div>
              </div>

              <p className={styles.cardDescription}>{item.description}</p>
              <p className={styles.cardLocation}>{item.location}</p>
              <div className={styles.cardChart}>
                {/* Placeholder for the chart */}
                <span>Graph Placeholder</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DiscoverProductsHomePage;
