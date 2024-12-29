import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="my-account">
      <h2>My Account</h2>
      <div className="account-grid">
        {/* User Info Section */}
        <div className="account-card">
          <h3>User Info</h3>
          <p>
            <strong>Name</strong>
          </p>
          <p>
            <strong>Email</strong>
          </p>
          <button className="update-btn">Update Password</button>
        </div>

        {/* Manage Team Section */}
        <div className="account-card">
          <h3>Manage Team</h3>
          <p>
            <strong>Phylliss Pentecost</strong>
          </p>
          <p>winifredmacleod534@gmail.com</p>
          <button className="add-user-btn">Add User</button>
          <p>1 of 10 Seats Filled</p>
        </div>

        {/* Membership Info Section */}
        <div className="account-card">
          <h3>Membership Info</h3>
          <p>
            <strong>Current Plan</strong>: Exploding Topics Pro Business
          </p>
          <p>
            <strong>Start Date</strong>: 10/03/2024
          </p>
          <a href="/" className="link">
            Update Billing Information
          </a>
          <div className="membership-actions">
            <button className="upgrade-btn">Upgrade Subscription</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="account-card">
          <h3>Contact Support</h3>
          <p>
            <strong>Email</strong>: support@explodingtopics.com
          </p>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
      <footer className="account-footer">
        <p>
          <a href="/" className="link">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/" className="link">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="/" className="link">
            Affiliates
          </a>
        </p>
        <p>© 2024 Exploding.io</p>
      </footer>
    </div>
  );
};

export default Profile;
