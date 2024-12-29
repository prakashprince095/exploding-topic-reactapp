import React from "react";
import "./ExplodingGPTCard.css";
import { FaArrowRightLong } from "react-icons/fa6";

const ExplodingGPTCard = ({ icon, title, description }) => {
  let isActive = false;

  if (title === "Trending Products") {
    isActive = true;
  }
  return (
    // <div className="exploding-gpt-card">
    <div className={` ${isActive && "customclassName"} exploding-gpt-card`}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        type="button"
        className=" button btn btn-light d-flex align-items-center"
      >
        <a
          href="/Home"
          className="d-flex align-items-center text-decoration-none"
        >
          {" "}
          Learn More <FaArrowRightLong className="ms-2" />{" "}
        </a>
      </button>
    </div>
  );
};

export default ExplodingGPTCard;
