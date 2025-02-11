import React, { useState } from "react";
import axios from "axios";
import "./AmbulanceBooking.css";

const AmbulanceBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    pickupLocation: "",
    dropLocation: "",
    time: "",
    ambulanceType: "",
    amount: 0,
  });

  const ambulanceTypes = [
    { name: "Oxygen Ambulance", price: 1000 },
    { name: "ICU Ventilator Ambulance", price: 2000 },
    { name: "Mortuary Van Ambulance", price: 1500 },
    { name: "Dead Body Freezer Box On Rent", price: 1200 },
    { name: "Ambulance Services", price: 800 },
    { name: "Bike Ambulance", price: 500 },
    { name: "Auto Ambulance", price: 600 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAmbulanceTypeChange = (type) => {
    const selectedAmbulance = ambulanceTypes.find((a) => a.name === type);
    setFormData({
      ...formData,
      ambulanceType: type,
      amount: selectedAmbulance.price,
    });
  };

  const handlePayment = async () => {
    if (
      !formData.name ||
      !formData.contactNumber ||
      !formData.email ||
      !formData.pickupLocation ||
      !formData.dropLocation ||
      !formData.time ||
      !formData.ambulanceType
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API key
        amount: formData.amount * 100, // Amount in paise
        currency: "INR",
        name: "Ambulance Services",
        description: `Booking for ${formData.ambulanceType}`,
        handler: async (response) => {
          // After successful payment
          await axios.post("/api/sendConfirmation", {
            formData,
            paymentId: response.razorpay_payment_id,
          });
          alert("Booking successful! Confirmation sent via email and SMS.");
          window.location.href = "/"; // Redirect to main website
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.contactNumber,
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error: ", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="booking-form">
      <h1>Ambulance Booking</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Enter contact number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email ID"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Enter pickup location"
          value={formData.pickupLocation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dropLocation"
          placeholder="Enter drop location"
          value={formData.dropLocation}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <div className="ambulance-types">
          {ambulanceTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => handleAmbulanceTypeChange(type.name)}
              className="ambulance-option"
            >
              <img
                src={`/images/${type.name
                  .replace(/ /g, "_")
                  .toLowerCase()}.jpg`}
                alt={type.name}
              />
              <p>{type.name}</p>
            </div>
          ))}
        </div>
        <h3>Total Amount: ₹{formData.amount}</h3>
        <button type="button" onClick={handlePayment} className="book-now-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AmbulanceBooking;
