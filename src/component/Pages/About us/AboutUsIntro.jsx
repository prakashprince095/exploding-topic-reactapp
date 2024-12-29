import FeatureCard from "@/component/ui/Home/Feature/FeatureCard";
import styles from "./AboutUsIntro.module.css";
import { CiGlobe } from "react-icons/ci";
import { SiGoogleanalytics } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { SiPagespeedinsights } from "react-icons/si";

const AboutUsIntro = () => {
  const featureList = [
    {
      icon: <CiGlobe />,
      title: "Global Reach",
      description:
        "Access data from around the world to uncover trends, expand into new markets, and understand global audiences.",
    },
    {
      icon: <SiPagespeedinsights />,
      title: "Real-time Insights",
      description:
        "Leverage cutting-edge analytics to stay ahead with up-to-the-minute insights and data-driven decision-making.",
    },
    {
      icon: <SiSpringsecurity />,
      title: "Advanced Security",
      description:
        "Your data is safe with us. We employ top-notch encryption and adhere to strict privacy standards to protect your information.",
    },
    {
      icon: <SiGoogleanalytics />,
      title: "Actionable Analytics",
      description:
        "Transform raw data into meaningful insights that fuel growth, efficiency, and innovation for your business.Your Success is our goal.",
    },
  ];
  return (
    <>
      <div className={styles.introcontainer}>
        <div className={styles.heading}>
          <h3>Who We Are </h3>
          <p>
            At Global Data Insights , we harness the power of data to inspire
            innovation and empower buisness to achieve new heights{" "}
          </p>
        </div>
        <div className={`feature-grid ${styles.featureCard}`}>
          {featureList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AboutUsIntro;
