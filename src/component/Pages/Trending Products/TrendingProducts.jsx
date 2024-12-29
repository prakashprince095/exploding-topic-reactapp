import Testimonial from "../About us/Testimonial";
import Header from "@/component/ui/Header/Header";
import CTA from "@/component/ui/Home/CTA/CTA";
import Footer from "@/component/ui/Footer/Footer";
import styles from "./TrendingProducts.module.css";
const TrendingProducts = () => {
  return (
    <>
      <Header></Header>
      <div className={styles.firstsection}>
        <section
          className="max-w-[1280px] flex flex-col items-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="container mx-auto px-4">
            <div className="border-[#D9D9D9] bg-[#FAFAFA] border-[1px] rounded-lg max-w-[1280px] p-10 flex flex-col items-center justify-center gap-5 my-5">
              <h1 className="text-center font-medium text-[28px]">
                See What's Popular Across Industries
              </h1>
              <p className="max-w-[700px] text-center text-md mb-4 text-gray-600 font-medium">
                A curated view of trending products across categories, regions,
                and markets. From their rise in sales to their growing demand,
                explore what's making waves.
              </p>
              <div
                className="flex flex-wrap items-center justify-center"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex flex-wrap items-center justify-start gap-4 p-2">
                  {[
                    {
                      name: "Alibaba Group",
                      funding: "$129B",
                      description: "Amazon is a tech firm with a focus on ....",
                      location: "Seattle, United States",
                    },
                    {
                      name: "Canada Drives",
                      funding: "$129B",
                      description: "Amazon is a tech firm with a focus on ....",
                      location: "Seattle, United States",
                    },
                    {
                      name: "Mystery Tackle Box",
                      funding: "$129B",
                      description: "Amazon is a tech firm with a focus on ....",
                      location: "Seattle, United States",
                    },
                  ].map((startup, index) => (
                    <div
                      key={index}
                      className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px] cursor-pointer hover:shadow-md transition"
                    >
                      <div className="flex flex-col space-y-1.5 p-3">
                        <div className="flex items-start gap-2">
                          <div className="bg-white rounded-md shadow-md h-[60px] border w-[80px]"></div>
                          <div className="w-full">
                            <h3 className="tracking-tight font-normal text-[20px]">
                              {startup.name}
                            </h3>
                            <div className="bg-black justify-self-end text-white px-2 py-1 text-[14px] rounded-full w-fit">
                              Funding: {startup.funding}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-[16px]">
                          {startup.description}
                        </p>
                        <div className="pt-0 flex justify-between items-center">
                          <div className="flex gap-3">
                            <img
                              alt="link icon"
                              loading="lazy"
                              width="20"
                              height="20"
                              decoding="async"
                              src="/startups/link.svg"
                              style={{ color: "transparent" }}
                            />
                            <img
                              alt="share icon"
                              loading="lazy"
                              width="20"
                              height="20"
                              decoding="async"
                              src="/startups/share.svg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                          <div className="text-[14px]">{startup.location}</div>
                        </div>
                      </div>
                      <div className="p-6 pt-0">
                        <div
                          data-chart={`chart-${index}`}
                          className="flex aspect-video justify-center text-xs"
                        >
                          <div
                            className="recharts-responsive-container"
                            style={{
                              width: "100%",
                              height: "100%",
                              minWidth: 0,
                            }}
                          >
                            <div
                              className="recharts-wrapper"
                              style={{
                                position: "relative",
                                cursor: "default",
                                width: "100%",
                                height: "100%",
                                maxHeight: "169px",
                                maxWidth: "300px",
                              }}
                            >
                              <svg
                                className="recharts-surface"
                                width="300"
                                height="169"
                                viewBox="0 0 300 169"
                                style={{ width: "100%", height: "100%" }}
                              >
                                <title></title>
                                <desc></desc>
                                <defs>
                                  <clipPath id={`recharts-clip-${index}`}>
                                    <rect
                                      x="5"
                                      y="5"
                                      height="159"
                                      width="290"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line
                                      stroke="#f5f5f5"
                                      fill="none"
                                      x="5"
                                      y="5"
                                      width="290"
                                      height="159"
                                      x1="5"
                                      y1="124.25"
                                      x2="295"
                                      y2="124.25"
                                    ></line>
                                  </g>
                                </g>
                                <g className="recharts-layer recharts-line">
                                  <path
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="none"
                                    strokeWidth="2"
                                    width="290"
                                    height="159"
                                    className="recharts-curve recharts-line-curve"
                                    strokeDasharray="393.2872009277344px 0px"
                                    d="M5,36.8C24.333,60.385,43.667,83.97,63,83.97C82.333,83.97,101.667,42.453,121,29.91C140.333,17.367,159.667,8.71,179,8.71C198.333,8.71,217.667,36.712,237,57.47C256.333,78.228,275.667,105.744,295,133.26"
                                  ></path>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.secondsection}>
        <div
          className="max-w-[1280px] p-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-2xl font-medium mb-12">
            Why Exploading is the best tool for Organizations details
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 max-w-7xl mx-auto">
            <div
              className="border-[#D9D9D9] h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25"
              style={{ opacity: 1, transform: "none" }}
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
                <h3 className="tracking-tight text-xl font-medium">Details</h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  A logo bright, a name so bold, <br />
                  With stories of when their journey told.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="350"
                  height="350"
                  decoding="async"
                  src="/products/Trending Products/Detail.svg"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            <div
              className="border-[#D9D9D9] h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25"
              style={{ opacity: 1, transform: "none" }}
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
                  className="lucide lucide-command w-8 h-8"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                </svg>
                <h3 className="tracking-tight text-xl font-medium">
                  Key Indicators
                </h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Growth and speed in colors shine, <br />
                  Potential and forecast—metrics divine.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="350"
                  height="350"
                  decoding="async"
                  src="/products/Trending Products/Indicator-box.svg"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            <div
              className="border-[#D9D9D9] h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25"
              style={{ opacity: 1, transform: "none" }}
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
                <h3 className="tracking-tight text-xl font-medium">Channels</h3>
              </div>
              <div className="p-6 pt-0 px-3 text-zinc-600">
                <p>
                  Platforms they use, metrics they boast, <br />
                  Engagement rates they love the most.
                </p>
              </div>
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="350"
                  height="350"
                  decoding="async"
                  src="/products/Trending Products/channel-box.svg"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.img1heading}>
        <h3>Related Products </h3>
        <p>
          If one product has caught your eye, discover others with similar
          popularity, style,or demand patterns{" "}
        </p>
        <button type="button" className="btn btn-primary">
          Try Exploding
        </button>
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
              <h1 className="text-lg">Discover Favorites:</h1>
              <p className="text-gray-500 text-sm">
                Unearth products that share popularity, style, or demand,
                offering you a broader view of market trends.
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
              <h1 className="text-lg">Category Connections:</h1>
              <p className="text-gray-500 text-sm">
                Explore products tied by category or purpose, ensuring you never
                miss what’s trending in related spaces.
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
              <h1 className="text-lg">Growth in Similar Paths:</h1>
              <p className="text-gray-500 text-sm">
                Highlight products showing comparable growth rates or sales
                patterns, helping you identify parallel successes.
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
              <h1 className="text-lg">Customer-Liked Alternatives:</h1>
              <p className="text-gray-500 text-sm">
                See products often purchased together or preferred as
                alternatives by similar audiences.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.img2}>
        <img
          src="products/Trending Products/1.svg"
          alt="Description of the image"
        />
      </div>
      <div className={styles.img2heading}>
        <h3>Related Trends </h3>
        <p>Dive into broader trends influencing the sucsess of the product. </p>
        <p> Analyze market shifts, customer behaivours, and category growth</p>
        <button type="button" className="btn btn-primary">
          Try Exploding
        </button>
      </div>
      <div className={styles.img2}>
        <img
          src="/products/Trending Products/2.svg"
          alt="Description of the image"
        />
      </div>
      <div className={styles.graphinsights}>
        <section
          className="border-[#D9D9D9] bg-[#FAFAFA] mx-4 lg:mx-0 border-[1px] gap-6 max-w-[1200px] p-7 flex flex-wrap items-center justify-between lg:items-start rounded-lg"
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
              className="lucide lucide-chart-candlestick h-9 w-9"
            >
              <path d="M9 5v4"></path>
              <rect width="4" height="6" x="7" y="9" rx="1"></rect>
              <path d="M9 15v2"></path>
              <path d="M17 3v2"></path>
              <rect width="4" height="8" x="15" y="5" rx="1"></rect>
              <path d="M17 13v3"></path>
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            </svg>
            <h1 className="text-lg">Market Movement Insights:</h1>
            <p className="text-gray-500">
              Understand the broader shifts driving demand for related product
              categories and emerging opportunities.
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
              className="lucide lucide-scan-eye h-9 w-9"
            >
              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
              <circle cx="12" cy="12" r="1"></circle>
              <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path>
            </svg>
            <h1 className="text-lg">Seasonal Surges:</h1>
            <p className="text-gray-500">
              Track trends that spike during specific times or events, helping
              you anticipate future demand.
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
            <h1 className="text-lg">Category-Wide Growth:</h1>
            <p className="text-gray-500">
              Analyze how entire categories are evolving, providing a bigger
              picture of product popularity.
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
              className="lucide lucide-asterisk h-9 w-9"
            >
              <path d="M12 6v12"></path>
              <path d="M17.196 9 6.804 15"></path>
              <path d="m6.804 9 10.392 6"></path>
            </svg>
            <h1 className="text-lg">Consumer Behavior Patterns:</h1>
            <p className="text-gray-500">
              Discover the preferences and behaviors influencing related product
              trends, enabling smarter decisions.
            </p>
          </div>
        </section>
      </div>
      <Testimonial></Testimonial>

      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default TrendingProducts;
