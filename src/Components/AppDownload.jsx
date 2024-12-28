import React from "react";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="app-media-section">
      <h2 className="section-title">App Media</h2>
      <div className="app-media-container">
        {/* Left Side: QR Code */}
        <div className="app-qr">
          <img
            src="https://gavineshwar.github.io/Medica/assests/scanner.jpeg"
            alt="QR Code for App Download"
          />
          <p>Scan to download the app</p>
        </div>

        {/* Right Side: Store Info */}
        <div className="app-info">
          <h3>Available on</h3>
          <p>Download our app now from:</p>
          <div className="store-icons">
            <a href="#" className="store-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                className="store-icon"
              />
            </a>
            <a href="#" className="store-link">
              <img
                src="https://gavineshwar.github.io/Medica/assests/appstore.png"
                alt="App Store"
                className="store-icon"
              />
            </a>
          </div>
        </div>
      </div>

<BookNow/>

    </div>
  );
};

const BookNow = ()=>{
    return (
      <div className="BookNow">
        <div className="CallUs">
          <h1>Call Our Assistance</h1>
          <button>
            <a href="tel:+91 9866792496">Call Now</a>
          </button>
        </div>
        <div className="BookUs">
          <h2>Book Ambulance</h2>
          <button>
            <a href="#">Book Now</a>
          </button>
        </div>
      </div>
    );
}
export default AppDownload;
