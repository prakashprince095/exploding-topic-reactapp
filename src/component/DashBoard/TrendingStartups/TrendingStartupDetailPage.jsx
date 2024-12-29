import IntroSection from "./component/IntroSection";
import RelatedStartups from "./component/RelatedStartups";
import RealtedTrends from "./component/RelatedTrends";
import ThirdSection from "./component/ThirdSection";
import { responseData } from "./trendingstartup-data";
import styles from "./TrendingStartupDetailPage.module.css";
const TrendingStartupDetailPage = () => {
  console.log("the deatil page is getting rendered ");
  console.log(responseData.crunchbaseData.data.organization);
  return (
    <>
      <div>
        <h2>Trending Startup Details</h2>
        <p>Details of a specific trending startup...</p>
        {/* <p>{responseData}</p> */}
        <div className={styles.firstConatiner}>
          <IntroSection data={responseData}></IntroSection>
          <div className={styles.graphContainer}>
            <p></p>
          </div>
        </div>
        <div className={styles.thirdContainer}>
          <ThirdSection></ThirdSection>
        </div>
        <div className={styles.fourthContainer}>
          <RelatedStartups></RelatedStartups>
        </div>
        <div className={styles.fifthContainer}>
          <RealtedTrends></RealtedTrends>
        </div>
      </div>
    </>
  );
};
export default TrendingStartupDetailPage;
