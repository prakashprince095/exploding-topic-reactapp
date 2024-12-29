import styles from "./DeepDiveInsightDatabase.module.css";
import img1 from "/products/Insight database/D-Insight.svg";
import { MdOutlineStarBorder } from "react-icons/md";
import img2 from "/products/Insight database/R-Insight.svg";
import img4 from "/products/Insight database/4.svg";
import img5 from "/products/Insight database/5.svg";
import img6 from "/products/Insight database/6.svg";
import firstImg from "/products/Insight database/1.svg";
import secondImg from "/products/Insight database/2.svg";
import thirdImg from "/products/Insight database/3.svg";

const DeepDiveInsightDatabase = () => {
  return (
    <>
      <div className={styles.industryInsights}>
        <div className="max-w-[1440px] mx-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-12">
            Why Exploding is the best tool for Industries Insight
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
                  src={firstImg}
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
                  src={secondImg}
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
                  src={thirdImg}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.discoverCompanies}>
        <div
          className="max-w-[1440px] mx-4"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-12">
            Discover Companies That Define Success.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className={`${styles.customCardStyle} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className=" flex flex-col gap-4 bg-[#FAFAFA] p-3 ">
                <div className="relative aspect-[4/2] w-full overflow-hidden rounded-lg">
                  <img
                    alt="Chart Your Course"
                    loading="lazy"
                    width="400"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    src={img4}
                    style={{ color: "transparent" }}
                  ></img>
                </div>
                <main className="space-y-3 ">
                  <div className="w-9 h-9  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-wallet-cards w-full h-full "
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
                      <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium ">Chart Your Course</h1>
                  <div>
                    <p className="text-zinc-600 text-md ">
                      Industries unfold like a treasure map,{" "}
                    </p>
                    <p className="text-zinc-600 text-md ">
                      {" "}
                      From tech to health, innovations lap.
                    </p>
                  </div>
                </main>
              </div>
            </div>
            <div
              className={`${styles.customCardStyle} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className=" flex flex-col gap-4 bg-[#FAFAFA] p-3 ">
                <div className="relative aspect-[4/2] w-full overflow-hidden rounded-lg">
                  <img
                    alt="Unveil Subcategories"
                    loading="lazy"
                    width="400"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    src={img5}
                    style={{ color: "transparent" }}
                  ></img>
                </div>
                <main className="space-y-3 ">
                  <div className="w-9 h-9  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-mouse-pointer-click w-full h-full "
                    >
                      <path d="M14 4.1 12 6"></path>
                      <path d="m5.1 8-2.9-.8"></path>
                      <path d="m6 12-1.9 2"></path>
                      <path d="M7.2 2.2 8 5.1"></path>
                      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium ">Unveil Subcategories</h1>
                  <div>
                    <p className="text-zinc-600 text-md ">
                      Hover and see the layers below,{" "}
                    </p>
                    <p className="text-zinc-600 text-md ">
                      Subcategories that help insights flow.
                    </p>
                  </div>
                </main>
              </div>
            </div>
            <div
              className={`${styles.customCardStyle} transition-transform border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-l transform hover:shadow-xl h-fit rounded-lg px-2 pt-2 shadow-[#808080]`}
            >
              <div className=" flex flex-col gap-4 bg-[#FAFAFA] p-3 ">
                <div className="relative aspect-[4/2] w-full overflow-hidden rounded-lg">
                  <img
                    alt="Unveil Subcategories"
                    loading="lazy"
                    width="400"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    src={img6}
                    style={{ color: "transparent" }}
                  ></img>
                </div>
                <main className="space-y-3 ">
                  <div className="w-9 h-9  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-monitor-play w-full h-full "
                    >
                      <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"></path>
                      <path d="M12 17v4"></path>
                      <path d="M8 21h8"></path>
                      <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    </svg>
                  </div>
                  <h1 className="text-xl font-medium ">Path to Progress</h1>
                  <div>
                    <p className="text-zinc-600 text-md ">
                      Click and follow to where companies thrive, The heartbeat
                      of niches, innovation alive.
                    </p>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.textContainerHeading}>
        <h3>Related Industries and Insights</h3>
        <p>
          Discover industries and subcategories connected to the company's
          niche. Uncover trends, identify market overlaps, and gain insights
          into the broader ecosystem influencing success.
        </p>
        <button type="button" className="btn btn-primary">
          Try Exploding
        </button>
      </div>
      <div className={styles.deepdive}>
        <img className={styles.img} src={img2} alt="Image"></img>
      </div>
      <div className={styles.textContainerHeading}>
        <h3>Deep Dive into Compamy Insights</h3>
        <p>On the company detail page, uncover a wealth of data:</p>
        <button type="button" className="btn btn-primary">
          Try Exploding
        </button>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.graphinsights}>
          <section
            className="border-[#D9D9D9] bg-[#FAFAFA] mx-4 lg:mx-0 border-[1px] gap-6 max-w-[1200px] p-7 flex flex-wrap items-center justify-between lg:items-start rounded-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex flex-col items-start gap-3 max-w-[250px]">
              <div className={styles.icon}>
                <MdOutlineStarBorder />
              </div>

              <h1 className="text-lg">Keywords Search Trends:</h1>
              <p className="text-gray-500">
                Interactive charts displaying keyword trends over time, helping
                identify market relevance.
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-cable h-9 w-9"
              >
                <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"></path>
                <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"></path>
                <path d="M21 21v-2h-4"></path>
                <path d="M3 5h4V3"></path>
                <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"></path>
              </svg>
              <h1 className="text-lg">Key Indicators:</h1>
              <p className="text-gray-500">
                Growth, stability, potential, and forecast metrics displayed
                with easy-to-read color-coded visuals.
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-trending-up-down h-9 w-9"
              >
                <path d="M14.828 14.828 21 21"></path>
                <path d="M21 16v5h-5"></path>
                <path d="m21 3-9 9-4-4-6 6"></path>
                <path d="M21 8V3h-5"></path>
              </svg>
              <h1 className="text-lg">Channels:</h1>
              <p className="text-gray-500">
                Platforms the company uses (social media, e-commerce) and their
                engagement metrics. .
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-thumbs-up h-9 w-9"
              >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
              </svg>

              <h1 className="text-lg">About the Company:</h1>
              <p className="text-gray-500">
                Detailed description of the company's mission, vision, and
                achievements..
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.deepdive}>
        <img className={styles.img} src={img1} alt="Image"></img>
      </div>
    </>
  );
};
export default DeepDiveInsightDatabase;
