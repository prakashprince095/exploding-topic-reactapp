import React from "react";
import "./DatabaseContentDisplay.css";

const DatabaseContentDisplay = ({ item }) => {
  return (
    <div className="content-display">
      <h2>Subcategories of {item.name}</h2>
      <div className="subcategory-container">
        {item.subcategories.map((subcategory, index) => (
          <div key={index} className="subcategory-item">
            {subcategory}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseContentDisplay;
