import React, { useState } from "react";
import countries from "./countries"; // Make sure the path is correct
const CountryDropdown = () => {
  console.log(countries);
  // Sort countries alphabetically
  const sortedCountries = countries.sort();

  const [selectedCountry, setSelectedCountry] = useState("Worldwide");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
        }}
      />

      {/* Dropdown Container */}
      <div style={{ position: "relative" }}>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#fff",
            minWidth: "150px",
            textAlign: "center",
          }}
        >
          {selectedCountry} ▼
        </div>

        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 10,
            }}
          >
            {sortedCountries.map((country, index) => (
              <div
                key={index}
                onClick={() => handleSelect(country)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedCountry === country ? "#f0f0f0" : "#fff",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f7f7f7";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor =
                    selectedCountry === country ? "#f0f0f0" : "#fff";
                }}
              >
                {country}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};
export default CountryDropdown;
