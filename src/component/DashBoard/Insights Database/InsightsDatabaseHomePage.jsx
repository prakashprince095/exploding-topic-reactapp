import React, { useState } from "react";
import DatabaseContentDisplay from "./DatabaseContentDisplay"; // Child component
import "./InsightsDatabaseHomePage.css"; // Styling file

const industries = [
  {
    name: "Business",
    subcategories: [
      "Retail",
      "Supply Chain & Logistics",
      "Productivity",
      "Marketing",
      "Human Resources",
    ],
  },
  {
    name: "Technology",
    subcategories: [
      "Cybersecurity",
      "AI & Machine Learning",
      "Software Development",
      "Cloud Computing",
      "DevOps",
    ],
  },
  {
    name: "Beauty",
    subcategories: [
      "Skincare",
      "Makeup",
      "Haircare",
      "Perfumes",
      "Spa & Wellness",
    ],
  },
  {
    name: "Health & Wellness",
    subcategories: [
      "Nutrition",
      "Fitness",
      "Mental Health",
      "Supplements",
      "Yoga & Meditation",
    ],
  },
  {
    name: "Home",
    subcategories: [
      "Interior Design",
      "Smart Home",
      "Gardening",
      "Home Improvement",
      "Cleaning Supplies",
    ],
  },
  {
    name: "Entertainment",
    subcategories: ["Movies", "Gaming", "Music", "Live Streaming", "Podcasts"],
  },
  {
    name: "Fashion",
    subcategories: [
      "Clothing",
      "Footwear",
      "Accessories",
      "Luxury",
      "Streetwear",
    ],
  },
  {
    name: "Finance",
    subcategories: [
      "Investing",
      "Cryptocurrency",
      "Personal Finance",
      "Banking",
      "Insurance",
    ],
  },
  {
    name: "Food & Beverage",
    subcategories: [
      "Restaurants",
      "Vegan Food",
      "Coffee & Tea",
      "Baking",
      "Beverages",
    ],
  },
  {
    name: "Lifestyle & Culture",
    subcategories: [
      "Travel",
      "Arts & Crafts",
      "Photography",
      "Books & Literature",
      "Hobbies",
    ],
  },
];

const InsightsDatabaseHomePage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const openSubCategory = (name) => {
    const selected = industries.find((industry) => industry.name === name);
    setSelectedIndustry(selected);
  };

  return (
    <div>
      {" "}
      <h2>Insight Database</h2>
      <div className="main-containerid">
        <div className="sidebarid">
          {industries.map((item) => (
            <button
              key={item.name}
              className={`sidebar-itemid ${
                selectedIndustry?.name === item.name ? "active" : ""
              }`}
              onClick={() => openSubCategory(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="content-display-areaid">
          {selectedIndustry ? (
            <DatabaseContentDisplay item={selectedIndustry} />
          ) : (
            <p className="placeholderid">Please select category</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsightsDatabaseHomePage;
