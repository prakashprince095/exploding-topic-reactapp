import { responseData } from "../trendingstartup-data";
import styles from "./IntroSection.module.css";
import facebooklogo from "../../../../assets/SocialMedia/facebook-logo.jpg";
import linkdinlogo from "../../../../assets/SocialMedia/LinkdIn_logo2.png";
import twitterlogo from "../../../../assets/SocialMedia/twitter-logo.avif";
const IntroSection = ({ data }) => {
  console.log(
    "the data that is being recieved from the api ",
    responseData.crunchbaseData.data
  );
  const crunchbaseData = responseData.crunchbaseData.data;
  console.log(
    "the url of the social media are ",
    crunchbaseData.organization.social_media
  );
  const socialMedia = crunchbaseData.organization.social_media;
  const linkedinUrl = socialMedia.find(
    (platform) => platform.name === "linkedin"
  )?.link;
  const facebookUrl = socialMedia.find(
    (platform) => platform.name === "facebook"
  )?.link;
  const twitterUrl = socialMedia.find(
    (platform) => platform.name === "twitter"
  )?.link;

  return (
    <>
      <div className={styles.card}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoText}>A</span>
          </div>
          <div>
            <h2 className={styles.companyName}>
              {crunchbaseData.organization.name}
            </h2>
            <p className={styles.yearsInMarket}>4 years in market</p>
          </div>
        </div>

        {/* Description Section */}
        <p className={styles.description}>
          {crunchbaseData.organization.about}
        </p>

        {/* Details Section */}
        <div className={styles.details}>
          <h3 className={styles.detailsHeader}>Details:</h3>
          <p>
            <strong>Founded:</strong> {crunchbaseData.organization.founded_date}
          </p>
          <p>
            <strong>Employees:</strong>{" "}
            {crunchbaseData.organization.num_employees}
          </p>
          <p>
            <strong>Total Funding:</strong>{" "}
            {/* {crunchbaseData.organization.funding_info} */}
          </p>
          <p>
            <strong>Latest Round:</strong> Series A
          </p>
          <p>
            <strong>Location:</strong> {crunchbaseData.organization.address}
          </p>
          <p>
            <strong>Product:</strong>{" "}
            <a
              href={crunchbaseData.organization.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {crunchbaseData.organization.url}
            </a>
          </p>

          <div className={styles.socialPlatforms}>
            <strong>Social Platforms:</strong>
            <div className={styles.icons}>
              {/* Use the extracted variables in href */}
              {linkedinUrl && (
                <a
                  href={linkedinUrl} // Set the URL from the variable
                  className={styles.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkdinlogo}
                    alt="LinkedIn"
                    className={styles.imglogo}
                  />
                </a>
              )}

              {facebookUrl && (
                <a
                  href={facebookUrl} // Set the URL from the variable
                  className={styles.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebooklogo}
                    alt="Facebook"
                    className={styles.imglogo}
                  />
                </a>
              )}

              {twitterUrl && (
                <a
                  href={twitterUrl} // Set the URL from the variable
                  className={styles.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterlogo}
                    alt="Twitter"
                    className={styles.imglogo}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IntroSection;
