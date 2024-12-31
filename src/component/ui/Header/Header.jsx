import React, { useState } from "react";
import "./Header.css"; // Import the CSS file
import logo from "../../../assets/logo.jpeg";
const Header = () => {
  // State for toggling dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown toggling
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close if it's already open
    } else {
      setOpenDropdown(dropdownName); // Open the selected dropdown
    }
  };

  return (
    <header className="header">
      <div className="first">
        <a href="/">
          {" "}
          <img src={logo} alt="logo" className="logoImage"></img>
        </a>
      </div>
      <div className="second">
        <nav className="navbar">
          <ul className="nav-list">
            {/* Product Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => toggleDropdown("product")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <a href="#" className="nav-link">
                Product <span>▾</span>
              </a>
              {openDropdown === "product" && (
                <div className="dropdown-menu">
                  <a href="/trending-startups">Trending-Startups</a>
                  <a href="/trending-products">Trending-Products</a>
                  <a href="/inside-database">Insight Database</a>
                  <a href="/meta-wave">Meta Wave</a>
                  <a href="/deep-dive-analysis">Deep Dive Analysis</a>
                  {/* <a href="/reports-center">Reports Center</a> */}
                </div>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => toggleDropdown("company")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <a href="#" className="nav-link">
                Company <span>▾</span>
              </a>
              {openDropdown === "company" && (
                <div className="dropdown-menu">
                  <a href="/changelogs">Chagelogs</a>
                  <a href="/blog">Blog</a>
                  {/* <a href="/support">Support</a> */}
                  <a href="/aboutus">About Us </a>

                  <a href="/faqs">Faqs</a>
                  <a href="/case-studies">Case Studies </a>
                  <a href="/carrers">Careers</a>
                </div>
              )}
            </li>

            {/* Resources Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => toggleDropdown("resources")}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <a href="#" className="nav-link">
                Resources <span>▾</span>
              </a>
              {openDropdown === "resources" && (
                <div className="dropdown-menu">
                  <a href="/changelogs">Chagelogs</a>
                  <a href="/blog">Blog</a>
                  {/* <a href="/support">Support</a> */}
                  <a href="/aboutus">About Us </a>

                  <a href="/faqs">Faqs</a>
                  <a href="/case-studies">Case Studies </a>
                  <a href="/carrers">Careers</a>
                </div>
              )}
            </li>

            {/* Pricing Link */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="third">
        <button type="button" className="btn btn-primary">
          Register
        </button>
        <button type="button" className="btn btn-light">
          Login
        </button>
        <button type="button" className="btn btn-primary">
          <a href="/dashboard">DashBoard</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
