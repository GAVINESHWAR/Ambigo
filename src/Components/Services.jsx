import React from "react";
import './Services.css';



const Services = () => {
    const servicesDetails = [
      {
        image: "https://gavineshwar.github.io/Medica/assests/emergency.PNG",
        Name: "Emergence Needs",
        info: "We provide our patients/passengers with a single solution for emergency needs.",
      },
      {
        image: "https://gavineshwar.github.io/Medica/assests/ambulaceicon.PNG",
        Name: "Ambulance Service",
        info: "We provide a helpline number for ambulance service, available 24/7 for calls and answers.",
      },
      {
        image: "https://gavineshwar.github.io/Medica/assests/nurse.jpg",
        Name: "Home Health Care",
        info: "We offer 100% assurance of quality home health care for your convenience.",
      },
      {
        image: "https://gavineshwar.github.io/Medica/assests/pharmacy.jpg",
        Name: "Doctor Consultance",
        info: "Access expert medical consultations instantly, connecting you with qualified doctors",
      },
    ];
  return (
    <div className="Services">

    <h1>Our Services</h1>
    <div className="serviceBox">
        {servicesDetails.map((item)=>{
            
            return(
                <div className="serviceItem">
                    <img src= {item.image} alt="service"/>
                    <h1>{item.Name}</h1>
                    <h3>{item.info}</h3>
                </div>
            )
        })}
        </div>
    </div>
  )
}
export default Services