import React, {useState, useEffect} from "react";
import { FaBed, FaClock, FaHeadset, FaAmbulance } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import './Hospital.css';
import AppDownload from "../AppDownload";
import { useLocation } from "react-router-dom";

const Hospital = () => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
     const [formData, setFormData] = useState({
       organizationName: "",
       companyEmail: "",
       contactNumber: "",
       message: "",
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form submitted:", formData);
       // Handle form submission logic here
       setFormData({
         organizationName: "",
         companyEmail: "",
         contactNumber: "",
         message: "",
       });
     };
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        Ambulance Service for{" "}
        <span style={{ color: "orange", textDecoration: "underline" }}>
          Public Welfare
        </span>
      </h1>
      <h3 style={{ textAlign: "center" }}>
        We manage the end-to-end operations of the ambulance fleet of the
        hospital. The services contain managing the call center operations,
        ambulance fleet, and the manpower inside the ambulances.
      </h3>
      <div className="hospitalintro">
        <img
          className="hospitalintroleft"
          src="https://media.istockphoto.com/id/1310709685/photo/ambulance-car-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Z_Bgg3nlCu8b8ZuIN5ckI4xMd53wlyzVGy8eyfahK2Y="
        />
        <div className="hspitalintroright">
          <h1>Stationed Dedicated Ambulance</h1>
          <p>
            Ambigo manages the end-to-end operations of the ambulance fleet of
            the hospital, this includes managing the call center operations,
            ambulance fleet, and the manpower inside the ambulances.
          </p>
        </div>
      </div>
      <div className="hospitalintro">
        <div className="hspitalintroright">
          <h1>Dedicated Emergency Helpline</h1>
          <p>
            Under this, Ambigo provides hospitals with a dedicated helpline
            number, This helps reduce response times and enables faster patient
            care. Ambigo also manages the ambulance fleet for these hospitals,
            including the manpower.
          </p>
        </div>
        <img
          className="hospitalintroleft"
          src="https://media.istockphoto.com/id/1911521660/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=jZr-CasP4ScJvlIW2V3D3KY5OLYEYPY2PYA_mP7NML8="
        />
      </div>
      <div className="hospitalintro">
        <img
          className="hospitalintroleft"
          src="https://media.istockphoto.com/id/1452316636/photo/paramedics-taking-patient-on-stretcher-from-ambulance-to-hospital.jpg?s=612x612&w=0&k=20&c=4oJ_99AB6LfPR0BjMxVRbdnRaDohEUvt8nUG-HPBJOo="
        />
        <div className="hspitalintroright">
          <h1>Emergency Management System</h1>
          <p>
            Under this service, Ambigo provides dedicated ambulances, trained
            personnel, and in-house technology to enable real-time tracking. Our
            technology includes dedicated applications for drivers, paramedics,
            and call center executives, along with customized dashboards for
            seamless backend monitoring and data sharing. This ensures efficient
            coordination and enhanced patient care.
          </p>
        </div>
      </div>
      <div className="Whycontainer">
        <h2 className="Whyheading">Why Choose Us?</h2>
        <p className="Whydescription">
          At Medulance, patient care and convenience go hand-in-hand. Our
          integrated ambulance transport services were created to assist in
          saving human lives by providing an ultimate network of equipped
          ambulances. By simple location-based mapping, we built a 24/7
          emergency and technology platform that connects the customers and the
          ambulance drivers directly with each other.
        </p>

        {/* Features Section */}
        <div className="Ambufeatures">
          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaBed className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">Patient first policy</p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaClock className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">
              Emergency assistance within 15 minutes or less
            </p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaHeadset className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">24/7 Support</p>
          </div>

          <div className="Ambufeature">
            <div className="Ambuicon-box">
              <FaAmbulance className="Ambuicon" />
            </div>
            <p className="Ambufeature-text">
              Biggest fleet of 7500 ambulances across India
            </p>
          </div>
        </div>
      </div>
      <div className="hosemergency-container">
        <div className="hoscontent-wrapper">
          {/* Left side - Image */}
          <div className="hosimage-section">
            <img
              src="https://media.istockphoto.com/id/175242706/photo/ambulance.webp?a=1&b=1&s=612x612&w=0&k=20&c=isqvf1dv0uRbLFKJ85vetrC5R0jeMBcmImsCreKCuAA="
              alt="Emergency Medical Service"
              className="hosambulance-image"
            />
          </div>

          {/* Right side - Form */}
          <div className="hosform-section">
            <div className="hosform-header">
              <h2>Quick Query</h2>
              <h1>Get in touch with us</h1>
            </div>

            <form onSubmit={handleSubmit} className="hoscontact-form">
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Organization Name"
                required
                className="hosform-input"
              />

              <input
                type="email"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                placeholder="Company Email"
                required
                className="hosform-input"
              />

              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                required
                className="hosform-input"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="hosform-input message-input"
              ></textarea>

              <button type="submit" className="hossubmit-button">
                SUBMIT YOUR QUERY
              </button>
            </form>
          </div>
        </div>
      </div>
      <AppDownload />
    </>
  );
}
export default Hospital