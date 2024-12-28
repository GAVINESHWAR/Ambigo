import React, { useEffect, useState } from "react";
import "./Insights.css";

const Insights = () => {
  const stats = [
    { value: 150, label: "Patient served" },
    { value: 50, label: "Ambulance" },
    { value: 5, label: "Cities" },
    { value: 100, label: "Hospital" },
    { value: 120, label: "Corporate" },
    { value: 123, label: "Doctor" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value
            ? count + Math.ceil(stats[index].value / 100)
            : stats[index].value
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="insights-container">
      <div className="insights-header">
        <div className="line"></div>
        <div className="pulse"></div>
        <h2>Insight</h2>
        <div className="pulse"></div>
        <div className="line"></div>
      </div>
      <div className="insights-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3 className="stat-value">{counts[index].toLocaleString()}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="response-time">
        <div className="line"></div>
        <div className="pulse"></div>
        <p>
          Response Time: <span>Less than 10 mins</span>
        </p>
        <div className="pulse"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Insights;
