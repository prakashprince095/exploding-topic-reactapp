import React from "react";

const Marquee = ({ children, reverse, pauseOnHover, className }) => {
  const direction = reverse ? "reverse" : "normal"; // Handle reverse direction for the marquee

  return (
    <div
      className={`${className} overflow-hidden whitespace-nowrap relative`}
      style={{
        animation: `marquee ${
          className ? "--duration" : "20s"
        } linear infinite ${direction}`,
      }}
    >
      {children}
    </div>
  );
};

export default Marquee;
