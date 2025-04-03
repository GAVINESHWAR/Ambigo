import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let interval = null;
    if (otpSent && timer > 0) { 
      interval = setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const validatePhone = (phone) => {
    // Basic validation for 10-digit phone number
    return /^\d{10}$/.test(phone);
  };

  const handleGetOtp = () => {
    if (!validatePhone(phoneNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setError("");
    setOtpSent(true);
    setTimer(30); // Set a 30-second timer for resending OTP

    // In a real app, you would make an API call to send OTP
    console.log(`OTP sent to ${phoneNumber}`);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    // In a real app, you would verify the OTP with an API call
    // This is just a mock success
    setError("");
    setSuccess(true);
    console.log("OTP verified successfully");
  };

  const handleGoogleSignIn = () => {
    // In a real app, you would integrate Google Sign-In
    setSuccess(true);
    console.log("Signed in with Google");
  };

  const handleResendOtp = () => {
    setTimer(30);
    // In a real app, you would make an API call to resend OTP
    console.log(`OTP resent to ${phoneNumber}`);
  };

  if (success) {
    return (
      <div className="login-container">
        <div className="login-box success-box">
          <div className="checkmark-circle">✓</div>
          <h2>Login Successful!</h2>
          <p>You have been successfully logged in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Welcome back! Please login to continue</p>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <div className="input-group">
            <input
              type="tel"
              id="phone"
              className={phoneNumber ? "has-value" : ""}
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              disabled={otpSent}
              required
            />
            <label htmlFor="phone">Mobile Number</label>
          </div>

          {!otpSent ? (
            <button
              className="primary-button get-otp-button"
              onClick={handleGetOtp}
              disabled={!phoneNumber || phoneNumber.length !== 10}
            >
              Get OTP
            </button>
          ) : (
            <button
              className="text-button resend-button"
              onClick={handleResendOtp}
              disabled={timer > 0}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          )}
        </div>

        {otpSent && (
          <div className="form-group otp-group">
            <div className="input-group">
              <input
                type="text"
                id="otp"
                className={otp ? "has-value" : ""}
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                required
              />
              <label htmlFor="otp">Enter 6-digit OTP</label>
            </div>
            <button
              className="primary-button verify-button"
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6}
            >
              Verify & Login
            </button>
          </div>
        )}

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-button" onClick={handleGoogleSignIn}>
          <div className="google-icon">G</div>
          Sign in with Google
        </button>

        <p className="terms-text">
          By signing up, you are agreeing to our{" "}
          <a onClick={()=>{
            navigate("/terms")
          }}>terms and conditions</a>,<a onClick={()=>{
            navigate("/terms")
          }} >privacy policy</a>,
          and <a onClick={()=>{
            navigate("/terms")
          }}  >user agreement</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
