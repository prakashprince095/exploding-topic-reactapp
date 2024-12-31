import Footer from "@/component/ui/Footer/Footer";
import Header from "@/component/ui/Header/Header";
import CTA from "@/component/ui/Home/CTA/CTA";
import Testimonial from "../About us/Testimonial";
import HeroSection from "@/component/ui/Home/HeroSection/HeroSection";
import CompanyList from "@/component/ui/Home/ComapnyList/CompnayList";
import StartupList from "./StartupList";
import styles from "./TrendingStartUps.module.css";
import RTrends from "/products/startup/R-Trends.svg";
import RStartups from "/products/startup/R-startups.svg";
import detailbox from "/products/startup/detail-box.svg";
import indicatorbox from "/products/startup/Indicator-box.svg";
import channelbox from "/products/startup/Channel-box.svg";
import TrustedImg1 from "/products/Landing/Trusted1.svg";
import TrustedImg2 from "/products/Landing/Trusted2.svg";
import TrustedImg3 from "/products/Landing/Trusted3.svg";
import linkImg from "/products/startup/link.svg";
import shareImg from "/products/startup/share.svg";

const TrendingStartups = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      {/* <StartupList></StartupList> */}
      <div className={styles.startupCard}>
        <div className="border border-gray-300 bg-[#FAFAFA] rounded-lg p-4 sm:p-6 md:p-10 flex flex-col items-center gap-3 sm:gap-5 my-4 sm:my-6">
          <h1 className="text-center font-medium text-md sm:text-lg md:text-2xl lg:text-3xl">
            Discover the leading startups at a glance
          </h1>
          <p className="max-w-xs sm:max-w-md md:max-w-lg text-center text-xs sm:text-sm md:text-base text-gray-600 font-medium">
            Each card reveals key insights like funding, growth trends, and
            location, offering a snapshot of innovation to help you explore
            opportunities effortlessly.
          </p>
          <div
            className="w-full p-2 sm:p-4 md:p-6"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Startup Card 1 */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full p-2 cursor-pointer hover:shadow-md transition">
                <div className="flex flex-col p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-gray-200 rounded-md shadow-sm h-[60px] w-[60px] flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Logo</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="tracking-tight font-normal text-lg sm:text-xl">
                        Alibaba Group
                      </h3>
                      <div className="bg-black text-white px-2 py-1 text-xs rounded-full w-fit">
                        Funding: $404.74M
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No description available
                  </p>
                </div>
                <div className="p-6 pt-0 flex sm:flex-row flex-col justify-between items-start sm:items-center">
                  <div className="flex gap-3">
                    <img
                      className={styles.imgIcon}
                      alt="Link"
                      loading="lazy"
                      width="20"
                      height="20"
                      src={linkImg}
                      style={{ color: "transparent" }}
                    />
                    <img
                      className={styles.imgIcon}
                      alt="Share"
                      loading="lazy"
                      width="20"
                      height="20"
                      src={shareImg}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="text-xs sm:text-sm">
                    Seattle, United States
                  </div>
                </div>
                <div className="flex p-0">
                  <div
                    data-chart="chart-r9g"
                    className="flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none h-[200px] w-full"
                  >
                    {/* Chart Content Here */}
                    <div className="flex p-0">
                      <div
                        data-chart="chart-r9g"
                        className="flex aspect-video justify-center text-xs"
                        style={{
                          "--color-desktop": "hsl(217, 91%, 60%)",
                          "--color-mobile": "hsl(217, 91%, 75%)",
                        }}
                      >
                        {/* Dark Mode Styles */}
                        <style>
                          {`
            .dark [data-chart=chart-r9g] {
              --color-desktop: hsl(217, 91%, 60%);
              --color-mobile: hsl(217, 91%, 75%);
            }
          `}
                        </style>

                        <div
                          className="recharts-responsive-container"
                          style={{
                            width: "100%",
                            height: "100%",
                            minWidth: "0px",
                          }}
                        >
                          <div
                            className="recharts-responsive-container"
                            style={{
                              width: "356px",
                              height: "200px",
                              minWidth: "0px",
                            }}
                          >
                            <div
                              className="recharts-wrapper"
                              style={{
                                position: "relative",
                                cursor: "default",
                                width: "100%",
                                height: "100%",
                                maxHeight: "200px",
                                maxWidth: "356px",
                              }}
                            >
                              <svg
                                className="recharts-surface"
                                width="356"
                                height="200"
                                viewBox="0 0 356 200"
                                style={{ width: "100%", height: "100%" }}
                              >
                                <title></title>
                                <desc></desc>
                                <defs>
                                  <clipPath id="recharts82-clip">
                                    <rect
                                      x="0"
                                      y="10"
                                      height="180"
                                      width="346"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <defs>
                                  <linearGradient
                                    id="colorDesktop"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="hsl(217, 91%, 60%)"
                                      stopOpacity="0.8"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="hsl(217, 91%, 60%)"
                                      stopOpacity="0"
                                    />
                                  </linearGradient>
                                </defs>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="145"
                                      x2="346"
                                      y2="145"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="100"
                                      x2="346"
                                      y2="100"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="55"
                                      x2="346"
                                      y2="55"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="10"
                                      x2="346"
                                      y2="10"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="190"
                                      x2="346"
                                      y2="190"
                                    />
                                  </g>
                                  <g className="recharts-cartesian-grid-vertical">
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="69.2"
                                      y1="10"
                                      x2="69.2"
                                      y2="190"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="138.4"
                                      y1="10"
                                      x2="138.4"
                                      y2="190"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="207.6"
                                      y1="10"
                                      x2="207.6"
                                      y2="190"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="276.8"
                                      y1="10"
                                      x2="276.8"
                                      y2="190"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="346"
                                      y1="10"
                                      x2="346"
                                      y2="190"
                                    />
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="10"
                                      x2="0"
                                      y2="190"
                                    />
                                  </g>
                                </g>
                                <g className="recharts-layer recharts-line">
                                  <path
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="none"
                                    strokeWidth="2"
                                    className="recharts-curve recharts-line-curve"
                                    d="M0,13.857C23.067,80.393,46.133,146.929,69.2,146.929C92.267,146.929,115.333,61.429,138.4,43.429C161.467,25.429,184.533,16.429,207.6,16.429C230.667,16.429,253.733,23.286,276.8,37C299.867,50.714,322.933,96.571,346,142.429"
                                  />
                                  <g className="recharts-layer"></g>
                                  <g className="recharts-layer recharts-line-dots">
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="0"
                                      cy="13.857"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="69.2"
                                      cy="146.929"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="138.4"
                                      cy="43.429"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="207.6"
                                      cy="16.429"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="276.8"
                                      cy="37"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                    <circle
                                      r="3"
                                      stroke="hsl(217, 91%, 60%)"
                                      fillOpacity="1"
                                      fill="hsl(217, 91%, 60%)"
                                      strokeWidth="2"
                                      cx="346"
                                      cy="142.429"
                                      className="recharts-dot recharts-line-dot"
                                    />
                                  </g>
                                </g>
                              </svg>
                              <div
                                className="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-bottom"
                                style={{
                                  visibility: "hidden",
                                  pointerEvents: "none",
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate(138.8px, 36px)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Startup Card 2 */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full p-2 cursor-pointer hover:shadow-md transition">
                <div className="flex flex-col p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-gray-200 rounded-md shadow-sm h-[60px] w-[60px] flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Logo</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="tracking-tight font-normal text-lg sm:text-xl">
                        Canada Drives
                      </h3>
                      <div className="bg-black text-white px-2 py-1 text-xs rounded-full w-fit">
                        Funding: $252.47M
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No description available
                  </p>
                </div>
                <div className="p-6 pt-0 flex sm:flex-row flex-col justify-between items-start sm:items-center">
                  <div className="flex gap-3">
                    <img
                      className={styles.imgIcon}
                      alt="Link"
                      loading="lazy"
                      width="20"
                      height="20"
                      src={linkImg}
                      style={{ color: "transparent" }}
                    />
                    <img
                      className={styles.imgIcon}
                      alt="Share"
                      loading="lazy"
                      width="20"
                      height="20"
                      src={shareImg}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="text-xs sm:text-sm">
                    Seattle, United States
                  </div>
                </div>
                <div className="flex p-0">
                  <div
                    data-chart="chart-r9h"
                    className="flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none h-[200px] w-full"
                  >
                    {/* Chart Content Here */}
                    <div className="flex p-0">
                      <div
                        data-chart="chart-r9h"
                        className="flex aspect-video justify-center text-xs"
                        style={{
                          "--color-desktop": "hsl(217, 91%, 60%)",
                          "--color-mobile": "hsl(217, 91%, 75%)",
                        }}
                      >
                        <div
                          className="recharts-responsive-container"
                          style={{
                            width: "100%",
                            height: "100%",
                            minWidth: "0px",
                          }}
                        >
                          <div
                            className="recharts-responsive-container"
                            style={{
                              width: "356px",
                              height: "200px",
                              minWidth: "0px",
                            }}
                          >
                            <div
                              className="recharts-wrapper"
                              style={{
                                position: "relative",
                                cursor: "default",
                                width: "100%",
                                height: "100%",
                                maxHeight: "200px",
                                maxWidth: "356px",
                              }}
                            >
                              <svg
                                className="recharts-surface"
                                width="356"
                                height="200"
                                viewBox="0 0 356 200"
                                style={{ width: "100%", height: "100%" }}
                              >
                                <title></title>
                                <desc></desc>
                                <defs>
                                  <clipPath id="recharts88-clip">
                                    <rect
                                      x="0"
                                      y="10"
                                      height="180"
                                      width="346"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <defs>
                                  <linearGradient
                                    id="colorDesktop"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="hsl(217, 91%, 60%)"
                                      stopOpacity="0.8"
                                    />
                                    <stop
                                      offset="100%"
                                      stopColor="hsl(217, 91%, 60%)"
                                      stopOpacity="0"
                                    />
                                  </linearGradient>
                                </defs>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="145"
                                      x2="346"
                                      y2="145"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="100"
                                      x2="346"
                                      y2="100"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="55"
                                      x2="346"
                                      y2="55"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="10"
                                      x2="346"
                                      y2="10"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="190"
                                      x2="346"
                                      y2="190"
                                    ></line>
                                  </g>
                                  <g className="recharts-cartesian-grid-vertical">
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="69.2"
                                      y1="10"
                                      x2="69.2"
                                      y2="190"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="138.4"
                                      y1="10"
                                      x2="138.4"
                                      y2="190"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="207.60000000000002"
                                      y1="10"
                                      x2="207.60000000000002"
                                      y2="190"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="276.8"
                                      y1="10"
                                      x2="276.8"
                                      y2="190"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="346"
                                      y1="10"
                                      x2="346"
                                      y2="190"
                                    ></line>
                                    <line
                                      strokeDasharray="3 3"
                                      stroke="#ccc"
                                      fill="none"
                                      x="0"
                                      y="10"
                                      width="346"
                                      height="180"
                                      x1="0"
                                      y1="10"
                                      x2="0"
                                      y2="190"
                                    ></line>
                                  </g>
                                </g>
                                <g className="recharts-layer recharts-line">
                                  <path
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="none"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    className="recharts-curve recharts-line-curve"
                                    d="M0,113.235C23.067,128.059,46.133,142.882,69.2,142.882C92.267,142.882,115.333,78.294,138.4,78.294C161.467,78.294,184.533,119.588,207.6,119.588C230.667,119.588,253.733,114.118,276.8,103.176C299.867,92.235,322.933,54.824,346,17.412"
                                  ></path>
                                </g>
                                <g className="recharts-layer recharts-line-dots">
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="0"
                                    cy="113.23529411764706"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="69.2"
                                    cy="142.8823529411765"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="138.4"
                                    cy="78.29411764705881"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="207.60000000000002"
                                    cy="119.58823529411765"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="276.8"
                                    cy="103.17647058823529"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                  <circle
                                    r="3"
                                    stroke="hsl(217, 91%, 60%)"
                                    fillOpacity="1"
                                    fill="hsl(217, 91%, 60%)"
                                    strokeWidth="2"
                                    width="346"
                                    height="180"
                                    cx="346"
                                    cy="17.411764705882348"
                                    className="recharts-dot recharts-line-dot"
                                  ></circle>
                                </g>
                              </svg>
                              <div
                                tabIndex="-1"
                                className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                                style={{
                                  visibility: "hidden",
                                  pointerEvents: "none",
                                  position: "absolute",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate(148.4px, 153px)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full p-2 cursor-pointer hover:shadow-md transition">
                <div className="flex flex-col p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="bg-gray-200 rounded-md shadow-sm h-[60px] w-[60px] flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Logo</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="tracking-tight font-normal text-lg sm:text-xl">
                        Mystery Tackle Box
                      </h3>
                      <div className="bg-black text-white px-2 py-1 text-xs rounded-full w-fit">
                        Funding: $757.49M
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    No description available
                  </p>
                </div>
                <div className="p-6 pt-0 flex sm:flex-row flex-col justify-between items-start sm:items-center">
                  <div className="flex gap-3">
                    <img
                      className={styles.imgIcon}
                      alt="Link"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      src={linkImg}
                      style={{ color: "transparent" }}
                    />
                    <img
                      className={styles.imgIcon}
                      alt="Share"
                      loading="lazy"
                      width="20"
                      height="20"
                      decoding="async"
                      src={shareImg}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="text-xs sm:text-sm">
                    Seattle, United States
                  </div>
                </div>
                <div className="flex p-0">
                  <div
                    data-chart="chart-r9i"
                    className="flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none h-[200px] w-full"
                  >
                    <style>
                      {`
              [data-chart=chart-r9i] {
                --color-desktop: hsl(217, 91%, 60%);
                --color-mobile: hsl(217, 91%, 75%);
              }

              .dark [data-chart=chart-r9i] {
                --color-desktop: hsl(217, 91%, 60%);
                --color-mobile: hsl(217, 91%, 75%);
              }
            `}
                    </style>
                    <div
                      className="recharts-responsive-container"
                      style={{ width: "100%", height: "100%", minWidth: "0px" }}
                    >
                      <div
                        className="recharts-responsive-container"
                        style={{
                          width: "356px",
                          height: "200px",
                          minWidth: "0px",
                        }}
                      >
                        <div
                          className="recharts-wrapper"
                          style={{
                            position: "relative",
                            cursor: "default",
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            maxWidth: "356px",
                          }}
                        >
                          <svg
                            className="recharts-surface"
                            width="356"
                            height="200"
                            viewBox="0 0 356 200"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <title></title>
                            <desc></desc>
                            <defs>
                              <clipPath id="recharts94-clip">
                                <rect
                                  x="0"
                                  y="10"
                                  height="180"
                                  width="346"
                                ></rect>
                              </clipPath>
                            </defs>
                            <defs>
                              <linearGradient
                                id="colorDesktop"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="hsl(217, 91%, 60%)"
                                  stopOpacity="0.8"
                                ></stop>
                                <stop
                                  offset="100%"
                                  stopColor="hsl(217, 91%, 60%)"
                                  stopOpacity="0"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <g className="recharts-cartesian-grid">
                              <g className="recharts-cartesian-grid-horizontal">
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="0"
                                  y1="145"
                                  x2="346"
                                  y2="145"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="0"
                                  y1="100"
                                  x2="346"
                                  y2="100"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="0"
                                  y1="55"
                                  x2="346"
                                  y2="55"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="0"
                                  y1="10"
                                  x2="346"
                                  y2="10"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="0"
                                  y1="190"
                                  x2="346"
                                  y2="190"
                                ></line>
                              </g>
                              <g className="recharts-cartesian-grid-vertical">
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="69.2"
                                  y1="10"
                                  x2="69.2"
                                  y2="190"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="138.4"
                                  y1="10"
                                  x2="138.4"
                                  y2="190"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="207.6"
                                  y1="10"
                                  x2="207.6"
                                  y2="190"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="276.8"
                                  y1="10"
                                  x2="276.8"
                                  y2="190"
                                ></line>
                                <line
                                  strokeDasharray="3 3"
                                  stroke="#ccc"
                                  fill="none"
                                  x="0"
                                  y="10"
                                  width="346"
                                  height="180"
                                  x1="346"
                                  y1="10"
                                  x2="346"
                                  y2="190"
                                ></line>
                              </g>
                            </g>
                            <g className="recharts-layer recharts-line">
                              <path
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="none"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                className="recharts-curve recharts-line-curve"
                                d="M0,52.353C23.067,31.706,46.133,11.059,69.2,11.059C92.267,11.059,115.333,35.588,138.4,44.412C161.467,53.235,184.533,64,207.6,64C230.667,64,253.733,16.882,276.8,16.882C299.867,16.882,322.933,36.735,346,56.588"
                              ></path>
                            </g>
                            <g className="recharts-layer"></g>
                            <g className="recharts-layer recharts-line-dots">
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="0"
                                cy="52.3529411764706"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="69.2"
                                cy="11.058823529411761"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="138.4"
                                cy="44.41176470588235"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="207.6"
                                cy="64"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="276.8"
                                cy="16.882352941176464"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                              <circle
                                r="3"
                                stroke="hsl(217, 91%, 60%)"
                                fillOpacity="1"
                                fill="hsl(217, 91%, 60%)"
                                strokeWidth="2"
                                width="346"
                                height="180"
                                cx="346"
                                cy="56.588235294117645"
                                className="recharts-dot recharts-line-dot"
                              ></circle>
                            </g>
                            <g className="recharts-layer recharts-tooltip"></g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyList></CompanyList>
      <div className={styles.cardContainer}>
        <div
          className="max-w-[1440px] mx-4 p-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-2xl items-center justify-center font-medium mb-12">
            Why Exploading is the best tool for Organizations details
          </h1>

          <div
            className={` flex flex-wrap items-center justify-center gap-6 max-w-[1440px]`}
          >
            {/* Card 1 */}
            <div
              className={` ${styles.card} border-[#D9D9D9] hover:shadow-xl transition-transform transform h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
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
                  width="400"
                  height="350"
                  decoding="async"
                  src={detailbox}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`${styles.card} border-[#D9D9D9] hover:shadow-xl transition-transform transform h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
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
                  className="lucide lucide-mouse-pointer-click w-8 h-8"
                >
                  <path d="M14 4.1 12 6"></path>
                  <path d="m5.1 8-2.9-.8"></path>
                  <path d="m6 12-1.9 2"></path>
                  <path d="M7.2 2.2 8 5.1"></path>
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
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
                  width="400"
                  height="350"
                  decoding="async"
                  src={indicatorbox}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`${styles.card} border-[#D9D9D9] hover:shadow-xl transition-transform transform h-fit bg-[#FAFAFA] border-[1px] rounded-lg shadow-sm px-2 pt-2 shadow-[#808080]/25`}
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
                  width="400"
                  height="350"
                  decoding="async"
                  src={channelbox}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex flex-col items-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <h2 class="text-3xl text-center mb-4">Related Startups</h2>
          <p class="text-lg mb-4 text-center text-gray-500">
            Suggest other startups similar to the selected organization.
          </p>
          <button class="inline-flex items-center z-10 shadow-sm justify-center gap-2 whitespace-nowrap text-[15px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#3985ED] text-primary-foreground hover:bg-blue-600 py-1.5 rounded-sm px-3">
            <a href="">Try Exploding</a>
          </button>
        </div>
      </div>
      <div className={styles.graphinsights}>
        <section
          className={`${styles.detailBar}border-[#D9D9D9] bg-[#FAFAFA] mx-4 lg:mx-0 border-[1px] gap-6 max-w-[1200px] p-7 flex flex-wrap items-center justify-between lg:items-start rounded-lg`}
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-book-check h-9 w-9"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
              <path d="m9 9.5 2 2 4-4"></path>
            </svg>
            <h1 className="text-lg">Comprehensive Insights:</h1>
            <p className="text-gray-500">
              Access detailed data on funding, growth, and trends to uncover
              opportunities.
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
              class="lucide lucide-telescope h-9 w-9"
            >
              <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
              <path d="m13.56 11.747 4.332-.924"></path>
              <path d="m16 21-3.105-6.21"></path>
              <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
              <path d="m6.158 8.633 1.114 4.456"></path>
              <path d="m8 21 3.105-6.21"></path>
              <circle cx="12" cy="13" r="2"></circle>
            </svg>
            <h1 className="text-lg">Personalized Exploration:</h1>
            <p className="text-gray-500">
              Use filters to find startups by industry, region, or funding
              stage.
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
              class="lucide lucide-trending-up-down h-9 w-9"
            >
              <path d="M14.828 14.828 21 21"></path>
              <path d="M21 16v5h-5"></path>
              <path d="m21 3-9 9-4-4-6 6"></path>
              <path d="M21 8V3h-5"></path>
            </svg>
            <h1 className="text-lg">Visualized Trends:</h1>
            <p className="text-gray-500">
              Track performance with interactive graphs and easy-to-read
              metrics.
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
              class="lucide lucide-globe h-9 w-9"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <h1 className="text-lg">Trusted by Leaders:</h1>
            <p className="text-gray-500">
              Rely on insights backed by top global brands.{" "}
            </p>
          </div>
        </section>
      </div>
      <div className={styles.img}>
        <img
          alt="Startup Ecosystem Visualization"
          loading="lazy"
          width="1080"
          height="850"
          decoding="async"
          src={RStartups}
          className="startup-img"
        />
      </div>
      <div className={styles.img2}>
        <div
          class="flex flex-col items-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <h2 class="text-3xl text-center mb-4">Related Trends</h2>
          <p class="text-lg mb-4 text-center text-gray-500">
            Show relevant market trends related to the selected startup.
          </p>
          <button class="inline-flex items-center z-10 shadow-sm justify-center gap-2 whitespace-nowrap text-[15px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-[#3985ED] text-primary-foreground hover:bg-blue-600 py-1.5 rounded-sm px-3">
            <a href="">Try Exploding</a>
          </button>
        </div>
      </div>
      <div className={styles.img}>
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chart-candlestick h-9 w-9"
            >
              <path d="M9 5v4"></path>
              <rect width="4" height="6" x="7" y="9" rx="1"></rect>
              <path d="M9 15v2"></path>
              <path d="M17 3v2"></path>
              <rect width="4" height="8" x="15" y="5" rx="1"></rect>
              <path d="M17 13v3"></path>
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            </svg>
            <h1 className="text-lg">In-Depth Analysis:</h1>
            <p className="text-gray-500">
              Dive into the trends shaping industries and emerging opportunities
              globally.
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
              class="lucide lucide-telescope h-9 w-9"
            >
              <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path>
              <path d="m13.56 11.747 4.332-.924"></path>
              <path d="m16 21-3.105-6.21"></path>
              <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path>
              <path d="m6.158 8.633 1.114 4.456"></path>
              <path d="m8 21 3.105-6.21"></path>
              <circle cx="12" cy="13" r="2"></circle>
            </svg>
            <h1 className="text-lg">Customized Discovery:</h1>
            <p className="text-gray-500">
              Explore trends by sector, geography, or timeframe to match your
              focus.
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
              class="lucide lucide-trending-up-down h-9 w-9"
            >
              <path d="M14.828 14.828 21 21"></path>
              <path d="M21 16v5h-5"></path>
              <path d="m21 3-9 9-4-4-6 6"></path>
              <path d="M21 8V3h-5"></path>
            </svg>
            <h1 className="text-lg">Interactive Visuals:</h1>
            <p className="text-gray-500">
              Understand market shifts with intuitive graphs and comparative
              charts.
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
              class="lucide lucide-database-zap h-9 w-9"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
              <path d="M21 5V8"></path>
              <path d="M21 12L18 17H22L19 22"></path>
              <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
            </svg>
            <h1 className="text-lg">Data You Can Trust:</h1>
            <p className="text-gray-500">
              Insights powered by reputable sources and validated industry data.
            </p>
          </div>
        </section>
      </div>
      <div className={styles.detailBar}></div>
      <Testimonial></Testimonial>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
};
export default TrendingStartups;
