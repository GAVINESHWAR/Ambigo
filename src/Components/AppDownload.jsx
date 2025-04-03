// AmbigoAppPromo.jsx
import React from "react";
import "./AppDownload.css";
import { useNavigate } from "react-router-dom";


const AmbigoAppPromo = () => {
  const navigate = useNavigate();
  return (
    <div className="app-promo-container">
      <div className="app-promo-content">
        <h1 className="app-promo-title">Get more in the app</h1>

        <div className="promo-cards-container">
          {/* QR Code Card */}
          <div className="promo-card">
            <div className="promo-card-content">
              <div className="qr-code-wrapper">
                <img
                  src="Ambigo.png"
                  alt="QR code to download Ambigo app"
                  className="qr-code"
                />
              </div>

              <div className="promo-text">
                <h2>Download the Ambigo app</h2>
                <p>Scan to download</p>
              </div>

              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4l8 8-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="promo-card">
            <div className="promo-card-content">
              <div className="app-logo-wrapper">
                <div className="app-logo-container">
                  <img
                    src="ambulance2.png"
                    alt="Ambigo logo"
                    className="app-logo"
                  />
                </div>
              </div>

              <div className="promo-text">
                <h2
                  onClick={() => {
                    navigate("/login");
                    window.scrollTo(0, 1);
                  }}
                >
                  Sign up to ride
                </h2>
              </div>

              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4l8 8-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-cards-container">
          {/* QR Code Card */}
          <div className="promo-card">
            <div className="promo-card-content">
              <div className="qr-code-wrapper">
                <img
                  src="driverApp.png"
                  alt="QR code to download Ambigo app"
                  className="qr-code"
                />
              </div>

              <div className="promo-text">
                <h2>Download the Driver Ambigo app</h2>
                <p>Scan to download</p>
              </div>

              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4l8 8-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sign Up Card */}
          <div className="promo-card">
            <div className="promo-card-content">
              <div className="app-logo-wrapper">
                <div className="app-logo-container">
                  <img
                    src="ambulance4.jpg"
                    alt="Ambigo logo"
                    className="app-logo"
                  />
                </div>
              </div>

              <div className="promo-text">
                <h2
                  onClick={() => {
                    navigate("/login");
                    window.scrollTo(0, 1);
                  }}
                >
                  Driver app: To Drive and Earn
                </h2>
              </div>

              <div className="arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4l8 8-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sign Up Link */}
        <div
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 1);
          }}
          className="bottom-signup"
        >
          <h2>Sign up to book Ambulance</h2>
          <div className="large-arrow-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 4l8 8-8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AmbigoAppPromo;
