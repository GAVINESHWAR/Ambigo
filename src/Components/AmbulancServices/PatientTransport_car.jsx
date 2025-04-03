import React from "react";
import "./PatientTransport.css";
import { useNavigate } from "react-router-dom";

const PatientTransport_car = () => {
    const navigate = useNavigate()
  return (
    <div className="containers_page">
      <header className="headers_page">
        <h1>Ambigo - Patient Transport Services</h1>
        <p>
          Reliable and quick transport for medical emergencies and non-emergency
          situations.
        </p>
      </header>

      <section className="intro_page">
        <h2>Why Choose Ambigo?</h2>
        <p>
          At Ambigo, we ensure safe and timely transportation for patients in
          need. Our fleet includes cars and auto-rickshaws, catering to various
          patient requirements. Whether it’s a medical emergency or a routine
          checkup, we provide hassle-free transport at affordable rates.
        </p>
      </section>

      <section className="service_car_in">
        <h2>Patient Transport by Car</h2>
        <img src="/carambulance.png" alt="Patient transport by car" />
        <p>
          Our car transport service is ideal for patients requiring comfortable,
          air-conditioned, and smooth rides. We provide trained drivers and
          basic medical support to ensure a stress-free journey.
        </p>
        <ul>
          <li>Fully sanitized and comfortable seating</li>
          <li>24/7 availability</li>
          <li>Affordable pricing with no hidden costs</li>
          <li>Trained professionals ensuring safe transport</li>
        </ul>
      </section>

      <section className="service_auto_in">
        <h2>Patient Transport by Auto</h2>
        <img src="/Auto_service.png" alt="Patient transport by auto" />
        <p>
          For short distances and quick transportation, our auto-rickshaw
          service is a cost-effective solution. Equipped with first-aid support
          and experienced drivers, we guarantee timely and safe travel.
        </p>
        <ul>
          <li>Fast and efficient transport</li>
          <li>Affordable for all patient needs</li>
          <li>Available in urban and rural areas</li>
          <li>First-aid and basic medical assistance</li>
        </ul>
      </section>

      <section className="booking_ambo">
        <h2>Book Your Ride Now!</h2>
        <p>
          Contact us at <strong>+91 9866792496</strong> or book online to ensure
          safe patient transport anytime, anywhere.
        </p>
        <button onClick={()=>{
                navigate("/login")
        }} className="book-btn_car">Book Now</button>
      </section>

      {/* <footer className="footers_car">
        <p>&copy; 2025 Ambigo. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default PatientTransport_car;
