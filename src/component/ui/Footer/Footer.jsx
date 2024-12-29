import styles from "./footer.module.css";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <>
      <footer className={`  footer-mainContainer `}>
        <div className={`${styles.footerContainer} firstconatiner`}>
          <div className={`footerFirst `}>
            <div className={styles.footerBrand}>
              <h4>Exploding</h4>
              <p>Mumbai, India</p>
            </div>

            <div className={styles.footerSection}>
              {/* <h5>Products</h5> */}
              <ul>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Enterprise</a>
                </li>
                <li>
                  <a href="#">Extension</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              {/* <h5>Company</h5> */}
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Data</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Trends */}
          <div className={styles.footerTrends}>
            <div className={styles.footerTrendsHeader}>
              <h5>Trends</h5>

              <div className={`${styles.footerTrendsGrid} trendsConatiner`}>
                {/* Trend Sections */}
                <div className="trendFirst">
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Health & Wellness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Diet Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Fitness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Healthcare Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Pharma Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Sleep Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Vitamin & Supplement Trends </a>
                    </li>
                  </ul>
                </div>
                <div className="trendFirst">
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Health & Wellness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Diet Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Fitness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Healthcare Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Pharma Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Sleep Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Vitamin & Supplement Trends </a>
                    </li>
                  </ul>
                </div>
                <div className="trendFirst">
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Health & Wellness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Diet Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Fitness Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Healthcare Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Pharma Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Sleep Trends</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Vitamin & Supplement Trends </a>
                    </li>
                  </ul>
                </div>
                <a href="#">View all categories →</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
