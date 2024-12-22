import React from "react";
import "./Team.css";
import vc from "./Members/VC.jpg";
import sahu from "./Members/sahu.jpeg";
import rajan from "./Members/Rajan.jpg";

const TeamPage = () => {
  return (
    <div className="team-page">
      <header className="header">
        {/* Title */}
        <h1 className="core-team-title">Our Mentors</h1>
      </header>
      <div className="team-container">
        {/* Content */}
        <div className="content">
          <div className="team-members">
            {/* Jai Prakash Saini (Vice Chancellor) - Top Center */}
            <div className="member-card larger-card">
              <img src={vc} alt="Jai Prakash Saini" className="member-image larger-image" />
              <p className="member-name">Jai Prakash Saini</p>
              <p className="member-position">Hon'ble Vice Chancellor</p>
            </div>
          </div>

          <div className="team-members row">
            {/* Rajan Mishra */}
            <div className="member-card">
              <img src={rajan} alt="Rajan Mishra" className="member-image" />
              <p className="member-name">Rajan Mishra</p>
              <p className="member-position">Coordinator</p>
            </div>

            {/* Anupam Sahu */}
            <div className="member-card">
              <img src={sahu} alt="Anupam Sahu" className="member-image" />
              <p className="member-name">Anupam Sahu</p>
              <p className="member-position">Member</p>
            </div>

            {/* New Member */}
            <div className="member-card">
              <img src={rajan} alt="New Member" className="member-image" />
              <p className="member-name">New Member</p>
              <p className="member-position">New Position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
