import React, {useEffect} from "react";
import './Training.css';
import AppDownload from "../AppDownload";
import { useLocation } from "react-router-dom";

const Training = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <h1 style={{textAlign:"center", margin:"30px"}}>Comprehensive Ambulance and Paramedical Training</h1>
      <h3 style={{textAlign:"center"}}>
        Ambigo Provide Training to Drivers and Paramedics ,So that they can
        handle Patient Properly to Hospital.
      </h3>
      <div className="training-container">
        {/* Driver Training Section */}
        <div className="training-section driver-section">
          <div className="training-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1683120972433-f68c0be5c1c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QW1idWxhbmNlJTIwZHJpdmluZyUyMHRyYWluaW5nfGVufDB8fDB8fHww"
              alt="Driver Training"
              className="section-image"
            />
          </div>
          <div className="training-content">
            <h2>Driver Training</h2>
            <p>
              Ambigo drivers are well-trained in first aid assistance and
              patient handling. We also provide them with training in basic
              skills like communication, grooming, technology, and safety
              protocols.
            </p>
          </div>
        </div>

        {/* Paramedical Training Section */}
        <div className="training-section paramedical-section">
          <div className="training-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1664304032864-8f257f601782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyYW1lZGljYWwlMjBpbnN0aXR1dGUlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Paramedical Training"
              className="section-image"
            />
          </div>
          <div className="training-content">
            <h2>Paramedical Training Institute</h2>
            <p>
              Ambigo is also planning to launch its own paramedic training
              institute, to provide a training and upskilling opportunity for
              the existing paramedics and EMTs of the nation and also people
              willing to pursue their career in emergency response services.
            </p>
          </div>
        </div>
      </div>
      <AppDownload/>
    </>
  );
}
export default Training