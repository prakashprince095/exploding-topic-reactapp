import React, { useState } from "react";
import "./Sidebar.css"; // Assuming you have the styles in a separate CSS file

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCreateSubMenuOpen, setIsCreateSubMenuOpen] = useState(false);
  const [isTodoSubMenuOpen, setIsTodoSubMenuOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle the Create submenu
  const toggleCreateSubMenu = () => {
    setIsCreateSubMenuOpen(!isCreateSubMenuOpen);
  };

  // Toggle the Todo submenu
  const toggleTodoSubMenu = () => {
    setIsTodoSubMenuOpen(!isTodoSubMenuOpen);
  };

  return (
    <div>
      <nav id="sidebar" className={isSidebarOpen ? "" : "closed"}>
        <ul>
          <li>
            <a href="/">
              {" "}
              <span className="logo">Home</span>
            </a>
            <button onClick={toggleSidebar} id="toggle-btn">
              {/* Placeholder for SVG Icon */}
              &#9776;
            </button>
          </li>
          <li className="active">
            <a href="index.html">
              {/* Placeholder for SVG Icon */}
              Insights Hub
            </a>
          </li>
          <li>
            <a href="dashboard.html">
              {/* Placeholder for SVG Icon */}
              Dashboard
            </a>
          </li>
          <li>
            <button onClick={toggleCreateSubMenu} className="dropdown-btn">
              {/* Placeholder for SVG Icon */}
              Create
            </button>
            {isCreateSubMenuOpen && (
              <ul className="sub-menu">
                <li>
                  <a href="#">Folder</a>
                </li>
                <li>
                  <a href="#">Document</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={toggleTodoSubMenu} className="dropdown-btn">
              {/* Placeholder for SVG Icon */}
              Todo-Lists
            </button>
            {isTodoSubMenuOpen && (
              <ul className="sub-menu">
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Private</a>
                </li>
                <li>
                  <a href="#">Coding</a>
                </li>
                <li>
                  <a href="#">Gardening</a>
                </li>
                <li>
                  <a href="#">School</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="calendar.html">
              {/* Placeholder for SVG Icon */}
              Calendar
            </a>
          </li>
          <li>
            <a href="profile.html">
              {/* Placeholder for SVG Icon */}
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="container">
          <h2>Hello World</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            porro iure quaerat aliquam! Optio dolorum in eum provident, facilis
            error repellendus excepturi enim dolor deleniti adipisci consectetur
            doloremque, unde maiores odit sapiente. Atque ab necessitatibus
            laboriosam consequatur eius similique, ex dolorum eum eaque sequi id
            veritatis voluptates perspiciatis, cupiditate pariatur.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
