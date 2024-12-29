import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import OurCulture from "./OurCulture";
import JobSearch from "./JobSearch";
import IntroCarrerPage from "./IntroCarrerPage";
import styles from "./Carrers.module.css";

const Careers = () => {
  return (
    <>
      <Header></Header>
      {/* <div className={styles.mainconatiner}> */}
      <IntroCarrerPage></IntroCarrerPage>
      <OurCulture></OurCulture>
      <JobSearch></JobSearch>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
};
export default Careers;
