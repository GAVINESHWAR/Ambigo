import React, {useEffect} from "react";
import "./CareerPage.css";
import {Link, useLocation} from 'react-router-dom';

const CareerPage = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const jobListings = [
    {
      title: "Ambulance Driver",
      description: "Responsible for safely transporting patients.",
      location: "Multiple Locations",
      link:"/ambulanceDriverForm"
    },
    {
      title: "Hospital Coordinator",
      description: "Manage hospital communications and patient records.",
      location: "Main Branch",
      link:"/hospitalCoordinatorForm"
    },
    {
      title: "Emergency Staff",
      description: "Provide emergency care and support.",
      location: "Citywide",
      link:"/emergencyStaffForm"
    },
    {
      title: "Paramedical Trainer",
      description: "Train paramedics for emergency response.",
      location: "Training Center",
      link:"/paramedicalTrainerForm"
    },
  ];

  return (
    <>
      <div className="careerhead">
        <div className="careerheadleft">
          <h1>
            Join our Team At
            <br />
            <span>Ambigo</span>
          </h1>
          <p>
            India's pioneering GPS-based technology platform designed to provide
            fast and reliable first-point medical attention.
          </p>
        </div>
        <div className="careerheadright">
          <img src="https://media.istockphoto.com/id/1154816287/photo/paramedic-team-pushing-stretcher.webp?a=1&b=1&s=612x612&w=0&k=20&c=LjTe2ytB1aJ_01wh1gISFS4ejR7cc1eIMiL3w7OGjlo=" />
        </div>
      </div>
      <div className="career-container">
        <div className="career-box">
          <h1 className="career-title">Join Ambigo - Save Lives</h1>
          <p className="career-description">
            At Ambigo, we are committed to providing top-notch emergency medical
            services. Join us in making a difference.
          </p>

          <div className="job-list">
            {jobListings.map((job, index) => (
              <div key={index} className="job-card">
                <h2 className="job-title">{job.title}</h2>
                <p className="job-description">{job.description}</p>
                <p className="job-location">Location: {job.location}</p>
                <Link to={job.link} onClick={(e)=> window.location.href = job.link}>
                  <button className="apply-button">Apply Now</button> 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
