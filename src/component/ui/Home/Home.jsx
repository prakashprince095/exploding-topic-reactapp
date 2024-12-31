import Testimonial from "@/component/Pages/About us/Testimonial";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CompanyList from "./ComapnyList/CompnayList";
import CTA from "./CTA/Cta";
import DataAnalytics from "./DataAnalytics/DataAnalytics";
import ExplodingGPT from "./Explodinggpt/Explodinggpt";
import Features from "./Feature/Feature";
import HeroSection from "./HeroSection/HeroSection";
import FeedBackMarquee from "./Marquee/FeedBackMarquee";
import TrendingSection from "./Trending/TrendingSection";
import ReviewCard from "./ReviewCard/ReviewCard";

const Home = () => {
  return (
    <>
      <Header></Header>
      {/* <FeaturesSection></FeaturesSection> */}
      <HeroSection></HeroSection>
      {/* <FeedBackMarquee></FeedBackMarquee> */}
      <ReviewCard></ReviewCard>
      <CompanyList></CompanyList>
      <div>
        <TrendingSection></TrendingSection>
      </div>
      <ExplodingGPT></ExplodingGPT>
      {/* <DataAnalytics></DataAnalytics> */}
      <Features></Features>
      <Testimonial></Testimonial>
      <CTA></CTA>

      <Footer></Footer>
    </>
  );
};
export default Home;
