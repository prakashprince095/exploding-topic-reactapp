import React, { useState } from "react";

const DropDownDisplay = ({ dropdownvalue, shownValue }) => {
  const [selectedOption, setSelectedOption] = useState(shownValue);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (value) => {
    setSelectedOption(value);
    setShowDropdown(false);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "inline-block", // Ensure each dropdown stays in a row
          marginRight: "20px", // Optional: Adds space between dropdowns
        }}
      >
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: "inline-block",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#fff",
            minWidth: "160px",
            textAlign: "center",
            maxWidth: "160px",
            whiteSpace: "nowrap", // Prevents text from wrapping
          }}
        >
          {selectedOption || "Select an option"} ▼
        </div>

        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "160px", // Fixed width for dropdown
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "160px",
              overflowY: "auto",
              zIndex: 10,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {dropdownvalue.map((value) => (
              <div
                key={value}
                onClick={() => handleSelect(value)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedOption === value ? "#f0f0f0" : "#fff",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f7f7f7";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor =
                    selectedOption === value ? "#f0f0f0" : "#fff";
                }}
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownDisplay;
