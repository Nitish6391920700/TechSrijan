import React, { useState } from "react";
import "./Stuteam.css";
// import vc from "./Members/VC.jpg";
// import sahu from "./Members/sahu.jpeg";
// import rajan from "./Members/Rajan.jpg";

const StuMember = () => {
  // Data for team members
  const teamMembers = {
    "Events & Competitions": [
      { id: 1, name: "Rajan Mishra", position: "Coordinator", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
      { id: 2, name: "Jai Prakash Saini", position: "Co-Coordinator", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
      { id: 3, name: "Anupam Sahu", position: "Member", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
      { id: 4, name: "Anupam Sahu", position: "Member", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
  
    ],
    Marketing: [
      { id: 1, name: "Alice Johnson", position: "Marketing Head", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
      { id: 2, name: "Bob Brown", position: "Marketing Assistant", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
    ],
    "Media & Publicity": [
      { id: 1, name: "Charlie Davis", position: "Media Manager", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
      { id: 2, name: "Diana Miller", position: "Publicity Officer", image: "https://cdn.pixabay.com/photo/2024/02/13/17/30/sailing-ship-8571483_1280.jpg" },
    ],
  };

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("Events & Competitions");

  return (
    <div className="team-page">
      <header className="header">
        <h1 className="core-team-title">Core Team</h1>
      </header>
      <div className="team-container">
        {/* Sidebar */}
        {/* <div className="sidebar">
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
        </div> */}

        {/* Content */}
        <div className="content">
          {/* <h2 className="section-title">{selectedCategory}</h2> */}
          <div className="team-members">
            {teamMembers[selectedCategory].map((member) => (
              <div key={member.id} className="member-card">
                <img src={member.image} alt={member.name} className="member-imagee" />
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

export default StuMember;