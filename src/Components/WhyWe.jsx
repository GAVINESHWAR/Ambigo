import React from "react"
import './Whywe.css';
import { Link } from "react-router-dom";

const WhyWe = () => {

    const speciality = [
      {
        image:
          "https://x5siwvse0svtj0yw5pfe.ultatel.com/wp-content/uploads/2022/05/illustration-of-247-customer-service-support-1-scaled.jpg",
        Name: "24/7 Support",
        info: "Always available to help you whenever you need us.",
      },
      {
        image:
          "https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Customer-Care-Company3--1--1.jpg",
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
          "https://media.istockphoto.com/id/1314209951/photo/ambulance-car-isolated-on-white.jpg?s=612x612&w=0&k=20&c=eALi7d7APrY-14qJ6iNbgI5VMuImHObOxRFHfNe_M84=",
        Name: "Ambulance Services",
        link: "/basicsupport",
      },
      {
        image:
          "https://media.istockphoto.com/id/1135669700/vector/ambulance-vehicle-flat-emergency-auto.jpg?s=612x612&w=0&k=20&c=VfenuIQ3smc-0Pp49UKtzmxRvHAZhAtenA-m2RlZ0Uc=",
        Name: "Oxygen Ambulance",
        link: "/oxyzenambulanceservice",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Name: "ICU Ventilator Ambulance",
        link: "/ventilatorambulanceservice",
      },
      {
        image:
          "https://media.istockphoto.com/id/1213265415/vector/vector-isometric-hospitalization-with-coronavirus.jpg?s=612x612&w=0&k=20&c=pNbBsN1Z19RZXZtpDcbM1W5S3OOGdNARTQEIvB3aP0M=",
        Name: "Mortuary Van",
        link: "/mortuaryambulanceservice",
      },
      {
        image:
          "https://5.imimg.com/data5/ND/EZ/RK/SELLER-82940438/dead-body-freezer-box-500x500.jpg",
        Name: "Dead Body Freezer Box On Rent",
        link: "/deadboxservice",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZl43Q2w8fj9CmUumG42iDN2qCWrTpdbbPWg&s",
        Name: "Bike Ambulance Services",
        link: "/bikeambulanceservice",
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
        Ambigo provides a comprehensive range of ambulance services designed to
        meet the diverse needs of our customers. From standard ambulance
        services to advanced options like air ambulances, ICU ventilator
        ambulances, and dead body freezer boxes, we cater to every possible
        requirement with utmost care and professionalism. Below, we have
        detailed the major ambulance services offered by Ambigo, along with
        their key features and benefits
      </h2>
      <div className="ambulanceTypes">
        {ambulances.map((item) => {
          return (
            <Link
              to={item.link}
              activeClassName="active"
              onClick={() => (window.location.href = item.link)}
              style={{ listStyle: "none", textDecoration: "none" }}
            >
              <div className="ambulanceType">
                <img src={item.image} />
                <h3>{item.Name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default WhyWe