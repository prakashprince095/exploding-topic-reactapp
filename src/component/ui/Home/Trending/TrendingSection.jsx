import React from "react";
import styles from "./TrendingSection.module.css";
import img1 from "/products/Landing/Ts.svg";
import img2 from "/products/Landing/Tp.svg";
import IDImg from "/products/Landing/ID.svg";
import MWImg from "/products/Landing/MW.svg";
import DAImg from "/products/Landing/DA.svg";
import PAImg from "/products/Landing/PA.svg";
import DSource from "/products/Landing/D-source.svg";
import keyone from "/products/Landing/key-1.svg";
import channelbox from "/products/startup/Channel-box.svg";
const TrendingSection = () => {
  return (
    <>
      <div className={styles.headingContainer}>
        <div className="mb-12 text-center max-w-[500px]">
          <h2 className="mb-4 text-[20px] sm:text-[28px] text-black">
            All-in-One Dashboard to Organize, Track, and Achieve more
          </h2>
          <p className="mb-5 text-center text-sm text-[#686868] font-normal sm:text-base lg:text-[18px]">
            Explore the unique strengths of the platform with a clear and
            relatable breakdown.
          </p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={`  ${styles.firstSection} `}>
          <section className={` flex sm:flex-row flex-col w-full gap-5`}>
            {/* Trending Startups Card */}
            <div className={styles.hoverEffect}>
              <div
                className={`${styles.hoverEffect}  w-full flex sm:flex-row flex-col bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
                style={{ opacity: 1, transform: "none" }}
              >
                <section>
                  <h1 className="text-[20px] text-black">Trending Startups</h1>
                  <p className="max-w-[400px] text-[16px] text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, iste doloremque quisquam magni nihil corporis omnis
                    culpa esse incidunt facere?
                  </p>
                </section>
                <main className="justify-items-end w-full">
                  <img
                    alt="Trending Startups"
                    loading="lazy"
                    width="250"
                    height="100"
                    src={img1}
                    style={{ color: "transparent" }}
                  />
                </main>
              </div>
            </div>
            <div className={styles.hoverEffect}>
              {/* Trending Products Card */}
              <div
                className={`  w-full flex sm:flex-row flex-col bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25 `}
                style={{ opacity: 1, transform: "none" }}
              >
                <section>
                  <h1 className="text-[20px] text-black">Trending Products</h1>
                  <p className="max-w-[450px] text-[16px] text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi maxime eveniet soluta eaque illum.
                  </p>
                </section>
                <main className="justify-items-end w-full">
                  <img
                    alt="Trending Products"
                    loading="lazy"
                    width="300"
                    height="100"
                    src={img2}
                    style={{ color: "transparent" }}
                  />
                </main>
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.secondSection} ${styles.container}`}>
          <section className="flex sm:flex-row flex-col w-full gap-5">
            {/* Meta Wave Card */}
            <div className={styles.hoverEffect}>
              <div
                className={` w-full sm:w-1/3 bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25  `}
                style={{ opacity: 1, transform: "none", width: "100%" }}
              >
                <main className="justify-items-center w-full">
                  <img
                    alt="Meta Wave"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-[350px]"
                    src={MWImg}
                    style={{ color: "transparent" }}
                  />
                </main>
                <section className="pl-4">
                  <h1 className="text-[20px] text-black">Meta Wave</h1>
                  <p className="max-w-[400px] text-[16px] text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos, suscipit?
                  </p>
                </section>
              </div>
            </div>
            <div className={styles.hoverEffect}>
              <div
                className={` w-full sm:w-2/3 sm:flex-row items-center flex-col bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
                style={{ opacity: 1, transform: "none", width: "100%" }}
              >
                <section>
                  <h1 className="text-[20px] text-black">Insight Database</h1>
                  <p className="max-w-[400px] text-[16px] text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, iste doloremque quisquam magni nihil corporis omnis
                    culpa esse incidunt facere?
                  </p>
                </section>
                <main className="justify-items-end w-full">
                  <img
                    alt="Insight Database"
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-[700px]"
                    src={IDImg}
                    style={{ color: "transparent" }}
                  />
                </main>
              </div>
            </div>

            {/* Insight Database Card */}
          </section>
        </div>{" "}
        <div className={`${styles.thirdContainer} ${styles.container}`}>
          <section className="flex sm:flex-row flex-col w-full gap-5">
            {/* Deep Dive Analysis Card */}
            <div className={styles.hoverEffect}>
              <div
                className={` flex items-center justify-between w-full sm:w-2/3 sm:flex-row flex-col bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
                style={{
                  opacity: 1,
                  transform: "scale(1.00025)",
                  height: "47vh",
                  width: "100%",
                }}
              >
                <section className={styles.textcontent}>
                  <h1 className="text-[20px] text-black">Deep Dive Analysis</h1>
                  <p className="max-w-[400px] text-[16px] text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste dolorum quia earum eaque exercitationem eius,
                    consequuntur accusamus amet sed autem.
                  </p>
                </section>
                <main
                  className={`${styles.imagecontent} justify-items-end w-full`}
                >
                  <img
                    alt="Deep Dive Analysis"
                    loading="lazy"
                    width="300"
                    height="200"
                    src={DAImg}
                    style={{ color: "transparent" }}
                  />
                </main>
              </div>
            </div>
            <div className={styles.hoverEffect}>
              {/* Performance Analytics Card */}
              <div
                className={`${styles.hoverenlarg} ${styles.fifth} ${styles.container} w-full sm:w-1/3 bg-gradient-to-r from-white to-[#FAFAFA] p-3 hover:shadow-xl transition-transform transform border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
                style={{ opacity: 1, transform: "none", width: "100%" }}
              >
                <header>
                  <h1 className="text-lg text-black">Performance Analytics</h1>
                </header>
                <main>
                  <p className="mb-4 text-sm text-gray-400">
                    Get detailed insights into your productivity patterns and
                    optimize your workflow for better results.
                  </p>
                  <img
                    alt="Performance Analytics"
                    loading="lazy"
                    width="100"
                    height="200"
                    className="w-[400px]"
                    src={PAImg}
                    style={{ color: "transparent" }}
                  />
                </main>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={`${styles.secondHeading} `}>
        <h1 className="text-[28px] text-center">Our Data for Analytics</h1>
        <p className="mb-5 text-center text-sm text-[#686868] font-normal sm:text-base lg:text-[18px]">
          Gain insights and make data-driven decisions with our advanced
          analytics tools.
        </p>
      </div>
      <div className={styles.dataAnaliticSection}>
        <div>
          <img
            alt="Analytics Source"
            loading="lazy"
            width="1000"
            height="800"
            decoding="async"
            src={DSource}
            style={{ color: "transparent" }}
          />
        </div>
      </div>

      <div className={styles.keyMatrics}>
        <div className="space-y-24">
          {/* First Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 max-w-[600px] space-y-6">
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
                <li className={`${styles.flexText} items-start`}>
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
                    ></path>
                  </svg>
                  <span>Track search volume trends over time</span>
                </li>
                <li className={`${styles.flexText} items-start`}>
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
                    ></path>
                  </svg>
                  <span>Identify top-performing keywords driving traffic</span>
                </li>
                <li className={`${styles.flexText} items-start`}>
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
                    ></path>
                  </svg>
                  <span>
                    Analyze TikTok's digital presence and audience resonance
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 max-w-[500px]">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <img
                  alt="Keyword Search Overview Chart"
                  loading="lazy"
                  width="500"
                  height="400"
                  decoding="async"
                  className="w-full h-auto"
                  src={keyone}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 max-w-[600px] space-y-6">
              <h2 className="text-[24px] text-gray-900">
                Channel Performance Analysis
              </h2>
              <p className="text-gray-600">
                Get a comprehensive view of TikTok's channel performance in your
                target country. Our in-depth analysis helps you understand the
                platform's growth, engagement rates, and content strategy
                effectiveness.
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
                    ></path>
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
                    ></path>
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
                    ></path>
                  </svg>
                  <span>Benchmark against competitors in the market</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 max-w-[500px]">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <img
                  alt="Channel Performance Analysis Chart"
                  loading="lazy"
                  width="500"
                  height="400"
                  decoding="async"
                  className="w-full h-auto"
                  src={channelbox}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TrendingSection;
