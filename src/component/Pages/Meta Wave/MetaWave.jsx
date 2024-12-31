import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import Testimonial from "../About us/Testimonial";
import CTA from "@/component/ui/Home/CTA/CTA";
import styles from "./MetaWave.module.css";
import Rwave from "/products/meta-wave/R-wave.svg";
import img1 from "/products/meta-wave/1.svg";
import img2 from "/products/meta-wave/2.svg";
import img3 from "/products/meta-wave/3.svg";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";

const MetaWave = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <div className={styles.industryTrends}>
        <div
          className="max-w-[1440px] mx-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12">
            Why Exploading is the best tool for Meta Trends?
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-[1440px]">
            {/* Card 1 */}
            <div
              className={`${styles.customCardStyle} ${styles.customCard} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className="flex flex-col space-y-1.5 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wallet-cards w-8 h-8"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
                  <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
                </svg>
                <h3 className="tracking-tight text-xl font-medium">
                  Curated Discovery:
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Step into realms where every trend unfolds,
                  <br />
                  From tech&amp;asap;s bold leap to habits reshaped and told.
                </p>
              </div>
              <div>
                <img
                  alt="Curated Discovery"
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  src={img1}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`${styles.customCardStyle} ${styles.customCard} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className="flex flex-col space-y-1.5 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mouse-pointer-click w-8 h-8"
                >
                  <path d="M14 4.1 12 6"></path>
                  <path d="m5.1 8-2.9-.8"></path>
                  <path d="m6 12-1.9 2"></path>
                  <path d="M7.2 2.2 8 5.1"></path>
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                </svg>
                <h3 className="tracking-tight text-xl font-medium">
                  Tailored Insights:
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Each category a portal, waiting for your gaze,
                  <br />
                  To unlock trends that shape tomorrow's days.
                </p>
              </div>
              <div>
                <img
                  alt="Tailored Insights"
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  src={img2}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`${styles.customCardStyle} ${styles.customCard} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className="flex flex-col space-y-1.5 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tv-minimal-play w-8 h-8"
                >
                  <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
                  <path d="M7 21h10"></path>
                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                </svg>
                <h3 className="tracking-tight text-xl font-medium">
                  Deeper Dive:
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Click and journey through a trends rise and sway,
                  <br />
                  Its path, its power, and the future it will lay.
                </p>
              </div>
              <div>
                <img
                  alt="Deeper Dive"
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  src={img3}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainerHeading}>
        <h3>Meta Trend Details</h3>
        <p>
          Unlock an in-depth exploration of what makes a trend impactful. Learn
          its origin, evolution, and potential future, supported by detailed
          analysis and expert commentary.
        </p>
        <button type="button" className="btn btn-primary">
          Try Exploding
        </button>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.graphinsights}>
          <div
            class="border-[#D9D9D9]  bg-[#FAFAFA] border-[1px] w-full p-7 flex flex-col items-center rounded-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="Startup Ecosystem Visualization"
              loading="lazy"
              width="1280"
              height="850"
              decoding="async"
              data-nimg="1"
              class="rounded-lg shadow-sm"
              src={Rwave}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <Testimonial></Testimonial>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};

export default MetaWave;
