import React from "react";
import './AppFeatures.css';


const AppFeatures = () => {

    const appfeatures = [
      {
        label:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErOY1SgzUzDisZqEGy8iQ9f7pvGLXDAR-02eLwZq7hQyMU98FlLXSM0YQ4ugxIIjapg8&usqp=CAU",
        name: "Instant Medical Assistance",
        info: "Get immediate access to trusted ambulance services for any medical emergency",
      },
      {
        label:
          "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/cd/6e/34/cd6e3476-01ae-e193-637e-262546a7d2fb/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.png",
        name: "Schedule a Ride",
        info: "Book ambulances in advance to ensure timely transportation for hospital visits.",
      },
      {
        label:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeSNAP4Mje2eUqttrfz0YtmmDnUkfWb6Zmk68ewPe31mgx4d46KFBwaHbXYNp4BWK-hs&usqp=CAU",
        name: "Affordable Pricing",
        info: "Enjoy transparent and competitive rates with flexible payment options.",
      },
      {
        label: "https://cdn-icons-png.freepik.com/512/9037/9037447.png",
        name: "Emergency Helpline",
        info: "Reach out to our 24/7 helpline for quick responses in critical situations.",
      },
      {
        label:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65pVZgtvQjZDIi1oa08U0UIHdhmyIsjgkJfMWuJpW6Vt1yyGRVPTo7w8fuQxY5XhkQ4o&usqp=CAU",
        name: "Health & Safety Guidance",
        info: "Learn vital tips and safety measures to handle emergencies effectively.",
      },
      {
        label:
          "https://img.freepik.com/premium-vector/vector-design-telephony-icon-style_822882-287189.jpg",
        name: "Real-Time Updates",
        info: "Stay informed with live tracking and direct communication with ambulance staff.",
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