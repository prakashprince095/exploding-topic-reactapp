import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import styles from "./DeepDiveAnalysis.module.css";
import RTrends from "/products/Deep dive analysis/R-Trends.svg";
import CTA from "@/component/ui/Home/CTA/CTA";
import img1 from "/products/Deep dive analysis/1.svg";
import img2 from "/products/Deep dive analysis/2.svg";
import img3 from "/products/Deep dive analysis/3.svg";
import channelbox from "/products/startup/Channel-box.svg";
const DeepDiveAnalysis = () => {
  return (
    <>
      <Header></Header>

      <div className={styles.secondsection}>
        <div
          className="max-w-[1440px] mx-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12">
            Why Exploading is the best tool for Industries Insight
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
                  A Glimpse of Excellence
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  In each subcategory, discover names that shine, <br />
                  From budding startups to giants in their prime.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  style={{ color: "transparent" }}
                  src={img1}
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
                  At a Glance
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Logos, stats, and stories displayed, <br />
                  Funding, teams, and HQs conveyed.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  style={{ color: "transparent" }}
                  src={img2}
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
                  Refined Exploration
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Filters to tailor your search with ease,
                  <br />
                  Precision insights for your needs to please.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="400"
                  height="350"
                  decoding="async"
                  style={{ color: "transparent" }}
                  src={img3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.insightsoverview}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-16">
            <h1 className="text-[28px] mb-4">
              Key Metrics and Insights Overview
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore detailed analytics revealing TikTok's performance locally,
              including keyword search trends, channel performance, and
              engagement. Gain a comprehensive understanding of the brand's
              visibility, growth, and reach in your selected country.
            </p>
          </header>

          <div className="space-y-24">
            {/* Section 1: Keyword Search Overview */}
            <section className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-[24px] text-gray-900">
                  Keyword Search Overview
                </h2>
                <p className="text-gray-600">
                  Dive deep into TikTok's keyword performance in your chosen
                  country. Our comprehensive analysis provides valuable insights
                  into search trends, helping you understand what resonates with
                  your local audience.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li
                    className={`${styles.alignitem}  justify-start items-start`}
                    style={{ justifycontent: "left" }}
                  >
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Track search volume trends over time</span>
                  </li>
                  <li
                    className={`${styles.alignitem}  justify-start items-start`}
                  >
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Identify top-performing keywords driving traffic
                    </span>
                  </li>
                  <li
                    className={`${styles.alignitem}  justify-start items-start`}
                  >
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Analyze TikTok's digital presence and audience resonance
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <img
                    alt="Keyword Search Overview Chart"
                    loading="lazy"
                    width="500"
                    height="400"
                    decoding="async"
                    className="w-full h-auto"
                    style={{ color: "transparent" }}
                    src={channelbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Channel Performance Analysis */}
            <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-[24px] text-gray-900">
                  Channel Performance Analysis
                </h2>
                <p className="text-gray-600">
                  Get a comprehensive view of TikTok's channel performance in
                  your target country. Our in-depth analysis helps you
                  understand the platform's growth, engagement rates, and
                  content strategy effectiveness.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>Monitor follower growth and engagement rates</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>Analyze content performance and viral trends</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span>Benchmark against competitors in the market</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <img
                    alt="Channel Performance Analysis Chart"
                    loading="lazy"
                    width="500"
                    height="400"
                    decoding="async"
                    className="w-full h-auto"
                    style={{ color: "transparent" }}
                    src={channelbox}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.conatiner2}>
        <div className={styles.img1heading}>
          <div className={styles.headingContainer}>
            <h3>Related Trends and Actions</h3>
            <p>
              This section offers an interactive table to examine TikTok's
              related trends, tracking trending topics, growth, volume, and
              more. Dive into the trends driving TikTok&ass success in the
              selected country and take actionable steps to explore these trends
              further.
            </p>
            <button type="button" className="btn btn-primary">
              Try Exploding
            </button>
          </div>
          <div className={styles.graphinsights}>
            <section
              className="border-[#D9D9D9] mx-4 lg:mx-0 bg-[#FAFAFA] border-[1px] gap-6 max-w-[1200px] p-7 flex flex-wrap items-center justify-between lg:items-start rounded-lg"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex flex-col items-start gap-3 max-w-[250px]">
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
                  className="lucide lucide-star h-9 w-9"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <h1 className="text-lg">Trending Topics:</h1>
                <p className="text-gray-500 text-sm">
                  A list of rising stars, TikTok's finest, Topics that capture,
                  the trends that are brightest. Shift with time, watch them
                  evolve, Emerging topics that problems solve.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 max-w-[250px]">
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
                  className="lucide lucide-cable h-9 w-9"
                >
                  <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"></path>
                  <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"></path>
                  <path d="M21 21v-2h-4"></path>
                  <path d="M3 5h4V3"></path>
                  <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"></path>
                </svg>
                <h1 className="text-lg">Growth and Volume:</h1>
                <p className="text-gray-500 text-sm">
                  Metrics that show the climb so steep, How TikTok's popularity
                  begins to leap. Growth in numbers, search volume too, From
                  weekly to quarterly, the patterns are true
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 max-w-[250px]">
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
                  className="lucide lucide-trending-up-down h-9 w-9"
                >
                  <path d="M14.828 14.828 21 21"></path>
                  <path d="M21 16v5h-5"></path>
                  <path d="m21 3-9 9-4-4-6 6"></path>
                  <path d="M21 8V3h-5"></path>
                </svg>
                <h1 className="text-lg">Trendline Chart:</h1>
                <p className="text-gray-500 text-sm">
                  A line that weaves through time and space, Showing growth,
                  spikes, and any decline we trace. Engagement's rise and the
                  dips below, A clear visual guide to the trends we know.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 max-w-[250px]">
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
                  className="lucide lucide-thumbs-up h-9 w-9"
                >
                  <path d="M7 10v12"></path>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                </svg>
                <h1 className="text-lg">TrackTopic Action:</h1>
                <p className="text-gray-500 text-sm">
                  Click to track, stay ahead of the wave, Monitor trends and
                  insights to save. Keywords and topics, follow them close, For
                  deeper knowledge, let the data expose
                </p>
              </div>
            </section>
          </div>
        </div>
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
              src={RTrends}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default DeepDiveAnalysis;
