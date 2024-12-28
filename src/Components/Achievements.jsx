import React from "react";
import "./Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Fastest Response Time",
      description: "Average response time of 5 minutes across the city.",
      icon: "https://img.icons8.com/ios-filled/50/clock--v1.png",
    },
    {
      id: 2,
      title: "Certified Professionals",
      description: "Over 500+ trained paramedics ready to assist 24/7.",
      icon: "https://cdn-icons-png.flaticon.com/512/6260/6260637.png",
    },
    {
      id: 3,
      title: "24/7 Availability",
      description: "Serving critical emergencies around the clock.",
      icon: "https://img.icons8.com/ios-filled/50/globe-earth.png",
    },
    {
      id: 4,
      title: "100K+ Lives Saved",
      description: "Trusted service for over a decade in healthcare.",
      icon: "https://img.icons8.com/ios-filled/50/heart-with-pulse.png",
    },
  ];

  return (
    <>
    <div className="achievements-section">
      <h2 className="section-title">Our Achievements</h2>
      <p className="section-subtitle">
        We take pride in offering top-notch ambulance services with excellence.
      </p>
      <div className="achievements-container">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <img
              src={achievement.icon}
              alt={achievement.title}
              className="achievement-icon"
            />
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Achievements;
