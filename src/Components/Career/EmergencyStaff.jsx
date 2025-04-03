import React, { useState } from "react";
import "./EmergencyStaff.css";

const EmergencyStaffForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    qualifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log(formData);
    // Here you can add your form submission logic, like sending data to a server
  };

  return (
    <div className="emergency-bg">
      <div className="form-wrapper">
        <div className="form-card">
          <h2 className="form-title">Emergency Staff Application</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="form-input"
              name="experience"
              placeholder="Previous Experience"
              value={formData.experience}
              onChange={handleChange}
              required
            ></textarea>
            <input
              className="form-input"
              type="text"
              name="qualifications"
              placeholder="Qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              required
            />
            <button className="form-submit" type="submit">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmergencyStaffForm;
