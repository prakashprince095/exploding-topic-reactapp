import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CompanyList from "./ComapnyList/CompnayList";
import CTA from "./CTA/Cta";
import DataAnalytics from "./DataAnalytics/DataAnalytics";
import ExplodingGPT from "./Explodinggpt/Explodinggpt";
import Features from "./Feature/Feature";
import HeroSection from "./HeroSection/HeroSection";
import FeedBackMarquee from "./Marquee/FeedBackMarquee";

const Home = () => {
  return (
    <>
      <Header></Header>
      {/* <FeaturesSection></FeaturesSection> */}
      <HeroSection></HeroSection>
      {/* <FeedBackMarquee></FeedBackMarquee> */}

      <CompanyList></CompanyList>
      <ExplodingGPT></ExplodingGPT>
      <DataAnalytics></DataAnalytics>
      <Features></Features>
      <CTA></CTA>

      <Footer></Footer>
    </>
  );
};
export default Home;
