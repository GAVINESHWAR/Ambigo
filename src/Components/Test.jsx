import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  const {name, mobile} = formData;
  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
    try{
        const response = await fetch(
          "https://v1.nocodeapi.com/hackingavi/google_sheets/VrWxypHHKASYokJc?tabId=Sheet1",
          {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify([[name, mobile, new Date().toLocaleString()], ]), 
          }
        );
        await response.json()
        setFormData({...formData, name: "", mobile: "" });
    }
    catch(err){
        console.log(err);
        alert(err);
    }

  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Simple Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="mobile"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Mobile Number:
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
