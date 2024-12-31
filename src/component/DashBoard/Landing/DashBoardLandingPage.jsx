import React, { useState } from "react";
import "./DashBoardLandingPage.css";
import { Outlet } from "react-router-dom";

const DashBoardLandingPage = () => {
  // Set initial activeMenu state to null to avoid any item being selected by default
  const [activeMenu, setActiveMenu] = useState(null);

  // Hardcoded menu items with label and route
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Insights Hub", route: "/dashboard/insightshub" },
    { label: "Trending Startups", route: "/dashboard/trendingstartups" },
    { label: "Discover Products", route: "/dashboard/discoverproducts" },
    { label: "Insights Database", route: "/dashboard/insightsdatabase" },
    { label: "Meta Wave", route: "/dashboard/metawave" },
    { label: "Deep Analysis", route: "/dashboard/deepanalysis" },
    { label: "Reports", route: "/dashboard/reports" },
    { label: "Profile", route: "/dashboard/profile" },
    // { label: "Help Center", route: "/dashboard/contactus" },
    { label: "Details", route: "/dashboard/details" },
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <div className="sidebar">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              route={item.route}
              isActive={activeMenu === item.label} // Check if the current item is active
              onClick={() => setActiveMenu(item.label)} // Update activeMenu when clicked
            />
          ))}
        </div>
      </div>

      <div className="main-content-container">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ label, route, isActive, onClick }) => {
  return (
    <div
      className={`sidebar-item ${isActive ? "active" : ""}`} // Add active className if isActive is true
      onClick={onClick}
    >
      <a href={route}>{label}</a>
    </div>
  );
};

export default DashBoardLandingPage;
