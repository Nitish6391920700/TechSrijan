import React from "react";
import "./Team.css";

const TeamPage = () => {
  return (
    <div className="team-page">
      <header className="header">
        <h1 className="core-team-title">Core Team</h1>
      </header>
      <div className="team-container">
        <div className="sidebar">
          <ul className="sidebar-list">
            <li>Events & Competitions</li>
            <li>Marketing</li>
            <li>Media & Publicity</li>
            <li>Show Management</li>
            <li>Finance</li>
            <li>Public Relations</li>
            <li>Security</li>
            <li>Design</li>
            <li>Web & App</li>
            <li>Festival Coordinators</li>
          </ul>
        </div>
        <div className="content">
          <h2 className="section-title">Events & Competitions</h2>
          <div className="team-members">
            <div className="member-card">
              <img
                src="./member1.jpg"
                alt="Member 1"
                className="member-image"
              />
              <p className="member-role">Events & Competitions</p>
            </div>
            <div className="member-card">
              <img
                src="./member2.jpg"
                alt="Member 2"
                className="member-image"
              />
              <p className="member-role">Marketing</p>
            </div>
            <div className="member-card">
              <img
                src="./member3.jpg"
                alt="Member 3"
                className="member-image"
              />
              <p className="member-role">Publicity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
