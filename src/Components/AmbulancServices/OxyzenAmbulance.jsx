import React from "react"
import "./OxyzenAmbulance.css";
import Footer from "../Footer";
import AmbulancePrices from "../AmbulancePrices";
import { NavLink } from "react-router-dom";


const OxyzenAmbulance = () => {

        const oxyzen = [
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojhLGrhmQWqBfT6HEJ32qgnymk2p3BH4_b_cem78Yz7-eL8-2pamcWrYl-D84MkNaWN0&usqp=CAU",
            name: "Live Tracking",
            info: "At Ambigo, we strive to improve patient transportation by ensuring that our ambulance services reach you within 10 minutes of your request. Our ambulances are fully sanitized and maintained to the highest hygiene standards, ensuring your safety at all times.",
          },
          {
            image:
              "https://static.vecteezy.com/system/resources/thumbnails/029/338/731/small/ambulance-car-illustration-emergency-medical-service-vehicle-isolated-on-white-background-vector.jpg",
            name: "Seat Availability on Request",
            info: "We offer seats for attendants as requested, ensuring that family members or caregivers can accompany the patient during transport.",
          },
          {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT474hdt9xHxcs1x6k76urhT_tD7JRh1PZdsuYi8NIaOtwFsuaHEHpv_py9ghTRa77AF0s&usqp=CAU",
            name: "Affordable Ambulance Options",
            info: "Ambigo provides budget-friendly ambulance services with three types of vehicles available for different transportation needs",
          },
        ];

        const features = [
          {
            name: "Ambigo’s Swift Response",
            info: "Rapid arrival within 15 minutes to deliver immediate oxygen support during critical emergencies, ensuring patient health is our priority.",
          },
          {
            name: "Ambigo’s Expert Medical Care",
            info: "Our highly trained medical professionals provide safe and expert oxygen administration throughout the journey.",
          },
          {
            name: "Ambigo’s Continuous Oxygen Supply",
            info: "Advanced oxygen equipment guarantees uninterrupted support, meeting patients' oxygen needs at every moment.",
          },
          {
            name: "Ambigo’s Affordable Rates",
            info: "We offer premium oxygen ambulance services at economical rates, ensuring accessibility for everyone.",
          },
          {
            name: "Ambigo’s Distric Reach",
            info: "With wide coverage across India, including major cities, we bring our oxygen ambulance services to diverse locations.",
          },
          {
            name: "Ambigo’s User-Friendly Booking",
            info: "Effortless booking options through our mobile app or helpline ensure quick and seamless access to our services.",
          },
          {
            name: "Ambigo’s Proven Reliability",
            info: "A dependable track record ensures you can trust Ambigo for exceptional service when it matters most.",
          },
          {
            name: "Ambigo’s Emergency Backup Systems",
            info: "Equipped with robust backup systems, we guarantee a continuous oxygen supply, even in unforeseen situations.",
          },
        ];
  return (
    <>
      <div className="oxystartpage">
        <div className="startleft">
          <h1>
            Book Oxygen <br />
            Ambulance Services
          </h1>
          <p>
            Breathing life into critical moments. Swiftly book oxygen ambulance
            services with Ambigo, ensuring reliable transport and expert care.
            Your health, our priority.
          </p>
          <NavLink to="/login"
          activeClassName = "active"
          onClick={(e)=>{
            window.location.href("/login")
          }}>
            <button>Book Now</button>
          </NavLink>
        </div>
        <div className="startRight">
          <img
            src="https://www.goaid.in/wp-content/uploads/2023/12/Best-Oxygen-Ambulance-Service-Provider.webp"
            alt="oxyzen"
          />
        </div>
      </div>
      <div className="Oxyexperience">
        <div className="oxyright">
          <img src="https://media.istockphoto.com/id/1427662583/photo/experienced-ambulance-doctor-preparing-the-medical-equipment-for-oxygen-therapy.jpg?s=612x612&w=0&k=20&c=RK2CCquRqjcJw2Qo4KcXqUJPDcpRbjHorzsmlSUbemA=" />
        </div>
        <div className="oxyleft">
          <h1>Experience Our Best Price Oxygen Ambulance Service</h1>
          <p>
            At Ambigo, we believe that quality healthcare should be accessible
            to everyone, without the burden of high costs. That's why our Best
            Price Oxygen Ambulance Service is designed to offer top-tier medical
            transportation that doesn’t strain your budget. When emergencies
            arise and oxygen support is critical, our dedicated team is ready to
            respond swiftly. We understand the urgency and sensitivity of such
            situations, which is why our services are not only fast and
            efficient but also affordable. We take pride in providing the
            best-priced oxygen ambulance services without compromising the
            quality of care. Our highly trained medical professionals and
            state-of-the-art vehicles ensure a smooth and safe journey, focusing
            on the well-being of patients every step of the way. Whether you're
            in Ananthapur, Dharmavaram, Tadipatri, Penukondala, Puttapatri, or
            kalyana Durgam, Ambigo's nationwide reach ensures that our Best
            Price Oxygen Ambulance Service is always accessible when you need it
            the most. Choose Ambigo for reliable, affordable, and expertly
            managed oxygen ambulance services. Your health and peace of mind are
            our top priorities, and we're committed to delivering both, without
            breaking the bank.
          </p>
        </div>
      </div>
      <div className="whyoxy">
        <h1>Why Choose Ambigo for Oxygen Ambulance</h1>
        <p>
          Ambigo is india’s leading company in providing trustworthy Ambulance
          services. We are now available in Anantapur, Tadipatri, Penukodala, Puttapatri and
          Dharmavaram.
        </p>
        <div className="whythisoxy">
          {oxyzen.map((item) => {
            return (
              <div className="oxyitem">
                <img src={item.image} />
                <h6>{item.name}</h6>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>
        Affordable oxygen ambulance Service near me
      </h1>
      <div className="oxynearme">
        <p>
          When every second matters, Ambigo’s Reliable Oxygen Ambulance Service
          is just a call away. We recognize the critical nature of medical
          emergencies and the financial challenges they may bring. At Ambigo, we
          are dedicated to delivering top-quality medical transportation at
          affordable rates, ensuring that you have access to the care you
          deserve without compromise. With Ambigo, you no longer have to choose
          between quality healthcare and financial constraints. We put your
          health and safety first, providing compassionate and cost-effective
          solutions. Whether you’re in Anantapur, Tadipatri, penukodla and
          Dharmavaram, our dependable oxygen ambulance service is always nearby.
          At Ambigo, we believe everyone deserves access to exceptional
          healthcare, regardless of location or financial situation. Choose
          Ambigo, where care meets affordability.
        </p>
        <img src="https://media.istockphoto.com/id/1022622706/photo/inside-of-an-ambulance-for-the-hospital.jpg?s=612x612&w=0&k=20&c=N8FCBxmLpb9IjkVE4bMMkDfhQPewHd7RICkgBHuxo8M=" />
      </div>
      <div className="Whatisoxy">
        <img src="https://cdn.create.vista.com/api/media/small/385683364/stock-vector-paramedic-emergency-cartoon-composition" />
        <div className="oxycontent">
          <h2>What is Oxyzen Ambulance</h2>
          <p>
            An oxygen ambulance service is a specialized medical transportation
            offering designed to provide swift and safe transport for
            individuals requiring oxygen therapy. Equipped with necessary oxygen
            supplies and medical personnel, this service ensures patients
            receive continuous oxygen support during transit, addressing
            critical medical needs in a timely and secure manner.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        24/7 Emergency Oxygen Ambulance Services
      </h1>
      <div className="oxy247Amb">
        <p>
          Emergencies come without warning, and at Ambigo, we are committed to
          providing unwavering support. Our 24/7 Emergency Oxygen Ambulance
          Services ensure that patients in critical need receive immediate
          oxygen therapy and expert medical attention, any time of the day or
          night. With swift response times, skilled medical professionals, and
          state-of-the-art equipment, we are your trusted partner in urgent
          medical situations. Whether it’s respiratory distress, trauma, or any
          other medical emergency, trust Ambigo to stand by your side,
          delivering exceptional care and support whenever you need it most.
          Your health and well-being are our top priorities, every hour of every
          day.
        </p>
        <img src="https://www.cityambulanceservice.in/wp-content/uploads/2024/09/Ambuance-Hspital-1024x682.jpg" />
      </div>
      <h1 style={{ textAlign: "center", margin: "10px 0 10px 0 " }}>
        Features of Ambigo Oxygen Ambulance Services
      </h1>
      <p style={{ textAlign: "center", margin: "10px 0 10px 0" }}>
        Discover Exceptional Oxygen Ambulance Features: Swift Response, Expert
        Care, Distric Coverage. Your Trusted Partner for Critical Medical
        Transport.
      </p>

      <div className="oxyfeatures">
        {features.map((item) => {
          return (
            <div className="oxyfeatureitem">
              <h5>{item.name}</h5>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default OxyzenAmbulance