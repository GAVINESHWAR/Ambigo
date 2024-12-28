import React from "react";
import './AppFeatures.css';


const AppFeatures = () => {

    const appfeatures = [
      {
        label: "https://medulance.com/assets/images/one-touch.svg",
        name: "On the go convenience",
        info: "One touch access to medical emergency services.",
      },
      {
        label: "https://medulance.com/assets/images/adv-booking.svg",
        name: "Advance Booking",
        info: "Book ambulances in advance for hassle-free hospital visits.",
      },
      {
        label: "https://medulance.com/assets/images/t-pricing.svg",
        name: "Transparent Pricing",
        info: "Convenient mechanism, with online and cash payment mode.",
      },
      {
        label: "https://medulance.com/assets/images/emergency.svg",
        name: "Emergency Contact",
        info: "Keep your dear ones close with emergency contact option.",
      },
      {
        label: "https://medulance.com/assets/images/tips.svg",
        name: "Tips & advice; First Aid Information",
        info: "Arm yourself with relevant information during any emergency scenario.",
      },
      {
        label: "https://medulance.com/assets/images/e-talk.svg",
        name: "Easy to Talk",
        info: "Seamless communication with ambulance drivers.",
      },
    ];

  return (
    <div className="appFeatures">
      <h1>App Features</h1>
      <p>
        Book ambulances in emergency or in advance. Experience our seamless
        platform.
      </p>
      <div className="Feature-Box">
        {
            appfeatures.map((item)=>{
                return(
                    <div className="feature-Item">
                        <img src = {item.label}/>
                        <h2>{item.name}</h2>
                        <h5>{item.info}</h5> 
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}
export default AppFeatures