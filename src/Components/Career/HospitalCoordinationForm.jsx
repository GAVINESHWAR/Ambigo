import React, { useState } from "react";
import "./HospitalCoordinationForm.css";

const HospitalCoordinatorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualifications: "",
    experience: "",
    notes: "",
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
    <div className="Ambuhospi">
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-title">Hospital Coordinator Application</h2>
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
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="qualifications"
            placeholder="Qualifications"
            value={formData.qualifications}
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
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-input"
            rows="4"
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

export default HospitalCoordinatorForm;
