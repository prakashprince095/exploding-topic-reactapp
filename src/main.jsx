import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap globally
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Home from "./component/ui/Home/Home";
import DashBoardLanding from "./component/DashBoard/Landing/DashBoardLandingPage";
import ReportHome from "./component/DashBoard/Reports/ReportsHome";
import ContactUs from "./component/DashBoard/HelpCenter/ContactUs";
import Sidebar from "./component/DashBoard/Landing/SideBar";
import Profile from "./component/DashBoard/Profile/Profile";
import DeepAnalysis from "./component/DashBoard/Deep Analysis/DeepAnalysis";
import MetaWaveHomePage from "./component/DashBoard/Meta Wave/MetaWaveHomePage";
import InsightsdatabaseHomePage from "./component/DashBoard/Insights Database/InsightsDatabaseHomePage";
import TrendingStartupHomePage from "./component/DashBoard/TrendingStartups/TrendingStartupHomePage";
import InsightsHubHomePage from "./component/DashBoard/Insights Hub/InsightsHubHomePage";
import DiscoverProductsHomePage from "./component/DashBoard/Discover Products/DiscoverProductsHomePage";
import InsightDatabase from "./component/Pages/Insight Database/InsightDatabase";
import TrendingStartups from "./component/Pages/Trending Startups/TrendingStartups";
import TrendingProducts from "./component/Pages/Trending Products/TrendingProducts";
import MetaWave from "./component/Pages/Meta Wave/MetaWave";
import DeepDiveAnalysis from "./component/Pages/Deep Dive Analysis/DeepDiveAnalysis";
import ReportsCenter from "./component/Pages/Reports Center/ReportsCenter";
import ChangeLogs from "./component/Pages/Changelogs/ChangeLogs";
import Blog from "./component/Pages/Blog/Blog";
import AboutUs from "./component/Pages/About us/AboutUs";
import Faqs from "./component/Pages/Faqs/Faqs";
import CaseStudies from "./component/Pages/Case Studies/CaseStudies";
import Support from "./component/Pages/Support/Support";
import Careers from "./component/Pages/Carrers/Carrers";
import TrendingStartupDetailPage from "./component/DashBoard/TrendingStartups/TrendingStartupDetailPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sidebar", element: <Sidebar /> },

      {
        path: "/dashboard",
        element: <DashBoardLanding />, // The parent route for the dashboard
        children: [
          { path: "reports", element: <ReportHome /> }, // This matches `/dashboard/reports`
          { path: "metawave", element: <MetaWaveHomePage /> },
          { path: "insightsdatabase", element: <InsightsdatabaseHomePage /> },
          { path: "discoverproducts", element: <DiscoverProductsHomePage /> },

          {
            path: "trendingstartups", // This matches `/dashboard/trendingstartups`
            element: <TrendingStartupHomePage />, // Renders this component
            children: [
              {
                path: "details", // This matches `/dashboard/trendingstartups/details`
                element: <TrendingStartupDetailPage />, // Renders this component inside the same Outlet
              },
            ],
          },

          { path: "insightshub", element: <InsightsHubHomePage /> },
          { path: "deepanalysis", element: <DeepAnalysis /> },
          { path: "contactus", element: <ContactUs /> },
          { path: "profile", element: <Profile /> },
          { path: "details", element: <TrendingStartupDetailPage /> },
        ],
      },

      {
        path: "/trending-startups",
        element: <TrendingStartups />, // This route is not under /dashboard, so it should be separate
      },
      {
        path: "/trending-products",
        element: <TrendingProducts />,
      },
      {
        path: "/inside-database",
        element: <InsightDatabase />,
      },
      {
        path: "/meta-wave",
        element: <MetaWave />,
      },
      {
        path: "/deep-dive-analysis",
        element: <DeepDiveAnalysis />,
      },
      {
        path: "/reports-center",
        element: <ReportsCenter />,
      },
      {
        path: "/changelogs",
        element: <ChangeLogs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "carrers",
        element: <Careers></Careers>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
