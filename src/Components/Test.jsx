import React from "react";
import "./Test.css";

const Test = () => {
  const services = [
    {
      title: "Oxygen Ambulance",
      description:
        "Oxygen Ambulances are equipped with medical oxygen cylinders and essential life-support equipment to assist patients with critical respiratory needs. These ambulances are ideal for patients suffering from conditions such as asthma, COPD, or other breathing difficulties.",
      image: "oxygen-ambulance.jpg", // Replace with actual image path
    },
    {
      title: "ICU Ventilator Ambulance",
      description:
        "Our ICU Ventilator Ambulances are mobile intensive care units designed for critically ill patients. They are equipped with advanced ventilators, cardiac monitors, defibrillators, and other ICU-level medical equipment. Medical professionals accompany the patient to ensure continuous monitoring and care during transportation.",
      image: "icu-ambulance.jpg", // Replace with actual image path
    },
    {
      title: "Mortuary Ambulance",
      description:
        "Mortuary Ambulances are designed to provide a dignified and respectful way to transport the deceased. These ambulances are equipped with refrigeration units to preserve the body during transit and ensure hygiene and safety.",
      image: "mortuary-ambulance.jpg", // Replace with actual image path
    },
    {
      title: "Dead Body Freezer Box on Rent",
      description:
        "We offer Dead Body Freezer Boxes on rent for preserving the deceased at home. These freezer boxes are designed to maintain low temperatures, ensuring that the body is preserved in a hygienic and respectful manner until the final rites are conducted.",
      image: "freezer-box.jpg", // Replace with actual image path
    },
    {
      title: "Auto and Bike Ambulance",
      description:
        "Auto and Bike Ambulances are ideal for navigating through congested areas or reaching remote locations quickly. These ambulances are equipped with basic medical kits and oxygen support, providing first aid and rapid transport for patients in emergencies.",
      image: "bike-ambulance.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="ambulance-services">
      <header className="header">
        <h1>Ambulance Services</h1>
        <p>
          We provide a variety of ambulance services designed to meet different
          medical emergencies. Our professional and compassionate team ensures
          the highest quality care during transportation.
        </p>
      </header>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
