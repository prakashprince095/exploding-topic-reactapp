import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import AboutUsIntro from "./AboutUsIntro";
import OurTeamIntro from "./OurTeamIntro";
import Testimonial from "./Testimonial";
import CTA from "@/component/ui/Home/CTA/CTA";
const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <AboutUsIntro></AboutUsIntro>
      <OurTeamIntro></OurTeamIntro>
      <Testimonial></Testimonial>
      <CTA></CTA>

      <Footer></Footer>
    </>
  );
};
export default AboutUs;
