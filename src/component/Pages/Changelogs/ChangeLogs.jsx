import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import TimelineWithScrollLine from "./TimelineWithScrollLine ";
import CTA from "@/component/ui/Home/CTA/CTA";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";

const ChangeLogs = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>

      <TimelineWithScrollLine></TimelineWithScrollLine>
      <CTA></CTA>

      <Footer></Footer>
    </>
  );
};
export default ChangeLogs;
