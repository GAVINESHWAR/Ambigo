import React ,{ useState } from "react";
import './Enterprise.css';
import AppDownload from "../AppDownload";
import Footer from "../Footer";

const Enterprise = () => {
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
       setFormData({
         organizationName: "",
         companyEmail: "",
         contactNumber: "",
         message: "",
       });
     };
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "10px", marginTop:"30px" }}>
        Ambigo Branded Service for the{" "}
        <span style={{ color: "orange", textDecoration: "underline" }}>
          Enterprise
        </span>
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        we offer our clients a comprehensive, one-stop solution for all their
        healthcare needs and services.
      </p>
      <div className="enterERS">
        <img
          className="ERSleft"
          src=" https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="ERSright">
          <h1>AmbigoClinic</h1>
          <p>
            Stay protected with AmbigoAlert, your dedicated helpline for on-call
            ambulance services. Available 24/7, AmbigoAlert provides instant
            access to ambulance services, teleconsultations, diagnostics, home
            healthcare, and elderly care solutions. Experience seamless
            healthcare access and expert care across 500+ Indian cities,
            ensuring peace of mind for you and your loved ones.
          </p>
        </div>
      </div>
      <div className="enterERS">
        <div className="ERSright">
          <h1>AmbigoERS</h1>
          <p>
            Ensure the well-being of your employees and visitors with
            AmbigoClinic's comprehensive In-House Medical Room service. Our
            expert team establishes a fully-equipped medical facility at your
            premises, managed by trained medical professionals, ensuring
            immediate access to quality healthcare.
          </p>
        </div>
        <img
          className="ERSleft"
          src=" https://media.istockphoto.com/id/1418999467/photo/doctors-comforting-disabled-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=GCZTGW7y3_zsw1rL9III676QppSAv-9BQwtxuHg522c="
        />
      </div>
      <div className="enterERS">
        <img
          className="ERSleft"
          src=" https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="ERSright">
          <h1>AmbigoClinic</h1>
          <p>
            Ensure the well-being of your employees and visitors with
            AmbigoClinic's comprehensive In-House Medical Room service. Our
            expert team sets up a fully-equipped medical facility at your
            premises, managed by skilled medical professionals, ensuring
            immediate access to quality healthcare.
          </p>
        </div>
      </div>
      <div className="enterERS">
        <div className="ERSright">
          <h1>AmbigoFit</h1>
          <p>
            AmbigoFit provides a comprehensive solution for employee safety,
            wellness, and health management. Our services include expert-led
            First-Aid Training, on-site health camps, diagnostic services, and
            customized wellness programs.
          </p>
        </div>
        <img
          className="ERSleft"
          src="https://plus.unsplash.com/premium_photo-1664304032864-8f257f601782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyYW1lZGljYWwlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
      <div className="entercontainer">
        <div className="entercontact-wrapper">
          <div className="enterimage-section">
            <img
              src="https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Emergency Response Team"
            />
          </div>

          <div className="enterform-section">
            <div className="enterform-content">
              <h2>Quick Query</h2>
              <h1>Get in touch with us</h1>

              <form onSubmit={handleSubmit}>
                <div className="enterform-group">
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    placeholder="Organization Name"
                    required
                  />
                </div>

                <div className="enterform-group">
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Company Email"
                    required
                  />
                </div>

                <div className="enterform-group">
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                  />
                </div>

                <div className="enterform-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button type="submit">SUBMIT YOUR QUERY</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AppDownload/>
    </>
  );
}
export default Enterprise