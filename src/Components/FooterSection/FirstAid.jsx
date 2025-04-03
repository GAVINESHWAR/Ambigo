import React, {useEffect} from "react";
import "./FirstAid.css";
import {
  FaAmbulance,
  FaHeartbeat,
  FaHandsHelping,
  FaPhoneAlt,
  FaBriefcaseMedical,
} from "react-icons/fa";
import AppDownload from "../AppDownload";
import { useLocation } from "react-router-dom";

const FirstAidPage = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="ambigo-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Ambigo Ambulance Services</h1>
            <p>Rapid Response. Reliable Care. Ready When You Need Us.</p>
            <button className="cta-button">
              {" "}
              <a style={{color:"white"}} href="tel:+91 9866792496">Call Now</a>
            </button>
          </div>
        </section>

        {/* Why Choose Ambigo? */}
        <section className="why-choose-ambigo">
          <h2>Why Choose Ambigo?</h2>
          <div className="benefits-container">
            <div className="benefit">
              <FaAmbulance className="icon" />
              <h3>Quick Response</h3>
              <p>
                Our ambulances reach you swiftly, ensuring timely medical care.
              </p>
            </div>
            <div className="benefit">
              <FaHeartbeat className="icon" />
              <h3>Expert Medical Team</h3>
              <p>
                Trained paramedics and advanced equipment for critical care.
              </p>
            </div>
            <div className="benefit">
              <FaBriefcaseMedical className="icon" />
              <h3>24/7 Availability</h3>
              <p>
                Round-the-clock services for emergencies and patient transport.
              </p>
            </div>
          </div>
        </section>

        {/* First Aid Tips */}
        <section className="first-aid-tips">
          <h2>Essential First Aid Tips</h2>
          <div className="tips-container">
            <div className="tip">
              <FaHandsHelping className="icon" />
              <h3>Stay Calm</h3>
              <p>
                Assess the situation and stay calm to make effective decisions.
              </p>
            </div>
            <div className="tip">
              <FaHeartbeat className="icon" />
              <h3>Check Breathing</h3>
              <p>
                Ensure the person is breathing and check for any obstructions.
              </p>
            </div>
            <div className="tip">
              <FaBriefcaseMedical className="icon" />
              <h3>Control Bleeding</h3>
              <p>
                Apply pressure to wounds to control bleeding until help arrives.
              </p>
            </div>
          </div>
        </section>

        {/* Ambulance Services */}
        <section className="ambulance-services">
          <h2>Our Ambulance Services</h2>
          <ul>
            <li>Emergency Medical Response</li>
            <li>ICU and Advanced Life Support Ambulances</li>
            <li>Patient Transport Services</li>
            <li>Event Medical Coverage</li>
            <li>Neonatal and Pediatric Ambulance Care</li>
          </ul>
        </section>
      </div>
      <AppDownload />
    </>
  );
};

export default FirstAidPage;
