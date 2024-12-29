import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "./index.css";
import { BrowserRouter, Outlet } from "react-router-dom";
import "keen-slider/keen-slider.min.css";

import Home from "./component/ui/Home/Home";

function App() {
  return (
    <>
      {/* <Home></Home> */}
      {/* <div className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl">Hello, Tailwind CSS is working!</h1>
      </div> */}
      <Outlet></Outlet>
    </>
  );
}

export default App;
