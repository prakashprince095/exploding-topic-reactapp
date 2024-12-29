import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import CTA from "@/component/ui/Home/CTA/CTA";
import Testimonial from "../About us/Testimonial";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";
import CompanyList from "@/component/ui/Home/ComapnyList/CompnayList";
import StartupList from "./StartupList";
const TrendingStartups = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <StartupList></StartupList>
      <CompanyList></CompanyList>
      <Testimonial></Testimonial>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default TrendingStartups;
