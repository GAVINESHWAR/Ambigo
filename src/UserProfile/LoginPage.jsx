import React, { useState } from "react";
import "./LoginPage.css";


const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOtp = async (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);

    // Simulate API call to send OTP
    setTimeout(() => {
      setShowOtpField(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      alert("Please enter a valid OTP");
      return;
    }

    setIsLoading(true);

    // Simulate API call to verify OTP
    setTimeout(() => {
      alert("Login successful!");
      setIsLoading(false);
      // Redirect or perform other actions here
    }, 1000);
  };
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Auto-rotate slides every 5 seconds
    setInterval(nextSlide, 5000);
  });

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="image-slider">
          <div className="slide active">
            <img
              src="/ambulance4.jpg"
              alt="Emergency medical services"
            />
            <div className="slide-content">
              <h2>Quick Response</h2>
              <p>We ensure rapid response in emergency situations</p>
            </div>
          </div>
          <div className="slide">
            <img
              src="/api/placeholder/600/800"
              alt="Professional medical team"
            />
            <div className="slide-content">
              <h2>Professional Care</h2>
              <p>Our team of experts is available 24/7</p>
            </div>
          </div>
          <div className="slide">
            <img src="/api/placeholder/600/800" alt="Modern ambulance fleet" />
            <div className="slide-content">
              <h2>Modern Fleet</h2>
              <p>Equipped with advanced medical technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <div className="logo-container">
            <div className="logo">
             <img src = "/ambulance6.png"/>
            </div>
            <h1>ambigo</h1>
            <p className="tagline">ambulance services</p>
            <div className="underline"></div>
          </div>

          <div className="login-forms">
            {!showOtpField ? (
              <form onSubmit={handleGetOtp}>
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="phone-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="#FF6B1A"
                      >
                        <path d="M17,2 L7,2 C5.9,2 5,2.9 5,4 L5,20 C5,21.1 5.9,22 7,22 L17,22 C18.1,22 19,21.1 19,20 L19,4 C19,2.9 18.1,2 17,2 Z M17,18 L7,18 L7,4 L17,4 L17,18 Z M12,20 C11.45,20 11,19.55 11,19 C11,18.45 11.45,18 12,18 C12.55,18 13,18.45 13,19 C13,19.55 12.55,20 12,20 Z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="primary-btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmitOtp} className="otp-form">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter OTP sent to your phone"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="primary-btn"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setShowOtpField(false)}
                >
                  Change Number
                </button>
              </form>
            )}

            <div className="terms-text">
              By signing up, you are agreeing to our{" "}
              <a href="/terms" className="terms-link">
                terms and conditions
              </a>
              ,{" "}
              <a href="/privacy" className="terms-link">
                privacy policy
              </a>
              , and{" "}
              <a href="/agreement" className="terms-link">
                user agreement
              </a>
              .
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <button className="google-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
