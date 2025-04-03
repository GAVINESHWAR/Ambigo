import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import { useNavigate , useLocation} from "react-router-dom";

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const teamMembers = [
    {
      id: 1,
      name: "Karamthoti Sai Kumar",
      role: "Founder & CEO",
      bio: "Passionate about the innovative things with service provided minded person",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nMTqkRU8jkPkRJC2ivjP-qHkGDG2PLeG3A&s",
      categories: ["Leadership", "Founder"],
    },
    // {
    //   id: 2,
    //   name: "Priyanka",
    //   role: "CTO",
    //   bio: "Full-stack engineer with expertise in cloud architecture and distributed systems. Previously at Google.",
    //   image: "/api/placeholder/400/400",
    //   categories: ["Leadership", "Development"],
    // },
    {
      id: 3,
      name: "Vivek",
      role: "Software Developer",
      bio: "Backend expert focused on scalable microservices and database optimization.",
      image: "/Vivek.png",
      categories: ["Development"],
    },
    {
      id: 4,
      name: "G Avineshwar",
      role: "Web Developer",
      bio: "Frontend specialist with  experience building responsive, accessible web applications.",
      image: "/avineshwar.jpg",
      categories: ["Development"],
    },
    // {
    //   id: 5,
    //   name: "Sowmya",
    //   role: "Financial Manager",
    //   bio: "Former investment banker with experience in fundraising and financial planning for tech startups.",
    //   image: "/api/placeholder/400/400",
    //   categories: ["Finance"],
    // },
    {
      id: 6,
      name: "Prasad",
      role: "Advisor",
      bio: "Industry veteran and academic with expertise in full stack applications.",
      image: "/api/placeholder/400/400",
      categories: ["Advisory"],
    },
    // {
    //   id: 7,
    //   name: "James Lee",
    //   role: "UX/UI Designer",
    //   bio: "Award-winning designer focused on creating intuitive and delightful user experiences.",
    //   image: "/api/placeholder/400/400",
    //   categories: ["Design"],
    // },
    // {
    //   id: 8,
    //   name: "Olivia Martinez",
    //   role: "Marketing Director",
    //   bio: "Digital marketing strategist with experience in growth hacking and brand development.",
    //   image: "/api/placeholder/400/400",
    //   categories: ["Marketing"],
    // },
  ];

  const categories = [
    "All",
    "Leadership",
    "Development",
    "Finance",
    "Advisory",
    "Design",
    "Marketing",
    "Founder",
  ];

  const filteredMembers =
    activeFilter === "All"
      ? teamMembers
      : teamMembers.filter((member) =>
          member.categories.includes(activeFilter)
        );

  return (
    <div className="team-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Our Team</h1>
          <p>Meet the talented individuals driving our mission forward</p>
        </div>
      </div>

      <div className="team-container">
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={activeFilter === category ? "active" : ""}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={member.image} />
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                </div>
                <div className="card-back">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn">
                      <i className="social-icon">in</i>
                    </a>
                    <a href="#" aria-label="Twitter">
                      <i className="social-icon">X</i>
                    </a>
                    <a href="#" aria-label="Email">
                      <i className="social-icon">@</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="join-team-section">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented individuals to join our mission</p>
        <button
        onClick={()=>{
          navigate("/Careers")
        }} className="cta-button">View Open Positions</button>
      </div>
    </div>
  );
};

export default TeamPage;
