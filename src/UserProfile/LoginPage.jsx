// LoginPage.jsx
import React, { useState } from "react";
import "./LoginPage.css";
import logo from '../assets/LogoIcon.png';
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP generation logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-section">
          <div className="ambulance-icon">
            <img src={logo} />
          </div>
          <h1>ambigo</h1>
          <p className="subtitle">ECNALUBMA services</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>

          <p className="terms-text">
            By signing up, you are agreeing to our{" "}
            <a href="#">terms and conditions</a>, <a href="#">privacy policy</a>{" "}
            and <a href="#">user agreement</a>. Click to view.
          </p>

          <NavLink
            className="otp-button"
            to="/booking"
            activeClassName="active"
            onClick={() => (window.location.href = "/booking")}
          >
            <button type="submit">
              Get OTP <span className="timer-icon">⏱</span>
            </button>
          </NavLink>
          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-button">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
              alt="Google logo"
              className="google-icon"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
