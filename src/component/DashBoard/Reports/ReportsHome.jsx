import React from "react";
import "./ReportsHome.css";

const reportsData = [
  {
    date: "01 Oct 2024",
    topics: ["Cozey", "Hyperscaler", "ScrapingBee", "Creatine Gummies"],
  },
  {
    date: "24 Sep 2024",
    topics: [
      "Cradlewise",
      "Shilajit Gummies",
      "Santa Cruz Paleo",
      "Data Fabric",
    ],
  },
  {
    date: "17 Sep 2024",
    topics: [
      "Plaud AI",
      "Tranexamic Acid Serum",
      "Sproud Milk",
      "Platform Engineering",
    ],
  },
];

const ReportHome = () => {
  return (
    <div className="reports-library">
      <h2>Reports Library</h2>
      <div className="reports-grid">
        {reportsData.map((report, index) => (
          <div key={index} className="report-card">
            <h3>{report.date}</h3>
            <ul>
              {report.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
            <button className="read-report-btn">Read Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportHome;
