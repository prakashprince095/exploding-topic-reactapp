import React from "react";
import ColorChangingGrid from "../../../Animations/ColorChangingGrid";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col gap-4 h-[400px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <h1 className="z-10 whitespace-pre-wrap text-center text-[70px] max-w-[800px] font-semibold tracking-tighter text-black dark:text-white">
        Stay ahead by spotting{" "}
        <span className="text-gradient">trends before they ignite</span>
      </h1>
      <div className="flex gap-4">
        <button className="inline-flex items-center z-50 justify-center gap-2 whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-br from-[#3985ED] to-[#4895FF] text-primary-foreground hover:bg-blue-600 py-2 rounded-sm px-4">
          Get Started →
        </button>
        <button className="bg-white z-50 border px-4 py-2 rounded-md text-[12px] shadow-sm hover:bg-gray-200">
          Try Free ↗
        </button>
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full fill-gray-300/30 stroke-gray-400/30 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-[20%] inset-y-[-10%] h-[100%]"
      >
        <defs>
          <pattern
            id=":Rccvb:"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" stroke-dasharray="0"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:Rccvb:)" />
        <svg x="-1" y="-1" className="overflow-visible">
          <rect
            width="39"
            height="39"
            x="161"
            y="161"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.094"
          ></rect>
          <rect
            width="39"
            height="39"
            x="1041"
            y="361"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.2625"
          ></rect>
          <rect
            width="39"
            height="39"
            x="521"
            y="281"
            fill="currentColor"
            strokeWidth="0"
            opacity="0.2802"
          ></rect>
          {/* Add more <rect> elements as necessary */}
        </svg>
      </svg>
      {/* <div className="relative min-h-screen">
        <h1 className="text-center text-4xl mt-10">
          Color Changing Grid Animation
        </h1>
        <ColorChangingGrid
          numSquares={60} // Change number of squares
          maxOpacity={0.6} // Change opacity
          duration={3} // Animation duration
        />
        {}
      </div> */}
    </div>
  );
};

export default HeroSection;
