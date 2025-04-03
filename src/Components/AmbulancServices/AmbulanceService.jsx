import React from "react";
import "./AmbulanceService.css";
import WhyWe from "../WhyWe";
import Footer from "../Footer";


const AmbulanceServiceSection = () => {

    const hospitals = [
      {
        name: "KIMS - Saveera Hospital",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGgEhSyUQ7-qVssCleJtkDVHgu7c0Fw4_gA&s",
      },
      {
        name: "Care & Cure Hospitals",
        image:
          "https://content3.jdmagicbox.com/comp/anantapur/u8/9999p8554.8554.191128215450.e7u8/catalogue/care-and-cure-hospitals-old-town-anantapur-hospitals-0eq3tmeg04.jpg",
      },
      {
        name: "Sunray Hospital",
        image: "https://www.sunrayhospital.com/wi/Sunray.png",
      },
      {
        name: "SUNRISE HOSPITAL",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIA3M7eOfzSQcfH9THgAR4YCrbC3cmakeDhw&s",
      },
      {
        name: "Kavety Multispeciality Hospital",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdq_a5N0x8Ceb3TinOMAItCi9Az7-syrrYQ&s",
      },
      {
        name: "Hita multi speciality hospital",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJFzTGaaJV8EcWVyHR3IJjQzq3zbVgumHXg&s",
      },
    ];

    const features = [
      {
        head: "Variety of Ambulance Options",
        info: "Ambigo provides a diverse range of ambulance services, including patient transport, advance life support and basic life support, catering to different medical needs.",
      },
      {
        head: "24/7 Availability",
        info: "Our services are available around the clock, ensuring a swift response in critical situations.",
      },
      {
        head: "Experienced Medical Teams",
        info: "Our ambulances are staffed with highly trained paramedics and medical professionals to provide the best care during transit.",
      },
      {
        head: "State-of-the-Art Medical Equipment",
        info: "Ambigo’s ambulances are equipped with advanced medical equipment to ensure critical care is provided while en route.",
      },
      {
        head: "Empathetic and Compassionate Care",
        info: "We understand the emotional stress of medical emergencies, and our team ensures respectful and compassionate support for both patients and their families.",
      },
      {
        head: "Affordable Pricing",
        info: "Ambigo offers affordable ambulance services without compromising on the quality of healthcare, ensuring that cost doesn’t become a barrier to receiving the care you need.",
      },
    ];
  return (
    <>
      <div className="MStartPage">
        <div className="Sleftsection">
          <h1>
            Book Normal <br />
            Ambulance Services with Ambigo
          </h1>
          <h3>
            Effortless Assistance at Your Fingertips: Easily Book Ambulance
            Services, Including Standard and Emergency Options, through Ambigo's
            Reliable and User-Friendly Platform.
          </h3>
          <div className="ASbtns">
            <button>Download Ambigo</button>
            <button>Call Now:+91 7896547892</button>
          </div>
        </div>
        <div className="Srightsection">
          <img
            src="https://t3.ftcdn.net/jpg/07/95/28/50/360_F_795285009_SaGmdBej9R3fSVvfEssJKA8MrMDvshjh.jpg"
            alt="ambulance image"
          />
        </div>
      </div>
      <div className="SSSection">
        <div className="SSRightSide">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/923/979/non_2x/ambulance-staff-couple-of-doctors-illustration-in-a-flat-style-vector.jpg"
            alt="leftImage"
          />
        </div>
        <div className="SSLeftSide">
          <h1>Affordable and Reliable Ambulance Service</h1>
          <h3>
            Experience Exceptional Care at the Best Price with Ambigo's Ordinary
            Ambulance Service
          </h3>
          <h5>
            In urgent medical situations, Ambigo provides an Ordinary Ambulance
            Service that offers both high-quality care and cost-effective
            solutions. We understand that emergencies demand immediate
            attention, but we also believe that financial concerns shouldn’t
            hinder access to necessary medical services. With Ambigo, you can
            count on a fast response, highly trained medical staff, and safe
            transportation, all while staying within your budget. Our mission is
            to make professional healthcare services accessible to everyone,
            ensuring that cost is never a barrier to receiving the care you
            deserve. Trust Ambigo to be there when you need us most, offering
            dependable ambulance services that combine quality and affordability
            in critical times.
          </h5>
        </div>
      </div>
      <WhyWe />
      <h1 style={{ textAlign: "center" }}>
        Explore Ambigo’s Affordable Ambulance Services Near You
      </h1>
      <div className="offordable">
        <div className="OffLeft">
          <h4>
            Experience swift and budget-friendly medical transportation with
            Ambigo. Our services include a variety of options such as patient transport, advance life support, and basic life support ambulances. With
            affordability at the core, we offer expert care, 24/7 availability,
            and an extensive service area. <br />
            Whether it’s an ICU ventilator ambulance or routine patient
            transport, Ambigo prioritizes your well-being while ensuring
            cost-effectiveness. Trust us to be your dependable partner,
            delivering quality medical assistance whenever and wherever you need
            it—without adding financial strain.
          </h4>
        </div>
        <div className="OffRight">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/666/584/non_2x/doctor-in-front-of-hospital-with-ambulance-vector.jpg"
            alt="offordable"
          />
        </div>
      </div>

      <div className="Ambulance-service">
        <div className="AmbRight">
          <img
            src="https://amandeephospital.org/wp-content/uploads/2022/02/ambulance-ad.jpg"
            alt="ambulance"
          />
        </div>
        <div className="AmbLeft">
          <h1>What is an Ordinary Ambulance ?</h1>
          <p>
            An ordinary ambulance is a standard medical vehicle intended for
            transporting patients who are not in critical condition. Equipped
            with essential medical supplies and operated by paramedics, it plays
            a crucial role in connecting patients needing routine care with
            medical facilities.
          </p>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>24/7 Emergency Ambulance Services</h1>
      <div className="alltimeservice">
        <div className="timeleft">
          <p>
            Discover Ambigo’s comprehensive 24/7 Emergency Ambulance Services.
            During critical moments, we provide swift and dependable medical
            transportation. Our skilled teams and well-equipped vehicles ensure
            rapid response and expert care. With a focus on patient well-being,
            our services cater to various medical requirements, prioritizing
            safety and comfort throughout the journey. Trust Ambigo for reliable
            and compassionate solutions, available round the clock to address
            urgent medical needs. We are committed to ensuring your health and
            safety are our top priorities—anytime, anywhere.
          </p>
        </div>
        <div className="serviceright">
          <img src="https://www.numedhospital.com/wp-content/uploads/2024/07/ambulance-car-isolated-white_708636-716.jpg" />
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>
        We Offered Ambulance Services to Hospitals
      </h1>
      <div className="SHospitals">
        {hospitals.map((item) => {
          return (
            <div className="hospitalItem">
              <img src={item.image} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <h1 style={{ textAlign: "center" }}>
        Features of Ambigo Ambulance Services
      </h1>
      <h4 style={{ textAlign: "center" }}>
        Explore the Wide Range of Features offered by Ambigo Ambulance Services,
        including Patient transport, Advance life support, basic life support
        in Anantapur
      </h4>
      <div className="SSdetails">
        {features.map((item) => {
          return (
            <div className="SSinfo">
              <h2>{item.head}</h2>
              <h4>{item.info}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default AmbulanceServiceSection;
