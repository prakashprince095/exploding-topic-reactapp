import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import CardList from "./CardList";
import FeaturedCaseStudy from "./FeaturedCaseStudy";

const CaseStudies = () => {
  return (
    <>
      <Header></Header>
      <FeaturedCaseStudy></FeaturedCaseStudy>
      <CardList></CardList>
      <Footer></Footer>
    </>
  );
};
export default CaseStudies;
