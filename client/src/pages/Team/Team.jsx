import React, { useState } from "react";
import "./Team.css";
import vc from "./Members/VC.jpg";
import sahu from "./Members/sahu.jpeg";
import rajan from "./Members/Rajan.jpg";

const TeamPage = () => {
  // Data for team members
  const teamMembers = {
    "Our Mentors": [
      { id: 1, name: "Rajan Mishra", position: "Coordinator", image: rajan },
      { id: 2, name: "Jai Prakash Saini", position: "Co-Coordinator", image: vc },
      { id: 3, name: "Anupam Sahu", position: "Member", image: sahu },
    ],
    Marketing: [
      { id: 1, name: "Alice Johnson", position: "Marketing Head", image: "./member3.jpg" },
      { id: 2, name: "Bob Brown", position: "Marketing Assistant", image: "./member4.jpg" },
    ],
    "Media & Publicity": [
      { id: 1, name: "Charlie Davis", position: "Media Manager", image: "./member5.jpg" },
      { id: 2, name: "Diana Miller", position: "Publicity Officer", image: "./member6.jpg" },
    ],
  };

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("Our Mentors");

  return (
    <div className="team-page">
      <header className="header">
        {/* <h1 className="core-team-title">Core Team</h1> */}
      </header>
      <div className="team-container">
        {/* Sidebar */}
        <div className="sidebar">
          <ul className="sidebar-list">
            {Object.keys(teamMembers).map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "active-category" : ""}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          <h2 className="section-title">{selectedCategory}</h2>
          <div className="team-members">
            {teamMembers[selectedCategory].map((member) => (
              <div key={member.id} className="member-card">
                <img src={member.image} alt={member.name} className="member-image" />
                <p className="member-name">{member.name}</p>
                <p className="member-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
