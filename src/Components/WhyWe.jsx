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
        image:
          "https://media.istockphoto.com/id/1299025648/vector/doctor-in-mask-consulting-female-patient-physycian-sitting-at-the-desk-with-monitor-family.jpg?s=612x612&w=0&k=20&c=9ZjUoTOYGNyGRjw9DSLdYiIN4_VnWRw5oiYYJyU5e6s=",
        Name: "Prority for Patients",
        info: "Your health and safety are our first priority.",
      },
    ];

    const ambulances = [
      {
        image:
          "https://media.istockphoto.com/id/2110772135/vector/medical-vehicle-ambulance-car-or-emergency-service-vector-illustration-for-pick-up-patient.jpg?s=612x612&w=0&k=20&c=ZMNnm8KIQQLpCYLcmZgq_q9IlVYWNIdaZR2scUgyrFY=",
        Name: "Patient Transport",
        link: "/basicsupport",
      },
      {
        image:
          "https://media.istockphoto.com/id/1371069496/vector/ambulance-set.jpg?s=612x612&w=0&k=20&c=Ldxgvxc62n13ED_1cWmi7YrwoSYCx0wwDJJP0HtmCcY=",
        Name: "Basic life Support",
        link: "/oxyzenambulanceservice",
      },
      {
        image:
          "https://media.istockphoto.com/id/1323660896/vector/paramedics-assist-a-patient-in-an-ambulance.jpg?s=612x612&w=0&k=20&c=z4mLxdeIe2oPrxCuLrUTpCt4rDoRnK4jfOZbDamVaNw=",
        Name: "Advance life support",
        link: "/ventilatorambulanceservice",
      },
      // {
      //   image:
      //     "https://static.vecteezy.com/system/resources/previews/001/818/427/non_2x/ambulance-paramedic-car-side-view-design-free-vector.jpg",
      //   Name: "Mortuary Van",
      //   link: "/mortuaryambulanceservice",
      // },
      {
        image: "/CarAmbo.png",
        Name: "Patient Transport Car/Auto",
        link: "/carpatienttransport",
      },
      // {
      //   image:
      //     "https://mir-s3-cdn-cf.behance.net/projects/404/0d6d6532115661.Y3JvcCwxMzk1LDEwODksMCwxMTU.png",
      //   Name: "Bike Ambulance Services",
      //   link: "/bikeambulanceservice",
      // },
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
        services to advanced options like patient transport, advance transport and basic life support, we cater to every possible
        requirement with utmost care and professionalism. Below, we have
        detailed the major ambulance services offered by Ambigo, along with
        their key features and benefits
      </h2>
      <div className="ambulance-container">
        {ambulances.map((item) => {
          return (
            <Link
              to={item.link}
              activeClassName="active"
              className="ambulance-card"
              onClick={() => (window.location.href = item.link)}
              style={{ listStyle: "none", textDecoration: "none" }}
            >
              <div className="">
                <img src={item.image} className="ambulance-image" />
                <h3 className="ambulance-name">{item.Name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default WhyWe