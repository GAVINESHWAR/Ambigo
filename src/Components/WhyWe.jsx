import React from "react"
import './Whywe.css';

const WhyWe = () => {

    const speciality = [
      {
        image: "https://gavineshwar.github.io/Medica/assests//service.avif",
        Name: "24/7 Support",
        info: "Always available to help you whenever you need us.",
      },
      {
        image: "https://gavineshwar.github.io/Medica/assests/emergency2.png",
        Name: "Emergency Support",
        info: "Rapid emergency response to ensure your safety.",
      },
      {
        image: "https://gavineshwar.github.io/Medica/assests/priority.jpeg",
        Name: "Prority for Patients",
        info: "Your health and safety are our first priority.",
      },
    ];

    const ambulances = [
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/normal-ambulance.webp",
        Name: "Ambulance Services",
      },
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/oxygen-ambulance-1.webp",
        Name: "Oxygen Ambulance",
      },
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/icu-ambulance-1.webp",
        Name: "ICU Ventilator Ambulance",
      },
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/deadbody-moutuary-ambulance.webp",
        Name: "Mortuary Van Ambulance",
      },
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/deadbody-freezer-ambulance.webp",
        Name: "Dead Body Freezer Box On Rent",
      },
      {
        image:
          "https://www.goaid.in/wp-content/uploads/2023/12/air-ambulance-1.webp",
          Name:"Air Ambulance Services"
      },
    ];

  return (
    <div className="whywe">
      <h1>Why only We</h1>
      <div className="Speciality">
        {speciality.map((item) => {
          return (
            <div className="specialityItem">
              <img src={item.image} />
              <h1>{item.Name}</h1>
              <h3>{item.info}</h3>
            </div>
          );
        })}
      </div>
      <h1>Type of Ambulance</h1>
      <h2>
        Ambigo ambulance provide almost all kinds of ambulance services that
        caters with the all possible need of our customers. These types of
        ambulances covers wide range of types including Normal Ambulance Service
        to Air Ambulance Service, ICU Ventilator Ambulance to Dead body freezer
        box. However, we have listed all the major ambulance service with all
        their related features of each ambulances associated with GoAid
        Ambulance Services below.
      </h2>

      <div className="ambulanceTypes">
            {ambulances.map((item)=>{
                return(
                    <div className="ambulanceType">
                            <img src = {item.image}/>
                            <h3>{item.Name}</h3>
                    </div>
                )
            })}
      </div>
        
    </div>
  );
}
export default WhyWe