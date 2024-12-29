import React from "react";
import "./CompanyList.css"; // Import the CSS file

// Import logos
import eylogo from "../../../../assets/CompanyLogo/eylogo.jpg";
import googlelogo from "../../../../assets/CompanyLogo/googlelogo2.png";
import ubs from "../../../../assets/CompanyLogo/UBS_logo.png";
import microsoftlogo from "../../../../assets/CompanyLogo/microsoftlogo4.png";
import goldmansach from "../../../../assets/CompanyLogo/goldmansachlogo3.png";
import jpmorgan from "../../../../assets/CompanyLogo/jpmorgan.png";
import mastercard from "../../../../assets/CompanyLogo/MasterCard_Logo.svg.png";

const CompanyList = () => {
  return (
    <div className="company-list-container">
      <h2 className="company-list-title">
        Trusted by 1000+ companies worldwide
      </h2>
      <div className="company-list-logos">
        <img src={googlelogo} alt="Google" />
        <img src={microsoftlogo} alt="Microsoft" />
        <img src={mastercard} alt="MasterCard" />
        <img src={ubs} alt="UBS" />
        <img src={goldmansach} alt="Goldman Sachs" />
        <img src={jpmorgan} alt="JP Morgan" />
        <img src={eylogo} alt="EY" />
      </div>
    </div>
  );
};

export default CompanyList;
