import React, {useEffect} from "react";
import "./ContactUs.css";
import AppDownload from "../AppDownload";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="concontact-page">
        <div className="conmain-heading">
          <h1>
            Please get in touch and our expert support team will answer all your{" "}
            <span className="conhighlight">Questions</span>
          </h1>
          <p className="consubtitle">
            Our aim is to assist you! Help us Help you!
          </p>
        </div>

        {/* Content Container */}
        <div className="concontent-container">
          {/* Contact Information */}
          <div className="concontact-info-card">
            <h2>Contact Information</h2>
            <ul className="concontact-list">
              <li className="conaddress">
                11/2/310,NAIK NAGAR,ANANTAPUR, ANDHRA PRADESH 515001
              </li>
              <li className="conphone">9866792496</li>
              <li>
                <a href="mailto:ambigi.in@gmail.com.com" className="conemail">
                  ambigo.in@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.medulance.com" className="conwebsite">
                  www.ambigo.in
                </a>
              </li>
            </ul>
            <button className="conlocation-btn">Find Location</button>
          </div>

          {/* Help Section */}
          <div className="conhelp-section">
            <h2>How Can We Help?</h2>
            <p className="conhelp-text">
              Please select a topic below related to your inquiry. If you don't
              find what you need, fill out our contact form.
            </p>
            <div className="conhelp-options">
              <p>Request a demo from one of our conversion specialists.</p>
              <p>Discover the many ways in which our customers use Ambigo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conpartner-container">
        <div className="conpartner-header">
          <h2 className="consubtitle">Grow your business</h2>
          <h1 className="contitle">Partner with Us</h1>
        </div>

        <div className="conpartnership-options">
          <div className="conpartner-card">
            <div className="concard-header">FOR AMBULANCE VENDORS</div>
            <div className="concard-content">
              <p>
                Join our Partner Program and earn 25% recurring commissions.
              </p>
              <button className="conpartner-button">Learn More</button>
            </div>
          </div>

          <div className="conpartner-card">
            <div className="concard-header">FOR OTHER SERVICES</div>
            <div className="concard-content">
              <p>
                Join our Partner Program and earn 25% recurring commissions.
              </p>
              <button className="conpartner-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
    </>
  );
}
export default ContactUs