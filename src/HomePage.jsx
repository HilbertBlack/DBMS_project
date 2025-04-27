import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [expandedCandidate, setExpandedCandidate] = useState(null);

  const toggleCandidate = (id) => {
    setExpandedCandidate(expandedCandidate === id ? null : id);
  };

  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      year: "3rd Year",
      department: "Computer Science",
      color: "celadon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      details: {
        academic: "GPA: 3.8/4.0\nDean's List 2022, 2023",
        participation: "Student Council\nTech Club President",
        contributions: "Organized Hackathon\nImproved campus WiFi"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      year: "4th Year",
      department: "Political Science",
      color: "celadon",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      details: {
        academic: "GPA: 3.9/4.0\nUniversity Scholar",
        participation: "Debate Team Captain\nDiversity Committee",
        contributions: "Founded Women in Politics\nSecured guest speakers"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      year: "2nd Year",
      department: "Business",
      color: "celadon",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      details: {
        academic: "GPA: 3.7/4.0\nCase Competition Winner",
        participation: "Entrepreneurship Club\nStudent Ambassador",
        contributions: "Launched business incubator\nIncreased internships"
      }
    },
    {
      id: 4,
      name: "Priya Patel",
      year: "4th Year",
      department: "Biomedical Eng",
      color: "celadon",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      details: {
        academic: "GPA: 4.0/4.0\nResearch Fellowship",
        participation: "Engineering Board\nSTEM Mentor",
        contributions: "Lab equipment system\nSTEM outreach programs"
      }
    }
  ];

  return (
    <div className="homepage">
      <header className="header">
        <h1>🏛️ University Student Union Elections 2024</h1>
        <p className="tagline">Your Vote Shapes Our Future</p>
        <div className="banner">
          <p>This election determines student representatives who will allocate the $500,000 activity budget and influence campus policies.</p>
        </div>
      </header>

      <main className="main-content">
        <div className="candidates-grid">
          {candidates.map((candidate) => (
            <div 
              key={candidate.id} 
              className="candidate-card"
              style={{ borderTop: `5px solid ${candidate.color}` }}
            >
              <div className="card-top">
                <div className="candidate-photo">
                  <img src={candidate.image} alt={candidate.name} />
                  <span className="dept-badge" style={{ backgroundColor: candidate.color }}>
                    {candidate.department}
                  </span>
                </div>
                <div className="candidate-bio">
                  <h3>{candidate.name}</h3>
                  <p className="year">{candidate.year}</p>
                </div>
              </div>
              
              <button
                className="toggle-btn"
                onClick={() => toggleCandidate(candidate.id)}
                style={{ backgroundColor: candidate.color }}
              >
                {expandedCandidate === candidate.id ? '▲ Hide Details' : '▼ Show Full Profile'}
              </button>

              {expandedCandidate === candidate.id && (
                <div className="candidate-details">
                  <div className="detail-item">
                    <h4>📚 Academics</h4>
                    <p>{candidate.details.academic}</p>
                  </div>
                  <div className="detail-item">
                    <h4>🏛️ Participation</h4>
                    <p>{candidate.details.participation}</p>
                  </div>
                  <div className="detail-item">
                    <h4>🌟 Contributions</h4>
                    <p>{candidate.details.contributions}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="voting-info">
          <span>⏰ 12.01 a.m to 11.59 p.m</span>  
          <span>🗓️ April 21,2025</span>
          <span>📢 Results: April 24,2025</span>
        </div>
        <button className="vote-btn">Cast Your Vote Now →</button>
      </footer>
    </div>
  );
};

export default HomePage;