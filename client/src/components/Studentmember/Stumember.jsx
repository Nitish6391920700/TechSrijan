import React, { useState } from "react";
import "./Stuteam.css";
// import vc from "./Members/VC.jpg";
// import sahu from "./Members/sahu.jpeg";
// import rajan from "./Members/Rajan.jpg";
import akash from './Members/Akash.jpg';
import harsh from './Members/Harsh.jpg';
import antrali from './Members/Antrali.jpg';
import ashish from './Members/Ashish.jpg';
import bhashkar from './Members/Bhashkar.jpg';
import sachin from './Members/Sachin.jpg';

const StuMember = () => {
  // Data for team members
  const teamMembers = {
    "Events & Competitions": [
      { id: 1, name: "Akash Pandey", position: "Student-Chair IEEE-SUB MMMUT", image:akash },
      { id: 2, name: "Harsh Kumar Yadav", position: "Student-Chair SAE Collegiate Chapter", image: harsh },
      { id: 3, name: "Antrali", position: "Student-Chair IEEE-SUB MMMUT", image:antrali },
      { id: 4, name: "Ashish Siddhartha", position: "Vice-Chairman IEEE-SUB MMMUT", image: ashish },
  
      { id: 1, name: "Bhaskar", position: "Vice-Chairman SAE Collegiate Chapter ", image: bhashkar },
      { id: 2, name: "Sachin Singh", position: "Vice-Chairman SAE Collegiate Chapter", image: sachin },
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