import React, { useState } from "react";
import "./AmDriverPost.css";

const AmbulanceDriverForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    license: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="ambuDrive">
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-title">Ambulance Driver Application</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="license"
            placeholder="License Number"
            value={formData.license}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="number"
            name="experience"
            placeholder="Experience (in years)"
            value={formData.experience}
            onChange={handleChange}
            className="form-input"
            required
          />
          <button type="submit" className="form-submit">
            Submit Application
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AmbulanceDriverForm;
