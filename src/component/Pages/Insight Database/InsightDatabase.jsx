import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import CTA from "@/component/ui/Home/CTA/CTA";
import Testimonial from "../About us/Testimonial";
import DeepDiveInsightDatabase from "./DeepDiveInsightDatabase";

const InsightDatabase = () => {
  return (
    <>
      <Header></Header>
      <h2>Insights Database Page </h2>
      <DeepDiveInsightDatabase></DeepDiveInsightDatabase>
      <Testimonial></Testimonial>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default InsightDatabase;
