import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

const timelineData = [
  {
    date: "November 25, 2024",
    updates: [
      "A new personalized dashboard for saving your favorite startups and products.",
      "Improved data visualization with interactive charts for product trends.",
      "Bug fix: Resolved issues with bookmarking startups on mobile devices.",
    ],
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/pro/bento-grids.png",
      "https://assets.aceternity.com/cards.png",
    ],
  },
  {
    date: "November 10, 2024",
    updates: [
      "Added Insight Hub for tracking saved startups and products.",
      "Implemented interactive trend analysis charts for user engagement.",
      "Optimized search functionality for faster results.",
    ],
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/pro/bento-grids.png",
      "https://assets.aceternity.com/cards.png",
    ],
  },
  {
    date: "October 20, 2024",
    updates: [
      "Added Insight Hub for tracking saved startups and products.",
      "Implemented interactive trend analysis charts for user engagement.",
      "Optimized search functionality for faster results.",
    ],
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/pro/bento-grids.png",
      "https://assets.aceternity.com/cards.png",
    ],
  },
  {
    date: "October 5, 2024",
    updates: [
      "Added Insight Hub for tracking saved startups and products.",
      "Implemented interactive trend analysis charts for user engagement.",
      "Optimized search functionality for faster results.",
    ],
    images: [
      "https://assets.aceternity.com/pro/hero-sections.png",
      "https://assets.aceternity.com/features-section.png",
      "https://assets.aceternity.com/pro/bento-grids.png",
      "https://assets.aceternity.com/cards.png",
    ],
  },
];

const TimelineWithScrollLine = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lineColor = `rgb(${Math.min(255, scrollY / 2)}, ${Math.max(
    0,
    255 - scrollY / 2
  )}, 0)`; // Adjust color logic as needed

  return (
    <div className="relative flex flex-col space-y-12 p-8 max-w-4xl mx-auto">
      {/* Scroll Line
      <div
        className="absolute left-4 top-0 h-full w-[2px] transition-colors duration-300"
        style={{ backgroundColor: lineColor }}
      ></div> */}

      {timelineData.map((entry, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start gap-10 relative"
        >
          {/* Sticky Date */}
          <div className="md:w-1/4 sticky top-4 self-start flex items-center">
            <div className="relative flex items-center">
              {/* Dot */}
              <div className="absolute left-[-10px]">
                <GoDotFill className="text-lg font-semibold text-gray-600" />
              </div>
              {/* Date */}
              <div className="ml-6">{entry.date}</div>
            </div>
          </div>

          {/* Updates and Images */}
          <div className="md:w-3/4 space-y-4">
            {/* Updates */}
            <ul className="list-disc pl-4 space-y-2">
              {entry.updates.map((update, updateIndex) => (
                <li key={updateIndex} className="text-gray-700">
                  {update}
                </li>
              ))}
            </ul>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              {entry.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`Update ${index + 1} - Image ${imageIndex + 1}`}
                  className="rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineWithScrollLine;
