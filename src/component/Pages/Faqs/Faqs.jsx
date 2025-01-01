import Footer from "@/component/ui/Footer/Footer";
import CTA from "@/component/ui/Home/CTA/CTA";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";
import Header from "@/component/ui/Header/Header";
import styles from "./Faqs.module.css";
import { useState } from "react";
import FrequentQuestion from "./FrequentQuestion";

const faqData = {
  general: [
    {
      question: "What is this platform, and how does it work?",
      answer:
        "Our platform provides real-time insights into trending startups and products. Users can track industry innovations, save favorites, and analyze trends to make data-driven decisions.",
    },
    {
      question: "Who can benefit from using this platform?",
      answer:
        "Entrepreneurs, investors, marketers, and e-commerce professionals looking to stay updated on industry trends, analyze data, and discover new opportunities.",
    },
    {
      question: "Is this platform available worldwide?",
      answer:
        "Yes, our platform is accessible globally, providing insights into startups and products across various industries and regions.",
    },
    {
      question: "How frequently is the data updated?",
      answer:
        "Data on our platform is updated in real-time to ensure you have the latest and most accurate information.",
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer:
        "Yes, the platform is fully optimized for desktops, tablets, and smartphones, ensuring seamless access wherever you are.",
    },
  ],
  pricing: [
    {
      question: "What subscription plans are available?",
      answer:
        "We offer three plans: Free (Basic access to data and bookmarking tools), Pro (Advanced analytics and unlimited saved items), and Enterprise (Tailored solutions for teams and organizations).",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
    },
    {
      question: "Is there a free trial for premium plans?",
      answer: "Yes, we offer a 7-day free trial for the Pro plan.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription through your account settings. Your premium features will remain active until the end of the billing period.",
    },
    {
      question: "Are there discounts for annual subscriptions?",
      answer:
        "Yes, subscribing annually saves you up to 20% compared to monthly billing.",
    },
  ],
  dashboard: [
    {
      question: "What is the dashboard, and what can I do there?",
      answer:
        "The dashboard is your personalized control center for accessing saved startups, products, and insights. It includes tools for trend analysis, bookmarking, and data visualization.",
    },
    {
      question: "How do I save startups or products to my dashboard?",
      answer:
        "Click the save button on any startup or product listing, and it will automatically be added to your Insight Hub within the dashboard.",
    },
    {
      question: "Can I organize saved items into categories?",
      answer:
        "Yes, the dashboard allows you to create custom folders or tags to organize saved startups and products.",
    },
    {
      question: "Is there a limit to how many items I can save?",
      answer:
        "Free users have a limit of 20 saved items. Upgrading to a premium plan removes this restriction.",
    },
    {
      question: "Does the dashboard provide insights on saved items?",
      answer:
        "Yes, the dashboard offers trend analysis, comparative data, and customizable charts for your saved startups and products.",
    },
  ],
};

const Faqs = () => {
  const [selectedTab, setSelectedTab] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setExpandedQuestion(null); // Collapse any expanded question when switching tabs
  };

  const handleQuestionClick = (question) => {
    setExpandedQuestion(question === expandedQuestion ? null : question);
  };
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div>
        <FrequentQuestion faqData={faqData}></FrequentQuestion>
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default Faqs;
